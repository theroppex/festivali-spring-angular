import { TestBed, inject } from '@angular/core/testing';

import { OmdbMovieService } from './omdb-movie.service';

describe('OmdbMovieService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OmdbMovieService]
    });
  });

  it('should be created', inject([OmdbMovieService], (service: OmdbMovieService) => {
    expect(service).toBeTruthy();
  }));
});
