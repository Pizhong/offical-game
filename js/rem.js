/*
 * @Author: your name
 * @Date: 2021-01-29 09:36:17
 * @LastEditTime: 2021-01-29 15:41:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \offical-game\js\rem.js
 */

window.onresize = function() {
    var deviceWidth = document.documentElement.clientWidth;
    if (deviceWidth > 1336) {
        deviceWidth = 1336;
    }
    if (deviceWidth < 450) {
        deviceWidth = 450;
    }
    document.documentElement.style.fontSize = deviceWidth / 13.36 + 'px';
}

