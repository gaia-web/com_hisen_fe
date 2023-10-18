import { Box, Divider, Link } from "@chakra-ui/react";
import ExpressEntry from '../../../components/ExpressEntry/ExpressEntry'
import FSW from '../../../components/FSW/FSW'
import FST from '../../../components/FST/FST'
import CategorySelection from '../../../components/CategorySelection/CategorySelection'

const Federation = () => {
    return (
        <Box>
            <Box mt="2rem" id="ExpressEntry"><ExpressEntry></ExpressEntry></Box>
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
                    href="#ExpressEntry"
                    color="blue.500"
                    _hover={{ color: "blue.600", textDecoration: "underline" }}
                    transition="color 0.2s"
                    my={2}
                >
                    Express Entry
                </Link>
                <Link
                    as="a"
                    display="block"
                    href="#FSW"
                    color="blue.500"
                    _hover={{ color: "blue.600", textDecoration: "underline" }}
                    transition="color 0.2s"
                    my={2}
                >
                    FSW
                </Link>
                <Link
                    as="a"
                    display="block"
                    href="#FST"
                    color="blue.500"
                    _hover={{ color: "blue.600", textDecoration: "underline" }}
                    transition="color 0.2s"
                    my={2}
                >
                    FST
                </Link>
                <Link
                    as="a"
                    display="block"
                    href="#CategorySelection"
                    color="blue.500"
                    _hover={{ color: "blue.600", textDecoration: "underline" }}
                    transition="color 0.2s"
                    my={2}
                >
                    Category-based
                </Link>
            </Box>
            <Divider my={10} />
            <Box id="FSW"><FSW></FSW></Box>
            <Divider my={10} />
            <Box id="FST"><FST></FST></Box>
            <Divider my={10} />
            <Box mb="2rem" id="CategorySelection"><CategorySelection></CategorySelection></Box>
        </Box>
    )
}

export default Federation