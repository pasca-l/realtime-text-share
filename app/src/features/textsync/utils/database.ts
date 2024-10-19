import { DATABASE } from "@/utils/firebase/firebaseConfig";
import { get, onValue, ref, remove, set } from "firebase/database";

export const addData = async (roomId: string) => {
  await set(ref(DATABASE, `${roomId}/`), "");
};

export const getData = async (roomId: string) => {
  const snapshot = await get(ref(DATABASE, `${roomId}`));
  if (snapshot.exists()) {
    return snapshot.val();
  } else {
    return "";
  }
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

export const updateData = async (roomId: string, content: string) => {
  await set(ref(DATABASE, `${roomId}/`), content);
};

export const deleteData = async (roomId: string) => {
  await remove(ref(DATABASE, `${roomId}/`));
};
