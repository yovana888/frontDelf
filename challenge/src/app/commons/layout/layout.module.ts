import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout.component';
import { RouterModule } from '@angular/router';
import { FormSharedModule } from '../shared/form-shared.module';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";


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
    LayoutComponent
  ],
    providers: [],
})
export class LayoutModule { }
