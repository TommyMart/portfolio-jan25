import { Avatar, Button, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import AudioIntro from "./intro";
import DisplayIcons from "./iconDisplay";
import { useEffect, useState } from "react";

const greeting = "Hello, I am Tom!";
const bio1 = "A Junior Full-Stack Developer";

const LandingSection = () => {

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
        
        <Avatar position="relative" zIndex={10} className="expand2 glow" src={"/IMG_0900.jpeg"} width={300} height={300}/>
        <VStack py={20}>
            <h1 position="relative" zIndex={10}>{greeting}</h1>
            <Heading position="relative" zIndex={10} className="expand2" >{bio1}</Heading>
            <DisplayIcons />
        </VStack>
        <AudioIntro />
        <DisplayIcons />
    </FullScreenSection>
    </>
    )
}

export default LandingSection;