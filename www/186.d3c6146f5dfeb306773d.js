(window.webpackJsonp=window.webpackJsonp||[]).push([[186],{YGkI:function(e,n,i){"use strict";i.r(n),i.d(n,"mdTransitionAnimation",function(){return t});var o="translateY",a="40px",r="0px";function t(e,n,i){var t=i.leavingEl,s=c(i.enteringEl),d=new e;d.addElement(s).beforeRemoveClass("ion-page-invisible");var u="back"===i.direction;u?d.duration(i.duration||200).easing("cubic-bezier(0.47,0,0.745,0.715)"):d.duration(i.duration||280).easing("cubic-bezier(0.36,0.66,0.04,1)").fromTo(o,a,r,!0).fromTo("opacity",.01,1,!0);var p=s.querySelector("ion-toolbar");if(p){var l=new e;l.addElement(p),d.add(l)}if(t&&u){d.duration(i.duration||200).easing("cubic-bezier(0.47,0,0.745,0.715)");var b=new e;b.addElement(c(t)).fromTo(o,r,a).fromTo("opacity",1,0),d.add(b)}return Promise.resolve(d)}function c(e){return e.classList.contains("ion-page")?e:e.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")||e}}}]);