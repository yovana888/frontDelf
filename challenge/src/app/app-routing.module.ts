import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './commons/layout/layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',loadChildren:()=> import('./pages/home-page/home-page.module').then((m)=>m.HomePageModule)
            },
        ]
    },
	{
		path: '**', loadChildren:()=> import('./pages/notfound-page/not-found.module').then((m)=>m.NotFoundPageModule)
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppRoutingModule { }
