import { Box, Heading, List, ListItem, Text, Button, VStack, Icon, Flex, Spacer, useColorModeValue, Image } from "@chakra-ui/react";
import { CheckCircleIcon } from '@chakra-ui/icons';
import { Link } from 'preact-router/match';
import spouseImmigration from '../../img/ImmigrationPathways/spouseImmigration.webp'; 

const SpouseImmigration = () => {
    const bgColor = useColorModeValue("gray.100", "gray.700");
    const borderColor = useColorModeValue("gray.200", "gray.600");

    return (
        <Flex direction="column" p={5} shadow="md" borderWidth="1px" maxW="1000px" m="auto" bg={bgColor} borderRadius="md">
            <Box p={5} borderBottom="1px" borderColor={borderColor}>
                <Heading fontSize="2xl" mb={4}>夫妻/伴侣团聚移民</Heading>
                <Text>Spouse/Common-Law，加拿大夫妻/伴侣团聚移民主要是用于加拿大公民或者在加拿大的永久居民担保其伴侣移民加拿大，与担保人在加拿大共同生活。加拿大夫妻团聚移民对于申请方的个人要求及其简单，不要求学历、工作经验、语言能力。该项目审核核心为担保人与被担保人是否存在合法的真实的婚姻关系。</Text>
            </Box>

            <Flex direction="column" p={5} spacing={5}>
                <Section title="项目要求">
                    <Text>1. 担保人需满足以下条件：</Text>
                    <FeatureList items={[
                        "担保人必须是加拿大公民或定居在加拿大的永久居民；",
                        "年龄在18周岁以上；",
                        "承诺承担婚姻义务，给配偶提供至少3年的全面经济支持；",
                        "如果申请人当前定居魁省，需要满足魁省的要求。"
                    ]} />
                    <Text>2. 担保人与被担保人的婚姻关系可分为以下三种：</Text>
                    <FeatureList items={[
                        "配偶（spouse）：在加拿大境内或境外注册结婚均可，如果是在加拿大境外结婚，婚姻需要同时满足结婚国家和加拿大法律的要求;",
                        "普通法伴侣（common-law partner）：在加拿大法律中，只要双方同居12个月以上并像夫妻一样生活，可以视为已经结婚。和婚姻一样，加拿大只承认一个同居伴侣;",
                        "事实婚姻伴侣（conjugal partner）：双方存在超过一年的真实婚姻关系，但因为某些不可抗因素而无法结婚或同居;",
                        "无论是异性或同性，均可为配偶、普通法伴侣或事实婚姻伴侣。"
                    ]} />
                </Section>

                <Section title="申请流程">
                    <FeatureList items={[
                        "评估/签约",
                        "收集资料，准备申请文件",
                        "递交完整申请",
                        "担保人担保资格审批通过",
                        "被担保人PR申请获批，成为加拿大永久居民"
                    ]} ordered />
                    <Image src={spouseImmigration}
                        alt='spouseImmigration'
                    />
                </Section>

                <Text mt={4}>如果您对夫妻/伴侣团聚移民感兴趣，欢迎联系我们进行咨询。</Text>

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

export default SpouseImmigration;
