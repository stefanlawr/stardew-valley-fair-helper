import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fair-helper',
  templateUrl: './fair-helper.component.html',
  styleUrls: ['./fair-helper.component.scss']
})
export class FairHelperComponent implements OnInit {
  srcResult: any;

  constructor() { }

  ngOnInit() {
  }

  /**
   *  Allows for Angular Material button to accept inputs of type file
   */
  onFileSelected() {
    const inputNode: any = document.querySelector('#file');

    if (typeof (FileReader) !== 'undefined') {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        this.srcResult = e.target.result;
      };

      reader.readAsArrayBuffer(inputNode.files[0]);
    }
  }

}
