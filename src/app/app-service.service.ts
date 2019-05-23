import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor(public db : AngularFirestore) { }

getVehicleCounting(kota: string,kamera :string,tanggal :string) : Observable<any[]>{
  return this.db.collection("kota").doc(kota).collection("kamera").doc(kamera).collection("tanggal").doc(tanggal).collection("jam").snapshotChanges()
}

getVehicleCountingByDay(kota: string,kamera :string,tanggal :string) : Observable<any[]>{
  return this.db.collection("kota").doc(kota).collection("kamera").doc(kamera).collection("tanggal").doc(tanggal).collection("jam").valueChanges()
}

getKota() : Observable<any[]>{
  return this.db.collection("kota").snapshotChanges()
}

getKamera(kota : string) : Observable<any[]>{
  return this.db.collection("kota").doc(kota).collection("kamera").snapshotChanges();
}

getDetailKamera(kota: string,kamera : string){
  return this.db.collection("kota").doc(kota).collection("kamera").doc(kamera)
}
}
