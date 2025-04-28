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

  // ejecuta el mapa dentro del navegador
  async ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      const L = await import('leaflet');

      const map = L.map('map').setView([16.7370, -92.6376], 13); // latitud San Cristobal

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
      }).addTo(map);

      let marcador: any = null; // guarda el marcador actual

      // evento que agrega un marcador único por clic
      map.on('click', (event: any) => {
        const lat = event.latlng.lat;
        const lng = event.latlng.lng;

        // elimina el marcador anterior si existe
        if (marcador) {
          map.removeLayer(marcador);
        }

        // crea un nuevo marcador
        marcador = L.marker([lat, lng])
          .addTo(map)
          .bindPopup(`Marcador:<br>Lat: ${lat.toFixed(5)}<br>Lng: ${lng.toFixed(5)}`)
          .openPopup();
      });
    }
  }
}
