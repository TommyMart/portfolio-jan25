import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

const Transcription = ({ setFieldValue }) => {
  const [transcription, setTranscription] = useState("");
  const [isListening, setIsListening] = useState(false);

  const startTranscription = () => {
    if (!("webkitSpeechRecognition" in window || "SpeechRecognition" in window)) {
      alert("Sorry, your browser does not support the Web Speech API.");
      return;
    }

    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.start();
    setIsListening(true);

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setTranscription(transcript);
      setFieldValue("comment", transcript); // Update the Formik comment field
      setIsListening(false);
    };

    recognition.onerror = (event) => {
      console.error("Speech recognition error:", event.error);
      setIsListening(false);
    };

    recognition.onend = () => {
      setIsListening(false);
    };
  };

  return (
    
      <Button
        colorScheme="purple"
        onClick={startTranscription}
        isLoading={isListening}
        loadingText="Listening..."
        width="50%"
        
      >
        Transcribe
      </Button>
    
  );
};

export default Transcription;
