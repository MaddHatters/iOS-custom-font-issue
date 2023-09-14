import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    BrowserModule,
    FormsModule,
    CommonModule
  ],
})
export class HomePage {
  constructor() {
    console.log('in home page ctor')
  }


	props = [
    {selected: true},
    {},
    {},
    {},
    {},
    {},
    {},
    {}
  ]
	selection = this.props[0]
	selectProp(selection: any): void {
		this.selection.selected = false;
		this.selection = selection;
		this.selection.selected = true;
	}  
}
