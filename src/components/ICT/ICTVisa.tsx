import { Box, Heading, List, ListItem, Text, Button, VStack, Icon, Flex, Spacer, useColorModeValue, Image } from "@chakra-ui/react";
import { CheckCircleIcon } from '@chakra-ui/icons';
import { Link } from 'preact-router/match';
import ict from '../../img/ImmigrationPathways/ict.webp';

const ICTVisa = () => {
    const bgColor = useColorModeValue("gray.100", "gray.700");
    const borderColor = useColorModeValue("gray.200", "gray.600");

    return (
        <Flex direction="column" p={5} shadow="md" borderWidth="1px" maxW="1000px" m="auto" bg={bgColor} borderRadius="md">
            <Box p={5} borderBottom="1px" borderColor={borderColor}>
                <Heading fontSize="2xl" mb={4}>ICT – 高管工签</Heading>
                <Text>ICT 全称为Intra-Company Transferee Work Permit - 跨国公司内部调动工作签证。加拿大政府鼓励海外企业在加拿大设立母公司、子公司、分公司或附属公司，因此该签证是加拿大政府专门针对此类企业对公司关键员工进行内部跨国调动而准备的。</Text>
            </Box>

            <Flex direction="column" p={5} spacing={5}>
                <Section title="ICT适用人群">
                    <Flex wrap="wrap" justify="space-between">
                        {["跨国企业高管", "跨国企业高级技术人才", "有计划将业务拓展至加拿大的企业家"].map((item, index) => (
                            <Box key={index} flex="1" minW="30%" p={2} textAlign="center" borderRadius="md" borderWidth="1px" borderColor={borderColor} m={1}>
                                {item}
                            </Box>
                        ))}
                    </Flex>
                </Section>

                <Section title="项目优势">
                    <FeatureList items={[
                        "申请周期短，审批速度快",
                        "工签有效期长",
                        "全家享受福利",
                        "最少限度的申请要求",
                        "启动资金低",
                        "可转加拿大永居"
                    ]} />
                </Section>

                <Section title="申请资格">
                    <FeatureList items={[
                        "母公司：在所在国家注册2年以上；年营业额达到至少150万人民币以上；全职员工至少5人以上，越多越好；拥有实际经营场地。",
                        "子公司：在加拿大已经成立或即将成立分公司、控股公司、合资经营或合作经营等模式的公司；需证明母公司与加拿大子公司拥有实质性的关联关系；提供至少10万加币的启动资金证明；有真实的办公场地及合法经营的文件；雇佣合理数量的员工。",
                        "申请人：在过去3年中在母公司有至少1年以上的工作经验；在母公司担任副总经理级别及以上的职位，如法人、高管、经理、公司核心业务部门主管；在子公司担任全职管理层，且工作职位及职责与在母公司保持一致。"
                    ]} />
                </Section>

                <Section title="申请流程">
                    <FeatureList items={[
                        "评估/签约",
                        "成立加拿大子公司，开设子公司银行账户 收集资料、准备工签申请文件包括商业计划书",
                        "递交工签申请",
                        "工签获批",
                        "登陆加拿大运营子公司"
                    ]} ordered />
                    <Image src={ict}
                        alt='hisen'
                      
                    />
                </Section>

                <Text mt={4}>既然ICT是加拿大的工作签证，那如何才能移民加拿大获得永居身份呢？工签获批后，申请人即可开始积累加拿大工作经验，随后经由我们的专业评估为您找到适合的移民路径从而实现ICT工签转移民项目，拿到加拿大的永居身份。如果您对ICT工签感兴趣，欢迎联系我们进行咨询。</Text>

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

export default ICTVisa;
