import { addMessage } from "@/navbar/Bar/MessageLayout/dexie";
import { setNewPreviewMessage } from "@/redux/messageSlice";
import { getPictureAndName } from "@/service";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function MessageProvider({ children }) {
  const xmtp = useSelector((state) => state.login.xmtp);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!xmtp) return;
    let messageStream;
    const streamAllMessages = async () => {
      messageStream = await xmtp.conversations.streamAllMessages();
      for await (const message of messageStream) {
        const key = message.conversation.peerAddress.toLowerCase();
        if (key !== "0x22192de79ebe24a54fd25174e7cc5a55cf8c87b3") {
          const result = await getPictureAndName(key);

          dispatch(
            setNewPreviewMessage({
              key,
              message: {
                ...message,
                name: result.name,
                profilePhoto: result.profilePhoto,
              },
            })
          );
        }
      }
    };

    const closeMessageStream = async () => {
      if (messageStream) {
        await messageStream.return(undefined);
      }
    };
    streamAllMessages();
    return () => {
      closeMessageStream();
    };
  }, [xmtp]);
  return <>{children}</>;
}
