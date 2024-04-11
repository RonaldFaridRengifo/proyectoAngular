import { RouterModule,Routes } from "@angular/router";
//import { Component } from './components/navbar/navbar.component';

const APP_ROUTES:Routes=[
  //{path: 'biografia', component: Component},
  //{path: 'fooder', component: Component},
  //{path: 'historia', component: Component},
  //{path: 'navbar', component: Component},
  //{path: '**',pathMatch: 'full', redirectTo: 'navbar'},
]

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
