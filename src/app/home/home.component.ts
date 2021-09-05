import { Component, OnInit } from '@angular/core';
import { TaskService } from '../_service/task.service';
import { Task } from '../_model/Task';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  tasks_todo!: Observable<Task[]>;
  tasks_done!: Observable<Task[]>;
  

  constructor(private taskService: TaskService) { 
  }

  delete_task(id: string) {
    console.log(id);
    return this.taskService.delete(id).pipe(first())
    .subscribe( {
        next: () => {
        },
        error: error => {
            console.log(error);
        }
    });
  }

  ngOnInit(): void {
    this.tasks_todo = this.taskService.getAll(false);
    this.tasks_done = this.taskService.getAll(true);
  }

}
