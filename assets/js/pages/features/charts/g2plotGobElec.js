

const data = [
    {
      "ins": "CIV",
      "puntaje": 90
    },
    {
      "ins": "MAGA",
      "puntaje": 85
    },
    {
      "ins": "MARN",
      "puntaje": 80
    },
];




const { Line } = G2Plot;
const LinePlot = new Line('container', {
  data,
  isGroup: true,
  xField: 'ins',
  yField: 'puntaje',
  seriesField: 'ins',
  smooth: true,
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