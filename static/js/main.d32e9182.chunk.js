(this.webpackJsonpnewsforyou=this.webpackJsonpnewsforyou||[]).push([[0],{40:function(e,t,c){},49:function(e,t,c){},50:function(e,t,c){},52:function(e,t,c){},54:function(e,t,c){},55:function(e,t,c){},62:function(e,t,c){},63:function(e,t,c){},64:function(e,t,c){},65:function(e,t,c){"use strict";c.r(t);var a=c(0),s=c.n(a),n=c(16),r=c.n(n),i=(c(49),c(50),c(4)),l=c.n(i),o=c(9),j=c(10),d=(c(52),c(44)),b=c(1);var u=function(e){var t=e.header,c=e.bgImage,a=e.typical;return Object(b.jsx)("section",{id:"hero","data-aos":"fade-left","data-aos-easing":"ease-in-out",style:{backgroundImage:"url(".concat(c,")")},children:Object(b.jsx)("div",{className:"hero mycontainer",children:Object(b.jsxs)("div",{className:"hero-header",children:[Object(b.jsx)("div",{className:"hero-head",children:"Get Updates on"}),Object(b.jsx)("div",{className:"hero-head",children:a?Object(b.jsx)(d.a,{className:"typical",steps:["technology",1e3,"entertainment",1e3,"general",1e3,"health",1e3,"science",1e3,"sports",1e3,"business",1e3],loop:1/0,wrapper:"span"}):Object(b.jsx)("div",{className:"hero-head blink",children:t})})]})})})},h=c(74);c(35),c(54);var m=function(e){var t=e.title,c=e.urlImg,a=e.src_url,s=e.desc,n=(e.author,e.content,e.src_name),r=e.publishDate,i=e.url;return Object(b.jsx)("div",{children:Object(b.jsxs)(h.a,{children:[Object(b.jsx)(h.a.Img,{variant:"top",src:c}),Object(b.jsxs)(h.a.Body,{children:[Object(b.jsx)(h.a.Title,{children:t}),Object(b.jsxs)(h.a.Text,{children:[Object(b.jsx)("div",{children:s.slice(0,100)+"..."}),Object(b.jsx)("a",{href:i,children:"More.."})]})]}),Object(b.jsxs)(h.a.Footer,{children:[Object(b.jsxs)("small",{className:"text-muted",children:["Published At: ",r]}),Object(b.jsx)("br",{}),Object(b.jsxs)("small",{className:"text-muted",children:["source:",Object(b.jsx)("a",{href:a,children:n})]})]})]})})},p=c(70);c(40);var x=function(){var e=Object(a.useState)([]),t=Object(j.a)(e,2),c=t[0],s=t[1];Object(a.useEffect)((function(){n()}),[]);var n=function(){var e=Object(o.a)(l.a.mark((function e(){var t,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"fb661f99e8fb9d6752716256a05764f2",e.next=3,fetch("https://gnews.io/api/v4/top-headlines?lang=en&country=in&token=".concat("fb661f99e8fb9d6752716256a05764f2"));case 3:return t=e.sent,e.next=6,t.json();case 6:c=e.sent,s(c.articles);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{children:[Object(b.jsx)(u,{header:"Sports",bgImage:"https://source.unsplash.com/1600x900/?news",typical:!0}),Object(b.jsxs)("div",{className:"random-news",children:[Object(b.jsx)("div",{className:"random-news-header",children:Object(b.jsx)("h1",{className:"section-header",children:"Top Stories"})}),Object(b.jsx)(p.a,{children:c.map((function(e){return Object(b.jsx)(m,{title:e.title,content:e.content,desc:e.description,urlImg:e.image,url:e.url,src_name:e.source.name,publishDate:e.publishedAt,src_url:e.source.url})}))})]})]})};var f=function(){var e=Object(a.useState)([]),t=Object(j.a)(e,2),c=t[0],s=t[1];Object(a.useEffect)((function(){n()}),[]);var n=function(){var e=Object(o.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"fb661f99e8fb9d6752716256a05764f2",e.next=3,fetch("https://gnews.io/api/v4/search?q=sports&lang=en&country=in&token=".concat("fb661f99e8fb9d6752716256a05764f2"));case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,s(a.articles),console.log(c);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{children:[Object(b.jsx)(u,{header:"Sports",bgImage:"https://source.unsplash.com/1600x900/?sports",typical:!1}),Object(b.jsxs)("div",{className:"random-news",children:[Object(b.jsx)("div",{className:"random-news-header",children:Object(b.jsx)("h1",{className:"section-header",children:"Top Stories"})}),Object(b.jsx)(p.a,{children:c.map((function(e){return Object(b.jsx)(m,{title:e.title,content:e.content,desc:e.description,urlImg:e.image,url:e.url,src_name:e.source.name,publishDate:e.publishedAt,src_url:e.source.url})}))})]})]})};var O=function(){var e=Object(a.useState)([]),t=Object(j.a)(e,2),c=t[0],s=t[1];Object(a.useEffect)((function(){n()}),[]);var n=function(){var e=Object(o.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"fb661f99e8fb9d6752716256a05764f2",e.next=3,fetch("https://gnews.io/api/v4/search?q=technology&lang=en&country=in&token=".concat("fb661f99e8fb9d6752716256a05764f2"));case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,s(a.articles),console.log(c);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{children:[Object(b.jsx)(u,{header:"Technology",bgImage:"https://source.unsplash.com/1600x900/?technology",typical:!1}),Object(b.jsxs)("div",{className:"random-news",children:[Object(b.jsx)("div",{className:"random-news-header",children:Object(b.jsx)("h1",{className:"section-header",children:"Top Stories"})}),Object(b.jsx)(p.a,{children:c.map((function(e){return Object(b.jsx)(m,{title:e.title,content:e.content,desc:e.description,urlImg:e.image,url:e.url,src_name:e.source.name,publishDate:e.publishedAt,src_url:e.source.url})}))})]})]})};var v=function(){var e=Object(a.useState)([]),t=Object(j.a)(e,2),c=t[0],s=t[1];Object(a.useEffect)((function(){n()}),[]);var n=function(){var e=Object(o.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"fb661f99e8fb9d6752716256a05764f2",e.next=3,fetch("https://gnews.io/api/v4/search?q=science&lang=en&country=in&token=".concat("fb661f99e8fb9d6752716256a05764f2"));case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,s(a.articles),console.log(c);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{children:[Object(b.jsx)(u,{header:"Science",bgImage:"https://source.unsplash.com/1600x900/?science",typical:!1}),Object(b.jsxs)("div",{className:"random-news",children:[Object(b.jsx)("div",{className:"random-news-header",children:Object(b.jsx)("h1",{className:"section-header",children:"Top Stories"})}),Object(b.jsx)(p.a,{children:c.map((function(e){return Object(b.jsx)(m,{title:e.title,content:e.content,desc:e.description,urlImg:e.image,url:e.url,src_name:e.source.name,publishDate:e.publishedAt,src_url:e.source.url})}))})]})]})};var g=function(){var e=Object(a.useState)([]),t=Object(j.a)(e,2),c=t[0],s=t[1];Object(a.useEffect)((function(){n()}),[]);var n=function(){var e=Object(o.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"fb661f99e8fb9d6752716256a05764f2",e.next=3,fetch("https://gnews.io/api/v4/search?q=health&lang=en&country=in&token=".concat("fb661f99e8fb9d6752716256a05764f2"));case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,s(a.articles),console.log(c);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{children:[Object(b.jsx)(u,{header:"Health",bgImage:"https://source.unsplash.com/1600x900/?health",typical:!1}),Object(b.jsxs)("div",{className:"random-news",children:[Object(b.jsx)("div",{className:"random-news-header",children:Object(b.jsx)("h1",{className:"section-header",children:"Top Stories"})}),Object(b.jsx)(p.a,{children:c.map((function(e){return Object(b.jsx)(m,{title:e.title,content:e.content,desc:e.description,urlImg:e.image,url:e.url,src_name:e.source.name,publishDate:e.publishedAt,src_url:e.source.url})}))})]})]})};var w=function(){var e=Object(a.useState)([]),t=Object(j.a)(e,2),c=t[0],s=t[1];Object(a.useEffect)((function(){n()}),[]);var n=function(){var e=Object(o.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"fb661f99e8fb9d6752716256a05764f2",e.next=3,fetch("https://gnews.io/api/v4/search?q=entertainment&lang=en&country=in&token=".concat("fb661f99e8fb9d6752716256a05764f2"));case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,s(a.articles),console.log(c);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{children:[Object(b.jsx)(u,{header:"Entertainment",bgImage:"https://source.unsplash.com/1600x900/?entertainment",typical:!1}),Object(b.jsxs)("div",{className:"random-news",children:[Object(b.jsx)("div",{className:"random-news-header",children:Object(b.jsx)("h1",{className:"section-header",children:"Top Stories"})}),Object(b.jsx)(p.a,{children:c.map((function(e){return Object(b.jsx)(m,{title:e.title,content:e.content,desc:e.description,urlImg:e.image,url:e.url,src_name:e.source.name,publishDate:e.publishedAt,src_url:e.source.url})}))})]})]})},N=c(7),y=c(6),k=c(71),_=c(72);c(55);var T=function(){var e=Object(N.f)(),t=Object(a.useState)(!1),c=Object(j.a)(t,2),s=c[0],n=c[1],r=Object(a.useState)(""),i=Object(j.a)(r,2),l=i[0],o=i[1],d=function(){n(!1)},u=Object(a.useState)(!1),h=Object(j.a)(u,2),m=h[0],p=h[1];window.addEventListener("scroll",(function(){window.scrollY>=100?p(!0):p(!1)}));var x=Object(b.jsx)(k.a,{id:"tooltip",className:"tooltip",children:Object(b.jsxs)("ul",{className:"tooltip-dropdown",children:[Object(b.jsx)("li",{className:"mynav-item",children:Object(b.jsxs)(y.c,{exact:!0,to:"/sports",className:"mynav-links",activeClassName:"active",onClick:d,"data-after":"blog",children:[Object(b.jsx)("i",{className:"fas fa-table-tennis"})," sports"]})}),Object(b.jsx)("li",{className:"mynav-item",children:Object(b.jsxs)(y.c,{exact:!0,to:"/tech",className:"mynav-links",activeClassName:"active",onClick:d,"data-after":"Pricing",children:[Object(b.jsx)("i",{className:"fas fa-microchip"})," technology"]})}),Object(b.jsx)("li",{className:"mynav-item",children:Object(b.jsxs)(y.c,{exact:!0,to:"/science",className:"mynav-links",activeClassName:"active",onClick:d,"data-after":"contact",children:[Object(b.jsx)("i",{className:"fas fa-atom"})," science"]})}),Object(b.jsx)("li",{className:"mynav-item",children:Object(b.jsxs)(y.c,{exact:!0,to:"/health",className:"mynav-links",activeClassName:"active",onClick:d,"data-after":"about",children:[Object(b.jsx)("i",{className:"fas fa-heartbeat"})," health \xa0",Object(b.jsx)("span",{className:"badge bg-danger text-dark text-white",children:"Trending"})]})}),Object(b.jsx)("li",{className:"mynav-item",children:Object(b.jsxs)(y.c,{exact:!0,to:"/entertainment",className:"mynav-links",activeClassName:"active",onClick:d,"data-after":"about",children:[Object(b.jsx)("i",{className:"fas fa-photo-video"})," entertainment"]})})]})});return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("section",{id:"header",children:Object(b.jsx)("div",{className:m?"header colorChange headerChange":"header",children:Object(b.jsxs)("div",{className:"nav-bar",children:[Object(b.jsx)("div",{className:"brand",children:Object(b.jsx)("a",{href:"#hero",className:"brand",children:Object(b.jsx)("h1",{children:"NewsForYou.com"})})}),Object(b.jsxs)("div",{className:"nav-list",children:[Object(b.jsx)("div",{className:"hamburger",onClick:function(){return n(!s)},children:Object(b.jsx)("i",{className:s?"fa fa-times":"fa fa-bars"})}),Object(b.jsxs)("ul",{className:s?"mynav-menu active":"mynav-menu",children:[Object(b.jsx)("li",{className:"mynav-item",children:Object(b.jsxs)(y.c,{exact:!0,to:"/",className:"mynav-links",activeClassName:"active",onClick:d,"data-after":"home",children:[Object(b.jsx)("i",{className:"fas fa-home"})," Home"]})}),Object(b.jsx)("li",{className:"mynav-item",children:Object(b.jsx)(_.a,{trigger:"click",placement:"bottom",overlay:x,rootClose:!0,children:Object(b.jsxs)("div",{className:"mynav-links","data-after":"all services",children:[Object(b.jsx)("i",{className:"fas fa-list"})," Categories"]})})}),Object(b.jsx)("li",{className:"mynav-item",children:Object(b.jsxs)(y.c,{exact:!0,to:"/live-tv",className:"mynav-links",activeClassName:"active",onClick:d,"data-after":"home",children:[Object(b.jsx)("i",{className:"fas fa-tv"})," Live Tv"]})}),Object(b.jsx)("li",{children:Object(b.jsxs)("form",{action:"",className:"news-serch-form",onSubmit:function(t){t.preventDefault(),d(),e.push("/search/".concat(l))},children:[Object(b.jsx)("input",{type:"text",className:"news-search-bar",placeholder:" Type To Search",onChange:function(e){o(e.target.value)}}),Object(b.jsx)("button",{className:"search-btn",children:Object(b.jsx)("i",{className:"fas fa-search"})})]})})]})]})]})})})})};c(62);var S=function(){return Object(b.jsxs)("div",{className:"topnav",children:[Object(b.jsxs)("div",{className:"topnav-offer",children:[Object(b.jsx)("div",{className:"offer-logo",children:Object(b.jsx)("img",{src:"https://img.icons8.com/nolan/64/offer-hot-price.png",alt:"hot price"})}),Object(b.jsxs)("div",{className:"offer",children:[Object(b.jsx)("strong",{children:"For Donations:"})," Contact NewsForYou.com"," "]})]}),Object(b.jsxs)("div",{className:"topnav-content",children:[Object(b.jsxs)("div",{className:"topnav-item",id:"support",children:[Object(b.jsx)("div",{children:Object(b.jsx)("img",{src:"https://img.icons8.com/ios-filled/50/000000/online-support.png",alt:"live chat"})}),Object(b.jsx)("div",{children:"24*7 support"})]}),Object(b.jsxs)("div",{className:"topnav-item",id:"live-chat",children:[Object(b.jsx)("div",{children:Object(b.jsx)("img",{src:"https://img.icons8.com/pastel-glyph/50/000000/chat.png",alt:"live chat"})}),Object(b.jsx)("div",{children:"live chat"})]}),Object(b.jsxs)("div",{className:"topnav-item",id:"email",children:[Object(b.jsx)("div",{children:Object(b.jsx)("img",{src:"https://img.icons8.com/wired/64/000000/email.png",alt:"email"})}),Object(b.jsx)("div",{children:Object(b.jsx)("a",{href:"mailto:support@isquarehost.in",target:"_blank",children:"email"})})]}),Object(b.jsxs)("div",{className:"topnav-item",id:"call",children:[Object(b.jsx)("div",{children:Object(b.jsx)("img",{src:"https://img.icons8.com/dotty/64/000000/call-male.png",alt:"call"})}),Object(b.jsx)("div",{children:Object(b.jsx)("a",{href:"tel:https://meet.google.com/edu-beev-swh",children:"Call +91 9609796890"})})]})]})]})},C=c(73),I=c.p+"static/media/ajtak.02f796d7.png",Y=c.p+"static/media/cnbc.68cabe61.png",F=c.p+"static/media/india_today.029e1618.jpg",D=c.p+"static/media/indiatv.227f04a3.jpg",E=c.p+"static/media/news_nation.6d314a68.jpg",q=c.p+"static/media/tv9.66000bfe.jpg",A=c.p+"static/media/zeenews.2044faa1.jpg",L=c.p+"static/media/abp.76f13116.webp";c(63);var B=function(){return Object(b.jsx)("div",{className:"live-tv my-3",children:Object(b.jsxs)(y.a,{children:[Object(b.jsxs)(N.c,{children:[Object(b.jsx)(N.a,{path:"/live-tv",exact:!0,render:function(){return Object(b.jsx)("iframe",{width:"100%",height:"400",src:"https://www.youtube.com/embed/lXZkZgwLhSw",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})}}),Object(b.jsx)(N.a,{path:"/live-tv/ajtak",render:function(){return Object(b.jsx)("iframe",{width:"100%",height:"400",src:"https://www.youtube.com/embed/cnX9fQEq59A",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})}}),Object(b.jsx)(N.a,{path:"/live-tv/cnbc",render:function(){return Object(b.jsx)("iframe",{width:"100%",height:"400",src:"https://www.youtube.com/embed/Kxwrqig5UV4",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})}}),Object(b.jsx)(N.a,{path:"/live-tv/india_today",render:function(){return Object(b.jsx)("iframe",{width:"100%",height:"400",src:"https://www.youtube.com/embed/heFq-5rmUTY",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})}}),Object(b.jsx)(N.a,{path:"/live-tv/tv9",render:function(){return Object(b.jsx)("iframe",{width:"100%",height:"400",src:"https://www.youtube.com/embed/-Ku6BOxFIkc",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})}}),Object(b.jsx)(N.a,{path:"/live-tv/indiatv",render:function(){return Object(b.jsx)("iframe",{width:"100%",height:"400",src:"https://www.youtube.com/embed/k9MyH_YJp-0",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})}}),Object(b.jsx)(N.a,{path:"/live-tv/news_nation",render:function(){return Object(b.jsx)("iframe",{width:"100%",height:"400",src:"https://www.youtube.com/embed/cio591MYmxs",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})}}),Object(b.jsx)(N.a,{path:"/live-tv/zeenews",render:function(){return Object(b.jsx)("iframe",{width:"100%",height:"400",src:"https://www.youtube.com/embed/66Yr1Vo8NQs",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})}}),Object(b.jsx)(N.a,{path:"/live-tv/abp",render:function(){return Object(b.jsx)("iframe",{width:"100%",height:"400",src:"https://www.youtube.com/embed/odmHZVWb7ws",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})}})]}),Object(b.jsxs)(C.a,{children:[Object(b.jsxs)(C.a.Item,{interval:2e3,children:[Object(b.jsx)(y.c,{exact:!0,className:"live-tv-link",to:"/live-tv/ajtak",children:Object(b.jsx)("img",{src:I,alt:"",className:"d-block"})}),Object(b.jsx)(y.c,{exact:!0,className:"live-tv-link",to:"/live-tv/cnbc",children:Object(b.jsx)("img",{src:Y,alt:"",className:"d-block"})}),Object(b.jsx)(y.c,{exact:!0,className:"live-tv-link",to:"/live-tv/india_today",children:Object(b.jsx)("img",{src:F,alt:"",className:"d-block"})}),Object(b.jsx)(y.c,{exact:!0,className:"live-tv-link",to:"/live-tv/tv9",children:Object(b.jsx)("img",{src:q,alt:"",className:"d-block"})})]}),Object(b.jsxs)(C.a.Item,{interval:3e3,children:[Object(b.jsx)(y.c,{exact:!0,className:"live-tv-link",to:"/live-tv/indiatv",children:Object(b.jsx)("img",{src:D,alt:"",className:"d-block"})}),Object(b.jsx)(y.c,{exact:!0,className:"live-tv-link",to:"/live-tv/news_nation",children:Object(b.jsx)("img",{src:E,alt:"",className:"d-block"})}),Object(b.jsx)(y.c,{exact:!0,className:"live-tv-link",to:"/live-tv/zeenews",children:Object(b.jsx)("img",{src:A,alt:"",className:"d-block"})}),Object(b.jsx)(y.c,{exact:!0,className:"live-tv-link",to:"/live-tv/abp",children:Object(b.jsx)("img",{src:L,alt:"",className:"d-block"})})]})]})]})})};c(64);var H=function(){return Object(b.jsx)("section",{className:"footer-container",children:Object(b.jsx)("div",{className:"social-media",children:Object(b.jsxs)("div",{className:"social-media-wrap",children:[Object(b.jsx)("div",{className:"footer-logo",children:Object(b.jsx)(y.b,{to:"/",className:"social-logo",children:"NewsForYou.com"})}),Object(b.jsx)("small",{className:"website-rights",children:"NewsForYou.com \xa9 2021 "}),Object(b.jsxs)("div",{className:"social-icons",children:[Object(b.jsx)(y.b,{className:"social-icon facebook",to:"/",blank:"_blank","aria-label":"Facebook",children:Object(b.jsx)("i",{className:"fab fa-facebook-f"})}),Object(b.jsx)(y.b,{className:"social-icon instagram",to:"/",blank:"_blank","aria-label":"Facebook",children:Object(b.jsx)("i",{className:"fab fa-instagram"})}),Object(b.jsx)(y.b,{className:"social-icon youtube",to:"/",blank:"_blank","aria-label":"Youtube",children:Object(b.jsx)("i",{className:"fab fa-youtube"})}),Object(b.jsx)(y.b,{className:"social-icon twitter",to:"/",blank:"_blank","aria-label":"Twitter",children:Object(b.jsx)("i",{className:"fab fa-twitter"})}),Object(b.jsx)(y.b,{className:"social-icon linkedin",to:"/",blank:"_blank","aria-label":"LinkedIn",children:Object(b.jsx)("i",{className:"fab fa-linkedin"})})]})]})})})};var M=Object(N.h)((function(){var e=Object(N.g)().searchitem,t=Object(a.useState)([]),c=Object(j.a)(t,2),s=c[0],n=c[1];Object(a.useEffect)((function(){r()}),[e]);var r=function(){var t=Object(o.a)(l.a.mark((function t(){var c,a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"fb661f99e8fb9d6752716256a05764f2",t.next=3,fetch("https://gnews.io/api/v4/search?q=".concat(e,"&lang=en&country=in&token=").concat("fb661f99e8fb9d6752716256a05764f2"));case 3:return c=t.sent,t.next=6,c.json();case 6:a=t.sent,n(a.articles);case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(b.jsxs)("div",{children:[Object(b.jsx)(u,{header:"You Searched: "+e,bgImage:"https://source.unsplash.com/1600x900/?"+e,typical:!1}),Object(b.jsxs)("div",{className:"random-news",children:[Object(b.jsx)("div",{className:"random-news-header",children:Object(b.jsx)("h1",{className:"section-header",children:"Top Stories"})}),s?Object(b.jsx)(p.a,{children:s.map((function(e){return Object(b.jsx)(m,{title:e.title,content:e.content,desc:e.description,urlImg:e.image,url:e.url,src_name:e.source.name,publishDate:e.publishedAt,src_url:e.source.url})}))}):Object(b.jsx)("h1",{children:"No Result found"})]})]})}));var P=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(y.a,{children:[Object(b.jsx)(S,{}),Object(b.jsx)(T,{}),Object(b.jsxs)(N.c,{children:[Object(b.jsx)(N.a,{path:"/",exact:!0,component:x}),Object(b.jsx)(N.a,{path:"/sports",exact:!0,component:f}),Object(b.jsx)(N.a,{path:"/tech",component:O}),Object(b.jsx)(N.a,{path:"/science",exact:!0,component:v}),Object(b.jsx)(N.a,{path:"/health",exact:!0,component:g}),Object(b.jsx)(N.a,{path:"/entertainment",exact:!0,component:w}),Object(b.jsx)(N.a,{path:"/live-tv",component:B}),Object(b.jsx)(N.a,{path:"/search/:searchitem",component:M})]}),Object(b.jsx)(H,{})]})})},z=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,75)).then((function(t){var c=t.getCLS,a=t.getFID,s=t.getFCP,n=t.getLCP,r=t.getTTFB;c(e),a(e),s(e),n(e),r(e)}))};r.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(P,{})}),document.getElementById("root")),z()}},[[65,1,2]]]);
//# sourceMappingURL=main.d32e9182.chunk.js.map