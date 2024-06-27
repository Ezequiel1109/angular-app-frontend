import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './products/components/product.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ProductComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-app version 18';
  
  enabled: boolean = false;

  courses: string[] = ['Angular','Java','Spring boot']

  setEnabled(): void{
    this.enabled = this.enabled? false : true;
    
    console.log('hemos hecho clic en setEnabled')
  }
}
