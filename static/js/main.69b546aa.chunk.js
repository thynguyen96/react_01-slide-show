(this["webpackJsonpreact_01-slide-show"]=this["webpackJsonpreact_01-slide-show"]||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(16)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(1),c=n.n(o),s=(n(13),n(2)),r=n(3),l=n(5),d=n(4),m=n(6),u=(n(14),n(15),function(e){function t(e){var n;Object(s.a)(this,t),(n=Object(l.a)(this,Object(d.a)(t).call(this,e))).getNewSlideIndex=function(e){var t=n.state.slideIndex,a=n.props.input.length,i=t+e;return i>=a?i=0:i<0&&(i=a-1),i},n.backward=function(){n.setState({slideIndex:n.getNewSlideIndex(-1)})},n.forward=function(){n.setState({slideIndex:n.getNewSlideIndex(1)})},n.setSlideIndex=function(e){n.setState({slideIndex:e})},n.updateDimensions=function(){n.containerElm.style.height="".concat(n.containerElm.offsetWidth/n.ratioWH,"px")},n.runAutomatic=function(){n.setState({slideIndex:n.getNewSlideIndex(1)})},n.state={slideIndex:0};var a=n.props.ratio.split(":");return n.ratioWH=a[0]/a[1],n}return Object(m.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;if(this.rootElm=c.a.findDOMNode(this),this.containerElm=this.rootElm.querySelector(".slide-show__container"),this.updateDimensions(),window.addEventListener("resize",this.updateDimensions),"automatic"===this.props.mode){var t=this.props.timeout||5e3;this.automaticInterval=setInterval((function(){return e.runAutomatic()}),Number.parseInt(t))}}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateDimensions),this.automaticInterval&&clearInterval(this.automaticInterval)}},{key:"render",value:function(){var e=this,t="slide-show";return i.a.createElement("div",{className:"".concat(t)},i.a.createElement("div",{className:"".concat(t,"__container")},this.props.input.map((function(n,a){return i.a.createElement("div",{key:a,className:"".concat(e.state.slideIndex===a?"".concat(t,"__container-slide--active"):""," ").concat(t,"__container-slide")},i.a.createElement("div",{className:"".concat(t,"__container-slide--number-text")},"".concat(a+1," / ").concat(e.props.input.length)),i.a.createElement("img",{className:"".concat(t,"__container-slide--image"),src:n.src,alt:n.caption}),i.a.createElement("div",{className:"".concat(t,"__container-slide--caption-text")},n.caption))})),i.a.createElement("span",{className:"".concat(t,"__container-slide--next"),onClick:this.forward},"\u276e"),i.a.createElement("span",{className:"".concat(t,"__container-slide--prev"),onClick:this.backward},"\u276f")),i.a.createElement("div",{className:"".concat(t,"__cotainer-bottom")},this.props.input.map((function(n,a){return i.a.createElement("img",{key:a,src:n.src,alt:n.caption,className:"".concat(t,"__container-bottom-item ").concat(e.state.slideIndex===a?"".concat(t,"__container-bottom-item--active"):""),onClick:function(){return e.setSlideIndex(a)},style:{width:"".concat(1/e.props.input.length*100,"%"),height:"100%"}})}))))}}]),t}(i.a.Component)),p=[{src:"/react_01-slide-show/images/01.jpg",caption:"Caption one"},{src:"/react_01-slide-show/images/02.jpg",caption:"Caption two"},{src:"/react_01-slide-show/images/03.jpg",caption:"Caption three"},{src:"/react_01-slide-show/images/04.jpg",caption:"Caption four"},{src:"/react_01-slide-show/images/05.jpg",caption:"Caption five"},{src:"/react_01-slide-show/images/06.jpg",caption:"Caption six"}],h=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(u,{input:p,ratio:"3:2",timeout:"3000"}))}}]),t}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.69b546aa.chunk.js.map