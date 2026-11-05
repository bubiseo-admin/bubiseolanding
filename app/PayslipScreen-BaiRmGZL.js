const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["app/index-BCRkGrJv.js","app/index-LiNK49yC.css"])))=>i.map(i=>d[i]);
import{E as vt,am as wt,G as Ft,r,s as S,j as t,bs as N,aq as jt,bw as Et,ar as kt,bx as $t,C as Bt,c as zt,m as Ct,by as At,al as Tt}from"./index-BCRkGrJv.js";import{listEmployeeSalaryTable as It,listEmployees as Pt}from"./settingsApi-CIjPM65P.js";import{c as Dt,s as Mt}from"./chatApi-dCG6dddj.js";import{e as u}from"./htmlEscape-BJTSIi2w.js";import{a as Rt}from"./calcApi-6GEGQbBE.js";import{P as Ot}from"./PageHeader-Z2muyTKg.js";import{H as Nt}from"./HtmlPreviewModal-ScMPAJhH.js";import{p as Wt}from"./sandboxedPrint-CWC2FUpQ.js";import"./useIsMobile-DWllWvZx.js";import"./topBarSlot-CqBzMv1Z.js";import"./SandboxedHtmlFrame-BbaWa0k0.js";const C=n=>`${Math.round(n).toLocaleString("ko-KR")}원`,X=n=>{const[o,s]=n.split("-");return!o||!s?u(n):`${u(o)}년 ${Number(s)}월`},J=n=>{if(!n)return"-";const o=new Date(n);return Number.isNaN(o.getTime())?"-":`${o.getFullYear()}.${String(o.getMonth()+1).padStart(2,"0")}.${String(o.getDate()).padStart(2,"0")}`},ct=n=>{const o=(n??"").trim();return o?/^\d+$/.test(o)?`${o}층`:o:"-"},E=n=>n==="rate33"?"3.3% 원천징수":"4대보험";function Ht(n){const{deduction:o}=n,{netPay:s}=o,a=n.lines.length>0?n.lines.map(d=>`
        <tr>
          <td class="addr">${u(d.address||"주소 미입력")}</td>
          <td class="center">${u(ct(d.floor))}</td>
          <td class="center">${J(d.balanceDueDate)}</td>
          <td class="amount">${C(d.salary)}</td>
        </tr>`).join(""):'<tr><td colspan="4" class="empty">해당 월에 확정된 급여 내역이 없습니다.</td></tr>',i=o.items.map(d=>`
        <tr>
          <td>${u(d.label)}</td>
          <td class="center rate">${u(d.rate)}</td>
          <td class="amount minus">- ${C(d.amount)}</td>
        </tr>`).join("");return`<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="utf-8" />
<!-- 2026-05-22 [사용자 명시] 모바일 미리보기에서 칸이 좁아 줄바뀜이 심하던 문제 —
     고정 폭(820px) viewport 로 A4 명세서 레이아웃 그대로 렌더 → 화면에 맞춰 축소 표시. -->
<meta name="viewport" content="width=820" />
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    font-family: -apple-system, "Apple SD Gothic Neo", "Malgun Gothic", sans-serif;
    color: #191F28;
    padding: 40px 36px;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
  .doc-title {
    font-size: 26px;
    font-weight: 800;
    letter-spacing: -0.5px;
    background: linear-gradient(135deg, #6155F5, #39AFFD);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }
  .sub { font-size: 13px; color: #8B95A1; margin-top: 6px; }
  .info {
    margin-top: 22px;
    border: 1px solid #E5E8EB;
    border-radius: 12px;
    overflow: hidden;
  }
  .info table { width: 100%; border-collapse: collapse; }
  .info td {
    font-size: 13px;
    padding: 11px 14px;
    border-bottom: 1px solid #F2F4F6;
  }
  .info tr:last-child td { border-bottom: none; }
  .info .k {
    background: #F8F9FB;
    color: #8B95A1;
    width: 96px;
    font-weight: 600;
  }
  .info .v { color: #191F28; font-weight: 600; }
  .section-title {
    font-size: 15px;
    font-weight: 800;
    margin: 26px 0 10px;
  }
  table.grid { width: 100%; border-collapse: collapse; }
  table.grid th {
    font-size: 12px;
    color: #8B95A1;
    font-weight: 700;
    text-align: left;
    padding: 9px 12px;
    background: #F8F9FB;
    border-top: 1.5px solid #E5E8EB;
    border-bottom: 1px solid #E5E8EB;
  }
  table.grid td {
    font-size: 13px;
    padding: 10px 12px;
    border-bottom: 1px solid #F2F4F6;
  }
  table.grid .center { text-align: center; }
  table.grid .amount { text-align: right; font-weight: 700; font-variant-numeric: tabular-nums; }
  table.grid .addr { font-weight: 600; }
  table.grid .rate { color: #8B95A1; font-size: 12px; }
  table.grid .minus { color: #E0455A; }
  table.grid .empty { text-align: center; color: #8B95A1; padding: 22px 12px; }
  table.grid th.r, table.grid td.r { text-align: right; }
  .total-row td {
    font-weight: 800;
    border-top: 1.5px solid #E5E8EB;
    border-bottom: none;
    background: #F8F9FB;
  }
  .net {
    margin-top: 24px;
    border-radius: 14px;
    padding: 20px 22px;
    background: linear-gradient(135deg, #6155F5, #39AFFD);
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .net .label { font-size: 14px; font-weight: 600; opacity: 0.92; }
  .net .value { font-size: 26px; font-weight: 800; letter-spacing: -0.5px; }
  .foot {
    margin-top: 28px;
    font-size: 11px;
    color: #B0B8C1;
    line-height: 1.7;
    border-top: 1px solid #F2F4F6;
    padding-top: 14px;
  }
</style>
</head>
<body>
  <div class="doc-title">급여명세서</div>
  <div class="sub">${u(n.realEstateName||"부동산")} · ${X(n.month)} 귀속</div>

  <div class="info">
    <table>
      <tr><td class="k">성명</td><td class="v">${u(n.employeeName||"-")}</td>
          <td class="k">직급</td><td class="v">${u(n.employeePosition||"-")}</td></tr>
      <tr><td class="k">귀속월</td><td class="v">${X(n.month)}</td>
          <td class="k">공제방식</td><td class="v">${E(n.deductionMode)}</td></tr>
    </table>
  </div>

  <div class="section-title">지급 내역</div>
  <table class="grid">
    <thead>
      <tr><th>주소</th><th class="center" style="width:72px">층수</th>
          <th class="center" style="width:96px">잔금일</th>
          <th class="r" style="width:120px">확정급여</th></tr>
    </thead>
    <tbody>
      ${a}
      <tr class="total-row">
        <td colspan="3">지급 합계</td>
        <td class="amount">${C(n.gross)}</td>
      </tr>
    </tbody>
  </table>

  <div class="section-title">공제 내역 · ${E(n.deductionMode)}</div>
  <table class="grid">
    <thead>
      <tr><th>항목</th><th class="center" style="width:140px">요율</th>
          <th class="r" style="width:120px">금액</th></tr>
    </thead>
    <tbody>
      ${i}
      <tr class="total-row">
        <td colspan="2">공제 합계</td>
        <td class="amount minus">- ${C(o.total)}</td>
      </tr>
    </tbody>
  </table>

  <div class="net">
    <div class="label">실수령액</div>
    <div class="value">${C(s)}</div>
  </div>

  <div class="foot">
    · 본 급여명세서는 부비서에서 확정된 중개보수(양측 입금완료) 기준으로 자동 산출되었습니다.<br/>
    · 공제 금액은 ${E(n.deductionMode)} 기준 추정치이며, 실제 신고·납부액과 차이가 있을 수 있습니다.<br/>
    · 발행일시: ${J(n.issuedAt)}
  </div>
</body>
</html>`}const Lt=15e3,_t=8e3,pt=1200;function Ut(n,o,s){const a=`<svg xmlns="http://www.w3.org/2000/svg" width="${o}" height="${s}" viewBox="0 0 ${o} ${s}"><foreignObject x="0" y="0" width="100%" height="100%">${n}</foreignObject></svg>`;return`data:image/svg+xml;charset=utf-8,${encodeURIComponent(a)}`}function Gt(n){return!Number.isFinite(n)||n<=0?pt:Math.max(1,Math.min(_t,Math.ceil(n)))}function Yt(n,o){return new Promise((s,a)=>{const i=document.createElement("iframe");i.setAttribute("sandbox","allow-same-origin"),i.setAttribute("aria-hidden","true"),i.tabIndex=-1,Object.assign(i.style,{position:"fixed",left:"-10000px",top:"0",width:`${o}px`,height:`${pt}px`,border:"0",visibility:"hidden"});const d=window.setTimeout(()=>{i.remove(),a(new Error("그림으로 만들 문서를 불러오지 못했어요."))},Lt);i.onload=()=>{var v;window.clearTimeout(d);const l=i.contentDocument;if(!(l!=null&&l.documentElement)){i.remove(),a(new Error("문서를 읽지 못했어요."));return}const p=()=>{const y=Gt(Math.max(l.documentElement.scrollHeight,l.body?l.body.scrollHeight:0)),m=new XMLSerializer().serializeToString(l.documentElement);i.remove(),s({xhtml:m,height:y})},h=(v=l.fonts)==null?void 0:v.ready;h?h.then(p,p):p()},i.srcdoc=n,document.body.appendChild(i)})}function Kt(n){return new Promise((o,s)=>{const a=new Image;a.decoding="async",a.onload=()=>o(a),a.onerror=()=>s(new Error("문서를 그림으로 바꾸지 못했어요.")),a.src=n})}async function Vt(n,o){const{width:s}=o,{xhtml:a,height:i}=await Yt(n,s),d=await Kt(Ut(a,s,i)),l=Math.min(2,Math.max(1,window.devicePixelRatio||1)),p=document.createElement("canvas");p.width=Math.round(s*l),p.height=Math.round(i*l);const h=p.getContext("2d");if(!h)throw new Error("그림을 그릴 수 없는 브라우저예요.");return h.fillStyle="#FFFFFF",h.fillRect(0,0,p.width,p.height),h.scale(l,l),h.drawImage(d,0,0,s,i),new Promise((v,y)=>{try{p.toBlob(m=>m?v(m):y(new Error("그림 파일을 만들지 못했어요.")),"image/jpeg",o.quality??.92)}catch{y(new Error("이 브라우저에서는 문서를 그림으로 만들 수 없어요."))}})}const T="#6155F5",qt=820,A=n=>`${Math.round(n).toLocaleString("ko-KR")}원`,Xt=n=>{if(!n)return"-";const o=new Date(n);return Number.isNaN(o.getTime())?"-":`${o.getFullYear()}.${String(o.getMonth()+1).padStart(2,"0")}.${String(o.getDate()).padStart(2,"0")}`},Jt=n=>{const[o,s]=n.split("-");return o&&s?`${o}년 ${Number(s)}월`:n};function Ue(){const n=vt(),[o]=wt(),s=Ft(e=>e.user),a=o.get("employeeId")??"",i=o.get("employeeName")??"-",d=o.get("employeePosition")??"직원",l=o.get("month")??`${new Date().getFullYear()}-${String(new Date().getMonth()+1).padStart(2,"0")}`,p=(s==null?void 0:s.realEstateName)??"부동산",[h,v]=r.useState([]),[y,m]=r.useState(!0),[f,gt]=r.useState("rate33"),[ht,I]=r.useState(!1),[xt,k]=r.useState(!1),[P,yt]=r.useState([]),[w,U]=r.useState(!1),[G,Y]=r.useState(null);r.useEffect(()=>{let e=!1;return(async()=>{m(!0);try{const c=await It(a,l);e||v(c)}catch{e||S("급여 정보를 불러오지 못했어요. 잠시 후 다시 시도해주세요.",{tone:"error"})}finally{e||m(!1)}})(),()=>{e=!0}},[a,l]);const F=r.useMemo(()=>h.filter(e=>e.lessorPaymentDone&&e.lesseePaymentDone),[h]),b=r.useMemo(()=>F.reduce((e,c)=>e+c.calculatedSalary,0),[F]),K=`${f}:${b}`,[$,V]=r.useState(null);r.useEffect(()=>{if(y)return;let e=!1;const c=`${f}:${b}`;return Rt(b,f).then(g=>{e||V({key:c,result:g})}).catch(()=>{e||(V({key:c,result:null}),S("공제 금액을 계산하지 못했어요. 잠시 후 다시 시도해주세요.",{tone:"error"}))}),()=>{e=!0}},[y,b,f]);const x=$&&$.key===K?$.result:null,D=!$||$.key!==K,R=r.useMemo(()=>x?{realEstateName:p,employeeName:i,employeePosition:d,month:l,lines:F.map(e=>({address:e.address,floor:e.floor,balanceDueDate:e.balanceDueDate,salary:e.calculatedSalary})),gross:b,deductionMode:f,deduction:x,issuedAt:new Date().toISOString()}:null,[p,i,d,l,F,b,f,x]),j=r.useCallback(()=>R?Ht(R):(S(D?"공제 금액을 계산하는 중이에요. 잠시 후 다시 눌러 주세요.":"공제 금액을 계산하지 못했어요. 잠시 후 다시 시도해주세요.",{tone:D?"info":"error"}),null),[R,D]),B=r.useMemo(()=>`급여명세서-${l}-${i}`.replace(/[\\/:*?"<>|]/g,"_"),[i,l]),q=r.useCallback(e=>n(`/messenger/${encodeURIComponent(e)}`),[n]),ft=r.useCallback(()=>{const e=j();e&&Y(e)},[j]),ut=r.useCallback(async()=>{const e=j();if(e)try{await Wt(e,B)}catch(c){S(`출력에 실패했어요. ${c instanceof Error?c.message:""}`,{tone:"error"})}},[j,B]),mt=r.useCallback(async()=>{if(I(!1),k(!0),!(P.length>0))try{const c=(await Pt()).filter(g=>(g.role==="OWNER"||g.role==="EMPLOYEE")&&g.employeeStatus==="APPROVED").map(g=>({id:g.id,name:g.name||"이름 미입력"})).sort((g,z)=>g.name.localeCompare(z.name));yt(c)}catch{S("직원 목록을 불러오지 못했어요.",{tone:"error"}),k(!1)}},[P.length]),bt=r.useCallback(async e=>{if(w||!(s!=null&&s.id))return;const c=j();if(c){U(!0);try{const g=await Vt(c,{width:qt}),z=`${B}.jpg`,O=await Dt(e.id,s.id),St=await Qt(O.id,z,g);await Mt(O.id,{type:"file",content:z,attachmentUrl:St.downloadUrl,attachmentName:z,attachmentSize:g.size,attachmentMime:"image/jpeg"}),k(!1),S(`${e.name}님 대화방으로 급여명세서를 보냈습니다.`,{tone:"success"}),q(O.id)}catch(g){S(`전송에 실패했어요. ${g instanceof Error?g.message.slice(0,80):""}`,{tone:"error"})}finally{U(!1)}}},[w,s==null?void 0:s.id,j,B,q]);return t.jsxs("div",{style:Zt,children:[t.jsx(Ot,{title:"급여명세서",crumb:{label:"급여관리",onClick:()=>n(-1)}}),y?t.jsxs("div",{style:te,children:[t.jsx("div",{style:W}),t.jsx("style",{children:"@keyframes spin { to { transform: rotate(360deg); } }"})]}):t.jsxs("div",{style:ee,children:[t.jsxs("div",{style:H,children:[t.jsx("div",{style:ne,children:"급여명세서"}),t.jsxs("div",{style:oe,children:[p," · ",Jt(l)," 귀속"]}),t.jsxs("div",{style:se,children:[t.jsxs("div",{style:{flex:1},children:[t.jsx("div",{style:Q,children:"성명"}),t.jsx("div",{style:Z,children:i})]}),t.jsxs("div",{style:{flex:1},children:[t.jsx("div",{style:Q,children:"직급"}),t.jsx("div",{style:Z,children:d})]})]})]}),t.jsx("div",{style:L,children:"공제 방식"}),t.jsx("div",{style:ie,children:["rate33","insurance4"].map(e=>{const c=f===e;return t.jsx("button",{type:"button",onClick:()=>gt(e),style:{...le,...c?re:{}},children:t.jsx("span",{style:{...ae,...c?de:{}},children:E(e)})},e)})}),t.jsx("div",{style:L,children:"지급 내역"}),t.jsxs("div",{style:H,children:[t.jsxs("div",{style:ce,children:[t.jsx("span",{style:{..._,flex:3},children:"주소"}),t.jsx("span",{style:{..._,flex:1,textAlign:"center"},children:"층수"}),t.jsx("span",{style:{..._,flex:1.6,textAlign:"right"},children:"확정급여"})]}),F.length===0?t.jsx("div",{style:ot,children:"해당 월에 확정된 급여 내역이 없습니다."}):F.map(e=>t.jsxs("div",{style:M,children:[t.jsxs("div",{style:{flex:3,paddingRight:8,minWidth:0},children:[t.jsx("div",{style:pe,children:e.address||"주소 미입력"}),t.jsxs("div",{style:ge,children:["잔금 ",Xt(e.balanceDueDate)]})]}),t.jsx("span",{style:{...tt,flex:1,textAlign:"center"},children:ct(e.floor)}),t.jsx("span",{style:{...et,flex:1.6,textAlign:"right"},children:A(e.calculatedSalary)})]},e.contractId)),t.jsxs("div",{style:{...M,...st},children:[t.jsx("span",{style:{...it,flex:4},children:"지급 합계"}),t.jsx("span",{style:{...lt,flex:1.6,textAlign:"right"},children:A(b)})]})]}),t.jsxs("div",{style:L,children:["공제 내역 · ",E(f)]}),t.jsxs("div",{style:H,children:[x?null:t.jsx("div",{style:ot,children:D?"계산 중":"공제 금액을 계산하지 못했어요."}),((x==null?void 0:x.items)??[]).map(e=>t.jsxs("div",{style:M,children:[t.jsx("span",{style:{...tt,flex:2.4},children:e.label}),t.jsx("span",{style:{...he,flex:2,textAlign:"center"},children:e.rate}),t.jsxs("span",{style:{...et,...nt,flex:1.8,textAlign:"right"},children:["- ",A(e.amount)]})]},e.label)),t.jsxs("div",{style:{...M,...st},children:[t.jsx("span",{style:{...it,flex:4.4},children:"공제 합계"}),t.jsx("span",{style:{...lt,...nt,flex:1.8,textAlign:"right"},children:x?`- ${A(x.total)}`:"—"})]})]}),t.jsxs("div",{style:xe,children:[t.jsx("span",{style:ye,children:"실수령액"}),t.jsx("span",{style:fe,children:x?A(x.netPay):"—"})]}),t.jsxs("div",{style:ue,children:["공제 금액은 ",E(f)," 기준 추정치이며, 실제 신고·납부액과 차이가 있을 수 있습니다."]})]}),y?null:t.jsxs("div",{style:me,children:[t.jsxs(N,{type:"button",style:{flex:1},onClick:ft,children:[t.jsx(jt,{size:20}),t.jsx("span",{children:"미리보기"})]}),t.jsxs(N,{type:"button",style:{flex:1},onClick:()=>I(!0),children:[t.jsx(Et,{size:20}),t.jsx("span",{children:"공유"})]}),t.jsxs(N,{type:"button",style:{flex:1},onClick:()=>void ut(),children:[t.jsx(kt,{size:20}),t.jsx("span",{children:"출력"})]})]}),ht?t.jsx("div",{style:rt,onClick:()=>I(!1),children:t.jsxs("div",{style:at,onClick:e=>e.stopPropagation(),children:[t.jsx("div",{style:dt,children:"급여명세서 공유"}),t.jsxs("button",{type:"button",style:ve,onClick:()=>void mt(),children:[t.jsx("div",{style:we,children:t.jsx($t,{size:20,color:T})}),t.jsxs("div",{style:{flex:1,textAlign:"left"},children:[t.jsx("div",{style:Fe,children:"내부공유"}),t.jsx("div",{style:je,children:"직원을 선택해 대화방으로 전송"})]}),t.jsx(Bt,{size:18,color:"#B0B8C1"})]}),t.jsx(zt,{type:"button",className:"b2--sheet",style:{marginTop:8},onClick:()=>I(!1),children:"취소"})]})}):null,xt?t.jsx("div",{style:rt,onClick:()=>!w&&k(!1),children:t.jsxs("div",{style:at,onClick:e=>e.stopPropagation(),children:[t.jsxs("div",{style:be,children:[t.jsx("div",{style:dt,children:"공유할 직원 선택"}),t.jsx("button",{type:"button",style:Se,disabled:w,onClick:()=>k(!1),children:t.jsx(Ct,{size:22})})]}),P.length===0?t.jsx("div",{style:Ee,children:t.jsx("div",{style:W})}):t.jsx("div",{style:ke,children:P.map(e=>t.jsxs("button",{type:"button",style:$e,disabled:w,onClick:()=>void bt(e),children:[t.jsx("div",{style:Be,children:t.jsx("span",{style:ze,children:e.name.slice(0,1)})}),t.jsx("span",{style:Ce,children:e.name}),t.jsx(At,{size:18,color:T})]},e.id))})]})}):null,w?t.jsxs("div",{style:Ae,children:[t.jsx("div",{style:{...W,borderTopColor:"#FFFFFF"}}),t.jsx("span",{style:Te,children:"급여명세서 전송 중…"})]}):null,G?t.jsx(Nt,{html:G,title:"급여명세서 미리보기",fileName:B,onClose:()=>Y(null)}):null]})}async function Qt(n,o,s){const{apiClient:a}=await Tt(async()=>{const{apiClient:p}=await import("./index-BCRkGrJv.js").then(h=>h.bV);return{apiClient:p}},__vite__mapDeps([0,1])),i=await a.post("/uploads/presigned",{category:"chat",referenceId:n,filename:o,contentType:"image/jpeg",size:s.size}),d=await fetch(i.data.uploadUrl,{method:"PUT",headers:{"Content-Type":"image/jpeg"},body:s});if(!d.ok)throw new Error(`S3 업로드 실패 (${d.status})`);return{downloadUrl:(await a.post("/uploads/confirm",{fileKey:i.data.fileKey,category:"chat",referenceId:n})).data.downloadUrl}}const Zt={display:"flex",flexDirection:"column",height:"100%",background:"var(--page-bg)"},te={flex:1,display:"flex",alignItems:"center",justifyContent:"center"},W={width:24,height:24,borderRadius:"50%",border:"2px solid rgba(97,85,245,0.2)",borderTopColor:T,animation:"spin 1s linear infinite"},ee={flex:1,overflowY:"auto",padding:"20px",paddingBottom:40},H={background:"#FFFFFF",borderRadius:14,padding:16,marginBottom:4},ne={fontSize:20,fontWeight:600,color:"#191F28"},oe={fontSize:12,color:"#8B95A1",marginTop:4},se={display:"flex",marginTop:14,borderTop:"1px solid #F2F4F6",paddingTop:12,gap:12},Q={fontSize:11,color:"#8B95A1",marginBottom:3},Z={fontSize:14,color:"#191F28",fontWeight:600},L={fontSize:14,fontWeight:600,color:"#191F28",marginTop:20,marginBottom:8},ie={display:"flex",gap:8},le={flex:1,height:44,borderRadius:12,border:"1px solid #E5E8EB",background:"#FFFFFF",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer"},re={borderColor:T,background:"rgba(97,85,245,0.08)"},ae={fontSize:14,color:"#8B95A1",fontWeight:600},de={color:T,fontWeight:600},ce={display:"flex",paddingBottom:8,borderBottom:"1px solid #E5E8EB"},_={fontSize:11,color:"#8B95A1",fontWeight:600},M={display:"flex",alignItems:"center",padding:"10px 0",borderBottom:"1px solid #F2F4F6"},pe={fontSize:13,color:"#191F28",fontWeight:600,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},ge={fontSize:11,color:"#8B95A1",marginTop:2},tt={fontSize:13,color:"#4E5968"},he={fontSize:11,color:"#8B95A1"},et={fontSize:13,color:"#191F28",fontWeight:600},nt={color:"#E0455A"},ot={fontSize:13,color:"#8B95A1",textAlign:"center",padding:"22px 0"},st={borderBottom:"none",borderTop:"1px solid #E5E8EB"},it={fontSize:13,color:"#191F28",fontWeight:600},lt={fontSize:14,color:"#191F28",fontWeight:600},xe={marginTop:16,borderRadius:14,padding:20,display:"flex",alignItems:"center",justifyContent:"space-between",background:"linear-gradient(135deg, #6155F5 0%, #39AFFD 100%)"},ye={fontSize:14,color:"rgba(255,255,255,0.92)",fontWeight:600},fe={fontSize:24,color:"#FFFFFF",fontWeight:600},ue={fontSize:11,color:"#B0B8C1",marginTop:14,lineHeight:1.5},me={display:"flex",padding:"10px 16px 20px",background:"#FFFFFF",borderTop:"1px solid #F2F4F6",gap:8},rt={position:"fixed",inset:0,background:"rgba(0,0,0,0.4)",display:"flex",alignItems:"flex-end",justifyContent:"center",zIndex:1e3},at={width:"100%",maxWidth:520,background:"#FFFFFF",borderTopLeftRadius:20,borderTopRightRadius:20,padding:"16px 16px 24px",display:"flex",flexDirection:"column"},be={display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:8},dt={fontSize:16,fontWeight:600,color:"#191F28",textAlign:"center",marginBottom:12,flex:1},Se={background:"transparent",border:0,cursor:"pointer",color:"#4E5968",display:"flex",padding:4},ve={display:"flex",alignItems:"center",gap:12,padding:"12px 4px",background:"transparent",border:0,cursor:"pointer",width:"100%"},we={width:40,height:40,borderRadius:12,background:"rgba(97,85,245,0.10)",display:"flex",alignItems:"center",justifyContent:"center"},Fe={fontSize:15,fontWeight:600,color:"#191F28"},je={fontSize:12,color:"#8B95A1",marginTop:2},Ee={padding:"40px 0",display:"flex",alignItems:"center",justifyContent:"center"},ke={maxHeight:320,overflowY:"auto"},$e={display:"flex",alignItems:"center",gap:12,padding:"11px 0",background:"transparent",border:"none",borderBottom:"1px solid #F2F4F6",cursor:"pointer",width:"100%"},Be={width:36,height:36,borderRadius:12,background:"#E5E8EB",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},ze={fontSize:15,fontWeight:600,color:"#4E5968"},Ce={flex:1,fontSize:15,fontWeight:600,color:"#191F28",textAlign:"left"},Ae={position:"fixed",inset:0,background:"rgba(0,0,0,0.55)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:14,zIndex:1100},Te={fontSize:14,color:"#FFFFFF",fontWeight:600};export{Ue as PayslipScreen};
