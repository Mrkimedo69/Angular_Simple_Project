import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TaskComponent } from './task/task.component';
import { AddTaskComponent } from './add-task/add-task.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: '',
    component:TodoListComponent
  },
  {
    path: 'task',
    component:TaskComponent
  },
  {
    path: 'task/:id',
    component:TaskComponent
  },
  {
    path: 'addtask',
    component:AddTaskComponent
  },
  { path: 'old-route', 
    redirectTo: '/new-route', 
    pathMatch: 'full' 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
