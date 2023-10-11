import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  Heading,
  CircularProgress,
  Flex,
  Button,
} from "@chakra-ui/react";
import { OneDriveAdapter, OneDriveFile } from "drive-adapters";
import { useEffect, useState } from "preact/hooks";
import Paginator from "../../components/Paginator/Paginator";

function NewsUpdates() {
  const [news, setNews] = useState<OneDriveFile[]>([]);
  const [index, setIndex] = useState<number>(0);
  const [pages, setPages] = useState<number[]>([]);
  const pageSizes = 5;

  const sharingLink = `https://1drv.ms/f/s!Akwk_rooMFtbgRZsFanDS-fleX-m?e=1jz0gf`;
  const driveAdapter = new OneDriveAdapter(sharingLink);

  useEffect(() => {
    const fetchData = async () => {
      const mdList = [];
      const children = await driveAdapter.children;
      if (!children) return;
      for await (let child of children) {
        // if the child item has name ending with ".md", then push it into mdList
        if (child.name?.endsWith(".md")) {
          // TODO: Remove this, for demo only
          const a = Array.from(Array(22).keys());
          for (const _ of a) {
            mdList.push(child as OneDriveFile);
          }
        }
      }

      setNews(mdList);
      setPages(Array.from(Array(Math.ceil(mdList.length / pageSizes)).keys()));
    };

    fetchData();
  }, []);

  const redirectToDetail = async (contextLink: Promise<string | undefined>) => {
    history.pushState({ context: await contextLink }, "", "/news/detail");
    history.go();
  };

  return (
    <Box>
      <Box maxW="1200px" margin="0 auto" p={5} pt="50px">
        <Heading mb={6} marginBottom="6rem">
          新闻
        </Heading>

        <Paginator index={index} setIndex={setIndex} pages={pages} />

        {news ? (
          <Accordion>
            {news.slice(index * pageSizes, (index + 1) * pageSizes).map((n) => (
              <AccordionItem
                bg="gray.100"
                margin="3rem 0.5rem"
                border="none"
                boxShadow="dark-lg"
                p="6"
                rounded="md"
              >
                <AccordionButton
                  onClick={() => redirectToDetail(n.contentAsText)}
                >
                  <Box
                    flex="1"
                    textAlign="left"
                    fontSize="1.5rem"
                    fontWeight="bold"
                  >
                    {n.createdTime?.toDateString()} - {n.name}
                  </Box>
                </AccordionButton>
              </AccordionItem>
            ))}
          </Accordion>
        ) : (
          <CircularProgress />
        )}
      </Box>
    </Box>
  );
}

export default NewsUpdates;
