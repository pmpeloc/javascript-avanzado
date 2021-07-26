import styled from "../styled-components/index.js";
import { component as Component } from "../react/index.js";

const TitleStyled = styled.h1`
  color: orange;
  font-family: system-ui;
  font-size: 50px;
  text-shadow: 2px 2px 0 black;
  line-height: 100vh;
`;

const props = {
  message: "No Te Rindas",
  name: "Misael",
};

const Title = Component`<marquee> ${"message"} ${"name"}</marquee>`(props);

export default TitleStyled(Title);
