webpackJsonp([2],{19:function(t,e,i){function s(t){i(32)}var n=i(2)(i(23),i(29),s,null,null);t.exports=n.exports},22:function(t,e,i){t.exports=i.p+"role.png?7964be9293aa3d1a567d8f903afe080c"},23:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"bpp",data:function(){return{box:[],wall:[2,3,4,10,12,18,20,21,22,23,24,25,26,31,32,37,38,39,40,41,42,43,45,51,53,59,60,61],success:[11,33,30,52],boxli:[27,29,35,44],me:[36],game:64,white:{class:"white"},gray:{class:"gray"},blue:{class:"blue"},yellow:{class:"yellow"},green:{class:"green"}}},methods:{render:function(){this.box=[];for(var t=0;t<this.game;t++)-1!=this.wall.indexOf(t)?this.box.push(this.gray):-1!=this.boxli.indexOf(t)?this.box.push(this.yellow):-1!=this.success.indexOf(t)?this.box.push(this.blue):-1!=this.me.indexOf(t)?this.box.push(this.green):this.box.push(this.white)},testWall:function(t){var e=this.me[0]+t;if(-1==this.wall.indexOf(e)&&-1==this.boxli.indexOf(e))this.me[0]=e;else if(-1!=this.boxli.indexOf(e)){var i=this.boxli.indexOf(e);-1!=this.wall.indexOf(e+t)?this.me[0]=e-t:-1!=this.boxli.indexOf(e+t)?this.me[0]=e-t:(this.boxli.splice(i,1,e+t),this.me[0]=e)}},win:function(){for(var t=0,e=0;e<4&&-1!=this.success.indexOf(this.boxli[e]);e++)4==++t&&(alert("游戏胜利"),this.$router.replace({path:"/level2"}))},upGo:function(){var t=this;this.testWall(-8),this.render(),setTimeout(function(){t.win()},1)},downGo:function(){var t=this;this.testWall(8),this.render(),setTimeout(function(){t.win()},1)},leftGo:function(){var t=this;this.testWall(-1),this.render(),setTimeout(function(){t.win()},1)},rightGo:function(){var t=this;this.testWall(1),this.render(),setTimeout(function(){t.win()},1)}},created:function(){this.render();var t=this;document.onkeyup=function(e){38==e.keyCode?t.upGo():40==e.keyCode?t.downGo():37==e.keyCode?t.leftGo():39==e.keyCode&&t.rightGo()}}}},26:function(t,e,i){e=t.exports=i(1)(),e.push([t.i,"*{margin:0;padding:0}#bpp{display:flex;height:100vh}.bpp{margin:auto}h2{text-align:center;margin-bottom:20px}ul{width:240px;height:240px}li{list-style:none;width:30px;height:30px;float:left}.white{background:#fff}.gray{background:#333}.blue{background:blue;border-radius:80%}.yellow{background:#ff0}.green{background:url("+i(22)+");background-size:contain}",""])},29:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"bpp"}},[i("div",{staticClass:"bpp"},[i("h2",[t._v("第一关")]),t._v(" "),i("ul",t._l(t.box,function(t,e){return i("li",{class:t.class})}))])])},staticRenderFns:[]}},32:function(t,e,i){var s=i(26);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);i(3)("ee1e945a",s,!0)}});
//# sourceMappingURL=2.build.js.map