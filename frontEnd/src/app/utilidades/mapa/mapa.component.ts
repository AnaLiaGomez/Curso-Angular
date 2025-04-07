import { Component, Inject, PLATFORM_ID, AfterViewInit } from '@angular/core'; 
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-mapa',
  standalone: true,
  templateUrl: './mapa.component.html',
  styleUrl: './mapa.component.css'
})
export class MapaComponent implements AfterViewInit {

  constructor(@Inject(PLATFORM_ID) private platformId: any) {}

  //ejecuta el mapa dentro del navegador
  async ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      const L = await import('leaflet');

      const map = L.map('map').setView([16.7370, -92.6376], 13) //latitud San Cristobal

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
      }).addTo(map);
    }
  }
}
