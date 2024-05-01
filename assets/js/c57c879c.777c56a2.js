"use strict";(self.webpackChunkturf_www=self.webpackChunkturf_www||[]).push([[2686],{3278:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>o,frontMatter:()=>l,metadata:()=>a,toc:()=>u});var s=r(4848),n=r(8453);r(800),r(6145),r(8478);const l={title:"clusterEach"},c=void 0,a={id:"api/clusterEach",title:"clusterEach",description:"Description",source:"@site/docs/api/clusterEach.mdx",sourceDirName:"api",slug:"/api/clusterEach",permalink:"/docs/api/clusterEach",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api/clusterEach.mdx",tags:[],version:"current",frontMatter:{title:"clusterEach"},sidebar:"apiSidebar",previous:{title:"collect",permalink:"/docs/api/collect"},next:{title:"clusterReduce",permalink:"/docs/api/clusterReduce"}},i={},u=[{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Returns",id:"returns",level:3},{value:"Examples",id:"examples",level:3},{value:"Installation",id:"installation",level:3}];function d(e){const t={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h3,{id:"description",children:"Description"}),"\n",(0,s.jsx)(t.p,{children:"clusterEach"}),"\n",(0,s.jsx)(t.h3,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"geojson"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.3",children:"FeatureCollection"})})}),(0,s.jsx)(t.td,{children:"GeoJSON Features"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"property"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"string | number"})}),(0,s.jsx)(t.td,{children:"GeoJSON property key/value used to create clusters"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"callback"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"Function"})}),(0,s.jsx)(t.td,{children:"a method that takes (cluster, clusterValue, currentIndex)"})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"returns",children:"Returns"}),"\n",(0,s.jsx)("ul",{children:(0,s.jsx)(t.strong,{children:"void"})}),"\n",(0,s.jsx)(t.h3,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:'var geojson = turf.featureCollection([\n  turf.point([0, 0]),\n  turf.point([2, 4]),\n  turf.point([3, 6]),\n  turf.point([5, 1]),\n  turf.point([4, 2]),\n]);\n\n// Create a cluster using K-Means (adds `cluster` to GeoJSON properties)\nvar clustered = turf.clustersKmeans(geojson);\n\n// Iterate over each cluster\nturf.clusterEach(\n  clustered,\n  "cluster",\n  function (cluster, clusterValue, currentIndex) {\n    //= cluster\n    //= clusterValue\n    //= currentIndex\n  },\n);\n\n// Calculate the total number of clusters\nvar total = 0;\nturf.clusterEach(clustered, "cluster", function () {\n  total++;\n});\n\n// Create an Array of all the values retrieved from the \'cluster\' property\nvar values = [];\nturf.clusterEach(clustered, "cluster", function (cluster, clusterValue) {\n  values.push(clusterValue);\n});\n'})}),"\n",(0,s.jsx)(t.h3,{id:"installation",children:"Installation"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:'$ npm install @turf/clusters\n\nimport { clusterEach } from "@turf/clusters";\nconst result = clusterEach(...);\n'})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:'$ npm install @turf/turf\n\nimport * as turf from "@turf/turf";\nconst result = turf.clusterEach(...);\n'})})]})}function o(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}}}]);