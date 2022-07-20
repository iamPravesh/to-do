import { Flex } from '@chakra-ui/react'
import NavButton from './navButton/NavButton';

const Navbar = () => {
    return (
        <Flex
            height="100%"
            width="25%"
            bg="gray.100"
            borderRadius="md"
            flexDirection="column"
            justifyContent="flex-end"
            alignItems="center"
            padding="2rem"
        >
            <NavButton to={'/'} title={'Home'} />
            <NavButton to={'/daily'} title={'Daily to-do'} />
            <NavButton to={'/weekly'} title={'Weekly to-do'} />
        </Flex>
    )
}

export default Navbar