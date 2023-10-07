import { Box, Heading, List, ListItem, Text, Button, VStack, Icon, Flex, Spacer, useColorModeValue, Image } from "@chakra-ui/react";
import { CheckCircleIcon } from '@chakra-ui/icons';
import { Link } from 'preact-router/match';
import childcareOccupations from '../../img/ImmigrationPathways/childcareOccupations.webp';

const ChildcareOccupations = () => {
    const bgColor = useColorModeValue("gray.100", "gray.700");
    const borderColor = useColorModeValue("gray.200", "gray.600");

    return (
        <Flex direction="column" p={5} shadow="md" borderWidth="1px" maxW="1000px" m="auto" bg={bgColor} borderRadius="md">
            <Box p={5} borderBottom="1px" borderColor={borderColor}>
                <Heading fontSize="2xl" mb={4}>BCPNP – ECE & ECEA: Childcare occupations幼儿教育相关岗位项目</Heading>
                <Text>该项目是在技术工人类别和国际留学生类别基础上，针对幼儿教育及相关职业做优先处理，不是一个单独的移民项目。BC省提名为填补本地幼儿教育人才空缺而设置的特别渠道，从事符合要求岗位的申请人，会被单独邀请。</Text>
            </Box>

            <Flex direction="column" p={5} spacing={5}>
                <Section title="适用人群">
                    <FeatureList items={[
                        "有一定英语基础，愿意从事幼儿教育行业的人士",
                        "有意愿通过低门槛项目移民加拿大的陪读家长或留学生"
                    ]} />
                </Section>

                <Section title="项目优势">
                    <FeatureList items={[
                        "邀请分数相较其他省提名项目低，单独抽签且抽签频率高，竞争小，被邀请几率大",
                        "门槛低：英语要求较低，无需相关工作经验的硬性要求",
                        "周期短：流程相对简短，入校就读时间相对灵活，部分课程学制短，最短5周即可完成学业",
                        "对境内陪读家长来讲，可在陪读的同时搞定全家移民身份",
                        "紧缺职业，就业前景好，兼顾工作及移民",
                        "如同时满足EEBC快速通道的要求，联邦阶段可提速"
                    ]} />
                </Section>

                <Section title="项目要求">
                    <Text>1. 对申请人要求</Text>
                    <FeatureList items={[
                        "有一份BC省雇主出具的全职永久工作合同，职位为幼儿教育或幼教助理相关岗位；",
                        "如果申请人为公校毕业，在毕业后三年内向BCPNP提交申请；",
                        "如果申请人为私校毕业，则需要至少有至少2年的任意NOC TEER 0、1、2、3类全职工作经验；",
                        "语言至少达到CLB4（雅思听力4.5，阅读3.5，口语和写作4分）；",
                        "拥有从事幼儿教育岗位的资质，需向相关机构注册；",
                        "根据家庭人数，满足最低家庭收入要求；",
                        "愿意长期在BC省生活和工作；",
                        "如人已在加拿大，则在加拿大居住和工作生活期间，拥有合法身份。"
                    ]} />

                    <Text mt={4}>2. 对雇主要求</Text>
                    <FeatureList items={[
                        "注册在BC，且持续经营至少一年以上；",
                        "如果在大温地区以内，要有至少5名全职员工，大温地区以外，要有至少3名全职员工；",
                        "有良好的声誉和可证明的收益；",
                        "薪资待遇符合BC省同行业薪资标准；",
                        "在申请前的5年内，申请人及配偶所持公司股份不超过10%；",
                        "公司对该岗位有真实需求，以及证明作出努力招聘本地员工的尝试。"
                    ]} />
                </Section>

                <Section title="申请流程">
                    <FeatureList items={[
                        "入读幼儿教育相关课程，并顺利毕业取得从业必备证书及资质",
                        "获得工作offer，确定雇主有担保意向",
                        "申请LMIA（如申请人没有工签），递交工签",
                        "工签获批，开展工作",
                        "注册BCPNP账户，提交个人信息获得系统评估分数",
                        "成功获得邀请，递交完整申请",
                        "BCPNP审批",
                        "省提名获批，递交联邦永居（PR）申请",
                        "PR获批，成为加拿大永久居民"
                    ]} ordered={true} />
                    <Image src={childcareOccupations}
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

export default ChildcareOccupations;
