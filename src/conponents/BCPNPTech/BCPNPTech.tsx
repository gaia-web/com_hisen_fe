import { Box, Heading, List, ListItem, Text, Button, VStack, Icon, Flex, Spacer, useColorModeValue, Image } from "@chakra-ui/react";
import { CheckCircleIcon } from '@chakra-ui/icons';
import { Link } from 'preact-router/match';
import bcpnpTech from '../../img/ImmigrationPathways/bcpnpTech.webp';

const BCPNPTech = () => {
    const bgColor = useColorModeValue("gray.100", "gray.700");
    const borderColor = useColorModeValue("gray.200", "gray.600");

    return (
        <Flex direction="column" p={5} shadow="md" borderWidth="1px" maxW="1000px" m="auto" bg={bgColor} borderRadius="md">
            <Box p={5} borderBottom="1px" borderColor={borderColor}>
                <Heading fontSize="2xl" mb={4}>BCPNP – BCPNP Tech高科技文创类项目</Heading>
                <Text>2017年BCPNP启动的试点移民项目，自2021年5月28日起，该项目转化为永久项目。BCPNP Tech不是一个新的移民项目，目前只是针对35个紧缺职业的申请进行优先处理。该项目主要用于BC省为本地紧缺行业有方向性的吸纳海外技术人才。</Text>
            </Box>

            <Flex direction="column" p={5} spacing={5}>
                <Section title="适用人群">
                    <Text>英语基础好，且从事的工作领域在BCPNP规定的紧缺职业列表中，并有意向在BC省生活和工作的精英</Text>
                </Section>

                <Section title="项目优势">
                    <FeatureList items={[
                        "独立于其他类别单独进行抽签，且邀请分数相对低于BC省提名普通类别",
                        "及时性：邀请频率稳定，目前每周都会向合格的候选人发出邀请函，最大程度的减少雇主和申请人的等待时间",
                        "优先性：BC省提名办公室会优先处理该移民项目，以满足BC省雇主们对人才的迫切需求",
                        "无必须拿到长期工作合同的硬性要求，只需一年即可",
                        "如同时满足EEBC快速通道的要求，联邦阶段可提速"
                    ]} />
                </Section>

                <Section title="项目要求">
                    <FeatureList items={[
                        "申请人在过去所从事的岗位必须符合35个指定岗位之一，且有一份来自BC省雇主提供的全职工作合同；",
                        "工作合同时长需要至少一年（365天），且在递交申请时该合同至少还有120天的剩余时间；",
                        "高中学历以上；",
                        "语言至少达到CLB 4（雅思听力4.5，阅读3.5，口语和写作4分）；",
                        "根据家庭人数，满足最低家庭收入要求；",
                        "如人已在加拿大，则在加拿大居住和工作生活期间，拥有合法身份。"
                    ]} />
                </Section>

                <Section title="对雇主要求">
                    <FeatureList items={[
                        "注册在BC，且持续经营至少一年以上；",
                        "如果在大温地区以内，要有至少5名全职员工，大温地区以外，要有至少3名全职员工；",
                        "有良好的声誉和可证明的收益；",
                        "薪资待遇符合BC省同行业薪资标准；",
                        "在申请前的5年内，申请人及配偶所持公司股份不超过10%；",
                        "公司对该岗位有真实需求，以及证明作出努力招聘本地员工的尝试。"
                    ]} />
                </Section>

                <Section title="BCPNP高科技文创类项目紧缺职业列表">
                    <FeatureList items={[
                        "NOC 10030 – 电信运营商经理",
                        "NOC 20012 – 计算机和信息系统经理",
                        // ... 其他职业列表
                        "NOC 53111 – 电影、广播、摄影和表演艺术助理和操作员"
                    ]} />
                </Section>

                <Section title="申请流程">
                    <FeatureList items={[
                        "获得工作offer，确定雇主有担保意向",
                        "收集资料，准备申请文件",
                        "注册BCPNP账户，提交个人信息获得系统评估分数",
                        "获得邀请，递交完整申请",
                        "BCPNP审核",
                        "省提名获批，申请工签（如是海外申请人）；向联邦移递交永久居民（PR）申请（如申请人已在职）",
                        "工签获批，登陆加拿大工作",
                        "PR获批，成为加拿大永久居民。"
                    ]} ordered={true} />
                    <Image src={bcpnpTech}
                        alt='bcpnpTech'
                    />
                </Section>

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

export default BCPNPTech;
