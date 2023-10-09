import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Heading,
  CircularProgress,
} from "@chakra-ui/react";
import { OneDriveAdapter, OneDriveFile } from "drive-adapters";
import { useEffect, useState } from "preact/hooks";

function NewsUpdates() {
  const [news, setNews] = useState<
    {
      title: string;
      createdTime: Date;
      context: string;
    }[]
  >();

  const sharingLink = `https://1drv.ms/f/s!Akwk_rooMFtbgRZsFanDS-fleX-m?e=1jz0gf`;
  const driveAdapter = new OneDriveAdapter(sharingLink);

  useEffect(() => {
    const fetchData = async () => {
      const mdList = [];
      const mdList2 = [];
      const children = await driveAdapter.children;
      if (!children) return;
      for await (let child of children) {
        // if the child item has name ending with ".md", then push it into mdList
        if (child.name?.endsWith(".md")) mdList.push(child as OneDriveFile);
      }

      for (let md of mdList) {
        mdList2.push({
          title: md.name ?? "",
          createdTime: md.createdTime ?? new Date(),
          context: (await md.contentAsText) ?? "",
        });
      }

      console.log("children", mdList);
      console.log("children", mdList2);
      setNews(mdList2);
    };

    fetchData();
    console.log("Done");
  }, []);

  if (!news) {
    return <CircularProgress />;
  }

  return (
    <Box>
      <Box maxW="1200px" margin="0 auto" p={5} pt="50px">
        <Heading mb={6} marginBottom="6rem">
          新闻
        </Heading>

        {news ? (
          <Accordion defaultIndex={news.map((_, i) => i)} allowToggle>
            {news.map((n) => (
              <AccordionItem bg="gray.100" margin="3rem 0.5rem" border="none" boxShadow='dark-lg' p='6' rounded='md'>
                <AccordionButton>
                  <Box
                    flex="1"
                    textAlign="left"
                    fontSize="1.5rem"
                    fontWeight="bold"
                  >
                    {n.title}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4}>{n.context}</AccordionPanel>
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
