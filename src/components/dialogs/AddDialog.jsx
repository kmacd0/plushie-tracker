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
} from "@chakra-ui/react";
import { LuFileImage, LuX } from "react-icons/lu";

const FileUploadList = () => {
  const fileUpload = useFileUploadContext();
  const files = fileUpload.acceptedFiles;
  if (files.length === 0) return null;
  return (
    <FileUpload.ItemGroup pl="6">
      {files.map((file) => (
        <FileUpload.Item
          w="auto"
          boxSize="20"
          p="2"
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
          <Stack gap="4">
            <Field.Root pl="6" pr="6">
              <Field.Label>Name</Field.Label>
              <Input></Input>
            </Field.Root>
            <Field.Root>
              <Field.Label pl="6">Photo</Field.Label>
            </Field.Root>
            <FileUpload.Root accept="image/png">
              <FileUpload.HiddenInput />
              <FileUpload.Trigger asChild>
                <Button variant="outline" size="sm" ml="6">
                  <LuFileImage /> Upload Images
                </Button>
              </FileUpload.Trigger>
              <FileUploadList />
            </FileUpload.Root>
            <Field.Root>
              <Field.Label pl="6">Category</Field.Label>
            </Field.Root>
            <Field.Root>
              <Field.Label pl="6">Date</Field.Label>
            </Field.Root>
          </Stack>
          <Dialog.Footer>
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
