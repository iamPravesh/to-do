import { useDispatch } from "react-redux"
import {
    Flex
} from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"

import { setActive } from '../../redux/uiSlice'

const StatCart = (props) => {
    console.log('props is', props)
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const handleClick = () => {
        dispatch(setActive(props.title))
        navigate(`/${props.to}`)
    }
    return (
        <Flex
            width={"30%"}
            direction={'column'}
            justifyContent={'center'}
            alignItems={'center'}
            bg={'blue.400'}
            color={'white'}
            h={'10vh'}
            borderRadius={'md'}
            fontSize={'large'}
            cursor={'pointer'}
            _hover={{ bg: 'blue.700' }}
            onClick={handleClick}
        >
            Your {props.to.toUpperCase()} tasks (5/7)
        </Flex>
    )
}

export default StatCart