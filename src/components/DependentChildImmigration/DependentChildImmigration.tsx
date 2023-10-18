import { Box, Heading, List, ListItem, Text, Button, VStack, Icon, Flex, Spacer, useColorModeValue, Image } from "@chakra-ui/react";
import { CheckCircleIcon } from '@chakra-ui/icons';
import { Link } from 'preact-router/match';
import dependentChild from '../../img/ImmigrationPathways/dependentChild.webp'; // 请确保您有相应的图片文件并更改此路径

const DependentChildImmigration = () => {
    const bgColor = useColorModeValue("gray.100", "gray.700");
    const borderColor = useColorModeValue("gray.200", "gray.600");

    return (
        <Flex direction="column" p={5} shadow="md" borderWidth="1px" maxW="1000px" m="auto" bg={bgColor} borderRadius="md">
            <Box p={5} borderBottom="1px" borderColor={borderColor}>
                <Heading fontSize="2xl" mb={4}>子女团聚移民项目</Heading>
                <Text>子女团聚移民用于担保人担保自己的子女通过家庭担保移民方式移民加拿大。在加拿大移民系统子女团聚属于配偶团聚类别中，收养子女团聚属于父母及其他亲属团聚类别中。自2017年10月24日起，加拿大移民局把未成年子女的年龄从19岁提高到了22岁。子女团聚移民中，父母双方至少一方需为加拿大公民或永久居民，子女须为22岁以下且无配偶或同居伴侣。</Text>
            </Box>

            <Flex direction="column" p={5} spacing={5}>
                <Section title="项目要求">
                    <Text>担保人需满足以下条件：</Text>
                    <FeatureList items={[
                        "年龄在18周岁以上；",
                        "如果保人是永久居民，则必须居住在加拿大；如果担保人是加拿大公民，则必须在完成担保后计划居住在加拿大；",
                        "具有足够的经济担保能力，承诺义务承担子女到达加拿大后的基本生活开销。"
                    ]} />
                    <Text>被担保人需满足以下要求：</Text>
                    <FeatureList items={[
                        "为担保人的子女；",
                        "无配偶或合法伴侣；",
                        "22周岁以下。"
                    ]} />
                    <Text>22 岁以上的子女也可能有资格成为受抚养人，他们满足以下两个要求：</Text>
                    <FeatureList items={[
                        "因身体或心理缺陷等原因导致在经济上无法自给自足；",
                        "在22岁之前就开始完全需要依靠父母经济支持来生活。"
                    ]} />
                    <Text>担保收养的子女不属于子女团聚移民，属于其他类别的团聚移民项目。</Text>
                </Section>

                <Section title="申请流程">
                    <FeatureList items={[
                        "评估/签约",
                        "收集资料，准备申请文件",
                        "递交完整申请",
                        "担保人担保资格审批通过",
                        "被担保人PR申请获批，成为加拿大永久居民"
                    ]} ordered />
                    <Image src={dependentChild}
                        alt='dependentChild'
                    />
                </Section>

                <Text mt={4}>如果您对子女团聚移民项目感兴趣，欢迎联系我们进行咨询。</Text>

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

export default DependentChildImmigration;
