import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importante para *ngIf
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SeriesService } from '../../services/series.service';

@Component({
  selector: 'app-new',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule], 
  templateUrl: './new.component.html',
  styleUrl: './new.component.css'
})
export class NewComponent {
  private seriesService = inject(SeriesService);
  private router = inject(Router);

 
  serieForm = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(3)]),
    channel: new FormControl('', [Validators.required]),
    rating: new FormControl('', [Validators.required, Validators.min(0), Validators.max(10)])
  });

  onSubmit() {
    if (this.serieForm.valid) {
      this.seriesService.create(this.serieForm.value).subscribe((res: any) => {
    
        alert('¡Serie guardada! ID asignado: ' + res.id);
        this.router.navigate(['/home']);
      });
    }
  }
}