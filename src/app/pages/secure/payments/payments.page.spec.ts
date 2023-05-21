import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonRouterOutlet, IonicModule } from '@ionic/angular';

import { PaymentsPage } from './payments.page';

describe('PaymentsPage', () => {
  let component: PaymentsPage;
  let fixture: ComponentFixture<PaymentsPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentsPage ],
      imports: [IonicModule.forRoot()],
      providers: [
        {
          provide: IonRouterOutlet,
          useValue: {},
        },
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(PaymentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
