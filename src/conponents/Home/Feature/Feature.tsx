'use strict';

import {
    Container,
    SimpleGrid,
    Image,
    Flex,
    Heading,
    Text,
    Stack,
    StackDivider,
    Icon,
    Box,
    useColorModeValue,
} from '@chakra-ui/react';
import {
    IoShieldCheckmarkSharp,
    IoPeopleSharp,
    IoGlobeOutline
} from 'react-icons/io5';
import { JSX } from 'preact';

interface FeatureProps {
    text: string;
    description: string;
    iconBg: string;
    icon?: JSX.Element;
}

const Feature = ({ text, description, icon, iconBg }: FeatureProps) => {
    return (
        <Stack direction={'column'} spacing={2}>
            <Stack direction={'row'} align={'center'}>
                <Flex w={8} h={8} align={'center'} justify={'center'} rounded={'full'} bg={iconBg}>
                    {icon}
                </Flex>
                <Text fontWeight={600}>{text}</Text>
            </Stack>
            <Box pl={12}>
                <Text color={'gray.500'}>{description}</Text>
            </Box>
        </Stack>
    );
};

export default function SplitWithImage() {
    return (
        <Container maxW={'5xl'} py={12}  py={{ base: 12, md: 20 }}>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                <Stack spacing={4}>
                    <Text
                        textTransform={'uppercase'}
                        color={'blue.400'}
                        fontWeight={600}
                        fontSize={'sm'}
                        bg={useColorModeValue('blue.50', 'blue.900')}
                        p={2}
                        alignSelf={'flex-start'}
                        rounded={'md'}>
                        关于海盛
                    </Text>
                    <Heading>海盛国际咨询有限公司</Heading>
                    <Text color={'gray.500'} fontSize={'lg'}>
                        定位于温哥华市中心的加拿大移民专家，为您提供最专业、最贴心的服务。
                    </Text>
                    <Stack
                        spacing={4}
                        divider={
                            <StackDivider borderColor={useColorModeValue('gray.100', 'gray.700')} />
                        }>
                        <Feature
                            icon={<Icon as={IoShieldCheckmarkSharp} color={'yellow.500'} w={5} h={5} />}
                            iconBg={useColorModeValue('yellow.100', 'yellow.900')}
                            text={'政府认证'}
                            description={'我们是经过加拿大政府批准的服务机构，拥有加拿大移民顾问协会会员资格。'}
                        />
                        <Feature
                            icon={<Icon as={IoPeopleSharp} color={'green.500'} w={5} h={5} />}
                            iconBg={useColorModeValue('green.100', 'green.900')}
                            text={'深度合作'}
                            description={'与多家加拿大著名的金融机构、教育机构建立了深度合作关系。'}
                        />
                        <Feature
                            icon={<Icon as={IoGlobeOutline} color={'purple.500'} w={5} h={5} />}
                            iconBg={useColorModeValue('purple.100', 'purple.900')}
                            text={'熟悉中国国情'}
                            description={'我们深知中国的政策法规与企业管理运营情况，为中国企业家提供全方位的帮助和咨询。'}
                        />
                    </Stack>
                </Stack>
                <Flex>
                    <Image
                        rounded={'md'}
                        alt={'feature image'}
                        src={
                            'https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
                        }
                        objectFit={'cover'}
                    />
                </Flex>
            </SimpleGrid>
        </Container>
    );
}
