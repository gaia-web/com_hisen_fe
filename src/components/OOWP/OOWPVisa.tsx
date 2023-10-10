import { Box, Heading, List, ListItem, Text, Button, VStack, Icon, Flex, Spacer, useColorModeValue, Image } from "@chakra-ui/react";
import { CheckCircleIcon } from '@chakra-ui/icons';
import { Link } from 'preact-router/match';
import oowp from '../../img/ImmigrationPathways/oowp.webp';

const OOWPVisa = () => {
    const bgColor = useColorModeValue("gray.100", "gray.700");
    const borderColor = useColorModeValue("gray.200", "gray.600");

    return (
        <Flex direction="column" p={5} shadow="md" borderWidth="1px" maxW="1000px" m="auto" bg={bgColor} borderRadius="md">
            <Box p={5} borderBottom="1px" borderColor={borderColor}>
                <Heading fontSize="2xl" mb={4}>OOWP – 开放工签</Heading>
                <Text>OOWP全称为Open Work Permit，是加拿大的一种开放性工作许可。与其他工作许可不同的是，持有OOWP的人员可以在加拿大的任何雇主处工作，而不需要LMIA。</Text>
            </Box>

            <Flex direction="column" p={5} spacing={5}>
                <Section title="OOWP适用人群">
                    <Flex wrap="wrap" justify="space-between">
                        {["留学生毕业后", "配偶或伴侣的陪伴", "难民申请者", "已提交永居申请的人员"].map((item, index) => (
                            <Box key={index} flex="1" minW="30%" p={2} textAlign="center" borderRadius="md" borderWidth="1px" borderColor={borderColor} m={1}>
                                {item}
                            </Box>
                        ))}
                    </Flex>
                </Section>

                <Section title="项目优势">
                    <FeatureList items={[
                        "工作自由度高，可在任何雇主处工作",
                        "无需LMIA",
                        "可为永居申请积累工作经验",
                        "申请流程相对简单",
                        "可带家属来加"
                    ]} />
                </Section>

                <Section title="申请资格">
                    <FeatureList items={[
                        "必须在加拿大境内申请",
                        "必须持有有效的居留身份",
                        "满足特定的申请条件，如留学生毕业、陪伴工签等"
                    ]} />
                </Section>

                <Section title="申请流程">
                    <FeatureList items={[
                        "评估资格",
                        "准备相关文件",
                        "在线提交申请",
                        "等待审批",
                        "获得OOWP"
                    ]} ordered />
                    <Image src={oowp}
                        alt='oowp'
                      
                    />
                </Section>

                <Text mt={4}>OOWP为申请者提供了在加拿大工作的极大自由，是许多人选择的工作许可类型。如果您对OOWP感兴趣，欢迎联系我们进行咨询。</Text>

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

export default OOWPVisa;
