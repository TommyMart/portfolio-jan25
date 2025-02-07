 import { Box, Heading, Link } from "@chakra-ui/react";
import surveyBuddyImg from "../images/surveyBuddyImg.png";
import musicTutorial from "../images/chatbot.png";
import quizNight from "../images/highscores.png";
import api from "../images/api.png";
import FullScreenSection from "./FullScreenSection";
import Card from "./Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"; 
import DisplayIcons from "./iconDisplay";
import { useEffect, useState } from "react";
import pokemon from "../images/pokemon.png";
import portfolio from "../images/reactportfolio.png";

const projects = [
    {
        title: "SuveyBuddy",
        description: "SurveyBuddy is a user-friendly full-stack web application that streamlines survey creation, sharing, and data collection while offering intuitive data visualisation through charts and graphs.",
        imageSrc: surveyBuddyImg,
        repoUrl: "https://github.com/Survey-Buddy",
        technologies: "MongoDB, Express, React, Node.JS",
        website: "https://surveybuddy.tech/"
    },
    {
        title: "Music Tutorial ChatBot",
        description: "Music Tutorial ChatBot is an innovative platform recently built under time constraints for a hackathon, it is designed to help users enhance their music production skills in a variety of popular genres.",
        imageSrc: musicTutorial,
        repoUrl: "https://github.com/TommyMart/music-chat-bot",
        technologies: "React, Express, Node.JS, OpenAI",
        website: "https://electronic-music-tutorial.netlify.app/"
    },
    {
        title: "RESTful API Webserver",
        description: "One of my notable projects, was my introduction to backend development and working with APIs. I built a RESTful API web server using Python, Flask, SQLAlchemy, and PostgreSQL, where user information is authorised via JWT and securely hashed using Bcrypt.",
        imageSrc: api,
        repoUrl: "https://github.com/TommyMart/Event_CommsAndTicketing_API",
        technologies: "Python, Flask, SQLAlchemy, PostgreSQL",
        website: null,
    },
    {
        title: "Terminal Quiz Night",
        description: "As part of a Term 1 assignment, I built a fully functional quiz night terminal application using Python, Bash scripting, and rich styling for an enhanced user experience.",
        imageSrc: quizNight,
        repoUrl: "https://github.com/TommyMart/QuizNight_Terminal_App",
        technologies: "Python and Bash Scripting",
        website: null,
    },
    {
        title: "Portfolio 1.0",
        description: "This portfolio website, developed using React, showcases my expertise in modern web development. It leverages powerful tools such as React Scroll, React Router, EmailJS, and hooks to create a seamless and interactive user experience.",
        imageSrc: portfolio,
        repoUrl: "https://github.com/TommyMart/react-portfolio",
        technologies: "React",
        website: "https://main--tommartin-portfolio.netlify.app/",
    },
    {
        title: "Pokemon API Game",
        description: "Dive into the exciting world of my Pokemon Browser Game, built with JavaScript and the Pokemon API. In this interactive web application, players can catch Pokemon that appear on the screen using their Pokemon ball cursor, aiming for a high score.",
        imageSrc: pokemon,
        repoUrl: "https://github.com/TommyMart/Catch-A-Pokemon-",
        technologies: "JavaScript and Pokemon API",
        website: "https://catch-a-pokemon.netlify.app/",
    }
]

const Projects = () => {
    const [iconDelay1, setIconDelay1] = useState(false);
    const [iconDelay2, setIconDelay2] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIconDelay1(true);
        }, 1300)
    }, [])

    useEffect(() => {
        const timer = setTimeout(() => {
            setIconDelay2(true);
        }, 2300)
    }, [])

    return (
        <FullScreenSection
            backgroundColor={"black"}
            isDarkBackground
            p={8}
            py={20}
            alignItems={"flex-start"}
            spacing={8}
            >

            {iconDelay1 && <DisplayIcons />}
            {iconDelay2 && <DisplayIcons />}
            <DisplayIcons />

                <Heading as="h1" id="projects-section">
                    Featured Projects
                </Heading>
                <Box 
                    display="grid"
                    gridTemplateColumns={{ base: "repeat(1, minmax(0, 1fr))", md: "repeat(2, minmax(0, 1fr))"}}
                    gridGap={8}
                    
                    >
                {projects.map((project) => (
                    
                    <Card
                        key={project.title}
                        title={project.title}
                        description={project.description}
                        repoUrl={project.repoUrl}
                        imageSrc={project.imageSrc}
                        technologies={project.technologies}
                        website={project.website}
                    />
                    
                ))}
                </Box>
                <Link href="https://github.com/TommyMart" isExternal>
                <Heading as={"h6"} size={{ base: "md", md: "lg"}} >View more projects here 
                    <FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: "8px" }}></FontAwesomeIcon>
                </Heading></Link>
            </FullScreenSection>
    );
};

export default Projects;