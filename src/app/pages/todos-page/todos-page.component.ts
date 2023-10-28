import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TodosService } from './todos.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-todos-page',
  templateUrl: './todos-page.component.html',
  styleUrls: ['./todos-page.component.scss'],
  providers: [TodosService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodosPageComponent implements OnInit {
  constructor(public todos_service: TodosService) { }

  ngOnInit(): void {}

  public addNewtodo() {
    this.todos_service.todos$.pipe(first()).subscribe((todos) => {
      const last_todo = todos[todos.length - 1];
      todos.push({
        id: String(Number(last_todo.id) + 1),
        title: 'Новая заметка',
        text: 'Текст заметки'
      });
      this.todos_service.todos$.next([...todos]);
    });
  }
}
