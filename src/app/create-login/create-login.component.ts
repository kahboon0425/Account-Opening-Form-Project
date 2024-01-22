import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-create-login',
  templateUrl: './create-login.component.html',
  styleUrls: ['./create-login.component.css']
})
export class CreateLoginComponent implements OnInit {
  // StrongPasswordRegx: RegExp = /^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\D*\d).{8,}$/;

  id: String = "Page1";
  registeredUser: any[][] = [];
  isVisible = false;
  isClick = false;
  userEmail = "";
  OTP = "";
  wrongOTP = "";
  otp1 = "";
  otp2 = "";
  otp3 = "";
  otp4 = "";
  otp5 = "";
  otp6 = "";
  disabledInputField = false;


  NGXS_FORM_NAME = 'account_opening.loginDetails';


  get email() {
    return this.registrationForm.controls.email;
  }

  get username() {
    return this.registrationForm.controls.username;
  }

  get password() {
    return this.registrationForm.controls.password;
  }

  get confirmPassword() {
    return this.registrationForm.controls.confirmPassword;
  }

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
  }

  // registrationForm = new FormGroup({
  //   email: new FormControl(''),
  //   username: new FormControl(''),
  //   password: new FormControl(''),
  //   confirmPassword: new FormControl('')
  // })

  registrationForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
    confirmPassword: ['', [Validators.required]],
  }, {validator: this.passwordValidator});

  passwordValidator(control: AbstractControl) {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');
    // if password and confirm password is not blank, and they are not equal to each other, return a mismatch error
    return password && confirmPassword && password.value != confirmPassword.value ?
      {'misMatch': true} :
      null;
  }

  onSubmit() {
    // console.log("hello");
    console.log(this.registrationForm.value);
    this.registeredUser.push([this.registrationForm.value.email, this.registrationForm.value.username, this.registrationForm.value.password, this.registrationForm.value.confirmPassword])
  }

  onClickNextButton(){
    this.isClick = true;

  }

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    if (this.OTP === "111111"){
      console.log('Button ok clicked!');
      this.isVisible = false;
      this.disabledInputField = true;
    }else{
      console.log("Wrong OTP number please try again!");
      this.wrongOTP = "Wrong OTP number please try again!";
      this.otp1 = "";
      this.otp2 = "";
      this.otp3 = "";
      this.otp4 = "";
      this.otp5 = "";
      this.otp6 = "";
      this.OTP = "";
    }



  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }

  move(event: any, previous: any, current: any, next: any) {
    console.log(event);
    console.log(current.value);
    this.OTP += current.value;
    // var pattern = /[0-9\+\-\ ]/;

    var length = current.value.length;
    var maxlength = current.getAttribute('maxlength');
    if (length == maxlength) {
      next.focus();
    }
  }

  // combineOTP(OTP:string){
  //   console.log(OTP);
  //   this.OTP += "1";
  // }

  // checkOTP() {
  //   if (this.enteredOTP === '11111') {
  //     console.log('Correct OTP! Hiding the model.');
  //     this.isModelVisible = false;
  //   } else {
  //     console.log('Incorrect OTP. Model remains visible.');
  //   }
  // }



}
