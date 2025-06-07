import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { SleepLog } from '../models/sleep-log';

@Injectable({
  providedIn: 'root'
})
export class SleeplogService {

  private url = environment.baseUrl + 'api/sleeplogs';

  constructor(
    private http: HttpClient,
  ) { }

  index(): Observable<SleepLog[]>{
    return this.http.get<SleepLog[]>(this.url).pipe(
      catchError((err: any) =>{
        console.log(err);
        return throwError(
          () => new Error('SleepLogService.index(): error retrieving sleepLogs:' + err)
        );
      })
    );
  }

  create(sleeplog: SleepLog):Observable<SleepLog>{
    console.log('submitting sleep log:' , sleeplog);
    return this.http.post<SleepLog>(this.url, sleeplog).pipe(
      catchError((err: any) =>{
        console.log(err);
        return throwError(
          () => new Error('SleepLogService.create(): error creating new sleepLogs: ' + err)
        );
      })
    );
  }

  delete(SleeplogId: number):Observable<void>{
    return this.http.delete<void>(this.url + '/' + SleeplogId).pipe(
      catchError((err: any) =>{
        console.log(err);
        return throwError(
          () => new Error('SleeplogService.delete(): error deleting sleepLog: ' + err)
        );
      })
    );
  }


  update(updatedSleepLog: SleepLog, sleepLogId: number){
    return this.http.put<SleepLog>(this.url + '/' + sleepLogId, updatedSleepLog).pipe(
      catchError((err: any) =>{
        console.log(err);
        return throwError(
          () => new Error('SleepLogService.update(): error updating sleepLog: ' + err)
        );
      })
    );
  }
}
