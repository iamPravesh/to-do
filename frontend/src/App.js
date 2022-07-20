import { Flex } from '@chakra-ui/react';

import Navbar from './components/navbar/Navbar';
import './styles/App.css';

function App({ children }) {
  return (
    <div className="App">
      <Navbar />
      <Flex
        bg={'gray.100'}
        width="74%"
        height="100%"
        borderRadius="md"
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="center"
        padding="2rem"
      >
        <p>ITs a content</p>
      </Flex>
    </div>
  );
}

export default App;
