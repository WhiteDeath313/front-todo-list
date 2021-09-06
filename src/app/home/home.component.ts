import { Component, OnInit } from '@angular/core';
import { TaskService } from '../_service/task.service';
import { Task } from '../_model/Task';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';
import { TestBed } from '@angular/core/testing';

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

  generate_debug_task() {
      const task = {
          _id : "",
          _title : "Test",
          _description : "Description",
          _isDone: false,
      }
      return this.taskService.create(task).pipe(first()).subscribe( {
          next: () => {
              console.log("TEST DEBUG");
          },
          error: error => {
              console.log(error);
          }
      });
  }

  update_task(id: string, title: string, description: string, isDone: boolean) {
      const task = {
          _id : id,
          _title : title,
          _description : description,
          _isDone : isDone,
      }
      return this.taskService.update(task).pipe(first()).subscribe( {
        next: () => {
            console.log("TEST DEBUG");
        },
        error: error => {
            console.log(error);
        }
    });
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
    console.log("COUCOU");
    this.tasks_todo = this.taskService.getAll(false);
    this.tasks_done = this.taskService.getAll(true);
  }

}
