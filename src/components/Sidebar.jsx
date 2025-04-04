import { Flex, Text, Button, Stack } from "@chakra-ui/react";

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
      <Text fontSize="xl" fontWeight="bold" mb={4}>
        Plushie Tracker
      </Text>
      <Stack>
        <Button color="white">Add</Button>
        <Button color="white">Remove</Button>
        <Button color="white">Edit</Button>
        <Button color="white">View All</Button>
        <Button color="white" bg="orange.400" w="75%" alignSelf="center">
          Add Category
        </Button>
      </Stack>
    </Flex>
  );
}

export default Sidebar;
