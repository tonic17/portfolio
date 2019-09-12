import { css } from "styled-components";

export const data = [
    {
        id: "Galaxy Wariors",
        github_link: "https://github.com/sdiperi90/galaxy-warriors-project",
        deployed_link:
            "https://pages.git.generalassemb.ly/sdiperi17/galaxy-warriors/index.html",
        description:
            "Spaceship shooting Game. Protect Earth from Aliens. There will be a large number of enemies invading planet and player has to shoot and destroy them. Player can play with selected Spaceship. Built using Javascript, CSS and HTML allows users to play with spaceship of their choice from the menu.",
        technologies_used: ["Javascript", "HTML", "CSS", "external API"],
        image: "galaxy-warriors.png",
        video: "galaxy-warriors.mp4",
        color: css`
            background-image: linear-gradient(#ff4e00, #ec9f05);
        `
    },
    {
        id: "Horoscope",
        github_link: "https://github.com/sdiperi90/zodiac",
        deployed_link: "https://zodiac-sdiperi.netlify.com/",
        description:
            "Zodiac app gives a glimpse of a person's basic characteristics, preferences, flaws and fears based on zodiac sign. It allows user to enter date of birth and get his/her zodiac",
        technologies_used: [
            "React",
            "Javascript",
            "HTML",
            "CSS",
            "SASS",
            "external API"
        ],
        image: "zodiac-app.png",
        video: "zodiac.mp4",
        color: css`
            background-image: linear-gradient(
                to right bottom,
                #92dff3,
                #045de9
            );
        `
    },
    {
        id: "Beats-player",
        github_link: "https://git.generalassemb.ly/sdiperi17/b-EATS",
        deployed_link: "",
        description:
            "Music lovers are able to create a video playlist of songs. Users are able to create account, or login. Users are then able to search database based on several search criteria options, and either play video from search results, or add video to their playlist of choice.",
        technologies_used: [
            "React",
            "Javascript",
            "Express",
            "Sequelize",
            "HTML",
            "CSS"
        ],
        image: "beats-player.png",
        video: "",
        color: css`
            background-image: linear-gradient(
                90deg,
                rgba(247, 121, 125, 1) 0%,
                rgba(251, 215, 134, 1) 30%,
                rgba(198, 255, 221, 1) 100%
            );
        `
    },
    {
        id: "registry-app",
        github_link: "https://git.generalassemb.ly/sdiperi17/registry-app",
        deployed_link: "",
        description:
            "With registry app users are able to create a registry for wedding or baby shower events and add a list of items they wish to receive as a gift, then share it to family and friends. When the item is selected by friends or family.",
        technologies_used: [
            "React",
            "Javascript",
            "Express",
            "Sequelize",
            "HTML",
            "CSS",
            "SASS",
            "SQL"
        ],
        image: "registry-app.png",
        video: "registry-app.mp4",
        color: css`
            background-image: linear-gradient(
                to right bottom,
                #b7e9f7,
                #92dff3
            );
        `
    },
    {
        id: "Lady-bird",
        github_link: "https://git.generalassemb.ly/brianogilvie/ladybird",
        deployed_link: "https://ladybird-app.herokuapp.com/",
        description:
            "This project is a redesign of the website for New York City restaurant Ladybird.",
        technologies_used: [
            "React",
            "Javascript",
            "Express",
            "Sequelize",
            "HTML",
            "CSS",
            "SQL"
        ],
        image: "lady-bird.png",
        video: "lady-bird.mp4",
        color: css`
            background-image: linear-gradient(
                to right bottom,
                #000000,
                #55efc4
            );
        `
    }
];
