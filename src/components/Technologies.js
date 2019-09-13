import React from "react";
import styled from "styled-components";
import { ScNodeIcon } from "../elements/icons/Node";
import { ScReactIcon } from "../elements/icons/React";
import { ScHtmlIcon } from "../elements/icons/Html";
import { ScJavascriptIcon } from "../elements/icons/Javascript";
import { ScMongoDbIcon } from "../elements/icons/MongoDb";
import { ScGitIcon } from "../elements/icons/Git";
import { ScReduxIcon } from "../elements/icons/Redux";
import { ScCssIcon } from "../elements/icons/Css";
import { ScJqueryIcon } from "../elements/icons/Jquery";



const ScContainer = styled.div`
display: flex;
justify-content: space-between;
flex-direction: column;
`;


const ScItem = styled.div`
    display: flex;
    justify-content:center;
    align-items: center;
    flex-direction: column;
    width: 250px;
    height: 250px;
    border: 1px solid #c8c7c7;
    margin: 50px;
    padding:20px;
    &:hover{
        background:rgba(0,0,0,0.5)
    }
`;

const ScTitle = styled.h5`
padding: 10px;
font-size: 18px;
    font-weight: 500;
`;

const ScRow = styled.div`
display: flex;
justify-content: center;
flex-wrap:wrap;
`;

export const Technologies = () => {
    return (
        <ScContainer>
            <ScRow>
                <ScItem>
                    <ScReactIcon />
                    <ScTitle>React</ScTitle>
                </ScItem>
                <ScItem>
                    <ScNodeIcon />
                    <ScTitle>Node</ScTitle>
                </ScItem>
                <ScItem>
                    <ScHtmlIcon />
                    <ScTitle>HTML</ScTitle>
                </ScItem>
                <ScItem>
                    <ScJavascriptIcon />
                    <ScTitle>Javascript</ScTitle>
                </ScItem>
                <ScItem>
                    <ScMongoDbIcon />
                    <ScTitle>mongoDb</ScTitle>
                </ScItem>
                <ScItem>
                    <ScGitIcon />
                    <ScTitle>Git</ScTitle>
                </ScItem>
                <ScItem>
                    <ScReduxIcon />
                    <ScTitle>Redux</ScTitle>
                </ScItem>
                <ScItem>
                    <ScCssIcon />
                    <ScTitle>CSS</ScTitle>
                </ScItem>
                <ScItem>
                    <ScJqueryIcon/>
                    <ScTitle>Jquery</ScTitle>
                </ScItem>

            </ScRow>


        </ScContainer>
    );
};

export default Technologies;
