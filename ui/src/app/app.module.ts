import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
// import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatInputModule } from '@angular/material/input';
// import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { MatSidenavModule } from '@angular/material/sidenav';
// import { MatLegacyCheckboxModule as MatCheckboxModule } from '@angular/material/legacy-checkbox';
import {MatCheckboxModule} from '@angular/material/checkbox';
// import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import {MatCardModule} from '@angular/material/card';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { MatDividerModule } from '@angular/material/divider';
// import { MatLegacyListModule as MatListModule } from '@angular/material/legacy-list';
import { MatListModule } from '@angular/material/list';
// import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { CartComponent } from './components/cart/cart.component';
import { WhishlistComponent } from './components/whishlist/whishlist.component';
import { ProductService } from './service/product.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CartService } from './service/cart.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './components/register/register.component';
import { AuthInterceptorService } from './service/auth-interceptor.service';
import { UserService } from './service/user.service';
import { WishlistService } from './service/wishlist.service';
import { EmailService } from './service/email.service';
import { AdminService } from './admin/Services/admin.service';

import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgChartsModule } from 'ng2-charts';
// import { MatLegacyPaginatorModule as MatPaginatorModule } from '@angular/material/legacy-paginator';
import { MatPaginatorModule } from '@angular/material/paginator';
// import { MatLegacyTableModule as MatTableModule } from '@angular/material/legacy-table';
import { MatTableModule } from '@angular/material/table';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSortModule } from '@angular/material/sort';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { DialogbxComponent } from './admin/dialogbx/dialogbx.component';
import { NavigationComponent } from './admin/navigation/navigation.component';
import { OrdersComponent } from './admin/orders/orders.component';
import { PlaceorderComponent } from './admin/orders/placeorder/placeorder.component';
import { ProductsComponent } from './admin/products/products.component';
import { ProductDialogBoxComponent } from './admin/products/product-dialog-box/product-dialog-box.component';
import { CardComponent } from './admin/card/card.component';
// import { MatLegacyMenuModule as MatMenuModule } from '@angular/material/legacy-menu';
import { MatMenuModule } from '@angular/material/menu';
import { ErrorInterceptorService } from './service/error-interceptor.service';
import { AddressDashboardComponent } from './components/address-dashboard/address-dashboard.component';
import { CreditCardDirectivesModule } from 'angular-cc-library';
import { FilterPipe } from './pipes/filter.pipe';
// import {MatLegacyRadioModule as MatRadioModule} from '@angular/material/legacy-radio'; 
import {MatRadioModule} from '@angular/material/radio'; 
// import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';
import { MatDialogModule } from '@angular/material/dialog';
// import {MatLegacySelectModule as MatSelectModule} from '@angular/material/legacy-select';
import { MatSelectModule } from '@angular/material/select';
import { UserordersComponent } from './components/userorders/userorders.component';
import { EditUserDetailsComponent } from './components/edit-user-details/edit-user-details.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { OrderService } from './service/order.service';
import { OrderslistComponent } from './components/orderslist/orderslist.component';
import { AddressDialogComponent } from './components/address-dashboard/address-dialog/address-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProductComponent,
    ProductDetailsComponent,
    CartComponent,
    WhishlistComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    DialogbxComponent,
    NavigationComponent,
    OrdersComponent,
    PlaceorderComponent,
    ProductsComponent,
    ProductDialogBoxComponent,
    CardComponent,
    AddressDashboardComponent,
    FilterPipe,
    UserordersComponent,
    EditUserDetailsComponent,
    AboutUsComponent,
    OrderslistComponent,
    AddressDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatCardModule,
    MatDividerModule,
    MatListModule,
    MatButtonModule,
    MatGridListModule,
    FlexLayoutModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
    MatToolbarModule,
    NgChartsModule,
    MatPaginatorModule,
    MatTableModule,
    MatNativeDateModule,
    MatSortModule,
    MatMenuModule,
    CreditCardDirectivesModule,
    MatRadioModule,
    MatDialogModule,
    MatSelectModule
    
    
  ],
  providers: [
    ProductService,
    CartService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
    {provide: HTTP_INTERCEPTORS,useClass:ErrorInterceptorService,multi:true},
    UserService,
    WishlistService,
    EmailService,
    AdminService,
    OrderService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
