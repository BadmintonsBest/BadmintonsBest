(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{220:function(t,e,n){"use strict";n.r(e),n.d(e,"pageQuery",function(){return j});var a=n(0),i=n.n(a),o=n(149),r=n(289),A=n.n(r),c=n(232),d=n(231),s=n(234),l=n(227),u=n(235),b=n(236),p=n(237),f=n(238),g=n(233),m=n(2);var h=function(t){var e,n;function a(){return t.apply(this,arguments)||this}return n=t,(e=a).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,a.prototype.render=function(){var t=this.props.data.site.siteMetadata.title,e=this.props.data.site.siteMetadata.description,n=this.props.location.href,a=this.props.data.allMdx.group;return Object(m.d)(c.a,{location:this.props.location},Object(m.d)(d.a,{title:t,description:e,url:n}),Object(m.d)(l.a,null,Object(m.d)(u.a,null,Object(m.d)(g.a,null,Object(m.d)("h1",{style:{marginTop:0,marginBottom:0}},"Categories")),Object(m.d)(b.a,null,Object(m.d)(p.a,null,Object(m.d)("ul",null,a.map(function(t){return Object(m.d)("li",{key:t.fieldValue},Object(m.d)(o.Link,{to:"/categories/"+A()(t.fieldValue)+"/"},t.fieldValue," (",t.totalCount,")"))}))),Object(m.d)(f.a,null,Object(m.d)(s.a,null))))))},a}(i.a.Component);e.default=h;var j="516403580"},224:function(t,e,n){"use strict";n.d(e,"b",function(){return s}),n.d(e,"a",function(){return l});var a=n(247),i=n.n(a),o=n(248),r=n.n(o),A=n(243),c=n(226);r.a.overrideThemeStyles=function(){var t;return(t={"a.gatsby-resp-image-link":{boxShadow:"none"},a:{color:c.c},"a:visited":{color:c.c},"a:hover, a:focus":{color:c.b},"ul, ol":{listStyle:"disc inside",marginLeft:0},"li > p":{display:"inline"},"blockquote p":{marginBottom:0},"blockquote cite":{display:"block"}})[A.MOBILE_MEDIA_QUERY]={"ul, ol":{marginLeft:0}},t},r.a.baseFontSize="19px",r.a.baseLineHeight="1.68",r.a.scaleRatio=2,r.a.googleFonts=[{name:"Open Sans",styles:["700"]},{name:"Open Sans",styles:["400","400i","700","700i"]}],r.a.headerFontFamily=["Open Sans","sans-serif"],r.a.bodyFontFamily=["Open Sans","sans-serif"];var d=new i.a(r.a);var s=d.rhythm,l=(d.scale,s(36))},226:function(t,e,n){"use strict";n.d(e,"a",function(){return a}),n.d(e,"i",function(){return i}),n.d(e,"f",function(){return o}),n.d(e,"c",function(){return r}),n.d(e,"d",function(){return A}),n.d(e,"b",function(){return c}),n.d(e,"g",function(){return d}),n.d(e,"h",function(){return s}),n.d(e,"e",function(){return l});var a="-10",i="0",o="10",r="#D10003",A="#2B2D42",c="#0A2463",d="white",s="#333333",l={SMALLEST:"(min-width: "+"36em"+")",SMALL:"(min-width: "+"48em"+")",MEDIUM:"(min-width: "+"62em"+")",LARGE:"(min-width: "+"75em"+")"}},227:function(t,e,n){"use strict";var a=n(225),i=n(224),o=Object(a.a)("div",{target:"ecy2wsj0"})("margin-left:auto;margin-right:auto;max-width:",i.a,";");e.a=o},231:function(t,e,n){"use strict";n(228),n(28);var a=n(241),i=(n(0),n(249)),o=n.n(i),r=n(2);function A(t){var e=t.dateModified,n=t.datePublished,i=t.description,A=t.image,c=t.keywords,d=t.lang,s=t.meta,l=t.title,u=t.schemaType,b=t.url,p=t.wordCount,f=a.data,g=f.logo,m=f.site,h=i||m.siteMetadata.description,j=[{name:"description",content:h},{property:"og:title",content:l},{property:"og:description",content:h},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:m.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:h}],O=new Date(e).getFullYear(),x=b?b.split("/")[3]:"",y=""+m.siteMetadata.siteUrl+g.childImageSharp.fixed.src,v=null;A&&(j=[{property:"twitter:image",content:v=""+m.siteMetadata.siteUrl+A.src},{property:"og:image",content:v}].concat(j));return Object(r.d)(o.a,{htmlAttributes:{lang:d},title:l,titleTemplate:"%s | "+m.siteMetadata.title,meta:j.concat(s)},Object(r.d)("script",{type:"application/ld+json"},'\n        {\n          "@context" : "http://schema.org",\n          "@type" : "'+u+'",\n          "mainEntityOfPage": {\n              "@type": "WebPage",\n              "@id": "'+m.siteMetadata.siteUrl+'"\n          },\n          '+("BlogPosting"===u?'"articleSection" : "'+x+'",':"")+'\n          "name" : "'+l+'",\n          "headline" : "'+l+'",\n          "description" : "'+h+'",\n          '+(A?'"image": "'+v+'",':"")+'\n          "inLanguage" : "'+d+'",\n          "author" : "'+m.siteMetadata.author+'",\n          "creator" : "'+m.siteMetadata.author+'",\n          "publisher": {\n            "@type": "Organization",\n            "name": "'+m.siteMetadata.title+'",\n            "logo": {\n              "@type": "ImageObject",\n              "url": "'+y+'"\n            }\n          },\n          "accountablePerson" : "'+m.siteMetadata.author+'",\n          "copyrightHolder" : "'+m.siteMetadata.title+'",\n          "copyrightYear" : "'+O+'",\n          "datePublished": "'+n+'",\n          "dateModified" : "'+e+'",\n          "url" : "'+b+'",\n          '+(p?'"wordCount" : "'+p+'",':"")+'\n          "keywords" : ['+c.join(", ")+"]\n        }\n      "))}var c=new Date,d=c.getFullYear()+"-"+(c.getMonth()+1)+"-"+c.getDate();A.defaultProps={dateModified:d,datePublished:d,description:"",image:null,keywords:[],lang:"en",meta:[],schemaType:"WebPage",wordCount:null},e.a=A},232:function(t,e,n){"use strict";var a=n(225),i=n(0),o=n.n(i),r=n(2),A=n(83),c=n(251),d=function(){return null},s=function(t){var e=o.a.useState(function(){return d}),a=e[0],i=e[1];return o.a.useEffect(function(){n.e(13).then(n.bind(null,309)).then(function(t){return i(function(){return t.default})})},[]),Object(r.d)(a,t)},l=(n(25),n(246),n(228),n(239)),u=n(149),b=n(229),p=n.n(b),f=n(224),g=n(226);function m(){return(m=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t}).apply(this,arguments)}var h=i.createElement("path",{d:"M0 382.5h459v-51H0v51zM0 255h459v-51H0v51zM0 76.5v51h459v-51H0z"});function j(t){return i.createElement("svg",m({id:"Capa_1",x:0,y:0,viewBox:"0 0 459 459",xmlSpace:"preserve"},t),h)}function O(){return(O=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t}).apply(this,arguments)}var x=i.createElement("path",{d:"M28.228 23.986L47.092 5.122a2.998 2.998 0 000-4.242 2.998 2.998 0 00-4.242 0L23.986 19.744 5.121.88a2.998 2.998 0 00-4.242 0 2.998 2.998 0 000 4.242l18.865 18.864L.879 42.85a2.998 2.998 0 104.242 4.241l18.865-18.864L42.85 47.091c.586.586 1.354.879 2.121.879s1.535-.293 2.121-.879a2.998 2.998 0 000-4.242L28.228 23.986z"});function y(t){return i.createElement("svg",O({id:"Capa_1",x:0,y:0,viewBox:"0 0 47.971 47.971",xmlSpace:"preserve"},t),x)}function v(){return(v=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t}).apply(this,arguments)}var w=Object(a.a)("header",{target:"e18zoque0"})("position:relative;display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between;align-items:center;max-width:",f.a,";margin-left:auto;margin-right:auto;padding:",Object(f.b)(.5),";background-color:",g.g,";&:before{position:absolute;top:0;left:50%;transform:translateX(-50%);z-index:",g.a,";display:block;width:100vw;height:100%;background-color:",g.g,';content:"";}'),B=Object(a.a)("a",{target:"e18zoque1"})("display:flex;flex-direction:row;flex-wrap:nowrap;align-items:center;line-height:1;text-decoration:none;text-transform:uppercase;color:",g.h," !important;"),E=Object(a.a)("a",{target:"e18zoque2"})("position:relative;overflow:hidden;display:block;width:",Object(f.b)(1.5),";height:",Object(f.b)(1.5),";box-shadow:none;outline:none;text-decoration:none;color:transparent !important;@media ",g.e.MEDIUM,'{display:none;}&[href="#menu-navigation"] > svg{fill:',g.h,";}> svg{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);display:block;width:100%;height:100%;padding:",Object(f.b)(.4),";fill:",g.g,";}"),M=Object(a.a)("nav",{target:"e18zoque3"})("position:fixed;top:0;left:0;z-index:",g.f,";display:flex;flex-direction:row;width:100vw;min-height:100vh;background:",g.d,";opacity:0;transform:translate3d(",Object(f.b)(2),",0,0);visibility:hidden;transition-delay:400ms,0ms,100ms;transition-duration:0ms,300ms,300ms;transition-property:visibility,opacity,transform;transition-timing-function:ease-in;@media ",g.e.MEDIUM,"{position:static;z-index:",g.i,";display:block;width:auto;min-height:auto;background:none;opacity:1;transform:none;transition:none;visibility:visible;}&.is-open{opacity:1;transform:none;visibility:visible;transition-delay:0ms,0ms,100ms;}"),Q=Object(a.a)("ul",{target:"e18zoque4"})("display:block;width:100%;margin:0;padding:",Object(f.b)(1),";list-style:none;@media ",g.e.MEDIUM,"{display:flex;flex-direction:row;flex-wrap:nowrap;padding:0;white-space:nowrap;}"),I=Object(a.a)("li",{target:"e18zoque5"})("display:block;width:100%;margin:0;padding:0;@media ",g.e.MEDIUM,"{&:first-child{display:none;}}"),C=Object(a.a)(u.Link,{target:"e18zoque6"})("display:block;width:100%;margin:0;padding:",Object(f.b)(.5),";box-shadow:none;outline:none;text-decoration:none;color:",g.g,";&:visited{color:",g.g,";}@media ",g.e.MEDIUM,"{color:",g.h,";&:visited{color:",g.h,";}}"),k={name:"b20leo",styles:"width:100%;> svg{width:auto;right:0;transform:translate(0, -50%);left:initial;}"},D=function(t){var e,n;function a(e){var n;return(n=t.call(this,e)||this).toggleMenu=function(t){t.preventDefault(),n.setState(function(t){return{menuOpen:!t.menuOpen}})},n.state={menuOpen:!1},n}return n=t,(e=a).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,a.prototype.render=function(){var t=this.props.data.site.siteMetadata,e=t.menu,n=t.title;return Object(r.d)(w,null,Object(r.d)(B,{href:"/"},Object(r.d)(p.a,{fixed:this.props.data.logo.childImageSharp.fixed,alt:n,style:{marginRight:Object(f.b)(.5),marginBottom:0,minWidth:50,borderRadius:"100%"},imgStyle:{borderRadius:"50%"}})," ","Badmintons Best"),Object(r.d)(E,{href:"#menu-navigation",onClick:this.toggleMenu},Object(r.d)(j,null)," Open Menu"),Object(r.d)(M,{id:"menu-navigation",className:this.state.menuOpen?"is-open":""},Object(r.d)(Q,null,Object(r.d)(I,{key:"0"},Object(r.d)(E,{href:"#close-menu-navigation",onClick:this.toggleMenu,css:k},Object(r.d)(y,null)," Close Menu")),e.map(function(t,e){return Object(r.d)(I,{key:e},Object(r.d)(C,{to:t.link},t.text))}))))},a}(i.Component),R=function(t){return Object(r.d)(u.StaticQuery,{query:"229204878",render:function(e){return Object(r.d)(D,v({data:e},t))},data:l})},S=n(240),U=n(227),Y=Object(a.a)("footer",{target:"eegg9ep0"})("padding:",Object(f.b)(1)," 0;background:",g.d,";color:white;@media ",g.e.MEDIUM,"{padding-top:",Object(f.b)(2),";padding-bottom:",Object(f.b)(2),";}"),L=Object(a.a)("div",{target:"eegg9ep1"})("@media ",g.e.MEDIUM,"{display:flex;flex-direction:row;flex-wrap:nowrap;margin-left:-",Object(f.b)(1.5),";}"),N=Object(a.a)("div",{target:"eegg9ep2"})("& + &{margin-top:",Object(f.b)(1.5),";}@media ",g.e.MEDIUM,"{flex:1 1 0;margin-top:0;padding-left:",Object(f.b)(1.5),";& + &{margin-top:0;}}& > *:first-child{margin-top:0;}& > *:last-child{margin-bottom:0;}"),z=Object(a.a)(u.Link,{target:"eegg9ep3"})({name:"okxw92",styles:"color:white;&:visited{color:white;}"}),G=Object(a.a)("a",{target:"eegg9ep4"})({name:"okxw92",styles:"color:white;&:visited{color:white;}"}),T=function(){var t=S.data.site.siteMetadata,e=t.social,n=t.contact;return Object(r.d)(Y,null,Object(r.d)(U.a,{style:{padding:"0 "+Object(f.b)(.5)}},Object(r.d)(L,null,Object(r.d)(N,null,Object(r.d)("h3",null,"Legal Information"),Object(r.d)("p",null,"This site is owned and operated by Ramiel Ltd. Ramiel Ltd is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com. Ramiel Ltd is compensated for referring traffic and business to these companies. Copyright © Ramiel Ltd"),Object(r.d)("ul",null,Object(r.d)("li",null,Object(r.d)(z,{to:"/terms-and-conditions"},"Terms and Conditions")),Object(r.d)("li",null,Object(r.d)(z,{to:"/privacy-policy"},"Privacy Policy")))),Object(r.d)(N,null,Object(r.d)("h3",null,"Contact Us"),Object(r.d)("ul",null,Object(r.d)("li",null,Object(r.d)(G,{href:"https://youtube.com/"+e.youtube},"YouTube")),Object(r.d)("li",null,Object(r.d)(G,{href:"https://instagram.com/"+e.instagram},"Instagram")),Object(r.d)("li",null,Object(r.d)(G,{href:"https://twitter.com/"+e.twitter},"Twitter")),Object(r.d)("li",null,Object(r.d)(G,{href:"https://facebook.com/"+e.twitter},"Facebook")),Object(r.d)("li",null,Object(r.d)(G,{href:"mailto:"+n.email},"Email")))))),Object(r.d)(U.a,{style:{textAlign:"center",marginTop:Object(f.b)(1.5),padding:"0 "+Object(f.b)(.5)}},"© ",(new Date).getFullYear()," Badmintons Best, Built with"," ",Object(r.d)("a",{style:{color:"white"},href:"https://www.gatsbyjs.org"},"Gatsby")))};var P={Tweet:c.a,BirdsEyeCourt:s},Z=Object(a.a)("div",{target:"ea5p3660"})(),F=Object(a.a)("div",{target:"ea5p3661"})(),X=function(t){var e,n;function a(){return t.apply(this,arguments)||this}return n=t,(e=a).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,a.prototype.render=function(){var t=this.props.children;return Object(r.d)(A.MDXProvider,{components:P},Object(r.d)(Z,null,Object(r.d)(r.a,{styles:Object(r.c)()}),Object(r.d)(R,null),Object(r.d)(F,null,t),Object(r.d)(T,null)))},a}(o.a.Component);e.a=X},233:function(t,e,n){"use strict";var a=n(225),i=n(224),o=n(226),r=Object(a.a)("header",{target:"edjjvsm0"})("position:relative;margin-bottom:",Object(i.b)(1.5),";padding-bottom:",Object(i.b)(1.5),";&::after{position:absolute;bottom:0;left:0;display:inline-block;height:2px;width:10em;max-width:100%;background-color:",o.c,';content:"";opacity:0.5;}*:first-child{margin-top:0;padding-top:0;}*:last-child{margin-bottom:0;padding-bottom:0;}');e.a=r},234:function(t,e,n){"use strict";var a=n(244),i=(n(0),n(229)),o=n.n(i),r=n(242),A=n(224),c=n(2);e.a=function(){var t=a.data,e=t.site.siteMetadata.author;return Object(c.d)("div",{style:{}},Object(c.d)("h3",{style:{marginTop:0}},"About"),Object(c.d)(o.a,{fluid:t.avatar.childImageSharp.fluid,alt:e,style:{marginBottom:Object(A.b)(1)}}),Object(c.d)("p",null,"Hi"," ",Object(c.d)("span",{role:"img","aria-label":"waving hand"},"👋")," ","I'm Liam. I've been playing Badminton for over 17 years. Second only to my family, Badminton is my biggest passion in life. If I'm not with family I'm either playing or watching Badminton with the mission to be the best I can be. I'm a qualified Badminton coach with a UKCC Level 2 Certificate from Badminton England. This site is where I can share what I've learnt from playing, coaching and from watching the best in the world! BadmintonsBest."),Object(c.d)("p",null,Object(c.d)(r.a,{to:"/about"},"Read more")))}},235:function(t,e,n){"use strict";var a=n(225),i=n(0),o=n.n(i),r=n(2),A=n(227),c=n(224),d=n(226);var s=Object(a.a)("div",{target:"e1tdh1ze0"})("&.hero{background:",d.c,";background:-webkit-linear-gradient( to right,",d.c,",",d.d," );background:linear-gradient(to right,",d.c,",",d.d,");color:white;}"),l=function(t){var e,n;function a(){return t.apply(this,arguments)||this}return n=t,(e=a).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,a.prototype.render=function(){var t=this.props,e=t.children,n=t.theme;return Object(r.d)(s,{className:n},Object(r.d)(A.a,{css:Object(r.c)("padding:",Object(c.b)(1)," ",Object(c.b)(.5),";@media ",d.e.MEDIUM,"{padding-top:",Object(c.b)(2),";padding-bottom:",Object(c.b)(2),";}")},e))},a}(o.a.Component);e.a=l},236:function(t,e,n){"use strict";var a=n(225),i=n(224),o=n(226),r=Object(a.a)("div",{target:"e1svbmn50"})("@media ",o.e.MEDIUM,"{display:flex;flex-direction:row;flex-wrap:nowrap;margin-left:-",Object(i.b)(2.5),";}");e.a=r},237:function(t,e,n){"use strict";var a=n(225),i=n(224),o=n(226),r=Object(a.a)("main",{target:"e1ijqqu0"})("twitter-widget{margin-top:0 !important;margin-bottom:",Object(i.b)(1)," !important;}@media ",o.e.MEDIUM,"{flex:1 1 70%;max-width:",Object(i.b)(22),";padding-left:",Object(i.b)(2.5),";}");e.a=r},238:function(t,e,n){"use strict";var a=n(225),i=n(224),o=n(226),r=Object(a.a)("aside",{target:"e1oe3q8y0"})("margin-top:",Object(i.b)(2),";@media ",o.e.MEDIUM,"{flex:1 1 30%;margin-top:0;padding-left:",Object(i.b)(2.5),";}> * + *{margin-top:",Object(i.b)(2),";}");e.a=r},239:function(t){t.exports={data:{logo:{childImageSharp:{fixed:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAUCBAP/xAAXAQADAQAAAAAAAAAAAAAAAAAAAgME/9oADAMBAAIQAxAAAAGlqR2T1daGGu6Gh7Bpf//EABsQAQACAwEBAAAAAAAAAAAAAAIBAxESEwAE/9oACAEBAAEFAuu8ZxMfQPU7G19CBS7IsEQ7o2JME//EABoRAQACAwEAAAAAAAAAAAAAAAEAAxARQVH/2gAIAQMBAT8BawdEaa/Ycx//xAAYEQACAwAAAAAAAAAAAAAAAAAAARAREv/aAAgBAgEBPwGzTn//xAAgEAACAgAGAwAAAAAAAAAAAAAAAQIRAxIhMTJBUYGh/9oACAEBAAY/Anl6PbZUnqhwq34G3D6WkLEXIUepMpbH/8QAIBABAAIBAgcAAAAAAAAAAAAAAQARIUFRMWFxgbHR8P/aAAgBAQABPyFNljyGZuwzsQF0Wp6ymcysq+xFWcNacvREzkvjCmoIXvLBUoNQsdDSf//aAAwDAQACAAMAAAAQnAcB/8QAGBEBAQEBAQAAAAAAAAAAAAAAAREAUWH/2gAIAQMBAT8Qsoj73AYy5qtyq13/xAAZEQEAAgMAAAAAAAAAAAAAAAABABARQVH/2gAIAQIBAT8QGmWHGO6//8QAIBABAAICAgEFAAAAAAAAAAAAAQARITFBgcFRYXGR8P/aAAgBAQABPxBJ2VOmkvSUncz6uGuQfKSo7BZhoXXbXUC8ZKjIEcvufuPMDamr4D6wuLIK5fzMYh1oOKemGXAfat+IK8tAn//Z",width:50,height:50,src:"/static/aa5bffb11c463c6ebfcf01f9697c7915/99438/badmintonsbest-logo.jpg",srcSet:"/static/aa5bffb11c463c6ebfcf01f9697c7915/99438/badmintonsbest-logo.jpg 1x,\n/static/aa5bffb11c463c6ebfcf01f9697c7915/aba1d/badmintonsbest-logo.jpg 1.5x,\n/static/aa5bffb11c463c6ebfcf01f9697c7915/b315d/badmintonsbest-logo.jpg 2x"}}},site:{siteMetadata:{title:"Badmintons Best",menu:[{text:"Recommended Gear",link:"/recommended-gear/"},{text:"Beginners Guide",link:"/categories/beginners-info/"},{text:"The Blog",link:"/blog/"},{text:"About Us",link:"/about/"}]}}}}},240:function(t){t.exports={data:{site:{siteMetadata:{social:{facebook:"BadmintonsBest",instagram:"badmintonsbest",twitter:"BadmintonsBest",youtube:"UCszQfT2se87xk2TqrS7xHEQ"},contact:{email:"info@badmintonsbest.com"}}}}}},241:function(t){t.exports={data:{logo:{childImageSharp:{fixed:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsSAAALEgHS3X78AAABoUlEQVQ4y4WTzStEURiHzzVkGjbULFn4KCRxpzuLCTWaZExDWfhsRCl2NNmQFMpGs7Oj2FvZsLDwB1iYoVBko8iCsrIcz5n7DrdrPk49ve/5nXN+9733vFcpx8g4IhiS96SVaiKGwU/eJrrHfa7gyC9ysB7amUfBhH7ohW6N+ttX3NBRoR+WIQ5BGIKQmHfBIoyLoVHK0CMxwcYvSOiqiDPyysPkg5Ai/4AaVabCSonbb0pliYcwAmOCrnACHm7s9W7ZX1HSkAo2X+wDL+Q7xC2J63AkZt/QWc6wQgwj9/YhzQXsox3oCI9P6MzvHZ+o+KWk/27v/N02jLgu7PjT1mfd7fOv98QoX2Ud2q1+1bwOXrhCT2ntzOs1XonJxsbc2UAg8GtmyPUbrtuuRo9rI5m3woDOs+w99flUh2UZAdM0MDNyhmkxKdX1Gdee/MgWEtN2A7eABc2whDYOfRmbGExLgwev+abP/DkntbXRTssKWabZQIUm1bWDqZ++AUlYkbZYgwWYglWYk7V52MVw8o71y6qqPVz6YBTDUczC+MZ+ALYguYm5iS5XAAAAAElFTkSuQmCC",width:1200,height:756,src:"/static/7e31ccdda506dba41a1d03f767a25b73/f3583/badmintonsbest-logo-full.png",srcSet:"/static/7e31ccdda506dba41a1d03f767a25b73/f3583/badmintonsbest-logo-full.png 1x,\n/static/7e31ccdda506dba41a1d03f767a25b73/bbee5/badmintonsbest-logo-full.png 1.5x,\n/static/7e31ccdda506dba41a1d03f767a25b73/0ef64/badmintonsbest-logo-full.png 2x"}}},site:{siteMetadata:{title:"Badmintons Best",description:"Learning from the best, realise your true potential 🔥 🏸 💯",author:"Liam Walsh",siteUrl:"https://www.badmintonsbest.com"}}}}},242:function(t,e,n){"use strict";var a=n(225),i=n(149),o=n(224),r=Object(a.a)(i.Link,{target:"e5s94850"})("display:inline-block;padding:",Object(o.b)(.3)," ",Object(o.b)(.7),";border:1px solid;border-radius:5px;text-decoration:none;");e.a=r},244:function(t){t.exports={data:{avatar:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAMEAgX/xAAXAQADAQAAAAAAAAAAAAAAAAACBAUD/9oADAMBAAIQAxAAAAHBatSDz2loGa4rX6Dcf//EABsQAAICAwEAAAAAAAAAAAAAAAABAhEDEBIh/9oACAEBAAEFAqJYeTkivWUW7eRy1//EABoRAAICAwAAAAAAAAAAAAAAAAABAhESITH/2gAIAQMBAT8BT02ZDirJdP/EABkRAAIDAQAAAAAAAAAAAAAAAAABAhARMv/aAAgBAgEBPwGXSRlI/8QAGRAAAQUAAAAAAAAAAAAAAAAAEQABAhAg/9oACAEBAAY/AkWmcm//xAAbEAEAAwEAAwAAAAAAAAAAAAABABEhMUFxgf/aAAgBAQABPyHnOuSp7kYxkrs0PH5HUCIUSNC0UeJd7P/aAAwDAQACAAMAAAAQJBh9/8QAFxEBAQEBAAAAAAAAAAAAAAAAAQARUf/aAAgBAwEBPxAtkVI0gDDt/8QAGBEBAAMBAAAAAAAAAAAAAAAAAQARMRD/2gAIAQIBAT8QDQ5t2YJ//8QAGRABAQEBAQEAAAAAAAAAAAAAAREAITFB/9oACAEBAAE/EByRQC/KzAaRQAd7Obp5m4L6DKZQefEbcdZE5URzbJ8Mt91AXqb/2Q==",aspectRatio:1,src:"/static/6d538818ec4056b7794d89b5e176e574/9c4e5/profile-pic.jpg",srcSet:"/static/6d538818ec4056b7794d89b5e176e574/490c5/profile-pic.jpg 88w,\n/static/6d538818ec4056b7794d89b5e176e574/37f59/profile-pic.jpg 175w,\n/static/6d538818ec4056b7794d89b5e176e574/9c4e5/profile-pic.jpg 350w,\n/static/6d538818ec4056b7794d89b5e176e574/cd7dd/profile-pic.jpg 525w,\n/static/6d538818ec4056b7794d89b5e176e574/1ef8b/profile-pic.jpg 700w,\n/static/6d538818ec4056b7794d89b5e176e574/f5d72/profile-pic.jpg 1264w",sizes:"(max-width: 350px) 100vw, 350px"}}},site:{siteMetadata:{author:"Liam Walsh"}}}}},256:function(t,e,n){var a=n(296).Symbol;t.exports=a},265:function(t,e,n){var a=n(295);t.exports=function(t){return null==t?"":a(t)}},289:function(t,e,n){var a=n(290)(function(t,e,n){return t+(n?"-":"")+e.toLowerCase()});t.exports=a},290:function(t,e,n){n(15),n(150);var a=n(291),i=n(292),o=n(305),r=RegExp("['’]","g");t.exports=function(t){return function(e){return a(o(i(e).replace(r,"")),t,"")}}},291:function(t,e){t.exports=function(t,e,n,a){var i=-1,o=null==t?0:t.length;for(a&&o&&(n=t[++i]);++i<o;)n=e(n,t[i],i,t);return n}},292:function(t,e,n){n(15),n(150);var a=n(293),i=n(265),o=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,r=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");t.exports=function(t){return(t=i(t))&&t.replace(o,a).replace(r,"")}},293:function(t,e,n){var a=n(294)({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"});t.exports=a},294:function(t,e){t.exports=function(t){return function(e){return null==t?void 0:t[e]}}},295:function(t,e,n){n(49),n(62),n(6);var a=n(256),i=n(298),o=n(299),r=n(300),A=1/0,c=a?a.prototype:void 0,d=c?c.toString:void 0;t.exports=function t(e){if("string"==typeof e)return e;if(o(e))return i(e,t)+"";if(r(e))return d?d.call(e):"";var n=e+"";return"0"==n&&1/e==-A?"-0":n}},296:function(t,e,n){var a=n(297),i="object"==typeof self&&self&&self.Object===Object&&self,o=a||i||Function("return this")();t.exports=o},297:function(t,e,n){(function(e){var n="object"==typeof e&&e&&e.Object===Object&&e;t.exports=n}).call(this,n(152))},298:function(t,e){t.exports=function(t,e){for(var n=-1,a=null==t?0:t.length,i=Array(a);++n<a;)i[n]=e(t[n],n,t);return i}},299:function(t,e,n){n(50);var a=Array.isArray;t.exports=a},300:function(t,e,n){var a=n(301),i=n(304),o="[object Symbol]";t.exports=function(t){return"symbol"==typeof t||i(t)&&a(t)==o}},301:function(t,e,n){var a=n(256),i=n(302),o=n(303),r="[object Null]",A="[object Undefined]",c=a?a.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?A:r:c&&c in Object(t)?i(t):o(t)}},302:function(t,e,n){n(49),n(62),n(6);var a=n(256),i=Object.prototype,o=i.hasOwnProperty,r=i.toString,A=a?a.toStringTag:void 0;t.exports=function(t){var e=o.call(t,A),n=t[A];try{t[A]=void 0;var a=!0}catch(c){}var i=r.call(t);return a&&(e?t[A]=n:delete t[A]),i}},303:function(t,e,n){n(49),n(62),n(6);var a=Object.prototype.toString;t.exports=function(t){return a.call(t)}},304:function(t,e){t.exports=function(t){return null!=t&&"object"==typeof t}},305:function(t,e,n){n(81);var a=n(306),i=n(307),o=n(265),r=n(308);t.exports=function(t,e,n){return t=o(t),void 0===(e=n?void 0:e)?i(t)?r(t):a(t):t.match(e)||[]}},306:function(t,e,n){n(81);var a=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;t.exports=function(t){return t.match(a)||[]}},307:function(t,e){var n=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;t.exports=function(t){return n.test(t)}},308:function(t,e,n){n(81),n(150);var a="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",i="["+a+"]",o="\\d+",r="[\\u2700-\\u27bf]",A="[a-z\\xdf-\\xf6\\xf8-\\xff]",c="[^\\ud800-\\udfff"+a+o+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",d="(?:\\ud83c[\\udde6-\\uddff]){2}",s="[\\ud800-\\udbff][\\udc00-\\udfff]",l="[A-Z\\xc0-\\xd6\\xd8-\\xde]",u="(?:"+A+"|"+c+")",b="(?:"+l+"|"+c+")",p="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",f="[\\ufe0e\\ufe0f]?"+p+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",d,s].join("|")+")[\\ufe0e\\ufe0f]?"+p+")*"),g="(?:"+[r,d,s].join("|")+")"+f,m=RegExp([l+"?"+A+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[i,l,"$"].join("|")+")",b+"+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[i,l+u,"$"].join("|")+")",l+"?"+u+"+(?:['’](?:d|ll|m|re|s|t|ve))?",l+"+(?:['’](?:D|LL|M|RE|S|T|VE))?","\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",o,g].join("|"),"g");t.exports=function(t){return t.match(m)||[]}}}]);
//# sourceMappingURL=component---src-pages-categories-js-5a23f5aaa9ecae5e0872.js.map