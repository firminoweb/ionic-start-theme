import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CapacitorHttp, HttpResponse } from '@capacitor/core';


@Injectable({
  providedIn: 'root'
})

export class AuthService {

  apiUrl: string = "http://192.168.1.89:3248/BYS_WS/ODataV4/Company('GRANDE%20EPICERIE%20BEN%20YAGHLANE')";
  login: string = "Ines";
  password: string = "Ines@2025";

  constructor(
    private router: Router
  ) { }

  // Get user session
  async getSession() {

    // ...
    // put auth session here
    // ...

    // Sample only - remove this after real authentication / session
    let session = {
      email: 'john.doe@mail.com'
    }

    return false;
    // return session;
  }

  // Sign in
  async signIn(email: string, password: string): Promise<boolean> {
    try {
      const response = await CapacitorHttp.request({
        method: 'GET',
        url: `${this.apiUrl}/UsersList?$filter=No eq '${email}' and Password eq '${password}'`,
        headers: {
          Authorization: `Basic ${btoa(this.login + ":" + this.password)}`
        }
      });

      if (response.status === 200 && response.data.value.length > 0) {
        // Simulate setting the user session in local storage or cookies
        console.log(JSON.stringify(response.data.value[0]));
        sessionStorage.setItem('No', JSON.stringify(response.data.value[0].No));
        sessionStorage.setItem('Main_Contact_Name', JSON.stringify(response.data.value[0].Main_Contact_Name));
        sessionStorage.setItem('Issued_Award_Points', JSON.stringify(response.data.value[0].Issued_Award_Points));
        sessionStorage.setItem('Unprocessed_Points', JSON.stringify(response.data.value[0].Unprocessed_Points));
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error; // Rethrow the error to be caught by the caller
    }
  }

  // Sign up
  async signUp(email: string, password: string) {
    // Sample only - remove this after real authentication / session
    let sample_user = {
      email: email,
      password: password
    }

    return sample_user;
  }

  // Sign out
  async signOut() {
    // ...
    // clean subscriptions / local storage etc. here
    // ...

    // Navigate to sign-in
    this.router.navigateByUrl('/signin');
    localStorage.delete();
  }
}
