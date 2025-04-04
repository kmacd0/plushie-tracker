import Sidebar from "./components/Sidebar";
import UserCards from "./components/UserCards";
import { HStack } from "@chakra-ui/react";

function App() {
  return (
    <HStack w="full" h="100vh">
      <Sidebar></Sidebar>
      <UserCards></UserCards>
    </HStack>
  );
}

export default App;
