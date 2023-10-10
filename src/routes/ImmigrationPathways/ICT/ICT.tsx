import { Divider } from '@chakra-ui/react';
import ICTVisa from '../../../components/ICT/ICTVisa'
import OOWPVisa from '../../../components/OOWP/OOWPVisa'

const ICT = () => {
    return (
        <>
            <ICTVisa></ICTVisa>
            <Divider mt={10} />
            <OOWPVisa></OOWPVisa>
        </>
    );
}

export default ICT;
