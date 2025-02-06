import { ActivityIndicator, SafeAreaView, ScrollView } from "react-native";

import { Breeding } from "@/components/pokemon/Breeding";
import { Error } from "@/components/common/Error";
import { Header } from "@/components/pokemon/Header";
import { MainInfo } from "@/components/pokemon/MainInfo";
import { Moves } from "@/components/pokemon/Moves";
import React from "react";
import { useEffect } from "react";
import { useLocalSearchParams } from "expo-router";
import { usePokemon } from "@/hooks/usePokemon";

export const Pokemon = () => {
  const params = useLocalSearchParams();
  console.log(params);

  const { isPokemonLoading, fetchPokemon, pokemon, pokemonError } =
    usePokemon();

  const getData = () => {
    fetchPokemon(Array.isArray(params.name) ? params.name[0] : params.name);
  };

  useEffect(() => {
    getData();
  }, []);

  if (!pokemon) {
    return null;
  }

  const { height, weight, moves } = pokemon;

  return (
    <SafeAreaView>
      <Header />
      <ScrollView>
        {isPokemonLoading ? (
          <ActivityIndicator animating={true} />
        ) : (
          <>
            <MainInfo pokemon={pokemon} />
            <Breeding height={height} weight={weight} />
            <Moves moves={moves} />
          </>
        )}
      </ScrollView>

      <Error visible={pokemonError} handleDismiss={getData} />
    </SafeAreaView>
  );
};
