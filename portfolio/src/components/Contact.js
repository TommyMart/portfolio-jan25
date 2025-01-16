import React, {useEffect, useState} from "react"; 
import { useFormik } from "formik"; 
import { 
 Box, 
 Button, 
 FormControl, 
 FormErrorMessage, 
 FormLabel, 
 Heading, 
 HStack, 
 Input, 
 Select, 
 Text, 
 Textarea, 
 VStack, 
} from "@chakra-ui/react"; 
import * as Yup from 'yup'; 
import emailjs from "@emailjs/browser";
import FullScreenSection from "./FullScreenSection"; 
import Transcription from "./transcription";
import DisplayIcons from "./iconDisplay";



const ContactMe = () => {
    const [iconDelay1, setIconDelay1] = useState(false);
    const [iconDelay2, setIconDelay2] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIconDelay1(true);
        }, 1700)
    }, [])

    useEffect(() => {
        const timer = setTimeout(() => {
            setIconDelay2(true);
        }, 2700)
    }, [])

    const formik = useFormik({
        initialValues: {
            firstName: "",
            email: "",
            type: "hireMe",
            comment: "",
        },
        onSubmit: (values, { resetForm }) => {

            emailjs
                .send(
                'service_wg8j5py', 
                'template_8rvxt36',
                {
                    from_name: values.firstName,
                    from_email: values.email,
                    type: values.type,
                    message: values.comment,
                }, 
                'vOclEW_YSx6dM_1Fi'
                )
                .then(() => {
                    alert("Your message has been sent successfully!");
                    resetForm();
                },
            (error) => {
                console.log("Message failed to send.", error);
                alert("Failed to send the message. Please try again later.");
            })
                
      
        },
        validationSchema: Yup.object({
            firstName: Yup.string().required("Required"), 
            email: Yup.string().email("Invalid email address").required("Required"), 
            comment: Yup.string() 
                .min(25, "Must be at least 25 characters") 
                .required("Required"), 
        }),
    });

    return (
        <FullScreenSection
            isDarkBackground
            backgroundColor="#512DA8"
            py={8}
            px={8}
            >
            {iconDelay1 && <DisplayIcons />}
            {iconDelay2 && <DisplayIcons />}
            <DisplayIcons /> 

                <VStack w="1024" p={32} pb={0} alignItems="center" >
                    <Heading as="h1" id="contactme-section">
                        Contact Me  
                        </Heading>
                    <Box p={6} rounded="md" w="100%">
                        <form onSubmit={formik.handleSubmit}>
                            <VStack spacing={4}>
                                <FormControl isInvalid={!!formik.errors.firstName && formik.touched.firstName}>
                                <FormLabel htmlFor="firstName">Name</FormLabel>
                                <Input
                                    id="firstName"
                                    name="firstName"
                                    {...formik.getFieldProps("firstName")}
                                />
                                <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
                                </FormControl>
                            </VStack>
                                <FormControl isInvalid={!!formik.errors.email && formik.touched.email} >
                                    <FormLabel htmlFor="email">Email</FormLabel>
                                    <Input
                                        id="email"
                                        name="email"
                                        type="email"
                                        {...formik.getFieldProps("email")}
                                        />
                                    <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                                </FormControl>
                            <FormControl>
                                <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                                <Select id="type" name="type" {...formik.getFieldProps("type")} >
                                    <option value="other">Other...</option>
                                    <option value="hireMe">Say Hi 👋</option>
                                    <option value="hireMe">Cool idea 😮‍💨</option>
                                    <option value="hireMe">Exployment 🦾</option>
                                    <option value="hireMe">Freelance proposal 🎯</option>
                                    
                                    </Select>
                            </FormControl>
                            <FormControl isInvalid={!!formik.errors.comment && formik.touched.comment}>
                                <FormLabel htmlFor="comment">Comment</FormLabel>
                                <Textarea
                                    id="comment"
                                    name="comment"
                                    width="400px"
                                    height={250}
                                    {...formik.getFieldProps("comment")}
                                    />
                                <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
                            </FormControl>
                            <HStack>
                            <Button 
                            type="submit"
                            colorScheme="purple"
                            width="50%"
                            >Submit</Button>
                            <Transcription setFieldValue={formik.setFieldValue} />
                            </HStack>
                        </form>

                    </Box>
                    
                </VStack>
                <Box display="flex" justifyContent="center" px={8} py={4}>
        <Text py={0} px={16} textAlign="center" maxW="50%">
          I acknowledge the Kaurna people, the original custodians of the lands
          on which this website was built, and that sovereignty was never ceded.
        </Text>
        
      </Box>
      <Text py={0} textAlign="center">
        thomas.h.martin89@gmail.com
        </Text>
        <Text className="expand3">❤️</Text>
            </FullScreenSection>
    )
}

export default ContactMe;