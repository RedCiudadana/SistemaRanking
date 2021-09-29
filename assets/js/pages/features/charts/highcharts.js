var recd1 = document.getElementById('recd'); 
var disp1 = document.getElementById('disp'); 
var plat1 = document.getElementById('plat'); 
var acc1 = document.getElementById('acc'); 
var per1 = document.getElementById('per'); 
var lic1 = document.getElementById('lic'); 
var form1 = document.getElementById('form'); 
var leg1 = document.getElementById('leg'); 
var gob1 = document.getElementById('gob'); 


var recd = parseInt(recd1.innerHTML);
var disp = parseInt(disp1.innerHTML);
var plat = parseInt(plat1.innerHTML);
var acc = parseInt(acc1.innerHTML);
var per = parseInt(per1.innerHTML); 
var lic = parseInt(lic1.innerHTML);
var form = parseInt(form1.innerHTML);
var leg = parseInt(leg1.innerHTML);
var gob = parseInt(gob1.innerHTML);



Highcharts.chart('container', {
    chart: {
      type: 'column'
    },
    title: {
      text: 'Indicadores de Evaluación - Datos Abiertos 2021 - Global '
    },
    subtitle: {
      text: ''
    },
    xAxis: {
      categories: [
        'Prod de Datos',
        'Disponibilidad',
        'Plataformas',
        'Acceso',
        'Actualización',
        'Licencia',
        'Formatos',
        'Legibilidad',
        'Gobernanza',
      ],
      crosshair: true
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Puntaje'
      }
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat: '<tr><td style="color:{series.color};padding:1rem">{series.name}: </td>' +
        '<td style="padding:1rem"><b>{point.y:.1f} puntos</b></td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0
      }
    },
    series: [{
        name: 'Puntaje Esperado',
        data: [7,7,7,7,7,7,7,7,7],
        color: '#91c9bc'
    },
        {
      name: 'Puntaje Actual',
      data: [recd, disp, plat, acc, per, lic, form, leg, gob],
      color: '#1aac8a'
  
    }

    ]
  });
  