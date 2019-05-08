import { Component, ViewChild } from "@angular/core";

import { SignaturePad } from 'angular2-signaturepad/signature-pad';

@Component({
  selector: 'signer-comp',
  templateUrl: 'signer.component.html',
  styleUrls: ['./signer.component.scss']
})
export class SignerComponent {
  //  npm install angular-signature-pad --save  <-This doesn't work
  //  https://github.com/BioPhoton/angular-signature-pad
  //  We using this instead -> npm install angular2-signaturepad --save
  @ViewChild(SignaturePad) public signaturePad: SignaturePad;

  lastChange = [];

  options = {
    canvasWidth: "500",
    canvasHeight: "400",
    penColor: "#333",
    backgroundColor: "#fafafa"
  }
  public _signature: any = null;
  public propagateChange: Function = null;

  constructor() {
  }
  
  get signature(): any {
    return this._signature;
  }
  
  public registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  set signature(value: any) {
    this._signature = value;
    console.log('set signature to ' + this._signature);
    console.log('signature data :');
    console.log(this.signaturePad.toData());
    // this.propagateChange(this.signature);
  }

  public drawComplete(): void {
    console.log("aca vieeneee");
    this.signature = this.signaturePad.toDataURL('image/jpeg', 0.5);
    console.log("ya fue", this.signature, typeof this.signature);
  }

  drawBegin(){
    
  }

}