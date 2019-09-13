import React, { Component } from "react";
import styled from "styled-components";
import img from "../images/profile-1.jpg";
import { Introduction } from "./Introduction";
import { ScHeader } from "../elements/ScHeader";
import { ScImgBlur } from "../elements";
import Technologies from "../components/Technologies";

export const ScSvg = styled.svg`
    position: absolute;
    z-index: 5;
    top: 35px;
    left: 15px;
    width: 50px;
    transition: all 0.1s linear;
    #innerD {
        fill: #8e2de2;
    }

    &:hover {
        transform: scale(1.2) skew(-5deg);
    }
`;

const PaddedHrTag = styled.hr`
    margin-top: 4rem;
    margin-bottom: 4rem;
`;

const RowContainer = styled.div`
    display: flex;
    justify-content: center;
`;

const ColDiv = styled.div`
    padding: 50px 100px;

    p,
    h5 {
        text-align: center;
        line-height: 2;
    }

    h5 {
        font-weight: 700 !important;
        font-size: 1.6rem;
        line-height: 1.55em;
        margin-bottom: 15px;
    }
`;

const ScH2 = styled.h2`
    text-align: center;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-size: 3rem;
    font-weight: 300;
    margin-bottom: 4rem;
    margin-top: 3rem;
`;

export class About extends Component {
    render() {
        return (
            <div>
                <ScHeader>
                    <ScSvg
                        class="svg-logo"
                        viewBox="0 0 200 200"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                        <title>Group</title>
                        <desc>Created with Sketch.</desc>
                        <g
                            id="logo"
                            stroke="none"
                            stroke-width="1"
                            fill="none"
                            fill-rule="evenodd"
                        >
                            <g
                                id="Artboard"
                                transform="translate(-84.000000, -19.000000)"
                            >
                                <g
                                    id="Group"
                                    transform="translate(85.000000, 20.000000)"
                                >
                                    <path
                                        d="M82,0.0178524627 C134.666667,-0.557411509 161,12.769971 161,40 C161,67.230029 134.666667,80.5574115 82,79.9821475 L82,3.06503768 L82,0.0178524627 Z"
                                        id="outerD"
                                        stroke="#000000"
                                        fill="#FFFFFF"
                                    />
                                    <path
                                        d="M96,20 L96,60 C123.333333,60.0237715 137,53.3630477 137,40.0178286 C137,26.6726095 123.333333,20 96,20 Z"
                                        id="innerD"
                                        stroke="#979797"
                                        fill="#F3F3F3"
                                    />
                                    <path
                                        d="M70,16.0417886 C40.4481588,10.6943848 25.6722382,13.3670425 25.6722382,24.0597616 C25.6722382,40.0988403 70,51.7224733 70,72.1769976 C70,85.8133471 46.7132856,91.1597067 0.139856732,88.2160763 L0.139856732,72.1769976 C29.2925946,76.1523083 43.8689635,74.8063205 43.8689635,68.1390342 C43.8689635,61.4717479 32.9487679,51.0879039 11.1083768,36.987502 C-3.70279226,24.0553734 -3.70279226,14.399767 11.1083768,8.02068291 C25.9195458,1.64159882 45.5500869,-0.932380927 70,0.298743667 L70,16.0417886 Z"
                                        id="S"
                                        stroke="#000000"
                                        fill="#FEFEFE"
                                    />
                                    <polygon
                                        id="Triangle"
                                        stroke="#979797"
                                        fill="#FFFFFF"
                                        points="75 83 150 104 0 104"
                                    />
                                </g>
                            </g>
                        </g>
                    </ScSvg>
                    <ScImgBlur src={img} text={"SAIDA DIPERI"} />
                    <h1>Saida DiPeri</h1>
                    <Introduction />
                </ScHeader>

                <div class="container">
                    {/* <PaddedHrTag class="padded-hr" /> */}
                    <ScH2 class="text-center">Technologies</ScH2>
        
                    <Technologies></Technologies>
                </div>
            </div>
        );
    }
}
