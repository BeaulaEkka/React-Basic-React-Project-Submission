import { Heading, Center } from "@chakra-ui/react";

export const Header = (props) => {
  return (
    <>
      <Center bg="blue.200">
        <Heading p="1rem" color="blue.500">
          Winc Recipe App
        </Heading>
      </Center>
      {props.children}
    </>
  );
};
