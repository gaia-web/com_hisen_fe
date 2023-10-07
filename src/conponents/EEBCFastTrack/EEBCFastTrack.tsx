import { Box, Heading, List, ListItem, Text, Button, VStack, Icon, Flex, Spacer, useColorModeValue, Image } from "@chakra-ui/react";
import { CheckCircleIcon } from '@chakra-ui/icons';
import { Link } from 'preact-router/match';
import eebcImage from '../../img/ImmigrationPathways/eebcImage.webp';

const EEBCFastTrack = () => {
    const bgColor = useColorModeValue("gray.100", "gray.700");
    const borderColor = useColorModeValue("gray.200", "gray.600");

    return (
        <Flex direction="column" p={5} shadow="md" borderWidth="1px" maxW="1000px" m="auto" bg={bgColor} borderRadius="md">
            <Box p={5} borderBottom="1px" borderColor={borderColor}>
                <Heading fontSize="2xl" mb={4}>EEBC – 快速通道项目</Heading>
                <Text>BCPNP中有快速通道（EEBC）选项的项目有四个，为别为International Graduate Stream， Skilled Worker Stream，International Post-Graduate Stream, Health Authority Stream. Entry-Level and Semi-Skilled没有EEBC的选项。</Text>
            </Box>

            <Flex direction="column" p={5} spacing={5}>
                <Section title="项目优势">
                    <Text>EEBC要求申请人先满足联邦快速通道（Express Entry）下的技术移民、加拿大经验类移民或联邦技工移民的条件之一进入池子，获得省提名后，BC省会给申请人的池子加600分，保证获得邀请。快速通道的优势是联邦阶段的审批速度快。</Text>
                </Section>

                <Section title="申请流程">
                    <FeatureList items={[
                        "在EE系统内注册，填写个人资料，获得分数并入池",
                        "注册BCPNP账户，提交个人信息获得系统评估分数",
                        "成功获得邀请，递交完整申请",
                        "BCPNP审批",
                        "省提名获批，EE系统加600分",
                        "收到邀请（ITA），递交永居（PR）申请",
                        "PR获批，成为加拿大永久居民"
                    ]} ordered={true} />
                    <Image src={eebcImage}
                        alt='eebcImage'
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

export default EEBCFastTrack;
