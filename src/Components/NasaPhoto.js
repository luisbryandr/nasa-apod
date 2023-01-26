import React from "react";
import styled from "styled-components";

const WrapperDiv = styled.div`
    background-color: black;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;

`;

const NasaPhoto = (props) => {
    return (
        <WrapperDiv>
            <h3>{props.photo.title}</h3>
            <p>{props.photo.date}</p>
            <img src = {props.photo.hdurl} alt ='Provided by NASA, changes everyday'/>
            <p className="explanation">{props.photo.explanation}</p>
        </WrapperDiv>
           
    )
};

export default NasaPhoto;