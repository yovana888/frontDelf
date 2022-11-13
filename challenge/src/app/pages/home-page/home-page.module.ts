import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderFilterComponent } from 'src/app/commons/components/header-filter/header-filter.component';
import { FormSharedModule } from 'src/app/commons/shared/form-shared.module';
import { HomePageComponent } from './home-page.component';
export const routes: Routes = [{ path: '', component:  HomePageComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes),FormSharedModule],
    exports: [],
    declarations: [
    HomePageComponent,
    HeaderFilterComponent,
    ],
    providers: [],
})
export class HomePageModule { }
