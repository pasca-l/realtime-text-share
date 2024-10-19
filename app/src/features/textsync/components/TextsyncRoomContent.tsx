"use client";

import { ChangeEvent, useEffect, useState } from "react";
import { useTextsyncContext } from "../contexts/TextsyncContext";
import { getData, unsubscribeData, updateData } from "../utils/database";

export default function TextsyncRoomContent() {
  const { room } = useTextsyncContext();

  return (
    <div className="my-4">
      {room.id && (
        <>
          <div className="text-center my-4">current room: {room.id}</div>
          <TextsyncRoomTextArea roomId={room.id} />
        </>
      )}
    </div>
  );
}

function TextsyncRoomTextArea({ roomId }: { roomId: string }) {
  const [content, setContent] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const initVal = await getData(roomId);
      setContent(initVal);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const unsubscribe = unsubscribeData(roomId, setContent);
    return () => unsubscribe();
  }, []);

  const maxLength = 500;
  const placeholder = "Type here ...";

  const handleOnChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
    updateData(roomId, e.target.value);
  };

  return (
    <div className="m-4">
      <textarea
        value={content}
        onChange={handleOnChange}
        placeholder={placeholder}
        rows={4}
        maxLength={maxLength}
        className="w-full px-3 py-2 text-gray-700 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-300 transition-colors duration-300 resize-none"
      ></textarea>
      <div className="mt-1 text-right text-sm text-gray-500">
        {content.length}/{maxLength}
      </div>
    </div>
  );
}
