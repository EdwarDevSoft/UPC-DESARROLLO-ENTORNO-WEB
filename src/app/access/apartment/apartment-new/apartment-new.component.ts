import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-apartment-new',
  templateUrl: './apartment-new.component.html',
  styleUrls: ['./apartment-new.component.css']
})
export class ApartmentNewComponent implements OnInit {

  constructor(
    private fb: FormBuilder
  ) { }

  apartmentForm = this.fb.group({
    tipo: ['', Validators.required],
    nombre: ['', Validators.required],
    area: [0, Validators.required],
    piso: [0, Validators.required]
  })

  __onSubmit() {
    if(this.apartmentForm.valid) {
      console.log(this.apartmentForm.value);
    } else {
      alert("Formulario no valido...");
    }
  }

  ngOnInit(): void {
  }

}
