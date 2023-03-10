import React from "react";
import styled from "styled-components";

export default function HomePage({
  data,
  setData,
  clicked,
  setClicked,
  navigate,
  
  setIndexNum,
  indexNum
 
}: {
  data: any;
  setData: any;
  clicked: any;
  setClicked: any;
  navigate: any;
  
  setIndexNum: any;
  indexNum: any;
  
}) {
  return (
    <Div>
      <ButtonDiv>
        <Button
          onClick={() => {
            setClicked(!clicked);
            console.log(clicked)
          }}
        >
          Friends
        </Button>
      </ButtonDiv>
      <MainDiv >
      

{data && data.results.map((result: any, index : number) => (
  <UserDiv key={index}>
    <Img src={result.picture.thumbnail} alt="" />
    <Pdiv onClick={() => {
      navigate("friend")
      setIndexNum(index)}}>
        
      
      <P>{result.name.first}</P>
      <P>{result.name.last}</P>
    </Pdiv>
  </UserDiv>
))}


      </MainDiv>
    </Div>
  );
}

const Div = styled.div`
margin-top: 200px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
`
const ButtonDiv = styled.div``;

const Pdiv = styled.button`
  border: none;
  background: transparent;
  display: flex;
  flex-direction: row;
  margin-top: 15px;
  transition: all 0.3s ease;
  cursor: pointer;
  &:hover {
    color: cyan;
  }
`;
const P = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin-left: 15px;
`;

const Img = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  margin-top: 15px;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: 1px solid black;
  border-radius: 20px;
  margin-right: 50px;
  background: transparent;
  font-weight: bold;
  font-size: 20px;
  transition: all 0.3s ease;
  &:hover {
    color: cyan;
  }
`;
const MainDiv = styled.div<any>`
  height: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background: transparent;
  /* justify-content: space-between; */
  width: 800px;
  align-items: flex-start;
`;

const UserDiv = styled.div`
  width: 240px;
  height: 150px;
  border: 2px solid black;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 25px;
`;
