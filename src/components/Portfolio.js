import React, { Component } from "react";
import styled from "styled-components";
import { Project } from "./Project";
import { ScFlexboxGrid } from "../elements/ScFlexboxGrid";
export const ScHeader = styled.header`
    height: 85vh;
    background-image: linear-gradient(to right bottom, #8e2de2, #4a00e0);
    background-size: cover;
    background-position: center;
    position: relative;

    // graceful degradation
    @supports (clip-path: polygon(0 0)) or (-webkit-clip-path: polygon(0 0)) {
        -webkit-clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);
        clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);
    }
`;

export class Portfolio extends Component {
    render() {
        return (
            <div>
                <ScHeader />
                <ScFlexboxGrid />
                {/* <Project /> */}
            </div>
        );
    }
}
