"use client";

import { createContext, useContext, useState } from "react";

import { Room } from "../types/room";

interface TextsyncContextType {
  room: Room;
  enterRoom: (room: Room) => void;
  exitRoom: () => void;
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

  const enterRoom = (room: Room) => setRoom(room);
  const exitRoom = () => setRoom({} as Room);

  return (
    <TextsyncContext.Provider value={{ room, enterRoom, exitRoom }}>
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
