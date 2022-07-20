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
            <NavButton>
                Daily to-do
            </NavButton>
            <NavButton>
                Weekly to-do
            </NavButton>
        </Flex>
    )
}

export default Navbar