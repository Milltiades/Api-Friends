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
  const [friendNum, setFriendNum] = useState<number>(-1);

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

  console.log(friendNum);

  return (
    <Div
      className="App"
      >
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<HomePage data={data} setData={setData} clicked={clicked} setClicked={setClicked} navigate={navigate} setFriendNum={setFriendNum}/>}/>
        <Route path="friend" element={<FriendComponent data={data} friendNum={friendNum} />} />
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
  overflow: hidden;
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

// const GlobalStyles = createGlobalStyle`
//   html, body, div, span, applet, object, iframe,
// h1, h2, h3, h4, h5, h6, p, blockquote, pre,
// a, abbr, acronym, address, big, cite, code,
// del, dfn, em, img, ins, kbd, q, s, samp,
// small, strike, strong, sub, sup, tt, var,
// b, u, i, center,
// dl, dt, dd, ol, ul, li,
// fieldset, form, label, legend,
// table, caption, tbody, tfoot, thead, tr, th, td,
// article, aside, canvas, details, embed, 
// figure, figcaption, footer, header, hgroup, 
// menu, nav, output, ruby, section, summary,
// time, mark, audio, video {
// 	margin: 0;
// 	padding: 0;
// 	border: 0;
// 	font-size: 100%;
// 	font: inherit;
// 	vertical-align: baseline;
// }
// /* HTML5 display-role reset for older browsers */
// article, aside, details, figcaption, figure, 
// footer, header, hgroup, menu, nav, section {
// 	display: block;
// }
// body {
// 	line-height: 1;
// }
// ol, ul {
// 	list-style: none;
// }
// blockquote, q {
// 	quotes: none;
// }
// blockquote:before, blockquote:after,
// q:before, q:after {
// 	content: '';
// 	content: none;
// }
// table {
// 	border-collapse: collapse;
// 	border-spacing: 0;
// }
// a {
//   text-decoration: none;
// }
// * {
//   box-sizing: border-box;
// }

// textarea {
//   resize: none;
// }
// `



