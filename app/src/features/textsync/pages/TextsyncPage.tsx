import TextsyncRoomCleanup from "../components/TextsyncRoomCleanup";
import TextsyncRoomConfig from "../components/TextsyncRoomConfig";
import TextsyncRoomContent from "../components/TextsyncRoomContent";

export default function TextsyncPage() {
  return (
    <>
      <div className="text-center">
        <div className="text-3xl mt-4">Realtime Text Share</div>
        <div className="">Shares textarea contents in realtime</div>
        <hr className="m-4" />
      </div>
      <TextsyncRoomConfig />
      <hr className="m-4" />
      <TextsyncRoomContent />
      <TextsyncRoomCleanup />
    </>
  );
}
