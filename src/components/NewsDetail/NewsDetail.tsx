import { Box } from "@chakra-ui/react";
import Markdown from "marked-react";

const NewsDetail = () => {
  if (!history.state?.context) {
    window.location.href = "/news";
  }

  return (
    <Box>
      <Box
        bg="gray.100"
        maxW="1200px"
        margin="3rem"
        p={5}
        pt="50px"
        rounded="md"
      >
        <Markdown>{history.state.context}</Markdown>
      </Box>
    </Box>
  );
};

export default NewsDetail;
