import Challenge from "@/components/challenge";
import { Center, Heading, Theme, VStack } from "@chakra-ui/react";
import { ToastContainer } from "react-toastify";

export default function Home() {
  return (
    <Theme appearance="dark">
      <Center h="100vh">
        <VStack>
          <Heading mb={1} as="h1" size="4xl">
            Domain Shopping Cart
          </Heading>
          <Challenge />
        </VStack>
        <ToastContainer position="bottom-right" />
      </Center>
    </Theme>
  );
}
