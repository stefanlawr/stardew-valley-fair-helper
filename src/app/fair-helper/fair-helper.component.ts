import { Star, Category, Entry, Items, Info } from './fair-helper.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fair-helper',
  templateUrl: './fair-helper.component.html',
  styleUrls: ['./fair-helper.component.scss'],
})
export class FairHelperComponent implements OnInit {
  srcResult: any;
  selected: any;

  LOADED_ITEMS: Entry[] = [
    { id: 1, rarity: 0, name: '', category: '', points: 0, location: '' },
    { id: 2, rarity: 0, name: '', category: '', points: 0, location: '' },
    { id: 3, rarity: 0, name: '', category: '', points: 0, location: '' },
    { id: 4, rarity: 0, name: '', category: '', points: 0, location: '' },
    { id: 5, rarity: 0, name: '', category: '', points: 0, location: '' },
    { id: 6, rarity: 0, name: '', category: '', points: 0, location: '' },
    { id: 7, rarity: 0, name: '', category: '', points: 0, location: '' },
    { id: 8, rarity: 0, name: '', category: '', points: 0, location: '' },
    { id: 9, rarity: 0, name: '', category: '', points: 0, location: '' },
  ];

  ITEMS = Items;
  INFO = Info;

  STARS: Star[] = [
    { rarity: 0, text: 'No Star' },
    { rarity: 1, text: 'Silver' },
    { rarity: 2, text: 'Gold' },
    { rarity: 4, text: 'Iridium' },
  ];

  CATEGORIES: Category[] = [
    { id: 'cat_0', text: 'Animal Products' },
    { id: 'cat_1', text: 'Artisan Goods' },
    { id: 'cat_2', text: 'Cooked Items' },
    { id: 'cat_3', text: 'Fish' },
    { id: 'cat_4', text: 'Forage & Flowers' },
    { id: 'cat_5', text: 'Fruits' },
    { id: 'cat_6', text: 'Gems & Minerals' },
    { id: 'cat_7', text: 'Vegetables' },
    { id: 'cat_8', text: 'No Category' },
  ];

  constructor() {}

  ngOnInit() {
    console.log(this.ITEMS[0][1]);
  }

  foo(event: any) {
    console.log({ event });
    console.log(this.selected);
  }

  /**
   *  Allows for Angular Material button to accept inputs of type file
   */
  onFileSelected() {
    const inputNode: any = document.querySelector('#file');

    if (typeof FileReader !== 'undefined') {
      const reader = new FileReader();
      reader.readAsText(inputNode.files[0]);

      reader.onload = (e: any) => {
        this.srcResult = e.target.result;
        console.log(this.srcResult);
      };
    }
  }
}
