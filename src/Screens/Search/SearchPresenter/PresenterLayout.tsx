import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import {
  Button,
  Switch,
  IconButton,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Select,
} from "@chakra-ui/react";
import { Link, useMatch } from "react-router-dom";
import {
  ExpendMoreIcon,
  CollectionIcon,
  PhotoIcon,
  TuneIcon,
} from "@Components/Display/SvgIcons";
import { searchQueryState } from "@RecoilStore/Atoms";
import { useRecoilState } from "recoil";
import { usePathTypeCheck } from "@Hooks/usePathTypeCheck";

export default function PresenterLayout() {
  const [searchQuery, setSearchQuery] = useRecoilState(searchQueryState);
  const pathType = usePathTypeCheck();
  const matchPhotos = useMatch("/search");
  const matchCollections = useMatch("/search/collection");
  const [orientation, setOrientation] = useState<string | undefined>(undefined);
  const [color, setColor] = useState<string | undefined>(undefined);
  const [relevant, setRelevant] = useState<boolean>(true);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const checkOrder = () => {
    if(relevant) {
      return 'relevant'
    } else {
      return 'latest'
    }
  }


  interface IColorOption {
    colorName: string;
    colorCode: string;
  }

  const ColorOption: React.FC<IColorOption> = ({ colorName, colorCode }) => {
    return (
      <div className="center__container--row justify-start w-full h-8  ">
        <div
          className={`rounded-full ${colorCode} w-5 h-5 mr-2 border border-gray-300	`}
        />
        <p className="font-semibold">{colorName}</p>
      </div>
    );
  };

  return (
    <>
      <section className="page__container flex-col ">
        <section className="flex flex-row justify-start items-center border-green-400 border-2 w-full h-32">
          <p className="font-semibold	 text-4xl text-slate-800 capitalize">
            {searchQuery.query}
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
                <p className="ml-1 font-semibold">Photos</p>
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
                      <p className="font-semibold">Orientation</p>
                      <Select
                        placeholder="Any Orientation"
                        onChange={(event) => setOrientation(event.target.value)}
                      >
                        <option value="landscape">Landscape</option>
                        <option value="portrait">Portrait</option>
                        <option value="squarish">Squarish</option>
                      </Select>
                    </div>
                    <div className="flex flex-col justify-center items-start w-full mb-4">
                      <p className="font-semibold">Color</p>
                      <Menu preventOverflow={false} size={"md"}>
                        <MenuButton
                          as={Button}
                          rightIcon={<ExpendMoreIcon />}
                          bgColor={"whiteAlpha.100"}
                        >
                          Any Color
                        </MenuButton>
                        <MenuList>
                          <MenuOptionGroup
                            onChange={(value) => setColor(value as string)}
                          >
                            <MenuItemOption value="black_and_white">
                              Black & White
                            </MenuItemOption>
                            <MenuItemOption value="black">
                              <ColorOption
                                colorName={"Black"}
                                colorCode={"bg-black"}
                              />
                            </MenuItemOption>
                            <MenuItemOption value="white">
                              <ColorOption
                                colorName={"White"}
                                colorCode={"bg-white"}
                              />
                            </MenuItemOption>

                            <MenuItemOption value="yellow">
                              <ColorOption
                                colorName={"Yellow"}
                                colorCode={"bg-yellow-300	"}
                              />
                            </MenuItemOption>
                            <MenuItemOption value="orange">
                              <ColorOption
                                colorName={"orange"}
                                colorCode={"bg-orange-400"}
                              />
                            </MenuItemOption>
                            <MenuItemOption value="red">
                              <ColorOption
                                colorName={"Red"}
                                colorCode={"bg-red-500"}
                              />
                            </MenuItemOption>
                            <MenuItemOption value="purple">
                              <ColorOption
                                colorName={"Purple"}
                                colorCode={"bg-violet-700	"}
                              />
                            </MenuItemOption>
                            <MenuItemOption value="magenta">
                              <ColorOption
                                colorName={"White"}
                                colorCode={"bg-pink-700	"}
                              />
                            </MenuItemOption>
                            <MenuItemOption value="green">
                              <ColorOption
                                colorName={"Green"}
                                colorCode={"bg-green-600	"}
                              />
                            </MenuItemOption>
                            <MenuItemOption value="teal">
                              <ColorOption
                                colorName={"Teal"}
                                colorCode={"bg-teal-500	"}
                              />
                            </MenuItemOption>
                            <MenuItemOption value="blue">
                              <ColorOption
                                colorName={"Blue"}
                                colorCode={"bg-sky-600"}
                              />
                            </MenuItemOption>
                          </MenuOptionGroup>
                        </MenuList>
                      </Menu>
                    </div>
                    <div className="flex flex-row justify-start items-center w-full">
                      {relevant ? (
                        <p className="mr-2">Order by Relevant</p>
                      ) : (
                        <p className="mr-2">Order by Latest</p>
                      )}

                      <Switch
                        size="md"
                        onChange={() => setRelevant(!relevant)}
                      />
                    </div>
                  </ModalBody>
                  <ModalFooter>
                    <Button
                      colorScheme="blue"
                      mr={3}
                      onClick={() =>
                        setSearchQuery({
                          ...searchQuery,
                          orientation: orientation,
                          color: color,
                          orderBy:checkOrder()
                        })
                      }
                    >
                      Set Filter
                    </Button>
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
