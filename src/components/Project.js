import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import img from "../images/galaxy-warriors.png";
import galaxyWarriors from "../videos/galaxy-warriors.mp4";
// import link from "../images/link.svg";

const ScSection = styled.section`
    width: 33%;
    padding: 50px;
`;

export const ScCardsideFront = styled.div`
    box-shadow: 2px 5px 5px;
    font-size: 1rem;
    height: 580px;
    transition: all 0.8s ease;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    border-radius: 4px;
    // hides the overflow of child elements and preserves border-radius
    overflow: hidden;
    box-shadow: 0 15px 40px rgba(black, 0.15);

    background-color: white;
`;

export const ScCardBack = styled.div`
    box-shadow: 2px 5px 5px;
    font-size: 20px;
    height: 580px;
    transition: all 0.8s ease;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    border-radius: 4px;
    overflow: hidden;
    box-shadow: 0 15px 40px rgba(black, 0.15);

    transform: rotateY(-180deg);

    ${({ color }) => color}
`;

export const ScCardContainer = styled.section`
    perspective: 1500px;
    -moz-perspective: 1500px;
    position: relative;
    height: 580px;
    width: 100%;

    &:hover ${ScCardsideFront} {
        transform: rotateY(180deg);
    }

    &:hover ${ScCardBack} {
        transform: rotateY(0);
    }
`;

export const ScCardPicture = styled.div`
    background-position: center;
    background-size: cover;
    /* height: 230px; */
    padding-bottom: 60%;
    background-blend-mode: screen;
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
    clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    background-image: ${({ image }) => `url(${require("../images/" + image)})`};
`;

export const ScCardHeading = styled.h4`
    margin-top: 48px;
    font-weight: 300;
    /* font-size: 22px; */
    text-transform: uppercase;
    text-align: right;
    color: white;
    position: absolute;
    top: 120px;
    right: 10px;
    width: 60%;
`;

export const ScHeadingSpan1 = styled.span`
    padding: 9px 15px;
    line-height: 2.1;
    box-decoration-break: clone;
    ${({ color }) => color}
`;

export const ScCardDetails = styled.div`
    padding: 30px;

    ul {
        list-style: none;
        width: 80%;
        margin: 0 auto;

        li {
            text-align: center;
            font-size: 15px;
            padding: 10px;

            &:not(:last-child) {
                border-bottom: 1px solid lightgrey;
            }
        }
    }
`;

export const ScCardCta = styled.div`
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -46%);
    width: 100%;
    text-align: center;
`;

export const ScVideo = styled.video`
    width: 100%;
    justify-content: center;
    align-items: center;
`;

export const ScLink = styled.a.attrs(() => {
    return { target: "__blank" };
})`
    &:link,
    &:visited {
        font-size: 24px;
        color: white;
        display: inline-block;
        text-decoration: none;
        border-bottom: 1px solid $color-primary;
        padding: 20px 3px;
        transition: all 0.2s;
    }

    &:hover {
        padding: 20px;
        background-color: rgba(0, 0, 0, 0.15);
        color: white;
        box-shadow: 1 1rem 2rem rgba(0, 0, 0, 0.15);
        transform: translateY(-2px);
    }

    &:active {
        box-shadow: 1 0.5rem 1rem rgba(0, 0, 0, 0.15);
        transform: translateY(0);
    }
    span {
        text-align: center;
        font-size: 22px;
        cursor: pointer;
    }
`;

export const ScSvg = styled.svg`
    width: 15px;
    height: 15px;
    fill: white;
    padding: 0 10px;
`;

export const ScPtag = styled.p`
    color: white;
    padding: 30px;
    line-height: 1.3;
    font-weight: 700;
`;

export const Project = props => {
    return (
        <ScSection class="section-tours" id="section-tours">
            <ScCardContainer class="card">
                <ScCardsideFront class="card__side card__side--front">
                    <ScCardPicture
                        image={props.image}
                        class="card__picture card__picture--1"
                    >
                        &nbsp;
                    </ScCardPicture>
                    <ScCardHeading class="card__heading">
                        <ScHeadingSpan1
                            color={props.color}
                            class="card__heading-span card__heading-span--1"
                        >
                            {props.id}
                        </ScHeadingSpan1>
                    </ScCardHeading>
                    <ScCardDetails class="card__details">
                        <ul>
                            {props.technologies.map((item, index) => {
                                return <li key={index}>{item}</li>;
                            })}
                        </ul>
                    </ScCardDetails>
                </ScCardsideFront>
                <ScCardBack
                    color={props.color}
                    class="card__side card__side--back card__side--back-1"
                >
                    <ScCardCta class="card__cta">
                        {props.video ? (
                            <ScVideo id="background-video" loop autoPlay>
                                <source
                                    src={require(`../videos/${props.video}`)}
                                    type="video/mp4"
                                />
                            </ScVideo>
                        ) : (
                            <ScCardPicture image={props.image}>
                                &nbsp;
                            </ScCardPicture>
                        )}

                        <ScPtag>{props.description}</ScPtag>
                        <ScLink href={props.deployed} class="btn btn--white">
                            <ScSvg
                                width="50"
                                height="50"
                                x="0px"
                                y="0px"
                                viewBox="0 0 1000 1000"
                                enable-background="new 0 0 1000 1000"
                            >
                                <g>
                                    <g transform="matrix(1 0 0 -1 0 1008)">
                                        <path d="M850,368h70V18H10v910h350v-70H80V88h770V368z M500,998h490V508h-70v367.5L342.5,298L290,350.5L867.5,928H500V998z" />
                                    </g>
                                </g>
                            </ScSvg>
                            <span>Visit the website</span>
                        </ScLink>
                    </ScCardCta>
                </ScCardBack>
            </ScCardContainer>
        </ScSection>
    );
};
