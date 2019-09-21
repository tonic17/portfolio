import React, { Component } from "react";

import img from "../images/profile-1.jpg";
import { Introduction } from "./Introduction";
import { ScHeader } from "../elements/ScHeader";
import { ScImgBlur } from "../elements";
import Technologies from "../components/Technologies";
import { ScLogoIcon } from "../elements/icons/Logo";
import { ScH2 } from "../elements/Headers";


export class About extends Component {
    render() {
        return (
            <div>
                <ScHeader>
                    <ScLogoIcon />
                    <ScImgBlur src={img} text={"SAIDA DIPERI"} />
                    <Introduction />
                </ScHeader>

                <div class="container">
                    <ScH2 class="text-center">Technologies</ScH2>
                    <Technologies></Technologies>
                </div>
            </div>
        );
    }
}
