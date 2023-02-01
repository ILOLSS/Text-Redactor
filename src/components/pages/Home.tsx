import React from "react";
import styled from "styled-components";
import Canvas from "../organisms/Canvas";
import SidePanel from "../organisms/SidePanel";

const HomePageWrap = styled.div`
    box-sizing: border-box;
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: row;
    background-color: #F4F4F4;
`;

function Home() {

    return (
        <HomePageWrap>
            <Canvas />
            <SidePanel />
        </HomePageWrap>
    );
}

export default Home;
