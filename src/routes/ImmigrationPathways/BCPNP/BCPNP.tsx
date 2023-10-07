import { Divider } from '@chakra-ui/react';
import BCPNPGraduate from '../../../conponents/BCPNPGraduate/BCPNPGraduate';
import BCPNPPostGraduate from '../../../conponents/BCPNPPostGraduate/BCPNPPostGraduate';
import BCPNPSkilledWorker from '../../../conponents/BCPNPSkilledWorker/BCPNPSkilledWorker';
import BCPNPEntryLevel from '../../../conponents/BCPNPEntryLevel/BCPNPEntryLevel';
import BCPNPTech from '../../../conponents/BCPNPTech/BCPNPTech';
import HealthAuthorityStream from '../../../conponents/HealthAuthorityStream/HealthAuthorityStream';
import ChildcareOccupations from '../../../conponents/ChildcareOccupations/ChildcareOccupations';
import EEBCFastTrack from '../../../conponents/EEBCFastTrack/EEBCFastTrack';
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