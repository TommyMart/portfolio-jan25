import { Button, Heading, HStack, Image, Link, Text, VStack } from "@chakra-ui/react";
import "../styles/expand.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCloud } from "@fortawesome/free-solid-svg-icons";



const Card = ({ title, description, imageSrc, repoUrl, technologies, website }) => {
    return (
        <VStack
            color="black"
            backgroundColor="white"
            borderRadius="xl"
            p={8}
            className="expand"
            spacing={6} // Add spacing between items
            alignItems="flex-start" // Align content to the left
            height="100%" // Ensure consistent height
            position="relative" // Parent for absolute positioning
            >
                <HStack justifyContent={"space-between"} alignItems={"center"}>
                    <Heading as="h3" size="md">
                        ⭐️  {title}
                    </Heading>
                </HStack>
                <Heading mb={0} pl={2} as={"h6"} size={"sm"}>{technologies}</Heading>
                <Image  height={"70%"} objectFit="cover" p={2} src={imageSrc} alt={title}></Image>
                
                <Text color="#64748b" frontsize="lg">
                    {description}
                </Text>
                <HStack spacing={2} >

                    <Link py={0} bottom="0"  target="_blank" href={repoUrl}
                    >
                        <Button ><FontAwesomeIcon icon={faGithub} style={{ marginRight: "7px" }}/>View Repository</Button>
                    </Link>
                    {website && (<Link py={0} bottom="0"  target="_blank" href={website}
                    >
                        <Button ><FontAwesomeIcon icon={faCloud} style={{ marginRight: "7px" }}/>View Website</Button>
                    </Link>)}
                </HStack>
            </VStack>
    )
};

export default Card;