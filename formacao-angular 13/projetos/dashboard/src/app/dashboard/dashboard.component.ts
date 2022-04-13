import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { DadosService } from './dados.service';
declare var google: any; //forma de declaração para fazer a integração com a biblioteca externa que gera uma variavel global

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  private dados: any;

  constructor(private dadosService: DadosService) { }

  ngOnInit(): void {

    this.dadosService.obterDados().subscribe(
      dados => {
      this.dados = dados; 
      this.init();
    });
  }

  /**
   * Inicializa a API de graficos com delay de 1 segundo,
   * o que permite a integração da API com o angular
   * 
   * @return void
   */
   init(): void {
    if(typeof(google) !== 'undefined') {
      google.charts.load('current', {'packages':['corechart']});
      setTimeout(() => {
      	google.charts.setOnLoadCallback(this.exibirGraficos());
      }, 1000);
    }
  }

  exibirGraficos(): void{
    this.exibirPieChart();
    this.exibir3dPieChart();
    this.exibirDonutchart();
    this.exibirBarChart();
    this.exibirLineChart();
    this.exibirColumnChart();
  }

  /**
   * Exibe o grafico Pie Chart.
   * 
   * @return void
   */
  exibirPieChart(): void{
    const el = document.getElementById('pie_chart');
    const chart = new google.visualization.PieChart(el);

    chart.draw(this.obterDataTable(), this.obterOpcoes());
  }

  /**
   * Exibe o gráfico Pie Chart em 3D.
   * 
   * @return void
   */
  exibir3dPieChart(): void {
    const el = document.getElementById('3d_pie_chart');
    const chart = new google.visualization.PieChart(el);
    const opcoes = this.obterOpcoes();

    opcoes['is3D'] = true; // passar  essa opção para informar que será um 3d
    chart.draw(this.obterDataTable(), opcoes);
  } 
  
  /**
   * Exibe o gráfico Donut Chart 
   * 
   * @return void
   */
  exibirDonutchart(): void{
    const el = document.getElementById('donut_chart');
    const chart = new google.visualization.PieChart(el);
    const opcoes = this.obterOpcoes();

    opcoes['pieHole'] = 0.4;//opção que informa que será o tamanho do buraco no centro
    chart.draw(this.obterDataTable(), opcoes);
  }

  /**
   * exibe um gráfico Bar Chart
   * @return void
   */
  exibirBarChart(): void{
    const el = document.getElementById('bar_chart');
    const chart = new google.visualization.PieChart(el);

    chart.draw(this.obterDataTable(), this.obterOpcoes());
  }

  /**
   * Exibir o gráfico Line Chart
   * 
   * @return void
   */
   exibirLineChart(): void{
    const el = document.getElementById('line_chart');
    const chart = new google.visualization.LineChart(el);

    chart.draw(this.obterDataTable(), this.obterOpcoes());
  }

   /**
   * Exibir o gráfico Column Chart
   * 
   * @return void
   */
    exibirColumnChart(): void{
      const el = document.getElementById('column_chart');
      const chart = new google.visualization.ColumnChart(el);
  
      chart.draw(this.obterDataTable(), this.obterOpcoes());
    }

  /**
   * Cria e retorna o objeto DataTable da API de gráficos, 
   * responsavel por definir os dados do gráfico.
   * 
   * @return any
   */
  obterDataTable(): any{
    const data = new google.visualization.DataTable();

    data.addColumn('string', 'Mês');
    data.addColumn('number', 'Quantidade');
    data.addRows(this.dados);

    return data;
  }  

  /**
   * Retorna as opções do gráfico, que incluem o titulo 
   * e tamanho do gráfico.
   * 
   * @return any
   */
  obterOpcoes(): any{
    return{
      'title': 'Quantidade de cadastros primeiro semestre',
      'width': 400,
      'height': 300
    };
  }

}
