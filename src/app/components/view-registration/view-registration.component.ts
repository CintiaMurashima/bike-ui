import { Component,OnChanges, OnInit, SimpleChange } from '@angular/core';
import { ImagesService } from 'src/app/services/images.service';

@Component({
  selector: 'app-view-registration',
  templateUrl: './view-registration.component.html',
  styleUrls: ['./view-registration.component.css']
})
export class ViewRegistrationComponent implements OnChanges {
  images: any[] | undefined;
  filterBy: string = 'all';
  allImages: any[] = [];

  constructor(private ImagesService: ImagesService) { 
    this.allImages = this.ImagesService.getImages();
  }

  ngOnChanges(): void {

  }

}
