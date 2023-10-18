import { Box, Heading, List, ListItem, Text, Button, VStack, Icon, Flex, Spacer, useColorModeValue, Image } from "@chakra-ui/react";
import { CheckCircleIcon } from '@chakra-ui/icons';
import { Link } from 'preact-router/match';
import categorySelectionImage from '../../img/ImmigrationPathways/categorySelectionImage.webp';

const CategorySelection = () => {
    const bgColor = useColorModeValue("gray.100", "gray.700");
    const borderColor = useColorModeValue("gray.200", "gray.600");

    return (
        <Flex direction="column" p={5} shadow="md" borderWidth="1px" maxW="1000px" m="auto" bg={bgColor} borderRadius="md">
            <Box p={5} borderBottom="1px" borderColor={borderColor}>
                <Heading fontSize="2xl" mb={4}>Express Entry - Category-based Selection Invitations</Heading>
                <Text>2023年5月31日，加拿大移民局宣布，快速通道EE正式启动基于类别的定向邀请（category-based selection invitations），该类别与原有的EE全类别和项目（如省提名）邀请并行，旨在响应加拿大社会或经济需求。基于类别的选择也就是加拿大能够向具有特定技能、培训或语言能力的申请人发出移民申请邀请。</Text>
            </Box>

            <Flex direction="column" p={5} spacing={5}>
                <Section title="今年将重点有针对性地从EE通道中抽取法语、医疗、STEM、建筑、运输、农业等6类专业人才">

                    <Flex wrap="wrap" justify="space-between">
                        {["精通法语：法语听、说、读、写每科能力达到NCLC-7水平", "定向邀请职业列表：", "• 医护职业", "• STEM职业（科学、技术、工程、数学）", "• 技工职业，例如木匠、水管工、承包商", "• 运输职业", "• 农业和农产品职业"].map((item, index) => (
                            <Box key={index} flex="1" minW="30%" p={2} textAlign="center" borderRadius="md" borderWidth="1px" borderColor={borderColor} m={1}>
                                {item}
                            </Box>
                        ))}
                    </Flex>
                </Section>
                <Section title="项目要求">
                    <FeatureList items={[
                        "要求申请人先满足联邦快速通道EE下的技术移民、加拿大经验类移民或联邦技工移民的条件之一进入池子;",
                        "同时还要满足定向邀请类别的要求：",
                        "1. 语言要求（仅针对法语人才定向邀请类别）：法语听、说、读、写每科能力达到NCLC-7水平;",
                        "2. 工作经验要求（仅针对职业定向邀请类别）：过去3年内，拥有至少连续6个月的在同一个NOC职业代码下的工作经验（加拿大境内或境外经验都可以）。",
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
                    <Image src={categorySelectionImage}
                        alt='category Selection Immigration'
                    />
                </Section>

                <Text mt={4}>如果您对此项目感兴趣，欢迎联系我们进行咨询。</Text>

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

const Section = ({ title, children }: any) => (
    <VStack align="start" spacing={4} mt={5}>
        <Heading fontSize="lg">{title}</Heading>
        {children}
    </VStack>
);

const FeatureList = ({ items, ordered = false }: any) => (
    <List spacing={2} styleType={ordered ? "decimal" : "none"}>
        {items.map((item: any, index: number) => (
            <ListItem key={index} display="flex" alignItems="center">
                {!ordered && <Icon as={CheckCircleIcon} color="green.500" />}
                <Text ml={2}>{item}</Text>
            </ListItem>
        ))}
    </List>
);



export default CategorySelection;
