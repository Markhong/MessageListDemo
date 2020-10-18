import React from "react";
import { MessageProps } from "../common";

export interface ImageMessageProps extends MessageProps {
  src?: string;
  alt?: string;
}
export const ImageMessage = ({ src, alt, isFromMySelf }: ImageMessageProps) => {
  return (
    <div className={`messageContent imageMessage ${isFromMySelf ? "myMessage" : ""}`}>
      <img src={src} alt={alt} />
    </div>
  );
};

ImageMessage.displayName = "ImageMessage";