import React, { useRef } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { ArrowIcon } from "@Components/Display/SvgIcons";



const DrawerNavigation:React.FC = () =>  {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef() as any;


  return (
    <>
      <Button
        leftIcon={<ArrowIcon />}
        ref={btnRef}
        colorScheme={"whiteAlpha"}
        onClick={onOpen}
        width={"3rem"}
        height={"3rem"}
      ></Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Featured Topics</DrawerHeader>
          <DrawerBody>
            
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}


export default DrawerNavigation