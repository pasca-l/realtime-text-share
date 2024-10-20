import { get, onValue, ref, remove, set } from "firebase/database";

import { DATABASE } from "@/utils/firebase/firebaseConfig";

export const addData = async (roomId: string) => {
  await set(ref(DATABASE, `${roomId}/`), "");
};

export const getData = async (roomId: string) => {
  const snapshot = await get(ref(DATABASE, `${roomId}/`));
  if (snapshot.exists()) {
    return snapshot.val();
  } else {
    throw new Error(`room ${roomId} doesn't seem to exist...`);
  }
};

export const updateData = async (roomId: string, content: string) => {
  await getData(roomId);
  await set(ref(DATABASE, `${roomId}/`), content);
};

export const unsubscribeData = (
  roomId: string,
  setContent: (content: string) => void
) => {
  return onValue(ref(DATABASE, `${roomId}/`), (snapshot) => {
    const data = snapshot.val();
    if (data !== null) {
      setContent(data);
    }
  });
};

export const deleteData = async (roomId: string) => {
  await remove(ref(DATABASE, `${roomId}/`));
};
