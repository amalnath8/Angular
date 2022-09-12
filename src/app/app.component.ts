import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private fb: FormBuilder) {}
  submit = false;
  registrationForm = this.fb.group({
    firstname: ['Amal', Validators.required],
    lastname: ['',Validators.required],
    phone: ['',[Validators.required,Validators.pattern('[0-9]{10}')]],
    email: ['',[Validators.required,Validators.email]],
  });
  get f() {
    return this.registrationForm.controls;
  }
  onsubmit() {
    this.submit = true;
    console.log('clicked');
    console.log('f', this.f);
  }

  //itle = 'ang-test';
  // ngOnInit() {}
}
