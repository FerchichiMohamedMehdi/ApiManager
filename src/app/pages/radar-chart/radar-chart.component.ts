import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { ApiService } from 'src/app/services/api-service.service';
@Component({
  selector: 'app-radar-chart',
  templateUrl: './radar-chart.component.html',
  styleUrls: ['./radar-chart.component.css']
})
export class RadarChartComponent implements OnInit{
    nbrPrototyped:any=0;
    nbrBlocked:any;
    nbrPublished:any;
    nbrDeprecated:any;
    nbrRetired:any;
  // Radar
  public radarChartOptions: ChartConfiguration['options'] = {
    responsive: true,
  };
  public radarChartLabels: string[] = [ 'Prototyped', 'Published', 'Blocked', 'Deprecated', 'Retired' ];

  public radarChartData: ChartData<'radar'> = {
    labels: this.radarChartLabels,
    datasets: [
      
      { data: [8,7,12,3,6], label: 'Api par Etat' },
    ]
  };
  public radarChartType: ChartType = 'radar';

  // events
  public chartClicked({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }
  constructor(private apiService : ApiService){}
  ngOnInit(): void {
    this.nbrPrototyped=5;
  }

}
