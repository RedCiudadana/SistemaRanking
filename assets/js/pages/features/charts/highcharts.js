
Highcharts.setOptions({
  lang: {
          loading: 'Cargando...',
          months: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
          weekdays: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
          shortMonths: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
          exportButtonTitle: "Exportar",
          printButtonTitle: "Importar",
          rangeSelectorFrom: "Desde",
          rangeSelectorTo: "Hasta",
          rangeSelectorZoom: "Período",
          downloadPNG: 'Descargar imagen PNG',
          downloadJPEG: 'Descargar imagen JPEG',
          downloadPDF: 'Descargar imagen PDF',
          downloadSVG: 'Descargar imagen SVG',
          printChart: 'Imprimir',
          resetZoom: 'Reiniciar zoom',
          resetZoomTitle: 'Reiniciar zoom',
          thousandsSep: ",",
          decimalPoint: '.',
          viewFullscreen: "Ver en pantalla completa",
          viewData: "Ver datos de tabla",
          downloadCSV: 'Descargar CSV',
          downloadXLS: 'Descargar XLS',
          category: "Categoría"
      }        
});

Highcharts.chart('container', {

  title: {
      text: 'Puntaje por Institución 2021'
  },

  subtitle: {
      text: '--'
  },

  yAxis: {
      title: {
          text: 'Puntaje'
      }
  },

  xAxis: {
    categories: [
      'CIV',
      'MAGA',
      'MARN',
      'MCD',
      'MEM',
      'MIDES',
      'MINDEF',
      'MINECO',
      'MINEDUC',
      'MINEX',
      'MINFIN',
      'MINGOB',
      'MINTRAB',
      'MSPAS',
      'SAA',
      'SAAS',
      'SBS',
      'SCEP',
      'SCSPR',
      'SEGEPLAN',
      'SENABED',
      'SENACYT',
      'SEPAZ',
      'SEPREM',
      'SESAN',
      'SGP',
      'SIE',
      'SOSEP',
      'SPP',
      'SVET',
    ],
  },

  legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle'
  },

  plotOptions: {
      series: {
          label: {
              connectorAllowed: false
          },
          color: '#40c7a7'
          
      }
      
  },

  credits: {
    enabled: false
  },


  series: [{
      name: 'Institución',
      data: [90,85,80,75,70,65,60,55,50,45,40,35,30,25,20,15,10,5,0,90,85,80,75,70,65,60,55,50,45,40]
  }],

  responsive: {
      rules: [{
          condition: {
              maxWidth: 500
          },
          chartOptions: {
              legend: {
                  layout: 'horizontal',
                  align: 'center',
                  verticalAlign: 'bottom'
              }
          }
      }]
  }

});