import React from "react";
import { MessageProps } from "../common";

export interface SystemMessageProps extends MessageProps {
  text?: string;
}
export const SystemMessage = ({ text }: SystemMessageProps) => {
  return (
    <div className="systemMessage">
      {text}
    </div>
  );
};

SystemMessage.displayName = "SystemMessage";