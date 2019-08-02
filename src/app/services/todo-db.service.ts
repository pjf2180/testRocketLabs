import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class TodoDbService {

  public items: Observable<any>;

  // todos: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
  constructor(public db: AngularFirestore) {
    this.items = db.collection('rocketLabsTodos').valueChanges();
  }
  addToDo(titulo: string) {
    this.db.collection('rocketLabsTodos').add({titulo: titulo});
  }

  eliminar(element) {
    console.log(element);
    // this.db.collection('rocketLabsTodos').ref.where( 'titulo','==',)
  }
  remove(selected) {
    console.log(selected);
  }
}
