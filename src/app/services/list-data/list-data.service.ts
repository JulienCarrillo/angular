import { Injectable } from '@angular/core';
import { ItemInterface } from 'src/model/item.interface';

@Injectable()
export class ListDataService {

  private data: ItemInterface[] = [
    {id: 1, name: 'Oui', description: 'BlaBla', link: ''},
    {id: 2, name: 'Non', description: 'etBla', link: ''},
    {id: 3, name: 'Peut-être', description: 'bloblo', link: ''},
    {id: 4, name: 'Il y a moyen', description: 'Cela se peut-il', link: ''},
    {id: 5, name: 'Certainement', description: 'Il se pourrait', link: ''},
  ];

  constructor() { }

  getListData(): ItemInterface[] {
    return this.data;
  }
}
