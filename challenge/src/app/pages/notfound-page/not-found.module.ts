import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundPageComponent } from './notfound-page.component';

export const routes: Routes = [{ path: '', component:  NotfoundPageComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [],
    declarations: [
    NotfoundPageComponent
  ],
    providers: [],
})
export class NotFoundPageModule { }
