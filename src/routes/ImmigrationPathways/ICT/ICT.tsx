import { Divider } from '@chakra-ui/react';
import ICTVisa from '../../../componenets/ICT/ICTVisa'
import OOWPVisa from '../../../componenets/OOWP/OOWPVisa'

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
