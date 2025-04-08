import {
  Text,
  Button,
  Dialog,
  Field,
  Input,
  CloseButton,
  Stack,
  FileUpload,
  Float,
  useFileUploadContext,
  Select,
  createListCollection,
} from "@chakra-ui/react";
import { LuFileImage, LuX } from "react-icons/lu";

const plushieCategories = createListCollection({
  items: [
    { label: "Spring", value: "spring" },
    { label: "Summer", value: "Summer" },
    { label: "Fall", value: "Fall" },
    { label: "Winter", value: "Winter" },
  ],
});

const FileUploadList = () => {
  const fileUpload = useFileUploadContext();
  const files = fileUpload.acceptedFiles;
  if (files.length === 0) return null;
  return (
    <FileUpload.ItemGroup pt="4">
      {files.map((file) => (
        <FileUpload.Item
          w="auto"
          boxSize="20"
          p="1"
          file={file}
          key={file.name}
        >
          <FileUpload.ItemPreviewImage />
          <Float placement="top-end">
            <FileUpload.ItemDeleteTrigger boxSize="4" layerStyle="fill.solid">
              <LuX />
            </FileUpload.ItemDeleteTrigger>
          </Float>
        </FileUpload.Item>
      ))}
    </FileUpload.ItemGroup>
  );
};

function AddDialog() {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Text>Add</Text>
      </Dialog.Trigger>
      <Dialog.Backdrop />
      <Dialog.Positioner>
        <Dialog.Content>
          <Dialog.CloseTrigger />
          <Dialog.Header pt="4" bg="grey" borderRadius={4}>
            <Dialog.Title>Add Plushie</Dialog.Title>
          </Dialog.Header>
          <Dialog.Body pb="4"></Dialog.Body>
          <Stack pl="6" pr="6" gap="4">
            <Field.Root>
              <Field.Label>Name</Field.Label>
              <Input w="64"></Input>
            </Field.Root>
            <FileUpload.Root accept="image/png" gap="1.5">
              <FileUpload.HiddenInput />
              <FileUpload.Label>Photo</FileUpload.Label>
              <FileUpload.Trigger asChild>
                <Button w="64" variant="outline" size="sm">
                  <LuFileImage /> Upload Images
                </Button>
              </FileUpload.Trigger>
              <FileUploadList />
            </FileUpload.Root>
            <Select.Root collection={plushieCategories} size="sm" w="64">
              <Select.HiddenSelect />
              <Select.Label>Category</Select.Label>
              <Select.Control>
                <Select.Trigger>
                  <Select.ValueText placeholder="Select category" />
                </Select.Trigger>
                <Select.IndicatorGroup>
                  <Select.Indicator />
                </Select.IndicatorGroup>
              </Select.Control>
              <Select.Positioner>
                <Select.Content>
                  {plushieCategories.items.map((plushieCategories) => (
                    <Select.Item
                      item={plushieCategories}
                      key={plushieCategories.value}
                    >
                      {plushieCategories.label}
                      <Select.ItemIndicator />
                    </Select.Item>
                  ))}
                </Select.Content>
              </Select.Positioner>
            </Select.Root>
            <Field.Root>
              <Field.Label>Date</Field.Label>
              <Input w="64" />
            </Field.Root>
          </Stack>
          <Dialog.Footer mt="4">
            <Dialog.ActionTrigger asChild>
              <Button variant="outline">Cancel</Button>
            </Dialog.ActionTrigger>
            <Button variant="outline">Save</Button>
          </Dialog.Footer>
          <Dialog.CloseTrigger asChild>
            <CloseButton size="sm"></CloseButton>
          </Dialog.CloseTrigger>
        </Dialog.Content>
      </Dialog.Positioner>
    </Dialog.Root>
  );
}

export default AddDialog;
