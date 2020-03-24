import { Component, OnInit } from '@angular/core';
import { ListDataService } from 'src/app/services/list-data/list-data.service';
import { ItemInterface } from 'src/model/item.interface';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {

  list: ItemInterface[] = [];
  foundId: ItemInterface[] = [];
  notFoundId: ItemInterface[] = [];
  searchResult: string[] = [];
  searchBeginResult: string[] = [];

  constructor(private readonly listDataService: ListDataService) { }

  ngOnInit() {
    this.list = this.listDataService.getListData();
    this.foundId = this.findById(this.list, 1);
    this.notFoundId = this.findById(this.list, 0);

    /*
      La mérthode map permet de transformer un tableau d'objet en un tableau d'objet différents
      Ici on transforme un tableau d'ItemInterface en tableau de string.
    */  
    let listStr: string[] = this.list.map((item) => item.description);
    this.searchResult = this.search(listStr, 'bla');
    this.searchBeginResult = this.searchBegin(listStr, 'bla');
    console.log('found id :', this.foundId);
    console.log('not found id :', this.notFoundId);
    console.log('search result :', this.searchResult);
    console.log('search begin result :', this.searchBeginResult);
  }

  findById(items: ItemInterface[], id: number): ItemInterface[] {
    // la méthode filter permet de filtrer un tableau d'élément suivant une condition
    // si la condition est validée, l'élément est conservé, sinon il est retirer
    // attention cette méthode retourne un tableau
    // la méthode find est similaire mais retourne un élément
    return items.filter((item) => item.id === id); 
  }

  search(items: string[], s: string): string[] {
    /*
      C'est pareil ici, on utilise la méthoce filter pour filtrer un tableau d'élément.
      La méthode includes retourne un booléen, elle retourne vrai si la chaîne 
      de caractère contient celle passée en paramètre.
      Cette méthode est une méthode de l'API JS, c'est une méthode de la classe String.
    */
    return items.filter((item) => item.toLowerCase().includes(s.toLowerCase()));
  }

  searchBegin(items: string[], s: string): string[] {
    /*
      On veut ici récupérer uniquement les chaînes de caractères 
      qui commencent par la chaîne passée en paramètre.
    */
    const len = s.length; // On récupère la taille de la chaîne passée en apramètre

    /*
      On veut ensuite filtrer ce tableau de chaîne de caractère.
    */
    return items.filter((item) => {
      const begining = item.substr(0, len); // On récupère le début de la chaîne courrante
      /*
        Pour information, la méthode substr (méthode API JS de la classe String) 
        permet de récupérer une sous chaîne de la chaîne de caractères en question.
        Le premier paramètre correspond à l'indice de début et le suivant, 
        la taille de la sous chaîne souhaitée.

        La méthode toLowerCase() (méthode API JS de la classe String) 
        permet de transformer toutes les majuscules de la chaîne en minuscules.
      */

      // On vérifie qu'elle est égale à la chaîne passée en paramètre
      return begining.toLowerCase() === s.toLowerCase(); 
    });
  }

}
