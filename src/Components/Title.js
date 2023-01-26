import React from "react";
import styled from "styled-components";

const WrapperDiv = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    color: white;
    background-color: black;
`;

// const TitleStyled = styled.h1`
// //     color: white;
// //     background-color: black;
// // `;

// // const SubtitleStyled = styled.h2`
// //     color: white;
// //     background-color: black;
// `;

const Title = () => {
    return (
       <WrapperDiv>
            {/* <TitleStyled>NASA's A Photo of the Day</TitleStyled>
            <SubtitleStyled>Enjoy!</SubtitleStyled> */}
            <h1>NASA's A Photo of the Day</h1>
            <h2>Enjoy!</h2>
       </WrapperDiv> 
        
    )
}

export default Title;