import { Timestamp } from "firebase/firestore";

export interface Todo {
  uid: String;
  user_uid: Number;
  title: String;
  description: String;
  timestamp: Timestamp;
}

export interface User {
  authProvider: String;
  email: String;
  uid: String;
}
