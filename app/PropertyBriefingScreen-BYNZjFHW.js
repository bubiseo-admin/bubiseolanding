import{a as q,j as e,r as x,C as V,A as G,s as J,aD as Q,aP as X,aj as Z,M as ee,ak as te,q as ne,bn as le}from"./index-DGakhXA4.js";import{f as R,c as ae,d as ie}from"./buildingYield-gUDERlm0.js";import{e as se}from"./htmlEscape-BJTSIi2w.js";import{u as D}from"./usePropertyStore-COSzcK_r.js";import{P as oe}from"./PageHeader-BQX-hy3z.js";import{p as re}from"./sandboxedPrint-CWC2FUpQ.js";async function O(t){if(!t)return[];try{const s=await q.get(`/external/property/${t}/comparable-deals`,{timeout:2e4});return Array.isArray(s.data)?s.data:[]}catch{return[]}}const E=t=>{if(!t||t<=0)return"-";const s=Math.floor(t/1e4),r=t%1e4;return s>0&&r>0?`${s}억 ${r.toLocaleString("ko-KR")}`:s>0?`${s}억`:`${r.toLocaleString("ko-KR")}만원`},k=(t,s)=>{const r=parseFloat(s)||0;return!t||r<=0?0:Math.round(t/(r/3.3058))};function de(t,s,r,c){const n=l=>s.has(l.split(".")[0]),a=l=>se(l),o=(l,u,i)=>n(l)?"":`<div class="row"><span>${a(u)}</span><span>${a(i)}</span></div>`,d=(l,u,i)=>n(l)?"":`<div class="lcell"><div class="lcl">${a(u)}</div><div class="lcv">${a(i)}</div></div>`,g=(t.dealPrice??0)||(t.deposit??0),m=g-(t.currentDeposit??0),f=((t.currentMonthlyRent??0)+(t.currentMgmtFee??0))*12,y=m>0?f/m*100:null,F=l=>l===null?"-":`${l.toFixed(2)}%`,v=t.currentLeases??[],j=n("leases")?"":v.map(l=>`<tr><td>${a(l.floor||"-")}</td><td>${a(l.tenant||"-")}</td><td>${(l.deposit??0).toLocaleString()}</td><td>${(l.monthlyRent??0).toLocaleString()}</td><td>${(l.management??0).toLocaleString()}</td></tr>`).join(""),$=n("sale")?"":`<div class="card"><h2>매매 정보</h2>
${o("sale.salePrice","매매가",R(g))}
${t.depositPrice?o("sale.depositPrice","입금가격",R(t.depositPrice)):""}
</div>`,A=n("legal")?"":`<div class="card"><h2>토지, 건물정보</h2>
<div class="lgrid">
${d("legal.landArea","토지면적",t.landPriceArea||t.landArea?(t.landPriceArea||t.landArea)+"㎡":"-")}
${d("legal.buildingArea","건축면적",t.buildingArea?t.buildingArea+"㎡":"-")}
${d("legal.contractArea","연면적",t.contractArea?t.contractArea+"㎡":"-")}
${d("legal.coverageRatio","건폐율",t.coverageRatio||"-")}
${d("legal.floorAreaRatio","용적률",t.floorAreaRatio||"-")}
${d("legal.landCategory","지목",t.landCategory||"-")}
${d("legal.structure","구조",t.structure||"-")}
${d("legal.buildingUse","주용도",t.buildingUse||"-")}
${d("legal.zoneArea","용도지역",t.zoneArea||"-")}
${d("legal.approvalDate","사용승인일",t.approvalDate||"-")}
${d("legal.maxFloor","총 층수",t.maxFloor||"-")}
${d("legal.totalParking","총 주차대수",t.totalParking?t.totalParking+"대":"-")}
${d("legal.elevatorCount","승강기",t.elevatorCount?t.elevatorCount+"대":"0대")}
</div>
</div>`,w=n("yield")?"":`<div class="yieldBox"><div class="yieldLabel">수익률</div><div class="yieldBig">${F(y)}</div></div>`,S=c.length===0?"":`<div class="card"><h2>유사 매매 실거래</h2>
<div class="cmpSub">같은 구/군 · 비슷한 주용도/건축연도/대지면적 (최대 ${c.length}건)</div>
${c.map(l=>`<div class="cmpItem">
<div class="cmpTop"><span class="cmpAddr">${a(l.address)}</span><span class="cmpPrice">${E(l.dealAmount)}</span></div>
<div class="cmpMeta">${a(l.buildingUse)||"-"}${l.zoneArea?" · "+a(l.zoneArea):""}${l.dealDate?" · "+a(l.dealDate):""}</div>
<div class="cmpMeta">건물 ${l.buildingArea?a(l.buildingArea)+"㎡":"-"} · 대지 ${l.landArea?a(l.landArea)+"㎡":"-"}${l.buildYear?" · "+a(l.buildYear)+"년 준공":""}</div>
${k(l.dealAmount,l.landArea)>0?`<div class="cmpPyeong">대지 평당 ${E(k(l.dealAmount,l.landArea))}</div>`:""}
</div>`).join("")}
</div>`;return`<!DOCTYPE html><html><head><meta charset="utf-8"/><style>
body{font-family:-apple-system,'Pretendard',sans-serif;padding:24px;color:#191F28;background:#F6F7F9}
.titleRow{display:flex;align-items:flex-start;margin-bottom:16px;gap:12px}
.titleCol{flex:1;padding-right:12px}
.yieldBox{background:#F5F4FE;border:1px solid #DDE0F5;border-radius:12px;padding:12px 18px;text-align:center;flex-shrink:0;min-width:118px}
.yieldLabel{font-size:13px;color:#444;margin-bottom:4px;font-weight:700}
.mainRow{display:flex;gap:14px;align-items:flex-start}
.photoBig{width:250px;height:310px;border-radius:12px;object-fit:cover;background:#F2F4F6;border:1px solid #E5E8EB;flex-shrink:0}
.mainRight{flex:1;min-width:0}
h1{margin:0 0 4px;font-size:22px}
.sub{color:#666;margin-bottom:6px}
.badge{display:inline-block;background:#6155F5;color:#fff;padding:4px 10px;border-radius:6px;font-size:12px}
.card{background:#FFFFFF;border:1px solid #E5E8EB;border-radius:10px;padding:14px;margin-bottom:12px}
.card h2{margin:-2px -4px 10px;font-size:14px;background:#F1F0FC;color:#4A3FD0;padding:6px 10px;border-radius:6px}
.lgrid{display:grid;grid-template-columns:repeat(3,1fr);gap:9px 8px}
.lcell{min-width:0}
.lcl{font-size:11px;color:#4E5968;font-weight:600;margin-bottom:2px}
.lcv{font-size:13px;font-weight:700;color:#191F28;word-break:break-all}
table{width:100%;border-collapse:collapse;font-size:12px}
table th,table td{border-bottom:1px solid #E5E8EB;padding:6px;text-align:left}
.row{display:flex;justify-content:space-between;padding:5px 0;font-size:13px;border-bottom:1px solid #F2F4F6}
.row span:first-child{color:#666}
.row span:last-child{font-weight:600}
.yieldBig{font-size:28px;font-weight:800;color:#6155F5}
.cmpSub{font-size:11px;color:#333333;margin-bottom:10px}
.cmpItem{background:#F8F9FB;border:1px solid #E5E8EB;border-radius:10px;padding:12px;margin-bottom:8px}
.cmpTop{display:flex;justify-content:space-between;align-items:flex-start;gap:8px}
.cmpAddr{font-size:13px;font-weight:700;color:#191F28}
.cmpPrice{font-size:14px;font-weight:800;color:#6155F5;flex-shrink:0;white-space:nowrap}
.cmpMeta{font-size:12px;color:#222222;margin-top:3px;font-weight:500}
.cmpPyeong{font-size:11px;font-weight:700;color:#6155F5;margin-top:4px}
</style></head><body>
<div class="titleRow">
  <div class="titleCol">
    <h1>${a(t.buildingName||t.address||"매물")}</h1>
    <div class="sub">${a(t.jibunAddress||t.address||"-")}${typeof t.bylotCnt=="number"&&t.bylotCnt>0?` 외 ${t.bylotCnt}필지`:""}</div>
    <span class="badge">건물&빌딩 · 매매</span>
  </div>
  ${w}
</div>
<div class="mainRow">
  ${r?`<img class="photoBig" src="${a(r)}" alt="매물 사진"/>`:""}
  <div class="mainRight">
${$}
${A}
  </div>
</div>
${j?`<div class="card"><h2>현재 임대차현황</h2><table><tr><th>층/호</th><th>임차사</th><th>보증금</th><th>월세</th><th>관리비</th></tr>${j}</table></div>`:""}
${!n("feature")&&t.propertyFeature?`<div class="card"><h2>매물 특징</h2><div style="font-size:13px">${a(t.propertyFeature)}</div></div>`:""}
${S}
</body></html>`}function ce({property:t}){const s=ae({dealPrice:t.dealPrice,deposit:t.deposit,currentDeposit:t.currentDeposit,currentMonthlyRent:t.currentMonthlyRent,currentMgmtFee:t.currentMgmtFee}),r=c=>c.toLocaleString("ko-KR");return e.jsxs("section",{style:pe,children:[e.jsx("h3",{style:ge,children:"수익률"}),e.jsxs("div",{style:ue,children:[e.jsx("div",{style:xe,children:ie(s.yieldPct)}),e.jsxs("div",{style:me,children:["연 임대수입 ",r(s.annualIncome),"만원 · 투자금"," ",r(Math.max(0,s.investment)),"만원"]})]})]})}const pe={padding:"16px 20px"},ge={margin:"0 0 10px",fontSize:15,fontWeight:600,color:"#191F28"},ue={background:"#F5F4FE",border:"1px solid #DDD5FE",borderRadius:10,padding:14},xe={fontSize:28,fontWeight:600,color:"#6155F5"},me={fontSize:11,color:"#8B95A1",marginTop:6};function he({propertyId:t,onLoaded:s}){const[r,c]=x.useState([]),[n,a]=x.useState(!0);return x.useEffect(()=>{let o=!0;return a(!0),O(t).then(d=>{o&&c(d)}).finally(()=>{o&&(a(!1),s==null||s())}),()=>{o=!1}},[t]),e.jsxs("section",{style:fe,children:[e.jsx("h3",{style:ye,children:"유사 매매 실거래"}),e.jsx("div",{style:be,children:"같은 구/군 · 비슷한 주용도/건축연도/대지면적/용도지역 (최대 5건)"}),n?e.jsx("div",{style:I,children:"실거래가 조회 중…"}):r.length===0?e.jsx("div",{style:I,children:"조건에 맞는 실거래 내역이 없어요."}):r.map((o,d)=>e.jsxs("div",{style:Fe,children:[e.jsxs("div",{style:ve,children:[e.jsx("span",{style:je,children:o.address||"-"}),e.jsx("span",{style:Se,children:E(o.dealAmount)})]}),e.jsxs("div",{style:M,children:[e.jsxs("span",{style:T,children:[o.buildingUse||"-",o.zoneArea?` · ${o.zoneArea}`:""]}),e.jsx("span",{style:H,children:o.dealDate||"-"})]}),e.jsxs("div",{style:M,children:[e.jsxs("span",{style:T,children:["건물 ",o.buildingArea?`${o.buildingArea}㎡`:"-"," · 대지"," ",o.landArea?`${o.landArea}㎡`:"-"]}),e.jsx("span",{style:H,children:o.buildYear?`${o.buildYear}년 준공`:""})]}),k(o.dealAmount,o.landArea)>0?e.jsxs("div",{style:$e,children:["대지 평당 ",E(k(o.dealAmount,o.landArea))]}):null]},`${o.address}-${o.dealDate}-${d}`))]})}const fe={padding:"16px 20px"},ye={margin:0,fontSize:15,fontWeight:600,color:"#191F28"},be={fontSize:11,color:"#8B95A1",marginTop:2,marginBottom:10},I={fontSize:13,color:"#8B95A1",padding:"10px 0"},Fe={background:"#F8F9FB",border:"1px solid #E5E8EB",borderRadius:10,padding:14,marginBottom:8},ve={display:"flex",alignItems:"flex-start",justifyContent:"space-between",gap:8},je={flex:1,fontSize:14,fontWeight:600,color:"#191F28",whiteSpace:"normal",wordBreak:"break-all"},Se={fontSize:15,fontWeight:600,color:"#6155F5",flexShrink:0},M={display:"flex",alignItems:"center",justifyContent:"space-between",gap:8,marginTop:4},T={fontSize:12,color:"#8B95A1"},H={fontSize:12,color:"#B0B8C1",flexShrink:0},$e={fontSize:12,fontWeight:600,color:"#6155F5",marginTop:4},B="#6155F5";function Ae(t){const s=t.currentLeases??[],r=s.reduce((u,i)=>u+(i.monthlyRent||0),0),c=s.reduce((u,i)=>u+(i.management||0),0),n=s.reduce((u,i)=>u+(i.deposit||0),0),a=t.dealPrice??0,o=a-n,d=(r+c)*12,g=t.yieldCalculation??{},m=g.maintenanceCost??0,f=g.tax??0,y=g.buildingManagementFee??0,F=g.loanInterest??0,v=g.loanPrincipal??0,j=g.totalInvestment??0,$=a>0?d/a*100:null,A=d-m-f-y-F,w=j>0?A/j*100:null,S=a-n-v,l=S>0?(d-F)/S*100:null;return{monthlySum:r,mgmtSum:c,depositSum:n,salePrice:a,investment:o,annualIncome:d,baseYield:$,netYield:w,loanIncluded:l}}function we(t={}){var l,u;const s=V(),r=t.propertyId??s.propertyId,c=G(),n=D(i=>r?i.items.find(b=>b.id===r)??i.current:null);x.useEffect(()=>{if(!r){c("/properties");return}n||D.getState().fetchOne(r)},[r,n,c]);const[a,o]=x.useState(!1),[d,g]=x.useState(new Set),m=i=>a&&d.has(i),f=i=>{g(b=>{const h=new Set(b);return h.has(i)?h.delete(i):h.add(i),h})},[y,F]=x.useState(!1),v=x.useCallback(async()=>{var b;const i=n;if(!(!i||y)){F(!0);try{const h=await O(i.id).catch(()=>[]),U=i.thumbnailUrl||((b=i.photos)==null?void 0:b[0])||null,_=de(i,d,U,h),K=(i.jibunAddress||i.address||i.buildingName||"브리핑자료").replace(/[\\/:*?"<>|]/g,"_").slice(0,120);await re(_,K)}catch(h){J(h instanceof Error?h.message:"출력에 실패했어요.",{tone:"error"})}finally{F(!1)}}},[n,d,y]),[j]=Q(),$=x.useRef(!1),A=j.get("autoShare")==="1";if(x.useEffect(()=>{!A||!n||$.current||($.current=!0,setTimeout(()=>void v(),300))},[A,n,v]),!n)return e.jsx("div",{style:{padding:48,textAlign:"center",color:"#666"},children:"매물을 불러오는 중..."});const w=Ae(n),S=n.thumbnailUrl||((l=n.photos)==null?void 0:l[0])||null;return e.jsxs("div",{style:t.embedded?{...L,minHeight:0}:L,children:[e.jsx(oe,{className:"no-print",title:"브리핑자료",crumb:{label:"매물",onClick:()=>t.onClose?t.onClose():c(-1)},primaryAction:e.jsxs(e.Fragment,{children:[e.jsxs("button",{type:"button",onClick:()=>{a&&g(new Set),o(i=>!i)},style:a?Pe:N,title:a?"브리핑 ON":"브리핑 OFF",children:[a?e.jsx(X,{size:16}):e.jsx(Z,{size:16}),e.jsxs("span",{style:{marginLeft:6},children:["브리핑 ",a?"ON":"OFF"]})]}),e.jsxs(ee,{gradient:!0,type:"button",onClick:()=>void v(),disabled:y,children:[e.jsx(te,{size:18}),e.jsx("span",{children:y?"생성 중...":"출력&공유"})]})]})}),e.jsxs("div",{style:Re,className:"briefing-content",children:[a?e.jsx("div",{style:ze,className:"no-print",children:e.jsx("span",{children:"ⓘ 숨기고 싶은 항목을 선택하세요! 우측 [-] 아이콘으로 섹션을 토글할 수 있어요."})}):null,e.jsxs("div",{style:Ce,children:[e.jsxs("div",{style:{flex:1,minWidth:0,paddingRight:16},children:[e.jsx("h1",{style:De,children:n.buildingName||n.address||"매물"}),e.jsx("p",{style:Ie,children:n.jibunAddress||n.address||"-"}),e.jsx("span",{style:Me,children:"건물&빌딩 · 매매"})]}),S?e.jsx("img",{src:S,alt:"매물 사진",style:W}):e.jsx("div",{style:Ee,children:e.jsx(ne,{size:28,color:"#C1C7D0"})})]}),e.jsx(ce,{property:n}),m("sale")?null:e.jsxs(C,{title:"매매 정보",briefingOn:a,onHide:()=>f("sale"),children:[e.jsx(p,{label:"매매가",value:`${w.salePrice.toLocaleString()} 만원`}),n.depositPrice?e.jsx(p,{label:"입금가격",value:`${n.depositPrice.toLocaleString()} 만원`}):null]}),m("legal")?null:e.jsxs(C,{title:"공적장부 정보",briefingOn:a,onHide:()=>f("legal"),children:[e.jsx(p,{label:"토지면적",value:n.landPriceArea||n.landArea?`${n.landPriceArea||n.landArea}㎡`:"-"}),e.jsx(p,{label:"건축면적",value:n.buildingArea?`${n.buildingArea}㎡`:"-"}),e.jsx(p,{label:"연면적",value:n.contractArea?`${n.contractArea}㎡`:"-"}),e.jsx(p,{label:"구조",value:n.structure||"-"}),e.jsx(p,{label:"주용도",value:n.buildingUse||"-"}),e.jsx(p,{label:"용도지역",value:n.zoneArea||"-"}),e.jsx(p,{label:"지목",value:n.landCategory||"-"}),e.jsx(p,{label:"건폐율",value:n.coverageRatio||"-"}),e.jsx(p,{label:"용적률",value:n.floorAreaRatio||"-"}),e.jsx(p,{label:"사용승인일",value:n.approvalDate||"-"}),e.jsx(p,{label:"총 층수",value:n.maxFloor?`${n.maxFloor}층`:"-"}),e.jsx(p,{label:"총 주차대수",value:n.totalParking?`${n.totalParking}대`:"-"}),e.jsx(p,{label:"승강기",value:n.elevatorCount?`${n.elevatorCount}대`:"0대"})]}),!m("leases")&&(((u=n.currentLeases)==null?void 0:u.length)??0)>0?e.jsx(C,{title:"현재 임대차현황",briefingOn:a,onHide:()=>f("leases"),children:e.jsxs("table",{style:We,children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:P,children:"층/호"}),e.jsx("th",{style:P,children:"임차사"}),e.jsx("th",{style:P,children:"보증금(만원)"}),e.jsx("th",{style:P,children:"월세(만원)"}),e.jsx("th",{style:P,children:"관리비(만원)"})]})}),e.jsx("tbody",{children:(n.currentLeases??[]).map((i,b)=>e.jsxs("tr",{children:[e.jsx("td",{style:z,children:i.floor||"-"}),e.jsx("td",{style:z,children:i.tenant||"-"}),e.jsx("td",{style:z,children:i.deposit.toLocaleString()}),e.jsx("td",{style:z,children:i.monthlyRent.toLocaleString()}),e.jsx("td",{style:z,children:i.management.toLocaleString()})]},b))})]})}):null,!m("feature")&&n.propertyFeature?e.jsx(C,{title:"매물 특징",briefingOn:a,onHide:()=>f("feature"),children:e.jsx("p",{style:{whiteSpace:"pre-wrap",margin:0,fontSize:13,lineHeight:"20px"},children:n.propertyFeature})}):null,e.jsx(he,{propertyId:n.id})]}),e.jsx("style",{children:`
        @media print {
          .no-print { display: none !important; }
          body { background: #fff !important; }
          .briefing-content { padding: 0 !important; }
        }
      `})]})}const C=({title:t,highlight:s,children:r,briefingOn:c,onHide:n})=>e.jsxs("div",{style:s?Te:Y,children:[e.jsxs("div",{style:ke,children:[e.jsx("h2",{style:He,children:t}),c&&n?e.jsx("button",{type:"button",onClick:n,style:Be,"aria-label":"섹션 숨김",className:"no-print",children:e.jsx(le,{size:20,color:"#DC2626"})}):null]}),r]}),p=({label:t,value:s})=>e.jsxs("div",{style:Le,children:[e.jsx("span",{style:Oe,children:t}),e.jsx("span",{style:Ne,children:s})]}),L={minHeight:"100vh",background:"#FFFFFF"},N={display:"flex",alignItems:"center",background:"#FFFFFF",color:B,border:`1px solid ${B}`,padding:"7px 12px",borderRadius:6,cursor:"pointer",fontWeight:600,fontSize:12,marginRight:8},Pe={...N,background:B,color:"#FFFFFF"},ze={background:"#EEF2FF",border:"1px solid #DDD5FE",borderRadius:8,padding:"10px 14px",marginBottom:12,fontSize:12,color:"#4338CA",fontWeight:600},Ce={display:"flex",alignItems:"center",marginBottom:20},W={width:110,height:110,borderRadius:10,objectFit:"cover",background:"#F2F4F6",flexShrink:0},Ee={...W,display:"flex",alignItems:"center",justifyContent:"center",border:"1px solid #E5E8EB"},ke={display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:10},Be={background:"transparent",border:"none",cursor:"pointer",padding:2,display:"flex",alignItems:"center"},Re={maxWidth:980,margin:"0 auto",padding:24},De={fontSize:26,fontWeight:600,margin:"0 0 4px",color:"#191F28"},Ie={fontSize:14,color:"#666",margin:"0 0 8px"},Me={display:"inline-block",background:B,color:"#FFFFFF",padding:"4px 12px",borderRadius:6,fontSize:12,fontWeight:600,marginBottom:20},Y={background:"#FFFFFF",border:"1px solid #E5E8EB",borderRadius:10,padding:16,marginBottom:12},Te={...Y,background:"#F5F4FE",border:"1px solid #DDD5FE"},He={fontSize:15,fontWeight:600,margin:0,color:"#191F28"},Le={display:"flex",justifyContent:"space-between",padding:"6px 0",borderBottom:"1px solid #F2F4F6"},Oe={fontSize:13,color:"#666"},Ne={fontSize:13,color:"#191F28",fontWeight:600},We={width:"100%",borderCollapse:"collapse",fontSize:13},P={borderBottom:"2px solid #E5E8EB",padding:"8px 6px",textAlign:"left",fontSize:12,color:"#666"},z={borderBottom:"1px solid #F2F4F6",padding:"8px 6px",fontSize:13},Je=Object.freeze(Object.defineProperty({__proto__:null,PropertyBriefingScreen:we},Symbol.toStringTag,{value:"Module"}));export{he as C,ce as P,we as a,Je as b,E as f,k as p};
