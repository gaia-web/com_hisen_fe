import { Box, Heading, List, ListItem, Text, Button, VStack, Icon, Flex, Spacer, useColorModeValue, Image } from "@chakra-ui/react";
import { CheckCircleIcon } from '@chakra-ui/icons';
import { Link } from 'preact-router/match';
import fstImage from '../../img/ImmigrationPathways/fstImage.webp'; 

const FST = () => {
    const bgColor = useColorModeValue("gray.100", "gray.700");
    const borderColor = useColorModeValue("gray.200", "gray.600");

    return (
        <Flex direction="column" p={5} shadow="md" borderWidth="1px" maxW="1000px" m="auto" bg={bgColor} borderRadius="md">
            <Box p={5} borderBottom="1px" borderColor={borderColor}>
                <Heading fontSize="2xl" mb={4}>FST – Federal Skilled Trades Program</Heading>
                <Text>联邦EE类技工移民（FST）适用于职业属于蓝领技术工的申请人，要求他们必须获得雇主的聘用意向或加拿大某省的技工职业证书。这对中国的申请人来说可能相对较困难。大多数FST职业需要进行强制认证，即使不是强制认证的职业，申请人也需要在所在省份注册成为学徒，方可从事相关工作。因此，对于中国申请人而言，该项目的难点在于如何进入加拿大并考取由加拿大省份颁发的技工职业证书。</Text>
            </Box>

            <Flex direction="column" p={5} spacing={5}>
                <Section title="适用人群 - 蓝领的福利">
                    <Flex wrap="wrap" justify="space-between">
                        {["希望凭借熟练技术资格成为加拿大永久居民的技术工人"].map((item, index) => (
                            <Box key={index} flex="1" minW="30%" p={2} textAlign="center" borderRadius="md" borderWidth="1px" borderColor={borderColor} m={1}>
                                {item}
                            </Box>
                        ))}
                    </Flex>
                </Section>

                <Section title="项目优势">
                    <FeatureList items={[
                        "FST项目在三个联邦EE项目中邀请分数最低，竞争力小 （根据过去的经验，获得联邦EE类技工移民邀请的最低分数通常在240左右）",
                        "无学历要求",
                        "加拿大的蓝领工人时薪更高",
                        "语言要求低，不必花过多的精力学习英语",
                        "正常情况下，审批迅速，审理时间在六个月内 （目前FST最后一次抽签于2020年8月，后因疫情暂停至今）"
                    ]} />
                </Section>

                <Section title="项目要求">
                    <FeatureList items={[
                        "工作经验：申请人在递交申请的前5年内，拥有至少2年的全职工作经验或等时间同的兼职工作经验",
                        "职位：从事的技术职业符合项目要求，包括职位、NOC的工作要求、合格的技工职业证书等",
                        "语言：英语口语和听力达到CLB 5，写作和阅读达到CLB 4（雅思G类阅读3.5，写作4.0，听力和口语5.0）",
                        "获得至少一年的全职工作offer或加拿大某省，地区或联邦颁发的技工资格证书",
                        "资金：申请人必须证明拥有足够的资金可以在加拿大定居，除非申请人目前能够在加拿大合法工作并且持有加拿大雇主提供的有效工作Offer",
                        "无定居在魁北克的意向"
                    ]} />
                </Section>

                <Section title="符合FST项目要求的技工职业归纳为如下类别">
                    <FeatureList items={[
                        "NOC类别72：技术工和高级交通管理人员（不包括子类别726：高级交通管理人员）",
                        "NOC类别73：一般技工",
                        "NOC类别82：自然资源、农业和相关生产行业的主管",
                        "NOC类别83, 自然资源和相关生产行业的从业人员",
                        "NOC类别92, 加工、制造和公用事业的主管，以及公用事业的操作员和控制员",
                        "NOC类别93, 中央控制和流程操作员以及飞机装配工和检验员, 不包括 子类别 932：飞机装配工和飞机装配检验员",
                        "NOC类别6320：厨师、屠宰工和面包师",
                        "NOC 62200：厨师"
                    ]} ordered />
                </Section>

                <Section title="申请流程">
                    <FeatureList items={[
                        "评估/签约",
                        "收集资料，准备申请文件",
                        "在EE系统内注册，填写个人资料，获得分数并入池",
                        "收到邀请（ITA），递交永居（PR）申请",
                        "PR获批，成为加拿大永久居民"
                    ]} ordered />
                    <Image src={fstImage}
                        alt='FST Immigration'
                    />
                </Section>

                <Text mt={4}>FST – Federal Skilled Trades Program为符合条件的技术工人提供了一个快速的移民途径。如果您对此项目感兴趣，欢迎联系我们进行咨询。</Text>

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

export default FST;
