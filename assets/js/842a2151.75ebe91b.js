"use strict";(self.webpackChunkturf_www=self.webpackChunkturf_www||[]).push([[4793],{2926:(e,t,r)=>{r.r(t),r.d(t,{Map0:()=>f,assets:()=>h,contentTitle:()=>o,default:()=>x,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var s=r(4848),n=r(8453),i=r(800),l=r(6145),d=r(8478);const a={title:"buffer"},o=void 0,c={id:"api/buffer",title:"buffer",description:"Description",source:"@site/docs/api/buffer.mdx",sourceDirName:"api",slug:"/api/buffer",permalink:"/docs/api/buffer",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api/buffer.mdx",tags:[],version:"current",frontMatter:{title:"buffer"},sidebar:"apiSidebar",previous:{title:"bezierSpline",permalink:"/docs/api/bezierSpline"},next:{title:"circle",permalink:"/docs/api/circle"}},h={},u=[{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Returns",id:"returns",level:3},{value:"Examples",id:"examples",level:3},{value:"Installation",id:"installation",level:3}];function f(){var e=i.zx7([-90.54863,14.616599]),t={point:e,buffered:i.ra8(e,500,{units:"miles"})};return(0,s.jsx)(l.A,{addToMap:t})}function p(e){const t={a:"a",code:"code",em:"em",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h3,{id:"description",children:"Description"}),"\n",(0,s.jsx)(t.p,{children:"Calculates a buffer for input features for a given radius. Units supported are miles, kilometers, and degrees."}),"\n",(0,s.jsx)(t.p,{children:"When using a negative radius, the resulting geometry may be invalid if\nit's too small compared to the radius magnitude. If the input is a\nFeatureCollection, only valid members will be returned in the output\nFeatureCollection - i.e., the output collection may have fewer members than\nthe input, or even be empty."}),"\n",(0,s.jsx)(t.h3,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"geojson"}),(0,s.jsx)(t.td,{children:(0,s.jsxs)(t.strong,{children:[(0,s.jsx)(t.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.3",children:"FeatureCollection"})," | ",(0,s.jsx)(t.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.1",children:"Geometry"})," | ",(0,s.jsx)(t.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.2",children:"Feature"}),"<any>"]})}),(0,s.jsx)(t.td,{children:"input to be buffered"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"radius"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"number"})}),(0,s.jsx)(t.td,{children:"distance to draw the buffer (negative values are allowed)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:["options",(0,s.jsx)("i",{children:"?"})]}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"Object"})}),(0,s.jsxs)(t.td,{children:["Optional parameters ",(0,s.jsx)(t.em,{children:"(default {})"})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:["options.units",(0,s.jsx)("i",{children:"?"})]}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"string"})}),(0,s.jsxs)(t.td,{children:["any of the options supported by turf units ",(0,s.jsx)(t.em,{children:'(default "kilometers")'})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:["options.steps",(0,s.jsx)("i",{children:"?"})]}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"number"})}),(0,s.jsxs)(t.td,{children:["number of steps ",(0,s.jsx)(t.em,{children:"(default 8)"})]})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"returns",children:"Returns"}),"\n",(0,s.jsx)("ul",{children:(0,s.jsxs)(t.p,{children:[(0,s.jsxs)(t.strong,{children:[(0,s.jsx)(t.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.3",children:"FeatureCollection"})," | ",(0,s.jsx)(t.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.2",children:"Feature"}),"<",(0,s.jsx)(t.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.1.6",children:"Polygon"})," | ",(0,s.jsx)(t.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.1.7",children:"MultiPolygon"}),"> | undefined"]})," buffered features"]})}),"\n",(0,s.jsx)(t.h3,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:'var point = turf.point([-90.54863, 14.616599]);\nvar buffered = turf.buffer(point, 500, { units: "miles" });\n'})}),"\n","\n",(0,s.jsx)(d.A,{children:()=>(0,s.jsx)(f,{})}),"\n",(0,s.jsx)(t.h3,{id:"installation",children:"Installation"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:'$ npm install @turf/buffer\n\nimport { buffer } from "@turf/buffer";\nconst result = buffer(...);\n'})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:'$ npm install @turf/turf\n\nimport * as turf from "@turf/turf";\nconst result = turf.buffer(...);\n'})})]})}function x(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}}}]);