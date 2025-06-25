import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';


import { ChartConfiguration,ChartType } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  standalone : true,
  imports: [CommonModule,NgChartsModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {
doughnutChartLabels = ['Pending', 'In Progress', 'Completed'];
  doughnutChartData = {
    labels: this.doughnutChartLabels,
    datasets: [{ data: [7, 5, 2], backgroundColor: ['#8e44ad', '#3498db', '#27ae60'] }]
  };
  doughnutChartType: ChartType = 'doughnut';

  barChartLabels = ['Low', 'Medium', 'High'];
  barChartData = {
    labels: this.barChartLabels,
    datasets: [{
      label: 'Tasks',
      data: [5, 6, 8],
      backgroundColor: ['#27ae60', '#f39c12', '#e74c3c']
    }]
  };
  barChartType: ChartType = 'bar';

  recentTasks = [
  { name: 'Develop Product Review System', status: 'Pending', priority: 'Low', createdOn: '17th Mar 2025' },
  { name: 'Build Feedback Form Module', status: 'Pending', priority: 'High', createdOn: '17th Mar 2025' },
  { name: 'Implement Notification System', status: 'Pending', priority: 'Low', createdOn: '17th Mar 2025' },
  { name: 'Migrate Database to MongoDB Atlas', status: 'Completed', priority: 'Medium', createdOn: '17th Mar 2025' },
  { name: 'Develop Expense Tracker Module', status: 'Pending', priority: 'Low', createdOn: '17th Mar 2025' },
  { name: 'Design Homepage Banner', status: 'Pending', priority: 'Medium', createdOn: '17th Mar 2025' },
  { name: 'Write Technical Documentation', status: 'Pending', priority: 'Medium', createdOn: '17th Mar 2025' }
];

}
