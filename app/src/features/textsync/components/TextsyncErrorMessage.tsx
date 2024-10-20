import { useState } from "react";

export default function TextsyncErrorMessage({
  message,
  onDismiss,
}: {
  message: string;
  onDismiss: () => void;
}) {
  const [dismiss, setDismiss] = useState(false);

  if (dismiss) {
    onDismiss();
    return;
  }

  return (
    <div className="flex gap-2 fixed bottom-5 right-5 bg-red-100 text-red-800 border border-red-300 rounded-lg p-4 ml-5 shadow-lg">
      <div>{message}</div>
      <button
        onClick={() => {
          setDismiss(true);
        }}
      >
        <div className="hover:underline">[dismiss]</div>
      </button>
    </div>
  );
}
