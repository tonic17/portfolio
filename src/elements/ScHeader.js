import styled from "styled-components";

export const ScHeader = styled.header`
    height: 85vh;
    background-image: linear-gradient(
        to right bottom,
        rgba(74, 0, 224, 0.8),
        rgba(142, 45, 226, 0.8)
    );
    background-size: cover;
    background-position: center;
    position: relative;

    // graceful degradation
    @supports (clip-path: polygon(0 0)) or (-webkit-clip-path: polygon(0 0)) {
        -webkit-clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);
        clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);
    }
`;
