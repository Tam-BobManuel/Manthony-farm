import React, { useState, useEffect } from "react";
import { Box, Image, IconButton, Text } from "@chakra-ui/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface Props {
  images: string[];
  textOverlays: string[];
}

const Slideshow: React.FC<Props> = ({ images, textOverlays }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  const goToPrev = () => {
    setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <Box
      position="relative"
      width="100%"
      height="90vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
      margin={"0%"}
      padding={"0%"}
    >
      {images.map((imageUrl, i) => (
        <Box
          key={i}
          display={i === index ? "block" : "none"}
          position="relative"
          width="100%"
          height="100%"
        >
          <Box
            position="absolute"
            top="0"
            left="0"
            width="100%"
            height="100%"
            backgroundColor="rgba(0, 0, 0, 0.3)"
          />
          <Image
            src={imageUrl}
            alt={`Slide ${i}`}
            width="100%"
            height="100%"
            objectFit="cover"
          />
          <Text
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            color="white"
            fontWeight="bold"
            fontSize="2xl"
            zIndex="1"
          >
            {textOverlays[i]}
          </Text>
        </Box>
      ))}
      <IconButton
        position="absolute"
        top="50%"
        left="2%"
        transform="translateY(-50%)"
        icon={<FaChevronLeft />}
        aria-label="Previous"
        onClick={goToPrev}
      />
      <IconButton
        position="absolute"
        top="50%"
        right="2%"
        transform="translateY(-50%)"
        icon={<FaChevronRight />}
        aria-label="Next"
        onClick={goToNext}
      />
    </Box>
  );
};

export default Slideshow;
