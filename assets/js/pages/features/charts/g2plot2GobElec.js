var pres1 = document.getElementById('pres'); 
var emer1 = document.getElementById('emer'); 
var amp1 = document.getElementById('amp'); 
var inte1 = document.getElementById('inte'); 
var tran1 = document.getElementById('tran'); 
var intg1 = document.getElementById('intg'); 


var pres = parseFloat(pres1.innerHTML);
var emer = parseFloat(emer1.innerHTML);
var amp = parseFloat(amp1.innerHTML);
var inte = parseFloat(inte1.innerHTML);
var tran = parseFloat(tran1.innerHTML); 
var intg = parseFloat(intg1.innerHTML);



const data = [
    {
      "Categoría": "Presencia en Internet",
      "Puntaje": pres,
      "type": "Puntaje"
    },
    {
      "Categoría": "Emergente",
      "Puntaje": emer,
      "type": "Puntaje"
    },
    {
      "Categoría": "Ampliado",
      "Puntaje": amp,
      "type": "Puntaje"
    },
    {
      "Categoría": "Interactivo",
      "Puntaje": inte,
      "type": "Puntaje"
    },
    {
      "Categoría": "Transaccional",
      "Puntaje": tran,
      "type": "Puntaje"
    },
    {
      "Categoría": "Integrado",
      "Puntaje": intg,
      "type": "Puntaje"
    },
    //Aqui el puntaje esperado
    /*
    {
        "Categoría": "Prod de Datos",
        "Puntaje": 8,
        "type": "Puntaje Esperado"
      },
      {
        "Categoría": "Disponibilidad",
        "Puntaje": 8,
        "type": "Puntaje Esperado"
      },
      {
        "Categoría": "Plataformas",
        "Puntaje": 8,
        "type": "Puntaje Esperado"
      },
      {
        "Categoría": "Acceso",
        "Puntaje": 8,
        "type": "Puntaje Esperado"
      },
      {
        "Categoría": "Actualización",
        "Puntaje": 8,
        "type": "Puntaje Esperado"
      },
      {
        "Categoría": "Licencia",
        "Puntaje": 8,
        "type": "Puntaje Esperado"
      },
      {
        "Categoría": "Formatos",
        "Puntaje": 8,
        "type": "Puntaje Esperado"
      },
      {
        "Categoría": "Legibilidad",
        "Puntaje": 8,
        "type": "Puntaje Esperado"
      },
      {
        "Categoría": "Gobernanza",
        "Puntaje": 8,
        "type": "Puntaje Esperado"
      }*/
];


const { Column } = G2Plot;


const stackedColumnPlot = new Column('container2', {
  data,
  isGroup: true,
  xField: 'Categoría',
  yField: 'Puntaje',
  seriesField: 'type',
  /** 设置颜色 */
  color: ['#1aac8a', '#40c7a7'],
  /** 设置间距 */
  // marginRatio: 0.1,
  label: {
    // 可手动配置 label 数据标签位置
    position: 'middle', // 'top', 'middle', 'bottom'
    // 可配置附加的布局方法
    layout: [
      // 柱形图数据标签位置自动调整
      { type: 'interval-adjust-position' },
      // 数据标签防遮挡
      { type: 'interval-hide-overlap' },
      // 数据标签文颜色自动调整
      { type: 'adjust-color' },
    ],
  },
});

stackedColumnPlot.render();


