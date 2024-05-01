"use strict";(self.webpackChunkturf_www=self.webpackChunkturf_www||[]).push([[7343],{7671:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var t=n(4848),r=n(8453);n(800),n(6145),n(8478);const o={title:"booleanCrosses"},i=void 0,l={id:"api/booleanCrosses",title:"booleanCrosses",description:"Description",source:"@site/docs/api/booleanCrosses.mdx",sourceDirName:"api",slug:"/api/booleanCrosses",permalink:"/docs/api/booleanCrosses",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api/booleanCrosses.mdx",tags:[],version:"current",frontMatter:{title:"booleanCrosses"},sidebar:"apiSidebar",previous:{title:"booleanContains",permalink:"/docs/api/booleanContains"},next:{title:"booleanDisjoint",permalink:"/docs/api/booleanDisjoint"}},a={},c=[{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Returns",id:"returns",level:3},{value:"Examples",id:"examples",level:3},{value:"Installation",id:"installation",level:3}];function d(e){const s={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h3,{id:"description",children:"Description"}),"\n",(0,t.jsx)(s.p,{children:"Boolean-Crosses returns True if the intersection results in a geometry whose dimension is one less than\nthe maximum dimension of the two source geometries and the intersection set is interior to\nboth source geometries."}),"\n",(0,t.jsx)(s.p,{children:"Boolean-Crosses returns t (TRUE) for only multipoint/polygon, multipoint/linestring, linestring/linestring, linestring/polygon, and linestring/multipolygon comparisons."}),"\n",(0,t.jsx)(s.h3,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Name"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{children:"Description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"feature1"}),(0,t.jsx)(s.td,{children:(0,t.jsxs)(s.strong,{children:[(0,t.jsx)(s.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.1",children:"Geometry"})," | ",(0,t.jsx)(s.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.2",children:"Feature"}),"<any>"]})}),(0,t.jsx)(s.td,{children:"GeoJSON Feature or Geometry"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"feature2"}),(0,t.jsx)(s.td,{children:(0,t.jsxs)(s.strong,{children:[(0,t.jsx)(s.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.1",children:"Geometry"})," | ",(0,t.jsx)(s.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.2",children:"Feature"}),"<any>"]})}),(0,t.jsx)(s.td,{children:"GeoJSON Feature or Geometry"})]})]})]}),"\n",(0,t.jsx)(s.h3,{id:"returns",children:"Returns"}),"\n",(0,t.jsx)("ul",{children:(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"boolean"})," true/false"]})}),"\n",(0,t.jsx)(s.h3,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-javascript",children:"var line1 = turf.lineString([\n  [-2, 2],\n  [4, 2],\n]);\nvar line2 = turf.lineString([\n  [1, 1],\n  [1, 2],\n  [1, 3],\n  [1, 4],\n]);\n\nvar cross = turf.booleanCrosses(line1, line2);\n//=true\n"})}),"\n",(0,t.jsx)(s.h3,{id:"installation",children:"Installation"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-javascript",children:'$ npm install @turf/boolean-crosses\n\nimport { booleanCrosses } from "@turf/boolean-crosses";\nconst result = booleanCrosses(...);\n'})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-javascript",children:'$ npm install @turf/turf\n\nimport * as turf from "@turf/turf";\nconst result = turf.booleanCrosses(...);\n'})})]})}function h(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}}}]);