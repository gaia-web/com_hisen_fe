import { Box, Link, Divider } from '@chakra-ui/react';
import SpouseImmigration from '../../../components/SpouseImmigration/SpouseImmigration'
import ParentsGrandparentsImmigration from '../../../components/ParentsGrandparentsImmigration/ParentsGrandparentsImmigration';
import DependentChildImmigration from '../../../components/DependentChildImmigration/DependentChildImmigration'
const FamilyClass = () => {
    return (
        <Box>
            <Box mt="2rem" id="SpouseImmigration"><SpouseImmigration /></Box>
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
                    href="#SpouseImmigration"
                    color="blue.500"
                    _hover={{ color: "blue.600", textDecoration: "underline" }}
                    transition="color 0.2s"
                    my={2}
                >
                    伴侣团聚移民
                </Link>
                <Link
                    as="a"
                    display="block"
                    href="#ParentsGrandparentsImmigration"
                    color="blue.500"
                    _hover={{ color: "blue.600", textDecoration: "underline" }}
                    transition="color 0.2s"
                    my={2}
                >
                    父母团聚移民
                </Link>
                <Link
                    as="a"
                    display="block"
                    href="#DependentChildImmigration"
                    color="blue.500"
                    _hover={{ color: "blue.600", textDecoration: "underline" }}
                    transition="color 0.2s"
                    my={2}
                >
                    子女团聚移民
                </Link>
            </Box>
            <Divider my={10} />
            <Box id="ParentsGrandparentsImmigration"><ParentsGrandparentsImmigration /></Box>
            <Divider my={10} />
            <Box mb="2rem" id="DependentChildImmigration"><DependentChildImmigration></DependentChildImmigration></Box>
        </Box>
    );
}

export default FamilyClass;
