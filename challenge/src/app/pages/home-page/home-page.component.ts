import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/commons/interfaces/product';
import { ProductService } from 'src/app/commons/services/api/product.service';
import { Response } from 'src/app/commons/interfaces/product';
import { PageEvent } from '@angular/material/paginator';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private _productService:ProductService) { }
  listProducts: Product[] = [];
  pageEvent!: PageEvent;
	pageSize: number = 5; // items x pagina
	pageLength: number = 0; // total items
  sortOrder:string = 'desc';
  sortBy:string  = ''
	showNotFoundResult: boolean = false;
  valueSearchComponent?: string = '';
  columndefs : any[] = ['id','name','slug'];
  
  ngOnInit(): void {
    this.getData()
  }

  async getData(
    paginate: number = 5, 
    sortOrder: string = 'desc', 
    sortBy:string = '', 
    page:number = 1
  ):Promise<Response | any>{
    const response = await this._productService.getProducts(paginate, sortOrder, sortBy, this.valueSearchComponent, page)
    this.listProducts=response.data.data;
		this.pageLength = response.data.total;
		this.pageSize = response.data.per_page;
		this.showNotFoundResult = response.data.total === 0 ? true : false;
    console.log(response)
  }


  onChangePaginate(event: PageEvent): void {
		this.listProducts = [];
		this.getData(event.pageSize,this.sortOrder,this.sortBy,event.pageIndex);
	}

	onSearch(valueSearch: string): void {
		this.listProducts = [];
		this.valueSearchComponent = valueSearch;
		this.getData();
	}

	onReload(): void {
		this.listProducts = [];
		this.valueSearchComponent = '';
		this.showNotFoundResult = false;
		this.getData();
	}


}


