import { Component, OnInit } from "@angular/core";
import { ChartType, ChartOptions } from "chart.js";
import {
  SingleDataSet,
  Label,
  monkeyPatchChartJsLegend,
  monkeyPatchChartJsTooltip
} from "ng2-charts";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  // Pie
  public pieChartOptions: ChartOptions = {
    responsive: true
  };
  public chartColors: Array<any> = [
    {
      backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C", "#949FB1", "#4D5360"],
      hoverBackgroundColor: [
        "#FF5A5E",
        "#5AD3D1",
        "#FFC870",
        "#A8B3C5",
        "#616774"
      ],
      borderWidth: 2
    }
  ];
  public pieChartLabels: Label[] = [
    ["Download", "Sales"],
    ["In", "Store", "Sales"],
    "Mail Sales"
  ];
  public pieChartData: SingleDataSet = [300, 500, 100, 200];
  public pieChartType: ChartType = "pie";
  public pieChartLegend = true;
  public pieChartPlugins = [];

  constructor() {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }

  p;

  ngOnInit() {}
}
