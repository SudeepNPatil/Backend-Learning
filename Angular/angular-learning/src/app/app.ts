import { Component, OnInit, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { User } from './user/user';
import { Admin } from './admin/admin';
import { DataBinding } from './data-binding/data-binding';
import { Signal } from './signal/signal';
import { ControlFlow } from './control-flow/control-flow';
import { NotFound } from './not-found/not-found';
import { Photos } from './photos/photos';
import {
  IonButton,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle
} from '@ionic/angular/standalone';
import { Product } from './product/product';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, User, Admin, DataBinding, Signal, ControlFlow, NotFound, Photos,Product, IonButton, IonContent, IonHeader, IonToolbar, IonTitle ], // Keep your existing imports
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {


}

