"use strict";(self.webpackChunksimple_movie=self.webpackChunksimple_movie||[]).push([[925],{708:function(e,t,a){var n=a(689),i=a(555),r=a(979),l=a(184);t.Z=function(e){var t=e.data,a=(0,n.s0)(),o=t.backdrop_path,s=t.title,c=t.vote_average,d=t.release_date,u=t.id;return(0,l.jsxs)("div",{className:"flex flex-col movie-card-item rounded-lg p-3 bg-slate-800 w-full select-none h-full ",children:[(0,l.jsx)(r.Z,{src:"".concat(i.n2).concat(o),alt:"",className:"w-full h-[200px] object-cover rounded-lg mb-5"}),(0,l.jsxs)("div",{className:"flex flex-col flex-1",children:[(0,l.jsx)("h3",{className:"text-white text-xl font-bold mb-3",children:s}),(0,l.jsxs)("div",{className:"text-white flex items-center justify-between text-sm opacity-50 mb-8",children:[(0,l.jsx)("span",{children:d}),(0,l.jsx)("span",{children:c})]}),(0,l.jsx)("button",{className:"text-white font-semibold py-3 px-6 rounded-lg capitalize bg-primary text-center w-full mt-auto",onClick:function(){return function(e){a("/movie/".concat(e))}(u)},children:"watch now"})]})]})}},169:function(e,t,a){var n=a(419),i=a(555),r=a(239),l=a(184);t.Z=function(e){var t=e.movieCardItem,a=e.title,o=e.link,s=t,c=(0,n.ZP)("https://api.themoviedb.org/3/movie/".concat(o,"?api_key=").concat(i.XP,"&language=en-US&page=1"),i._i),d=c.data,u=(c.error,(null===d||void 0===d?void 0:d.results)||[]);return(0,l.jsxs)("div",{className:"movies-list mb-20",children:[(0,l.jsx)("h2",{className:"capitalize text-white mb-8 text-2xl font-bold ",children:a}),(0,l.jsx)(r.Z,{slidesPerView:4,data:u,chilrenComponent:s})]})}},239:function(e,t,a){var n=a(42),i=(a(676),a(184));t.Z=function(e){var t=e.grabCursor,a=void 0===t?"true":t,r=e.spaceBetween,l=void 0===r?40:r,o=e.slidesPerView,s=void 0===o?4:o,c=e.data,d=e.chilrenComponent;return(0,i.jsx)(n.tq,{grabCursor:a,spaceBetween:l,slidesPerView:s,children:c.length>0&&c.map((function(e,t){return(0,i.jsx)(n.o5,{children:(0,i.jsx)(d,{data:e})},e.id?e.id:t)}))})}},979:function(e,t,a){a.d(t,{Z:function(){return d}});var n=a(413),i=a(885),r=a(925),l=a(791),o={noImage:a(178)},s=a(184),c=["src","alt","className","fallback"],d=(0,l.forwardRef)((function(e,t){var a=e.src,d=e.alt,u=e.className,m=e.fallback,p=void 0===m?o.noImage:m,v=(0,r.Z)(e,c),x=(0,l.useState)(""),f=(0,i.Z)(x,2),h=f[0],g=f[1];console.log({images:o});return(0,s.jsx)("img",(0,n.Z)((0,n.Z)({className:u,ref:t,src:h||a,alt:d},v),{},{onError:function(){g(p)}}))}))},146:function(e,t,a){a.r(t),a.d(t,{default:function(){return u}});var n=a(419),i=a(555),r=a(708),l=a(169),o=a(184);var s=function(){return(0,o.jsxs)("section",{className:"movies-layout page-container ",children:[(0,o.jsx)(l.Z,{title:"Now playing",link:"now_playing",movieCardItem:r.Z}),(0,o.jsx)(l.Z,{title:"top rate",link:"top_rated",movieCardItem:r.Z}),(0,o.jsx)(l.Z,{title:"popular",link:"popular",movieCardItem:r.Z})]})},c=a(239),d=a(821);var u=function(){var e=(0,n.ZP)("https://api.themoviedb.org/3/movie/upcoming?api_key=".concat(i.XP,"&language=en-US&page=1"),i._i),t=e.data,a=(e.error,(null===t||void 0===t?void 0:t.results)||[]);return(0,o.jsxs)("div",{children:[(0,o.jsx)(c.Z,{data:a,slidesPerView:1,chilrenComponent:d.Z}),(0,o.jsx)(s,{})]})}},178:function(e,t,a){e.exports=a.p+"static/media/no-image.3684e37c6c29c788e623.png"}}]);
//# sourceMappingURL=925.6c4357d6.chunk.js.map