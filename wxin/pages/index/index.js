//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      '/images/pic1.jpg',
      '/images/pic2.jpg',
      '/images/pic3.jpg',
      '/images/pic4.jpg',
      '/images/pic5.jpg'
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    proList:[{
      url: '/images/moganna.jpg',
      title:'堕落天使',
      desc:'莫甘娜',
      vip:'/images/vip.png'
    },{
        url: '/images/guanghui.jpg',
        title: '拉克丝',
        desc: '光辉女郎',
        vip: '/images/vip.png'
      }, {
        url: '/images/datou.jpg',
        title: '大头',
        desc: '大发明家',
        vip: '/images/vip.png'
      }, {
        url: '/images/gailong.jpg',
        title: '盖龍',
        desc: '德玛西亚之力',
        vip: '/images/vip.png'
      }]
  },
  onLoad: function () {
  },
  toDetail:(e)=>{
    console.log(e.currentTarget.dataset.index)
  }
})
