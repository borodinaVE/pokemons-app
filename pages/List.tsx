import { useMemo, useState } from "react";

import { EmptyList } from "@/components/list/EmptyList";
import { Error } from "@/components/common/Error";
import { FlatList } from "react-native";
import { Header } from "@/components/list/Header";
import { PokemonCard } from "@/components/list/PokemonCard";
import { SafeAreaView } from "react-native-safe-area-context";
import { Spinner } from "@/components/common/Spinner";
import { usePokemon } from "@/hooks/usePokemon";
import { usePokemonsList } from "@/hooks/usePokemonsList";

export const List = () => {
  const { fetchPokemons, pokemons, isLoading, error } = usePokemonsList();
  const { isPokemonLoading, fetchPokemon, pokemon } = usePokemon();

  const [showSearchResult, setShowSearchResult] = useState(false);

  const handleSearchSubmit = (name: string) => {
    if (name) {
      setShowSearchResult(true);
      fetchPokemon(name);
    } else {
      setShowSearchResult(false);
    }
  };

  const listData = useMemo(() => {
    if (showSearchResult) {
      return !isPokemonLoading && pokemon ? [pokemon] : [];
    } else {
      return pokemons;
    }
  }, [pokemons, pokemon, isPokemonLoading, showSearchResult]);

  const isDataLoading = useMemo(
    () => isPokemonLoading || isLoading,
    [isLoading, isPokemonLoading]
  );

  const handleEndReach = () => {
    if (!showSearchResult && !isDataLoading) {
      fetchPokemons();
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
            isSearchSubmited={showSearchResult}
          />
        }
      />
      <Error visible={error} />
    </SafeAreaView>
  );
};
