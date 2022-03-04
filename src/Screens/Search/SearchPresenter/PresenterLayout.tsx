import React from "react";

import { Outlet } from "react-router-dom";
import {
  Button,
  Stack,
  Select,
  Radio,
  RadioGroup,
  IconButton,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { Link, useMatch } from "react-router-dom";
import {
  HistoryIcon,
  CollectionIcon,
  PhotoIcon,
  TuneIcon,
} from "@Components/Display/SvgIcons";
import { searchKeyWordState } from "@RecoilStore/Atoms";
import { useRecoilValue } from "recoil";
import { usePathTypeCheck } from "@Hooks/usePathTypeCheck";

export default function PresenterLayout() {
  const searchKeyword = useRecoilValue(searchKeyWordState);
  const pathType = usePathTypeCheck();
  const matchPhotos = useMatch("/search");
  const matchCollections = useMatch("/search/collection");

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <section className="page__container flex-col ">
        <section className="flex flex-row justify-start items-center border-green-400 border-2 w-full h-32">
          <p className="font-semibold	 text-4xl text-slate-800 capitalize">
            {searchKeyword}
          </p>
        </section>
        <div className="flex flex-row justify-start items-center w-full h-14 border-2 relative">
          <Link to="">
            {matchPhotos === null ? (
              <div className="flex justify-start items-center pl-2 ">
                <PhotoIcon width={"32px"} height={"32px"} fill={"#9ca3af"} />
                <p className="ml-1 text-slate-400	font-semibold">Photos</p>
              </div>
            ) : (
              <div className="flex justify-start items-center pl-2  ">
                <PhotoIcon width={"32px"} height={"32px"} />
                <p className="ml-1 font-semibold	">Photos</p>
              </div>
            )}
          </Link>
          <Link to="collection">
            {matchCollections === null ? (
              <div className="flex justify-start items-center pl-2  ml-2">
                <CollectionIcon
                  width={"32px"}
                  height={"32px"}
                  fill={"#9ca3af"}
                />
                <p className="ml-1 text-slate-400	font-semibold">Collections</p>
              </div>
            ) : (
              <div className="flex justify-start items-center pl-2 ml-2 ">
                <CollectionIcon width={"32px"} height={"32px"} />
                <p className="ml-1 font-semibold">Collections</p>
              </div>
            )}
          </Link>
          {pathType !== "collection" && (
            <div className="absolute right-3">
              <IconButton
                aria-label={"Open Modal"}
                colorScheme={"white"}
                size={"sm"}
                variant={"unstyled"}
                onClick={onOpen}
                icon={<TuneIcon width={"30px"} height={"30px"} />}
              />
              <Modal
                isOpen={isOpen}
                onClose={onClose}
                scrollBehavior={"outside"}
              >
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Filters</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <div className="flex flex-col justify-center items-start  w-full mb-4">
                      <p>Orientation</p>
                      <Select placeholder="Select Orientation">
                        <option value="">Any Orientation</option>
                        <option value="">Landscape</option>
                        <option value="">Portrait</option>
                        <option value="">Squarish</option>
                      </Select>
                    </div>
                    <div className="flex flex-col justify-center items-start w-full mb-4">
                      <p>Color</p>
                      <Select placeholder="Select Color">
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                      </Select>
                    </div>
                    <div className="flex flex-col justify-center items-start w-full">
                      <p>Sort by</p>
                      <RadioGroup>
                        <Stack direction="column">
                          <Radio value="1">Relevant</Radio>
                          <Radio value="2">Latest</Radio>
                        </Stack>
                      </RadioGroup>
                    </div>
                  </ModalBody>
                  <ModalFooter>
                    <Button colorScheme="blue" mr={3} onClick={onClose}>
                      Close
                    </Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </div>
          )}
        </div>
        <section className="w-full h-screen border-2">
          <Outlet />
        </section>
      </section>
    </>
  );
}
