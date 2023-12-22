import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastService } from 'src/app/services/toast/toast.service';
import { Router } from '@angular/router';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  db: SQLiteObject;
  book_name: string;
  book_price: string;
  bookData: book[];



  current_year: number = new Date().getFullYear();

  signup_form: FormGroup;
  submit_attempt: boolean = false;

  constructor(
    private sqlite: SQLite,
    private authService: AuthService,
    private loadingController: LoadingController,
    private formBuilder: FormBuilder,
    private toastService: ToastService,
    private router: Router
  ) { }
  createOpenDataBase() {
    try {
      this.sqlite.create({
        name: 'data.db',
        location: 'default'
      })
        .then((db: SQLiteObject) => {
          this.db = db;
          alert('Database created/opened');
        })
        .catch(e => alert(JSON.stringify(e)));
    }
    catch (err: any) {
      alert(err)
    }
  }
  createTable() {
    this.db.executeSql('create table IF.NOT.EXISTS books(name VARCHAR(32),price varchar(10))', [])
      .then(result => alert('table created'))
      .catch(e => alert(JSON.stringify(e)));
  }
  ngOnInit() {
    // Setup form
    this.signup_form = this.formBuilder.group({
      email: ['', Validators.compose([Validators.email, Validators.required])],
      password: ['', Validators.compose([Validators.minLength(6), Validators.required])],
      password_repeat: ['', Validators.compose([Validators.minLength(6), Validators.required])]
    });

    // DEBUG: Prefill inputs
    this.signup_form.get('email').setValue('Ineslahbib@gmail.com');
    this.signup_form.get('password').setValue('123456');
  }

  // Sign up
  async signUp() {

    this.submit_attempt = true;

    // If email or password empty
    if (this.signup_form.value.email == '' || this.signup_form.value.password == '' || this.signup_form.value.password_repeat == '') {
      this.toastService.presentToast('Error', 'Please fill in all fields', 'top', 'danger', 4000);

      // If passwords do not match
    } else if (this.signup_form.value.password != this.signup_form.value.password_repeat) {
      this.toastService.presentToast('Error', 'Passwords must match', 'top', 'danger', 4000);

    } else {

      // Proceed with loading overlay
      const loading = await this.loadingController.create({
        cssClass: 'default-loading',
        message: '<p>Signing up...</p><span>Please be patient.</span>',
        spinner: 'crescent'
      });
      await loading.present();

      // TODO: Add your sign up logic
      // ...

      // Success messages + routing
      this.toastService.presentToast('Welcome!', 'Lorem ipsum', 'top', 'success', 2000);
      await this.router.navigate(['/home']);
      loading.dismiss();
    }
  }


  insertData() {
    let query: string = 'insert into books(name,price) values"' + this.book_name + '","' + this.book_price + '")"';
    this.db.executeSql(query, [])
      .then(() => alert('Record inserted'))
      .catch(e => alert(JSON.stringify(e)));
  }
  selectData() {
    this.bookData = [];
    this.db.executeSql('select * from books', [])
      .then((result) => {
        for (let i = 0; i < result.rows.minLength; i++) {
          this.bookData.push({ book_name: result.rows.item(i).name, "book_price": result.rows.item(i).price });
        }
      })
      .catch(e => alert(JSON.stringify(e)));
  }


}
class book {
  public book_name: string;
  public book_price: string;
}
