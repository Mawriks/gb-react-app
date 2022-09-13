export interface Message {
  author: string;
  text: string;
}

export type Messages = Record<string, Message[]>;

export interface Chat {
  id: string | number;
  name: string;
}

export type Chats = Chat[];
