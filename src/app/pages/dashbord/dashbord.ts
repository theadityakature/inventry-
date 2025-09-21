import { Component } from '@angular/core';
import { Navbar } from '../../navbar/navbar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashbord',
  imports: [Navbar,CommonModule],
  templateUrl: './dashbord.html',
  styleUrl: './dashbord.css'
})
export class Dashbord {

}
