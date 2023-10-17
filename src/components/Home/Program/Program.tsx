"use client";

import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
  Center,
  Image,
  useColorModeValue,
  Box,
  Divider,
} from "@chakra-ui/react";
import { Link } from "preact-router/match";
import { applyLanguage } from "../../../utils/language";

interface ProgramDetailsProps {
  title: string;
  description: string;
  cycle: string;
  linkTo: string;
  imageUrl: string;
}
function ProgramDetails({
  title,
  description,
  cycle,
  linkTo,
  imageUrl,
}: ProgramDetailsProps) {
  return (
    <Center py={6}>
      <Flex
        borderWidth="1px"
        borderRadius="lg"
        w={{ sm: "100%", md: "60%" }}
        height={{ sm: "auto", md: "auto" }}
        flexDirection={{ base: "column", md: "row" }}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        padding={4}
        justifyContent="space-between"
        alignItems="center"
      >
        <Box mt={{ sm: "2rem", md: "0px" }}>
          <Image
            src={imageUrl}
            alt={title}
            loading="lazy"
            decoding="async"
            borderRadius="md"
          />
        </Box>
        <Box w="2rem" h="2rem"></Box>
        <Box w="70%">
          <Heading
            fontSize={"xl"}
            fontFamily={"body"}
            mb={4}
            textAlign="center"
          >
            {title}
          </Heading>
          <Text>{description}</Text>
          <Text mt={2} color={"gray.600"}>
            {applyLanguage("办理周期:", "Processing Period:")} {cycle}
          </Text>
          <Flex justifyContent="center" alignItems="center" mt={4}>
            <Link href={linkTo}>
              <Button colorScheme="blue">
                {applyLanguage("探索子类别", "Explore subcategories")}
              </Button>
            </Link>
          </Flex>
        </Box>
      </Flex>
    </Center>
  );
}

export default function CallToActionWithIllustration() {
  return (
    <Box>
      <Divider></Divider>
      <Container maxW={"5xl"}>
        <Stack
          textAlign={"center"}
          align={"center"}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 4, md: 12 }}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
            lineHeight={"110%"}
          >
            {applyLanguage("加拿大移民项目", "Canada Immigration Program")}
            <Text as={"span"} color={"orange.400"}>
              {applyLanguage("速览", "Glance")}
            </Text>
          </Heading>
          <Text color={"gray.500"} maxW={"3xl"}>
            {applyLanguage(
              "探索各种加拿大移民通道，找到最适合您的路径。无论您是技术工人、企业家还是希望与家人团聚，我们都为您提供详细的指导和专业的咨询服务，帮助您实现移居加拿大的梦想。",
              "Explore the various Canadian immigration pathways and find the one that suits you best. Whether you are a skilled worker, an entrepreneur or looking to reunite with your family, we offer detailed guidance and professional counseling services to help you realize your dream of moving to Canada."
            )}
          </Text>
        </Stack>
      </Container>

      <ProgramDetails
        title={applyLanguage(
          "高管工签 / 投资人工签",
          "Intra-Company Transferee Work Permit / Owner Operator Work Permit"
        )}
        description={applyLanguage(
          "适用于在国内有一定资产和管理经验的高管或投资人，希望在加拿大开展业务或投资的人士。",
          "For executives or investors with some domestic assets and management experience who wish to conduct business or invest in Canada."
        )}
        cycle={applyLanguage("6-12个月", "6-12 Months")}
        linkTo="/visa"
        imageUrl="https://images.pexels.com/photos/2916826/pexels-photo-2916826.jpeg?auto=compress&cs=tinysrgb&w=800"
      />

      <ProgramDetails
        title={applyLanguage("BC投资移民类别", "Entrepreneur Immigration")}
        description={applyLanguage(
          "BC投资移民类别专为那些希望在BC省投资、创业并长期定居的外国企业家而设。此项目旨在吸引有经验的商业领袖，通过他们的知识和技能，为BC省带来经济增长和新的工作机会。",
          "The BC Immigrant Investor category is designed for foreign entrepreneurs who wish to invest, start a business and settle in B.C. for the long term. This program is designed to attract experienced business leaders who, through their knowledge and skills, will bring economic growth and new jobs to B.C."
        )}
        cycle={applyLanguage(
          "申请周期预计为14-20个月，具体时间取决于申请材料的完整性和处理速度",
          "The application cycle is expected to take 14-20 months, depending on the completeness of the application materials and the speed of processing"
        )}
        linkTo="/bc-ei"
        imageUrl="https://images.pexels.com/photos/2782485/pexels-photo-2782485.jpeg?auto=compress&cs=tinysrgb&w=800"
      />

      <ProgramDetails
        title={applyLanguage(
          "BC省提名项目",
          "British Columbia Provincial Nominee Program"
        )}
        description={applyLanguage(
          "适用于希望在BC省定居并工作的外国技术工人、留学生和企业家。",
          "For skilled foreign workers, international students and entrepreneurs who wish to settle and work in B.C."
        )}
        cycle={applyLanguage("12-18个月", "12-18 Months")}
        linkTo="/bc-pnp"
        imageUrl="https://images.pexels.com/photos/11424500/pexels-photo-11424500.jpeg?auto=compress&cs=tinysrgb&w=800"
      />

      <ProgramDetails
        title={applyLanguage(
          "联邦类通道移民项目",
          "Federal Express Entry Immigration Program"
        )}
        description={applyLanguage(
          "适用于希望在加拿大的任何地方工作或定居的技术工人和专业人士。",
          "For skilled workers and professionals who wish to work or settle anywhere in Canada."
        )}
        cycle={applyLanguage("12-24个月", "12-24 Months")}
        linkTo="/federal"
        imageUrl="https://images.pexels.com/photos/7328/building-architecture-historical-tower.jpg?auto=compress&cs=tinysrgb&w=800"
      />

      <ProgramDetails
        title={applyLanguage("团聚移民项目", "Family Sponsorship Program")}
        description={applyLanguage(
          "适用于希望与在加拿大的家人团聚的外国公民。",
          "Applies to foreign nationals who wish to be reunited with family members in Canada."
        )}
        cycle={applyLanguage("18-36个月", "18-36 Months")}
        linkTo="/family"
        imageUrl="https://images.pexels.com/photos/2354073/pexels-photo-2354073.jpeg?auto=compress&cs=tinysrgb&w=800"
      />
    </Box>
  );
}
