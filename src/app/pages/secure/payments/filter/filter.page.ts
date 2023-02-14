import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { format, parseISO } from 'date-fns';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.page.html',
  styleUrls: ['./filter.page.scss'],
})
export class FilterPage implements OnInit {

  customPopoverOptions: any = {
    message: 'Select one',
    cssClass: 'popover-in-modal'
  };

  date_from_active: boolean = false;
  date_to_active: boolean = false;

  date_from: any;
  date_to: any;

  range_value_lower: number = 0;
  range_value_upper: number = 1000;

  filters: any = ['abc'];

  constructor(
    private modalController: ModalController
  ) { }

  ngOnInit() {

    // Default range values
    const dual_range = document.querySelector('#dual-range');
    dual_range['value'] = { lower: 0, upper: 1000 };
  }

  // Toggle date from
  toggleDateFrom() {
    this.date_from_active = this.date_from_active ? false : true;
    this.date_to_active = false;
  }

  // Toggle date to
  toggleDateTo() {
    this.date_to_active = this.date_to_active ? false : true;
    this.date_from_active = false;
  }

  // On date from select
  onDateFromSelect(event: any) {
    this.date_from = format(parseISO(event.detail.value), 'MMM d, yyyy');;
    this.date_from_active = false;
  }

  // On date to select
  onDateToSelect(event: any) {
    this.date_to = format(parseISO(event.detail.value), 'MMM d, yyyy');;
    this.date_to_active = false;
  }

  // On range change
  rangeChanged(event: any) {
    this.range_value_lower = event.detail.value.lower;
    this.range_value_upper = event.detail.value.upper;
  }

  // Cancel
  cancel() {

    // Dismiss modal
    this.modalController.dismiss();
  }

  // Apply filter
  apply() {

    // Add filter logic here...
    // ...

    // Dismiss modal and apply filters
    this.modalController.dismiss(this.filters);
  }

}
