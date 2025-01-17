import * as React from "react";
import { VStack } from "@chakra-ui/react";

/**
 * Illustrates the use of children prop and spread operator
 */
const FullScreenSection = ({ children, isDarkBackground, ...boxProps }) => {
  return (
    <VStack
      backgroundColor={boxProps.backgroundColor}
      color={isDarkBackground ? "white" : "black"}
      width={"100%"}
      overflowX={"hidden"}
    >
      <VStack maxWidth="1280px" minHeight="100vh" width={"100%"} {...boxProps}>
        {children}
      </VStack>
    </VStack>
  );
};

export default FullScreenSection;
