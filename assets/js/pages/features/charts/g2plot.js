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


import { Column } from '@antv/g2plot';

const data = [
  {
    name: 'London',
    月份: 'Jan.',
    月均降雨量: 18.9,
  },
  {
    name: 'London',
    月份: 'Feb.',
    月均降雨量: 28.8,
  },
  {
    name: 'London',
    月份: 'Mar.',
    月均降雨量: 39.3,
  },
  {
    name: 'London',
    月份: 'Apr.',
    月均降雨量: 81.4,
  },
  {
    name: 'London',
    月份: 'May',
    月均降雨量: 47,
  },
  {
    name: 'London',
    月份: 'Jun.',
    月均降雨量: 20.3,
  },
  {
    name: 'London',
    月份: 'Jul.',
    月均降雨量: 24,
  },
  {
    name: 'London',
    月份: 'Aug.',
    月均降雨量: 35.6,
  },
  {
    name: 'Berlin',
    月份: 'Jan.',
    月均降雨量: 12.4,
  },
  {
    name: 'Berlin',
    月份: 'Feb.',
    月均降雨量: 23.2,
  },
  {
    name: 'Berlin',
    月份: 'Mar.',
    月均降雨量: 34.5,
  },
  {
    name: 'Berlin',
    月份: 'Apr.',
    月均降雨量: 99.7,
  },
  {
    name: 'Berlin',
    月份: 'May',
    月均降雨量: 52.6,
  },
  {
    name: 'Berlin',
    月份: 'Jun.',
    月均降雨量: 35.5,
  },
  {
    name: 'Berlin',
    月份: 'Jul.',
    月均降雨量: 37.4,
  },
  {
    name: 'Berlin',
    月份: 'Aug.',
    月均降雨量: 42.4,
  },
];

const stackedColumnPlot = new Column('container2', {
  data,
  isGroup: true,
  xField: 'Categorías',
  yField: 'Puntaje',
  seriesField: 'name',
  /** 设置颜色 */
  //color: ['#1ca9e6', '#f88c24'],
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