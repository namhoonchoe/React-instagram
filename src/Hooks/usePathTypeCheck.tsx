import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export const usePathTypeCheck = () => {
  let path = useLocation().pathname;
  const [pathType, setPathType] = useState<string>("");

  useEffect(() => {
    const checkDetailType = () => {
      if (path.includes("collection")) {
        setPathType("collection");
      } else {
        setPathType("");
      }
    };
    checkDetailType();
  }, [path]);

  return pathType;
};
