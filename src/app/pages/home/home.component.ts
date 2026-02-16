import { Component, inject, OnInit } from '@angular/core';
import { SeriesService } from '../../services/series.service';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [], 
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  private seriesService = inject(SeriesService); 
  arrSeries: any[] = [];

  ngOnInit() {
    this.seriesService.getAll().subscribe((data: any) => {
      this.arrSeries = data;
    });
  }
}