import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { AddNewToDoComponent } from '../add-new-to-do/add-new-to-do.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public authService: AuthService, public dialog: MatDialog) { }

  titulo: string;

  ngOnInit() {
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(AddNewToDoComponent, {
      width: '250px',
      data: { titulo: this.titulo}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.titulo = result;
    });
  }
  cerrarSesion() {
    this.authService.cerrarSesion();
  }
}
