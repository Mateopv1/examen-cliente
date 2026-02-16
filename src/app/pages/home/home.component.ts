import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeriesService } from '../../services/series.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  seriesService = inject(SeriesService);
  arrSeries: any[] = [];

  ngOnInit() {
    this.seriesService.getAll().subscribe((data: any) => {
      this.arrSeries = data;
    });
  }
}