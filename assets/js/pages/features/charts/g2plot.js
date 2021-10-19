var recd1 = document.getElementById('recd'); 
var disp1 = document.getElementById('disp'); 
var plat1 = document.getElementById('plat'); 
var acc1 = document.getElementById('acc'); 
var per1 = document.getElementById('per'); 
var lic1 = document.getElementById('lic'); 
var form1 = document.getElementById('form'); 
var leg1 = document.getElementById('leg'); 
var gob1 = document.getElementById('gob'); 


var recd = parseFloat(recd1.innerHTML);
var disp = parseFloat(disp1.innerHTML);
var plat = parseFloat(plat1.innerHTML);
var acc = parseFloat(acc1.innerHTML);
var per = parseFloat(per1.innerHTML); 
var lic = parseFloat(lic1.innerHTML);
var form = parseFloat(form1.innerHTML);
var leg = parseFloat(leg1.innerHTML);
var gob = parseFloat(gob1.innerHTML);

console.log(acc);

const data = [
    {
      "Categoría": "Prod de Datos",
      "Puntaje": recd,
      "type": "Puntaje"
    },
    {
      "Categoría": "Disponibilidad",
      "Puntaje": disp,
      "type": "Puntaje"
    },
    {
      "Categoría": "Plataformas",
      "Puntaje": plat,
      "type": "Puntaje"
    },
    {
      "Categoría": "Acceso",
      "Puntaje": acc,
      "type": "Puntaje"
    },
    {
      "Categoría": "Actualización",
      "Puntaje": per,
      "type": "Puntaje"
    },
    {
      "Categoría": "Licencia",
      "Puntaje": lic,
      "type": "Puntaje"
    },
    {
      "Categoría": "Formatos",
      "Puntaje": form,
      "type": "Puntaje"
    },
    {
      "Categoría": "Legibilidad",
      "Puntaje": leg,
      "type": "Puntaje"
    },
    {
      "Categoría": "Gobernanza",
      "Puntaje": gob,
      "type": "Puntaje"
    },{
      "Categoría": "Prod de Datos",
      "Puntaje": recd,
      "type": "Puntaje"
    },
    {
      "Categoría": "Disponibilidad",
      "Puntaje": disp,
      "type": "Puntaje"
    },
    {
      "Categoría": "Plataformas",
      "Puntaje": plat,
      "type": "Puntaje"
    },
    {
      "Categoría": "Acceso",
      "Puntaje": acc,
      "type": "Puntaje"
    },
    {
      "Categoría": "Actualización",
      "Puntaje": per,
      "type": "Puntaje"
    },
    {
      "Categoría": "Licencia",
      "Puntaje": lic,
      "type": "Puntaje"
    },
    {
      "Categoría": "Formatos",
      "Puntaje": form,
      "type": "Puntaje"
    },
    {
      "Categoría": "Legibilidad",
      "Puntaje": leg,
      "type": "Puntaje"
    },
    {
      "Categoría": "Gobernanza",
      "Puntaje": gob,
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


