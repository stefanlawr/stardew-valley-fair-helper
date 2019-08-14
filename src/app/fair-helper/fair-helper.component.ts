import { Star } from './fair-helper.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fair-helper',
  templateUrl: './fair-helper.component.html',
  styleUrls: ['./fair-helper.component.scss']
})
export class FairHelperComponent implements OnInit {
  srcResult: any;

  STARS: Star[] = [
    {rarity: 0, text: 'No Star'},
    {rarity: 1, text: 'Silver'},
    {rarity: 2, text: 'Gold'},
    {rarity: 3, text: 'Iridium'}
  ];

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
      reader.readAsText(inputNode.files[0]);

      reader.onload = (e: any) => {
        this.srcResult = e.target.result;
        console.log(this.srcResult);
      };
    }
  }
}
