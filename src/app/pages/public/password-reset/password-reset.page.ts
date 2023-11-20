import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.page.html',
  styleUrls: ['./password-reset.page.scss'],
})
export class PasswordResetPage implements OnInit {
  reset_form: FormGroup;
  current_year: number = new Date().getFullYear();

  constructor(
    private formBuilder: FormBuilder,
    private loadingController: LoadingController,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.reset_form = this.formBuilder.group({
      email: ['', Validators.compose([Validators.email, Validators.required])],
    });
  }

  async resetPassword() {
    const loading = await this.loadingController.create();
    await loading.present();
    if (this.reset_form?.valid) {
      const user = await this.authService
        .resetPassword(this.reset_form.value.email)
        .then(() => {
          console.log('reset ok');
          loading.dismiss();
          this.router.navigate(['/signin']);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }
}
