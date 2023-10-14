import { Box } from "@chakra-ui/react";
import Markdown from "marked-react";
import './NewsDetail.css';

const NewsDetail = () => {
  if (!history.state?.context) {
    window.location.href = "/news";
  }

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg="gray.50"
      minHeight="100vh"
    >
      <Box
        bg="white"
        maxW="1200px"
        w="100%"
        marginY="5rem"
        padding="5"
        boxShadow="xl"
        rounded="lg"
      >
        <div className="markdown-content">
          <Markdown>{history.state.context}</Markdown>
        </div>
      </Box>
    </Box>
  );
};

export default NewsDetail;
