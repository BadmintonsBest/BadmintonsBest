(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{222:function(t,e,n){"use strict";n.r(e),n.d(e,"pageQuery",function(){return u});var a=n(0),i=n.n(a),o=n(248),r=n(236),c=n(234),d=n(265),s=n(2);var l=function(t){var e,n;function a(){return t.apply(this,arguments)||this}return n=t,(e=a).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,a.prototype.render=function(){var t=this.props.data.site.siteMetadata,e=this.props.location.href;return Object(s.d)(r.a,{location:this.props.location},Object(s.d)(c.a,{title:""+t.description,url:e}),Object(s.d)(d.a,null,Object(s.d)("h1",{style:{marginTop:0}},"Thanks, you're all set!"," ",Object(s.d)("span",{role:"img","aria-label":"Thumbs up"},"👍")),Object(s.d)("p",null,"Your email is now confirmed and you’re now the newest member of the BadmintonsBest community. Check your email for a message from us."),Object(s.d)("p",null,"In the meantime, go ahead and follow us on Twitter:"),Object(s.d)(o.a,{screenName:"BadmintonsBest"}),Object(s.d)("p",null,"With that, welcome to the BadmintonsBest community!"),Object(s.d)("p",null,"Now that you’re signed up, you’ll start to receive useable and actionable content to help you improve your Badminton game."),Object(s.d)("p",null,"Happy smashing,",Object(s.d)("br",null),"Liam, BadmintonsBest")))},a}(i.a.Component);e.default=l;var u="3998338720"},229:function(t,e,n){"use strict";n.d(e,"d",function(){return l}),n.d(e,"a",function(){return u}),n.d(e,"b",function(){return A}),n.d(e,"c",function(){return p});var a=n(245),i=n.n(a),o=n(246),r=n.n(o),c=n(242),d=n(230);r.a.overrideThemeStyles=function(){var t;return(t={"a.gatsby-resp-image-link":{boxShadow:"none"},a:{color:d.d},"a:visited":{color:d.d},"a:hover, a:focus":{color:d.b},"ul, ol":{listStyle:"disc inside",marginLeft:0},"li > p":{display:"inline"},"blockquote p":{marginBottom:0},"blockquote cite":{display:"block"}})[c.MOBILE_MEDIA_QUERY]={"ul, ol":{marginLeft:0}},t},r.a.baseFontSize="19px",r.a.baseLineHeight="1.68",r.a.scaleRatio=2,r.a.googleFonts=[{name:"Open Sans",styles:["600"]},{name:"Open Sans",styles:["400","400i","600","600i"]}],r.a.headerFontFamily=["Open Sans","sans-serif"],r.a.bodyFontFamily=["Open Sans","sans-serif"],r.a.headerWeight="600",r.a.boldWeight=600;var s=new i.a(r.a);var l=s.rhythm,u=(s.scale,l(36)),A=l(22),p=(l(11),l(26))},230:function(t,e,n){"use strict";n.d(e,"a",function(){return a}),n.d(e,"r",function(){return i}),n.d(e,"o",function(){return o}),n.d(e,"d",function(){return r}),n.d(e,"e",function(){return c}),n.d(e,"f",function(){return d}),n.d(e,"b",function(){return s}),n.d(e,"c",function(){return l}),n.d(e,"h",function(){return u}),n.d(e,"k",function(){return A}),n.d(e,"i",function(){return p}),n.d(e,"j",function(){return b}),n.d(e,"p",function(){return g}),n.d(e,"q",function(){return m}),n.d(e,"l",function(){return f}),n.d(e,"m",function(){return h}),n.d(e,"n",function(){return j}),n.d(e,"g",function(){return y});var a="-10",i="0",o="10",r="#D10003",c="#2B2D42",d="#8D99AE",s="#0A2463",l="#3E92CC",u=r,A="white",p="forestgreen",b="white",g="white",m="#333333",f=c,h=r,j="white",y={SMALLEST:"(min-width: "+"36em"+")",SMALL:"(min-width: "+"48em"+")",MEDIUM:"(min-width: "+"62em"+")",LARGE:"(min-width: "+"75em"+")"}},231:function(t,e,n){"use strict";n.d(e,"a",function(){return a}),n.d(e,"c",function(){return i}),n.d(e,"d",function(){return o}),n.d(e,"e",function(){return r}),n.d(e,"f",function(){return c}),n.d(e,"b",function(){return d});var a="event click",i="menu link click",o="related content image click",r="related content link click",c="youtube embed activate",d="homepage featured link click"},232:function(t,e,n){"use strict";var a=n(228),i=n(229),o=Object(a.a)("div",{target:"ecy2wsj0"})("margin-left:auto;margin-right:auto;max-width:",i.a,";");e.a=o},234:function(t,e,n){"use strict";n(235),n(28);var a=n(237),i=(n(0),n(247)),o=n.n(i),r=n(2);function c(t){var e=t.dateModified,n=t.datePublished,i=t.description,c=t.image,d=t.keywords,s=t.lang,l=t.meta,u=t.title,A=t.schemaType,p=t.url,b=t.wordCount,g=a.data,m=g.logo,f=g.site,h=i||f.siteMetadata.description,j=[{name:"description",content:h},{property:"og:title",content:u},{property:"og:description",content:h},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:f.siteMetadata.author},{name:"twitter:title",content:u},{name:"twitter:description",content:h}],y=new Date(e).getFullYear(),w=p?p.split("/")[3]:"",O=""+f.siteMetadata.siteUrl+m.childImageSharp.fixed.src,v=null;c&&(j=[{property:"twitter:image",content:v=""+f.siteMetadata.siteUrl+c.src},{property:"og:image",content:v}].concat(j));return Object(r.d)(o.a,{htmlAttributes:{lang:s},title:u,titleTemplate:"%s | "+f.siteMetadata.title,meta:j.concat(l)},Object(r.d)("script",{type:"application/ld+json"},'\n        {\n          "@context" : "http://schema.org",\n          "@type" : "'+A+'",\n          "mainEntityOfPage": {\n              "@type": "WebPage",\n              "@id": "'+f.siteMetadata.siteUrl+'"\n          },\n          '+("BlogPosting"===A?'"articleSection" : "'+w+'",':"")+'\n          "name" : "'+u+'",\n          "headline" : "'+u+'",\n          "description" : "'+h+'",\n          '+(c?'"image": "'+v+'",':"")+'\n          "inLanguage" : "'+s+'",\n          "author" : "'+f.siteMetadata.author+'",\n          "creator" : "'+f.siteMetadata.author+'",\n          "publisher": {\n            "@type": "Organization",\n            "name": "'+f.siteMetadata.title+'",\n            "logo": {\n              "@type": "ImageObject",\n              "url": "'+O+'"\n            }\n          },\n          "accountablePerson" : "'+f.siteMetadata.author+'",\n          "copyrightHolder" : "'+f.siteMetadata.title+'",\n          "copyrightYear" : "'+y+'",\n          "datePublished": "'+n+'",\n          "dateModified" : "'+e+'",\n          "url" : "'+p+'",\n          '+(b?'"wordCount" : "'+b+'",':"")+'\n          "keywords" : ['+d.join(", ")+"]\n        }\n      "))}var d=new Date,s=d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate();c.defaultProps={dateModified:s,datePublished:s,description:"",image:null,keywords:[],lang:"en",meta:[],schemaType:"WebPage",wordCount:null},e.a=c},236:function(t,e,n){"use strict";var a=n(228),i=n(0),o=n.n(i),r=n(2),c=n(83),d=n(248),s=n(249),l=function(){return null},u=function(t){var e=o.a.useState(function(){return l}),a=e[0],i=e[1];return o.a.useEffect(function(){n.e(21).then(n.bind(null,279)).then(function(t){return i(function(){return t.default})})},[]),Object(r.d)(a,t)},A=function(){return null},p=function(t){var e=o.a.useState(function(){return A}),a=e[0],i=e[1];return o.a.useEffect(function(){n.e(20).then(n.bind(null,335)).then(function(t){return i(function(){return t.default})})},[]),Object(r.d)(a,t)},b=n(231),g=Object(a.a)("div",{target:"e12h4yqw0"})({name:"11gs88j",styles:"padding-bottom:56.25%;position:relative;height:0px;overflow:hidden;margin-bottom:1.0725rem;"}),m=Object(a.a)("iframe",{target:"e12h4yqw1"})({name:"122y91a",styles:"position:absolute;top:0;left:0;width:100%;height:100%;"}),f=function(t){var e=t.id,n=t.title,a=t.start,i="https://www.youtube.com/embed/"+e+"?autoplay=1"+(0!==a?"&start="+a:"");return Object(r.d)(g,{className:"gatsby-resp-iframe-wrapper"},Object(r.d)(m,{src:"https://www.youtube.com/embed/"+e,srcDoc:"<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a data-ga-event="+b.a+" data-ga-event-category="+b.f+"\n        data-ga-event-action="+n+" data-ga-event-label="+i+" href="+i+"><img src=https://img.youtube.com/vi/"+e+"/hqdefault.jpg alt='"+n+"'><span>▶</span></a>",title:n,allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,frameBorder:"0",loading:"lazy"}))};f.defaultProps={start:0};var h=f,j=function(){return null},y=function(t){var e=o.a.useState(function(){return j}),a=e[0],i=e[1];return o.a.useEffect(function(){n.e(22).then(n.bind(null,336)).then(function(t){return i(function(){return t.default})})},[]),Object(r.d)(a,t)},w=(n(25),n(244),n(235),n(238)),O=n(149),v=n(233),B=n.n(v),x=n(229),M=n(230);function E(){return(E=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t}).apply(this,arguments)}var k=i.createElement("path",{d:"M0 382.5h459v-51H0v51zM0 255h459v-51H0v51zM0 76.5v51h459v-51H0z"});function Q(t){return i.createElement("svg",E({id:"Capa_1",x:0,y:0,viewBox:"0 0 459 459",xmlSpace:"preserve"},t),k)}function C(){return(C=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t}).apply(this,arguments)}var S=i.createElement("path",{d:"M28.228 23.986L47.092 5.122a2.998 2.998 0 000-4.242 2.998 2.998 0 00-4.242 0L23.986 19.744 5.121.88a2.998 2.998 0 00-4.242 0 2.998 2.998 0 000 4.242l18.865 18.864L.879 42.85a2.998 2.998 0 104.242 4.241l18.865-18.864L42.85 47.091c.586.586 1.354.879 2.121.879s1.535-.293 2.121-.879a2.998 2.998 0 000-4.242L28.228 23.986z"});function I(t){return i.createElement("svg",C({id:"Capa_1",x:0,y:0,viewBox:"0 0 47.971 47.971",xmlSpace:"preserve"},t),S)}function D(){return(D=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t}).apply(this,arguments)}var U=Object(a.a)("header",{target:"e18zoque0"})("position:relative;display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between;align-items:center;max-width:",x.a,";margin-left:auto;margin-right:auto;padding:",Object(x.d)(.5),";background-color:",M.p,";&:before{position:absolute;top:0;left:50%;transform:translateX(-50%);z-index:",M.a,";display:block;width:100vw;height:100%;background-color:",M.p,';content:"";}'),Y=Object(a.a)("a",{target:"e18zoque1"})("display:flex;flex-direction:row;flex-wrap:nowrap;align-items:center;line-height:1;text-decoration:none;text-transform:uppercase;color:",M.q," !important;"),L=Object(a.a)("a",{target:"e18zoque2"})("position:relative;overflow:hidden;display:block;width:",Object(x.d)(1.5),";height:",Object(x.d)(1.5),";box-shadow:none;outline:none;text-decoration:none;color:transparent !important;@media ",M.g.MEDIUM,'{display:none;}&[href="#menu-navigation"] > svg{fill:',M.q,";}> svg{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);display:block;width:100%;height:100%;padding:",Object(x.d)(.4),";fill:",M.p,";}"),P=Object(a.a)("nav",{target:"e18zoque3"})("position:fixed;top:0;left:0;z-index:",M.o,";display:flex;flex-direction:row;width:100vw;min-height:100vh;background:",M.e,";opacity:0;transform:translate3d(",Object(x.d)(2),",0,0);visibility:hidden;transition-delay:400ms,0ms,100ms;transition-duration:0ms,300ms,300ms;transition-property:visibility,opacity,transform;transition-timing-function:ease-in;@media ",M.g.MEDIUM,"{position:static;z-index:",M.r,";display:block;width:auto;min-height:auto;background:none;opacity:1;transform:none;transition:none;visibility:visible;}&.is-open{opacity:1;transform:none;visibility:visible;transition-delay:0ms,0ms,100ms;}"),R=Object(a.a)("ul",{target:"e18zoque4"})("display:block;width:100%;margin:0;padding:",Object(x.d)(1),";list-style:none;@media ",M.g.MEDIUM,"{display:flex;flex-direction:row;flex-wrap:nowrap;padding:0;white-space:nowrap;}"),z=Object(a.a)("li",{target:"e18zoque5"})("display:block;width:100%;margin:0;padding:0;@media ",M.g.MEDIUM,"{&:first-child{display:none;}}"),G=Object(a.a)(O.Link,{target:"e18zoque6"})("display:block;width:100%;margin:0;padding:",Object(x.d)(.5),";box-shadow:none;outline:none;text-decoration:none;color:",M.p,";&:visited,&:hover,&:focus{color:",M.p,";}@media ",M.g.MEDIUM,"{color:",M.q,";&:visited,&:hover,&:focus{color:",M.q,";}}"),T={name:"b20leo",styles:"width:100%;> svg{width:auto;right:0;transform:translate(0, -50%);left:initial;}"},N=function(t){var e,n;function a(e){var n;return(n=t.call(this,e)||this).toggleMenu=function(t){t.preventDefault(),n.setState(function(t){return{menuOpen:!t.menuOpen}})},n.state={menuOpen:!1},n}return n=t,(e=a).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,a.prototype.render=function(){var t=this.props.data.site.siteMetadata,e=t.menu,n=t.title;return Object(r.d)(U,null,Object(r.d)(Y,{href:"/"},Object(r.d)(B.a,{fixed:this.props.data.logo.childImageSharp.fixed,alt:n,style:{marginRight:Object(x.d)(.5),marginBottom:0,minWidth:50,borderRadius:"100%"},imgStyle:{borderRadius:"50%"}})," ","Badmintons Best"),Object(r.d)(L,{href:"#menu-navigation",onClick:this.toggleMenu},Object(r.d)(Q,null)," Open Menu"),Object(r.d)(P,{id:"menu-navigation",className:this.state.menuOpen?"is-open":""},Object(r.d)(R,null,Object(r.d)(z,{key:"0"},Object(r.d)(L,{href:"#close-menu-navigation",onClick:this.toggleMenu,css:T},Object(r.d)(I,null)," Close Menu")),e.map(function(t,e){return Object(r.d)(z,{key:e},Object(r.d)(G,{to:t.link,"data-ga-event":b.a,"data-ga-event-category":b.c,"data-ga-event-action":t.text,"data-ga-event-label":t.link},t.text))}))))},a}(i.Component),q=function(t){return Object(r.d)(O.StaticQuery,{query:"229204878",render:function(e){return Object(r.d)(N,D({data:e},t))},data:w})},W=n(239),F=n(232),X=Object(a.a)("footer",{target:"eegg9ep0"})("padding:",Object(x.d)(1)," 0;background:",M.e,";color:white;@media ",M.g.MEDIUM,"{padding-top:",Object(x.d)(2),";padding-bottom:",Object(x.d)(2),";}"),H=Object(a.a)("div",{target:"eegg9ep1"})("@media ",M.g.MEDIUM,"{display:flex;flex-direction:row;flex-wrap:nowrap;margin-left:-",Object(x.d)(1.5),";}"),Z=Object(a.a)("div",{target:"eegg9ep2"})("& + &{margin-top:",Object(x.d)(1.5),";}@media ",M.g.MEDIUM,"{flex:1 1 0;margin-top:0;padding-left:",Object(x.d)(1.5),";& + &{margin-top:0;}}& > *:first-child{margin-top:0;}& > *:last-child{margin-bottom:0;}"),_=Object(a.a)(O.Link,{target:"eegg9ep3"})({name:"okxw92",styles:"color:white;&:visited{color:white;}"}),V=Object(a.a)("a",{target:"eegg9ep4"})({name:"okxw92",styles:"color:white;&:visited{color:white;}"}),K=function(){var t=W.data.site.siteMetadata,e=t.social,n=t.contact;return Object(r.d)(X,null,Object(r.d)(F.a,{style:{padding:"0 "+Object(x.d)(.5)}},Object(r.d)(H,null,Object(r.d)(Z,null,Object(r.d)("h3",null,"Legal Information"),Object(r.d)("p",null,"This site is owned and operated by BadmintonsBest Ltd. BadmintonsBest Ltd is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com. BadmintonsBest Ltd is compensated for referring traffic and business to these companies. Copyright © BadmintonsBest Ltd"),Object(r.d)("ul",null,Object(r.d)("li",null,Object(r.d)(_,{to:"/terms-and-conditions"},"Terms and Conditions")),Object(r.d)("li",null,Object(r.d)(_,{to:"/privacy-policy"},"Privacy Policy")))),Object(r.d)(Z,null,Object(r.d)("h3",null,"Contact Us"),Object(r.d)("ul",null,Object(r.d)("li",null,Object(r.d)(V,{href:"https://youtube.com/"+e.youtube},"YouTube")),Object(r.d)("li",null,Object(r.d)(V,{href:"https://instagram.com/"+e.instagram},"Instagram")),Object(r.d)("li",null,Object(r.d)(V,{href:"https://twitter.com/"+e.twitter},"Twitter")),Object(r.d)("li",null,Object(r.d)(V,{href:"https://facebook.com/"+e.twitter},"Facebook")),Object(r.d)("li",null,Object(r.d)(V,{href:"mailto:"+n.email},"Email")))))),Object(r.d)(F.a,{style:{textAlign:"center",marginTop:Object(x.d)(1.5),padding:"0 "+Object(x.d)(.5)}},"© ",(new Date).getFullYear()," Badmintons Best, Built with"," ",Object(r.d)("a",{style:{color:"white"},href:"https://www.gatsbyjs.org"},"Gatsby")))};var J={BirdsEyeCourt:y,Gram:s.a,PillarSectionEnd:p,PillarSectionTitle:u,Tweet:d.b,YouTube:h},$=Object(a.a)("div",{target:"ea5p3660"})(),tt=Object(a.a)("div",{target:"ea5p3661"})(),et=function(t){var e,n;function a(){return t.apply(this,arguments)||this}return n=t,(e=a).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,a.prototype.render=function(){var t=this.props.children;return Object(r.d)(c.MDXProvider,{components:J},Object(r.d)($,null,Object(r.d)(r.a,{styles:Object(r.c)()}),Object(r.d)(q,null),Object(r.d)(tt,null,t),Object(r.d)(K,null)))},a}(o.a.Component);e.a=et},237:function(t){t.exports={data:{logo:{childImageSharp:{fixed:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsSAAALEgHS3X78AAABoUlEQVQ4y4WTzStEURiHzzVkGjbULFn4KCRxpzuLCTWaZExDWfhsRCl2NNmQFMpGs7Oj2FvZsLDwB1iYoVBko8iCsrIcz5n7DrdrPk49ve/5nXN+9733vFcpx8g4IhiS96SVaiKGwU/eJrrHfa7gyC9ysB7amUfBhH7ohW6N+ttX3NBRoR+WIQ5BGIKQmHfBIoyLoVHK0CMxwcYvSOiqiDPyysPkg5Ai/4AaVabCSonbb0pliYcwAmOCrnACHm7s9W7ZX1HSkAo2X+wDL+Q7xC2J63AkZt/QWc6wQgwj9/YhzQXsox3oCI9P6MzvHZ+o+KWk/27v/N02jLgu7PjT1mfd7fOv98QoX2Ud2q1+1bwOXrhCT2ntzOs1XonJxsbc2UAg8GtmyPUbrtuuRo9rI5m3woDOs+w99flUh2UZAdM0MDNyhmkxKdX1Gdee/MgWEtN2A7eABc2whDYOfRmbGExLgwev+abP/DkntbXRTssKWabZQIUm1bWDqZ++AUlYkbZYgwWYglWYk7V52MVw8o71y6qqPVz6YBTDUczC+MZ+ALYguYm5iS5XAAAAAElFTkSuQmCC",width:1200,height:756,src:"/static/7e31ccdda506dba41a1d03f767a25b73/f3583/badmintonsbest-logo-full.png",srcSet:"/static/7e31ccdda506dba41a1d03f767a25b73/f3583/badmintonsbest-logo-full.png 1x,\n/static/7e31ccdda506dba41a1d03f767a25b73/bbee5/badmintonsbest-logo-full.png 1.5x,\n/static/7e31ccdda506dba41a1d03f767a25b73/0ef64/badmintonsbest-logo-full.png 2x"}}},site:{siteMetadata:{title:"Badmintons Best",description:"Learning from the best, realise your true potential 🔥 🏸 💯",author:"Liam Walsh",siteUrl:"https://www.badmintonsbest.com"}}}}},238:function(t){t.exports={data:{logo:{childImageSharp:{fixed:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAUCBAP/xAAXAQADAQAAAAAAAAAAAAAAAAAAAgME/9oADAMBAAIQAxAAAAGlqR2T1daGGu6Gh7Bpf//EABsQAQACAwEBAAAAAAAAAAAAAAIBAxESEwAE/9oACAEBAAEFAuu8ZxMfQPU7G19CBS7IsEQ7o2JME//EABoRAQACAwEAAAAAAAAAAAAAAAEAAxARQVH/2gAIAQMBAT8BawdEaa/Ycx//xAAYEQACAwAAAAAAAAAAAAAAAAAAARAREv/aAAgBAgEBPwGzTn//xAAgEAACAgAGAwAAAAAAAAAAAAAAAQIRAxIhMTJBUYGh/9oACAEBAAY/Anl6PbZUnqhwq34G3D6WkLEXIUepMpbH/8QAIBABAAIBAgcAAAAAAAAAAAAAAQARIUFRMWFxgbHR8P/aAAgBAQABPyFNljyGZuwzsQF0Wp6ymcysq+xFWcNacvREzkvjCmoIXvLBUoNQsdDSf//aAAwDAQACAAMAAAAQnAcB/8QAGBEBAQEBAQAAAAAAAAAAAAAAAREAUWH/2gAIAQMBAT8Qsoj73AYy5qtyq13/xAAZEQEAAgMAAAAAAAAAAAAAAAABABARQVH/2gAIAQIBAT8QGmWHGO6//8QAIBABAAICAgEFAAAAAAAAAAAAAQARITFBgcFRYXGR8P/aAAgBAQABPxBJ2VOmkvSUncz6uGuQfKSo7BZhoXXbXUC8ZKjIEcvufuPMDamr4D6wuLIK5fzMYh1oOKemGXAfat+IK8tAn//Z",width:50,height:50,src:"/static/aa5bffb11c463c6ebfcf01f9697c7915/99438/badmintonsbest-logo.jpg",srcSet:"/static/aa5bffb11c463c6ebfcf01f9697c7915/99438/badmintonsbest-logo.jpg 1x,\n/static/aa5bffb11c463c6ebfcf01f9697c7915/aba1d/badmintonsbest-logo.jpg 1.5x,\n/static/aa5bffb11c463c6ebfcf01f9697c7915/b315d/badmintonsbest-logo.jpg 2x"}}},site:{siteMetadata:{title:"Badmintons Best",menu:[{text:"Recommended Gear",link:"/recommended-gear/"},{text:"Beginners Guide",link:"/categories/beginners-info/"},{text:"The Blog",link:"/blog/"},{text:"About Us",link:"/about/"}]}}}}},239:function(t){t.exports={data:{site:{siteMetadata:{social:{facebook:"BadmintonsBest",instagram:"badmintonsbest",twitter:"BadmintonsBest",youtube:"UCszQfT2se87xk2TqrS7xHEQ"},contact:{email:"info@badmintonsbest.com"}}}}}},265:function(t,e,n){"use strict";var a=n(228),i=n(229),o=n(230),r=Object(a.a)("main",{target:"ehtmr930"})("margin-left:auto;margin-right:auto;max-width:",i.b,";padding:",Object(i.d)(1)," ",Object(i.d)(.5),";@media ",o.g.MEDIUM,"{padding-top:",Object(i.d)(2),";padding-bottom:",Object(i.d)(2),";}");e.a=r}}]);
//# sourceMappingURL=component---src-pages-thanks-js-3793f1fd73d5eb7fedbd.js.map