import { WHITE_ON_BLACK_CSS_CLASS } from '@angular/cdk/a11y/high-contrast-mode/high-contrast-mode-detector';
import { Component, OnInit } from '@angular/core';
import {  ChartData, ChartOptions, Color } from 'chart.js';
import { IntervenantService } from 'src/app/services/intervenant-service.service';


@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {
   nbrCl:any ;
   nbrF:any;
   c:ChartData;
  salesData: ChartData<'line'> = {
    labels: ['Intervenants'],
    datasets: [
      { label: 'Fournisseur', data: [], tension: 0.1 },
      { label: 'Clients', data: [], tension: 0.1 },
    
    ],
  };
  chartOptions: ChartOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Intervenants Par Type',
      },
    },
  };
  
  constructor(private iService:IntervenantService){
    
  }
  ngOnInit(){
    this.getNbrClients();
    this.getNbrFournisseurs();
  }
  getNbrClients():any{
    this.iService.nbrClients().subscribe(
      (response: number) => {
        this.nbrCl = response;
        console.log(this.nbrCl);
        this.salesData.datasets[1].data.push(this.nbrCl);
         });
  }
  getNbrFournisseurs():any{
    this.iService.nbrFournisseurs().subscribe(
      (response: number) => {
        this.nbrF = response;
        console.log(this.nbrF);
        this.salesData.datasets[0].data.push(this.nbrF);
         });
  }
}
