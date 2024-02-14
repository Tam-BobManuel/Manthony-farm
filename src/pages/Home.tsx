import { Box } from "@chakra-ui/react";
import AboutUs from "../components/AboutUs";
import Slideshow from "../components/SlideShow";
import data from "../data/homeData.json";
import homeAboutImg from "../assets/images/background/photo-1627462656780-964d9535a50b.avif";

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
      <Box bgImage={homeAboutImg} bgSize="cover" bgPosition="center">
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
