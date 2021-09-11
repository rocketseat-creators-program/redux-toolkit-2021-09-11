import React from "react";

import * as Styled from "./styles";

interface Props {
  style: any;
  placeholder: string;
  onChange: (e: any) => void;
}

const SearchBar: React.FC<Props> = ({ children, style, ...rest }) => (
  <Styled.Container style={style}>
    <Styled.Input {...rest} />
  </Styled.Container>
);

export default SearchBar;
