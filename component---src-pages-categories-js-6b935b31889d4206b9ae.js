(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{221:function(t,n,e){"use strict";e.r(n),e.d(n,"pageQuery",function(){return g});var u=e(0),o=e.n(u),r=e(149),f=e(314),i=e.n(f),c=e(236),a=e(234),d=e(250),l=e(232),p=e(241),s=e(251),x=e(252),b=e(253),v=e(254),j=e(2);var O=function(t){var n,e;function u(){return t.apply(this,arguments)||this}return e=t,(n=u).prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e,u.prototype.render=function(){var t=this.props.data.site.siteMetadata.title,n=this.props.data.site.siteMetadata.description,e=this.props.location.href,u=this.props.data.allMdx.group;return Object(j.d)(c.a,{location:this.props.location},Object(j.d)(a.a,{title:t,description:n,url:e}),Object(j.d)(l.a,null,Object(j.d)(p.a,null,Object(j.d)(v.a,null,Object(j.d)("h1",{style:{marginTop:0,marginBottom:0}},"Categories")),Object(j.d)(s.a,null,Object(j.d)(x.a,null,Object(j.d)("ul",null,u.map(function(t){return Object(j.d)("li",{key:t.fieldValue},Object(j.d)(r.Link,{to:"/categories/"+i()(t.fieldValue)+"/"},t.fieldValue," (",t.totalCount,")"))}))),Object(j.d)(b.a,null,Object(j.d)(d.a,null))))))},u}(o.a.Component);n.default=O;var g="516403580"},266:function(t,n,e){var u=e(321).Symbol;t.exports=u},278:function(t,n,e){var u=e(320);t.exports=function(t){return null==t?"":u(t)}},314:function(t,n,e){var u=e(315)(function(t,n,e){return t+(e?"-":"")+n.toLowerCase()});t.exports=u},315:function(t,n,e){e(15),e(150);var u=e(316),o=e(317),r=e(330),f=RegExp("['’]","g");t.exports=function(t){return function(n){return u(r(o(n).replace(f,"")),t,"")}}},316:function(t,n){t.exports=function(t,n,e,u){var o=-1,r=null==t?0:t.length;for(u&&r&&(e=t[++o]);++o<r;)e=n(e,t[o],o,t);return e}},317:function(t,n,e){e(15),e(150);var u=e(318),o=e(278),r=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,f=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");t.exports=function(t){return(t=o(t))&&t.replace(r,u).replace(f,"")}},318:function(t,n,e){var u=e(319)({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"});t.exports=u},319:function(t,n){t.exports=function(t){return function(n){return null==t?void 0:t[n]}}},320:function(t,n,e){e(49),e(61),e(6);var u=e(266),o=e(323),r=e(324),f=e(325),i=1/0,c=u?u.prototype:void 0,a=c?c.toString:void 0;t.exports=function t(n){if("string"==typeof n)return n;if(r(n))return o(n,t)+"";if(f(n))return a?a.call(n):"";var e=n+"";return"0"==e&&1/n==-i?"-0":e}},321:function(t,n,e){var u=e(322),o="object"==typeof self&&self&&self.Object===Object&&self,r=u||o||Function("return this")();t.exports=r},322:function(t,n,e){(function(n){var e="object"==typeof n&&n&&n.Object===Object&&n;t.exports=e}).call(this,e(155))},323:function(t,n){t.exports=function(t,n){for(var e=-1,u=null==t?0:t.length,o=Array(u);++e<u;)o[e]=n(t[e],e,t);return o}},324:function(t,n,e){e(50);var u=Array.isArray;t.exports=u},325:function(t,n,e){var u=e(326),o=e(329),r="[object Symbol]";t.exports=function(t){return"symbol"==typeof t||o(t)&&u(t)==r}},326:function(t,n,e){var u=e(266),o=e(327),r=e(328),f="[object Null]",i="[object Undefined]",c=u?u.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?i:f:c&&c in Object(t)?o(t):r(t)}},327:function(t,n,e){e(49),e(61),e(6);var u=e(266),o=Object.prototype,r=o.hasOwnProperty,f=o.toString,i=u?u.toStringTag:void 0;t.exports=function(t){var n=r.call(t,i),e=t[i];try{t[i]=void 0;var u=!0}catch(c){}var o=f.call(t);return u&&(n?t[i]=e:delete t[i]),o}},328:function(t,n,e){e(49),e(61),e(6);var u=Object.prototype.toString;t.exports=function(t){return u.call(t)}},329:function(t,n){t.exports=function(t){return null!=t&&"object"==typeof t}},330:function(t,n,e){e(80);var u=e(331),o=e(332),r=e(278),f=e(333);t.exports=function(t,n,e){return t=r(t),void 0===(n=e?void 0:n)?o(t)?f(t):u(t):t.match(n)||[]}},331:function(t,n,e){e(80);var u=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;t.exports=function(t){return t.match(u)||[]}},332:function(t,n){var e=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;t.exports=function(t){return e.test(t)}},333:function(t,n,e){e(80),e(150);var u="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",o="["+u+"]",r="\\d+",f="[\\u2700-\\u27bf]",i="[a-z\\xdf-\\xf6\\xf8-\\xff]",c="[^\\ud800-\\udfff"+u+r+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",a="(?:\\ud83c[\\udde6-\\uddff]){2}",d="[\\ud800-\\udbff][\\udc00-\\udfff]",l="[A-Z\\xc0-\\xd6\\xd8-\\xde]",p="(?:"+i+"|"+c+")",s="(?:"+l+"|"+c+")",x="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",b="[\\ufe0e\\ufe0f]?"+x+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",a,d].join("|")+")[\\ufe0e\\ufe0f]?"+x+")*"),v="(?:"+[f,a,d].join("|")+")"+b,j=RegExp([l+"?"+i+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[o,l,"$"].join("|")+")",s+"+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[o,l+p,"$"].join("|")+")",l+"?"+p+"+(?:['’](?:d|ll|m|re|s|t|ve))?",l+"+(?:['’](?:D|LL|M|RE|S|T|VE))?","\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",r,v].join("|"),"g");t.exports=function(t){return t.match(j)||[]}}}]);
//# sourceMappingURL=component---src-pages-categories-js-6b935b31889d4206b9ae.js.map