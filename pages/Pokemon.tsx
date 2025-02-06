import { ActivityIndicator, SafeAreaView, ScrollView } from "react-native";

import { Breeding } from "@/components/pokemon/Breeding";
import { Error } from "@/components/common/Error";
import { Header } from "@/components/pokemon/Header";
import { MainInfo } from "@/components/pokemon/MainInfo";
import { Moves } from "@/components/pokemon/Moves";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import { useQuery } from "@tanstack/react-query";
import { getPokemon } from "@/api/getPokemon";

export const Pokemon = () => {
  const { name } = useLocalSearchParams();

  const { isPending, isError, data, refetch } = useQuery({
    queryKey: ["pokemon", name],
    queryFn: () => getPokemon(Array.isArray(name) ? name[0] : name),
  });

  if (!isPending && !data) {
    return null;
  }

  const { height, weight, moves } = data || {};

  return (
    <SafeAreaView>
      <Header />
      <ScrollView>
        {isPending || !data ? (
          <ActivityIndicator animating={true} />
        ) : (
          <>
            <MainInfo pokemon={data} />
            <Breeding height={height ?? 0} weight={weight ?? 0} />
            <Moves moves={moves ?? []} />
          </>
        )}
      </ScrollView>

      <Error visible={isError} handleDismiss={refetch} />
    </SafeAreaView>
  );
};
