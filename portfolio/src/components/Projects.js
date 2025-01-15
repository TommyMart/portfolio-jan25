 import { Box, Heading } from "@chakra-ui/react";
import surveyBuddyImg from "../images/surveyBuddyImg.png";
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
        title: "SuveyBuddy",
        description: "SurveyBuddy is a user-friendly full-stack web application that streamlines survey creation, sharing, and data collection while offering intuitive data visualisation through charts and graphs.",
        imageSrc: surveyBuddyImg,
        repoUrl: "https://github.com/Survey-Buddy",
    }
]

const Projects = () => {
    return (
        <FullScreenSection
            backgroundColor={"black"}
            isDarkBackground
            p={8}
            alignItems={"flex-start"}
            spacing={8}
            >
                <Heading as="h1" id="projects-section">
                    Featured Projects
                </Heading>
                <Box 
                    display="grid"
                    gridTemplateColumns="repeat(2,minmax(0,1fr)"
                    gridGap={8}
                    >
                {projects.map((project) => {
                    return (
                        <Card
                        key={project.title}
                        title={project.title}
                        description={project.description}
                        repoUrl={project.repoUrl}
                        imageSrc={project.imageSrc}
                        />
                    )
                })}
                </Box>
            </FullScreenSection>
    );
};

export default Projects;