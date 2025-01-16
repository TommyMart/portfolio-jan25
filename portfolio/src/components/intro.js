import { VStack, Button, Text } from "@chakra-ui/react";
import { useRef, useEffect, useState } from "react";

const AudioIntro = () => {
  const audioRef = useRef(null); 
  const [audioPlaying, setAudioPlaying] = useState(false);

    useEffect(() => {
    audioRef.current = new Audio("/intro.mp3");
    audioRef.current.preload = "auto"; 
  }, []);

  const playAudio = () => {
    const audio = audioRef.current;
    if (!audio) {
      console.error("Audio reference not initialized");
      return;
    }

    if (audioPlaying) {
        audio.pause();
    } else {
        audio
            .play()
            .catch((error) => {
                console.error("Audio playback failed:", error);
                alert("Could not play the audio. Please check the file path and format.");
            });
    }

    setAudioPlaying(!audioPlaying)
    }

  return (
    <VStack spacing={4}>
      <Button position="relative" zIndex={10} colorScheme="purple" onClick={playAudio}>
        {audioPlaying ? "Pause Audio" : "🎤 Play Intro"}
      </Button>

    </VStack>
  );
};

export default AudioIntro;
