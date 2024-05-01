"use strict";(self.webpackChunkturf_www=self.webpackChunkturf_www||[]).push([[9340],{4106:(e,t,n)=>{n.r(t),n.d(t,{Map0:()=>h,assets:()=>x,contentTitle:()=>c,default:()=>u,frontMatter:()=>l,metadata:()=>d,toc:()=>b});var r=n(4848),s=n(8453),a=n(800),i=n(6145),o=n(8478);const l={title:"bbox"},c=void 0,d={id:"api/bbox",title:"bbox",description:"Description",source:"@site/docs/api/bbox.mdx",sourceDirName:"api",slug:"/api/bbox",permalink:"/docs/api/bbox",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api/bbox.mdx",tags:[],version:"current",frontMatter:{title:"bbox"},sidebar:"apiSidebar",previous:{title:"area",permalink:"/docs/api/area"},next:{title:"bboxPolygon",permalink:"/docs/api/bboxPolygon"}},x={},b=[{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Returns",id:"returns",level:3},{value:"Examples",id:"examples",level:3},{value:"Installation",id:"installation",level:3}];function h(){var e=a.wiw([[-74,40],[-78,42],[-82,35]]),t=a.Qk1(e),n={line:e,bboxPolygon:a.kJI(t)};return(0,r.jsx)(i.A,{addToMap:n})}function p(e){const t={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h3,{id:"description",children:"Description"}),"\n",(0,r.jsx)(t.p,{children:"Takes a set of features, calculates the bbox of all input features, and returns a bounding box."}),"\n",(0,r.jsx)(t.h3,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"geojson"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.a,{href:"https://tools.ietf.org/html/rfc7946#section-3",children:"GeoJSON"})})}),(0,r.jsx)(t.td,{children:"any GeoJSON object"})]})})]}),"\n",(0,r.jsx)(t.h3,{id:"returns",children:"Returns"}),"\n",(0,r.jsx)("ul",{children:(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.a,{href:"https://tools.ietf.org/html/rfc7946#section-5",children:"BBox"})})," bbox extent in [minX, minY, maxX, maxY] order"]})}),"\n",(0,r.jsx)(t.h3,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:"var line = turf.lineString([\n  [-74, 40],\n  [-78, 42],\n  [-82, 35],\n]);\nvar bbox = turf.bbox(line);\nvar bboxPolygon = turf.bboxPolygon(bbox);\n"})}),"\n","\n",(0,r.jsx)(o.A,{children:()=>(0,r.jsx)(h,{})}),"\n",(0,r.jsx)(t.h3,{id:"installation",children:"Installation"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:'$ npm install @turf/bbox\n\nimport { bbox } from "@turf/bbox";\nconst result = bbox(...);\n'})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:'$ npm install @turf/turf\n\nimport * as turf from "@turf/turf";\nconst result = turf.bbox(...);\n'})})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}}}]);