import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getCollection, getCollectionPhotos } from "@Api";
import CollectionPresenter from "./CollectionPresenter";

export default function CollectionContainer() {
  let { id } = useParams() as any;
  const {
    data: collectionPhotos,
    isLoading: photosLoading,
    isError: photosError,
  } = useQuery<Array<ICoverPhoto>|undefined>("collectionPhotos", () => getCollectionPhotos(id));
  const {
    data: collection,
    isLoading: collectionLoading,
    isError: collectionError,
  } = useQuery<ICollection|undefined>("collection", () => getCollection(id));

  return <CollectionPresenter collectionInfo={collection} collectionPhotos={collectionPhotos} />;
}
