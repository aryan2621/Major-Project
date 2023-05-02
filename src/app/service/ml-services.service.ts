import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MlServicesService {
  constructor(private http: HttpClient) {}
  async cropRecommendation(data: number[]) {
    try {
      const res = await this.http
        .post(
          'https://8080-797137136eb6451193a1f8c64a951490.onpatr.cloud/crop_recommend',
          {
            array: data,
          }
        )
        .toPromise();
      return res as string;
    } catch (error) {
      console.log('Error in cropRecommendation', error);
      return error;
    }
  }
  async fertilizerPrediction(data: any[]) {
    try {
      const res = await this.http
        .post(
          'https://8080-797137136eb6451193a1f8c64a951490.onpatr.cloud/fertilizer_recommend',
          {
            array: data,
          }
        )
        .toPromise();
      return res as string;
    } catch (error) {
      console.log('Error in fertilizerPrediction', error);
      return error;
    }
  }
}
