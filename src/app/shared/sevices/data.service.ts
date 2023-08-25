import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiBaseUrl = 'https://covid-19.dataflowkit.com/v1';
  constructor(private http: HttpClient) {}

  getSummaryData() {
    return this.http.get(this.apiBaseUrl);
  }
}
