import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-air-ticket',
  templateUrl: './air-ticket.component.html',
  styleUrls: ['./air-ticket.component.css']
})
export class AirTicketComponent implements OnInit {

  airticketForm: FormGroup | any;
  constructor(private formbuilder: FormBuilder, private api: ApiService, private toastr: ToastrService) { }
  ngOnInit(): void {
    this.airticketForm = new FormGroup({
      name: new FormControl('', [Validators.required,]),
      email: new FormControl('', [Validators.required, Validators.email]),
      product: new FormControl('', [Validators.required,]),
      toppings: new FormControl('', [Validators.required,]),
      class: new FormControl('', [Validators.required,]),
    });
    const toSelect = this.toppingList.find((c) => c.id == 1);
    this.airticketForm.get('toppings').setValue(toSelect);

    const toclass = this.classList.find((c) => c.id == 3);
    this.airticketForm.get('class').setValue(toclass);
  }

  toppingList = [
    {
    id: 1,
    name:  'One Way',
  },
  {
    id: 2,
    name:   'Road Trip',
  },
  {
    id: 3,
    name:    'Multi-City'
  },
];

classList = [
  {
  id: 1,
  name:  'First',
},
{
  id: 2,
  name:   'Businees',
},
{
  id: 3,
  name:    'Econommy'
},{
  id: 4,
  name:    'Premium Economy'
},
];

  onAirticketSubmit() {
    if (this.airticketForm.valid) {
      this.api.postCategories(this.airticketForm.value)
        .subscribe({
          next: (res) => {
            this.toastr.success('details added successfully', 'successfully', { timeOut: 2000, });
            this.airticketForm.reset();
          },
          error: () => {
            this.toastr.error('error while adding  the data', 'error', { timeOut: 2000, });
          }
        })
    }
  }

  value = 0;

  handleMinus() {
    this.value--;  
  }
  handlePlus() {
    this.value++;    
  }
}