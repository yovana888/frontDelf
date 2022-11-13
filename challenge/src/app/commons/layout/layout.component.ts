import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent  {

  constructor(private _router: Router) { }

  
  isExpanded = false;
	indexPrevious = 0;
	
	objMenu = [
		{ title: 'Home', active: true, icon: 'dashboard', link:'/' },
		{ title: 'Salir', active: false, icon: 'logout', link: '/' }
	];


  toggleActive(index: number): void {
		const itemMenuActual = this.objMenu[index];

		this.objMenu[this.indexPrevious].active = false;
		itemMenuActual.active = true;
		this.indexPrevious = index;

		switch (itemMenuActual.link) {
			case '':
				console.log('salir')
				break;
			default:
				this._router.navigateByUrl(itemMenuActual.link);
		}
	}
}
