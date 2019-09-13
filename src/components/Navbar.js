import React, { Component } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const ScNavWrapper = styled.div`
    position: relative;
    top: 50%;
`;

export const ScSpanIcon = styled.span`
    position: relative;
    left: 50%;
    top: 50%;
    transform: translate(40%, -50%);

    &,
    &::before,
    &::after {
        width: 2rem;
        height: 1.8px;
        background-color: #8e2de2;
        display: inline-block;
    }

    &,
    &::before,
    &::after {
        content: "";
        position: absolute;
        left: 0%;
        transition: all 0.2s;
    }

    &::before {
        top: -0.6rem;
    }
    &::after {
        top: 0.6rem;
    }
`;

export const ScNavBackground = styled.div`
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    position: fixed;
    top: 3rem;
    right: 3rem;
    // radial gradient starts in the middle of an element
    // and goes from there in all the outside directions
    background-image: radial-gradient(#8e2de2, #4a00e0);
    z-index: 1000;
    transition: 0.6s cubic-bezier(0.86, 0, 0.07, 1);
`;

export const ScNavTag = styled.nav`
    height: 100vh;
    // width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1500;
    // to remove the nav bar we set opacity to 0 and width to 0
    opacity: 0;
    width: 0;
    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
`;

export const ScUl = styled.ul`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    list-style: none;
    text-align: left;
`;

export const ScNavItem = styled.li`
    margin: 1rem;
`;

export const ScNavExternalLink = styled.a`
    &:link,
    &:visited {
        display: inline-block;
        font-size: 3rem;
        font-weight: 300;
        padding: 1rem 2rem;
        color: white;
        text-decoration: none;
        text-transform: uppercase;
        background-image: linear-gradient(120deg, transparent 50%, white 50%);
        background-size: 220%;
        transition: all 0.3s linear;

        text-align: left;
        opacity: 0;

        span {
            margin-right: 1.5rem;
            display: inline-block;
        }
    }

    &:hover,
    &:active {
        background-position: 100%;
        color: rgb(0, 78, 146, 0.8);
        transform: translateX(1rem);
    }
`;

export const ScNavLink = styled(Link)`
    &:link,
    &:visited {
        display: inline-block;
        font-size: 3rem;
        font-weight: 300;
        padding: 1rem 2rem;
        color: white;
        text-decoration: none;
        text-transform: uppercase;
        background-image: linear-gradient(120deg, transparent 50%, white 50%);
        background-size: 220%;
        transition: all 0.3s linear;

        text-align: left;
        opacity: 0;

        span {
            margin-right: 1.5rem;
            display: inline-block;
        }
    }

    &:hover,
    &:active {
        background-position: 100%;
        color: rgb(0, 78, 146, 0.8);
        transform: translateX(1rem);
    }
`;

export const ScLabel = styled.label`
    background-color: white;
    height: 3.5rem;
    width: 3.5rem;
    position: fixed;
    top: 2rem;
    right: 2rem;
    border-radius: 50%;
    z-index: 2000;
    box-shadow: 0 1rem 3rem rgba(black, 0.1);
    text-align: center;
    cursor: pointer;

    &:hover ${ScSpanIcon}::before {
        top: -0.7rem;
    }

    &:hover ${ScSpanIcon}::after {
        top: 0.7rem;
    }
`;
export const ScInput = styled.input`
    display: none;

    &:checked ~ ${ScNavBackground} {
        transform: scale(200);
    }

    &:checked ~ ${ScNavTag} {
        width: 100%;
        opacity: 1;
    }

    &:checked + ${ScLabel} ${ScSpanIcon} {
        background-color: transparent;
    }

    &:checked + ${ScLabel} ${ScSpanIcon}::before {
        top: 0;
        transform: rotate(135deg);
    }

    &:checked + ${ScLabel} ${ScSpanIcon}::after {
        top: 0;
        transform: rotate(-135deg);
    }

    &:checked ~ ${ScNavTag} ${ScNavLink} {
        opacity: 1;
    }
    &:checked ~ ${ScNavTag} ${ScNavExternalLink} {
        opacity: 1;
    }
`;

export class Navbar extends Component {
    render() {
        console.log(this.props.navOpen);
        return (
            <div>
                <ScNavWrapper class="navigation">
                    <ScInput
                        checked={this.props.navOpen}
                        onChange={this.props.handleNavBar}
                        type="checkbox"
                        id="navi-toggle"
                    />
                    <ScLabel for="navi-toggle">
                        <ScSpanIcon class="navigation__icon">&nbsp;</ScSpanIcon>
                    </ScLabel>
                    <ScNavBackground class="navigation__background">
                        &nbsp;
                    </ScNavBackground>

                    <ScNavTag>
                        <ScUl>
                            <ScNavItem onClick={this.props.handleNavBar}>
                                <ScNavLink to="/">
                                    <span>1</span> About
                                </ScNavLink>
                            </ScNavItem>
                            <ScNavItem onClick={this.props.handleNavBar}>
                                <ScNavLink to="/projects">
                                    <span>2</span>Projects
                                </ScNavLink>
                            </ScNavItem>
                            <ScNavItem onClick={this.props.handleNavBar}>
                                <ScNavLink to="/contact">
                                    <span>3</span>Contact
                                </ScNavLink>
                            </ScNavItem>
                            <ScNavItem>
                                <ScNavExternalLink
                                    href="/resume.pdf"
                                    target="__blank"
                                    autocomplete="off"
                                >
                                    <span>4</span>Resume
                                </ScNavExternalLink>
                            </ScNavItem>
                        </ScUl>
                    </ScNavTag>
                </ScNavWrapper>
            </div>
        );
    }
}
