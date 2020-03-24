import { Injectable } from '@angular/core';
import { MatPaginatorIntl } from '@angular/material/paginator';

/*
  Cette classe permet de Customiser le lagage du paginateur matérial
  Elle est injectée à la place de MatPaginateurIntl dans material.module.ts
  (cf. https://material.angular.io/components/paginator/api)
*/

@Injectable()
export class FrenchPaginatorIntlService extends MatPaginatorIntl {
  constructor() {
    super();
    this.itemsPerPageLabel = 'Éléments par page';
    this.nextPageLabel = 'Page suivange';
    this.previousPageLabel = 'Page précédente';
  }

 getRangeLabel = (page: number, pageSize: number, length: number) =>  {
    if (length === 0 || pageSize === 0) {
      return `0 sur ${length}`;
    }
    length = Math.max(length, 0);
    const startIndex = page * pageSize;
    const endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;
    return `${startIndex + 1} - ${endIndex} sur ${length}`;
  }
}