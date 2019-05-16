import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { ChartsModule } from 'ng2-charts';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppServiceService } from './app-service.service';
import { ChartCountingComponent } from './dashboard/chart-counting/chart-counting.component';
import { FormCountingComponent } from './dashboard/form-counting/form-counting.component';
import { ChartKepadatanComponent } from './dashboard/chart-kepadatan/chart-kepadatan.component';
import { FormsModule } from '@angular/forms'
import { JenisKendaraanComponent } from './dashboard/jenis-kendaraan/jenis-kendaraan.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    ChartCountingComponent,
    FormCountingComponent,
    ChartKepadatanComponent,
    JenisKendaraanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    ChartsModule,
    FormsModule
  ],
  providers: [AppServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
