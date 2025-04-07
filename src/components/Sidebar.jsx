import { Flex, Text } from "@chakra-ui/react";
import PlushieManager from "./PlushieManager";

function Sidebar() {
  return (
    <Flex
      w="full"
      h="full"
      maxW="15%"
      bg="grey"
      padding={4}
      flexDirection="column"
    >
      <Text fontSize="xl" fontWeight="bold" mb={4} alignSelf="center">
        Plushie Tracker
      </Text>
      <PlushieManager></PlushieManager>
    </Flex>
  );
}

export default Sidebar;
