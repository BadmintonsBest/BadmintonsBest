(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{237:function(e,r,n){var t=n(1),a=n(64),o=n(35),i=n(7),l=n(8),F=n(11),u=n(158),s=(n(5).Reflect||{}).construct,d=F(function(){function e(){}return!(s(function(){},[],e)instanceof e)}),E=!F(function(){s(function(){})});t(t.S+t.F*(d||E),"Reflect",{construct:function(e,r){o(e),i(r);var n=arguments.length<3?e:o(arguments[2]);if(E&&!d)return s(e,r,n);if(e==n){switch(r.length){case 0:return new e;case 1:return new e(r[0]);case 2:return new e(r[0],r[1]);case 3:return new e(r[0],r[1],r[2]);case 4:return new e(r[0],r[1],r[2],r[3])}var t=[null];return t.push.apply(t,r),new(u.apply(e,t))}var F=n.prototype,g=a(l(F)?F:Object.prototype),c=Function.apply.call(e,g,r);return l(c)?c:g}})},248:function(e,r,n){"use strict";n(22),n(61),n(19),n(20),n(12),n(13),n(6),n(81),n(113);var t=n(21);r.__esModule=!0,r.insertScript=function(e,r,n){var t=window.document.createElement("script");return t.async=!0,t.src=e,t.id=r,n.appendChild(t),t},r.removeScript=function(e,r){var n=window.document.getElementById(e);n&&r.removeChild(n)},r.debounce=function(e,r,n){var t;return function(){var a=this,o=arguments,i=n&&!t;window.clearTimeout(t),t=setTimeout(function(){t=null,n||e.apply(a,o)},r),i&&e.apply(a,o)}},r.isReactElement=o,r.shallowComparison=function(e,r){for(var n=new Set(Object.keys(e),Object.keys(r)),t=Array.isArray(n),a=0,n=t?n:n[Symbol.iterator]();;){var i;if(t){if(a>=n.length)break;i=n[a++]}else{if((a=n.next()).done)break;i=a.value}var l=i;if(e[l]!==r[l]&&!o(e[l]))return!0}return!1};var a=t(n(0));function o(e){return!!a.default.isValidElement(e)||!!Array.isArray(e)&&e.some(function(e){return a.default.isValidElement(e)})}},249:function(e,r,n){var t=n(250);e.exports={MDXRenderer:t}},250:function(e,r,n){function t(e,r,n){return(t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()?Reflect.construct:function(e,r,n){var t=[null];t.push.apply(t,r);var o=new(Function.bind.apply(e,t));return n&&a(o,n.prototype),o}).apply(null,arguments)}function a(e,r){return(a=Object.setPrototypeOf||function(e,r){return e.__proto__=r,e})(e,r)}function o(e){return function(e){if(Array.isArray(e)){for(var r=0,n=new Array(e.length);r<e.length;r++)n[r]=e[r];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,t)}return n}function l(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(n,!0).forEach(function(r){F(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(n).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function F(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}n(43),n(13),n(20),n(81),n(151),n(61),n(19),n(12),n(49),n(6),n(237),n(237),n(81),n(151),n(49),n(61),n(43),n(19),n(12),n(13),n(6),n(20);var u=n(0),s=n(83),d=s.useMDXComponents,E=s.mdx,g=n(111).useMDXScope;e.exports=function(e){var r=e.scope,n=e.components,a=e.children,i=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["scope","components","children"]),F=d(n),s=g(r),c=u.useMemo(function(){if(!a)return null;var e=l({React:u,mdx:E},s),r=Object.keys(e),n=r.map(function(r){return e[r]});return t(Function,["_fn"].concat(o(r),[""+a])).apply(void 0,[{}].concat(o(n)))},[a,r]);return u.createElement(c,l({components:F},i))}},256:function(e,r,n){"use strict";var t=n(21);r.__esModule=!0,r.default=void 0;var a=t(n(257));r.Disqus=a.default;var o=t(n(258));r.CommentCount=o.default;var i=a.default;r.default=i},257:function(e,r,n){"use strict";var t=n(21);r.__esModule=!0,r.default=void 0;var a=t(n(153)),o=t(n(152)),i=t(n(51)),l=t(n(0)),F=t(n(63)),u=n(248),s=function(e){function r(r){var n;return(n=e.call(this,r)||this).shortname="badmintonsbest",r.config?n.config=r.config:n.config={identifier:r.identifier,url:r.url,title:r.title},n}(0,i.default)(r,e);var n=r.prototype;return n.componentDidMount=function(){"undefined"!=typeof window&&window.document&&this.shortname&&this.cleanInstance(),this.loadInstance()},n.shouldComponentUpdate=function(e){return this.props!==e&&(0,u.shallowComparison)(this.props,e)},n.componentDidUpdate=function(){this.loadInstance()},n.loadInstance=function(){if("undefined"!=typeof window&&window.document&&this.shortname){var e=this.config;window.disqus_config=function(){this.page.identifier=e.identifier,this.page.title=e.title,this.page.url=e.url},(0,u.insertScript)("https://"+this.shortname+".disqus.com/embed.js","disqus-embed-script",window.document.body)}},n.cleanInstance=function(){(0,u.removeScript)("disqus-embed-script",window.document.body),window&&window.DISQUS&&window.DISQUS.reset();try{delete window.DISQUS}catch(r){window.DISQUS=void 0}var e=window.document.getElementById("disqus_thread");if(e)for(;e.hasChildNodes();)e.removeChild(e.firstChild)},n.render=function(){var e=this.props,r=(e.config,(0,o.default)(e,["config"]));return l.default.createElement("div",(0,a.default)({id:"disqus_thread"},r,{__source:{fileName:"/Users/brettstevenson/Desktop/Folder/gatsby-plugin-workspace/gatsby-plugin-disqus/src/components/Disqus.jsx",lineNumber:73},__self:this}))},r}(l.default.Component);r.default=s,s.propTypes={config:F.default.shape({identifier:F.default.string,title:F.default.string,url:F.default.string}),identifier:F.default.string,title:F.default.string,url:F.default.string}},258:function(e,r,n){"use strict";var t=n(21);r.__esModule=!0,r.default=void 0;var a=t(n(153)),o=t(n(152)),i=t(n(51)),l=t(n(0)),F=t(n(63)),u=n(248),s=(0,u.debounce)(function(){window.DISQUSWIDGETS&&window.DISQUSWIDGETS.getCount({reset:!0})},300,!1),d=function(e){function r(r){var n;return(n=e.call(this,r)||this).shortname="badmintonsbest",n}(0,i.default)(r,e);var n=r.prototype;return n.componentDidMount=function(){this.loadInstance()},n.shouldComponentUpdate=function(e){return this.props!==e&&(0,u.shallowComparison)(this.props,e)},n.componentDidUpdate=function(){this.loadInstance()},n.loadInstance=function(){window.document.getElementById("dsq-count-scr")?s():(0,u.insertScript)("https://"+this.shortname+".disqus.com/count.js","dsq-count-scr",window.document.body)},n.cleanInstance=function(){(0,u.removeScript)("dsq-count-scr",window.document.body),window.DISQUSWIDGETS=void 0},n.render=function(){var e=this.props,r=e.config,n=e.placeholder,t=(0,o.default)(e,["config","placeholder"]);return l.default.createElement("span",(0,a.default)({className:"disqus-comment-count","data-disqus-identifier":r.identifier,"data-disqus-url":r.url},t,{__source:{fileName:"/Users/brettstevenson/Desktop/Folder/gatsby-plugin-workspace/gatsby-plugin-disqus/src/components/CommentCount.jsx",lineNumber:49},__self:this}),n)},r}(l.default.Component);r.default=d,d.defaultProps={placeholder:"..."},d.propTypes={config:F.default.shape({identifier:F.default.string,title:F.default.string,url:F.default.string}),placeholder:F.default.string}},299:function(e,r,n){"use strict";n(80),Object.defineProperty(r,"__esModule",{value:!0}),function(e){for(var n in e)r.hasOwnProperty(n)||(r[n]=e[n])}(n(300))},300:function(e,r,n){"use strict";n(80),Object.defineProperty(r,"__esModule",{value:!0});var t=n(301),a=/[^#a-f\d]/gi;r.rgba=function(e,r){var n="#"===e[0]?e:t.colors[e.toLowerCase()];if(!n)throw new Error("Invalid color '"+e+"'. Color should be a valid hexadecimal value '#FFFFFF' or a valid color string, for example 'white'");if(r<0||r>1)throw new Error("Invalid opacity '"+r+"'. Opacity should be in the range 0 to 1");try{var o=function(e){if(!e||4!==e.length&&7!==e.length||"#"!==e[0]||a.test(e))throw new Error("Expected a valid hex string");3===(e=e.substring(1)).length&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]);var r=parseInt(e,16);return{red:r>>16,green:r>>8&255,blue:255&r}}(n);return"rgba("+o.red+", "+o.green+", "+o.blue+", "+r+")"}catch(i){throw new Error("Invalid color '"+n+"'. Color should be a valid hexadecimal value, for example '#FFFFFF'")}}},301:function(e,r,n){"use strict";n(80),Object.defineProperty(r,"__esModule",{value:!0}),r.colors={aliceblue:"#F0F8FF",antiquewhite:"#FAEBD7","antiquewhite 1":"#FFEFDB","antiquewhite 2":"#EEDFCC","antiquewhite 3":"#CDC0B0","antiquewhite 4":"#8B8378",aqua:"#00FFFF",aquamarine:"#7FFFD4","aquamarine 1":"#7FFFD4","aquamarine 2":"#76EEC6","aquamarine 3":"#66CDAA","aquamarine 4":"#458B74",azure:"#F0FFFF","azure 1":"#F0FFFF","azure 2":"#E0EEEE","azure 3":"#C1CDCD","azure 4":"#838B8B",banana:"#E3CF57",beige:"#F5F5DC",bisque:"#FFE4C4","bisque 1":"#FFE4C4","bisque 2":"#EED5B7","bisque 3":"#CDB79E","bisque 4":"#8B7D6B",black:"#000000",blanchedalmond:"#FFEBCD",blue:"#0000FF","blue 2":"#0000EE","blue 3":"#0000CD","blue 4":"#00008B",blueviolet:"#8A2BE2",brick:"#9C661F",brown:"#A52A2A","brown 1":"#FF4040","brown 2":"#EE3B3B","brown 3":"#CD3333","brown 4":"#8B2323",burlywood:"#DEB887","burlywood 1":"#FFD39B","burlywood 2":"#EEC591","burlywood 3":"#CDAA7D","burlywood 4":"#8B7355",burntsienna:"#8A360F",burntumber:"#8A3324",cadetblue:"#5F9EA0","cadetblue 1":"#98F5FF","cadetblue 2":"#8EE5EE","cadetblue 3":"#7AC5CD","cadetblue 4":"#53868B",cadmiumorange:"#FF6103",cadmiumyellow:"#FF9912",carrot:"#ED9121",chartreuse:"#7FFF00","chartreuse 1":"#7FFF00","chartreuse 2":"#76EE00","chartreuse 3":"#66CD00","chartreuse 4":"#458B00",chocolate:"#D2691E","chocolate 1":"#FF7F24","chocolate 2":"#EE7621","chocolate 3":"#CD661D","chocolate 4":"#8B4513",cobalt:"#3D59AB",cobaltgreen:"#3D9140",coldgrey:"#808A87",coral:"#FF7F50","coral 1":"#FF7256","coral 2":"#EE6A50","coral 3":"#CD5B45","coral 4":"#8B3E2F",cornflowerblue:"#6495ED",cornsilk:"#FFF8DC","cornsilk 1":"#FFF8DC","cornsilk 2":"#EEE8CD","cornsilk 3":"#CDC8B1","cornsilk 4":"#8B8878",crimson:"#DC143C",cyan:"#00FFFF","cyan 2":"#00EEEE","cyan 3":"#00CDCD","cyan 4":"#008B8B",darkblue:"#00008B",darkcyan:"#008B8B",darkgoldenrod:"#B8860B","darkgoldenrod 1":"#FFB90F","darkgoldenrod 2":"#EEAD0E","darkgoldenrod 3":"#CD950C","darkgoldenrod 4":"#8B6508",darkgray:"#A9A9A9",darkgreen:"#006400",darkkhaki:"#BDB76B",darkmagenta:"#8B008B",darkolivegreen:"#556B2F","darkolivegreen 1":"#CAFF70","darkolivegreen 2":"#BCEE68","darkolivegreen 3":"#A2CD5A","darkolivegreen 4":"#6E8B3D",darkorange:"#FF8C00","darkorange 1":"#FF7F00","darkorange 2":"#EE7600","darkorange 3":"#CD6600","darkorange 4":"#8B4500",darkorchid:"#9932CC","darkorchid 1":"#BF3EFF","darkorchid 2":"#B23AEE","darkorchid 3":"#9A32CD","darkorchid 4":"#68228B",darkred:"#8B0000",darksalmon:"#E9967A",darkseagreen:"#8FBC8F","darkseagreen 1":"#C1FFC1","darkseagreen 2":"#B4EEB4","darkseagreen 3":"#9BCD9B","darkseagreen 4":"#698B69",darkslateblue:"#483D8B",darkslategray:"#2F4F4F","darkslategray 1":"#97FFFF","darkslategray 2":"#8DEEEE","darkslategray 3":"#79CDCD","darkslategray 4":"#528B8B",darkturquoise:"#00CED1",darkviolet:"#9400D3",deeppink:"#FF1493","deeppink 1":"#FF1493","deeppink 2":"#EE1289","deeppink 3":"#CD1076","deeppink 4":"#8B0A50",deepskyblue:"#00BFFF","deepskyblue 1":"#00BFFF","deepskyblue 2":"#00B2EE","deepskyblue 3":"#009ACD","deepskyblue 4":"#00688B",dimgray:"#696969",dodgerblue:"#1E90FF","dodgerblue 1":"#1E90FF","dodgerblue 2":"#1C86EE","dodgerblue 3":"#1874CD","dodgerblue 4":"#104E8B",eggshell:"#FCE6C9",emeraldgreen:"#00C957",firebrick:"#B22222","firebrick 1":"#FF3030","firebrick 2":"#EE2C2C","firebrick 3":"#CD2626","firebrick 4":"#8B1A1A",flesh:"#FF7D40",floralwhite:"#FFFAF0",forestgreen:"#228B22",fuchsia:"#FF00FF",gainsboro:"#DCDCDC",ghostwhite:"#F8F8FF",gold:"#FFD700","gold 1":"#FFD700","gold 2":"#EEC900","gold 3":"#CDAD00","gold 4":"#8B7500",goldenrod:"#DAA520","goldenrod 1":"#FFC125","goldenrod 2":"#EEB422","goldenrod 3":"#CD9B1D","goldenrod 4":"#8B6914",gray:"#808080","gray 1":"#030303","gray 10":"#1A1A1A","gray 11":"#1C1C1C","gray 12":"#1F1F1F","gray 13":"#212121","gray 14":"#242424","gray 15":"#262626","gray 16":"#292929","gray 17":"#2B2B2B","gray 18":"#2E2E2E","gray 19":"#303030","gray 2":"#050505","gray 20":"#333333","gray 21":"#363636","gray 22":"#383838","gray 23":"#3B3B3B","gray 24":"#3D3D3D","gray 25":"#404040","gray 26":"#424242","gray 27":"#454545","gray 28":"#474747","gray 29":"#4A4A4A","gray 3":"#080808","gray 30":"#4D4D4D","gray 31":"#4F4F4F","gray 32":"#525252","gray 33":"#545454","gray 34":"#575757","gray 35":"#595959","gray 36":"#5C5C5C","gray 37":"#5E5E5E","gray 38":"#616161","gray 39":"#636363","gray 4":"#0A0A0A","gray 40":"#666666","gray 42":"#696969","gray 43":"#6E6E6E","gray 44":"#707070","gray 45":"#737373","gray 46":"#757575","gray 47":"#787878","gray 48":"#7A7A7A","gray 49":"#7D7D7D","gray 5":"#0D0D0D","gray 50":"#7F7F7F","gray 51":"#828282","gray 52":"#858585","gray 53":"#878787","gray 54":"#8A8A8A","gray 55":"#8C8C8C","gray 56":"#8F8F8F","gray 57":"#919191","gray 58":"#949494","gray 59":"#969696","gray 6":"#0F0F0F","gray 60":"#999999","gray 61":"#9C9C9C","gray 62":"#9E9E9E","gray 63":"#A1A1A1","gray 64":"#A3A3A3","gray 65":"#A6A6A6","gray 66":"#A8A8A8","gray 67":"#ABABAB","gray 68":"#ADADAD","gray 69":"#B0B0B0","gray 7":"#121212","gray 70":"#B3B3B3","gray 71":"#B5B5B5","gray 72":"#B8B8B8","gray 73":"#BABABA","gray 74":"#BDBDBD","gray 75":"#BFBFBF","gray 76":"#C2C2C2","gray 77":"#C4C4C4","gray 78":"#C7C7C7","gray 79":"#C9C9C9","gray 8":"#141414","gray 80":"#CCCCCC","gray 81":"#CFCFCF","gray 82":"#D1D1D1","gray 83":"#D4D4D4","gray 84":"#D6D6D6","gray 85":"#D9D9D9","gray 86":"#DBDBDB","gray 87":"#DEDEDE","gray 88":"#E0E0E0","gray 89":"#E3E3E3","gray 9":"#171717","gray 90":"#E5E5E5","gray 91":"#E8E8E8","gray 92":"#EBEBEB","gray 93":"#EDEDED","gray 94":"#F0F0F0","gray 95":"#F2F2F2","gray 96":"#F5F5F5","gray 97":"#F7F7F7","gray 98":"#FAFAFA","gray 99":"#FCFCFC",green:"#008000","green 1":"#00FF00","green 2":"#00EE00","green 3":"#00CD00","green 4":"#008B00",greenyellow:"#ADFF2F",honeydew:"#F0FFF0","honeydew 1":"#F0FFF0","honeydew 2":"#E0EEE0","honeydew 3":"#C1CDC1","honeydew 4":"#838B83",hotpink:"#FF69B4","hotpink 1":"#FF6EB4","hotpink 2":"#EE6AA7","hotpink 3":"#CD6090","hotpink 4":"#8B3A62","indian red":"#B0171F",indianred:"#CD5C5C","indianred 1":"#FF6A6A","indianred 2":"#EE6363","indianred 3":"#CD5555","indianred 4":"#8B3A3A",indigo:"#4B0082",ivory:"#FFFFF0","ivory 1":"#FFFFF0","ivory 2":"#EEEEE0","ivory 3":"#CDCDC1","ivory 4":"#8B8B83",ivoryblack:"#292421",khaki:"#F0E68C","khaki 1":"#FFF68F","khaki 2":"#EEE685","khaki 3":"#CDC673","khaki 4":"#8B864E",lavender:"#E6E6FA",lavenderblush:"#FFF0F5","lavenderblush 1":"#FFF0F5","lavenderblush 2":"#EEE0E5","lavenderblush 3":"#CDC1C5","lavenderblush 4":"#8B8386",lawngreen:"#7CFC00",lemonchiffon:"#FFFACD","lemonchiffon 1":"#FFFACD","lemonchiffon 2":"#EEE9BF","lemonchiffon 3":"#CDC9A5","lemonchiffon 4":"#8B8970",lightblue:"#ADD8E6","lightblue 1":"#BFEFFF","lightblue 2":"#B2DFEE","lightblue 3":"#9AC0CD","lightblue 4":"#68838B",lightcoral:"#F08080",lightcyan:"#E0FFFF","lightcyan 1":"#E0FFFF","lightcyan 2":"#D1EEEE","lightcyan 3":"#B4CDCD","lightcyan 4":"#7A8B8B","lightgoldenrod 1":"#FFEC8B","lightgoldenrod 2":"#EEDC82","lightgoldenrod 3":"#CDBE70","lightgoldenrod 4":"#8B814C",lightgoldenrodyellow:"#FAFAD2",lightgreen:"#90EE90",lightgrey:"#D3D3D3",lightpink:"#FFB6C1","lightpink 1":"#FFAEB9","lightpink 2":"#EEA2AD","lightpink 3":"#CD8C95","lightpink 4":"#8B5F65",lightsalmon:"#FFA07A","lightsalmon 1":"#FFA07A","lightsalmon 2":"#EE9572","lightsalmon 3":"#CD8162","lightsalmon 4":"#8B5742",lightseagreen:"#20B2AA",lightskyblue:"#87CEFA","lightskyblue 1":"#B0E2FF","lightskyblue 2":"#A4D3EE","lightskyblue 3":"#8DB6CD","lightskyblue 4":"#607B8B",lightslateblue:"#8470FF",lightslategray:"#778899",lightsteelblue:"#B0C4DE","lightsteelblue 1":"#CAE1FF","lightsteelblue 2":"#BCD2EE","lightsteelblue 3":"#A2B5CD","lightsteelblue 4":"#6E7B8B",lightyellow:"#FFFFE0","lightyellow 1":"#FFFFE0","lightyellow 2":"#EEEED1","lightyellow 3":"#CDCDB4","lightyellow 4":"#8B8B7A",lime:"#00FF00",limegreen:"#32CD32",linen:"#FAF0E6",magenta:"#FF00FF","magenta 2":"#EE00EE","magenta 3":"#CD00CD","magenta 4":"#8B008B",manganeseblue:"#03A89E",maroon:"#800000","maroon 1":"#FF34B3","maroon 2":"#EE30A7","maroon 3":"#CD2990","maroon 4":"#8B1C62",mediumaquamarine:"#66CDAA",mediumblue:"#0000CD",mediumorchid:"#BA55D3","mediumorchid 1":"#E066FF","mediumorchid 2":"#D15FEE","mediumorchid 3":"#B452CD","mediumorchid 4":"#7A378B",mediumpurple:"#9370DB","mediumpurple 1":"#AB82FF","mediumpurple 2":"#9F79EE","mediumpurple 3":"#8968CD","mediumpurple 4":"#5D478B",mediumseagreen:"#3CB371",mediumslateblue:"#7B68EE",mediumspringgreen:"#00FA9A",mediumturquoise:"#48D1CC",mediumvioletred:"#C71585",melon:"#E3A869",midnightblue:"#191970",mint:"#BDFCC9",mintcream:"#F5FFFA",mistyrose:"#FFE4E1","mistyrose 1":"#FFE4E1","mistyrose 2":"#EED5D2","mistyrose 3":"#CDB7B5","mistyrose 4":"#8B7D7B",moccasin:"#FFE4B5",navajowhite:"#FFDEAD","navajowhite 1":"#FFDEAD","navajowhite 2":"#EECFA1","navajowhite 3":"#CDB38B","navajowhite 4":"#8B795E",navy:"#000080",oldlace:"#FDF5E6",olive:"#808000",olivedrab:"#6B8E23","olivedrab 1":"#C0FF3E","olivedrab 2":"#B3EE3A","olivedrab 3":"#9ACD32","olivedrab 4":"#698B22",orange:"#FF8000","orange 1":"#FFA500","orange 2":"#EE9A00","orange 3":"#CD8500","orange 4":"#8B5A00",orangered:"#FF4500","orangered 1":"#FF4500","orangered 2":"#EE4000","orangered 3":"#CD3700","orangered 4":"#8B2500",orchid:"#DA70D6","orchid 1":"#FF83FA","orchid 2":"#EE7AE9","orchid 3":"#CD69C9","orchid 4":"#8B4789",palegoldenrod:"#EEE8AA",palegreen:"#98FB98","palegreen 1":"#9AFF9A","palegreen 2":"#90EE90","palegreen 3":"#7CCD7C","palegreen 4":"#548B54",paleturquoise:"#AEEEEE","paleturquoise 1":"#BBFFFF","paleturquoise 2":"#AEEEEE","paleturquoise 3":"#96CDCD","paleturquoise 4":"#668B8B",palevioletred:"#DB7093","palevioletred 1":"#FF82AB","palevioletred 2":"#EE799F","palevioletred 3":"#CD6889","palevioletred 4":"#8B475D",papayawhip:"#FFEFD5",peachpuff:"#FFDAB9","peachpuff 1":"#FFDAB9","peachpuff 2":"#EECBAD","peachpuff 3":"#CDAF95","peachpuff 4":"#8B7765",peacock:"#33A1C9",peru:"#CD853F",pink:"#FFC0CB","pink 1":"#FFB5C5","pink 2":"#EEA9B8","pink 3":"#CD919E","pink 4":"#8B636C",plum:"#DDA0DD","plum 1":"#FFBBFF","plum 2":"#EEAEEE","plum 3":"#CD96CD","plum 4":"#8B668B",powderblue:"#B0E0E6",purple:"#800080","purple 1":"#9B30FF","purple 2":"#912CEE","purple 3":"#7D26CD","purple 4":"#551A8B",raspberry:"#872657",rawsienna:"#C76114",red:"#FF0000","red 1":"#FF0000","red 2":"#EE0000","red 3":"#CD0000","red 4":"#8B0000",rosybrown:"#BC8F8F","rosybrown 1":"#FFC1C1","rosybrown 2":"#EEB4B4","rosybrown 3":"#CD9B9B","rosybrown 4":"#8B6969",royalblue:"#4169E1","royalblue 1":"#4876FF","royalblue 2":"#436EEE","royalblue 3":"#3A5FCD","royalblue 4":"#27408B",saddlebrown:"#8B4513",salmon:"#FA8072","salmon 1":"#FF8C69","salmon 2":"#EE8262","salmon 3":"#CD7054","salmon 4":"#8B4C39",sandybrown:"#F4A460",sapgreen:"#308014",seagreen:"#2E8B57","seagreen 1":"#54FF9F","seagreen 2":"#4EEE94","seagreen 3":"#43CD80","seagreen 4":"#2E8B57",seashell:"#FFF5EE","seashell 1":"#FFF5EE","seashell 2":"#EEE5DE","seashell 3":"#CDC5BF","seashell 4":"#8B8682",sepia:"#5E2612","sgi beet":"#8E388E","sgi brightgray":"#C5C1AA","sgi chartreuse":"#71C671","sgi darkgray":"#555555","sgi gray 12":"#1E1E1E","sgi gray 16":"#282828","sgi gray 32":"#515151","sgi gray 36":"#5B5B5B","sgi gray 52":"#848484","sgi gray 56":"#8E8E8E","sgi gray 72":"#B7B7B7","sgi gray 76":"#C1C1C1","sgi gray 92":"#EAEAEA","sgi gray 96":"#F4F4F4","sgi lightblue":"#7D9EC0","sgi lightgray":"#AAAAAA","sgi olivedrab":"#8E8E38","sgi salmon":"#C67171","sgi slateblue":"#7171C6","sgi teal":"#388E8E",sienna:"#A0522D","sienna 1":"#FF8247","sienna 2":"#EE7942","sienna 3":"#CD6839","sienna 4":"#8B4726",silver:"#C0C0C0",skyblue:"#87CEEB","skyblue 1":"#87CEFF","skyblue 2":"#7EC0EE","skyblue 3":"#6CA6CD","skyblue 4":"#4A708B",slateblue:"#6A5ACD","slateblue 1":"#836FFF","slateblue 2":"#7A67EE","slateblue 3":"#6959CD","slateblue 4":"#473C8B",slategray:"#708090","slategray 1":"#C6E2FF","slategray 2":"#B9D3EE","slategray 3":"#9FB6CD","slategray 4":"#6C7B8B",snow:"#FFFAFA","snow 1":"#FFFAFA","snow 2":"#EEE9E9","snow 3":"#CDC9C9","snow 4":"#8B8989",springgreen:"#00FF7F","springgreen 1":"#00EE76","springgreen 2":"#00CD66","springgreen 3":"#008B45",steelblue:"#4682B4","steelblue 1":"#63B8FF","steelblue 2":"#5CACEE","steelblue 3":"#4F94CD","steelblue 4":"#36648B",tan:"#D2B48C","tan 1":"#FFA54F","tan 2":"#EE9A49","tan 3":"#CD853F","tan 4":"#8B5A2B",teal:"#008080",thistle:"#D8BFD8","thistle 1":"#FFE1FF","thistle 2":"#EED2EE","thistle 3":"#CDB5CD","thistle 4":"#8B7B8B",tomato:"#FF6347","tomato 1":"#FF6347","tomato 2":"#EE5C42","tomato 3":"#CD4F39","tomato 4":"#8B3626",turquoise:"#40E0D0","turquoise 1":"#00F5FF","turquoise 2":"#00E5EE","turquoise 3":"#00C5CD","turquoise 4":"#00868B",turquoiseblue:"#00C78C",violet:"#EE82EE",violetred:"#D02090","violetred 1":"#FF3E96","violetred 2":"#EE3A8C","violetred 3":"#CD3278","violetred 4":"#8B2252",warmgrey:"#808069",wheat:"#F5DEB3","wheat 1":"#FFE7BA","wheat 2":"#EED8AE","wheat 3":"#CDBA96","wheat 4":"#8B7E66",white:"#FFFFFF","white smoke":"#F5F5F5",whitesmoke:"#F5F5F5",yellow:"#FFFF00","yellow 1":"#FFFF00","yellow 2":"#EEEE00","yellow 3":"#CDCD00","yellow 4":"#8B8B00",yellowgreen:"#9ACD32"}}}]);
//# sourceMappingURL=16-50f1964c1ece17c37883.js.map