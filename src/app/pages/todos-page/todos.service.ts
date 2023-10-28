import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { map, withLatestFrom } from 'rxjs/operators';

export interface ITodo {
  id: string;
  title: string;
  text: string;
}

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  public todos_mock: ITodo[] = [
    {
      id: '1',
      title: 'do smt #1',
      text: 'do smt. a lot of text #1'
    },
    {
      id: '2',
      title: 'do smt #2',
      text: 'do smt. a lot of text #2'
    },
    {
      id: '3',
      title: 'do smt #3',
      text: 'do smt. a lot of text #3'
    },
    {
      id: '4',
      title: 'do smt #4',
      text: 'do smt. a lot of text #4'
    },
    {
      id: '5',
      title: 'do smt #5',
      text: 'do smt. a lot of text #5'
    },
    {
      id: '6',
      title: 'do smt #6',
      text: 'do smt. a lot of text #6'
    },
  ]

  public todos$ = new ReplaySubject<ITodo[]>(1);

  public readonly current_todo_id$ = new ReplaySubject<string>(1);
  public readonly current_todo$ = this.current_todo_id$
    .pipe(
      withLatestFrom(this.todos$),
      map(([id, todos]) => (todos.find((todo) => todo.id === String(id))) || todos[todos.length - 1])
    );

  constructor() {
    this.todos$.next(this.todos_mock);
  }
}
