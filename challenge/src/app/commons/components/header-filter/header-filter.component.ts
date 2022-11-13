import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { map, debounceTime, distinctUntilChanged, filter, tap, takeUntil } from 'rxjs/operators';


@Component({
	selector: 'app-header-filter',
	templateUrl: './header-filter.component.html',
	styleUrls: ['./header-filter.component.scss']
})
export class HeaderFilterComponent implements  OnDestroy {
	@Output() search = new EventEmitter<string>();
	@Output() reload = new EventEmitter<string>();

	constructor() {
		this.onSearch();
	}

	searchByOption1: boolean = true;
	valueSearch = new FormControl('');
	private destroy$ = new Subject<unknown>();


	ngOnDestroy(): void {
		this.destroy$.next({});
		this.destroy$.complete();
	}

	cleanSearch(): void {
		this.valueSearch.reset();
		this.reload.emit();
	}

	private onSearch(): void {
		this.valueSearch.valueChanges
			.pipe(
				map((search) => search?.toLowerCase().trim()),
				debounceTime(300),
				distinctUntilChanged(),
				filter((search) => search !== '' && search !== undefined && search?.length > 3),
				tap((search) => this.search.emit(search)),
				takeUntil(this.destroy$)
			)
			.subscribe();
	}
}
