import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  write (logmsg: string) {
    console.log(logmsg);
  }
  
  constructor() { }
}
