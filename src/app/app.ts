import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
// import {  ProductComponent } from './pages/product/product';
import { FormsModule } from '@angular/forms';
import { Dashbord } from './pages/dashbord/dashbord';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Navbar,Dashbord,FormsModule,CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('inventry');
}
