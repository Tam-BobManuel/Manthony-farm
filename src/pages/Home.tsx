import { Box } from "@chakra-ui/react";
import AboutUs from "../components/AboutUs";
import Slideshow from "../components/SlideShow";
import data from "../data/homeData.json";

function Home() {
  const {
    images,
    textOverlays,
    aboutUsImages,
    aboutUsImagePositions,
    aboutUsHeadings,
    explainText,
  } = data;

  return (
    <div style={{ textAlign: "center" }}>
      <Slideshow images={images} textOverlays={textOverlays} />
      <Box bgSize="cover" bgPosition="center">
        <div style={{ margin: "0 auto", maxWidth: "100%" }}>
          {aboutUsHeadings.map((heading, index) => (
            <AboutUs
              key={index}
              text={explainText[index].text}
              imageUrl={aboutUsImages[index]}
              imagePosition={
                aboutUsImagePositions[index] as "left" | "right" | undefined
              }
              heading={heading}
              button={explainText[index].button}
            />
          ))}
        </div>
      </Box>
    </div>
  );
}

export default Home;
