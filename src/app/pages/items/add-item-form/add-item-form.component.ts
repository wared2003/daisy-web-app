import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from "@angular/material/dialog";
import {UntypedFormBuilder, UntypedFormGroup, Validators} from '@angular/forms';
import { BarcodeFormat } from '@zxing/library';

@Component({
  selector: 'app-add-item-form',
  templateUrl: './add-item-form.component.html',
  styleUrls: ['./add-item-form.component.scss']
})
export class AddItemFormComponent implements OnInit {

  isLinear = false;
  firstFormGroup!: UntypedFormGroup;
  secondFormGroup!: UntypedFormGroup;
  allowedFormats: BarcodeFormat[] = [ BarcodeFormat.QR_CODE, BarcodeFormat.EAN_13, BarcodeFormat.CODE_128, BarcodeFormat.CODABAR];

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
    if (e){
      console.log(e)
      this.dialogRef.close();
    }
  }
}
