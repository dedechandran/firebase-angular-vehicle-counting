import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor(public db : AngularFirestore) { }

getVehicleCounting() : Observable<any[]>{
  return this.db.collection("vehicle-counting").doc("camera-x").collection("time").snapshotChanges();
}
}
