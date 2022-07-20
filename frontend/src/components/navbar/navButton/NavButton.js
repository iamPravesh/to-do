import { useDispatch, useSelector } from 'react-redux'
import { Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

import { setActive } from '../../../redux/uiSlice';

const NavButton = (props) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isactive = useSelector(state => state.ui.isActive);

    const handleClick = () => {
        dispatch(setActive(props.title));
        navigate(props.to);
    }

    return (
        <Button
            size="lg"
            width="100%"
            bg={isactive === props.title ? 'blue.900' : 'blue.500'}
            color={'white'}
            my={'1%'}
            onClick={handleClick}
            _hover={{ bg: 'blue.700' }}
        >
            {props.title}
        </Button>
    )
}

export default NavButton