import { Component, OnInit, AfterViewInit } from '@angular/core';
import Chart from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit, AfterViewInit {

  mLabel: any[];
  mReportArray: any[];

  ngAfterViewInit(): void {
    const myChartBar =  new Chart(document.getElementById('myChartBar'), {
      type: 'bar', // line, radar
      data: {
        labels: this.mLabel,
        datasets: this.mReportArray
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      }
    });

    const myChartLine =  new Chart(document.getElementById('myChartLine'), {
      type: 'line',
      data: {
        labels: this.mLabel,
        datasets: this.mReportArray
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      }
    });

    const myChartRadar = new Chart(document.getElementById('myChartRadar'), {
      type: 'radar',
      data: {
        labels: this.mLabel,
        datasets: this.mReportArray.reverse()
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      }
    });
  }

  constructor() { }

  ngOnInit() {
    this.dummyData();
  }

  
  dummyData() {
    this.mLabel = ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'];

    this.mReportArray = [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3, 10],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }
    ];
  }

}
