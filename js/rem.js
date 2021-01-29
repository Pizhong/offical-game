/*
 * @Author: your name
 * @Date: 2021-01-29 09:36:17
 * @LastEditTime: 2021-01-29 09:48:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \offical-game\js\rem.js
 */
var deviceWidth = document.documentElement.clientWidth;
if (deviceWidth > 1336) {
    deviceWidth = 1336;
}
if (deviceWidth < 450) {
    deviceWidth = 450;
}
document.documentElement.style.fontSize = deviceWidth / 133.6 + 'px';
//此部分是设计稿宽度为375px的，这边设置为3.75  页面调用时，如果实际设计稿为760px，那边这边的3.75数值改为7.60
window.onresize = function() {
    var deviceWidth = document.documentElement.clientWidth;
    if (deviceWidth > 1336) {
        deviceWidth = 1336;
    }
    if (deviceWidth < 450) {
        deviceWidth = 450;
    }
    document.documentElement.style.fontSize = deviceWidth / 133.6 + 'px';
}