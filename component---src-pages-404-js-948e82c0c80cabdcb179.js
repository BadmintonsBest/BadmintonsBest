(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{204:function(t,e,n){"use strict";n.r(e),n.d(e,"pageQuery",function(){return l});var a=n(9),i=n(0),r=n.n(i),o=n(219),c=n(218);var s=function(t){var e,n;function i(){return t.apply(this,arguments)||this}return n=t,(e=i).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,i.prototype.render=function(){var t=this.props.data,e=this.props.location.href,n=t.site.siteMetadata.title;return Object(a.d)(o.a,{location:this.props.location,title:n},Object(a.d)(c.a,{title:"404: Not Found",url:e}),Object(a.d)("h1",null,"Not Found"),Object(a.d)("p",null,"You just hit a route that doesn't exist... the sadness."))},i}(r.a.Component);e.default=s;var l="1097489062"},209:function(t,e,n){"use strict";n.d(e,"b",function(){return d}),n.d(e,"a",function(){return A});var a=n(239),i=n.n(a),r=n(241),o=n.n(r),c=n(229),s=n(211);o.a.overrideThemeStyles=function(){var t;return(t={"a.gatsby-resp-image-link":{boxShadow:"none"},a:{color:s.b},"a:visited":{color:s.d},"ul, ol":{listStyle:"disc inside",marginLeft:0}})[c.MOBILE_MEDIA_QUERY]={"ul, ol":{marginLeft:0}},t},o.a.baseFontSize="19px",o.a.baseLineHeight="1.68",o.a.scaleRatio=2,o.a.googleFonts=[{name:"Open Sans",styles:["700"]},{name:"Open Sans",styles:["400","400i","700","700i"]}],o.a.headerFontFamily=["Open Sans","sans-serif"],o.a.bodyFontFamily=["Open Sans","sans-serif"];var l=new i.a(o.a);var d=l.rhythm,A=(l.scale,d(36))},211:function(t,e,n){"use strict";n.d(e,"a",function(){return a}),n.d(e,"i",function(){return i}),n.d(e,"f",function(){return r}),n.d(e,"b",function(){return o}),n.d(e,"d",function(){return c}),n.d(e,"g",function(){return s}),n.d(e,"e",function(){return l}),n.d(e,"h",function(){return d}),n.d(e,"c",function(){return A});var a="-10",i="0",r="10",o="#4b6cb7",c="#29395d",s="#237A57",l="#093028",d="white",A={SMALLEST:"(min-width: "+"36em"+")",SMALL:"(min-width: "+"48em"+")",MEDIUM:"(min-width: "+"62em"+")",LARGE:"(min-width: "+"75em"+")"}},212:function(t,e,n){"use strict";n.d(e,"b",function(){return d});var a=n(9),i=n(0),r=n.n(i),o=n(74),c=n.n(o);n.d(e,"a",function(){return c.a});n(226),n(11).default.enqueue;var s=r.a.createContext({});function l(t){var e=t.staticQueryData,n=t.data,i=t.query,o=t.render,c=n?n.data:e[i]&&e[i].data;return Object(a.d)(r.a.Fragment,null,c&&o(c),!c&&Object(a.d)("div",null,"Loading (StaticQuery)"))}var d=function(t){var e=t.data,n=t.query,i=t.render,r=t.children;return Object(a.d)(s.Consumer,null,function(t){return Object(a.d)(l,{data:e,query:n,render:i||r,staticQueryData:t})})}},214:function(t,e,n){"use strict";var a=n(210),i=n(209),r=Object(a.a)("div",{target:"ecy2wsj0"})("margin-left:auto;margin-right:auto;max-width:",i.a,";");e.a=r},215:function(t,e,n){"use strict";var a=n(210),i=n(9),r=n(0),o=n.n(r);var c=Object(a.a)("div",{target:"e1ikj8xj0"})({name:"16u6kdt",styles:'display:block;&[data-adspot="sidebar-unit"]{margin-right:auto;margin-left:auto;}&[data-adspot="leaderboard-top-unit"]{margin-right:auto;margin-left:auto;iframe{display:block;margin:0 auto;}}&[data-adspot="in-content-ad-unit"]{float:right;margin:0 0 1rem 1rem;}'}),s=function(t){var e,n;function a(){return t.apply(this,arguments)||this}return n=t,(e=a).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,a.prototype.render=function(){var t=this.props.slug;return Object(i.d)(c,{"data-adspot":t})},a}(o.a.Component);e.a=s},218:function(t,e,n){"use strict";n(217),n(22);var a=n(9),i=n(233),r=(n(0),n(242)),o=n.n(r);function c(t){var e=t.dateModified,n=t.datePublished,r=t.description,c=t.image,s=t.keywords,l=t.lang,d=t.meta,A=t.title,u=t.schemaType,g=t.url,p=t.wordCount,b=i.data,m=b.logo,f=b.site,h=r||f.siteMetadata.description,y=[{name:"description",content:h},{property:"og:title",content:A},{property:"og:description",content:h},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:f.siteMetadata.author},{name:"twitter:title",content:A},{name:"twitter:description",content:h}],j=new Date(e).getFullYear(),O=g?g.split("/")[3]:"",w=""+f.siteMetadata.siteUrl+m.childImageSharp.fixed.src,E=null;c&&(y=[{property:"twitter:image",content:E=""+f.siteMetadata.siteUrl+c.src},{property:"og:image",content:E}].concat(y));return Object(a.d)(o.a,{htmlAttributes:{lang:l},title:A,titleTemplate:"%s | "+f.siteMetadata.title,meta:y.concat(d)},Object(a.d)("script",{type:"application/ld+json"},'\n        {\n          "@context" : "http://schema.org",\n          "@type" : "'+u+'",\n          "mainEntityOfPage": {\n              "@type": "WebPage",\n              "@id": "'+f.siteMetadata.siteUrl+'"\n          },\n          '+("BlogPosting"===u?'"articleSection" : "'+O+'",':"")+'\n          "name" : "'+A+'",\n          "headline" : "'+A+'",\n          "description" : "'+h+'",\n          '+(c?'"image": "'+E+'",':"")+'\n          "inLanguage" : "'+l+'",\n          "author" : "'+f.siteMetadata.author+'",\n          "creator" : "'+f.siteMetadata.author+'",\n          "publisher": {\n            "@type": "Organization",\n            "name": "'+f.siteMetadata.title+'",\n            "logo": {\n              "@type": "ImageObject",\n              "url": "'+w+'"\n            }\n          },\n          "accountablePerson" : "'+f.siteMetadata.author+'",\n          "copyrightHolder" : "'+f.siteMetadata.title+'",\n          "copyrightYear" : "'+j+'",\n          "datePublished": "'+n+'",\n          "dateModified" : "'+e+'",\n          "url" : "'+g+'",\n          '+(p?'"wordCount" : "'+p+'",':"")+'\n          "keywords" : ['+s.join(", ")+"]\n        }\n      "))}var s=new Date,l=s.getFullYear()+"-"+(s.getMonth()+1)+"-"+s.getDate();c.defaultProps={dateModified:l,datePublished:l,description:"",image:null,keywords:[],lang:"en",meta:[],schemaType:"WebPage",wordCount:null},e.a=c},219:function(t,e,n){"use strict";var a=n(210),i=n(9),r=n(0),o=n.n(r),c=(n(21),n(237),n(217),n(227)),s=n(212),l=n(213),d=n.n(l),A=n(209),u=n(211),g=n(230),p=n.n(g),b=n(231),m=n.n(b);function f(){return(f=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t}).apply(this,arguments)}var h=Object(a.a)("header",{target:"e18zoque0"})("position:relative;display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between;align-items:center;max-width:",A.a,";margin-left:auto;margin-right:auto;padding:",Object(A.b)(.5),";background-color:",u.g,";&:before{position:absolute;top:0;left:50%;transform:translateX(-50%);z-index:",u.a,";display:block;width:100vw;height:100%;background-color:",u.g,';content:"";}'),y=Object(a.a)("a",{target:"e18zoque1"})("display:flex;flex-direction:row;flex-wrap:nowrap;align-items:center;line-height:1;text-decoration:none;text-transform:uppercase;color:",u.h," !important;"),j=Object(a.a)("a",{target:"e18zoque2"})("position:relative;overflow:hidden;display:block;width:",Object(A.b)(1.5),";height:",Object(A.b)(1.5),";box-shadow:none;outline:none;text-decoration:none;color:transparent;@media ",u.c.MEDIUM,"{display:none;}> svg{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);display:block;width:100%;height:100%;padding:",Object(A.b)(.4),";fill:",u.h,";}"),O=Object(a.a)("nav",{target:"e18zoque3"})("position:fixed;top:0;left:0;z-index:",u.f,";display:flex;flex-direction:row;width:100vw;min-height:100vh;background:",u.g,";background:-webkit-linear-gradient(to left,",u.e,",",u.g,");background:linear-gradient(to left,",u.e,",",u.g,");opacity:0;transform:translate3d(",Object(A.b)(2),",0,0);visibility:hidden;transition-delay:400ms,0ms,100ms;transition-duration:0ms,300ms,300ms;transition-property:visibility,opacity,transform;transition-timing-function:ease-in;@media ",u.c.MEDIUM,"{position:static;z-index:",u.i,";display:block;width:auto;min-height:auto;background:none;opacity:1;transform:none;transition:none;visibility:visible;}&.is-open{opacity:1;transform:none;visibility:visible;transition-delay:0ms,0ms,100ms;}"),w=Object(a.a)("ul",{target:"e18zoque4"})("display:block;width:100%;margin:0;padding:",Object(A.b)(1),";list-style:none;@media ",u.c.MEDIUM,"{display:flex;flex-direction:row;flex-wrap:nowrap;padding:0;white-space:nowrap;}"),E=Object(a.a)("li",{target:"e18zoque5"})("display:block;width:100%;margin:0;padding:0;@media ",u.c.MEDIUM,"{&:first-child{display:none;}}"),v=Object(a.a)(s.a,{target:"e18zoque6"})("display:block;width:100%;margin:0;padding:",Object(A.b)(.5),";box-shadow:none;outline:none;text-decoration:none;color:",u.h,";&:visited{color:",u.h,";}"),x={name:"b20leo",styles:"width:100%;> svg{width:auto;right:0;transform:translate(0, -50%);left:initial;}"},k=function(t){var e,n;function a(e){var n;return(n=t.call(this,e)||this).toggleMenu=function(t){t.preventDefault(),n.setState(function(t){return{menuOpen:!t.menuOpen}})},n.state={menuOpen:!1},n}return n=t,(e=a).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,a.prototype.render=function(){var t=this.props.data.site.siteMetadata,e=t.menu,n=t.title;return Object(i.d)(h,null,Object(i.d)(y,{href:"/"},Object(i.d)(d.a,{fixed:this.props.data.logo.childImageSharp.fixed,alt:n,style:{marginRight:Object(A.b)(.5),marginBottom:0,minWidth:50,borderRadius:"100%"},imgStyle:{borderRadius:"50%"}})," ","Badmintons Best"),Object(i.d)(j,{href:"#menu-navigation",onClick:this.toggleMenu},Object(i.d)(p.a,null)," Open Menu"),Object(i.d)(O,{id:"menu-navigation",className:this.state.menuOpen?"is-open":""},Object(i.d)(w,null,Object(i.d)(E,{key:"0"},Object(i.d)(j,{href:"#close-menu-navigation",onClick:this.toggleMenu,css:x},Object(i.d)(m.a,null)," Close Menu")),e.map(function(t,e){return Object(i.d)(E,{key:e},Object(i.d)(v,{to:t.link},t.text))}))))},a}(r.Component),B=function(t){return Object(i.d)(s.b,{query:"229204878",render:function(e){return Object(i.d)(k,f({data:e},t))},data:c})},M=n(232),Q=n(214),C=Object(a.a)("footer",{target:"eegg9ep0"})("padding:",Object(A.b)(1)," 0;background:",u.g,";background:-webkit-linear-gradient(to left,",u.e,",",u.g,");background:linear-gradient(to left,",u.e,",",u.g,");color:white;@media ",u.c.MEDIUM,"{padding-top:",Object(A.b)(2),";padding-bottom:",Object(A.b)(2),";}"),S=Object(a.a)("div",{target:"eegg9ep1"})("@media ",u.c.MEDIUM,"{display:flex;flex-direction:row;flex-wrap:nowrap;margin-left:-",Object(A.b)(1.5),";}"),I=Object(a.a)("div",{target:"eegg9ep2"})("& + &{margin-top:",Object(A.b)(1.5),";}@media ",u.c.MEDIUM,"{flex:1 1 0;margin-top:0;padding-left:",Object(A.b)(1.5),";& + &{margin-top:0;}}& > *:first-child{margin-top:0;}& > *:last-child{margin-bottom:0;}"),Y=Object(a.a)(s.a,{target:"eegg9ep3"})({name:"okxw92",styles:"color:white;&:visited{color:white;}"}),R=Object(a.a)("a",{target:"eegg9ep4"})({name:"okxw92",styles:"color:white;&:visited{color:white;}"}),D=function(){var t=M.data.site.siteMetadata,e=t.social,n=t.contact;return Object(i.d)(C,null,Object(i.d)(Q.a,{style:{padding:"0 "+Object(A.b)(.5)}},Object(i.d)(S,null,Object(i.d)(I,null,Object(i.d)("h3",null,"Legal Information"),Object(i.d)("p",null,"This site is owned and operated by Ramiel Ltd. Ramiel Ltd is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com. Ramiel Ltd is compensated for referring traffic and business to these companies. Copyright © Ramiel Ltd"),Object(i.d)("ul",null,Object(i.d)("li",null,Object(i.d)(Y,{to:"/terms-and-conditions"},"Terms and Conditions")),Object(i.d)("li",null,Object(i.d)(Y,{to:"/privacy-policy"},"Privacy Policy")))),Object(i.d)(I,null,Object(i.d)("h3",null,"Contact Us"),Object(i.d)("ul",null,Object(i.d)("li",null,Object(i.d)(R,{href:"https://youtube.com/"+e.youtube},"YouTube")),Object(i.d)("li",null,Object(i.d)(R,{href:"https://instagram.com/"+e.instagram},"Instagram")),Object(i.d)("li",null,Object(i.d)(R,{href:"https://twitter.com/"+e.twitter},"Twitter")),Object(i.d)("li",null,Object(i.d)(R,{href:"https://facebook.com/"+e.twitter},"Facebook")),Object(i.d)("li",null,Object(i.d)(R,{href:"mailto:"+n.email},"Email")))))),Object(i.d)(Q.a,{style:{textAlign:"center",marginTop:Object(A.b)(1.5),padding:"0 "+Object(A.b)(.5)}},"© ",(new Date).getFullYear()," Badmintons Best, Built with"," ",Object(i.d)("a",{style:{color:"white"},href:"https://www.gatsbyjs.org"},"Gatsby")))},L=n(215);var P=Object(a.a)("div",{target:"ea5p3660"})(),U=Object(a.a)("div",{target:"ea5p3661"})(),F=function(t){var e,n;function a(){return t.apply(this,arguments)||this}return n=t,(e=a).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,a.prototype.render=function(){var t=this.props.children;return Object(i.d)(P,null,Object(i.d)(i.a,{styles:Object(i.c)()}),Object(i.d)(B,null),Object(i.d)(U,null,Object(i.d)(L.a,{slug:"leaderboard-top-unit"}),t),Object(i.d)(D,null))},a}(o.a.Component);e.a=F},226:function(t,e,n){var a;t.exports=(a=n(228))&&a.default||a},227:function(t){t.exports={data:{logo:{childImageSharp:{fixed:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAUCBAP/xAAXAQADAQAAAAAAAAAAAAAAAAACAwQA/9oADAMBAAIQAxAAAAGlqR2Lq60Niu6Cn9gS/wD/xAAbEAEAAgMBAQAAAAAAAAAAAAACAQMREhMABP/aAAgBAQABBQLrvGcTH0D1OxtfQgUuyLBEO6NiTBP/xAAaEQEAAgMBAAAAAAAAAAAAAAABAAMQETFR/9oACAEDAQE/AWsHRGmv2DzH/8QAGBEAAgMAAAAAAAAAAAAAAAAAAAEQERL/2gAIAQIBAT8Bs05//8QAIBAAAgIABgMAAAAAAAAAAAAAAAECEQMSITEyQVGBof/aAAgBAQAGPwJ5ej22VJ6ocKt+Btw+lpCxFyFHqTKWx//EACAQAQACAQIHAAAAAAAAAAAAAAEAESExUUFhcYGx0fD/2gAIAQEAAT8hTZY8hmbsM7EJdFqespnMrKvsRVnA1py9ETOS9YU1BC95YLoGoWOhwn//2gAMAwEAAgADAAAAEJgHgf/EABkRAQEBAQEBAAAAAAAAAAAAAAERACExUf/aAAgBAwEBPxCyOPncFjLka+XKrXf/xAAZEQEAAgMAAAAAAAAAAAAAAAABABARMVH/2gAIAQIBAT8QGmWHGJuv/8QAIBABAAICAgEFAAAAAAAAAAAAAQARITGBkUFRYXHB8P/aAAgBAQABPxBJ2VOmkvCU9xv1cJeQftJQdgsw0LrlriB+MlRkCOX3PccZZKavgPrC4sgry/mYxDrQcU8MNuAPtW8dQV5aBP/Z",width:50,height:50,src:"/static/aa5bffb11c463c6ebfcf01f9697c7915/9b664/badmintonsbest-logo.jpg",srcSet:"/static/aa5bffb11c463c6ebfcf01f9697c7915/9b664/badmintonsbest-logo.jpg 1x,\n/static/aa5bffb11c463c6ebfcf01f9697c7915/06a10/badmintonsbest-logo.jpg 1.5x,\n/static/aa5bffb11c463c6ebfcf01f9697c7915/f1b5a/badmintonsbest-logo.jpg 2x"}}},site:{siteMetadata:{title:"Badmintons Best",menu:[{text:"Recommended Gear",link:"/recommended-gear/"},{text:"Beginners Guide",link:"/categories/beginners-info/"},{text:"The Blog",link:"/blog/"},{text:"About Us",link:"/about/"}]}}}}},228:function(t,e,n){"use strict";n.r(e);n(21);var a=n(0),i=n.n(a),r=n(108);e.default=function(t){var e=t.location,n=t.pageResources;return n?i.a.createElement(r.a,Object.assign({location:e,pageResources:n},n.json)):null}},230:function(t,e,n){var a=n(0);function i(t){return a.createElement("svg",t,[a.createElement("g",{key:0},a.createElement("g",{id:"menu"},a.createElement("path",{d:"M0,382.5h459v-51H0V382.5z M0,255h459v-51H0V255z M0,76.5v51h459v-51H0z"}))),a.createElement("g",{key:1}),a.createElement("g",{key:2}),a.createElement("g",{key:3}),a.createElement("g",{key:4}),a.createElement("g",{key:5}),a.createElement("g",{key:6}),a.createElement("g",{key:7}),a.createElement("g",{key:8}),a.createElement("g",{key:9}),a.createElement("g",{key:10}),a.createElement("g",{key:11}),a.createElement("g",{key:12}),a.createElement("g",{key:13}),a.createElement("g",{key:14}),a.createElement("g",{key:15})])}i.defaultProps={version:"1.1",id:"Capa_1",x:"0px",y:"0px",width:"459px",height:"459px",viewBox:"0 0 459 459",style:{enableBackground:"new 0 0 459 459"},xmlSpace:"preserve"},t.exports=i,i.default=i},231:function(t,e,n){var a=n(0);function i(t){return a.createElement("svg",t,[a.createElement("g",{key:0},a.createElement("path",{d:"M28.228,23.986L47.092,5.122c1.172-1.171,1.172-3.071,0-4.242c-1.172-1.172-3.07-1.172-4.242,0L23.986,19.744L5.121,0.88\r\n\t\tc-1.172-1.172-3.07-1.172-4.242,0c-1.172,1.171-1.172,3.071,0,4.242l18.865,18.864L0.879,42.85c-1.172,1.171-1.172,3.071,0,4.242\r\n\t\tC1.465,47.677,2.233,47.97,3,47.97s1.535-0.293,2.121-0.879l18.865-18.864L42.85,47.091c0.586,0.586,1.354,0.879,2.121,0.879\r\n\t\ts1.535-0.293,2.121-0.879c1.172-1.171,1.172-3.071,0-4.242L28.228,23.986z"})),a.createElement("g",{key:1}),a.createElement("g",{key:2}),a.createElement("g",{key:3}),a.createElement("g",{key:4}),a.createElement("g",{key:5}),a.createElement("g",{key:6}),a.createElement("g",{key:7}),a.createElement("g",{key:8}),a.createElement("g",{key:9}),a.createElement("g",{key:10}),a.createElement("g",{key:11}),a.createElement("g",{key:12}),a.createElement("g",{key:13}),a.createElement("g",{key:14}),a.createElement("g",{key:15})])}i.defaultProps={version:"1.1",id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 47.971 47.971",style:{enableBackground:"new 0 0 47.971 47.971"},xmlSpace:"preserve"},t.exports=i,i.default=i},232:function(t){t.exports={data:{site:{siteMetadata:{social:{facebook:"BadmintonsBest",instagram:"badmintonsbest",twitter:"BadmintonsBest",youtube:"UCszQfT2se87xk2TqrS7xHEQ"},contact:{email:"info@badmintonsbest.com"}}}}}},233:function(t){t.exports={data:{logo:{childImageSharp:{fixed:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAAAsSAAALEgHS3X78AAABgUlEQVQoz4WSu0oDQRSGT1ajBkSxEmFBVBCiBLK7EkUCijeMN0RJY0whNoKNjSBipY222lgpthZWwTq+gOwWARW8IPoGYqvfuLO4CTEOfPznzJz5Z3b2iISG96sRrc0Qhz5IQgJiFTXiSpURmLm6EO2BOExCSkHNFPQT9+o9hvxlWHGqus0eDFM8oRTmYYh8FN0FW5sZf5kp6nV8Am+wwIY5dByWPD+eZu4djnVtnVfDMLjh5YvIF3oIY8oMg0U0A0ePrJFfBV9V1dDVp+mis1ff8A5OVQ4XOi7ptfPgHb0abxgY5p78TR9wwGFbCuJ99PPZX8vV/GQ39Kd1flPyN0bDz3LvzxW9iu4Ib4x4IcPgrxG3QIF8JWSYJb9GW1VeiMUMyWbFsW2xwXGc8nZxqz9DVyjulv8GRZ1SfjMTmqBBqZ7rCFqqGI3+6KBltSUdp1HfzlBwQ1N0A89guIzOwjZsQh7W9fyG57fN6i36ILK2Y5r59nQ6kbKsEYwUA5hmvgFUaKYHTZspIQAAAABJRU5ErkJggg==",width:1200,height:756,src:"/static/7e31ccdda506dba41a1d03f767a25b73/ba299/badmintonsbest-logo-full.png",srcSet:"/static/7e31ccdda506dba41a1d03f767a25b73/ba299/badmintonsbest-logo-full.png 1x,\n/static/7e31ccdda506dba41a1d03f767a25b73/3e65a/badmintonsbest-logo-full.png 1.5x,\n/static/7e31ccdda506dba41a1d03f767a25b73/a417a/badmintonsbest-logo-full.png 2x"}}},site:{siteMetadata:{title:"Badmintons Best",description:"Learning from the best, realise your true potential 🔥 🏸 💯",author:"Liam Walsh",siteUrl:"https://www.badmintonsbest.com"}}}}}}]);
//# sourceMappingURL=component---src-pages-404-js-948e82c0c80cabdcb179.js.map