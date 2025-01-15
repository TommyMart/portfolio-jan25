import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"; 


const Card = ({ title, description, imageSrc, repoUrl }) => {
    return (
        <VStack
            color="black"
            backgroundColor="white"
            cursor="pointer"
            borderRadius="xl"
            >
                <Image borderRadius="xl" width="35%" src={imageSrc} alt={title}></Image>
                <HStack justifyContent={"space-between"} alignItems={"center"}>
                    <Heading as="h3" size="md">
                        {title}
                    </Heading>
                </HStack>
                <Text color="#64748b" frontsize="lg">
                    {description}
                </Text>
                <HStack spacing={2} alignItems={"ceånter"}>
                    <p>Visit Repo</p>
                    <a href={repoUrl}><FontAwesomeIcon icon={faArrowRight} size="1x" /></a>
                </HStack>
            </VStack>
    )
}

export default Card;