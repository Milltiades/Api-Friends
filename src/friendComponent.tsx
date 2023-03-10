import React, { useState } from "react";
import styled from "styled-components";

export default function FriendComponent({ data, friendNum }: { data: any, friendNum : any }) {
  

    const [isClicked, setIsClicked] = useState<boolean>(false);
    const [isClickedSecurity, setIsClickedSecurity] = useState<boolean>(false);

  return (
    <Div>
      <HeaderDiv />

      <Line />
      <Line />

     {friendNum == 0 ? <DivMain>
        <Img src={data && data.results[0].picture.large} alt="" />
        <Content>
          <H1>
            {data && data.results[0].name.first}{" "}
            {data && data.results[0].name.last}
          </H1>
          <DivBut>
            <Button
            onClick={() => {
                setIsClicked(false)
                setIsClickedSecurity(false)}}
            style={{padding: "5px 30px 5px 0px"}}>
              <Box className="box" />
              Messages
            </Button>
            <Button 
           
            onClick={() => setIsClickedSecurity(!isClickedSecurity)} 
            style={{
                 color: isClickedSecurity ?  "#6997f1" : "black",
                 background: isClickedSecurity ? "#dbf1fe" : "transparent"
        }}
            >Contacts</Button>
            <Button onClick={() => {
                setIsClicked(false)
                setIsClickedSecurity(false)}}>About Me</Button>
          </DivBut>

          <SecurityAbout style={{display: isClickedSecurity ? "flex" : "none"}}>
            <SecurityBTN onClick={() => setIsClicked(false)}>Security</SecurityBTN>
            <SecurityBTN onClick={() => setIsClicked(!isClicked)}>About Me</SecurityBTN>
          </SecurityAbout>
          <UnderLine style={{display: isClickedSecurity ? "flex" : "none"}}/>
          <UnderDiv style={{display: isClicked ? "block" : "none"}}>
            <UnderDivContent>
                <UnderP>Phone</UnderP>
                <UnderP2>+{data && data.results[0].phone}</UnderP2>
            </UnderDivContent>
            <UnderDivContent>
                <UnderP>Adress</UnderP>
                <UnderP2>{data && data.results[0].location.street.name}    {data && data.results[0].location.street.number} str</UnderP2>
            </UnderDivContent>
            <UnderDivContent>
                <UnderP>Email</UnderP>
                <UnderP2>{data && data.results[0].email}</UnderP2>
            </UnderDivContent>
          </UnderDiv>
        </Content>
        
      </DivMain> : null}

      {friendNum == 1 ? <DivMain>
        <Img src={data && data.results[1].picture.large} alt="" />
        <Content>
          <H1>
            {data && data.results[1].name.first}{" "}
            {data && data.results[1].name.last}
          </H1>
          <DivBut>
            <Button
            onClick={() => {
                setIsClicked(false)
                setIsClickedSecurity(false)}}
            style={{padding: "5px 30px 5px 0px"}}>
              <Box className="box" />
              Messages
            </Button>
            <Button 
           
            onClick={() => setIsClickedSecurity(!isClickedSecurity)} 
            style={{
                 color: isClickedSecurity ?  "#6997f1" : "black",
                 background: isClickedSecurity ? "#dbf1fe" : "transparent"
        }}
            >Contacts</Button>
            <Button onClick={() => {
                setIsClicked(false)
                setIsClickedSecurity(false)}}>About Me</Button>
          </DivBut>

          <SecurityAbout style={{display: isClickedSecurity ? "flex" : "none"}}>
            <SecurityBTN onClick={() => setIsClicked(false)}>Security</SecurityBTN>
            <SecurityBTN onClick={() => setIsClicked(!isClicked)}>About Me</SecurityBTN>
          </SecurityAbout>
          <UnderLine style={{display: isClickedSecurity ? "flex" : "none"}}/>
          <UnderDiv style={{display: isClicked ? "block" : "none"}}>
            <UnderDivContent>
                <UnderP>Phone</UnderP>
                <UnderP2>+{data && data.results[1].phone}</UnderP2>
            </UnderDivContent>
            <UnderDivContent>
                <UnderP>Adress</UnderP>
                <UnderP2>{data && data.results[1].location.street.name}    {data && data.results[1].location.street.number} str</UnderP2>
            </UnderDivContent>
            <UnderDivContent>
                <UnderP>Email</UnderP>
                <UnderP2>{data && data.results[1].email}</UnderP2>
            </UnderDivContent>
          </UnderDiv>
        </Content>
        
      </DivMain> : null}

      {friendNum == 2 ? <DivMain>
        <Img src={data && data.results[2].picture.large} alt="" />
        <Content>
          <H1>
            {data && data.results[2].name.first}{" "}
            {data && data.results[2].name.last}
          </H1>
          <DivBut>
            <Button
            onClick={() => {
                setIsClicked(false)
                setIsClickedSecurity(false)}}
            style={{padding: "5px 30px 5px 0px"}}>
              <Box className="box" />
              Messages
            </Button>
            <Button 
           
            onClick={() => setIsClickedSecurity(!isClickedSecurity)} 
            style={{
                 color: isClickedSecurity ?  "#6997f1" : "black",
                 background: isClickedSecurity ? "#dbf1fe" : "transparent"
        }}
            >Contacts</Button>
            <Button onClick={() => {
                setIsClicked(false)
                setIsClickedSecurity(false)}}>About Me</Button>
          </DivBut>

          <SecurityAbout style={{display: isClickedSecurity ? "flex" : "none"}}>
            <SecurityBTN onClick={() => setIsClicked(false)}>Security</SecurityBTN>
            <SecurityBTN onClick={() => setIsClicked(!isClicked)}>About Me</SecurityBTN>
          </SecurityAbout>
          <UnderLine style={{display: isClickedSecurity ? "flex" : "none"}}/>
          <UnderDiv style={{display: isClicked ? "block" : "none"}}>
            <UnderDivContent>
                <UnderP>Phone</UnderP>
                <UnderP2>+{data && data.results[2].phone}</UnderP2>
            </UnderDivContent>
            <UnderDivContent>
                <UnderP>Adress</UnderP>
                <UnderP2>{data && data.results[2].location.street.name}    {data && data.results[2].location.street.number} str</UnderP2>
            </UnderDivContent>
            <UnderDivContent>
                <UnderP>Email</UnderP>
                <UnderP2>{data && data.results[2].email}</UnderP2>
            </UnderDivContent>
          </UnderDiv>
        </Content>
        
      </DivMain> : null}

      {friendNum == 3 ? <DivMain>
        <Img src={data && data.results[3].picture.large} alt="" />
        <Content>
          <H1>
            {data && data.results[3].name.first}{" "}
            {data && data.results[3].name.last}
          </H1>
          <DivBut>
            <Button
            onClick={() => {
                setIsClicked(false)
                setIsClickedSecurity(false)}}
            style={{padding: "5px 30px 5px 0px"}}>
              <Box className="box" />
              Messages
            </Button>
            <Button 
           
            onClick={() => setIsClickedSecurity(!isClickedSecurity)} 
            style={{
                 color: isClickedSecurity ?  "#6997f1" : "black",
                 background: isClickedSecurity ? "#dbf1fe" : "transparent"
        }}
            >Contacts</Button>
            <Button onClick={() => {
                setIsClicked(false)
                setIsClickedSecurity(false)}}>About Me</Button>
          </DivBut>

          <SecurityAbout style={{display: isClickedSecurity ? "flex" : "none"}}>
            <SecurityBTN onClick={() => setIsClicked(false)}>Security</SecurityBTN>
            <SecurityBTN onClick={() => setIsClicked(!isClicked)}>About Me</SecurityBTN>
          </SecurityAbout>
          <UnderLine style={{display: isClickedSecurity ? "flex" : "none"}}/>
          <UnderDiv style={{display: isClicked ? "block" : "none"}}>
            <UnderDivContent>
                <UnderP>Phone</UnderP>
                <UnderP2>+{data && data.results[3].phone}</UnderP2>
            </UnderDivContent>
            <UnderDivContent>
                <UnderP>Adress</UnderP>
                <UnderP2>{data && data.results[3].location.street.name}    {data && data.results[3].location.street.number} str</UnderP2>
            </UnderDivContent>
            <UnderDivContent>
                <UnderP>Email</UnderP>
                <UnderP2>{data && data.results[3].email}</UnderP2>
            </UnderDivContent>
          </UnderDiv>
        </Content>
        
      </DivMain> : null}

      {friendNum == 4 ? <DivMain>
        <Img src={data && data.results[4].picture.large} alt="" />
        <Content>
          <H1>
            {data && data.results[4].name.first}{" "}
            {data && data.results[4].name.last}
          </H1>
          <DivBut>
            <Button
            onClick={() => {
                setIsClicked(false)
                setIsClickedSecurity(false)}}
            style={{padding: "5px 30px 5px 0px"}}>
              <Box className="box" />
              Messages
            </Button>
            <Button 
           
            onClick={() => setIsClickedSecurity(!isClickedSecurity)} 
            style={{
                 color: isClickedSecurity ?  "#6997f1" : "black",
                 background: isClickedSecurity ? "#dbf1fe" : "transparent"
        }}
            >Contacts</Button>
            <Button onClick={() => {
                setIsClicked(false)
                setIsClickedSecurity(false)}}>About Me</Button>
          </DivBut>

          <SecurityAbout style={{display: isClickedSecurity ? "flex" : "none"}}>
            <SecurityBTN onClick={() => setIsClicked(false)}>Security</SecurityBTN>
            <SecurityBTN onClick={() => setIsClicked(!isClicked)}>About Me</SecurityBTN>
          </SecurityAbout>
          <UnderLine style={{display: isClickedSecurity ? "flex" : "none"}}/>
          <UnderDiv style={{display: isClicked ? "block" : "none"}}>
            <UnderDivContent>
                <UnderP>Phone</UnderP>
                <UnderP2>+{data && data.results[4].phone}</UnderP2>
            </UnderDivContent>
            <UnderDivContent>
                <UnderP>Adress</UnderP>
                <UnderP2>{data && data.results[4].location.street.name}    {data && data.results[4].location.street.number} str</UnderP2>
            </UnderDivContent>
            <UnderDivContent>
                <UnderP>Email</UnderP>
                <UnderP2>{data && data.results[4].email}</UnderP2>
            </UnderDivContent>
          </UnderDiv>
        </Content>
        
      </DivMain> : null}

      {friendNum == 5 ? <DivMain>
        <Img src={data && data.results[5].picture.large} alt="" />
        <Content>
          <H1>
            {data && data.results[5].name.first}{" "}
            {data && data.results[5].name.last}
          </H1>
          <DivBut>
            <Button
            onClick={() => {
                setIsClicked(false)
                setIsClickedSecurity(false)}}
            style={{padding: "5px 30px 5px 0px"}}>
              <Box className="box" />
              Messages
            </Button>
            <Button 
           
            onClick={() => setIsClickedSecurity(!isClickedSecurity)} 
            style={{
                 color: isClickedSecurity ?  "#6997f1" : "black",
                 background: isClickedSecurity ? "#dbf1fe" : "transparent"
        }}
            >Contacts</Button>
            <Button onClick={() => {
                setIsClicked(false)
                setIsClickedSecurity(false)}}>About Me</Button>
          </DivBut>

          <SecurityAbout style={{display: isClickedSecurity ? "flex" : "none"}}>
            <SecurityBTN onClick={() => setIsClicked(false)}>Security</SecurityBTN>
            <SecurityBTN onClick={() => setIsClicked(!isClicked)}>About Me</SecurityBTN>
          </SecurityAbout>
          <UnderLine style={{display: isClickedSecurity ? "flex" : "none"}}/>
          <UnderDiv style={{display: isClicked ? "block" : "none"}}>
            <UnderDivContent>
                <UnderP>Phone</UnderP>
                <UnderP2>+{data && data.results[5].phone}</UnderP2>
            </UnderDivContent>
            <UnderDivContent>
                <UnderP>Adress</UnderP>
                <UnderP2>{data && data.results[5].location.street.name}    {data && data.results[5].location.street.number} str</UnderP2>
            </UnderDivContent>
            <UnderDivContent>
                <UnderP>Email</UnderP>
                <UnderP2>{data && data.results[5].email}</UnderP2>
            </UnderDivContent>
          </UnderDiv>
        </Content>
        
      </DivMain> : null}
      
    </Div>
  );
}

