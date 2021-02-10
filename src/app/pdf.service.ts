import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PdfService {
  constructor(private http: HttpClient) {}

  getPDF(polja: any) {
    return this.http.post('/api/obrazac.pdf', polja, { responseType: 'blob' });
  }
}
