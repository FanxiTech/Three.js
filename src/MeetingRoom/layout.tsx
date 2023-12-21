import EditMode from "./EditMode";
import useIsMobile from "@/hooks/useIsMobile";

export default function MeetingRoomLayout() {
  const { isMobile } = useIsMobile();
  return (
    <>
      <EditMode />
    </>
  );
}
