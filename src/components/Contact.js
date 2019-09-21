import React, { Component } from "react";
import styled, { css } from "styled-components";
import video from "../videos/contact.mp4";

export const ScSection = styled.section`
    height: 100vh;

    background-image: linear-gradient(
        to right bottom,
        rgb(74, 0, 224, 0.8),
        rgb(142, 45, 226, 0.8)
    );
`;

export const ScRow = styled.div`
    display: flex;
    height: 100vh;
    align-items: center;
    ${({ justifyContent }) => {
        return (
            justifyContent &&
            css`
                justify-content: ${justifyContent};
            `
        );
    }}
`;

export const ScBook = styled.div`
    background-image: linear-gradient(
            105deg,
            rgba(250, 250, 250, 0.9) 0%,
            rgba(250, 250, 250, 0.9) 50%,
            transparent 50%
        ),
        url(${video});
    width: 80%;
    /* height: 500px; */
    background-size: cover;
    box-shadow: 0 1.5rem 4rem rgba(0, 0, 0.2);
`;

export const ScFormWrapper = styled.div`
    width: 50%;
    padding: 6rem;
`;

export const ScForm = styled.form``;

export const ScHeaderContainer = styled.div`
    margin-bottom: 1.5rem !important;
`;

export const ScHeader = styled.h2`
    font-size: 3.5rem;
    text-transform: uppercase;
    font-weight: 700;
    display: inline-block;
    background-image: linear-gradient(to right, #8e2de2, #4a00e0);

    background-clip: text;
    color: white;
    letter-spacing: 0.2rem;
    transition: all 0.2s;

    &:hover {
        text-shadow: 0.5rem 1rem 2rem rgba(0, 0, 0, 0.2);
    }
`;

export const ScFormGroup = styled.div`
    &:not(:last-child) {
        margin-bottom: 2rem;
    }
`;

export const ScFormInput = styled.input`
    &:not(:last-child) {
        margin-bottom: 20px;
    }

    background-color: white;
    font-size: 15px;

    font-family: inherit;
    color: inherit;
    padding: 15px 20px;
    border-radius: 2px;
    background-color: rgba(250, 250, 250, 0.5);
    border: none;
    border-bottom: 3px solid transparent;
    width: 90%;
    display: block;
    transition: all 0.3s;

    &:focus {
        outline: none;
        box-shadow: 0 1rem 2rem rgba($color-black, 0.1);
        border-bottom: 3px solid $color-primary;
    }

    &:focus:invalid {
        border-bottom: 3px solid $color-secondary-dark;
    }

    input-placeholder {
        color: $color-grey-dark-2;
    }
    transition: all 0.3s;
`;

export const ScFormLabel = styled.label`
    font-size: 12px;
    font-weight: 700;
    margin-left: 20px;
    margin-top: 7px;
    display: block;
`;

const ScVideoContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: -1;
    /* opacity: 0.15; */
    overflow: hidden;
`;

const ScVideoTag = styled.video`
    /* height: 100%; */
    width: 100%;
    object-fit: cover;
`;

export class Contact extends Component {
    render() {
        return (
            <div>
                <ScVideoContainer class="bg-video">
                    <ScVideoTag class="bg-video__content" autoPlay muted loop>
                        <source
                            src={require("../videos/Hey-World.mp4")}
                            type="video/mp4"
                        />
                    </ScVideoTag>
                </ScVideoContainer>
                <ScSection class="section-book">
                    <ScRow justifyContent="center">
                        <ScBook class="book">
                            <ScFormWrapper class="book__form">
                                <ScForm action="#" class="form">
                                    <ScHeaderContainer class="u-margin-bottom-medium">
                                        <ScHeader class="heading-secondary">
                                            Contact
                                        </ScHeader>
                                    </ScHeaderContainer>

                                    <ScFormGroup class="form__group">
                                        <ScFormInput
                                            type="text"
                                            class="form__input"
                                            placeholder="Full name"
                                            id="name"
                                            required
                                        />
                                        {/* <label for="name" class="form__label">
                                            Full name
                                        </label> */}
                                    </ScFormGroup>

                                    <ScFormGroup class="form__group">
                                        <ScFormInput
                                            type="email"
                                            class="form__input"
                                            placeholder="Email address"
                                            id="email"
                                            required
                                        />
                                        {/* <label for="email" class="form__label">
                                            Email address
                                        </label> */}
                                    </ScFormGroup>

                                    <ScFormGroup class="form__group">
                                        <ScFormInput
                                            type="text"
                                            class="form__input"
                                            placeholder="Message"
                                            id="email"
                                            required
                                        />
                                        {/* <label for="text" class="form__label">
                                            Message
                                        </label> */}
                                    </ScFormGroup>

                                    <ScFormGroup class="form__group">
                                        <button class="btn btn--green">
                                            Submit &rarr;
                                        </button>
                                    </ScFormGroup>
                                </ScForm>
                            </ScFormWrapper>
                        </ScBook>
                    </ScRow>
                </ScSection>
                {/* <div class="bg-video">
                    <video class="bg-video__content" autoplay muted loop>
                        <source src="img/video.mp4" type="video/mp4" />
                        <source src="img/video.webm" type="video/webm" />
                    </video>
                </div> */}
            </div>
        );
    }
}
