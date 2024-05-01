"use strict";(self.webpackChunkturf_www=self.webpackChunkturf_www||[]).push([[4504],{554:(e,t,n)=>{n.r(t),n.d(t,{Map0:()=>u,assets:()=>h,contentTitle:()=>d,default:()=>j,frontMatter:()=>c,metadata:()=>o,toc:()=>p});var r=n(4848),i=n(8453),s=n(800),l=n(6145),a=n(8478);const c={title:"lineIntersect"},d=void 0,o={id:"api/lineIntersect",title:"lineIntersect",description:"Description",source:"@site/docs/api/lineIntersect.mdx",sourceDirName:"api",slug:"/api/lineIntersect",permalink:"/docs/api/lineIntersect",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api/lineIntersect.mdx",tags:[],version:"current",frontMatter:{title:"lineIntersect"},sidebar:"apiSidebar",previous:{title:"lineChunk",permalink:"/docs/api/lineChunk"},next:{title:"lineOverlap",permalink:"/docs/api/lineOverlap"}},h={},p=[{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Returns",id:"returns",level:3},{value:"Examples",id:"examples",level:3},{value:"Installation",id:"installation",level:3}];function u(){var e=s.wiw([[126,-11],[129,-21]]),t=s.wiw([[123,-18],[131,-14]]),n={line1:e,line2:t,intersects:s.kVe(e,t)};return(0,r.jsx)(l.A,{addToMap:n})}function x(e){const t={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h3,{id:"description",children:"Description"}),"\n",(0,r.jsx)(t.p,{children:"Takes any LineString or Polygon GeoJSON and returns the intersecting point(s)."}),"\n",(0,r.jsx)(t.h3,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"line1"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.a,{href:"https://tools.ietf.org/html/rfc7946#section-3",children:"GeoJSON"})})}),(0,r.jsx)(t.td,{children:"any LineString or Polygon"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"line2"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.a,{href:"https://tools.ietf.org/html/rfc7946#section-3",children:"GeoJSON"})})}),(0,r.jsx)(t.td,{children:"any LineString or Polygon"})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"returns",children:"Returns"}),"\n",(0,r.jsx)("ul",{children:(0,r.jsxs)(t.p,{children:[(0,r.jsxs)(t.strong,{children:[(0,r.jsx)(t.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.3",children:"FeatureCollection"}),"<",(0,r.jsx)(t.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.1.2",children:"Point"}),">"]})," point(s) that intersect both"]})}),"\n",(0,r.jsx)(t.h3,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:"var line1 = turf.lineString([\n  [126, -11],\n  [129, -21],\n]);\nvar line2 = turf.lineString([\n  [123, -18],\n  [131, -14],\n]);\nvar intersects = turf.lineIntersect(line1, line2);\n"})}),"\n","\n",(0,r.jsx)(a.A,{children:()=>(0,r.jsx)(u,{})}),"\n",(0,r.jsx)(t.h3,{id:"installation",children:"Installation"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:'$ npm install @turf/line-intersect\n\nimport { lineIntersect } from "@turf/line-intersect";\nconst result = lineIntersect(...);\n'})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:'$ npm install @turf/turf\n\nimport * as turf from "@turf/turf";\nconst result = turf.lineIntersect(...);\n'})})]})}function j(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(x,{...e})}):x(e)}}}]);