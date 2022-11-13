import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/commons/interfaces/product';
import { ProductService } from 'src/app/commons/services/api/product.service';
import { Response } from 'src/app/commons/interfaces/product';
import { PageEvent } from '@angular/material/paginator';
import { Sort } from '@angular/material/sort';
@Component({
	selector: 'app-home-page',
	templateUrl: './home-page.component.html',
	styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
	constructor(private _productService: ProductService) {}
	listProducts: Product[] = [];

  	//Variables para tabla material
	pageEvent!: PageEvent;
	pageSize: number = 5; // items x pagina
	pageLength: number = 0; // total items
	columndefs: any[] = ['id', 'name', 'slug'];
	
  	//Variables para backend
	page: number = 1;
	sortOrder: string = 'desc';
	sortBy: string = 'id';
	showNotFoundResult: boolean = false;
	valueSearchComponent?: string = '';

	ngOnInit(): void {
		this.getData();
	}

	async getData(): Promise<Response | any> {
		const response = await this._productService.getProducts(
			this.pageSize,
			this.sortOrder,
			this.sortBy,
			this.valueSearchComponent,
			this.page
		);

		this.listProducts = response.data.data;
		this.pageLength = response.data.total;
		this.pageSize = response.data.per_page;
		this.showNotFoundResult = response.data.total === 0 ? true : false;
	}

	onChangePaginate(event: PageEvent): void {
		this.pageSize = event.pageSize;
		this.page = event.pageIndex + 1;
		this.getData();
	}

	onSearch(valueSearch: string): void {
		this.valueSearchComponent = valueSearch;
		this.getData();
	}

	sortTable(event: Sort): void {
		this.sortBy = event.active;
		this.sortOrder = event.direction;
    	this.getData();
	}

	onReload(): void {
		this.valueSearchComponent = '';
		this.showNotFoundResult = false;
		this.getData();
	}
}
