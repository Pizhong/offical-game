/*
 * @Author: your name
 * @Date: 2021-01-27 17:29:01
 * @LastEditTime: 2021-01-29 14:31:43
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
 * @description: 轮播图
 * @param {*} index
 * @return {*}
 */
function  gotoPage(index) {
  currentIndex=index
  // console.log(currentIndex);
  showBanner(currentIndex)
  showBannerIndex(currentIndex)
}
/**
 * @description: 定时切换图片
 * @param {*}
 * @return {*}
 */
function runInv(){
  timer=setInterval(() => {
    gotoPage(nextIndex())
  }, 5000)
}
/**
 * @description: 下一页
 * @param {*}
 * @return {*}
 */
function nextIndex(){
  if(currentIndex == bannerArray.length - 1) {
    return 0;
  }else {
    if(currentIndex<bannerArray.length){
      return currentIndex + 1;
    }
  }
}
/**
 * @description: 上一页
 * @param {*}
 * @return {*}
 */
function  prevIndex() {
  if(currentIndex == 0) {
    return bannerArray.length - 1;
  }else{
    return currentIndex - 1;
  }
}
/**
 * @description: banner显示
 * @param {*} index
 * @return {*}
 */
function showBanner(index){
  var html=''
    html += '<img src="'+bannerArray[index]+'">'
  $('.item').html(html)
}
/**
 * @description: 展示当前是第几张图片
 * @param {*} index
 * @return {*}
 */
function showBannerIndex(index){
  var html=''
  for(let i=0;i<bannerArray.length;i++){
    html += '<li><div class="current tab" onclick="gotoPage('+i+')"></div></li>'
  }
  
  $('.banner-page ul').html(html)
  for(let i=0;i<bannerArray.length;i++){
    if(index==i){
      $('.tab').eq(index).css('background-color','blue')
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

$(document).ready(function(){
  gotoPage(0)
  runInv()
  handleAboutThis(1)
  handleContactThis(1)
})


