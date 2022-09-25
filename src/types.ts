export interface Message {
  author: string;
  text: string;
}

export interface MessageWithId extends Message {
  id: string | number;
}

export type Messages = Record<string, Message[]>;

export type MessagesWithIds = Record<string, MessageWithId[]>;

export interface Chat {
  id: string | number;
  name: string;
}

export type Chats = Chat[];
