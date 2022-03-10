import React, { useRef } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  IconButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { useQuery } from "react-query";
import { getTopics } from "@Api";
import { ArrowIcon } from "@Components/Display/SvgIcons";
import { useSetRecoilState } from "recoil";
import { topicInfoState } from "@RecoilStore/Atoms";

const DrawerNavigation: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef() as any;
  const {
    data: topics,
    isError,
    isLoading,
  } = useQuery<Array<ITopic> | undefined>("topics", getTopics);

  interface ITopicCardProps {
    topicTitle: string;
    topicDescription:string
    imageUrl?: string;
    topicId: string;
    changeTopicInfo: any;
  }

  const changeTopicInfo = useSetRecoilState(topicInfoState)

  const TopicCard: React.FC<ITopicCardProps> = ({
    topicTitle,
    imageUrl,
    topicId,
    topicDescription,
    changeTopicInfo,
  }) => {
    return (
      <div
        className={`w-30 h-20 rounded-md  bg-center bg-cover `}
        style={{ backgroundImage: `url(${imageUrl})` }}
        onClick={() => changeTopicInfo({
          topicDescription,
          topicTitle,
          topicId
        })}
      >
        <div className=" center__container--row w-full h-full rounded-md backdrop-brightness-75 hover:backdrop-brightness-100 ">
          <p className="text-white	text-center text-sm font-semibold p-1">
            {topicTitle}
          </p>
        </div>
      </div>
    );
  };

  return (
    <>
      <IconButton
        aria-label="Open Drawer"
        colorScheme="white"
        size="sm"
        variant="unstyled"
        onClick={onOpen}
        icon={<ArrowIcon />}
      />

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
            <section className="w-full grid grid-cols-2 gap-x-4 gap-y-4">
              {topics !== null && (
                <>
                  {topics?.map((topic: ITopic) => {
                    return (
                      <TopicCard
                        topicDescription={topic.description}
                        topicTitle={topic.title}
                        topicId={topic.id}
                        changeTopicInfo={changeTopicInfo}
                        imageUrl={topic.cover_photo.urls.regular}
                      />
                    );
                  })}
                </>
              )}
            </section>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default DrawerNavigation;
