import { Stack, Button, Text } from "@chakra-ui/react";
import AddDialog from "./dialogs/AddDialog";

function PlushieManager() {
  return (
    <Stack>
      <AddDialog></AddDialog>
      <Button color="white" mt="1">
        Remove
      </Button>
      <Button color="white" mt="1">
        Edit
      </Button>
      <Button color="white" mt="1">
        View All
      </Button>
      <Button color="white" mt="1" bg="orange.400" w="75%" alignSelf="center">
        Add Category
      </Button>
    </Stack>
  );
}

export default PlushieManager;
