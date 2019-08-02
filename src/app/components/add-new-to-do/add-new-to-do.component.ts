import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NavbarComponent } from '../navbar/navbar.component';
import { TodoDbService } from 'src/app/services/todo-db.service';
export interface DialogData {
  titulo: string;
}
@Component({
  selector: 'app-add-new-to-do',
  templateUrl: './add-new-to-do.component.html',
  styleUrls: ['./add-new-to-do.component.css']
})
export class AddNewToDoComponent {

  constructor(
    public dialogRef: MatDialogRef<NavbarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,public todoDbService:TodoDbService) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  onAdd() {
    console.log(this.data.titulo);
    this.todoDbService.addToDo(this.data.titulo);
  }

}
