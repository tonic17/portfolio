import React, { Component } from "react";
import styled from "styled-components";
import galaxyWarriors from "../videos/galaxy-warriors.mp4";

export const ScVideo = styled.video`
    /* background-image: url("${galaxyWarriors}"); */
    width: 100px;
    height: 100px;


`;

export class Video extends Component {
    render() {
        return (
            <div>
                Video Component
                <ScVideo />
                <ScVideo id="background-video" loop autoPlay>
                    <source src={galaxyWarriors} type="video/mp4" />
                </ScVideo>
            </div>
        );
    }
}
