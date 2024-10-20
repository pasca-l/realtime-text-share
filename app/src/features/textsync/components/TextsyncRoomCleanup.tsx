"use client";

import { useEffect } from "react";

import { useTextsyncContext } from "../contexts/TextsyncContext";
import { deleteData } from "../utils/database";

export default function TextsyncRoomCleanup() {
  const { room } = useTextsyncContext();

  const handleCleanup = () => {
    deleteData(room.id);
  };

  useEffect(() => {
    window.addEventListener("beforeunload", handleCleanup);
    return () => {
      window.removeEventListener("beforeunload", handleCleanup);
    };
  });

  return <></>;
}
