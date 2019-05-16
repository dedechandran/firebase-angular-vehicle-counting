import { Component, OnInit } from '@angular/core';
import { AppServiceService } from 'src/app/app-service.service';
import { Vehicle } from '../chart-counting/chart-counting.component';
import { formatDate } from '@angular/common';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-jenis-kendaraan',
  templateUrl: './jenis-kendaraan.component.html',
  styleUrls: ['./jenis-kendaraan.component.scss']
})
export class JenisKendaraanComponent implements OnInit {
  totalMobil = 0
  totalMotor = 0
  totalBus = 0
  totalTruk = 0

  selectedKota = "kota-tokyo"
  selectedKamera = "kamera-x"
  today = new Date()
  jsToday = formatDate(this.today,'dd-MMMM-yyyy','en-US','+0530')
  constructor(public service : AppServiceService) { }

  ngOnInit() {
    this.service.getVehicleCounting(this.selectedKota,this.selectedKamera,this.jsToday).pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Vehicle;
        const id = a.payload.doc.id;
        return { id, ...data };        
      }))
    )
    .subscribe(res => {
      console.log(res)
      this.sumTotal(res)
    })
  }
  
  sumTotal(res : any[]){
    this.totalMobil = 0
    this.totalMotor = 0
    this.totalBus = 0
    this.totalTruk = 0
    res.forEach(item =>{
      this.totalMobil += item.mobil
      this.totalMotor += item.motor
      this.totalBus += item.bus
      this.totalTruk += item.truk

    })
  }

  }

