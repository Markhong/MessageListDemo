export interface MessageProps {
  id?: string,
  type?: "text" | "image" | "system";
  sender?: string;
  time?: string;
  isFromMySelf?: boolean;
};
