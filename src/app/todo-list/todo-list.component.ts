import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent implements OnInit {

  constructor(private http: HttpClient){}

  data=[
    {
      name:"Ante",
      age:55
    },
    {
      name:"Mislav",
      age:33
    },
    {
      name:"Luka",
      age:24
    }
]

  ngOnInit(): void {

    this.http.put('https://angular-simple-project-17b6c-default-rtdb.europe-west1.firebasedatabase.app/todoList.json',this.data)

      this.http.get('https://angular-simple-project-17b6c-default-rtdb.europe-west1.firebasedatabase.app/todoList.json').subscribe((res)=>{
        console.log(res)
      },
      (error) => {
        console.error('Error occurred:', error);
      })

  }
}
