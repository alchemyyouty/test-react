import React from "react";
import ColorFullMessage from "./components/ColorfulMessage";

const App = () => {
  const onClickbutton = () => alert();
  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <ColorFullMessage color="blue">お元気ですか？</ColorFullMessage>
      <ColorFullMessage color="pink">元気です</ColorFullMessage>
      <button onClick={onClickbutton}>ボタ</button>
    </>
  );
};

export default App;
