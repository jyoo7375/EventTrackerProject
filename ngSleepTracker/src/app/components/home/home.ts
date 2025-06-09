import { CommonModule } from '@angular/common';
import { SleepLog } from './../../models/sleep-log';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SleeplogService } from '../../services/sleeplog-service';

@Component({
  selector: 'app-home',
  imports: [CommonModule, FormsModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home implements OnInit{

  Title = 'Welcome to Sleep Tracker';
  SleepLogs: SleepLog[] = [];
  selected: SleepLog | null = null;
  newSleepLog: SleepLog = new SleepLog();
  editSleepLog: SleepLog | null = null;
  delete: any;

  constructor(
    private sleeplogService: SleeplogService
  ) {}

  ngOnInit(): void {
    this.loadSleepLog();

  }

  loadSleepLog(): void{
    this.sleeplogService.index().subscribe({
      next: (sleepLogList) => {
        this.SleepLogs = sleepLogList;
      },
      error: (badnews) => {'home.loadSleepLog: error getting sleep Logs'
      console.error(badnews);}
    });
  }

  addSleepLog(sleeplog: SleepLog){
    this.sleeplogService.create(sleeplog).subscribe({
      next: (sleeplogs) => {
        this.loadSleepLog();
        this.newSleepLog = new SleepLog();
      },
      error: (error) => {
        console.log(error);
        console.log('Sleep-log.ts Component: Error creating new sleep Log');
      }
    })
  }

  deleteSleepLog(logId: number): void{
    this.sleeplogService.delete(logId).subscribe({
      next: (success) => {
      this.loadSleepLog();
    },
    error: (error) => {
      console.log(error);
      console.log('sleep-log.ts Component: Error deleting sleep Log');
    }
    });
  }

  setEditSleepLog():void{
    this.editSleepLog = Object.assign({}, this.selected)
  }

  updateSleepLog(updatedSleepLog: SleepLog){
    this.sleeplogService.update(updatedSleepLog, updatedSleepLog.id).subscribe({
    next: (newSleepLog) => {
      this.loadSleepLog();
      this.editSleepLog = null;
      this.selected = null;
    },
    error: (error) => {
      console.log(error);
      console.log('sleep-log.ts Component: Error updating sleep Log');
    }
  });
  this.loadSleepLog();
  this.editSleepLog = null;
  }

  getAverageSleepHours(): number{
    let total = 0;
    let count = 0;

    for(let log of this.SleepLogs){
      const [bedH, bedM] = log.bedTime.split(':').map(Number);
      const [wakeH, wakeM] = log.wakeTime.split(':').map(Number)
      const bedMinutes = bedH * 60 + bedM;
      let wakeMinutes = wakeH * 60 + wakeM;

      if(wakeMinutes <= bedMinutes){
        wakeMinutes += 24 * 60;
      }
      total += wakeMinutes - bedMinutes;
      count++;
    }
    return count > 0 ? +(total / count / 60).toFixed(2) : 0;
  }


}
