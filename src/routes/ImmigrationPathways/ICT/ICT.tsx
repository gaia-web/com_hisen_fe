import { Box, Link, Divider } from '@chakra-ui/react';
import ICTVisa from '../../../components/ICT/ICTVisa';
import OOWPVisa from '../../../components/OOWP/OOWPVisa';

const ICT = () => {
    return (
        <Box>
            <Box mt="2rem" id="ICT"><ICTVisa /></Box>
            <Box
                position="fixed"
                left="10"
                top="40%"
                transform="translateY(-50%)"
                zIndex="1"
                display={["none", "none", "none", "block"]} 
                sx={{
                    "@media screen and (max-width: 1360px)": {
                        display: "none", 
                    }
                }}
            >
                <Link 
                    as="a" 
                    display="block" 
                    href="#ICT" 
                    color="blue.500" 
                    _hover={{ color: "blue.600", textDecoration: "underline" }}
                    transition="color 0.2s"
                    my={2}
                >
                    ICT – 高管工签
                </Link>
                <Link 
                    as="a" 
                    display="block" 
                    href="#OOWPVisa" 
                    color="blue.500" 
                    _hover={{ color: "blue.600", textDecoration: "underline" }}
                    transition="color 0.2s"
                    my={2}
                >
                    OOWP – 开放工签
                </Link>
            </Box>
            <Divider my={10} />
            <Box mb="2rem" id="OOWPVisa"><OOWPVisa /></Box>
        </Box>
    );
}

export default ICT;
