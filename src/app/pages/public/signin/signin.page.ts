import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastService } from 'src/app/services/toast/toast.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {

  current_year: number = new Date().getFullYear();

  signin_form: FormGroup;
  submit_attempt: boolean = false;

  constructor(
    private authService: AuthService,
    private loadingController: LoadingController,
    private formBuilder: FormBuilder,
    private toastService: ToastService,
    private router: Router
  ) { }

  ngOnInit() {
    // Setup form
    this.signin_form = this.formBuilder.group({
      email: ['', Validators.compose([Validators.minLength(8), Validators.required])],
      password: ['', Validators.compose([Validators.minLength(6), Validators.required])]
    });
  }

  // Sign in
  async signIn() {
    this.submit_attempt = true;

    if (this.signin_form.valid) {
      const email = this.signin_form.value.email;
      const password = this.signin_form.value.password;

      try {
        const loading = await this.loadingController.create({
          message: 'Authentification ...',
        });
        await loading.present();

        const success = await this.authService.signIn(email, password);

        await loading.dismiss();

        if (success) {
          // Redirect to the home page or any other page upon successful sign-in
          this.router.navigate(['/home']);
        } else {
          // Display an error message to the user
          this.toastService.presentToast('Error', 'Please input email and password', 'top', 'danger', 2000);
        }
      } catch (error) {
        // Handle and display the error to the user
        this.toastService.presentToast('Error', 'Error signing in. Please try again.', 'top', 'danger', 2000);

        console.error('Error signing in:', error);
      }
    }
  }
}


// this.submit_attempt = true;

// // If email or password empty
// if (this.signin_form.value.email == '' || this.signin_form.value.password == '') {
//   this.toastService.presentToast('Error', 'Please input email and password', 'top', 'danger', 2000);

// } else {

//   // Proceed with loading overlay
//   const loading = await this.loadingController.create({
//     cssClass: 'default-loading',
//     message: '<p>Signing in...</p><span>Please be patient.</span>',
//     spinner: 'crescent'
//   });
//   await loading.present();

//   // TODO: Add your sign in logic
//   // ...

//   // Fake timeout
//   setTimeout(async () => {
//     // Sign in success
//     await this.router.navigate(['/home']);
//     loading.dismiss();
//   }, 2000);

// DEBUG: Prefill inputs
// this.signin_form.get('email').setValue('ineslahbib@gmail.com');
// this.signin_form.get('password').setValue('123456')
//   }

// }