"use client";

import { useEffect } from "react";

import { useTextsyncContext } from "../contexts/TextsyncContext";
import { service } from "../services/service";

export default function TextsyncRoomCleanup() {
  const { room } = useTextsyncContext();

  const handleCleanup = () => {
    service.deleteData(room.id);
  };

  useEffect(() => {
    window.addEventListener("beforeunload", handleCleanup);
    return () => {
      window.removeEventListener("beforeunload", handleCleanup);
    };
  });

  return <></>;
}
