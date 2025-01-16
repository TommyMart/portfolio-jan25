import { Avatar, Button, Heading, VStack, Text } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import AudioIntro from "./intro";
import DisplayIcons from "./iconDisplay";
import { useEffect, useState } from "react";

const greeting = "Hello, I am Tom!";
const bio1 = "A Junior Full-Stack Developer";

const LandingSection = () => {
    const [showTranscription, setShowTranscription] = useState(false);

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
            <h1 position="relative" zIndex={10}>{greeting}</h1>
            <Heading fontSize={{ base: "lg", md: "2xl" }} position="relative" zIndex={10} className="expand2" >{bio1}</Heading>
            <DisplayIcons />
        </VStack>
        {/* <AudioIntro /> */}
        <DisplayIcons />
        <Button position="relative" zIndex={10} colorScheme="purple" 
        onClick={() => setShowTranscription(!showTranscription)}>
            Introduction</Button>
        {showTranscription && (<Text py={10} width="60%" textAlign={"center"}>
        "Hi 👋, my name's Tom and welcome to my Portfolio Website! <br/><br/>

I didn’t grow up with computers, but over the past year, I’ve become deeply fascinated with the world of technology. What started as a curiosity turned into a passion that drives me to spend every moment learning, building, and experimenting. From coding challenges to full-stack projects, I’ve immersed myself in this incredible field, constantly pushing myself to grow and improve. <br/><br/>

This portfolio showcases my journey so far, highlighting a few of the projects I’ve created thus far, and the skills I’ve developed along the way. Each piece represents not just a technical achievement but also my dedication to problem-solving, creativity, and continuous learning. <br/><br/>

Thank you for visiting, and I hope my work inspires you as much as this journey has inspired me!"
       
        </Text>)
}
    </FullScreenSection>
    </>
    )
}

export default LandingSection;