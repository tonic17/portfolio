import React, { Component } from "react";
import styled, { css } from "styled-components";

export const ScParagraph = styled.p`
    position: absolute;
    top: 30%;
    left: ${({ left }) => left};
    transform: translate(-50%, -50%)
        ${props => {
            return `rotate(${props.rotate})`;
        }};
    z-index: 500;
    background-image: linear-gradient(to right, #780206, #061161);
    color: white;
    /* transform: rotateZ(-2deg); */
    -webkit-text-fill-color: transparent;
    background-clip: text;
    border: 1px solid white;
    display: block;
    font-size: 80px;
    font-family: arial;
    text-align: center;
    margin-top: 20px;
    font-weight: bold;

    /* letter-spacing: px; */
    /* background-size: cover; */
`;

export class ScTransparent extends Component {
    console;
    render() {
        return (
            <div>
                <ScParagraph left="25%" rotate={"-45deg"}>
                    Saida
                </ScParagraph>
                <ScParagraph left="75%" rotate={"45deg"}>
                    DiPeri
                </ScParagraph>
            </div>
        );
    }
}
