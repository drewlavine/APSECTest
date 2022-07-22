import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../photos.service';
import { Photo } from '../photo';

@Component({
  selector: 'app-photos-list',
  templateUrl: './photos-list.component.html',
  styleUrls: ['./photos-list.component.css']
})
export class PhotosListComponent implements OnInit {

  loading: boolean = true;

  photos: Photo[] = [];

  constructor(
    private photoService: PhotosService
  ) { }

  ngOnInit(): void {
      this.photoService.loading$.subscribe((loading) => this.loading = loading);

      this.photoService.getPhotos().subscribe((photos: Photo[]) => {
        this.photos = photos
        this.photoService.loading = false;
      });
    }

}
