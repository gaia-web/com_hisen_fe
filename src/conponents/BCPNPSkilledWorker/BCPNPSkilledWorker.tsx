import { Box, Heading, List, ListItem, Text, Button, VStack, Icon, Flex, Spacer, useColorModeValue, Image } from "@chakra-ui/react";
import { CheckCircleIcon } from '@chakra-ui/icons';
import { Link } from 'preact-router/match';
import bcpnpSkilledWorker from '../../img/ImmigrationPathways/bcpnpSkilledWorker.webp';

const BCPNPSkilledWorker = () => {
    const bgColor = useColorModeValue("gray.100", "gray.700");
    const borderColor = useColorModeValue("gray.200", "gray.600");

    return (
        <Flex direction="column" p={5} shadow="md" borderWidth="1px" maxW="1000px" m="auto" bg={bgColor} borderRadius="md">
            <Box p={5} borderBottom="1px" borderColor={borderColor}>
                <Heading fontSize="2xl" mb={4}>BCPNP – Skilled Worker Stream</Heading>
                <Text>技术工人项目为具BC本地企业所需的技能、工作经验和资格的高技术外国人才设计而成。适用于大部分在国内有2年以上的全职工作经验，白领工作及高级蓝领工作人群。</Text>
            </Box>

            <Flex direction="column" p={5} spacing={5}>
                <Section title="适用人群">
                    <Text>适用于在专业、管理、技术、贸易或其他技术职业方面有经验的高技术人才，且愿意在BC省长期工作和生活</Text>
                </Section>

                <Section title="项目优势">
                    <FeatureList items={[
                        "无必须拥有加拿大本地学历的要求",
                        "政策稳定性极高，抽签频率稳定，平均半个月一次，邀请人数多",
                        "在获得提名后，可拿到工签支持性，申请工签提前入境工作适应当地生活，更有保障",
                        "获得BC省提名的申请人，可以豁免购买房产的海外买家税",
                        "如同时满足快速通道（EEBC）要求，可加快PR阶段的审理速度"
                    ]} />
                </Section>

                <Section title="项目要求">
                    <FeatureList items={[
                        "有一份来自BC省雇主的全职永久NOC TEER 0、1、2、3类工作邀请，工资不低于同行水平；",
                        "有至少2年的任意NOC TEER 0、1、2、3类全职工作经验；",
                        "从事NOC TEER 2、3类工作的申请人语言达到CLB 4（雅思听力4.5，阅读3.5，口语和写作4分）；",
                        "根据家庭人数，满足最低家庭收入要求；",
                        "如人已在加拿大，则在加拿大居住和工作生活期间，拥有合法身份。"
                    ]} />
                </Section>

                <Section title="对雇主的要求">
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
                        "获得工作offer，确定雇主有担保意向",
                        "收集资料，准备申请文件",
                        "注册BCPNP账户，提交个人信息获得系统评估分数",
                        "获得邀请，递交完整申请",
                        "BCPNP审核",
                        "省提名获批，申请工签（如是海外申请人）；向联邦移递交永久居民（PR）申请（如申请人已在职）",
                        "工签获批，登陆加拿大工作",
                        "PR获批，成为加拿大永久居民。"
                    ]} ordered={true} />
                    <Image src={bcpnpSkilledWorker}
                        alt='bcpnpSkilledWorker'
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

export default BCPNPSkilledWorker;
