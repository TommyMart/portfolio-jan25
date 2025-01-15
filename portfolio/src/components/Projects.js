 import { Box, Heading } from "@chakra-ui/react";
import surveyBuddyImg from "../images/surveyBuddyImg.png";
import musicTutorial from "../images/chatbot.png";
import quizNight from "../images/highscores.png";
import api from "../images/api.png";
import FullScreenSection from "./FullScreenSection";
import Card from "./Card";

const projects = [
    {
        title: "SuveyBuddy",
        description: "SurveyBuddy is a user-friendly full-stack web application that streamlines survey creation, sharing, and data collection while offering intuitive data visualisation through charts and graphs.",
        imageSrc: surveyBuddyImg,
        repoUrl: "https://github.com/Survey-Buddy",
    },
    {
        title: "Music Tutorial ChatBot",
        description: "Music Tutorial ChatBot is an innovative platform recently built under time constraints for a hackathon, it is designed to help users enhance their music production skills in a variety of popular genres.",
        imageSrc: musicTutorial,
        repoUrl: "https://github.com/TommyMart/music-chat-bot",
    },
    {
        title: "RESTful API Webserver",
        description: "One of my notable projects, was my introduction to backend development and working with APIs. I built a RESTful API web server using Python, Flask, SQLAlchemy, and PostgreSQL, where user information is authorised via JWT and securely hashed using Bcrypt.",
        imageSrc: api,
        repoUrl: "https://github.com/TommyMart/Event_CommsAndTicketing_API",
    },
    {
        title: "Terminal Quiz Night",
        description: "As part of a Term 1 assignment, I built a fully functional quiz night terminal application using Python, Bash scripting, and rich styling for an enhanced user experience.",
        imageSrc: quizNight,
        repoUrl: "https://github.com/TommyMart/QuizNight_Terminal_App",
    }
]

const Projects = () => {
    return (
        <FullScreenSection
            backgroundColor={"black"}
            isDarkBackground
            p={8}
            py={20}
            alignItems={"flex-start"}
            spacing={8}
            >
                <Heading as="h1" id="projects-section">
                    Featured Projects
                </Heading>
                <Box 
                    display="grid"
                    gridTemplateColumns="repeat(2, minmax(0, 1fr))"
                    gridGap={8}
                    
                    >
                {projects.map((project) => (
                    
                        <Card
                        key={project.title}
                        title={project.title}
                        description={project.description}
                        repoUrl={project.repoUrl}
                        imageSrc={project.imageSrc}
                        />
                    
                ))}
                </Box>
            </FullScreenSection>
    );
};

export default Projects;