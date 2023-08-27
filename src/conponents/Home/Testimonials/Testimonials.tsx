'use client'

import {
    Box,
    Flex,
    Heading,
    Text,
    Stack,
    Container,
    Avatar,
    useColorModeValue,
} from '@chakra-ui/react'

interface Props {
    children: preact.ComponentChildren
}

const Testimonial = (props: Props) => {
    const { children } = props

    return <Box>{children}</Box>
}

const TestimonialContent = (props: Props) => {
    const { children } = props

    return (
        <Stack
            bg={useColorModeValue('white', 'gray.800')}
            boxShadow={'lg'}
            p={8}
            rounded={'xl'}
            align={'center'}
            pos={'relative'}
            _after={{
                content: `""`,
                w: 0,
                h: 0,
                borderLeft: 'solid transparent',
                borderLeftWidth: 16,
                borderRight: 'solid transparent',
                borderRightWidth: 16,
                borderTop: 'solid',
                borderTopWidth: 16,
                borderTopColor: useColorModeValue('white', 'gray.800'),
                pos: 'absolute',
                bottom: '-16px',
                left: '50%',
                transform: 'translateX(-50%)',
            }}>
            {children}
        </Stack>
    )
}

const TestimonialHeading = (props: Props) => {
    const { children } = props

    return (
        <Heading as={'h3'} fontSize={'xl'}>
            {children}
        </Heading>
    )
}

const TestimonialText = (props: Props) => {
    const { children } = props

    return (
        <Text
            textAlign={'center'}
            color={useColorModeValue('gray.600', 'gray.400')}
            fontSize={'sm'}>
            {children}
        </Text>
    )
}

const TestimonialAvatar = ({
    src,
    name,
    title,
}: {
    src: string
    name: string
    title: string
}) => {
    return (
        <Flex align={'center'} mt={8} direction={'column'}>
            <Avatar src={src} mb={2} />
            <Stack spacing={-1} align={'center'}>
                <Text fontWeight={600}>{name}</Text>
                <Text fontSize={'sm'} color={useColorModeValue('gray.600', 'gray.400')}>
                    {title}
                </Text>
            </Stack>
        </Flex>
    )
}

export default function WithSpeechBubbles() {
    return (
        <Box bg={useColorModeValue('gray.100', 'gray.700')} mt="5rem">
            <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
                <Stack spacing={0} align={'center'}>
                    <Heading>客户心声</Heading>
                    <Text>深受全球客户的信赖与好评</Text>
                </Stack>
                <Stack
                    direction={{ base: 'column', md: 'row' }}
                    spacing={{ base: 10, md: 4, lg: 10 }}>
                    <Testimonial>
                        <TestimonialContent>
                            <TestimonialHeading>专业且高效</TestimonialHeading>
                            <TestimonialText>
                                与hisen合作是我做过的最明智的选择之一。他们的团队非常专业，为我提供了很多有价值的建议。
                            </TestimonialText>
                        </TestimonialContent>
                        <TestimonialAvatar
                            src={
                                'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
                            }
                            name={'李先生'}
                            title={'IT 项目经理 - BCPNP移民申请者'}
                        />
                    </Testimonial>
                    <Testimonial>
                        <TestimonialContent>
                            <TestimonialHeading>服务细致入微</TestimonialHeading>
                            <TestimonialText>
                                hisen的团队真的很细心，他们帮我规划了整个移民过程，让我感到非常放心。
                            </TestimonialText>
                        </TestimonialContent>
                        <TestimonialAvatar
                            src={
                                'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
                            }
                            name={'王女士'}
                            title={'市场营销经理 - 联邦移民申请者'}
                        />
                    </Testimonial>
                    <Testimonial>
                        <TestimonialContent>
                            <TestimonialHeading>令人震撼的服务</TestimonialHeading>
                            <TestimonialText>
                                我的朋友推荐我使用hisen，现在我也愿意推荐给其他人。他们真的很值得信赖。
                            </TestimonialText>
                        </TestimonialContent>
                        <TestimonialAvatar
                            src={
                                'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
                            }
                            name={'张先生'}
                            title={'企业家'}
                        />
                    </Testimonial>
                </Stack>
            </Container>
        </Box>
    )
}