/*
 * @Author: your name
 * @Date: 2021-01-27 17:29:01
 * @LastEditTime: 2021-02-24 12:20:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \offical-game\js\index.js
 */
var aboutCurrentIndex=0
var isAbout=[1,2,3]
var aboutDataList=['公司概况','投资管理','公司文化','成长历程','获奖情况']
var contactCurrentIndex=0
var isContact=[1,2,3,4]
var contactDataList=['海外合作','市场合作','商务合作','应聘咨询','客服专线']
var currentIndex=0
var timer
var bannerArray=['../img/banner.png','../img/banner.png']


/**
 * @description:关于我们的内容切换 
 * @param {*} index
 * @return {*}
 */
function  handleAboutThis(index){
  console.log(index);
  
        for(let k in isAbout){
          if(index==isAbout[k]){
            $('#aboutTab'+isAbout[k]).show()
            $('.about-content-title ul li').eq(isAbout[k]-1).css('border-bottom','3px solid #5e7ddb')
          }
          else{
            $('#aboutTab'+isAbout[k]).hide()
            $('.about-content-title ul li').eq(isAbout[k]-1).css('border-bottom','3px solid transparent')
          }
        }
} 
/**
 * @description: 联系我们内容切换
 * @param {*} index
 * @return {*}
 */
function handleContactThis(index){
  
  for(let k in isContact){
    if(index==isContact[k]){
      $('#contactTab'+isContact[k]).show()
      $('.contact-content-title ul li').eq(isContact[k]-1).css('border-bottom','3px solid #5e7ddb')
    }
    else{
      $('#contactTab'+isContact[k]).hide()
      $('.contact-content-title ul li').eq(isContact[k]-1).css('border-bottom','3px solid transparent')
    }
  }
}



/**
 * @description: 锚点
 * @param {*} index
 * @return {*}
 */
function toHover(index){
  document.getElementById('hover'+index).scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})

}
/**
 * @description: 轮播图
 * @param {*}
 * @return {*}
 */
var mySwiper = new Swiper ('.swiper-container', {
  direction: 'horizontal', // 垂直切换选项
  loop: true, // 循环模式选项
  autoplay:true, //自动播放
  // 如果需要分页器
  pagination: {
    el: '.swiper-pagination',
  },
  // 如果需要前进后退按钮
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  
  
})        



/**
 * @description: 点击项目中心栏目跳转
 * @param {*}
 * @return {*}
 */

function officalsite(index) {
  if(index == 1){
    window.open("https://mhxpeth5.xlootcn.com");
  }else if(index == 2){
    window.open("https://nftsango.xloot.io");
  }else if(index == 3){
    window.open("http://www.xpet.com");
  }
}








$(document).ready(function(){
 
  handleAboutThis(1)
  handleContactThis(1)
})

