import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { PendientesComponent } from './components/pendientes/pendientes.component';
import { RegistroComponent } from './components/registro/registro.component';
import { AuthGuardService } from './services/auth-guard.service';
// import { Component } from './';
// import { Component } from './';
// import { Component } from './';
// import { Component } from './';
// import { PageNotFoundComponent } from './';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    {
        path: '',
        component: PendientesComponent,
        canActivate: [AuthGuardService]
     },
    { path: 'register', component: RegistroComponent },
    // { path: '', component: Component },
    { path: '**', component: PendientesComponent },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
