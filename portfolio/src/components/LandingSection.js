import { Avatar, Heading, VStack, keyframes } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Tom!";
const bio1 = "A Junior Full-Stack Developer";

const LandingSection = () => {

    return (
    <FullScreenSection
        justifyContent="center"
        alignItems="center"
        isDarkBackground
        backgroundColor="#512DA8"
    >
        
        <Avatar src={"/IMG_0900.jpeg"} width={300} height={300}/>
        <VStack py={20}>
            <h1>{greeting}</h1>
            <Heading>{bio1}</Heading>
            
        </VStack>
    </FullScreenSection>
    )
}

export default LandingSection;