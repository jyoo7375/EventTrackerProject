import { SleepLog } from "./sleep-log";

export class User {
  id: number;
  username: string;
  password: string;
  enabled: boolean;
  role: string;
  sleepLogs: SleepLog[];

  constructor(
    id: number = 0,
    username: string = '',
    password: string = '',
    enabled: boolean = false,
    role: string = '',
    sleepLogs: SleepLog[] = []
  ){
    this.id = id;
    this.username = username;
    this.password = password;
    this.enabled = enabled;
    this.role = role;
    this.sleepLogs = sleepLogs;

  }
}
