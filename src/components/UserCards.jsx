import { Card, Flex } from "@chakra-ui/react";

function UserCards() {
  return (
    <Flex w="full" h="full" flexDirection="row">
      <Card.Root bg="grey" h="30%" w="20%" m="4">
        <Card.Header>Header</Card.Header>
        <Card.Body>Body</Card.Body>
        <Card.Footer>Footer</Card.Footer>
      </Card.Root>
    </Flex>
  );
}

export default UserCards;
