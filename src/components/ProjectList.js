import React, { Component } from "react";
import styled from "styled-components";
import { Project } from "./Project";
import { data } from "../data/data";
import ScLogoSvg from "./elements/ScLogoSvg";

const ScProjectContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const ScProjectListWrapper = styled.div`
    background-image: linear-gradient(
        to right bottom,
        rgb(74, 0, 224, 0.8),
        rgb(142, 45, 226, 0.8)
    );
`;

const ScH1 = styled.h1`
    font-size: 3rem;
    font-family: "Raleway", sans-serif;
    color: white;
    text-align: center;
    padding: 50px;
    @media only screen and (max-width: 600px) {
        & {
            padding-top:100px;
            font-size: 2rem;
        }
    }
`;

export class ProjectList extends Component {
    render() {
        console.log(data);
        return (
            <ScProjectListWrapper>
                <div>
                    <ScLogoSvg></ScLogoSvg>
                    <ScH1>My Projects</ScH1>
                </div>

                <ScProjectContainer>
                    {data.map(
                        (
                            {
                                id,
                                github_link,
                                deployed_link,
                                description,
                                technologies_used,
                                image,
                                video,
                                color
                            },
                            index
                        ) => {
                            console.log(id);
                            return (
                                <Project
                                    key={index}
                                    id={id}
                                    github={github_link}
                                    deployed={deployed_link}
                                    description={description}
                                    technologies={technologies_used}
                                    image={image}
                                    video={video}
                                    color={color}
                                />
                            );
                        }
                    )}
                </ScProjectContainer>
            </ScProjectListWrapper>
        );
    }
}
