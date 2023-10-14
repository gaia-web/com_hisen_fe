import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  Heading,
  CircularProgress,
  useColorModeValue,
  Icon,
  Text,
} from "@chakra-ui/react";
import { OneDriveAdapter, OneDriveFile } from "drive-adapters";
import { useEffect, useState } from "preact/hooks";
import Paginator from "../../components/Paginator/Paginator";
import { FiFileText } from "react-icons/fi";

function NewsUpdates() {
  const [news, setNews] = useState<OneDriveFile[]>([]);
  const [index, setIndex] = useState<number>(0);
  const [pages, setPages] = useState<number[]>([]);
  const pageSizes = 5;

  const sharingLink = `https://1drv.ms/f/s!Akwk_rooMFtbgRZsFanDS-fleX-m?e=1jz0gf`;
  const driveAdapter = new OneDriveAdapter(sharingLink);

  const cardBg = useColorModeValue("white", "gray.800");
  const cardBorder = useColorModeValue("gray.200", "gray.700");
  const cardTextColor = useColorModeValue("gray.800", "white");
  const hoverTransition = "all 0.25s";
  const hoverScale = "scale(1.05)";
  const hoverShadow = "xl";

  useEffect(() => {
    const fetchData = async () => {
      const mdList = [];
      const children = await driveAdapter.children;
      if (!children) return;
      for await (let child of children) {
        if (child.name?.endsWith(".md")) {
          const a = Array.from(Array(1).keys());
          for (const _ of a) {
            mdList.push(child as OneDriveFile);
          }
        }
      }

      //TODO should not be any
      let updatedNews = mdList.map((item: any) => {
        const nameParts = item.name.split('-'); 
        const date = nameParts.slice(0, 3).join('-'); // get date
        const title = nameParts.slice(3).join('-'); // get title
        return {
          ...item,
          name: title.replace('.md', ''), // remove .md
          date: date, // 存储日期
        };
      });

      setNews(updatedNews);

      setPages(Array.from(Array(Math.ceil(mdList.length / pageSizes)).keys()));
    };

    fetchData();
  }, []);

  const redirectToDetail = async (contextLink: Promise<string | undefined>) => {
    history.pushState({ context: await contextLink }, "", "/news/detail");
    history.go();
  };

  return (
    <Box bg={useColorModeValue("gray.50", "gray.900")} color={useColorModeValue("gray.800", "white")} w="100%" minHeight="90vh" p={4}>
      <Box maxW="1200px" margin="0 auto" p={5} pt="50px">
        <Heading mb={6} marginBottom="6rem" textAlign="center" as="h1" size="2xl" fontWeight="bold" color="blue.500">
          新闻更新
        </Heading>

        {news ? (
          <Accordion allowToggle w="100%">
            {news.slice(index * pageSizes, (index + 1) * pageSizes).map((n:OneDriveFile | any, i) => (
              <AccordionItem
                bg={cardBg}
                border="1px"
                borderColor={cardBorder}
                borderRadius="md"
                transition={hoverTransition}
                _hover={{ transform: hoverScale, boxShadow: hoverShadow }}
                marginBottom={i === news.length - 1 ? "0" : "1.5rem"}
              >
                <AccordionButton onClick={() => redirectToDetail(n.contentAsText)}>
                  <Box flex="1" textAlign="left" fontSize="1.25rem" fontWeight="semibold" color={cardTextColor}>
                    <Icon as={FiFileText} marginRight="12px" />
                    {n.name} ｜ {n.date}
                  </Box>
                </AccordionButton>
                <Text px={12} pb={4} color="gray.600">
                  点击上方,开始阅读{n.name}的相关文章。
                </Text>
              </AccordionItem>
            ))}
            <Paginator index={index} setIndex={setIndex} pages={pages} />
          </Accordion>
        ) : (
          <CircularProgress isIndeterminate color="blue.600" />
        )}
      </Box>
    </Box>
  );
}

export default NewsUpdates;
