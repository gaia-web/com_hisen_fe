import { Box, Heading, List, ListItem, Text, Button, VStack, Icon, Flex, Spacer, useColorModeValue, Image } from "@chakra-ui/react";
import { CheckCircleIcon } from '@chakra-ui/icons';
import { Link } from 'preact-router/match';
import bcpnpEntryLevel from '../../img/ImmigrationPathways/bcpnpEntryLevel.webp';

const BCPNPEntryLevel = () => {
    const bgColor = useColorModeValue("gray.100", "gray.700");
    const borderColor = useColorModeValue("gray.200", "gray.600");

    return (
        <Flex direction="column" p={5} shadow="md" borderWidth="1px" maxW="1000px" m="auto" bg={bgColor} borderRadius="md">
            <Box p={5} borderBottom="1px" borderColor={borderColor}>
                <Heading fontSize="2xl" mb={4}>BCPNP – Entry-Level and Semi-Skilled Stream</Heading>
                <Text>中低技术工人项目是BC省专为初级技术劳工而设定的移民项目，适用于愿意或目前在BC 省工作、且从事包括旅游、酒店、或者食品加工等行业的申请人。</Text>
            </Box>

            <Flex direction="column" p={5} spacing={5}>
                <Section title="适用人群">
                    <Text>适合愿意从事蓝领工作并有意向来BC省定居的技术人才</Text>
                </Section>

                <Section title="项目优势">
                    <FeatureList items={[
                        "项目成熟，抽签频率稳定",
                        "英文，学历要求相对低",
                        "邀请分数相对其他类别会较低一些，竞争压力并不大",
                        "在加拿大大温地区买房的可豁免海外买家税",
                        "该项目涉及的行业类别都属于紧缺型，具有良好的就业优势以及移民优势"
                    ]} />
                </Section>

                <Section title="项目要求">
                    <FeatureList items={[
                        "有一份来自BC省雇主提供的全职长期工作合同；",
                        "提交申请前已为该雇主全职工作至少连续九个月；",
                        "职位必须是NOC TEER 4或5类",
                        "高中或以上学历，或者如果申请人从事的职业需要有关证书，申请人也必须有专业性证书；",
                        "英文需满足最低CLB 4的语言要求（雅思听力4.5，阅读3.5，口语和写作4分）；",
                        "工资需达到BC省同行业的薪资标准；",
                        "根据家庭人数，满足最低家庭收入要求；",
                        "如人已在加拿大，则在加拿大居住和工作生活期间，拥有合法身份。"
                    ]} />
                </Section>

                <Section title="对雇主要求">
                    <FeatureList items={[
                        "注册在BC，公司成立并运营至少两年以上；",
                        "大温地区公司需有至少5名全职员工，大温地区以外则需有3名全职员工；",
                        "有良好的声誉和可证明的收益；",
                        "在申请前的5年内，申请人及配偶所持公司股份不超过10%；",
                        "公司对该岗位有真实需求，以及证明作出努力招聘本地员工的尝试。"
                    ]} />
                </Section>

                <Section title="符合要求的行业及职位">
                    <FeatureList items={[
                        "旅游及住宿行业：NOC 64314 酒店前台职员",
                        "旅游，娱乐向导及赌场行业：NOC 64320 旅游观光导游, NOC 64321 赌场从业者, NOC 64322 户外运动及活动向导",
                        "餐饮行业：NOC 64300 酒店领班及迎宾员, NOC 64301 酒保, NOC 65200 餐厅服务员, NOC 65201 食品柜台服务员，帮厨及相关职业",
                        "保洁员（直接受雇于酒店或度假村）：NOC 65210 住宿、旅游及设施安装服务业支持类职位, NOC 65310 保洁员, NOC 65311 专职保洁员, NOC 65312 大楼清洁工、看护人员和重型清洁工",
                        "其他服务职业（直接受雇于酒店或度假村）：NOC 65320 干洗、洗衣房及相关职业, NOC 65329 其他服务支持类职业",
                        "食品加工处理行业：NOC 94140 加工控制及设备操作、餐饮处理, NOC 94141 工厂屠夫及切肉工，处理家禽及相关工作, NOC 94142 鱼类及水产品加工处理, NOC 94143 食品及饮料加工处理测评员, NOC 95106 食品及饮料加工处理劳工"
                    ]} />
                </Section>

                <Section title="申请流程">
                    <FeatureList items={[
                        "获得工作offer且已连续工作至少九个月，确定雇主有担保意向",
                        "收集资料，准备申请文件",
                        "注册BCPNP账户，提交个人信息获得系统评估分数",
                        "获得邀请，递交完整申请",
                        "BCPNP审核",
                        "省提名获批，递交联邦永居（PR）申请",
                        "PR获批，成为加拿大永久居民。"
                    ]} ordered={true} />
                    <Image src={bcpnpEntryLevel}
                        alt='bcpnpEntryLevel'
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

export default BCPNPEntryLevel;
