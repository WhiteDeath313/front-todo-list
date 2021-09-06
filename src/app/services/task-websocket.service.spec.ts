import { TestBed } from '@angular/core/testing';

import { TaskWebsocketService } from './task-websocket.service';

describe('TaskWebsocketService', () => {
  let service: TaskWebsocketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskWebsocketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
