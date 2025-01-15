import { Heading, HStack, VStack } from "@chakra-ui/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


const Card = ({ title, description, imageSrc, repoUrl }) => {
    return (
        <VStack
            color="black"
            backgroundColor="white"
            cursor="pointer"
            borderRadius="xl"
            >
                <Image borderRadius="xl" src={src} alt={title}></Image>
                <HStack justifyContent={"space-between"} alignItems={"center"}>
                    <Heading as="h3" size="md">
                        {title}
                    </Heading>
                </HStack>
                <Text color="#64748b" frontSize="lg">
                    {description}
                </Text>
                <HStack spacing={2} alignItems={"center"}>
                    <p>Visit Repo</p>
                    <a href={repoUrl}><FontAwesomeIcon icon={farRightArrow} size="1x" /></a>
                </HStack>
            </VStack>
    )
}

export default Card;