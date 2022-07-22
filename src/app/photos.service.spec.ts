import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';

import { Photo } from './photo';
import {of} from 'rxjs';

import { PhotosService } from './photos.service';

describe('PhotosService', () => {
  let service: PhotosService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PhotosService]
    });
    service = TestBed.inject(PhotosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

describe('PhotosService', () => {
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let service: PhotosService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PhotosService]
    });
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new PhotosService(httpClientSpy);
  })

  it('#getPhotos should return value from observable', (done: DoneFn) => {
    const expectedPhotos = [
      {
        "albumId": 1,
        "id": 1,
        "title": "accusamus beatae ad facilis cum similique qui sunt",
        "url": "https://via.placeholder.com/600/92c952",
        "thumbnailUrl": "https://via.placeholder.com/150/92c952"
      },
      {
        "albumId": 1,
        "id": 2,
        "title": "reprehenderit est deserunt velit ipsam",
        "url": "https://via.placeholder.com/600/771796",
        "thumbnailUrl": "https://via.placeholder.com/150/771796"
      },
      {
        "albumId": 1,
        "id": 3,
        "title": "officia porro iure quia iusto qui ipsa ut modi",
        "url": "https://via.placeholder.com/600/24f355",
        "thumbnailUrl": "https://via.placeholder.com/150/24f355"
      },
      {
        "albumId": 1,
        "id": 4,
        "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
        "url": "https://via.placeholder.com/600/d32776",
        "thumbnailUrl": "https://via.placeholder.com/150/d32776"
      }
    ]
    httpClientSpy.get.and.returnValue(of(expectedPhotos));

    service.getPhotos().subscribe({
      next: (photos: Photo[]) => {
        expect(photos)
          .withContext('expected photos')
          .toEqual(expectedPhotos);
        done();
      },
      error: (err: Error) => done.fail
    })

    expect(httpClientSpy.get.calls.count())
    .withContext('one call')
    .toBe(1);
  })
})
