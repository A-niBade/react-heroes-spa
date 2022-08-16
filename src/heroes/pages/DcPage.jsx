import { HeroList } from "../components";

import "./styles/styles.css";

export const DcPage = () => {
  return (
    <>
      <div className="container">
        <hr />
        <h1>DC Comics</h1>
        <hr />
        <HeroList publisher="DC Comics" />
      </div>
    </>
  );
};
