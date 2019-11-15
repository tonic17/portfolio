import React from "react";
import styled from "styled-components";

export const ScImg = styled.img`
    height: 100%;
    transform: translateX(-0.3rem) scale(1.3);
    backface-visibility: hidden;
    transition: all 0.5s;
    

    &:hover {
        transform: translateX(-4rem) scale(1);
        filter: blur(3px) brightness(80%);
        border-radius: 50%
    }
`;

export const ScImgContainer = styled.div`
    display: flex;
    justify-content: center;
    height: 150px;
    width: 100%;
    box-shadow: 0 3rem 6rem rgba($color-black, 0.1);
    border-radius: 100px;
    position: relative;
    z-index: 3;
    &:hover{
        border-radius: 100px;
        
    }
`;
export const ScFigCaption = styled.figcaption`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 20%);
    color: white;
    text-transform: uppercase;
    font-size: 1.7rem;
    text-align: center;
    opacity: 0;
    transition: all 0.5s;
    backface-visibility: hidden;

`;

export const ScFigure = styled.figure`

    height: 150px;

    position: absolute;
    overflow: hidden;
    border-radius: 50%;
    margin-top: 50px;
    left: 50%;
    transform: translate(-50%, 0);
    &:hover ${ScImg} {
        opacity: 1;
        transform: translateX(-1rem) scale(1.2);

        filter: blur(3px) brightness(80%);
        border-radius: 100px;

    }
    &:hover ${ScFigCaption} {
        opacity: 1;
        transform: translate(-50%, -50%);
        border-radius: 50%

    }
`;



export const ScImgBlur = props => {
    return (
        <ScImgContainer>
            <ScFigure>
                <ScImg src={props.src} />
                <ScFigCaption>{props.text}</ScFigCaption>
            </ScFigure>
        </ScImgContainer>
    );
};
