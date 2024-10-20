"use client";

import { createContext, useContext, useState } from "react";

import { Room, RoomStatus } from "../types/room";
import { addData, deleteData } from "../utils/database";

interface TextsyncContextType {
  room: Room;
  roomStatus: RoomStatus;
  enterRoom: (room: Room, status: RoomStatus) => void;
  exitRoom: (room: Room) => void;
}

const TextsyncContext = createContext<TextsyncContextType>(
  {} as TextsyncContextType
);

export const TextsyncProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [room, setRoom] = useState({} as Room);
  const [roomStatus, setRoomStatus] = useState<RoomStatus>("idle");

  const enterRoom = (room: Room, status: RoomStatus) => {
    if (status === "created") {
      addData(room.id);
    }
    setRoom(room);
    setRoomStatus(status);
  };
  const exitRoom = (room: Room) => {
    if (roomStatus === "created") {
      deleteData(room.id);
    }
    setRoom({} as Room);
    setRoomStatus("idle");
  };

  return (
    <TextsyncContext.Provider value={{ room, roomStatus, enterRoom, exitRoom }}>
      {children}
    </TextsyncContext.Provider>
  );
};

export const useTextsyncContext = () => {
  const context = useContext(TextsyncContext);
  if (!context) {
    throw new Error(
      "useTextsyncContext must be used within a TextsyncProvider"
    );
  }
  return context;
};
