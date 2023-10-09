import { Box, Heading, List, ListItem, Text, Button, VStack, Icon, Flex, Spacer, useColorModeValue, Image } from "@chakra-ui/react";
import { CheckCircleIcon } from '@chakra-ui/icons';
import { Link } from 'preact-router/match';
import bcpnpGraduate from '../../img/ImmigrationPathways/bcpnpGraduate.webp';

const BCPNPGraduate = () => {
    const bgColor = useColorModeValue("gray.100", "gray.700");
    const borderColor = useColorModeValue("gray.200", "gray.600");

    return (
        <Flex direction="column" p={5} shadow="md" borderWidth="1px" maxW="1000px" m="auto" bg={bgColor} borderRadius="md">
            <Box p={5} borderBottom="1px" borderColor={borderColor}>
                <Heading fontSize="2xl" mb={4}>BCPNP – International Graduate Stream</Heading>
                <Text>国际毕业生项目，是BC省为了吸引国际留学生定居特别制定了这项政策，方便了在加拿大公立学校毕业的国际留学生。</Text>
            </Box>

            <Flex direction="column" p={5} spacing={5}>
                <Section title="适用人群">
                    <Flex wrap="wrap" justify="space-between">
                        {["加拿大公立学校应届毕业生且有在BC省定居的意向", "有意向来加拿大留学的人群"].map((item, index) => (
                            <Box key={index} flex="1" minW="30%" p={2} textAlign="center" borderRadius="md" borderWidth="1px" borderColor={borderColor} m={1}>
                                {item}
                            </Box>
                        ))}
                    </Flex>
                </Section>

                <Section title="项目优势">
                    <FeatureList items={[
                        "项目成熟，抽签频率稳定，平均半个月一次，邀请人数多",
                        "无必须要在BC省大学毕业的要求",
                        "不强制要求具备过往工作经验",
                        "工作经验周期短，毕业后如有雇主提供工作offer可直接申请",
                        "获得BC省提名的申请人，可以豁免房产的海外买家税",
                        "如同时满足快速通道（EEBC）要求，可加快PR阶段的审理速度"
                    ]} />
                </Section>

                <Section title="项目要求">
                    <FeatureList items={[
                        "对申请人的要求：申请人必须是在递交申请前三年内从加拿大公立学校毕业获得文凭、证书，且至少为8个月的全职学习，其中50%以上的课程必须在加拿大境内完成；有符合资格的BC省雇主提供的全职长期工作合同，且职位必须符合NOC TEER 1, 2或3类，如从事2或3类职业，需达到语言CLB4的水平（雅思听力4.5，阅读3.5，口语和写作4分）。",
                        "对雇主的要求：注册在BC，且持续经营至少一年以上；如果在大温地区以内，要有至少5名全职员工，大温地区以外，要有至少3名全职员工；有良好的声誉和可证明的收益；薪资待遇符合BC省同行业薪资标准；在申请前的5年内，申请人及配偶所持公司股份不超过10%；公司对该岗位有真实需求，以及证明作出努力招聘本地员工的尝试。"
                    ]} />
                </Section>

                <Section title="申请流程">
                    <FeatureList items={[
                        "获得工作offer，确定雇主有担保意向",
                        "收集资料，准备申请文件",
                        "注册BCPNP账户，提交个人信息获得系统评估分数",
                        "获得邀请，递交完整申请",
                        "BCPNP审核",
                        "省提名获批，向联邦移递交永久居民（PR）申请",
                        "PR获批，成为加拿大永久居民"
                    ]} ordered />
                    <Image src={bcpnpGraduate}
                        alt='bcpnpGraduate'
                      
                    />
                </Section>

                <Text mt={4}>BCPNP – International Graduate Stream为国际留学生提供了在BC省定居的机会，是许多留学生选择的移民路径。如果您对此项目感兴趣，欢迎联系我们进行咨询。</Text>

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
        {items.map((item: any, index: any) => (
            <ListItem key={index} display="flex" alignItems="center">
                {!ordered && <Icon as={CheckCircleIcon} color="green.500" />}
                <Text ml={2}>{item}</Text>
            </ListItem>
        ))}
    </List>
);

export default BCPNPGraduate;
