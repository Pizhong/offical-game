/*
 * @Author: your name
 * @Date: 2021-01-29 09:36:17
 * @LastEditTime: 2021-01-29 16:15:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \offical-game\js\rem.js
 */

(function(win, lib) {
  var doc = win.document;
  var docEl = doc.documentElement;
  var metaEl = doc.querySelector('meta[name="viewport"]');
  var flexibleEl = doc.querySelector('meta[name="flexible"]');
  var dpr = 0;
  var scale = 0;
  var tid;
  var flexible = lib.flexible || (lib.flexible = {});

  if (metaEl) { //meta名称为viewport的标签设置了scale时，将根据scale手动设置dpr(dpr用于实现flexible其他功能)
      console.warn('将根据已有的meta标签来设置缩放比例');
      var match = metaEl.getAttribute('content').match(/initial\-scale=([\d\.]+)/);
      if (match) {
          scale = parseFloat(match[1]);
          dpr = parseInt(1 / scale);
      }
  } else if (flexibleEl) {   //meta名称为flexible的标签存在时，手动设置dpr
      var content = flexibleEl.getAttribute('content');
      if (content) {
          var initialDpr = content.match(/initial\-dpr=([\d\.]+)/);
          var maximumDpr = content.match(/maximum\-dpr=([\d\.]+)/);
          if (initialDpr) {
              dpr = parseFloat(initialDpr[1]);
              scale = parseFloat((1 / dpr).toFixed(2));    
          }
          if (maximumDpr) {
              dpr = parseFloat(maximumDpr[1]);
              scale = parseFloat((1 / dpr).toFixed(2));    
          }
      }
  }

  if (!dpr && !scale) { //根据js获取到的devicePixelRatio设置dpr及scale，scale是dpr的倒数。(ios系统根据dpr的值设置为1、2、3，Android统一设置dpr为1)
      var isAndroid = win.navigator.appVersion.match(/android/gi);
      var isIPhone = win.navigator.appVersion.match(/iphone/gi);
      var devicePixelRatio = win.devicePixelRatio;
      if (isIPhone) {
          // iOS下，对于2和3的屏，用2倍的方案，其余的用1倍方案
          if (devicePixelRatio >= 3 && (!dpr || dpr >= 3)) {                
              dpr = 3;
          } else if (devicePixelRatio >= 2 && (!dpr || dpr >= 2)){
              dpr = 2;
          } else {
              dpr = 1;
          }
      } else {
          // 其他设备下，仍旧使用1倍的方案
          dpr = 1;
      }
      scale = 1 / dpr;
  }

  docEl.setAttribute('data-dpr', dpr);
  if (!metaEl) {//添加meta标签，设置name为viewport，content根据scale设置缩放比(默认、最大、最小缩放比)
      metaEl = doc.createElement('meta');
      metaEl.setAttribute('name', 'viewport');
      metaEl.setAttribute('content', 'initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no');
      if (docEl.firstElementChild) {
          docEl.firstElementChild.appendChild(metaEl);
      } else {
          var wrap = doc.createElement('div');
          wrap.appendChild(metaEl);
          doc.write(wrap.innerHTML);
      }
  }

  function refreshRem(){//resize事件与pageshow事件延时300毫秒触发fontSize的重置(这里用了防抖函数，防止resize事件被高频触发可能引起的性能问题) 
      var width = docEl.getBoundingClientRect().width;
      if (width / dpr > 1336) {
          width = 1336 * dpr;
      }
      if(width / dpr <1336){
        width=1336*dpr
      }
      var rem = width / 10;
      docEl.style.fontSize = rem + 'px';
      flexible.rem = win.rem = rem;
  }

  win.addEventListener('resize', function() {
      clearTimeout(tid);
      tid = setTimeout(refreshRem, 300);
  }, false);
  win.addEventListener('pageshow', function(e) {
      if (e.persisted) {
          clearTimeout(tid);
          tid = setTimeout(refreshRem, 300);
      }
  }, false);

  if (doc.readyState === 'complete') {
      doc.body.style.fontSize = 12 * dpr + 'px';
  } else {
      doc.addEventListener('DOMContentLoaded', function(e) {
          doc.body.style.fontSize = 12 * dpr + 'px';
      }, false);
  }
  

  refreshRem();
 //为body设置fontSize，值为12*dpr+”px” 7.扩展一些方法：获取页面dpr，获取rem基准值，rem与px相互转换，重置dpr，这些方法可以在引入flexible.js之后调用，使用方式参考api文档。
  flexible.dpr = win.dpr = dpr;
  flexible.refreshRem = refreshRem;
  flexible.rem2px = function(d) {
      var val = parseFloat(d) * this.rem;
      if (typeof d === 'string' && d.match(/rem$/)) {
          val += 'px';
      }
      return val;
  }
  flexible.px2rem = function(d) {
      var val = parseFloat(d) / this.rem;
      if (typeof d === 'string' && d.match(/px$/)) {
          val += 'rem';
      }
      return val;
  }

})(window, window['lib'] || (window['lib'] = {}));

