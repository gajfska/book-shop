import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BooklistComponent} from './booklist/booklist.component';
import {CartComponent} from './cart/cart.component';
import {FormComponent} from './form/form.component';
import {OrderSummaryComponent} from './form/order-summary/order-summary.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/shoppinglist', pathMatch: 'full' },
    { path: 'shoppinglist', component: BooklistComponent},
    { path: 'cart', component: CartComponent},
    { path: 'form', component: FormComponent},
    { path: 'summary', component: OrderSummaryComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
