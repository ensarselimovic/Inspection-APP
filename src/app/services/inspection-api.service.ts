import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InspectionApiService {
  readonly inspectionApiURL = "https://localhost:7019/api";

  constructor(private http: HttpClient) { }

  getInspectionList(): Observable<any[]>{
    return this.http.get<any>(this.inspectionApiURL + '/inspections');
  }

  addInspection(data: any){
    return this.http.post(this.inspectionApiURL + '/inspections', data);
  }

  updateInspection(id:number|string, data:any) {
    return this.http.put(this.inspectionApiURL + `/inspections/${id}`, data);
  }

  deleteInspection(id:number|string) {
    return this.http.delete(this.inspectionApiURL + `/inspections/${id}`);
  }

// INSPECTION TYPES

  getInspectionTypesList(): Observable<any[]>{
    return this.http.get<any>(this.inspectionApiURL + '/inspectionTypes');
  }

  addInspectionTypes(data: any){
    return this.http.post(this.inspectionApiURL + '/inspectionTypes', data);
  }

  updateInspectionTypes(id: number | string ,data:any){
    return this.http.put(this.inspectionApiURL + '/inspectionTypes/${id}', data);
  }

  deleteInspectionTypes(id: number|string){
    return this.http.delete(this.inspectionApiURL + '/inspectionTypes/${id}');
  }

// STATUSES

  getStatusList(): Observable<any[]>{
    return this.http.get<any>(this.inspectionApiURL + '/status');
  }

  addStatus(data: any){
    return this.http.post(this.inspectionApiURL + '/status', data);
  }

  updateStatus(id: number | string ,data:any){
    return this.http.put(this.inspectionApiURL + '/status/${id}', data);
  }

  deleteStatus(id: number|string){
    return this.http.delete(this.inspectionApiURL + '/status/${id}');
  }

}
