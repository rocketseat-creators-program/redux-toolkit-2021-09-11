import React from "react";
import * as Styled from "./styles";
import { usePalette } from "react-palette";
import { TypeCard } from "../TypeCard/index";
import { Character } from "../../types/charactersTypes";

interface Props {
  character: Character;
}

const BG =
  "https://i5.walmartimages.com/asr/bcc4085e-c311-4886-a7a4-aa58127883d7.5958f8a36f96aa4c08dbc4a8a580e57c.png?odnWidth=612&odnHeight=612&odnBg=ffffff";

export const Card: React.FC<Props> = ({ character }) => {
  const { data, loading } = usePalette(`${character.image}`);

  if (loading) return <div>Loading...</div>;

  return (
    <Styled.Container style={{ backgroundColor: data?.muted }}>
      <Styled.ID>#{character.id}</Styled.ID>
      <Styled.Name>{character.name}</Styled.Name>
      <Styled.LOGO src={BG} />
      <Styled.Character src={character.image} />
      <Styled.Types>
        <TypeCard type={`${character.status}`} />
        <TypeCard type={`${character.species}`} />
      </Styled.Types>
    </Styled.Container>
  );
};
