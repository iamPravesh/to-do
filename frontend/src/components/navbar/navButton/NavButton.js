import { useDispatch, useSelector } from 'react-redux'
import { Button } from '@chakra-ui/react';

import { setActive } from '../../../redux/uiSlice';

const NavButton = ({ children }) => {
    const dispatch = useDispatch();
    const isactive = useSelector(state => state.ui.isActive);

    const handleClick = () => {
        console.log('clicked', children);
        dispatch(setActive(children));
    }

    return (
        <Button
            size="lg"
            width="100%"
            bg={isactive === children ? 'blue.900' : 'blue.500'}
            color={'white'}
            my={'1%'}
            onClick={handleClick}
            _hover={{ bg: 'blue.700' }}
        >
            {children}
        </Button>
    )
}

export default NavButton