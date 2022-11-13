import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Response } from '../../interfaces/product';

@Injectable({ providedIn: 'root' })
export class ProductService {
	private apiUrl: string = '';
	constructor() {
		this.apiUrl = environment.api + 'products?';
	}

	async getProducts(
		paginate: number = 5,
		sortOrder: string = 'desc',
		sortBy: string = '',
		name: string = '',
		page: number = 1
	): Promise<Response | any> {
		let params: any = {
			sortOrder,
			sortBy,
			name,
			paginate,
			page
		};

		let query = Object.keys(params)
			.map((k) => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
			.join('&');

		try {
			const response = await fetch(this.apiUrl + query);
			const data = await response.json();
			return data;
		} catch (e) {
			console.log(e);
		}
	}
}
