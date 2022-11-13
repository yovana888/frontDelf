import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout.component';
import { RouterModule } from '@angular/router';
import { FormSharedModule } from '../shared/form-shared.module';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { LoaderComponent } from '../components/loader/loader.component';


@NgModule({
    imports: [
              RouterModule,
              FormSharedModule,
              MatToolbarModule,
              MatSidenavModule,
              MatListModule,
            ],
    exports: [LayoutComponent],
    declarations: [
    LayoutComponent,
    LoaderComponent
  ],
    providers: [],
})
export class LayoutModule { }
