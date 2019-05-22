import { Component, OnInit } from '@angular/core';
import { AppServiceService } from 'src/app/app-service.service';
import { map } from 'rxjs/operators';
import { formatDate } from '@angular/common';

export interface Vehicle {
  jumlahMobil: number;
  jumlahMotor: number;
  jumlahBus: number;
  jumlahTruk: number;
}

export interface VehicleId extends Vehicle { id: string; }

@Component({
  selector: 'app-chart-counting',
  templateUrl: './chart-counting.component.html',
  styleUrls: ['./chart-counting.component.scss']
})
export class ChartCountingComponent implements OnInit {
  items: any[];
  response = [];

  public lineChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
    fill: false
  };

  public lineChartLabels = [];
  public lineChartType = 'line';
  public lineChartLegend = true;

  public lineChartData = [
    {data: [], label: 'Mobil'},
    {data: [], label: 'Motor'},
    {data: [], label: 'Bus'},
    {data: [], label: 'Truk',
    backgroundColor: 'green',
    borderColor: 'green',
    pointBackgroundColor: 'green',
    pointBorderColor: 'white',
    pointHoverBackgroundColor: 'white',
    pointHoverBorderColor: 'green' }
  ];

  selectedKota = "kota-tokyo"
  selectedKamera = "kamera-x"
  today = new Date()
  jsToday = formatDate(this.today,'dd-MMMM-yyyy','en-US','+0530')

  constructor(public service: AppServiceService) { }

  ngOnInit(){
    this.service.getVehicleCounting(this.selectedKota,this.selectedKamera,this.jsToday).pipe(
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
    this.lineChartData[3].data = []
    this.lineChartLabels = []
    res.forEach(item => {
      this.lineChartLabels.push(item.id)
      this.lineChartData[0].data.push(item.mobil)
      this.lineChartData[1].data.push(item.motor)
      this.lineChartData[2].data.push(item.bus)
      this.lineChartData[3].data.push(item.truk)
     })
  }

}
