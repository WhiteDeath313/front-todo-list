import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Task } from '../_model/Task';

@Injectable({
  providedIn: 'root'
})
export class TaskWebsocketService {

  constructor(private socket: Socket) {
  }
  sendTask(task: Task){
    this.socket.emit('task', Task);
  }
  receiveTask(){
    return this.socket.fromEvent('task');
  }
  getUsers(){
    return this.socket.fromEvent('users');
  }
}
