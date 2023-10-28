import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { map, takeUntil, tap, withLatestFrom } from 'rxjs/operators';
import { ITodo, TodosService } from '../../todos.service';
import { Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-todo-content',
  templateUrl: './todo-content.component.html',
  styleUrls: ['./todo-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoContentComponent implements OnInit, OnDestroy {

  @Input() public todo: ITodo;

  public todo_formgroup = new FormGroup({
    title: new FormControl(''),
    text: new FormControl('')
  });

  public current_todo$ = this.todos_service.current_todo$;

  private destroyed$ = new Subject<void>();
  private form_subscription: Subscription;

  constructor(private readonly route: ActivatedRoute, private readonly todos_service: TodosService) {}

  ngOnInit(): void {
    this.route.paramMap.pipe(map((params) => params.get('todo_id'))).subscribe(this.todos_service.current_todo_id$);
    this.todos_service.current_todo$.subscribe((todo) => {
      this.todo_formgroup = new FormGroup({
        id: new FormControl(todo.id),
        title: new FormControl(todo.title),
        text: new FormControl(todo.text)
      });
      this.subscribeToFormChanges();
    });
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
  }

  private subscribeToFormChanges() {
    this.form_subscription?.unsubscribe();
    this.form_subscription = this.todo_formgroup.valueChanges
      .pipe(
        withLatestFrom(this.todos_service.todos$),
        map(([form_value, todos]) => {
          let edited_todo_index = todos.findIndex((todo) => todo.id === form_value.id);
          todos[edited_todo_index] = form_value;
          return todos;
        }),
        takeUntil(this.destroyed$)
      )
      .subscribe((v) => this.todos_service.todos$.next(v));
  }
}
