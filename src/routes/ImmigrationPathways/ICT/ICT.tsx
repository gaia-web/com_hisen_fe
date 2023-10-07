import { Box, Heading, List, ListItem, Text, VStack } from "@chakra-ui/react";

const ICT = () => {
  return (
    <Box 
      p={6} 
      shadow="lg" 
      borderWidth="1px" 
      borderRadius="lg" 
      bg="white"
      maxWidth="800px"
      margin="auto"
    >
      <VStack spacing={6} align="start">
        <Heading fontSize="2xl" color="teal.500">加拿大跨国高管工签+移民</Heading>
        <Text fontSize="md">
          这是一个为中国企业家和高管提供的移民加拿大的项目。以下是该项目的主要特点和要求：
        </Text>

        <Box>
          <Heading fontSize="lg" color="blue.600">特点：</Heading>
          <List spacing={2} mt={2}>
            <ListItem>无年龄、学历要求。</ListItem>
            <ListItem>不需要个人财产审查和完税证明。</ListItem>
            <ListItem>工签阶段和永居阶段都不要求英语水平（走雇主担保通道）。</ListItem>
            <ListItem>可以在较短的时间内先出国。</ListItem>
            <ListItem>只要有一家中国公司作为母公司即可申请。</ListItem>
            <ListItem>每个家庭需要支付15~20万加币。</ListItem>
            <ListItem>提供全程1对1定制咨询服务。</ListItem>
          </List>
        </Box>

        <Box>
          <Heading fontSize="lg" color="blue.600">申请条件：</Heading>
          <List spacing={2} mt={2}>
            <ListItem>在中国有一家至少运营了1年的公司，最好3年；年营业额至少500万元，最好在1000万元以上；员工至少5人，最好10人以上。</ListItem>
            <ListItem>过去3年里，你在这家公司至少全职工作过1年以上，职位是高管或核心人员。</ListItem>
            <ListItem>这家公司要在加拿大开设一家子公司，业务背景一致。</ListItem>
            <ListItem>加拿大移民局确认后，给你发放工作签证，给你的家庭成员发放配偶工签/孩子学签。</ListItem>
          </List>
        </Box>

      </VStack>
    </Box>
  );
}

export default ICT;
