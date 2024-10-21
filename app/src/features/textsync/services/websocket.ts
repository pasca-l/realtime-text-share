import { Service } from "./service";

const addData = async (roomId: string) => {
  console.log("addData", roomId);
};

const getData = async (roomId: string) => {
  console.log("getData", roomId);
  if (roomId !== "") {
    return roomId;
  } else {
    throw new Error(`room ${roomId} doesn't seem to exist...`);
  }
};

const updateData = async (roomId: string, content: string) => {
  console.log("updateData", roomId, content);
};

const unsubscribeData = (
  roomId: string,
  setContent: (content: string) => void
) => {
  return () => {
    console.log("unsubscribeData", roomId, setContent("test"));
  };
};

const deleteData = async (roomId: string) => {
  console.log("deleteData", roomId);
};

export const websocketService: Service = {
  addData: addData,
  getData: getData,
  updateData: updateData,
  unsubscribeData: unsubscribeData,
  deleteData: deleteData,
};
