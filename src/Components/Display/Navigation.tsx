import React, { useRef } from "react";
import { Link } from "react-router-dom";
import {
  HomeIcon,
  SendIcon,
  AddICon,
  ExploreIcon,
  ProfileIcon,
  LikeIconBorder,
  LikeIconFilled,
} from "./SvgIcons";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  IconButton,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";

export default function Navigation() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div className="center__container--row bg-white">
      <div className="w-1/6 mr-2">
        <Link to="/">
          <HomeIcon />
        </Link>
      </div>
      <div className="w-1/6 mr-2">
        <Link to="message">
          <SendIcon />
        </Link>
      </div>
      <div className="w-1/6 mr-2">
        <IconButton
          aria-label="Add Photos"
          colorScheme="white"
          size="sm"
          variant="unstyled"
          onClick={onOpen}
          icon={<AddICon />}
        />
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <p>blabla....</p>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant="ghost">Secondary Action</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>
      <div className="w-1/6 mr-2">
        <Link to="explore">
          <ExploreIcon />
        </Link>
      </div>
      <div className="w-1/6 mr-2">
        <Popover>
          <PopoverTrigger>
            <IconButton
              aria-label="Add to favorite"
              colorScheme="white"
              size="sm"
              variant="unstyled"
              icon={<LikeIconBorder />}
            />
          </PopoverTrigger>
          <PopoverContent width={"31rem"} height={"22rem"}>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverHeader>Confirmation!</PopoverHeader>
            <PopoverBody>
              Are you sure you want to have that milkshake?
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </div>
      <div className="w-1/6 mr-2">
        <Popover>
          <PopoverTrigger>
            <IconButton
              aria-label="link to Profile"
              colorScheme="white"
              size="sm"
              variant="unstyled"
              icon={<ProfileIcon />}
            />
          </PopoverTrigger>
          <PopoverContent width={"14rem"} height={"12rem"}>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverBody>
              <section className="center__container--column">
                <div>
                  <Link to="profile">
                    <p>프로필</p>
                  </Link>
                </div>
                <div>
                  <p>저장됨</p>
                </div>
                <div>
                  <p>설정</p>
                </div>
              </section>
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}
