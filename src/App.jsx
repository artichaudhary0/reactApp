import Counter from "./components/Counter";
import ChangeHeading from "./components/ChangeHeading";

function App2() {
  return (
    <>
      <ChangeHeading />
      <Counter />

      {/*onclick == html , camel case => onClick   ,   fun() => html*/}

      {/* <button onClick={change}>Change heading</button> */}

      {/* <button onClick={() => change()}>Change heading</button> */}
      {/* <button
        onClick={() => {
          setHeading("My paragraph");
          // change();
          // heading = "Paragraph";
        }}
      >
        Change heading
      </button> */}
    </>
  );
}

export default App2;
