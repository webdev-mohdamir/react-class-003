import Card from "./components/Card";
import CardTwo from "./components/CardTwo";

const App = () => {
  return (
    <>
      {/* <Card heading="This is heading" author="Komal" />
      <Card heading="This is heading 2" /> */}
      <CardTwo heading={"Heading one"} author={"Komal Das"} currency="UTH" />
    </>
  );
};

export default App;
