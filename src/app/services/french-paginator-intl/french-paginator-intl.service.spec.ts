import { TestBed } from '@angular/core/testing';

import { FrenchPaginatorIntlService } from './french-paginator-intl.service';

describe('FrenchPaginatorIntlService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FrenchPaginatorIntlService = TestBed.get(FrenchPaginatorIntlService);
    expect(service).toBeTruthy();
  });
});
