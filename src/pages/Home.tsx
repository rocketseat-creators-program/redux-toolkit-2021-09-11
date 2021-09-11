import React from "react";
import SearchBar from "../components/SearchBar/index";
import * as Styled from "./style";

export function Home() {
  return (
    <Styled.Container>
      <Styled.Title>Rick and Morty</Styled.Title>
      <Styled.Description>
        Rick and Morty Finder book check here the status of your favorite
        character
      </Styled.Description>
      <SearchBar
        style={{ marginTop: 25 }}
        placeholder="Search here ?"
        onChange={() => null}
      />
      <Styled.List>
        {/* {data.results.map((character: any) => (<Card key={character.id} character={character} />)} */}
      </Styled.List>
    </Styled.Container>
  );
}
