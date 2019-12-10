import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hotel } from '../models/hotel.model';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HotelServiceService {
  baseUrl = environment.baseUrl;
  constructor(private httpClient: HttpClient) { }

  getHotels(params?): Observable<Hotel[]> {
    return this.httpClient.get<Hotel[]>(`${this.baseUrl}/hotels`, { params });
  }
}
