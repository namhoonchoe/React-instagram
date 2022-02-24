import React from "react";
import { useQuery } from "react-query";
import { getTopics } from "@Api";
import ExplorePresenter from "./ExplorePresenter";

export default function ExploreContainer() {
 //const topics = useQuery<Array<ITopic> | undefined>("topics", getTopics);

  return <ExplorePresenter />;
}
