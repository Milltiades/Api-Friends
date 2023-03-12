import React, { useState } from "react";
import styled from "styled-components";

export default function FriendComponent({
  data,
  indexNum
}: {
  data: any;
  indexNum: any
  
}) {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [isClickedSecurity, setIsClickedSecurity] = useState<boolean>(false);

  const [hovered, setHovered] = useState<any>(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <Div>
      <HeaderDiv />

      <Line />
      <Line />

      

      {data &&
        data.results.map((result: any, index: any) => {
          return (
            (indexNum == index ? <DivMain key={index}>
              <Img src={result.picture.large} alt="" />
              <Content>
                <H1>
                  {result.name.first} {result.name.last}
                </H1>
                <DivBut>
                  <Button
                    onClick={() => {
                      setIsClicked(false);
                      setIsClickedSecurity(false);
                    }}
                    style={{ padding: "5px 30px 5px 0px" }}
                  >
                    <Box className="box" />
                    Messages
                  </Button>
                  <Button
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => setIsClickedSecurity(!isClickedSecurity)}
                    style={{
                      color: isClickedSecurity || hovered ? "#6997f1" : "black",
                      background:
                        isClickedSecurity || hovered
                          ? "#dbf1fe"
                          : "transparent",
                    }}
                  >
                    Contacts
                  </Button>
                  <Button
                    onClick={() => {
                      setIsClicked(false);
                      setIsClickedSecurity(false);
                    }}
                  >
                    About Me
                  </Button>
                </DivBut>

                <SecurityAbout
                  style={{ display: isClickedSecurity ? "flex" : "none" }}
                >
                  <SecurityBTN onClick={() => setIsClicked(false)}>
                    Security
                  </SecurityBTN>
                  <SecurityBTN onClick={() => setIsClicked(!isClicked)}>
                    About Me
                  </SecurityBTN>
                </SecurityAbout>
                <UnderLine
                  style={{ display: isClickedSecurity ? "flex" : "none" }}
                />
                <UnderDiv style={{ display: isClicked ? "block" : "none" }}>
                  <UnderDivContent>
                    <UnderP>Phone</UnderP>
                    <UnderP2>+{result.phone}</UnderP2>
                  </UnderDivContent>
                  <UnderDivContent>
                    <UnderP>Adress</UnderP>
                    <UnderP2>
                      {result.location.street.name}{" "}
                      {result.location.street.number} str
                    </UnderP2>
                  </UnderDivContent>
                  <UnderDivContent>
                    <UnderP>Email</UnderP>
                    <UnderP2>{result.email}</UnderP2>
                  </UnderDivContent>
                </UnderDiv>
              </Content>
            </DivMain> : null)
          );
        })}
    </Div>
  );
}

const UnderP = styled.p`
  margin-top: 10px;
  width: 140px;
  font-size: 25px;
  font-weight: 600;
  line-height: 45px;
`;

const UnderP2 = styled(UnderP)`
  width: 360px;
`;
const UnderDivContent = styled.div`
  display: flex;
  flex-direction: row;
`;
const UnderDiv = styled.div`
  margin-top: 15px;
  width: 100%;
  height: 200px;
  background: transparent;
`;

const UnderLine = styled.div`
  margin-top: 10px;
  height: 2px;
  background: #8b8b8b;
`;

const SecurityAbout = styled.div`
  margin-top: 80px;
  display: flex;
  flex-direction: row;
`;

const SecurityBTN = styled.button`
  color: #8b8b8b;
  border: none;
  background: transparent;
  font-size: 25px;
  transition: all 0.3s ease;
  font-weight: 600;
  margin-right: 40px;
  &:hover {
    color: black;
  }
  line-height: 45px;
`;
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
