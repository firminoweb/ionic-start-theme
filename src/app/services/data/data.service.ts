import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { CapacitorHttp, HttpResponse } from '@capacitor/core';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiUrl: string = "http://192.168.1.89:3248/BYS_WS/ODataV4/Company('GRANDE%20EPICERIE%20BEN%20YAGHLANE')";
  login: string = "Ines";
  password: string = "Ines@2025";
  soapUrl: string = 'http://192.168.1.89:1947/BYC_PROD/WS/GRANDE%20EPICERIE%20BEN%20YAGHLANE/Codeunit/ECOM_BYC_API_EXT';
  soapAction: string = 'urn:microsoft-dynamics-nav/coupon_management';


  constructor() {
  }

  async getArticle(): Promise<any> {
    try {
      const response = await CapacitorHttp.request({
        method: 'GET',
        url: `${this.apiUrl}/LSArticle?$filter=Item_Category_Code eq '0101'`,
        headers: {
          Authorization: `Basic ${btoa(this.login + ":" + this.password)}`
        }
      });

      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error; // Rethrow the error to be caught by the caller
    }
  }
}
