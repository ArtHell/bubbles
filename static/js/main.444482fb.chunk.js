(this.webpackJsonpcolorgame=this.webpackJsonpcolorgame||[]).push([[0],{40:function(e,t,n){},41:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),o=n(29),r=n.n(o),u=(n(40),n(41),n(13)),i=n(21),b=n(65),s=n(63),p=n(28),d=function(){var e=["234357","a3827c","616673","e8d3c3","ecac8b","c5bbbe","c4b0a9","52393b","75483a"];return e[Math.floor(Math.random()*e.length)]},l=n.p+"static/media/bubble.23c9c258.mp3",j=n.p+"static/media/background.c3fae87d.jfif",f=n.p+"static/media/piano.8f1c7603.mp3",h=n(6),m=Object(i.a)(b.a)((function(e){e.theme;return{textAlign:"center",height:"50px",borderRadius:"50%",opacity:"80%",boxShadow:"5px 5px  rgba(0,0,0,0.1 )",border:"1px solid"}})),O=Object(i.a)(b.a)((function(e){e.theme;return{height:"100vh",width:"100%",display:"flex",background:"url(".concat(j,")"),backgroundRepeat:"no-repeat",backgroundSize:"cover"}})),g=Object(i.a)(s.a)((function(e){e.theme;return{width:"794px",margin:"auto",padding:"20px",backgroundColor:"transparent",cursor:"pointer"}})),x=function(e){var t=Object(c.useState)("#".concat(d())),n=Object(u.a)(t,2),a=n[0],o=n[1];return Object(h.jsx)(m,{style:{backgroundColor:a},onMouseEnter:function(){e.mouseDown&&(e.playBubble(),o("#".concat(d())))}})},v=function(){var e=Object(c.useState)(!1),t=Object(u.a)(e,2),n=t[0],a=t[1],o=Array.from(Array(144).keys()),r=Object(p.a)(f,{loop:!0,autoplay:!0,volume:.7}),i=(Object(u.a)(r,1)[0],Object(p.a)(l,{volume:.3})),b=Object(u.a)(i,1)[0];return Object(h.jsx)(O,{onMouseDown:function(e){e.preventDefault(),a(!0)},onMouseUp:function(e){e.preventDefault(),a(!1)},children:Object(h.jsx)(g,{container:!0,spacing:2,children:o.map((function(e){return Object(h.jsx)(s.a,{item:!0,xs:1,style:{padding:0},children:Object(h.jsx)(x,{mouseDown:n,playBubble:b})})}))})})};var y=function(){return Object(h.jsx)(v,{})};r.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(y,{})}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.444482fb.chunk.js.map