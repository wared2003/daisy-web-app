import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from "@angular/material/dialog";
import {UntypedFormBuilder, UntypedFormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-item-form',
  templateUrl: './add-item-form.component.html',
  styleUrls: ['./add-item-form.component.scss']
})
export class AddItemFormComponent implements OnInit {

  isLinear = false;
  firstFormGroup!: UntypedFormGroup;
  secondFormGroup!: UntypedFormGroup;

  constructor(public dialogRef: MatDialogRef<AddItemFormComponent>, private _formBuilder: UntypedFormBuilder) { }



  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
  }

  onScanSuccess(e: any){
    console.log(e)
  }
}