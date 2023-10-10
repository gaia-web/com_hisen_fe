import { Box, Heading, List, ListItem, Text, Button, VStack, Icon, Flex, Spacer, useColorModeValue, Image } from "@chakra-ui/react";
import { CheckCircleIcon } from '@chakra-ui/icons';
import { Link } from 'preact-router/match';
import bcpnpPostGraduate from '../../img/ImmigrationPathways/bcpnpPostGraduate.webp';

const BCPNPPostGraduate = () => {
    const bgColor = useColorModeValue("gray.100", "gray.700");
    const borderColor = useColorModeValue("gray.200", "gray.600");

    return (
        <Flex direction="column" p={5} shadow="md" borderWidth="1px" maxW="1000px" m="auto" bg={bgColor} borderRadius="md">
            <Box p={5} borderBottom="1px" borderColor={borderColor}>
                <Heading fontSize="2xl" mb={4}>BCPNP – International Post-Graduate Stream</Heading>
                <Text>国际硕博毕业生项目是BC省省提名中针对国际硕士毕业生和在读或毕业博士生的移民项目。</Text>
            </Box>

            <Flex direction="column" p={5} spacing={5}>
                <Section title="适用人群">
                    <Text>有意向在学术领域继续深造的人群，且愿意长期在BC省生活和工作</Text>
                </Section>

                <Section title="项目优势">
                    <FeatureList items={[
                        "无需过往工作经验，无需找到工作、雇主担保，无需投资",
                        "学习期间，配偶可申请开放型工签，孩子和配偶均可享受本地的免费医疗，孩子可享免费教育",
                        "硕士项目毕业可直接锁定移民，博士项目可于在读期间直接递交申请",
                        "最新更新，项目不再限定博士生的专业方向，任何领域的博士课程都符合要求",
                        "如同时满足EEBC快速通道的要求，联邦阶段可提速"
                    ]} />
                </Section>

                <Section title="项目要求">
                    <FeatureList items={[
                        "在BC省任意公立高等教育机构完成博士学位课程（任何研究领域）或成为博士生（任何研究领域），或在BC省指定的高等教育机构完成符合项目要求的自然科学、应用科学或健康科学研究项目的硕士学位项目；",
                        "在毕业后三年内向BCPNP提交申请；",
                        "根据家庭人数，满足最低家庭收入要求；",
                        "证明有能力和意向在BC省生活、工作和经济上立足。"
                    ]} />
                </Section>

                <Section title="提供符合要求硕士学位课程的指定学校">
                    <FeatureList items={[
                        "BC省技术学院 – British Columbia Institute of Technology",
                        "皇家路大学 – Royal Roads University",
                        "西蒙菲莎大学 – Simon Fraser University",
                        "汤普森河大学 – Thompson Rivers University",
                        "英属哥伦比亚大学 – 奥肯拿根校区 – University of British Columbia – Okanagan",
                        "英属哥伦比亚大学 – 温哥华校区 – University of British Columbia – Vancouver",
                        "北英属哥伦比亚大学 – University of Northeastern British Columbia",
                        "维多利亚大学 – University of Victoria",
                        "费尔利迪金森大学 – Fairleigh Dickinson University",
                        "纽约理工学院 – New York Institute of Technology",
                        "东北大学 – Northeastern University",
                        "西三一大学 – Trinity Western University"
                    ]} />
                </Section>

                <Section title="符合硕士项目背景的九大专业">
                    <FeatureList items={[
                        "Agriculture, agriculture operations and related sciences 农业，农业运营及相关专业",
                        "Biological and biomedical sciences 生物和生物医学",
                        "Computer and information sciences and support services 电脑和信息技术",
                        "Engineering 工程",
                        "Engineering technology and engineering-related fields工程技术",
                        "Health professions and related programs 健康及相关专业",
                        "Mathematics and statistics 数学和统计",
                        "Natural resources conservation自然资源保护",
                        "Physical sciences 物质科学相关专业"
                    ]} />
                </Section>

                <Section title="申请流程">
                    <FeatureList items={[
                        "评估/签约",
                        "收集资料，准备申请文件",
                        "注册BCPNP账户，递交完整申请",
                        "BCPNP审批",
                        "省提名获批，递交联邦永居（PR）申请",
                        "PR获批，成为加拿大永久居民"
                    ]} ordered />
                    <Image src={bcpnpPostGraduate}
                        alt='bcpnpPostGraduate'
                      
                    />
                </Section>

                <Text mt={4}>BCPNP – International Post-Graduate Stream为国际硕博毕业生提供了在BC省定居的机会，是许多学术领域的学者选择的移民路径。如果您对此项目感兴趣，欢迎联系我们进行咨询。</Text>

                <Spacer />
                <Button colorScheme="blue" mt={5} alignSelf="center">
                    <Link activeClassName="active" href='/contact-us'>
                        联系我们
                    </Link>
                </Button>
            </Flex>
        </Flex>
    );
};

const Section = ({ title, children }: any) => (
    <VStack align="start" spacing={3} mt={5}>
        <Heading fontSize="xl">{title}</Heading>
        {children}
    </VStack>
);

const FeatureList = ({ items, ordered = false }: any) => (
    <List spacing={2} styleType={ordered ? "decimal" : "none"}>
        {items.map((item: any, index: any) => (
            <ListItem key={index} display="flex" alignItems="center">
                {!ordered && <Icon as={CheckCircleIcon} color="green.500" />}
                <Text ml={2}>{item}</Text>
            </ListItem>
        ))}
    </List>
);

export default BCPNPPostGraduate;
