import { useMemo, useState } from "react";

import { EmptyList } from "@/components/list/EmptyList";
import { Error } from "@/components/common/Error";
import { FlatList } from "react-native";
import { Header } from "@/components/list/Header";
import { PokemonCard } from "@/components/list/PokemonCard";
import { SafeAreaView } from "react-native-safe-area-context";
import { Spinner } from "@/components/common/Spinner";
import { usePokemon } from "@/hooks/usePokemon";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { getPokemonsList } from "@/api/getPokemons";
import { Pokemon } from "@/types/pokemon";
import { getPokemon } from "@/api/getPokemon";

const LIMIT = 20;

export const List = () => {
  const [pokemonToSearch, setPokemonToSearch] = useState<string>("");

  const { data, fetchNextPage, isError, isPending } = useInfiniteQuery({
    queryKey: ["pokemons"],
    queryFn: ({ pageParam }) => getPokemonsList(pageParam, LIMIT),
    getNextPageParam: (lastPage) => lastPage.nextOffset,
    initialPageParam: 0,
  });

  const {
    isPending: isPokemonLoading,
    data: pokemon,
    refetch,
  } = useQuery({
    queryKey: ["pokemon", pokemonToSearch],
    queryFn: () => getPokemon(pokemonToSearch),
    enabled: true,
  });

  const handleSearchSubmit = (name: string) => {
    if (name) {
      setPokemonToSearch(name);
      refetch();
    } else {
      setPokemonToSearch("");
    }
  };

  const listData = useMemo(() => {
    if (pokemonToSearch) {
      return !isPokemonLoading && pokemon ? [pokemon] : [];
    } else {
      return data
        ? data.pages.reduce(
            (allPokemons: Pokemon[], page) => [
              ...allPokemons,
              ...page.pokemons,
            ],
            []
          )
        : [];
    }
  }, [data, pokemon, isPokemonLoading]);

  const isDataLoading = useMemo(
    () => isPokemonLoading || isPending,
    [isPending, isPokemonLoading]
  );

  const handleEndReach = () => {
    if (!pokemonToSearch && !isDataLoading) {
      fetchNextPage();
    }
  };

  return (
    <SafeAreaView>
      <FlatList
        data={listData}
        renderItem={({ item }) => <PokemonCard {...item} />}
        onEndReached={handleEndReach}
        numColumns={2}
        ListEmptyComponent={isDataLoading ? <Spinner /> : <EmptyList />}
        ListHeaderComponent={
          <Header
            handleSearchSubmit={handleSearchSubmit}
            isSearchSubmited={!!pokemonToSearch}
          />
        }
      />
      <Error visible={isError} />
    </SafeAreaView>
  );
};
