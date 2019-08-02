import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import * as Firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth, private router: Router) { }
  crearUsuario( email: string, password: string) {
    this.afAuth.auth
      .createUserWithEmailAndPassword(email, password)
      .then((resp) => {
        console.log(resp);
        this.router.navigate(['/']);
      })
      .catch(err => {
        console.log(err);
      });
  }
  iniciarSesion( email: string, password: string) {
    this.afAuth.auth
      .signInWithEmailAndPassword(email, password)
      .then((resp) => {
        this.router.navigate(['/']);
      })
      .catch(err => {
        console.log(err);
      });
  }
  cerrarSesion( ) {
    this.router.navigate(['/login']);
    this.afAuth.auth.signOut();
  }
  isAuth(): Observable<boolean> {
    return this.afAuth.authState
      .pipe(
        map((fbUser) => {
          if (fbUser == null) {
            this.router.navigate(['/login']);
          }
          return fbUser != null;
        }
        )
      );
  }
  initAuthListener() {
    this.afAuth.authState.subscribe((fireUser: Firebase.User) => {
      console.log(fireUser);
    });
  }
}
