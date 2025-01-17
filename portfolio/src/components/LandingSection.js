import { Avatar, Button, Heading, VStack, Text, Box, HStack, Flex } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import AudioIntro from "./intro";
import DisplayIcons from "./iconDisplay";
import { useEffect, useState } from "react";

const greeting = "Hello, I am Tom!";
const bio1 = "A Junior Full-Stack Developer";
const description = "Hi 👋, my name's Tom and welcome to my Portfolio Website!"

const description2 = `I didn’t grow up with computers, but over the past year, I’ve become deeply fascinated with the world of technology. What started as a curiosity turned into a passion that drives me to spend every moment learning, building, and experimenting. Recently, I completed an intensive 10-month coding bootcamp at Coder Academy, where I honed my skills in full-stack development and tackled real-world projects. I’m now excited to take the next step and find a role where I can contribute, grow, and continue this incredible journey.`

const description3 = `This portfolio showcases my journey so far, highlighting a few of the projects I’ve created, and the skills I’ve developed along the way. Each piece represents not just a technical achievement but also my dedication to problem-solving, creativity, and continuous learning.` 

const description4 = `Thank you for visiting, and I hope my work inspires you as much as this journey has inspired me!`

const formalEducation = [
    {
        courseName: "Higher Education Diploma of IT",
        school: "Coder Academy",
        yearFinish: "2024"
    },
    {
        courseName: "Diploma of Visual Communications",
        school: "Adelaide College of the Arts",
        yearFinish: "2025"
    },
    {
        courseName: "Bachelor of Management (Marketing)",
        school: "University of South Australia",
        yearFinish: "2022"
    },
]

const certs = [
    {
        courseName: "Front-End Developer Professional Cert",
        school: "Meta",
        yearFinish: "2025"
    },
    {
        courseName: "AWS Cloud Practitioner Cert",
        school: "AWS",
        yearFinish: "2024"
    },
    {
        courseName: "Graphic Design Bootcamp",
        school: "The Graphic Design School Sydney",
        yearFinish: "2023"
    }
]

const LandingSection = () => {
    const [showTranscription, setShowTranscription] = useState(false);
    const [showEducation, setShowEducation] = useState(false);

    const [iconDelay1, setIconDelay1] = useState(false);
    const [iconDelay2, setIconDelay2] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIconDelay1(true);
        }, 1000)
    }, [])

    useEffect(() => {
        const timer = setTimeout(() => {
            setIconDelay2(true);
        }, 2000)
    }, [])

    return (
        <>
        
     <FullScreenSection
        justifyContent="center"
        alignItems="center"
        isDarkBackground
        backgroundColor="#512DA8"
    >   
        {iconDelay1 && <DisplayIcons />}
        {iconDelay2 && <DisplayIcons />}
        <DisplayIcons />
        
        <Avatar position="relative" mt={{ base: 32, md: 28 }} zIndex={10} className="expand2 avatar" src={"/IMG_0900.jpeg"} width={{ base: 150, md: 300}} height={{ base: 150, md: 300}}/>
        <VStack pt={16} pb={8}>
            <Text position="relative" zIndex={10}>{greeting}</Text>
            <Heading fontSize={{ base: "lg", md: "2xl" }} position="relative" zIndex={10} className="expand2" >{bio1}</Heading>
            <DisplayIcons />
        </VStack>
        {/* <AudioIntro /> */}
        <DisplayIcons />
        <Button position="relative" zIndex={10} colorScheme="purple" 
        onClick={() => setShowTranscription(!showTranscription)}>
            Introduction</Button>
        {showTranscription && (<Text py={10} width="63%" textAlign={"center"}>
        {description} <br/><br/>
        {description2} <br/><br/>
        {description3} <br/><br/>
        {description4} <br/><br/>
       
        </Text>)
}       <Button position="relative" mb={5} zIndex={10} colorScheme="purple" 
        onClick={() => setShowEducation(!showEducation)}>
            Education</Button>

            {showEducation && (
    <Box pl={{ base: "6", md: "0" }} py={3}>
        {/* Container for Education Lists */}
        <Flex direction={{ base: "column", md: "row" }} gap={6}>
            {/* Formal Education Section */}
            <Box>
                <Heading py={2} size="md">Formal Education</Heading>
                <ul>
                    {formalEducation.map((education) => (
                        <li key={education.courseName}>
                            <Heading pt={2} pl={2} size="sm">{education.courseName}</Heading>
                            <Text pl={2}>{education.school}</Text>
                            <Text pl={2}>{education.yearFinish}</Text>
                        </li>
                    ))}
                </ul>
            </Box>

            {/* Certifications Section */}
            <Box>
                <Heading py={2} size="md">Certifications</Heading>
                <ul >
                    {certs.map((cert) => (
                        <li key={cert.courseName}>
                            <Heading pt={2} pl={2} size="sm">{cert.courseName}</Heading>
                            <Text pl={2}>{cert.school}</Text>
                            <Text pl={2}>{cert.yearFinish}</Text>
                        </li>
                    ))}
                </ul>
            </Box>
        </Flex>
    </Box>
)}

    </FullScreenSection>
    </>
    )
}

export default LandingSection;