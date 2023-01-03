"use strict";(self.webpackChunksimple_movie=self.webpackChunksimple_movie||[]).push([[779],{708:function(e,t,n){var a=n(689),c=n(555),l=n(979),s=n(184);t.Z=function(e){var t=e.data,n=(0,a.s0)(),i=t.backdrop_path,r=t.title,o=t.vote_average,d=t.release_date,u=t.id;return(0,s.jsxs)("div",{className:"flex flex-col movie-card-item rounded-lg p-3 bg-slate-800 w-full select-none h-full ",children:[(0,s.jsx)(l.Z,{src:"".concat(c.n2).concat(i),alt:"",className:"w-full h-[200px] object-cover rounded-lg mb-5"}),(0,s.jsxs)("div",{className:"flex flex-col flex-1",children:[(0,s.jsx)("h3",{className:"text-white text-xl font-bold mb-3",children:r}),(0,s.jsxs)("div",{className:"text-white flex items-center justify-between text-sm opacity-50 mb-8",children:[(0,s.jsx)("span",{children:d}),(0,s.jsx)("span",{children:o})]}),(0,s.jsx)("button",{className:"text-white font-semibold py-3 px-6 rounded-lg capitalize bg-primary text-center w-full mt-auto",onClick:function(){return function(e){n("/movie/".concat(e))}(u)},children:"watch now"})]})]})}},239:function(e,t,n){var a=n(42),c=(n(676),n(184));t.Z=function(e){var t=e.grabCursor,n=void 0===t?"true":t,l=e.spaceBetween,s=void 0===l?40:l,i=e.slidesPerView,r=void 0===i?4:i,o=e.data,d=e.chilrenComponent;return(0,c.jsx)(a.tq,{grabCursor:n,spaceBetween:s,slidesPerView:r,children:o.length>0&&o.map((function(e,t){return(0,c.jsx)(a.o5,{children:(0,c.jsx)(d,{data:e})},e.id?e.id:t)}))})}},979:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(413),c=n(885),l=n(925),s=n(791),i={noImage:n(178)},r=n(184),o=["src","alt","className","fallback"],d=(0,s.forwardRef)((function(e,t){var n=e.src,d=e.alt,u=e.className,m=e.fallback,f=void 0===m?i.noImage:m,x=(0,l.Z)(e,o),h=(0,s.useState)(""),p=(0,c.Z)(h,2),v=p[0],g=p[1];console.log({images:i});return(0,r.jsx)("img",(0,a.Z)((0,a.Z)({className:u,ref:t,src:v||n,alt:d},x),{},{onError:function(){g(f)}}))}))},487:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var a=n(885),c=n(791),l=n(689),s=n(419),i=n(555),r=n(660),o=n(979),d=n(184);var u=function(e){var t=e.id,n=(0,c.useState)([]),l=(0,a.Z)(n,2),s=l[0],u=l[1];return(0,c.useEffect)((function(){r.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=").concat(i.XP,"&language=en-US")).then((function(e){u(e.data.cast),console.log(e)})).catch((function(e){console.log(e)})).finally((function(){}))}),[]),(0,d.jsx)(d.Fragment,{children:s.length>0&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("h1",{className:"text-center font-bold text-2xl mb-10 ",children:"Casts"}),(0,d.jsx)("div",{className:"grid grid-cols-4 gap-x-5 ",children:s.splice(0,4).map((function(e){return(0,d.jsxs)("div",{className:"flex flex-col justify-between",children:[(0,d.jsx)(o.Z,{src:"".concat(i.n2).concat(e.profile_path),alt:"",className:"w-full h-[200px] rounded-md object-cover mb-2"}),(0,d.jsx)("h4",{className:"text-center font-medium text-lg",children:e.name})]},e.id)}))})]})})};var m=function(e){var t=(0,c.useState)(),n=(0,a.Z)(t,2),l=n[0],s=n[1];return(0,c.useEffect)((function(){r.Z.get("".concat(i.Vr).concat(e)).then((function(e){s(e.data)})).catch((function(e){console.log(e)})).finally((function(){}))}),[e]),l},f=n(708),x=n(239);var h=function(e){var t=e.id,n=m("movie/".concat(t,"/similar?api_key=").concat(i.XP,"&language=en-US"));return!n||n.results.length<=0?null:(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("h1",{className:"text-center font-bold text-2xl mb-10",children:"Movies Similar"}),n.results.length>0&&(0,d.jsx)("div",{className:"video-similar mb-20",children:(0,d.jsx)(x.Z,{slidesPerView:3,data:n.results,chilrenComponent:f.Z})})]})};var p=function(e){var t=e.id,n=(0,c.useState)([]),l=(0,a.Z)(n,2),s=l[0],o=l[1];return(0,c.useEffect)((function(){r.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/videos?api_key=").concat(i.XP,"&language=en-US")).then((function(e){o([e.data.results[0]]),console.log()})).catch((function(e){console.log(e)})).finally((function(){}))}),[t]),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("h1",{className:"text-center font-bold text-2xl mb-10",children:"Video Trailer"}),s.length>0&&s.map((function(e){return(0,d.jsx)("div",{className:"w-full my-10",children:(0,d.jsx)("iframe",{width:"100%",height:"370",src:"https://www.youtube.com/embed/".concat(e.key),title:"THE WOMAN KING - Filming in South Africa",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})},t)}))]})};var v=function(){var e=(0,l.UO)().movie_id,t=(0,c.useState)(null),n=(0,a.Z)(t,2),r=n[0],m=n[1],f=(0,s.ZP)("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(i.XP,"&language=en-US"),i._i),x=f.data;return f.error,(0,c.useEffect)((function(){x&&m(x)}),[x]),(0,d.jsx)("div",{children:r&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("div",{className:"h-[500px] relative",style:{},children:(0,d.jsx)("img",{src:"".concat(i.tE).concat(r.backdrop_path),alt:"",className:"w-full h-full object-cover"})}),(0,d.jsx)("div",{className:"h-[300px] w-[800px] rounded-lg -mt-[150px] relative z-10 mx-auto",children:(0,d.jsx)(o.Z,{src:"".concat(i.tE).concat(r.poster_path),alt:"",className:"w-full h-full object-cover rounded-lg"})}),(0,d.jsxs)("div",{className:"w-[800px] mx-auto",children:[(0,d.jsx)("h1",{className:"text-3xl font-bold text-center my-10 uppercase",children:r.title}),(0,d.jsx)("div",{className:"flex gap-x-5 justify-center mb-10",children:r.genres.map((function(e){return(0,d.jsx)("h3",{className:"px-6 py-2 font-semibold rounded-lg border border-primary  text-sm ",children:e.name},e.id)}))}),(0,d.jsx)("p",{className:"text-center text-sm mb-10",children:r.overview}),(0,d.jsx)(u,{id:e}),(0,d.jsx)(p,{id:e}),(0,d.jsx)(h,{id:e})]})]})})}},178:function(e,t,n){e.exports=n.p+"static/media/no-image.3684e37c6c29c788e623.png"}}]);
//# sourceMappingURL=779.38eda545.chunk.js.map