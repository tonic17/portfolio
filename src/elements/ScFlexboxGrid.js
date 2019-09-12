import React, { Component } from "react";
import styled from "styled-components";
import { Project } from "../components/Project";

const $gutter = "10px";

export const ScWrapper = styled.div`
    max-width: 1200px;

    @media only screen and (max-width: 37.5em) {
        max-width: 600px;
    }
`;

export const ScRow = styled.div`
    display: flex;
    justify-content: space-between;
    /* flex-flow: row; */
    flex-wrap: wrap;

    @media only screen and (max-width: 37.5em) {
        /* flex-wrap: no-wrap; */
        flex-direction: column;
        padding: 20px 40px;
    }
`;

export const ScGridCell = styled.div`
    display: flex;
    justify-content: center;
    /* padding: ${$gutter}; */
    flex: ${({ span }) => `0 0 ` + (100 / 12) * span + `%`};
    @media only screen and (max-width: 37.5em) {
        padding: 5px;
        flex: 0 0 100%;
    }
`;

export const ScGridContent = styled.div`
    /* padding: 0.8em 1em; */
    text-align: center;
    margin-bottom: 1em;
    background: rgba(51, 153, 204, 0.2);
    border: 1px solid #3cc;
    border-radius: 3px;

    @media only screen and (max-width: 37.5em) {
        padding: 0.4em 0.5em;
        margin-bottom: 0.5em;
    }
`;

export class ScFlexboxGrid extends Component {
    render() {
        return (
            <div>
                <ScWrapper>
                    <ScRow>
                        <ScGridCell span={4}>
                            <ScGridContent>
                                <Project />
                            </ScGridContent>
                        </ScGridCell>
                        <ScGridCell span={4}>
                            <ScGridContent>
                                <Project />
                            </ScGridContent>
                        </ScGridCell>
                        <ScGridCell span={4}>
                            <ScGridContent>
                                <Project />
                            </ScGridContent>
                        </ScGridCell>
                    </ScRow>
                </ScWrapper>
            </div>
        );
    }
}
