import { Divider } from '@chakra-ui/react';
import ICTVisa from '../../../conponents/ICT/ICTVisa'
import OOWPVisa from '../../../conponents/OOWP/OOWPVisa'

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
