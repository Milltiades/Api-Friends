import React from "react";
import styled from "styled-components";

export default function HomePage({
  data,
  setData,
  clicked,
  setClicked,
  navigate,
  setFriendNum
}: {
  data: any;
  setData: any;
  clicked: any;
  setClicked: any;
  navigate: any
  setFriendNum: any
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
        <UserDiv>
          <Img src={data && data.results[0].picture.thumbnail} alt="" />
          <Pdiv onClick={() => {
            navigate("friend")
            setFriendNum(0)}}>
            <P>{data && data.results[0].name.first}</P>
            <P>{data && data.results[0].name.last}</P>
          </Pdiv>
        </UserDiv>
        <UserDiv>
          <Img src={data && data.results[1].picture.thumbnail} alt="" />
          <Pdiv onClick={() => {
            navigate("friend")
            setFriendNum(1)}}>
            
            <P>{data && data.results[1].name.first}</P>
            <P>{data && data.results[1].name.last}</P>
          </Pdiv>
        </UserDiv>
        <UserDiv>
          <Img src={data && data.results[2].picture.thumbnail} alt="" />
          <Pdiv onClick={() => {
            navigate("friend")
            setFriendNum(2)}}>
            
            <P>{data && data.results[2].name.first}</P>
            <P>{data && data.results[2].name.last}</P>
          </Pdiv>
        </UserDiv>
        <UserDiv>
          <Img src={data && data.results[3].picture.thumbnail} alt="" />
          <Pdiv onClick={() => {
            navigate("friend")
            setFriendNum(3)}}>
            
            <P>{data && data.results[3].name.first}</P>
            <P>{data && data.results[3].name.last}</P>
          </Pdiv>
        </UserDiv>
        <UserDiv>
          <Img src={data && data.results[4].picture.thumbnail} alt="" />
          <Pdiv onClick={() => {
            navigate("friend")
            setFriendNum(4)}}>
            
            <P>{data && data.results[4].name.first}</P>
            <P>{data && data.results[4].name.last}</P>
          </Pdiv>
        </UserDiv>
        <UserDiv>
          <Img src={data && data.results[5].picture.thumbnail} alt="" />
          <Pdiv onClick={() => {
            navigate("friend")
            setFriendNum(5)}}>
            
            <P>{data && data.results[5].name.first}</P>
            <P>{data && data.results[5].name.last}</P>
          </Pdiv>
        </UserDiv>
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
  justify-content: space-between;
  width: 800px;
`;

const UserDiv = styled.div`
  width: 240px;
  height: 150px;
  border: 2px solid black;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
