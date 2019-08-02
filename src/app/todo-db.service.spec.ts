import { TestBed } from '@angular/core/testing';

import { TodoDbService } from './services/todo-db.service';

describe('TodoDbService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TodoDbService = TestBed.get(TodoDbService);
    expect(service).toBeTruthy();
  });
});
