import { useState } from "preact/hooks";
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
} from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
// And react-slick as our Carousel Lib
import Slider from "react-slick";

import ban1 from "../../../img/banners/ban1.webp";
import ban2 from "../../../img/banners/ban2.webp";
import ban3 from "../../../img/banners/ban3.webp";
import { applyLanguage } from "../../../utils/language";

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function CaptionCarousel() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = useState<any | null>(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "40px" });

  // This list contains all the data for carousels
  // This can be static or loaded from a server
  const obtainCardsContent = () => [
    {
      title: applyLanguage("欢迎来到海盛国际咨询有限公司", "Welcom to Hisen"),
      text: applyLanguage(
        "位于美丽的温哥华，为您提供专业的加拿大移民咨询服务。",
        "Located in beautiful Vancouver, we provide professional Canadian immigration consulting services."
      ),
      image: ban1,
    },
    {
      title: applyLanguage(
        "您的移民梦，我们的承诺",
        "Your Immigration Dreams, Our Commitment"
      ),
      text: applyLanguage(
        "经验丰富的团队，引导您走向成功的移民之路。",
        "An experienced team to guide you on the path to successful immigration."
      ),
      image: ban2,
    },
    {
      title: applyLanguage("加拿大，一个新的开始", "Canada, a new beginning"),
      text: applyLanguage(
        "探索这片充满机会和自然之美的土地。",
        "Explore this land of opportunity and natural beauty."
      ),
      image: ban3,
    },
  ];

  return (
    <Box
      position={"relative"}
      height={"600px"}
      width={"full"}
      overflow={"hidden"}
    >
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickPrev()}
      >
        <BiLeftArrowAlt size="40px" />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickNext()}
      >
        <BiRightArrowAlt size="40px" />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider: any) => setSlider(slider)}>
        {obtainCardsContent().map((card, index) => (
          <Box
            key={index}
            height={"6xl"}
            position="relative"
            backgroundPosition="bottom"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${card.image})`}
          >
            {/* This is the block you need to change, to customize the caption */}

            <Container size="container.lg" height="600px" position="relative">
              <Stack
                spacing={6}
                w={"full"}
                maxW={"lg"}
                position="absolute"
                top="50%"
                transform="translate(0, -50%)"
              >
                <Heading
                  fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
                  whiteSpace="nowrap"
                  textShadow="2px 2px 4px rgba(0, 0, 0, 0.5)"
                >
                  {card.title}
                </Heading>
                <Text
                  fontSize={{ base: "md", lg: "lg" }}
                  whiteSpace="nowrap"
                  color="black"
                  textShadow="2px 2px 4px rgba(0, 0, 0, 0.5)"
                >
                  {card.text}
                </Text>
              </Stack>
            </Container>
            <Box
              position="absolute"
              top="0"
              left="0"
              w="100%"
              h="100%"
              bg="rgba(0, 0, 0, 0.1)"
              zIndex="1"
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
