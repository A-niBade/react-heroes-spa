import { HeroList } from "../components";

import "./styles/styles.css";

export const MarvelPage = () => {
  return (
    <>
      <hr />
      <h1>Marvel Comics</h1>
      <hr />

      <HeroList publisher="Marvel Comics" />
    </>
  );
};