const UnderP = styled.p`
margin-top: 10px;
    width: 140px;
    font-size: 25px;
    font-weight: 600;
    line-height: 45px;
`

const UnderP2 = styled(UnderP)`
    width: 360px;
`
const UnderDivContent = styled.div`
    display: flex;
    flex-direction: row;
`
const UnderDiv = styled.div`
margin-top: 15px;
    width: 100%;
    height: 200px;
   background: transparent;
`

const UnderLine = styled.div`
    margin-top: 10px;
    height: 2px;
    background: #8B8B8B;
`


const SecurityAbout = styled.div`
margin-top: 80px;
    display: flex;
    flex-direction: row;
`

const SecurityBTN = styled.button`
    color: #8B8B8B;
    border: none;
    background: transparent;
     font-size: 25px;
     transition: all .3s ease;
     font-weight: 600;
     margin-right: 40px;
     &:hover {
        color: black;
     }
     line-height: 45px;
`
const Content = styled.div`
  margin-left: 150px;
  overflow: hidden;
`;

const H1 = styled.h1`
  font-size: 60px;
`;
const Box = styled.div`
  width: 20px;
  height: 20px;
  background: black;
  margin-right: 8px;
`;
const Button = styled.button`
  border: none;
  background: transparent;
  font-weight: 600;
  font-size: 25px;
  color: black;
  margin-right: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 5px 30px;
  width: 200px;
  border-radius: 5px;
  transition: all 0.3s ease;

  &:hover {
    background: #dbf1fe;
    color: #6997f1;
  }
  &:hover .box {
    background: #6997f1;
  }
`;

const DivBut = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: row;
`;

const Img = styled.img`
  width: 300px;
`;

const DivMain = styled.div`
  width: 100%;
  padding: 100px 165px;
  display: flex;
  flex-direction: row;
  background: transparent;
  font-family: bolder;
  align-items: flex-start;
 
 
`;

const Div = styled.div`
  width: 100%;
`;

const HeaderDiv = styled.div`
  width: 100%;
  height: 100px;
`;
const Line = styled.div`
  width: 100%;
  height: 1px;
  background: black;
  margin-bottom: 3px;
`;
