import { Component, OnInit, ViewChild } from '@angular/core';
import { TodoDbService } from 'src/app/services/todo-db.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-pendientes',
  templateUrl: './pendientes.component.html',
  styleUrls: ['./pendientes.component.css']
})
export class PendientesComponent implements OnInit {


  todos: Observable<any[]>;
  constructor(public todoDbService: TodoDbService) { }

  ngOnInit() {
    this.todos = this.todoDbService.items;
    this.todoDbService.items.subscribe((todos) => {
      console.log(todos);
    });
  }
  eliminar(data) {
    console.log('Eliminando');
    this.todoDbService.remove(data);
  }

}
