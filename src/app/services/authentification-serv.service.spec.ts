import { TestBed } from '@angular/core/testing';

import { AuthentificationServService } from './authentification-serv.service';

describe('AuthentificationServService', () => {
  let service: AuthentificationServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthentificationServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
