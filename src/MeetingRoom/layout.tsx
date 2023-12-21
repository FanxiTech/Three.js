import EditMode from "./EditMode";
import useIsMobile from "@/hooks/useIsMobile";
import { UserView } from "./UserView";

export default function MeetingRoomLayout() {
  const { isMobile } = useIsMobile();
  return (
    <>
      <EditMode />
      <UserView />
    </>
  );
}
