import { Divider } from '@chakra-ui/react';
import BCPNPGraduate from '../../../componenets/BCPNPGraduate/BCPNPGraduate';
import BCPNPPostGraduate from '../../../componenets/BCPNPPostGraduate/BCPNPPostGraduate';
import BCPNPSkilledWorker from '../../../componenets/BCPNPSkilledWorker/BCPNPSkilledWorker';
import BCPNPEntryLevel from '../../../componenets/BCPNPEntryLevel/BCPNPEntryLevel';
import BCPNPTech from '../../../componenets/BCPNPTech/BCPNPTech';
import HealthAuthorityStream from '../../../componenets/HealthAuthorityStream/HealthAuthorityStream';
import ChildcareOccupations from '../../../componenets/ChildcareOccupations/ChildcareOccupations';
import EEBCFastTrack from '../../../componenets/EEBCFastTrack/EEBCFastTrack';
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