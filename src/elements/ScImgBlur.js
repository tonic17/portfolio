import React from "react";
import styled from "styled-components";

export const ScImg = styled.img`
    height: 100%;
    // to center the image inside the shape
    transform: translateX(-1rem) scale(1.4);
    backface-visibility: hidden;
    transition: all 0.5s;

    &:hover {
        transform: translateX(-4rem) scale(1);

        // to make the img blured and darker on hover. Value lower than 100% makes
        // it darker and above 100% makes it lighter
        filter: blur(3px) brightness(80%);
    }
`;

export const ScImgContainer = styled.div`
    display: flex;

    justify-content: center;
    height: 150px;
    width: 100%;

    box-shadow: 0 3rem 6rem rgba($color-black, 0.1);
    /* background-color: rgba(250, 250, 250, 0.6); */
    border-radius: 100px;
    position: relative;
    z-index: 3;
`;

export const ScFigure = styled.figure`
    width: 150px;
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
    // removes little shake or gli

    &:hover {
        opacity: 1;
        transform: translate(-50%, -50%);
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
