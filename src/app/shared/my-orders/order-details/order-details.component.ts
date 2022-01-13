import { Component, OnInit } from '@angular/core';

declare const L: any;

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {
  title = 'locationApp';


  constructor() { }

  ngOnInit(): void {
    if (!navigator.geolocation) {
      console.log('location is not supported');

    }
    navigator.geolocation.getCurrentPosition((position) => {


      const coords = position.coords;
      const latLong = [coords.latitude, coords.longitude];

      console.log(
        `lat: ${position.coords.latitude}, lon: ${position.coords.longitude}`
      );
      let mymap = L.map('map').setView(latLong, 13);
      L.tileLayer(
        'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoidmlwdWxrdW1hciIsImEiOiJja3hmcGJ6a20xcnNsMnBwZ3JicDNmY24zIn0.RW7ZDhlv0jpUftN4TKf61Q', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        // zoomControl: false,
        accessToken: 'your.mapbox.access.token'
      }).addTo(mymap);

      let marker = L.marker(latLong).addTo(mymap);

      marker.bindPopup('<b>Hi</b>').openPopup();

      let popup = L.popup()
        .setLatLng(latLong)
        .setContent('Me')
        .openOn(mymap);

    });
    this.watchPosition();

  }
  watchPosition() {
    let desLat = 0;
    let desLon = 0;
    let id = navigator.geolocation.watchPosition(
      (position) => {
        console.log(
          `lat: ${position.coords.latitude}, lon: ${position.coords.longitude}`
        );
        if (position.coords.latitude === desLat) {
          navigator.geolocation.clearWatch(id);
        }
      },
      (err) => {
        console.log(err);
      },
      {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 60000,
      }
    ); 
  }
}               