"use strict";(self.webpackChunkturf_www=self.webpackChunkturf_www||[]).push([[1007],{7156:(e,t,s)=>{s.r(t),s.d(t,{Map0:()=>p,assets:()=>h,contentTitle:()=>d,default:()=>x,frontMatter:()=>c,metadata:()=>o,toc:()=>u});var r=s(4848),n=s(8453),i=s(800),a=s(6145),l=s(8478);const c={title:"rhumbDistance"},d=void 0,o={id:"api/rhumbDistance",title:"rhumbDistance",description:"Description",source:"@site/docs/api/rhumbDistance.mdx",sourceDirName:"api",slug:"/api/rhumbDistance",permalink:"/docs/api/rhumbDistance",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api/rhumbDistance.mdx",tags:[],version:"current",frontMatter:{title:"rhumbDistance"},sidebar:"apiSidebar",previous:{title:"rhumbDestination",permalink:"/docs/api/rhumbDestination"},next:{title:"square",permalink:"/docs/api/square"}},h={},u=[{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Returns",id:"returns",level:3},{value:"Examples",id:"examples",level:3},{value:"Installation",id:"installation",level:3}];function p(){var e=i.zx7([-75.343,39.984]),t=i.zx7([-75.534,39.123]),s=i.EUY(e,t,{units:"miles"}),n={from:e,to:t};return e.properties.distance=s,t.properties.distance=s,(0,r.jsx)(a.A,{addToMap:n})}function m(e){const t={a:"a",code:"code",em:"em",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h3,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(t.p,{children:["Calculates the distance along a rhumb line between two ",(0,r.jsx)(t.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.1.2",children:"points"})," in degrees, radians,\nmiles, or kilometers."]}),"\n",(0,r.jsx)(t.h3,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"from"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.1.1",children:"Coord"})})}),(0,r.jsx)(t.td,{children:"origin point"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"to"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.1.1",children:"Coord"})})}),(0,r.jsx)(t.td,{children:"destination point"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["options",(0,r.jsx)("i",{children:"?"})]}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"Object"})}),(0,r.jsx)(t.td,{children:"Optional parameters"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["options.units",(0,r.jsx)("i",{children:"?"})]}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"string"})}),(0,r.jsxs)(t.td,{children:["can be degrees, radians, miles, or kilometers ",(0,r.jsx)(t.em,{children:'(default "kilometers")'})]})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"returns",children:"Returns"}),"\n",(0,r.jsx)("ul",{children:(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"number"})," distance between the two points"]})}),"\n",(0,r.jsx)(t.h3,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:'var from = turf.point([-75.343, 39.984]);\nvar to = turf.point([-75.534, 39.123]);\nvar options = { units: "miles" };\n\nvar distance = turf.rhumbDistance(from, to, options);\n'})}),"\n","\n",(0,r.jsx)(l.A,{children:()=>(0,r.jsx)(p,{})}),"\n",(0,r.jsx)(t.h3,{id:"installation",children:"Installation"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:'$ npm install @turf/rhumb-distance\n\nimport { rhumbDistance } from "@turf/rhumb-distance";\nconst result = rhumbDistance(...);\n'})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:'$ npm install @turf/turf\n\nimport * as turf from "@turf/turf";\nconst result = turf.rhumbDistance(...);\n'})})]})}function x(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}}}]);