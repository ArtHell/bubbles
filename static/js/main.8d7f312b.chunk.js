(this.webpackJsonpcolorgame=this.webpackJsonpcolorgame||[]).push([[0],{40:function(t,e,a){},41:function(t,e,a){},48:function(t,e,a){"use strict";a.r(e);var c=a(1),n=a.n(c),o=a(29),r=a.n(o),u=(a(40),a(41),a(13)),i=a(21),b=a(65),p=a(63),s=a(28),d=function(){var t=["234357","a3827c","616673","e8d3c3","ecac8b","c5bbbe","c4b0a9","52393b","75483a"];return t[Math.floor(Math.random()*t.length)]},l=a.p+"static/media/bubble.23c9c258.mp3",j=a.p+"static/media/background.c3fae87d.jfif",f=a.p+"static/media/piano.8f1c7603.mp3",h=a(6),m=Object(i.a)(b.a)((function(t){t.theme;return{textAlign:"center",height:"50px",borderRadius:"50%",opacity:"80%",boxShadow:"5px 5px  rgba(0,0,0,0.1 )"}})),O=Object(i.a)(b.a)((function(t){t.theme;return{height:"100vh",width:"100%",display:"flex",background:"url(".concat(j,")"),backgroundRepeat:"no-repeat",backgroundSize:"cover"}})),x=Object(i.a)(p.a)((function(t){t.theme;return{width:"794px",margin:"auto",padding:"20px",backgroundColor:"transparent",cursor:"pointer"}})),g=function(t){var e=Object(c.useState)("#".concat(d())),a=Object(u.a)(e,2),n=a[0],o=a[1],r=Object(c.useState)("#".concat(d())),i=Object(u.a)(r,2),b=i[0],p=i[1];return Object(h.jsx)(m,{style:{background:"radial-gradient(circle at 50px 50px, ".concat(n,", ").concat(b,")"),border:"1px solid ".concat(b)},onMouseEnter:function(){t.mouseDown&&(t.playBubble({playbackRate:.6+.1*Math.floor(9*Math.random())}),o("#".concat(d())),p("#".concat(d())))}})},y=function(){var t=Object(c.useState)(!1),e=Object(u.a)(t,2),a=e[0],n=e[1],o=Array.from(Array(144).keys()),r=Object(s.a)(f,{loop:!0,autoplay:!0,volume:.7}),i=(Object(u.a)(r,1)[0],Object(s.a)(l,{volume:.3})),b=Object(u.a)(i,1)[0];return Object(h.jsx)(O,{onMouseDown:function(t){t.preventDefault(),n(!0)},onMouseUp:function(t){t.preventDefault(),n(!1)},children:Object(h.jsx)(x,{container:!0,spacing:2,children:o.map((function(t){return Object(h.jsx)(p.a,{item:!0,xs:1,style:{padding:0},children:Object(h.jsx)(g,{mouseDown:a,playBubble:b})})}))})})};var v=function(){return Object(h.jsx)(y,{})};r.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(v,{})}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.8d7f312b.chunk.js.map