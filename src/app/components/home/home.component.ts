import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BikeService } from 'src/app/services/bike.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  models: string[] = [
    'Globo MTB 29 Full Suspension',
    'Globo MYB Carbon Fiver Race',
    'Globo Time Trial Race',
    'Globo 589',
    'Globo Magic Mistic Bike'
  ];
  //bikeForm: FormGroup ;
  validMessage: string = '';

  bikeForm = new FormGroup({});
  constructor(private bikeService: BikeService) {

  }

  ngOnInit(): void {
    this.bikeForm = new FormGroup({
      name: new FormControl('', Validators.pattern(/^([a-z]|[A-Z]|\s){3,50}$/)),
      email: new FormControl('', Validators.email),
      phone: new FormControl('', Validators.pattern(/^([0-9]){6,10}$/)),
      model: new FormControl('', Validators.required),
      serialNumber: new FormControl('', Validators.pattern(/^([0-9]){6,30}$/)),
      purchasePrice: new FormControl('', Validators.min(1)),
      purchaseDate: new FormControl('', Validators.pattern(/^(0[1-9]|1[0-9]|2[0-9]|3[0-1])[-](0[1-9]|(1[0-2]))[-](2[0-9][0-9][0-9])$/)),
      contact: new FormControl('', Validators.pattern(/^((\btrue\b)|(\bfalse\b))$/))
    })

  }

  submitRegistration(): void {
    console.log('enviaste el formulario')
    if (this.bikeForm.valid) {
      this.validMessage = 'Su garantia de bicicleta fue registrada correctamente';
      this.bikeService.createdBikeRegistration(this.bikeForm.value).subscribe(
        data => {
          this.bikeForm.reset();
          return true;
        }
      )
    } else {
      this.validMessage = 'Por favor completa el formulario ';
    }
    setTimeout(() => this.validMessage = '', 3000);
  }

}
