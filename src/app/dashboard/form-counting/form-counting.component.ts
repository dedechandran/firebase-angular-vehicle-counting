import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
import { AppServiceService } from 'src/app/app-service.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-form-counting',
  templateUrl: './form-counting.component.html',
  styleUrls: ['./form-counting.component.scss']
})
export class FormCountingComponent implements OnInit {

  today = new Date()
  jsToday = ''

  arrKota =[]
  arrKamera =[]
  selectedKota = "kota-tokyo"
  selectedKamera = "kamera-x"


  constructor(public service : AppServiceService) { }

  ngOnInit() {
    this.jsToday = formatDate(this.today,'dd-MMMM-yyyy','en-US','+0530')
    this.service.getKota().pipe(
      map(actions => actions.map(a=>{
        const id = a.payload.doc.id;
        return {id}
      }))
    )
    .subscribe(res => {
      this.arrKota = res
    })

    this.service.getKamera(this.selectedKota).pipe(
      map(actions => actions.map(a=>{
        const id = a.payload.doc.id;
        return {id}
      }))
    )
    .subscribe(res => {
      this.arrKamera = res
    })

    this.service.getDetailKamera(this.selectedKota,this.selectedKota).valueChanges().subscribe(res => {
      console.log(res)
    })

  }

}
