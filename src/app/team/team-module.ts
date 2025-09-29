import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Team {
  id: number;
  name: string;
  primaryColor: string;
  secondaryColor: string;
  iconColor: string;
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class TeamModule { }
