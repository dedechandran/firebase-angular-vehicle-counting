import { Component } from '@angular/core';
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
  items: any[];
  response = [];

  public lineChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public lineChartLabels = [];
  public lineChartType = 'line';
  public lineChartLegend = true;

  public lineChartData = [
    {data: [], label: 'Mobil'},
    {data: [], label: 'Motor'},
    {data: [], label: 'Bus'},
  ];

  constructor(public service : AppServiceService){
  }

  ngOnInit(){
    this.service.getVehicleCounting().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Vehicle;
        const id = a.payload.doc.id;
        return { id, ...data };        
      }))
    )
    .subscribe(res => {
      console.log(res)
      this.updateGraph(res)
    })

  }

  updateGraph(res : any[]){
    this.lineChartData[0].data = []
    this.lineChartData[1].data = []
    this.lineChartData[2].data = []
    this.lineChartLabels = []
    res.forEach(item => {
      this.lineChartLabels.push(item.id)
      this.lineChartData[0].data.push(item.mobil)
      this.lineChartData[1].data.push(item.motor)
      this.lineChartData[2].data.push(item.bus)
     })
  }


}
