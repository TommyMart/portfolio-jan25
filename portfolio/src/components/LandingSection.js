import { Avatar, Heading, VStack } from "@chakra-ui/react";
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
        <Avatar src={"/IMG_0900.jpeg"}/>
        <VStack>
            <h1>{greeting}</h1>
            <Heading>{bio1}</Heading>
            
        </VStack>
    </FullScreenSection>
    )
}

export default LandingSection;