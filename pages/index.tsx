import type { NextPage } from "next";
import { Button } from "../components/Button";
import { Container } from "../components/Container";
import { Greet } from "../components/Greet";
import { Heading } from "../components/Heading";
import { Input } from "../components/Input";
import { Person } from "../components/Person";
import { PersonList } from "../components/PersonList";
import { Counter } from "../components/state/Counter";
import { LoggedIn } from "../components/state/LoggedIn";
import { Status } from "../components/Status";

const Home: NextPage = () => {
  //#region
  // const personName = {
  //   first: "Bruce",
  //   last: "Wayne",
  // };

  // const nameList = [
  //   { first: "Bruce", last: "Wayne" },
  //   { first: "Simon-Olivier", last: "Desautels" },
  //   { first: "Francis", last: "Desautels" }
  // ];
  //#endregion

  //   <Button
  //   handleClick={(event,id) => {
  //     console.log("Button clicked", event, id);
  //   }}
  // />

  return (
    <>
      <Counter />
    </>
  );
};

export default Home;
