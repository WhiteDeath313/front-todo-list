import { Injectable, NgIterable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Task } from '../_model/Task';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class TaskService {
    constructor(
        private router: Router,
        private http: HttpClient
    ) { }

    public create(task: Task) {
        console.log("TEST");
        return this.http.post(`${environment.apiUrl}/tasks/`, {'task': task});
    }

    public update(task: Task) {
        return this.http.patch(`${environment.apiUrl}/tasks/` + task._id, task);
    }
    
    public delete(id: string) {
        return this.http.delete(`${environment.apiUrl}/tasks/` + id);
    }

    public getAll(isDone: boolean) {
        return this.http.get<Task[]>(`${environment.apiUrl}/tasks/` + isDone)
        .pipe(map(tasks => {
            return tasks;
        }));
    }
}