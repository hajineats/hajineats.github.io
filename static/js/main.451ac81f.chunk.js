(this["webpackJsonppersonal-website"]=this["webpackJsonppersonal-website"]||[]).push([[0],{20:function(e,n,t){},21:function(e,n,t){},25:function(e,n,t){"use strict";t.r(n);var a,r,i,o,c,l,s,u,h,d=t(1),b=t(12),f=t.n(b),p=(t(20),t(2)),g=(t(21),t(3)),m=400,j=t(0),x=g.b.div(a||(a=Object(p.a)(["\n  //  set document as parent\n  position: absolute;\n  bottom: 20px;\n  width: 100%;\n  text-align: center;\n"]))),v=g.b.h1(r||(r=Object(p.a)(["\n  color: #fff;\n  font-weight: normal;\n  font-size: 16px;\n"]))),O=g.b.p(i||(i=Object(p.a)(["\n  color: aliceblue;\n  font-size: 14px;\n  @media (max-width: ","px) {\n    display: none;\n  }\n"])),m);function y(){return Object(j.jsxs)(x,{children:[Object(j.jsx)(v,{children:"\xa9 Hajin Kim"}),Object(j.jsx)(O,{children:'Made with \u2764, Dell UltraSharp 27", Kensington Orbit, Mac Mini M1, Microsoft Ergonomic Keyboard, and a bit of music in the background'})]})}var w=g.b.div(o||(o=Object(p.a)(["\n  width: 100%;\n  height: 30px;\n  background-color: aliceblue;\n  display: flex;\n  justify-content: flex-start;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n"]))),k=g.b.div(c||(c=Object(p.a)(["\n  height: 100%;\n  display: flex;\n  align-items: center;\n  margin-left: 10px;\n"]))),I=g.b.div(l||(l=Object(p.a)(["\n  height: 12px;\n  width: 12px;\n  border-radius: 8px;\n  margin-right: 5px;\n  ","\n  ","\n      ","\n  @media(max-width: ","px) {\n    height: 10px;\n    width: 10px;\n    border-radius: 5px;\n  }\n"])),(function(e){return e.maximize&&Object(g.a)(s||(s=Object(p.a)(["\n      background-color: green;\n    "])))}),(function(e){return e.minimize&&Object(g.a)(u||(u=Object(p.a)(["\n      background-color: orange;\n    "])))}),(function(e){return e.cancel&&Object(g.a)(h||(h=Object(p.a)(["\n      background-color: crimson;\n    "])))}),m);function M(){return Object(j.jsx)(w,{children:Object(j.jsxs)(k,{children:[Object(j.jsx)(I,{cancel:!0}),Object(j.jsx)(I,{minimize:!0}),Object(j.jsx)(I,{maximize:!0})]})})}var L=t(4),C=t(10),S=["I can see the beach from my house","M1 Mac Mini cannot run VM, so marking SE206 was a pain","I like jAZz","Of the Korean singers, I like Sun Si Kyung, Kim Dong Reul, Lee Juck, Naul, Lee Seung Gi. Sorry no BTS no Blackpink","Have you heard of the song 'All I need' by Jacob Collier? It gives an insight into how microtonality can be incorporated into pop musics.","In Year 13, I found King Lear to carry a very profound lesson. On the surface, it seems to suggest that falling into sweet words and turning away from the truth leads to self-destruction. But it makes you wonder if telling the truth was necessary - especailly if it would have worked for peaceful denouement of Lear's life. It's quite complex.","I can play piano and violin at Grade 8 level","Robot cleaner is very nice - I recommend Roborock S7","I went for Hillary Trail for my Duke of Edinburgh Gold award, which was 80km walk over 4 nights & 5 days. Hydrating & sugar supplement (through chocolate bars, jellies) are essential. You would usually walk from 8 to 3 ish, and it gets quite dark even from early afternoon at a mountain."];var T={randomFact:{executable:function(){return S[Math.floor(Math.random()*S.length)]}}};function E(){return Object.keys(T)}var H="Command not found. Type **help** to see available commands.",z={"aboutMe.txt":{content:"\nHi there! I'm Hajin. Really glad to see you here :)\n      \nI'm a final year SE student seeking for a graduate role for 2022 year-end. \n      \nI have working knowledge and practical experiences in MERN, Java and Objective C. \n  \nInterested in good software design, TDD, Agile. Love leaving a record of what I learn (optimizemarginality.tistory.com/), and sharing it with others. Tramping/travelling is my annual ritual."},"skills.txt":{content:"**> familiar**: Java, Javascript/React, Python, git, JPA Hibernate\n**= familiar**: C, Objective-C, Android, html/css, bash, JAX-RS\n**< familiar**: AWS EC2, MATLAB"}};function D(e){var n=e.split(" "),t=n[0],a=n[1];switch(t){case"cat":return function(e){if(!e)return H;if(!z[e])return"Cannot find the file called "+e+". Type **ls** to list files.";return z[e].content}(a);case"help":return function(){var e={command:{usage:"usage",help:"help"},ls:{usage:"ls <filename>",help:"Displays files in the folder"},cat:{usage:"cat <filename>",help:"Displays content of the file"},clear:{usage:"clear",help:"Clears the console"},TIP1:{usage:"./<executable>",help:"Executes an executable"},TIP2:{usage:"press tab",help:"tab autocompletes filename"}},n="",t=R(e),a=t.maxHelpTotalLength,r=t.maxKeyLength,i=t.maxUsageLength,o=t.maxHelpLength,c=window.innerWidth,l=c<=m?"\n":"_".repeat(a+8)+"\n";for(var s in n+=l,e){var u=K(s,r),h=K(e[s].usage,i),d=K(e[s].help,o);n+=c<=m?"**".concat(s,"** (").concat(e[s].usage,"): ").concat(e[s].help,"\n"):"| ".concat(u," | ").concat(h," | ").concat(d," | \n")}return n+=l}();default:return H}}function K(e,n){for(var t=e;t.length<n;)t+=" ";return t}var R=function(e){var n=0,t=0,a=0,r=0;for(var i in e){var o="|".concat(i,"|").concat(e[i].usage,"|").concat(e[i].help,"|\n");n=Math.max(o.length,n),t=Math.max(i.length,t),a=Math.max(e[i].usage.length,a),r=Math.max(e[i].help.length,r)}return{maxHelpTotalLength:n,maxKeyLength:t,maxUsageLength:a,maxHelpLength:r}};function A(){return Object.keys(z)}function J(e){if(e.startsWith("ls")){var n=E().map((function(e){return"**".concat(e,"**")}));return[].concat(Object(L.a)(n),Object(L.a)(A())).sort((function(e,n){return e-n})).join("\t")}if(e.startsWith("./"))return function(e){var n=e.split("./")[1];return T[n].executable()}(e);var t=e.split(" ")[1];return 0!==E().filter((function(e){return e===t})).length?"".concat(e.split(" ")[1]," is an executable. Run it with ./ prefix"):D(e)}var W,B,F,P,U,G="//",q="anonymous@hajinkim >",N="System Returns",Y="User Inputs",V=g.b.span(W||(W=Object(p.a)(["\n  font-weight: bolder;\n  color: navajowhite;\n  margin-right: 5px;\n"]))),X=function(e){return e.map((function(e){return e.split(G)})).map((function(e){return e[0].includes(Y)?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(V,{children:q}),e[1]]}):e[0].includes(N)?_(e[1]):Object(j.jsx)(j.Fragment,{})}))},Z=g.b.b(B||(B=Object(p.a)(["\n  background: ;\n  color: white;\n"]))),_=function(e){for(var n=[],t=e.split("**"),a=0;a<t.length;a++)a%2!==0?n.push(Object(j.jsx)(Z,{children:t[a]})):n.push(t[a]);return n},Q=g.b.div(F||(F=Object(p.a)(["\n  height: 100%;\n  background: grey;\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n  padding: 10px;\n  color: whitesmoke;\n  contenteditable: true;\n  font-size: ","px;\n  white-space: pre-wrap;\n  overflow-y: scroll;\n  @media (max-width: ","px) {\n    font-size: ","px;\n    line-height: 1.5em;\n  }\n"])),16,m,6.4);function $(){var e=Object(d.useState)([]),n=Object(C.a)(e,2),t=n[0],a=n[1],r=function(){var e=Object(d.useRef)();return[e,function(){e.current.focus()}]}(),i=Object(C.a)(r,2),o=i[0],c=i[1];Object(d.useEffect)((function(){c()}),[t]);var l=g.b.span(P||(P=Object(p.a)([""])));return Object(j.jsxs)(Q,{onClick:function(){c()},children:["Type `help` to display possible commands\n",X(t),Object(j.jsx)(V,{children:q}),Object(j.jsx)(l,{ref:o,onKeyDown:function(e){if("Enter"===e.key){var n=o.current.textContent,r="".concat(Y).concat(G).concat(n,"\n"),i="".concat(N).concat(G).concat(J(n),"\n");if(n.includes("clear"))return void a([]);o.current.textContent="";var l=[].concat(Object(L.a)(t),[r,i]);e.preventDefault(),a(l),c()}if("Tab"===e.key){e.preventDefault();var s=o.current.textContent.split(" "),u=s[s.length-1],h=u.startsWith("./");h&&(u=u.split("./")[1]);var d=[].concat(Object(L.a)(E()),Object(L.a)(A())).filter((function(e){return e.startsWith(u)}));d&&d[0]&&(s[s.length-1]=d[0],o.current.textContent=h?["./",d[0]].join(""):s.join(" "))}},contentEditable:!0})]})}var ee,ne,te=g.b.div(U||(U=Object(p.a)(["\n  width: 800px;\n  height: 600px;\n  border-radius: 15px;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  @media (max-width: ","px) {\n    height: 200px;\n  }\n"])),m);function ae(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)(te,{children:[Object(j.jsx)(M,{}),Object(j.jsx)($,{})]})})}var re=g.b.div(ee||(ee=Object(p.a)(["\n  background-color: yellowgreen;\n  height: 100vh;\n"]))),ie=g.b.div(ne||(ne=Object(p.a)(["\n  height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"])));function oe(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)(re,{children:[Object(j.jsx)(ie,{children:Object(j.jsx)(ae,{})}),Object(j.jsx)(y,{})]})})}f.a.render(Object(j.jsx)(oe,{}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.451ac81f.chunk.js.map