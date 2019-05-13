import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AppServiceService } from './app-service.service';
import { map } from 'rxjs/operators';

export interface Vehicle {
  jumlahMobil: string;
  jumlahMotor: string;
  jumlahBus: string;
}

export interface VehicleId extends Vehicle { id: string; }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  items: Observable<VehicleId[]>;
  data: VehicleId;
  constructor(public service : AppServiceService){
  }

  ngOnInit(){
    this.items = this.service.getVehicleCounting().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Vehicle;
        const id = a.payload.doc.id;
        return { id, ...data };        
      }))
    );

    this.items.subscribe(val => console.log(val));


  }
}
