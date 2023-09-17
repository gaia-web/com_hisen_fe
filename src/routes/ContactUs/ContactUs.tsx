import {
    Box,
    Flex,
    Heading,
    Text,
    VStack,
    FormControl,
    FormLabel,
    InputGroup,
    InputLeftElement,
    Input,
    Textarea,
    Button,
    Icon,
    Image
} from '@chakra-ui/react';
import { PhoneIcon, EmailIcon, InfoIcon } from '@chakra-ui/icons';


export default function ContactUs() {
    return (
        <Box bg="gray.100" minH='90vh'>
            <Image src="https://images.unsplash.com/photo-1551009175-15bdf9dcb580?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80" alt="Hero Image" loading="lazy" decoding="async" width="100%" height="300px" objectFit="cover" />
            <Flex
                align="center"
                justify="center"
                direction="column"
                p={10}
            >
                <Box mb={10}>
                    <Heading fontSize="5xl">联系我们</Heading>
                    <Text mt={5} fontSize="xl">
                        我们是一个专注于移民服务的专业团队。我们深知每一位移民在适应新环境时可能遇到的挑战，因此我们提供全方位的支持和指导，确保他们在新的国度里能够顺利地开始新的生活篇章。
                    </Text>
                </Box>

                <Box
                    bg="white"
                    borderRadius="lg"
                    p={8}
                    shadow="base"
                    width={{ base: 'full', md: '2xl' }}
                >
                    <VStack spacing={5}>
                        <Heading fontSize="2xl">联系我们</Heading>
                        <FormControl isRequired>
                            <FormLabel>姓名</FormLabel>
                            <InputGroup>
                                <InputLeftElement>
                                    <Icon as={InfoIcon} />
                                </InputLeftElement>
                                <Input type="text" name="name" placeholder="您的姓名" />
                            </InputGroup>
                        </FormControl>

                        <FormControl isRequired>
                            <FormLabel>手机号码</FormLabel>
                            <InputGroup>
                                <InputLeftElement>
                                    <PhoneIcon />
                                </InputLeftElement>
                                <Input type="tel" name="phone" placeholder="您的手机号码" />
                            </InputGroup>
                        </FormControl>

                        <FormControl isRequired>
                            <FormLabel>邮箱</FormLabel>
                            <InputGroup>
                                <InputLeftElement>
                                    <Icon as={EmailIcon} />
                                </InputLeftElement>
                                <Input type="email" name="email" placeholder="您的邮箱" />
                            </InputGroup>
                        </FormControl>

                        <FormControl isRequired>
                            <FormLabel>留言</FormLabel>
                            <Textarea
                                name="message"
                                placeholder="您的留言"
                                rows={6}
                                resize="none"
                            />
                        </FormControl>

                        <Button colorScheme="blue" width="full">
                            发送留言
                        </Button>
                    </VStack>
                </Box>
            </Flex>
        </Box>
    );
}
