import { Box, Heading, List, ListItem, Text, Button, VStack, Icon, Flex, Spacer, useColorModeValue, Image } from "@chakra-ui/react";
import { CheckCircleIcon } from '@chakra-ui/icons';
import { Link } from 'preact-router/match';
import fswImage from '../../img/ImmigrationPathways/fswImage.webp'; // 请确保图片路径正确

const FSW = () => {
    const bgColor = useColorModeValue("gray.100", "gray.700");
    const borderColor = useColorModeValue("gray.200", "gray.600");

    return (
        <Flex direction="column" p={5} shadow="md" borderWidth="1px" maxW="1000px" m="auto" bg={bgColor} borderRadius="md">
            <Box p={5} borderBottom="1px" borderColor={borderColor}>
                <Heading fontSize="2xl" mb={4}>FSW – Federal Skilled Worker Class</Heading>
                <Text>联邦技术移民是根据加拿大政府对就业市场状况、专业需求和国家整体发展规划的考量，每年有计划地吸纳人才，以弥补本国人口增长缓慢和人才短缺的问题。这一移民政策旨在确保加拿大的经济和社会发展得到支持，并满足人才需求的同时促进国家的繁荣。</Text>
            </Box>

            <Flex direction="column" p={5} spacing={5}>
                <Section title="适用人群">
                    <Flex wrap="wrap" justify="space-between">
                        {["年龄在20至45岁之间，具备本科学历或更高学历，并且英语水平较好的精英人士"].map((item, index) => (
                            <Box key={index} flex="1" minW="30%" p={2} textAlign="center" borderRadius="md" borderWidth="1px" borderColor={borderColor} m={1}>
                                {item}
                            </Box>
                        ))}
                    </Flex>
                </Section>

                <Section title="项目优势">
                    <FeatureList items={[
                        "移民花费低",
                        "无需找到工作、雇主担保，无需投资，无资产要求",
                        "审批速度较快"
                    ]} />
                </Section>

                <Section title="项目要求">
                    <FeatureList items={[
                        "工作经验：过去10年中有1年连续的、属于NOC TEER 0/1/2/3的工作经验，该工作经验可以是加拿大境内，也可以是在海外",
                        "语言要求：达到CLB7（雅思听力6分，阅读6分，口语6分，写作6分）",
                        "在六项要素打分系统中超过67分（满分100分），打分标准包括：语言、学历、工作经验、年龄、额外工作offer、适应加拿大的因素",
                        "无定居在魁北克的意向"
                    ]} />
                </Section>

                <Section title="申请流程">
                    <FeatureList items={[
                        "评估/签约",
                        "收集资料，准备申请文件",
                        "在EE系统内注册，填写个人资料，获得分数并入池",
                        "收到邀请（ITA），递交永居（PR）申请",
                        "PR获批，成为加拿大永久居民"
                    ]} ordered />
                    <Image src={fswImage}
                        alt='FSW Immigration'
                    />
                </Section>

                <Text mt={4}>FSW – Federal Skilled Worker Class为符合条件的技术专业人士提供了一个快速的移民途径。如果您对此项目感兴趣，欢迎联系我们进行咨询。</Text>

                <Spacer />
                <Button colorScheme="blue" mt={5} alignSelf="center">
                    <Link activeClassName="active" href='/contact-us'>
                        联系我们
                    </Link>
                </Button>
            </Flex>
        </Flex>
    );
}

const Section = ({ title, children }:any) => (
    <VStack align="start" spacing={4} mt={5}>
        <Heading fontSize="lg">{title}</Heading>
        {children}
    </VStack>
);

const FeatureList = ({ items, ordered = false }:any) => (
    <List spacing={2} styleType={ordered ? "decimal" : "none"}>
        {items.map((item:any, index:number) => (
            <ListItem key={index} display="flex" alignItems="center">
                {!ordered && <Icon as={CheckCircleIcon} color="green.500" />}
                <Text ml={2}>{item}</Text>
            </ListItem>
        ))}
    </List>
);

export default FSW;
