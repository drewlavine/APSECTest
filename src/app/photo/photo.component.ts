import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {

  @Input() imgUrl: string = "";

  @Input() title: string = ""

  @Input() thumbnail: string = ""

  @Input() id: number = 0;



  constructor() { }

  ngOnInit(): void {
  }

}
