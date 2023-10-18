import { Divider, Box, Link } from '@chakra-ui/react';
import BCPNPGraduate from '../../../components/BCPNPGraduate/BCPNPGraduate';
import BCPNPPostGraduate from '../../../components/BCPNPPostGraduate/BCPNPPostGraduate';
import BCPNPSkilledWorker from '../../../components/BCPNPSkilledWorker/BCPNPSkilledWorker';
import BCPNPEntryLevel from '../../../components/BCPNPEntryLevel/BCPNPEntryLevel';
import BCPNPTech from '../../../components/BCPNPTech/BCPNPTech';
import HealthAuthorityStream from '../../../components/HealthAuthorityStream/HealthAuthorityStream';
import ChildcareOccupations from '../../../components/ChildcareOccupations/ChildcareOccupations';
import EEBCFastTrack from '../../../components/EEBCFastTrack/EEBCFastTrack';

const BCPNP = () => {
    return (
        <Box my="2rem">
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
                {/* 添加缺失的锚点链接 */}
                <Link as="a" display="block" href="#BCPNPGraduate" color="blue.500" _hover={{ color: "blue.600", textDecoration: "underline" }} transition="color 0.2s" my={2}>
                    BCPNP Graduate
                </Link>
                <Link as="a" display="block" href="#BCPNPPostGraduate" color="blue.500" _hover={{ color: "blue.600", textDecoration: "underline" }} transition="color 0.2s" my={2}>
                    BCPNP Post Graduate
                </Link>
                <Link as="a" display="block" href="#BCPNPSkilledWorker" color="blue.500" _hover={{ color: "blue.600", textDecoration: "underline" }} transition="color 0.2s" my={2}>
                    BCPNP Skilled Worker
                </Link>
                <Link as="a" display="block" href="#BCPNPEntryLevel" color="blue.500" _hover={{ color: "blue.600", textDecoration: "underline" }} transition="color 0.2s" my={2}>
                    BCPNP Entry Level
                </Link>
                <Link as="a" display="block" href="#BCPNPTech" color="blue.500" _hover={{ color: "blue.600", textDecoration: "underline" }} transition="color 0.2s" my={2}>
                    BCPNP Tech
                </Link>
                <Link as="a" display="block" href="#HealthAuthorityStream" color="blue.500" _hover={{ color: "blue.600", textDecoration: "underline" }} transition="color 0.2s" my={2}>
                    Health Authority Stream
                </Link>
                <Link as="a" display="block" href="#ChildcareOccupations" color="blue.500" _hover={{ color: "blue.600", textDecoration: "underline" }} transition="color 0.2s" my={2}>
                    Childcare Occupations
                </Link>
                <Link as="a" display="block" href="#EEBCFastTrack" color="blue.500" _hover={{ color: "blue.600", textDecoration: "underline" }} transition="color 0.2s" my={2}>
                    EEBC Fast Track
                </Link>
            </Box>
            {/* 确保每个组件都有一个与锚点链接对应的id */}
            <Box id="BCPNPGraduate"><BCPNPGraduate /></Box>
            <Divider my={50} />
            <Box id="BCPNPPostGraduate"><BCPNPPostGraduate /></Box>
            <Divider my={50} />
            <Box id="BCPNPSkilledWorker"><BCPNPSkilledWorker /></Box>
            <Divider my={50} />
            <Box id="BCPNPEntryLevel"><BCPNPEntryLevel /></Box>
            <Divider my={50} />
            <Box id="BCPNPTech"><BCPNPTech /></Box>
            <Divider my={50} />
            <Box id="HealthAuthorityStream"><HealthAuthorityStream /></Box>
            <Divider my={50} />
            <Box id="ChildcareOccupations"><ChildcareOccupations /></Box>
            <Divider my={50} />
            <Box id="EEBCFastTrack"><EEBCFastTrack /></Box>
        </Box>
    )
}

export default BCPNP;
