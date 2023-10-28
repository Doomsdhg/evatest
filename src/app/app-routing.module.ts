import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosPageComponent } from './pages/todos-page/todos-page.component';
import { TodoContentComponent } from './pages/todos-page/components/todo-content/todo-content.component';


const routes: Routes = [
  { 
    path: 'todos',
    component: TodosPageComponent,
    children: [
      {
        path: ':todo_id',
        component: TodoContentComponent
      }
    ]
  },
  {
    path: '',
    redirectTo: 'todos',
    pathMatch: 'prefix'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
