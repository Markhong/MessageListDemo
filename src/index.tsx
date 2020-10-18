import React from 'react';
import ReactDOM from 'react-dom';
import { ImageMessageProps } from './Components/Message/ImageMessage';
import { SystemMessageProps } from './Components/Message/SystemMessage';
import { TextMessageProps } from './Components/Message/TextMessage';
import './index.css';
import { MessageContent } from './MessageContent';

const messages = [] as (TextMessageProps & ImageMessageProps & SystemMessageProps)[];
const textMessageSample = {
  type: "text",
  text: "Hello",
} as TextMessageProps;
const imageMessageSample = {
  type: "image",
  src: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1602998731683&di=08491bc264639a19b0f02f6db1dd2e1d&imgtype=0&src=http%3A%2F%2Fphotocdn.sohu.com%2F20150803%2Fmp25547608_1438592770226_5.jpeg",
  alt: "react",
} as ImageMessageProps;
const systemMessageSample = {
  type: "system",
  text: "Agent Mark has sent a image."
} as SystemMessageProps;
const messageTypes = [textMessageSample, imageMessageSample, systemMessageSample];
for (let i = 0; i <= 100; i++) {
  const randomMessageIndex = Math.floor(Math.random() * 3);
  messages.push({
    ...messageTypes[randomMessageIndex],
    isFromMySelf: Math.random() > 0.5 ? true : false,
  });
}

ReactDOM.render(
  <React.StrictMode>
    <MessageContent messages={messages} />
  </React.StrictMode>,
  document.getElementById('root')
);

