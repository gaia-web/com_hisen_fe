import { Box, Heading, List, ListItem, Text, Button, VStack, Icon, Flex, Spacer, useColorModeValue, Image } from "@chakra-ui/react";
import { CheckCircleIcon } from '@chakra-ui/icons';
import { Link } from 'preact-router/match';
import expressEntryImage from '../../img/ImmigrationPathways/expressEntry.webp'; // 请确保图片路径正确

const ExpressEntry = () => {
    const bgColor = useColorModeValue("gray.100", "gray.700");
    const borderColor = useColorModeValue("gray.200", "gray.600");

    return (
        <Flex direction="column" p={5} shadow="md" borderWidth="1px" maxW="1000px" m="auto" bg={bgColor} borderRadius="md">
            <Box p={5} borderBottom="1px" borderColor={borderColor}>
                <Heading fontSize="2xl" mb={4}>Express Entry – Canadian Experience Class</Heading>
                <Text>自2015年1月起，加拿大启用了快速通道系统(Express Entry，简称EE)，并将所有联邦技术类移民项目统一规划到该系统。该系统要求申请人先进入候选池以表达移民意向，所有申请人会根据综合评分系统(CRS)进行排名，加拿大移民局会定期从EE池中抽签，收到邀请的申请人可提交正式的移民申请。</Text>
            </Box>

            <Flex direction="column" p={5} spacing={5}>
                <Section title="适用人群">
                    <Flex wrap="wrap" justify="space-between">
                        {["拥有加拿大教育背景并持有毕业工签的国际留学生", "在加拿大境内持有工作签证的海外人士，包括持有配偶工签的陪读人士"].map((item, index) => (
                            <Box key={index} flex="1" minW="30%" p={2} textAlign="center" borderRadius="md" borderWidth="1px" borderColor={borderColor} m={1}>
                                {item}
                            </Box>
                        ))}
                    </Flex>
                </Section>

                <Section title="项目优势">
                    <FeatureList items={[
                        "审批速度快，成功率高",
                        "所需费用低",
                        "工作要求宽泛",
                        "所需材料简单",
                        "无需雇主担保，无需投资，无资产要求",
                        "项目成熟，抽签频率稳定"
                    ]} />
                </Section>

                <Section title="项目要求">
                    <FeatureList items={[
                        "工作经验:在过去3年中有1年属于NOC TEER 0/1/2/3岗位的加拿大全职工作经验",
                        "语言要求:工作职位属于NOC TEER 0/1类，语言要达到CLB7的水平(雅思听力6分，阅读6分，口语6分，写作6分);工作职位属于NOC TEER 2/3类，语言要达到CLB5(雅思听力5分，阅读4分，口语5分，写作5分)",
                        "无定居在魁北克的意向"
                    ]} />
                </Section>

                <Section title="申请流程">
                    <FeatureList items={[
                        "评估/签约",
                        "收集资料，准备申请文件",
                        "在EE系统内注册，填写个人资料，获得分数并入池",
                        "收到邀请(ITA)，递交永居(PR)申请",
                        "PR获批，成为加拿大永久居民"
                    ]} ordered />
                    <Image src={expressEntryImage}
                        alt='Express Entry'
                    />
                </Section>

                <Text mt={4}>Express Entry – Canadian Experience Class为希望在加拿大工作和生活的留学生提供了最快的移民途径。如果您对此项目感兴趣，欢迎联系我们进行咨询。</Text>

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

export default ExpressEntry;
