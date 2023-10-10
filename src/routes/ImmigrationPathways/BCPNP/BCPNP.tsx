import { Divider } from '@chakra-ui/react';
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
        <>
            <BCPNPGraduate></BCPNPGraduate>
            <Divider mt={50} />
            <BCPNPPostGraduate></BCPNPPostGraduate>
            <Divider mt={50} />
            <BCPNPSkilledWorker></BCPNPSkilledWorker>
            <Divider mt={50} />
            <BCPNPEntryLevel></BCPNPEntryLevel>
            <Divider mt={50} />
            <BCPNPTech></BCPNPTech>
            <Divider mt={50} />
            <HealthAuthorityStream></HealthAuthorityStream>
            <Divider mt={50} />
            <ChildcareOccupations></ChildcareOccupations>
            <Divider mt={50} />
            <EEBCFastTrack></EEBCFastTrack>
        </>
    )
}

export default BCPNP