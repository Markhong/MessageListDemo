import React, { useState } from 'react';
import { CellMeasurer, CellMeasurerCache, List, ListRowProps } from 'react-virtualized';
import './MessageContent.css';
import { ImageMessage, ImageMessageProps } from './Components/Message/ImageMessage';
import { Measurer } from './Components/Message/Measurer';
import { SystemMessage, SystemMessageProps } from './Components/Message/SystemMessage';
import { TextMessage, TextMessageProps } from './Components/Message/TextMessage';

export interface MessageContentProps {
  messages?: (TextMessageProps & ImageMessageProps & SystemMessageProps)[];
}

export const MessageContent = ({ messages }: MessageContentProps) => {
  const messageList = messages!.map((messgage) => {
    switch (messgage.type) {
      case "system":
        return <SystemMessage
          key={messgage.id}
          text={messgage.text}
          isFromMySelf={messgage.isFromMySelf}
        />;
      case "text":
        return <TextMessage
          key={messgage.id}
          text={messgage.text}
          isFromMySelf={messgage.isFromMySelf}
        />;
      case "image":
        return <ImageMessage
          key={messgage.id}
          src={messgage.src}
          alt={messgage.alt}
          isFromMySelf={messgage.isFromMySelf}
        />;
      default: return null;
    }
  });

  const _cache = new CellMeasurerCache({
    fixedWidth: true,
    defaultHeight: 28,
    minHeight: 28,
  });
  const rowRender = ({ index, key, parent, style }: ListRowProps) => {
    return (<CellMeasurer
      cache={_cache}
      columnIndex={0}
      key={key}
      rowIndex={index}
      parent={parent}>
      {({ measure, registerChild }) => (
        <div style={style}>
          <Measurer element={messageList[index]!} measurerMethod={measure} />
        </div>
      )}
    </CellMeasurer>)
  }
  return (
    <div className="app">
      <div className="messageContainer">
        <List
          deferredMeasurementCache={_cache}
          height={400}
          rowHeight={_cache.rowHeight}
          rowCount={messageList.length}
          width={464}
          rowRenderer={rowRender} />
      </div>
    </div>
  );
}

MessageContent.displayName = "MessageContent";
