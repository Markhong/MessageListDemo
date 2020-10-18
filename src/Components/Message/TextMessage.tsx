import React from "react";
import { MessageProps } from "../common";

export interface TextMessageProps extends MessageProps {
  text?: string;
}
export const TextMessage = ({ text, isFromMySelf }: TextMessageProps) => {
  return (
    <div className={`messageContent ${isFromMySelf ? "myMessage" : ""}`}>
      {text}
    </div>
  );
};

TextMessage.displayName = "TextMessage";