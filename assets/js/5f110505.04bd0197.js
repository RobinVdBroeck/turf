"use strict";(self.webpackChunkturf_www=self.webpackChunkturf_www||[]).push([[7280],{2310:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>o,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var i=s(4848),n=s(8453);s(800),s(6145),s(8478);const r={title:"distanceWeight"},d=void 0,a={id:"api/distanceWeight",title:"distanceWeight",description:"Description",source:"@site/docs/api/distanceWeight.mdx",sourceDirName:"api",slug:"/api/distanceWeight",permalink:"/docs/api/distanceWeight",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api/distanceWeight.mdx",tags:[],version:"current",frontMatter:{title:"distanceWeight"},sidebar:"apiSidebar",previous:{title:"directionalMean",permalink:"/docs/api/directionalMean"},next:{title:"ellipse",permalink:"/docs/api/ellipse"}},l={},c=[{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Returns",id:"returns",level:3},{value:"Examples",id:"examples",level:3},{value:"Installation",id:"installation",level:3}];function h(e){const t={a:"a",code:"code",em:"em",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h3,{id:"description",children:"Description"}),"\n",(0,i.jsx)(t.h3,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"fc"}),(0,i.jsx)(t.td,{children:(0,i.jsxs)(t.strong,{children:[(0,i.jsx)(t.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.3",children:"FeatureCollection"}),"<any>"]})}),(0,i.jsx)(t.td,{children:"FeatureCollection."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:["options",(0,i.jsx)("i",{children:"?"})]}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"Object"})}),(0,i.jsx)(t.td,{children:"option object."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:["options.threshold",(0,i.jsx)("i",{children:"?"})]}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"number"})}),(0,i.jsxs)(t.td,{children:["If the distance between neighbor and target features is greater than threshold, the weight of that neighbor is 0. ",(0,i.jsx)(t.em,{children:"(default 10000)"})]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:["options.p",(0,i.jsx)("i",{children:"?"})]}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"number"})}),(0,i.jsxs)(t.td,{children:["Minkowski p-norm distance parameter. 1: Manhattan distance. 2: Euclidean distance. 1=<p<=infinity. ",(0,i.jsx)(t.em,{children:"(default 2)"})]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:["options.binary",(0,i.jsx)("i",{children:"?"})]}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"boolean"})}),(0,i.jsxs)(t.td,{children:["If true, weight=1 if d <= threshold otherwise weight=0. If false, weight=Math.pow(d, alpha). ",(0,i.jsx)(t.em,{children:"(default false)"})]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:["options.alpha",(0,i.jsx)("i",{children:"?"})]}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"number"})}),(0,i.jsxs)(t.td,{children:["distance decay parameter. A big value means the weight decay quickly as distance increases. ",(0,i.jsx)(t.em,{children:"(default -1)"})]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:["options.standardization",(0,i.jsx)("i",{children:"?"})]}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"boolean"})}),(0,i.jsxs)(t.td,{children:["row standardization. ",(0,i.jsx)(t.em,{children:"(default false)"})]})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)("ul",{children:(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Array<Array<number>>"})," distance weight matrix."]})}),"\n",(0,i.jsx)(t.h3,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:"var bbox = [-65, 40, -63, 42];\nvar dataset = turf.randomPoint(100, { bbox: bbox });\nvar result = turf.distanceWeight(dataset);\n"})}),"\n",(0,i.jsx)(t.h3,{id:"installation",children:"Installation"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:'$ npm install @turf/distance-weight\n\nimport { distanceWeight } from "@turf/distance-weight";\nconst result = distanceWeight(...);\n'})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:'$ npm install @turf/turf\n\nimport * as turf from "@turf/turf";\nconst result = turf.distanceWeight(...);\n'})})]})}function o(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}}}]);