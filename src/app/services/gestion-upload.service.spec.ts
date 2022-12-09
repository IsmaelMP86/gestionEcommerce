import { TestBed } from '@angular/core/testing';

import { GestionUploadService } from './gestion-upload.service';

describe('GestionUploadService', () => {
  let service: GestionUploadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionUploadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
