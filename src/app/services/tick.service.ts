import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, interval, map } from 'rxjs';
import { Time } from '../time';

@Injectable({
  providedIn: 'root',
})
export class TickService {
  private timeSubject: Subject<Time> = new Subject<Time>();
  time$: Observable<Time> = this.timeSubject.asObservable();

  constructor() {
    interval(1000).subscribe(() => {
      let dateTime = new Date();
      let time = new Time();
      let hours = dateTime.getHours();
      let minutes = dateTime.getMinutes();
      let seconds = dateTime.getSeconds();

      time.d1 = hours > 0 ? Math.trunc(hours / 10) : 0;
      time.u1 = hours > 0 ? Math.trunc(hours % 10) : 0;
      time.d2 = minutes > 0 ? Math.trunc(minutes / 10) : 0;
      time.u2 = minutes > 0 ? Math.trunc(minutes % 10) : 0;
      time.d3 = seconds > 0 ? Math.trunc(seconds / 10) : 0;
      time.u3 = seconds > 0 ? Math.trunc(seconds % 10) : 0;
      
      this.timeSubject.next(time);
    });
  }
}
