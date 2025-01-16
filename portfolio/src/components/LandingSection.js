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
        
        <Avatar position="relative" mt={118} zIndex={10} className="expand2 glow" src={"/IMG_0900.jpeg"} width={300} height={300}/>
        <VStack pt={16} pb={4}>
            <h1 position="relative" zIndex={10}>{greeting}</h1>
            <Heading position="relative" zIndex={10} className="expand2" >{bio1}</Heading>
            <DisplayIcons />
        </VStack>
        <AudioIntro pt={0}/>
        <DisplayIcons />
        <Button position="relative" zIndex={10} colorScheme="purple" 
        onClick={() => setShowTranscription(!showTranscription)}>
            Transcription</Button>
        {showTranscription && (<Text py={10} width="60%" textAlign={"center"}>
        "Hi 👋, my name's Tom and welcome to my Portfolio Website! <br/><br/>

I didn’t grow up with computers, but over the past year, I’ve become deeply fascinated with the world of technology. What started as a curiosity turned into a passion that drives me to spend every moment learning, building, and experimenting. From coding challenges to full-stack projects, I’ve immersed myself in this incredible field, constantly pushing myself to grow and improve. <br/><br/>

This portfolio showcases my journey so far, highlighting the projects I’ve created and the skills I’ve developed along the way. Each piece represents not just a technical achievement but also my dedication to problem-solving, creativity, and continuous learning. <br/><br/>

Thank you for visiting, and I hope my work inspires you as much as this journey has inspired me!"
       
        </Text>)
}
    </FullScreenSection>
    </>
    )
}

export default LandingSection;