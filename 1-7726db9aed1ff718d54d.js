(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{209:function(e,t,a){"use strict";a.d(t,"b",function(){return s}),a.d(t,"a",function(){return l});var n=a(239),i=a.n(n),r=a(241),o=a.n(r),A=a(229),c=a(211);o.a.overrideThemeStyles=function(){var e;return(e={"a.gatsby-resp-image-link":{boxShadow:"none"},a:{color:c.b},"a:visited":{color:c.d},"ul, ol":{listStyle:"disc inside",marginLeft:0},"li > p":{display:"inline"}})[A.MOBILE_MEDIA_QUERY]={"ul, ol":{marginLeft:0}},e},o.a.baseFontSize="19px",o.a.baseLineHeight="1.68",o.a.scaleRatio=2,o.a.googleFonts=[{name:"Open Sans",styles:["700"]},{name:"Open Sans",styles:["400","400i","700","700i"]}],o.a.headerFontFamily=["Open Sans","sans-serif"],o.a.bodyFontFamily=["Open Sans","sans-serif"];var d=new i.a(o.a);var s=d.rhythm,l=(d.scale,s(36))},211:function(e,t,a){"use strict";a.d(t,"a",function(){return n}),a.d(t,"i",function(){return i}),a.d(t,"f",function(){return r}),a.d(t,"b",function(){return o}),a.d(t,"d",function(){return A}),a.d(t,"g",function(){return c}),a.d(t,"e",function(){return d}),a.d(t,"h",function(){return s}),a.d(t,"c",function(){return l});var n="-10",i="0",r="10",o="#4b6cb7",A="#29395d",c="#237A57",d="#093028",s="white",l={SMALLEST:"(min-width: "+"36em"+")",SMALL:"(min-width: "+"48em"+")",MEDIUM:"(min-width: "+"62em"+")",LARGE:"(min-width: "+"75em"+")"}},212:function(e,t,a){"use strict";a.d(t,"b",function(){return s});var n=a(9),i=a(0),r=a.n(i),o=a(74),A=a.n(o);a.d(t,"a",function(){return A.a});a(226),a(11).default.enqueue;var c=r.a.createContext({});function d(e){var t=e.staticQueryData,a=e.data,i=e.query,o=e.render,A=a?a.data:t[i]&&t[i].data;return Object(n.d)(r.a.Fragment,null,A&&o(A),!A&&Object(n.d)("div",null,"Loading (StaticQuery)"))}var s=function(e){var t=e.data,a=e.query,i=e.render,r=e.children;return Object(n.d)(c.Consumer,null,function(e){return Object(n.d)(d,{data:t,query:a,render:i||r,staticQueryData:e})})}},214:function(e,t,a){"use strict";var n=a(210),i=a(209),r=Object(n.a)("div",{target:"ecy2wsj0"})("margin-left:auto;margin-right:auto;max-width:",i.a,";");t.a=r},215:function(e,t,a){"use strict";var n=a(210),i=a(9),r=a(0),o=a.n(r);var A=Object(n.a)("div",{target:"e1ikj8xj0"})({name:"65rs51",styles:'display:block;&[data-adspot="sidebar-unit"]{margin-right:auto;margin-left:auto;iframe{display:block;margin:0 auto;}}&[data-adspot="leaderboard-top-unit"]{margin-right:auto;margin-left:auto;iframe{display:block;margin:0 auto;}}&[data-adspot="in-content-ad-unit"]{float:right;margin:0 0 1rem 1rem;}'}),c=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props.slug;return Object(i.d)(A,{"data-adspot":e})},n}(o.a.Component);t.a=c},218:function(e,t,a){"use strict";a(217),a(22);var n=a(9),i=a(233),r=(a(0),a(242)),o=a.n(r);function A(e){var t=e.dateModified,a=e.datePublished,r=e.description,A=e.image,c=e.keywords,d=e.lang,s=e.meta,l=e.title,g=e.schemaType,b=e.url,u=e.wordCount,p=i.data,m=p.logo,f=p.site,h=r||f.siteMetadata.description,j=[{name:"description",content:h},{property:"og:title",content:l},{property:"og:description",content:h},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:f.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:h}],y=new Date(t).getFullYear(),O=b?b.split("/")[3]:"",E=""+f.siteMetadata.siteUrl+m.childImageSharp.fixed.src,B=null;A&&(j=[{property:"twitter:image",content:B=""+f.siteMetadata.siteUrl+A.src},{property:"og:image",content:B}].concat(j));return Object(n.d)(o.a,{htmlAttributes:{lang:d},title:l,titleTemplate:"%s | "+f.siteMetadata.title,meta:j.concat(s)},Object(n.d)("script",{type:"application/ld+json"},'\n        {\n          "@context" : "http://schema.org",\n          "@type" : "'+g+'",\n          "mainEntityOfPage": {\n              "@type": "WebPage",\n              "@id": "'+f.siteMetadata.siteUrl+'"\n          },\n          '+("BlogPosting"===g?'"articleSection" : "'+O+'",':"")+'\n          "name" : "'+l+'",\n          "headline" : "'+l+'",\n          "description" : "'+h+'",\n          '+(A?'"image": "'+B+'",':"")+'\n          "inLanguage" : "'+d+'",\n          "author" : "'+f.siteMetadata.author+'",\n          "creator" : "'+f.siteMetadata.author+'",\n          "publisher": {\n            "@type": "Organization",\n            "name": "'+f.siteMetadata.title+'",\n            "logo": {\n              "@type": "ImageObject",\n              "url": "'+E+'"\n            }\n          },\n          "accountablePerson" : "'+f.siteMetadata.author+'",\n          "copyrightHolder" : "'+f.siteMetadata.title+'",\n          "copyrightYear" : "'+y+'",\n          "datePublished": "'+a+'",\n          "dateModified" : "'+t+'",\n          "url" : "'+b+'",\n          '+(u?'"wordCount" : "'+u+'",':"")+'\n          "keywords" : ['+c.join(", ")+"]\n        }\n      "))}var c=new Date,d=c.getFullYear()+"-"+(c.getMonth()+1)+"-"+c.getDate();A.defaultProps={dateModified:d,datePublished:d,description:"",image:null,keywords:[],lang:"en",meta:[],schemaType:"WebPage",wordCount:null},t.a=A},219:function(e,t,a){"use strict";var n=a(210),i=a(9),r=a(0),o=a.n(r),A=(a(21),a(237),a(217),a(227)),c=a(212),d=a(213),s=a.n(d),l=a(209),g=a(211),b=a(230),u=a.n(b),p=a(231),m=a.n(p);function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var h=Object(n.a)("header",{target:"e18zoque0"})("position:relative;display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between;align-items:center;max-width:",l.a,";margin-left:auto;margin-right:auto;padding:",Object(l.b)(.5),";background-color:",g.g,";&:before{position:absolute;top:0;left:50%;transform:translateX(-50%);z-index:",g.a,";display:block;width:100vw;height:100%;background-color:",g.g,';content:"";}'),j=Object(n.a)("a",{target:"e18zoque1"})("display:flex;flex-direction:row;flex-wrap:nowrap;align-items:center;line-height:1;text-decoration:none;text-transform:uppercase;color:",g.h," !important;"),y=Object(n.a)("a",{target:"e18zoque2"})("position:relative;overflow:hidden;display:block;width:",Object(l.b)(1.5),";height:",Object(l.b)(1.5),";box-shadow:none;outline:none;text-decoration:none;color:transparent;@media ",g.c.MEDIUM,"{display:none;}> svg{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);display:block;width:100%;height:100%;padding:",Object(l.b)(.4),";fill:",g.h,";}"),O=Object(n.a)("nav",{target:"e18zoque3"})("position:fixed;top:0;left:0;z-index:",g.f,";display:flex;flex-direction:row;width:100vw;min-height:100vh;background:",g.g,";background:-webkit-linear-gradient(to left,",g.e,",",g.g,");background:linear-gradient(to left,",g.e,",",g.g,");opacity:0;transform:translate3d(",Object(l.b)(2),",0,0);visibility:hidden;transition-delay:400ms,0ms,100ms;transition-duration:0ms,300ms,300ms;transition-property:visibility,opacity,transform;transition-timing-function:ease-in;@media ",g.c.MEDIUM,"{position:static;z-index:",g.i,";display:block;width:auto;min-height:auto;background:none;opacity:1;transform:none;transition:none;visibility:visible;}&.is-open{opacity:1;transform:none;visibility:visible;transition-delay:0ms,0ms,100ms;}"),E=Object(n.a)("ul",{target:"e18zoque4"})("display:block;width:100%;margin:0;padding:",Object(l.b)(1),";list-style:none;@media ",g.c.MEDIUM,"{display:flex;flex-direction:row;flex-wrap:nowrap;padding:0;white-space:nowrap;}"),B=Object(n.a)("li",{target:"e18zoque5"})("display:block;width:100%;margin:0;padding:0;@media ",g.c.MEDIUM,"{&:first-child{display:none;}}"),w=Object(n.a)(c.a,{target:"e18zoque6"})("display:block;width:100%;margin:0;padding:",Object(l.b)(.5),";box-shadow:none;outline:none;text-decoration:none;color:",g.h,";&:visited{color:",g.h,";}"),x={name:"b20leo",styles:"width:100%;> svg{width:auto;right:0;transform:translate(0, -50%);left:initial;}"},v=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).toggleMenu=function(e){e.preventDefault(),a.setState(function(e){return{menuOpen:!e.menuOpen}})},a.state={menuOpen:!1},a}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props.data.site.siteMetadata,t=e.menu,a=e.title;return Object(i.d)(h,null,Object(i.d)(j,{href:"/"},Object(i.d)(s.a,{fixed:this.props.data.logo.childImageSharp.fixed,alt:a,style:{marginRight:Object(l.b)(.5),marginBottom:0,minWidth:50,borderRadius:"100%"},imgStyle:{borderRadius:"50%"}})," ","Badmintons Best"),Object(i.d)(y,{href:"#menu-navigation",onClick:this.toggleMenu},Object(i.d)(u.a,null)," Open Menu"),Object(i.d)(O,{id:"menu-navigation",className:this.state.menuOpen?"is-open":""},Object(i.d)(E,null,Object(i.d)(B,{key:"0"},Object(i.d)(y,{href:"#close-menu-navigation",onClick:this.toggleMenu,css:x},Object(i.d)(m.a,null)," Close Menu")),t.map(function(e,t){return Object(i.d)(B,{key:t},Object(i.d)(w,{to:e.link},e.text))}))))},n}(r.Component),k=function(e){return Object(i.d)(c.b,{query:"229204878",render:function(t){return Object(i.d)(v,f({data:t},e))},data:A})},M=a(232),Q=a(214),C=Object(n.a)("footer",{target:"eegg9ep0"})("padding:",Object(l.b)(1)," 0;background:",g.g,";background:-webkit-linear-gradient(to left,",g.e,",",g.g,");background:linear-gradient(to left,",g.e,",",g.g,");color:white;@media ",g.c.MEDIUM,"{padding-top:",Object(l.b)(2),";padding-bottom:",Object(l.b)(2),";}"),I=Object(n.a)("div",{target:"eegg9ep1"})("@media ",g.c.MEDIUM,"{display:flex;flex-direction:row;flex-wrap:nowrap;margin-left:-",Object(l.b)(1.5),";}"),Y=Object(n.a)("div",{target:"eegg9ep2"})("& + &{margin-top:",Object(l.b)(1.5),";}@media ",g.c.MEDIUM,"{flex:1 1 0;margin-top:0;padding-left:",Object(l.b)(1.5),";& + &{margin-top:0;}}& > *:first-child{margin-top:0;}& > *:last-child{margin-bottom:0;}"),S=Object(n.a)(c.a,{target:"eegg9ep3"})({name:"okxw92",styles:"color:white;&:visited{color:white;}"}),D=Object(n.a)("a",{target:"eegg9ep4"})({name:"okxw92",styles:"color:white;&:visited{color:white;}"}),R=function(){var e=M.data.site.siteMetadata,t=e.social,a=e.contact;return Object(i.d)(C,null,Object(i.d)(Q.a,{style:{padding:"0 "+Object(l.b)(.5)}},Object(i.d)(I,null,Object(i.d)(Y,null,Object(i.d)("h3",null,"Legal Information"),Object(i.d)("p",null,"This site is owned and operated by Ramiel Ltd. Ramiel Ltd is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com. Ramiel Ltd is compensated for referring traffic and business to these companies. Copyright © Ramiel Ltd"),Object(i.d)("ul",null,Object(i.d)("li",null,Object(i.d)(S,{to:"/terms-and-conditions"},"Terms and Conditions")),Object(i.d)("li",null,Object(i.d)(S,{to:"/privacy-policy"},"Privacy Policy")))),Object(i.d)(Y,null,Object(i.d)("h3",null,"Contact Us"),Object(i.d)("ul",null,Object(i.d)("li",null,Object(i.d)(D,{href:"https://youtube.com/"+t.youtube},"YouTube")),Object(i.d)("li",null,Object(i.d)(D,{href:"https://instagram.com/"+t.instagram},"Instagram")),Object(i.d)("li",null,Object(i.d)(D,{href:"https://twitter.com/"+t.twitter},"Twitter")),Object(i.d)("li",null,Object(i.d)(D,{href:"https://facebook.com/"+t.twitter},"Facebook")),Object(i.d)("li",null,Object(i.d)(D,{href:"mailto:"+a.email},"Email")))))),Object(i.d)(Q.a,{style:{textAlign:"center",marginTop:Object(l.b)(1.5),padding:"0 "+Object(l.b)(.5)}},"© ",(new Date).getFullYear()," Badmintons Best, Built with"," ",Object(i.d)("a",{style:{color:"white"},href:"https://www.gatsbyjs.org"},"Gatsby")))},P=a(215);var G=Object(n.a)("div",{target:"ea5p3660"})(),U=Object(n.a)("div",{target:"ea5p3661"})(),L=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props.children;return Object(i.d)(G,null,Object(i.d)(i.a,{styles:Object(i.c)()}),Object(i.d)(k,null),Object(i.d)(U,null,Object(i.d)(P.a,{slug:"leaderboard-top-unit"}),e),Object(i.d)(R,null))},n}(o.a.Component);t.a=L},221:function(e,t,a){"use strict";a(217);var n=a(9),i=a(256),r=(a(0),a(213)),o=a.n(r),A=a(244),c=a(209);t.a=function(){var e=i.data,t=e.site.siteMetadata.author;return Object(n.d)("div",{style:{}},Object(n.d)("h3",{style:{marginTop:0}},"About"),Object(n.d)(o.a,{fixed:e.avatar.childImageSharp.fixed,alt:t,style:{marginBottom:Object(c.b)(1)}}),Object(n.d)("p",null,"Hi"," ",Object(n.d)("span",{role:"img","aria-label":"waving hand"},"👋")," ","I'm Liam. I've been playing Badminton for over 15 years and along with my family is my biggest passion in life. If I'm not with family I'm either playing or watching Badminton on a mission to be the best I can be. This site is where I can share what I've learnt from playing, being coached and from watching... Badmintons Best."),Object(n.d)("p",null,Object(n.d)(A.a,{to:"/about"},"Read more")))}},222:function(e,t,a){"use strict";var n=a(210),i=a(9),r=a(0),o=a.n(r),A=a(214),c=a(209),d=a(211);var s=Object(n.a)("div",{target:"e1tdh1ze0"})("&.hero{background:",d.b,";background:-webkit-linear-gradient(to top,",d.d,",",d.b,");background:linear-gradient(to top,",d.d,",",d.b,");color:white;}"),l=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props,t=e.children,a=e.theme;return Object(i.d)(s,{className:a},Object(i.d)(A.a,{css:Object(i.c)("padding:",Object(c.b)(1)," ",Object(c.b)(.5),";@media ",d.c.MEDIUM,"{padding-top:",Object(c.b)(2),";padding-bottom:",Object(c.b)(2),";}")},t))},n}(o.a.Component);t.a=l},223:function(e,t,a){"use strict";var n=a(210),i=a(209),r=a(211),o=Object(n.a)("div",{target:"e1svbmn50"})("@media ",r.c.MEDIUM,"{display:flex;flex-direction:row;flex-wrap:nowrap;margin-left:-",Object(i.b)(2.5),";}");t.a=o},224:function(e,t,a){"use strict";var n=a(210),i=a(209),r=a(211),o=Object(n.a)("main",{target:"e1ijqqu0"})("@media ",r.c.MEDIUM,"{flex:1 1 70%;padding-left:",Object(i.b)(2.5),";}");t.a=o},225:function(e,t,a){"use strict";var n=a(210),i=a(209),r=a(211),o=Object(n.a)("aside",{target:"e1oe3q8y0"})("@media ",r.c.MEDIUM,"{flex:1 1 30%;padding-left:",Object(i.b)(2.5),";}> * + *{margin-top:",Object(i.b)(2),";}");t.a=o},226:function(e,t,a){var n;e.exports=(n=a(228))&&n.default||n},227:function(e){e.exports={data:{logo:{childImageSharp:{fixed:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAUCBAP/xAAXAQADAQAAAAAAAAAAAAAAAAACAwQA/9oADAMBAAIQAxAAAAGlqR2Lq60Niu6Cn9gS/wD/xAAbEAEAAgMBAQAAAAAAAAAAAAACAQMREhMABP/aAAgBAQABBQLrvGcTH0D1OxtfQgUuyLBEO6NiTBP/xAAaEQEAAgMBAAAAAAAAAAAAAAABAAMQETFR/9oACAEDAQE/AWsHRGmv2DzH/8QAGBEAAgMAAAAAAAAAAAAAAAAAAAEQERL/2gAIAQIBAT8Bs05//8QAIBAAAgIABgMAAAAAAAAAAAAAAAECEQMSITEyQVGBof/aAAgBAQAGPwJ5ej22VJ6ocKt+Btw+lpCxFyFHqTKWx//EACAQAQACAQIHAAAAAAAAAAAAAAEAESExUUFhcYGx0fD/2gAIAQEAAT8hTZY8hmbsM7EJdFqespnMrKvsRVnA1py9ETOS9YU1BC95YLoGoWOhwn//2gAMAwEAAgADAAAAEJgHgf/EABkRAQEBAQEBAAAAAAAAAAAAAAERACExUf/aAAgBAwEBPxCyOPncFjLka+XKrXf/xAAZEQEAAgMAAAAAAAAAAAAAAAABABARMVH/2gAIAQIBAT8QGmWHGJuv/8QAIBABAAICAgEFAAAAAAAAAAAAAQARITGBkUFRYXHB8P/aAAgBAQABPxBJ2VOmkvCU9xv1cJeQftJQdgsw0LrlriB+MlRkCOX3PccZZKavgPrC4sgry/mYxDrQcU8MNuAPtW8dQV5aBP/Z",width:50,height:50,src:"/static/aa5bffb11c463c6ebfcf01f9697c7915/9b664/badmintonsbest-logo.jpg",srcSet:"/static/aa5bffb11c463c6ebfcf01f9697c7915/9b664/badmintonsbest-logo.jpg 1x,\n/static/aa5bffb11c463c6ebfcf01f9697c7915/06a10/badmintonsbest-logo.jpg 1.5x,\n/static/aa5bffb11c463c6ebfcf01f9697c7915/f1b5a/badmintonsbest-logo.jpg 2x"}}},site:{siteMetadata:{title:"Badmintons Best",menu:[{text:"Recommended Gear",link:"/recommended-gear/"},{text:"Beginners Guide",link:"/categories/beginners-info/"},{text:"The Blog",link:"/blog/"},{text:"About Us",link:"/about/"}]}}}}},228:function(e,t,a){"use strict";a.r(t);a(21);var n=a(0),i=a.n(n),r=a(108);t.default=function(e){var t=e.location,a=e.pageResources;return a?i.a.createElement(r.a,Object.assign({location:t,pageResources:a},a.json)):null}},230:function(e,t,a){var n=a(0);function i(e){return n.createElement("svg",e,[n.createElement("g",{key:0},n.createElement("g",{id:"menu"},n.createElement("path",{d:"M0,382.5h459v-51H0V382.5z M0,255h459v-51H0V255z M0,76.5v51h459v-51H0z"}))),n.createElement("g",{key:1}),n.createElement("g",{key:2}),n.createElement("g",{key:3}),n.createElement("g",{key:4}),n.createElement("g",{key:5}),n.createElement("g",{key:6}),n.createElement("g",{key:7}),n.createElement("g",{key:8}),n.createElement("g",{key:9}),n.createElement("g",{key:10}),n.createElement("g",{key:11}),n.createElement("g",{key:12}),n.createElement("g",{key:13}),n.createElement("g",{key:14}),n.createElement("g",{key:15})])}i.defaultProps={version:"1.1",id:"Capa_1",x:"0px",y:"0px",width:"459px",height:"459px",viewBox:"0 0 459 459",style:{enableBackground:"new 0 0 459 459"},xmlSpace:"preserve"},e.exports=i,i.default=i},231:function(e,t,a){var n=a(0);function i(e){return n.createElement("svg",e,[n.createElement("g",{key:0},n.createElement("path",{d:"M28.228,23.986L47.092,5.122c1.172-1.171,1.172-3.071,0-4.242c-1.172-1.172-3.07-1.172-4.242,0L23.986,19.744L5.121,0.88\r\n\t\tc-1.172-1.172-3.07-1.172-4.242,0c-1.172,1.171-1.172,3.071,0,4.242l18.865,18.864L0.879,42.85c-1.172,1.171-1.172,3.071,0,4.242\r\n\t\tC1.465,47.677,2.233,47.97,3,47.97s1.535-0.293,2.121-0.879l18.865-18.864L42.85,47.091c0.586,0.586,1.354,0.879,2.121,0.879\r\n\t\ts1.535-0.293,2.121-0.879c1.172-1.171,1.172-3.071,0-4.242L28.228,23.986z"})),n.createElement("g",{key:1}),n.createElement("g",{key:2}),n.createElement("g",{key:3}),n.createElement("g",{key:4}),n.createElement("g",{key:5}),n.createElement("g",{key:6}),n.createElement("g",{key:7}),n.createElement("g",{key:8}),n.createElement("g",{key:9}),n.createElement("g",{key:10}),n.createElement("g",{key:11}),n.createElement("g",{key:12}),n.createElement("g",{key:13}),n.createElement("g",{key:14}),n.createElement("g",{key:15})])}i.defaultProps={version:"1.1",id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 47.971 47.971",style:{enableBackground:"new 0 0 47.971 47.971"},xmlSpace:"preserve"},e.exports=i,i.default=i},232:function(e){e.exports={data:{site:{siteMetadata:{social:{facebook:"BadmintonsBest",instagram:"badmintonsbest",twitter:"BadmintonsBest",youtube:"UCszQfT2se87xk2TqrS7xHEQ"},contact:{email:"info@badmintonsbest.com"}}}}}},233:function(e){e.exports={data:{logo:{childImageSharp:{fixed:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAAAsSAAALEgHS3X78AAABgUlEQVQoz4WSu0oDQRSGT1ajBkSxEmFBVBCiBLK7EkUCijeMN0RJY0whNoKNjSBipY222lgpthZWwTq+gOwWARW8IPoGYqvfuLO4CTEOfPznzJz5Z3b2iISG96sRrc0Qhz5IQgJiFTXiSpURmLm6EO2BOExCSkHNFPQT9+o9hvxlWHGqus0eDFM8oRTmYYh8FN0FW5sZf5kp6nV8Am+wwIY5dByWPD+eZu4djnVtnVfDMLjh5YvIF3oIY8oMg0U0A0ePrJFfBV9V1dDVp+mis1ff8A5OVQ4XOi7ptfPgHb0abxgY5p78TR9wwGFbCuJ99PPZX8vV/GQ39Kd1flPyN0bDz3LvzxW9iu4Ib4x4IcPgrxG3QIF8JWSYJb9GW1VeiMUMyWbFsW2xwXGc8nZxqz9DVyjulv8GRZ1SfjMTmqBBqZ7rCFqqGI3+6KBltSUdp1HfzlBwQ1N0A89guIzOwjZsQh7W9fyG57fN6i36ILK2Y5r59nQ6kbKsEYwUA5hmvgFUaKYHTZspIQAAAABJRU5ErkJggg==",width:1200,height:756,src:"/static/7e31ccdda506dba41a1d03f767a25b73/ba299/badmintonsbest-logo-full.png",srcSet:"/static/7e31ccdda506dba41a1d03f767a25b73/ba299/badmintonsbest-logo-full.png 1x,\n/static/7e31ccdda506dba41a1d03f767a25b73/3e65a/badmintonsbest-logo-full.png 1.5x,\n/static/7e31ccdda506dba41a1d03f767a25b73/a417a/badmintonsbest-logo-full.png 2x"}}},site:{siteMetadata:{title:"Badmintons Best",description:"Learning from the best, realise your true potential 🔥 🏸 💯",author:"Liam Walsh",siteUrl:"https://www.badmintonsbest.com"}}}}},244:function(e,t,a){"use strict";var n=a(210),i=a(212),r=a(209),o=Object(n.a)(i.a,{target:"e5s94850"})("display:inline-block;padding:",Object(r.b)(.3)," ",Object(r.b)(.7),";border:1px solid;border-radius:5px;text-decoration:none;");t.a=o},256:function(e){e.exports={data:{avatar:{childImageSharp:{fixed:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAUDBAb/xAAWAQEBAQAAAAAAAAAAAAAAAAABAAL/2gAMAwEAAhADEAAAAWnFQGihoxtjecGs/wD/xAAeEAACAgAHAAAAAAAAAAAAAAACAwEEABESISIyM//aAAgBAQABBQJZsJQk5RyOK08m+QZSNTdxTogu3//EABcRAAMBAAAAAAAAAAAAAAAAAAECECH/2gAIAQMBAT8BC5BP/8QAFREBAQAAAAAAAAAAAAAAAAAAEiD/2gAIAQIBAT8BUf/EACAQAAIABAcAAAAAAAAAAAAAAAABAgMRMhASIjFBUWH/2gAIAQEABj8CSl3bVEprzKLBEWj0vZCuCq7Gf//EABsQAQADAQEBAQAAAAAAAAAAAAEAESFBMWFx/9oACAEBAAE/Iajzs5ktcKrgrKbLpOM92kxsAFD8Ybheqv5KABUGyhgez//aAAwDAQACAAMAAAAQcPc8/8QAFxEBAQEBAAAAAAAAAAAAAAAAAQARIf/aAAgBAwEBPxAhtjLjZf/EABgRAAMBAQAAAAAAAAAAAAAAAAABESEQ/9oACAECAQE/EKb0pFnP/8QAHBABAQACAwEBAAAAAAAAAAAAAREAITFBYXGB/9oACAEBAAE/ECnZFvAVfrh/SCGg+dmUB3keWgNG+t44fgSmPF/BcZnGoyYkPljpactqI2eWYAACuvc//9k=",width:350,height:350,src:"/static/1cec331301d026de0eed38a86dff2db6/9131d/profile-pic.jpg",srcSet:"/static/1cec331301d026de0eed38a86dff2db6/9131d/profile-pic.jpg 1x"}}},site:{siteMetadata:{author:"Liam Walsh"}}}}}}]);
//# sourceMappingURL=1-7726db9aed1ff718d54d.js.map