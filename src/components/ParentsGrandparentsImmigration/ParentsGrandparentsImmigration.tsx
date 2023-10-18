import { Box, Heading, List, ListItem, Text, Button, VStack, Icon, Flex, Spacer, useColorModeValue, Image } from "@chakra-ui/react";
import { CheckCircleIcon } from '@chakra-ui/icons';
import { Link } from 'preact-router/match';
import parentsGrandparents from '../../img/ImmigrationPathways/parentsGrandparents.webp'; // 请确保您有相应的图片文件并更改此路径

const ParentsGrandparentsImmigration = () => {
    const bgColor = useColorModeValue("gray.100", "gray.700");
    const borderColor = useColorModeValue("gray.200", "gray.600");

    return (
        <Flex direction="column" p={5} shadow="md" borderWidth="1px" maxW="1000px" m="auto" bg={bgColor} borderRadius="md">
            <Box p={5} borderBottom="1px" borderColor={borderColor}>
                <Heading fontSize="2xl" mb={4}>父母/祖父母团聚移民项目</Heading>
                <Text>加拿大2017年父母与祖父母团聚移民重开，但移民部对此类移民申请政策及流程做了重大修改。与以往不同的是，父母与祖父母团聚移民申请将实行随机抽签制度。一般情况下移民局一年会进行一次抽签，但根据以往经验，当受邀人数不足配额的指标时，移民部将会进行第二次抽签。</Text>
            </Box>

            <Flex direction="column" p={5} spacing={5}>
                <Section title="项目历年回顾">
                    <FeatureList items={[
                        "2022年父母团聚移民仍采取抽签制。自2022年10月12日起，加拿大移民局从2020年递交了申请意向但未被抽中的担保人中，随机邀请23,100名担保人递交正式申请。",
                        "2021年同样采用随机抽签制度，从2020年递交团聚移民意向申请的候选人池中，在1月和9月进行了两轮随机抽选，共发出4万份邀请。",
                        "2020年回到了随机抽签模式，但由于疫情的影响，移民局仅仅开放了申请通道，收到了约20万份担保意向表，但没有进行抽签。同时，对担保人的收入要求也有所放宽。",
                        "2019年恢复至先到先得模式，移民局在规定时间开放通道，担保人在线提交担保意向书，纯拼手速和网速，根据提交顺序最终接收了2.7万份意向书。",
                        "2018年同样采取随机抽签制度，移民局在3月和7月进行了两轮随机抽签，共随机邀请了1.7万人。",
                        "2017年采用了随机抽签模式，年初担保人提交意向表，父母团聚移民入选候选人池，移民局在4月份随机邀请了1万人。",
                        "2016年同样采用了先到先得模式，开放了1万个名额。",
                        "2014-2015年采用先到先得模式，担保人通过邮寄纸质申请材料到移民局办公室，按照包裹签收的顺序先到先得，共开放了5千个名额。"
                    ]} />
                </Section>

                <Section title="项目要求">
                    <Text>担保人需满足以下条件：</Text>
                    <FeatureList items={[
                        "年龄在18周岁以上；",
                        "现居住在加拿大；",
                        "是加拿大公民或永久居民；",
                        "过去三年满足加拿大最低收入标准；",
                        "签署担保协议，承诺在 20 年内满足被担保家庭成员衣食住行等各方面的基本需求；",
                        "如果申请人当前定居魁省，需要满足魁省的要求。"
                    ]} />
                </Section>

                <Section title="申请流程">
                    <FeatureList items={[
                        "评估/签约",
                        "收集资料，提交担保父母移民的意向表",
                        "收到邀请",
                        "提交完整的申请材料",
                        "担保人担保资格审批通过",
                        "被担保人PR申请获批，成为加拿大永久居民"
                    ]} ordered />
                    <Image src={parentsGrandparents}
                        alt='parentsGrandparents'
                    />
                </Section>

                <Text mt={4}>如果您对父母/祖父母团聚移民项目感兴趣，欢迎联系我们进行咨询。</Text>

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

export default ParentsGrandparentsImmigration;
