import { Box, Heading, List, ListItem, Text, Button, VStack, Icon, Flex, Spacer, useColorModeValue, Image } from "@chakra-ui/react";
import { CheckCircleIcon } from '@chakra-ui/icons';
import { Link } from 'preact-router/match';
import bcpnp from '../../../img/ImmigrationPathways/bcpnp.webp';

const EntrepreneurBCPNP = () => {
    const bgColor = useColorModeValue("gray.100", "gray.700");
    const borderColor = useColorModeValue("gray.200", "gray.600");

    return (
        <Box my="2rem">
            <Flex direction="column" p={5} shadow="md" borderWidth="1px" maxW="1000px" m="auto" bg={bgColor} borderRadius="md">
                <Box p={5} borderBottom="1px" borderColor={borderColor}>
                    <Heading fontSize="2xl" mb={4}>BCPNP – Entrepreneur Immigration Base Category Program</Heading>
                    <Text>BC省提名企业家移民项目基础类，是BC省政府根据本省经济发展需要，向联邦政府提名担保为本省带来经济利益的人士拿到加拿大永居的移民项目。作为BC省经典传统投资项目，稳定性极高，吸引无数企业家的青睐。申请人会先获得2年期工作签证，申请人及其家人能够快速到BC省定居，随后只要在18-20个月内完成创业即可获得 BC省提名，从而获得加拿大永居卡。</Text>
                </Box>

                <Flex direction="column" p={5} spacing={5}>
                    <Section title="适用人群">
                        <Flex wrap="wrap" justify="space-between">
                            {["富有经验、净资产高的企业家和高级管理人员", "怀揣海外创业和投资梦想的客户"].map((item, index) => (
                                <Box key={index} flex="1" minW="30%" p={2} textAlign="center" borderRadius="md" borderWidth="1px" borderColor={borderColor} m={1}>
                                    {item}
                                </Box>
                            ))}
                        </Flex>
                    </Section>

                    <Section title="项目优势">
                        <FeatureList items={[
                            "既可完成移民，拥有一份可持续性终身产业",
                            "适合家庭或个人创业移民，投资金额少，无风险",
                            "拿到工签同时，全家既享受加拿大福利待遇：配偶可持开放型工签，子女可免中小学公立学校学费",
                            "语言、学历要求低",
                            "项目申请人较少，竞争小，抽签分数低",
                            "BCPNP主张申请审核后再投资，极大的降低风险"
                        ]} />
                    </Section>

                    <Section title="项目要求">
                        <FeatureList items={[
                            "一般提名要求：积极管理、居住条件、语言要求",
                            "对申请人的要求：身份、净资产、工作经验、学历",
                            "对企业的要求：企业类型、企业结构、持股比例、加盟连锁店、农业行业、季节性经营的企业、限制类行业",
                            "最低投资要求",
                            "最低创造就业要求"
                        ]} />
                    </Section>

                    <Section title="申请流程">
                        <FeatureList items={[
                            "评估/签约",
                            "申请前的准备：BC省强烈建议（不强制）申请人在提交申请之前，对BC省进行一次访问",
                            "提交入池申请",
                            "提交完整申请",
                            "审批阶段：BCPNP审批并面试",
                            "创业（工签）期：申请工签，入境开始经营商业项目",
                            "最长610天后通过商业验收，获得省提名证书",
                            "永久居民申请",
                            "永居申请获批：成为加拿大永久居民"
                        ]} ordered />
                        <Image src={bcpnp}
                            alt='bcpnp'

                        />
                    </Section>

                    <Text mt={4}>BCPNP为申请者提供了在BC省创业的机会，是许多企业家选择的移民路径。如果您对BCPNP感兴趣，欢迎联系我们进行咨询。</Text>

                    <Spacer />
                    <Button colorScheme="blue" mt={5} alignSelf="center">
                        <Link activeClassName="active" href='/contact-us'>
                            联系我们
                        </Link>
                    </Button>
                </Flex>
            </Flex>
        </Box>
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
        {items.map((item: any, index: any) => (
            <ListItem key={index} display="flex" alignItems="center">
                {!ordered && <Icon as={CheckCircleIcon} color="green.500" />}
                <Text ml={2}>{item}</Text>
            </ListItem>
        ))}
    </List>
);

export default EntrepreneurBCPNP;
