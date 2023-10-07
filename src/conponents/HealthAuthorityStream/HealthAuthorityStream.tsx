import { Box, Heading, List, ListItem, Text, Button, VStack, Icon, Flex, Spacer, useColorModeValue, Image } from "@chakra-ui/react";
import { CheckCircleIcon } from '@chakra-ui/icons';
import { Link } from 'preact-router/match';
import healthAuthorityStream from '../../img/ImmigrationPathways/healthAuthorityStream.webp';

const HealthAuthorityStream = () => {
    const bgColor = useColorModeValue("gray.100", "gray.700");
    const borderColor = useColorModeValue("gray.200", "gray.600");

    return (
        <Flex direction="column" p={5} shadow="md" borderWidth="1px" maxW="1000px" m="auto" bg={bgColor} borderRadius="md">
            <Box p={5} borderBottom="1px" borderColor={borderColor}>
                <Heading fontSize="2xl" mb={4}>BCPNP - Health Authority Stream医护专业人才项目</Heading>
                <Text>本类别仅针对于医护专业人员，旨在为BC省吸纳医护类人才，从医疗助理到专科医生都有机会通过该项目成为加拿大的永久居民。</Text>
            </Box>

            <Flex direction="column" p={5} spacing={5}>
                <Section title="适用人群">
                    <Text>有一定医疗、医护类专业背景的人员，或者接受过北美医疗训练、持有本地执照的医师、护士，且有意向定居在BC省</Text>
                </Section>

                <Section title="项目优势">
                    <FeatureList items={[
                        "无需打分，符合条件可直接递交申请，不需要与其他申请人竞争，不用按照分数排序等待邀请",
                        "无职位要求，可以为NOC TEER中的任何一类",
                        "无过往工作经验要求，且拿到工作offer之后即可递交申请，审核速度相对较快",
                        "如同时满足EEBC快速通道的要求，联邦阶段可提速"
                    ]} />
                </Section>

                <Section title="项目要求">
                    <FeatureList items={[
                        "在规定的公共卫生机构取得一份全职长期工作合同；",
                        "符合公共卫生当局规定的教育、培训、经验和资格要求，同时还需取得职位所需的任何认证、许可或注册等要求；",
                        "如职位属于TEER2/3/4/5，语言需达到CLB4（雅思听力4.5，阅读3.5，口语和写作4分）；",
                        "根据家庭人数，满足最低家庭收入要求；",
                        "薪水达到当地行业标准；",
                        "如人已在加拿大，则在加拿大居住和工作生活期间，拥有合法身份。"
                    ]} />
                </Section>

                <Section title="符合要求的公共卫生机构">
                    <FeatureList items={[
                        "Provincial Health Services Authority省卫生服务局",
                        "First Nations Health Authority 原住民卫生局",
                        "Fraser Health 菲沙卫生局",
                        "Interior Health 内陆地区卫生局",
                        "Island Health 岛屿卫生局",
                        "Northern Health 北部卫生局",
                        "Vancouver Coastal Health 温哥华沿海卫生局",
                        "Providence Health Care 天佑护理中心"
                    ]} />
                </Section>

                <Section title="申请流程">
                    <FeatureList items={[
                        "在BC相应的公立卫生机构取得注册资格",
                        "获得相应机构的长期全职工作合同",
                        "注册BCPNP账户，递交完整申请",
                        "BCPNP审批",
                        "省提名获批，递交联邦永居（PR）申请",
                        "PR获批，成为加拿大永久居民"
                    ]} ordered={true} />
                    <Image src={healthAuthorityStream}
                        alt='healthAuthorityStream'
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

export default HealthAuthorityStream;
