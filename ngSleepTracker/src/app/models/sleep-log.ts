export class SleepLog {
  id: number;
  // user: string;
  date: string;
  bedTime: string;
  wakeTime: string;
  notes: string;
  tiredness: number;

  constructor(
  id: number = 0,
  // user: string = '',
  date: string = '',
  bedTime: string = '',
  wakeTime: string = '',
  notes: string = '',
  tiredness: number = 0,
  ){
    this.id = id;
    // this.user = user;
    this.date = date;
    this.bedTime = bedTime;
    this.wakeTime = wakeTime;
    this.notes = notes;
    this.tiredness = tiredness;

  }

}
