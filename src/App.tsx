import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import axios from "axios";
import styled, { createGlobalStyle } from "styled-components";
import { Route, Routes, useNavigate } from "react-router-dom";
import FriendComponent from "./friendComponent";
import HomePage from "./homePage";

function App() {
  const [data, setData] = useState<any>("");
  const [clicked, setClicked] = useState<boolean>(false);
  
  const [indexNum , setIndexNum] = useState<string>('')

  const navigate = useNavigate();

  const getData = async () => {
    await axios
      .get("https://randomuser.me/api/?results=20")
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));

    
  };

  useEffect(() => {
    getData();
  }, [clicked]);

 

 

  return (
    <Div
      className="App"
      >
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<HomePage data={data} setData={setData} clicked={clicked} setClicked={setClicked} navigate={navigate}  indexNum={indexNum} setIndexNum={setIndexNum}/>}/>
        <Route path="friend" element={<FriendComponent data={data} indexNum={indexNum} />} />
      </Routes>
    </Div>
  );
}

export default App;


const Div = styled.div`
  width: 100%;
`

const GlobalStyles = createGlobalStyle`
  :root {
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
}
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  
}
body {
width: 100%;
  min-width: 320px;
  min-height: 100vh;
}
button {
  cursor: pointer;
}
`;





