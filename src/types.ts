import { Timestamp } from "firebase/firestore";

export interface Todo {
  title: String;
  timestamp: Timestamp;
  user_uid: Number;
  description?: String;
  uid?: String;
}

export interface User {
  authProvider: String;
  email: String;
  uid: String;
}
