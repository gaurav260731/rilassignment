import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import {} from 'googlemaps';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-googlemap',
  templateUrl: './googlemap.component.html',
  styleUrls: ['./googlemap.component.css']
})
export class GooglemapComponent implements AfterViewInit, OnInit {
  @ViewChild('mapWrapper', {static: false}) mapElement: ElementRef;
  map: google.maps.Map;
  chartdata: string[] = [];
  finalval = [];

  data = [
    {
      'name': 'India Post Office Koramangala VI Block',
      'address': 'Kormagala',
      'description' : 'Post Office',
      'lat' : '12.9383217',
      'lon' : '77.6191351'
    },
    {
      'name': 'Chinese Center',
      'address': 'Kormangala',
      'description' : 'Have good and variety of dishes',
      'lat' : '12.9323804',
      'lon' : '77.6154658'
    },
    {
      'name': 'Mark & Spencer',
      'address': 'Kormangala',
      'description' : 'Global Market and Spencer',
      'lat' : '12.9385236',
      'lon' : '77.6289084'
    },
    {
      'name': 'Apollo Hospital',
      'address': 'Kormangala',
      'description' : 'Apollo Cradle Maternity & Children\'s Hospital in Koramangala, Bangalore',
      'lat' : '12.9367977',
      'lon' : '77.6205506'
    },
  ];

  ngAfterViewInit() {
    this.initializeMap();
  }

  ngOnInit() {
  }

  initializeMap() {
    const infowindow = new google.maps.InfoWindow();
    const lngLat = new google.maps.LatLng(12.9383217, 77.6191351);
    const mapOptions: google.maps.MapOptions = {
      center: lngLat,
      zoom: 14,
      streetViewControl: true,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    const map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    for (const val of this.data) {
      this.doughnutChartLabels.push(val.name);
      this.doughnutChartData.push(parseFloat(val.lat));
      displayLocation(val);
    }

    // tslint:disable-next-line: radix
    function displayLocation(location) {
      const content =   '<div class="infoWindow"><strong>'  + location.name + '</strong>'
      + '<br/>'     + location.address
      + '<br/>'     + location.description + '</div>';
      const latLng = new google.maps.LatLng(parseFloat(location.lat), parseFloat(location.lon));
      const marker = new google.maps.Marker({
        // tslint:disable-next-line: object-literal-shorthand
        map: map,
        position: latLng,
        title: location.name
        });
      google.maps.event.addListener(marker, 'click', function() {
        infowindow.setContent(content);
        infowindow.open(map, marker);
        });
      }
  }
      // tslint:disable-next-line: member-ordering
    public doughnutChartLabels: Label[] = [];
    // tslint:disable-next-line: member-ordering
    public doughnutChartData: number[] = [];
    // tslint:disable-next-line: member-ordering
    public doughnutChartType = 'doughnut';
    // tslint:disable-next-line: member-ordering
    public chartColors: Array<any> = [
      {
        backgroundColor: ['#F7464A', '#46BFBD', '#FDB45C', '#949FB1'],
        hoverBackgroundColor: ['#FF5A5E', '#5AD3D1', '#FFC870', '#A8B3C5'],
        borderWidth: 2,
      }
    ];

    // events
    public chartClicked(e: any): void {
      console.log(e);
    }

    public chartHovered(e: any): void {
    }
}




