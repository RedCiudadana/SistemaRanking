var avance1 = document.getElementById('avance'); 
avance1 = avance1.innerHTML

var avance = parseFloat(avance1.innerHTML);

var restante=100 - avance;

const data = [
    {
      "ins": "Avance",
      "puntaje": 11.11
    },
    {
      "ins": "Restante",
      "puntaje": 98.89
    },
];




const { Pie } = G2Plot;
const LinePlot = new Pie('container', {
  data,
  isGroup: true,
  angleField: 'ins',
  colorField: 'puntaje',
  radius: 1,
  innerRadius: 0.6,
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
  
  LinePlot.render();