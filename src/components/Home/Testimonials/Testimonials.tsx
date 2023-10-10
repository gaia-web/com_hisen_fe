"use client";

import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
} from "@chakra-ui/react";
import { applyLanguage } from "../../../utils/language";

interface Props {
  children: preact.ComponentChildren;
}

const Testimonial = (props: Props) => {
  const { children } = props;

  return <Box>{children}</Box>;
};

const TestimonialContent = (props: Props) => {
  const { children } = props;

  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      boxShadow={"lg"}
      p={8}
      rounded={"xl"}
      align={"center"}
      pos={"relative"}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: "solid transparent",
        borderLeftWidth: 16,
        borderRight: "solid transparent",
        borderRightWidth: 16,
        borderTop: "solid",
        borderTopWidth: 16,
        borderTopColor: useColorModeValue("white", "gray.800"),
        pos: "absolute",
        bottom: "-16px",
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      {children}
    </Stack>
  );
};

const TestimonialHeading = (props: Props) => {
  const { children } = props;

  return (
    <Heading as={"h3"} fontSize={"xl"}>
      {children}
    </Heading>
  );
};

const TestimonialText = (props: Props) => {
  const { children } = props;

  return (
    <Text
      textAlign={"center"}
      color={useColorModeValue("gray.600", "gray.400")}
      fontSize={"sm"}
    >
      {children}
    </Text>
  );
};

const TestimonialAvatar = ({
  src,
  name,
  title,
}: {
  src: string;
  name: string;
  title: string;
}) => {
  return (
    <Flex align={"center"} mt={8} direction={"column"}>
      <Avatar src={src} mb={2} />
      <Stack spacing={-1} align={"center"}>
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={"sm"} color={useColorModeValue("gray.600", "gray.400")}>
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};

export default function WithSpeechBubbles() {
  return (
    <Box bg={useColorModeValue("gray.100", "gray.700")} mt="5rem">
      <Container maxW={"7xl"} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={"center"}>
          <Heading>{applyLanguage("客户心声", "Testimonials")}</Heading>
          <Text>
            {applyLanguage(
              "深受全球客户的信赖与好评",
              "Trusted and appreciated by customers worldwide"
            )}
          </Text>
        </Stack>
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={{ base: 10, md: 4, lg: 10 }}
        >
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>
                {applyLanguage("专业且高效", "Professional and efficient")}
              </TestimonialHeading>
              <TestimonialText>
                {applyLanguage(
                  "与Hisen合作是我做过的最明智的选择之一。他们的团队非常专业，为我提供了很多有价值的建议。",
                  "Working with Hisen was one of the smartest choices I have ever made. Their team is very professional and provided me with a lot of valuable advice."
                )}
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
              }
              name={applyLanguage("李先生", "Mr. Lee.")}
              title={applyLanguage(
                "IT 项目经理 - BCPNP移民申请者",
                "IT Project Manager - BCPNP Immigration Applicant"
              )}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>
                {applyLanguage("服务细致入微", "Meticulous service")}
              </TestimonialHeading>
              <TestimonialText>
                {applyLanguage(
                  "Hisen的团队真的很细心，他们帮我规划了整个移民过程，让我感到非常放心。",
                  "The team at Hisen was really attentive, they helped me plan the whole immigration process and made me feel at ease."
                )}
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
              }
              name={applyLanguage("王女士", "Ms. Wang.")}
              title={applyLanguage(
                "市场营销经理 - 联邦移民申请者",
                "Marketing Manager - Federal Immigration Applicants"
              )}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>
                {applyLanguage("令人震撼的服务", "Stunning service")}
              </TestimonialHeading>
              <TestimonialText>
                {applyLanguage(
                  "我的朋友推荐我使用Hisen，现在我也愿意推荐给其他人。他们真的很值得信赖。",
                  "My friend recommended me to use Hisen and now I would like to recommend them to others. They are really trustworthy."
                )}
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
              }
              name={applyLanguage("张先生", "Mr. Chang.")}
              title={applyLanguage("企业家", "Entrepreneur.")}
            />
          </Testimonial>
        </Stack>
      </Container>
    </Box>
  );
}
