(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{209:function(t,e,o){"use strict";o.r(e);o(45),o(13);var a=o(9),n=o(0),r=o.n(n),i=o(220),l=o(219),c=o(245),p=o(222),s=o(215),d=o(223),b=o(224),u=o(225),g=o(226),m=o(217),j=o(216),O=o(221),f=o(211),h=o(210),y=Object(f.a)("nav",{target:"e1konmbv0"})("display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between;align-items:center;margin-top:",Object(h.b)(2),";");o.d(e,"pageQuery",function(){return w});var v=function(t){var e,o;function n(){return t.apply(this,arguments)||this}return o=t,(e=n).prototype=Object.create(o.prototype),e.prototype.constructor=e,e.__proto__=o,n.prototype.render=function(){var t=this.props.data.site.siteMetadata.title,e=this.props.data.site.siteMetadata.description,o=this.props.data.allMarkdownRemark.edges,n=this.props.location.href,r=this.props.pageContext,f=r.currentPage,h=1===f,v=f===r.numPages,w=f-1==1?"/blog":"/blog/page/"+(f-1).toString(),k="/blog/page/"+(f+1).toString();return Object(a.d)(i.a,{location:this.props.location},Object(a.d)(l.a,{title:t,description:e,url:n}),Object(a.d)(s.a,null,Object(a.d)(d.a,null,Object(a.d)(m.a,null,Object(a.d)("h1",{style:{marginTop:0,marginBottom:0}},"Blog")),Object(a.d)(b.a,null,Object(a.d)(u.a,null,o.map(function(t){var e=t.node;return Object(a.d)(O.a,{key:e.fields.slug,type:"blog",node:e})}),Object(a.d)(y,null,!h&&Object(a.d)(c.a,{to:w,className:"pagination-link",rel:"prev"},"← Newer Posts"),!v&&Object(a.d)(c.a,{to:k,className:"pagination-link",rel:"next"},"Older Posts →"))),Object(a.d)(g.a,null,Object(a.d)(j.a,{slug:"sidebar-unit"}),Object(a.d)(p.a,null))))))},n}(r.a.Component),w=(e.default=v,"1984542373")},217:function(t,e,o){"use strict";var a=o(211),n=o(210),r=o(212),i=Object(a.a)("header",{target:"edjjvsm0"})("position:relative;margin-bottom:",Object(n.b)(1.5),";padding-bottom:",Object(n.b)(1.5),";&::after{position:absolute;bottom:0;left:0;display:inline-block;height:2px;width:10em;max-width:100%;background-color:",r.g,';content:"";opacity:0.5;}*:first-child{margin-top:0;padding-top:0;}*:last-child{margin-bottom:0;padding-bottom:0;}');e.a=i},221:function(t,e,o){"use strict";var a=o(211),n=o(9),r=o(0),i=o.n(r),l=o(213),c=o(214),p=o.n(c),s=o(210);var d=Object(a.a)("div",{target:"elm5g250"})("& + &{margin-top:",Object(s.b)(2),";}"),b=function(t){var e,o;function a(){return t.apply(this,arguments)||this}return o=t,(e=a).prototype=Object.create(o.prototype),e.prototype.constructor=e,e.__proto__=o,a.prototype.render=function(){var t=this.props,e=t.node,o=t.variant,a=e.frontmatter.title||e.fields.slug,r=!!e.frontmatter.featured&&e.frontmatter.featured.childImageSharp.fluid;return Object(n.d)(d,null,r&&Object(n.d)(l.a,{style:{boxShadow:"none",display:"block",marginBottom:Object(s.b)(1)},to:e.fields.slug},Object(n.d)(p.a,{fluid:r})),o&&"mini"===o?Object(n.d)("h4",{style:{marginTop:0}},Object(n.d)(l.a,{style:{boxShadow:"none"},to:e.fields.slug},a)):Object(n.d)("h2",{style:{marginTop:0}},Object(n.d)(l.a,{style:{boxShadow:"none"},to:e.fields.slug},a)),Object(n.d)("p",{dangerouslySetInnerHTML:{__html:e.frontmatter.description||e.excerpt},style:{marginBottom:0}}))},a}(i.a.Component);e.a=b}}]);
//# sourceMappingURL=component---src-templates-blog-js-261f8d645fbf82f6a5b9.js.map