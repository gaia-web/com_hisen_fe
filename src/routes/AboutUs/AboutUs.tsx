import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Heading,
  Image,
  Text,
  useColorModeValue,
  Center,
  SimpleGrid,
  Badge,
  Divider
} from "@chakra-ui/react";

function AboutUs() {
  return (
    <Box bg="gray.100">
      <Box maxW="1200px" margin="0 auto" p={5} pt="50px">
        <Heading mb={6}>关于我们</Heading>
        <Text mb={6}>
          我们公司专注于BC省商业类移民领域，积累了丰富的经验和成功的案例。作为一家经验丰富的商业类移民公司，我们的使命是帮助客户实现他们的移民梦想并在新的国家获得成功。我们深知商业类移民的复杂性和挑战性，因此我们致力于为客户提供全面的支持和解决方案。我们的团队精通移民政策和程序，并与相关机构保持紧密的合作关系。我们的专业知识和经验使我们能够为客户量身定制最适合他们需求的商业移民方案。
        </Text>

        <Divider my="3rem"></Divider>

        <Heading mb={6} mt={10}>
          我们的团队
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          {/* Team Member 1 */}
          <Center flexDirection="column">
            <Image
              borderRadius="full"
              boxSize="160px"
              src="https://via.placeholder.com/160"
              alt="Team Member 1"
              mb={4}
            />
            <Heading fontSize="xl">Cindy</Heading>
            <Text fontWeight="medium" color={useColorModeValue('gray.600', 'gray.400')} mb={4}>
              高级移民顾问
            </Text>
            <Badge px={2} py={1} bg={useColorModeValue('blue.100', 'blue.800')} color={useColorModeValue('blue.800', 'blue.200')}>
              15年经验
            </Badge>
          </Center>

          {/* Team Member 2 */}
          <Center flexDirection="column">
            <Image
              borderRadius="full"
              boxSize="160px"
              src="https://via.placeholder.com/160"
              alt="Team Member 2"
              mb={4}
            />
            <Heading fontSize="xl">chao</Heading>
            <Text fontWeight="medium" color={useColorModeValue('gray.600', 'gray.400')} mb={4}>
              项目经理
            </Text>
            <Badge px={2} py={1} bg={useColorModeValue('green.100', 'green.800')} color={useColorModeValue('green.800', 'green.200')}>
              8年经验
            </Badge>
          </Center>

          {/* Team Member 3 */}
          <Center flexDirection="column">
            <Image
              borderRadius="full"
              boxSize="160px"
              src="https://via.placeholder.com/160"
              alt="Team Member 3"
              mb={4}
            />
            <Heading fontSize="xl">chao</Heading>
            <Text fontWeight="medium" color={useColorModeValue('gray.600', 'gray.400')} mb={4}>
              资深顾问
            </Text>
            <Badge px={2} py={1} bg={useColorModeValue('purple.100', 'purple.800')} color={useColorModeValue('purple.800', 'purple.200')}>
              12年经验
            </Badge>
          </Center>
        </SimpleGrid>

        <Divider my="3rem"></Divider>

        <Heading mb={6} mt={10}>
          FAQ - 常见问题解答
        </Heading>
        <Accordion defaultIndex={[0, 1, 2, 3, 4, 5, 6, 7]} allowToggle>
          <AccordionItem>
            <AccordionButton>
              <Box flex="1" textAlign="left" fontSize="1.5rem" fontWeight="bold">
                您们公司主要提供哪些服务？
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              我们公司专注于BC省的商业类移民领域，为客户提供全面的移民支持和解决方案。我们的服务包括但不限于移民政策咨询、移民申请流程指导以及本地化服务。
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton>
              <Box flex="1" textAlign="left" fontSize="1.5rem" fontWeight="bold">
                为什么选择我们公司？
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              我们拥有丰富的经验和成功案例，深知商业类移民的复杂性和挑战性。我们的团队精通移民政策和程序，并与相关机构保持紧密的合作关系。我们的成功案例证明了我们的专业能力和对客户的承诺。
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton>
              <Box flex="1" textAlign="left" fontSize="1.5rem" fontWeight="bold">
                BC省企业家移民有哪些优势？
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              BC省将加大力度发放邀请，以弥补项目关停期间的配额损失。移民项目重新启动初期通常是审批最宽松的时期，BC省企业家移民项目也不例外。
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton>
              <Box flex="1" textAlign="left" fontSize="1.5rem" fontWeight="bold">
                我可以如何联系您们的团队成员？
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              您可以通过我们的联系我们页面来联系我们的团队成员。我们的专家团队会尽快回复您的咨询。
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton>
              <Box flex="1" textAlign="left" fontSize="1.5rem" fontWeight="bold">
                BC省企业家移民有哪些优势？
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              BC省将加大力度发放邀请，以弥补项目关停期间的配额损失。移民项目重新启动初期通常是审批最宽松的时期，BC省企业家移民项目也不例外。
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton>
              <Box flex="1" textAlign="left" fontSize="1.5rem" fontWeight="bold">
                我已经在BC省建立了企业，可以申请移民吗？
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              是的，如果您已经在BC省成功建立了企业，并满足其他移民条件，我们可以为您提供专业的移民申请服务。
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton>
              <Box flex="1" textAlign="left" fontSize="1.5rem" fontWeight="bold">
                我对移民政策有疑问，可以咨询吗？
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              当然可以，我们的团队成员都是经验丰富的移民顾问，可以为您提供最新的移民政策咨询。
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton>
              <Box flex="1" textAlign="left" fontSize="1.5rem" fontWeight="bold">
                您们的服务费用是多少？
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              我们的服务费用因项目和客户的具体需求而异。请联系我们以获取详细的报价。
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
    </Box>
  );
}

export default AboutUs;
