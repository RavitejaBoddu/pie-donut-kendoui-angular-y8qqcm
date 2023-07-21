import { Component } from '@angular/core';
import { LegendLabelsContentArgs } from '@progress/kendo-angular-charts';
@Component({
    selector: 'my-app',
    template: `
    <kendo-chart title="World Population by Broad Age Groups">
      <kendo-chart-legend position="bottom"></kendo-chart-legend>
      <kendo-chart-series>
        <kendo-chart-series-item
          type="donut"
          [data]="pieData"
          field="value"
          categoryField="category"
        >
        <kendo-chart-series-item-labels
            position="outsideEnd"
            color="#000"
            [content]="labelContent"
          >
          </kendo-chart-series-item-labels>
        </kendo-chart-series-item>
      </kendo-chart-series>
    </kendo-chart>
  `
})
export class AppComponent {
    public pieData: any[] = [
        { category: '0-14', value: 0.2545 },
        { category: '15-24', value: 0.1552 },
        { category: '25-54', value: 0.4059 },
        { category: '55-64', value: 0.0911 },
        { category: '65+', value: 0.0933 }
    ];

    constructor() {
        this.labelContent = this.labelContent.bind(this);
    }

    public labelContent(args: LegendLabelsContentArgs): string {
      const result = args.dataItem.category+ " years old: \n" + args.dataItem.value;
        return result;
    }
}
