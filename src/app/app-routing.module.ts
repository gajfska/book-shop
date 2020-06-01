import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BooklistComponent} from './booklist/booklist.component';
import {CartComponent} from './cart/cart.component';
import {FormComponent} from './form/form.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/shoppinglist', pathMatch: 'full' },
    { path: 'shoppinglist', component: BooklistComponent},
    { path: 'cart', component: CartComponent},
    { path: 'form', component: FormComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
