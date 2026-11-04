import{U as Ye,ag as Ge,ah as qe,g as Pe,aE as Ve,a as M}from"./index-BBGHio1f.js";import{f as We}from"./calcApi-DP90mUzb.js";import{e as P}from"./htmlEscape-BJTSIi2w.js";const fe="/app/PretendardVariable-CJuje-Rk.woff2",a={ink:"#111111",inkOff:"#9CA3AF",cell:"#EAF5EC",line:"#CBDCCF",accent:"#2F6B45",paper:"#FFFFFF"},Re="'Pretendard Variable'",Je=`${Re},Pretendard,'Apple SD Gothic Neo','Malgun Gothic','맑은 고딕','Noto Sans KR',sans-serif`;function Ze(){const e=typeof document<"u"?document.baseURI:void 0;if(!e)return fe;try{return new URL(fe,e).href}catch{return fe}}function Qe(){const e=P(Ze());return`@font-face{font-family:${Re};font-style:normal;font-weight:45 920;font-display:block;src:url("${e}") format("woff2-variations"),url("${e}") format("woff2");}`}const Xe=`*{box-sizing:border-box;margin:0;padding:0;}
html,body{background:${a.paper};}
body{font-family:${Je};font-weight:400;color:${a.ink};letter-spacing:-0.2px;-webkit-font-smoothing:antialiased;-webkit-print-color-adjust:exact;print-color-adjust:exact;word-break:keep-all;overflow-wrap:break-word;}
strong,b,th{font-weight:600;}
@page{size:A4 portrait;margin:5mm 7mm;}
@media screen{html,body{background:transparent;}}
.print-doc + .print-doc{break-before:page;page-break-before:always;}
.print-notice{padding:60px 0;text-align:center;color:${a.ink};font-size:10pt;}
.print-notice h2{font-size:12pt;font-weight:600;color:${a.ink};margin-bottom:8px;}`;function Le(e,s,n){return`@media screen{${e}{width:210mm;margin:0 auto;padding:${s} ${n};background:${a.paper};box-shadow:0 0 0 1px #E5E8EB;}}
@media print{${e}{width:auto;margin:0;padding:0;box-shadow:none;}}`}function ne(e){const{title:s,css:n,body:o}=e;return`<!DOCTYPE html><html lang="ko"><head><meta charset="utf-8"/><meta name="viewport" content="width=device-width,initial-scale=1.0"/><title>${P(s)}</title><style>${Qe()}
${Xe}
${n}</style></head><body>${o}</body></html>`}function zs(e,s){return ne({title:e,css:"",body:`<div class="print-notice"><h2>${P(e)}</h2><p>${P(s)}</p></div>`})}const es=/<style[^>]*>([\s\S]*?)<\/style>/gi,ss=/<body[^>]*>([\s\S]*)<\/body>/i;function Es(e,s){var t;const n=[],o=[];for(const d of e){for(const r of d.matchAll(es)){const l=r[1];n.includes(l)||n.push(l)}o.push(((t=ss.exec(d))==null?void 0:t[1])??"")}return`<!DOCTYPE html><html lang="ko"><head><meta charset="utf-8"/><meta name="viewport" content="width=device-width,initial-scale=1.0"/><title>${P(s)}</title>${n.map(d=>`<style>${d}</style>`).join("")}</head><body>${o.map(d=>`<div class="print-doc">${d}</div>`).join("")}</body></html>`}const g=e=>P((e==null?void 0:e.trim())||"-"),Q=e=>{if(!e)return{front:"",back:""};const s=e.trim();if(!s)return{front:"",back:""};if(s.includes("-")){const[o,t]=s.split("-");return{front:(o??"").trim(),back:(t??"").trim()}}const n=s.replace(/\D/g,"");return n.length>=13?{front:n.slice(0,6),back:n.slice(6,13)}:n.length>=6?{front:n.slice(0,6),back:""}:{front:s,back:""}},Te=e=>{if(!e||e<=0)return"";const s=["","만","억","조"];let n=e,o=0;const t=[];for(;n>0;){const d=n%1e4;d>0&&t.unshift(`${d.toLocaleString()}${s[o]}`),n=Math.floor(n/1e4),o++}return t.join(" ")+"원"},m=a,ts=`@page{size:A4 portrait;margin:8mm 10mm;}.page{width:100%;max-width:196mm;margin:0 auto;padding:4mm 0;display:flex;flex-direction:column;gap:4mm;font-size:9pt;color:${m.ink};}@media print{.page{max-width:none;padding:0;}}.title-box{text-align:center;margin-bottom:8px;}.title-box h1{display:inline-flex;align-items:center;gap:8px;background:${m.paper};border-radius:14px;padding:6px 20px;border:1.5px solid ${m.line};font-size:14pt;font-weight:600;color:${m.ink};}.title-box p{font-size:7pt;color:${m.ink};margin-top:4px;}.section{background:${m.paper};border-radius:12px;border:1px solid ${m.line};overflow:hidden;margin-bottom:4px;page-break-inside:avoid;}.sec-hd{background:${m.cell};padding:8px 14px;border-bottom:1px solid ${m.line};display:flex;align-items:center;gap:6px;font-size:9pt;font-weight:600;color:${m.ink};}.sec-bar{width:3px;height:14px;border-radius:2px;display:inline-block;background:${m.accent};}.sec-title{font-size:9pt;font-weight:600;color:${m.ink};}.tbl{width:100%;border-collapse:collapse;}.tbl th{background:${m.cell};border:1px solid ${m.line};padding:5px 10px;font-size:8pt;font-weight:600;color:${m.ink};text-align:left;width:90px;white-space:nowrap;}.tbl td{border:1px solid ${m.line};padding:5px 10px;font-size:8.5pt;color:${m.ink};background:${m.paper};}.money-grid{display:grid;gap:6px;padding:10px;}.money-card{background:${m.paper};border:1.5px solid ${m.line};border-radius:10px;padding:6px 8px;text-align:center;min-width:0;}.money-label{font-size:7pt;font-weight:600;color:${m.ink};margin-bottom:2px;white-space:nowrap;}.money-val{font-size:9pt;font-weight:600;color:${m.ink};word-break:break-all;overflow-wrap:break-word;line-height:1.25;}.money-kr{font-size:6.5pt;color:${m.ink};margin-top:1px;word-break:keep-all;overflow-wrap:break-word;line-height:1.3;}.clause-grid{display:grid;grid-template-columns:1fr 1fr;gap:6px;padding:10px;}.clause{background:${m.paper};border:1px solid ${m.line};border-radius:8px;padding:8px 10px;}.clause-full{background:${m.paper};border:1px solid ${m.line};border-radius:8px;padding:8px 10px;grid-column:1/-1;}.clause-t{font-size:7.5pt;font-weight:600;color:${m.ink};margin-bottom:3px;}.clause-b{font-size:7.5pt;color:${m.ink};line-height:1.5;}.clause-highlight{background:${m.cell};border-radius:6px;padding:4px 8px;font-size:7.5pt;color:${m.ink};font-weight:600;margin-top:4px;}.special{background:${m.paper};border:1.5px solid ${m.line};border-radius:10px;padding:10px 12px;margin:8px;}.special-text{font-size:8pt;color:${m.ink};line-height:1.7;white-space:pre-wrap;}.sign-section{page-break-inside:avoid;}.sign-grid{display:grid;grid-template-columns:1fr 1fr;gap:6px;margin:8px;}.sign-box{border:1.5px solid ${m.line};border-radius:10px;padding:8px 12px;background:${m.paper};}.sign-title{font-size:8.5pt;font-weight:600;color:${m.ink};border-bottom:1px solid ${m.line};padding-bottom:4px;margin-bottom:6px;}.sign-row{display:flex;gap:6px;font-size:7.5pt;padding:2px 0;}.sign-lbl{color:${m.ink};font-weight:600;width:40px;flex-shrink:0;}.sign-val{color:${m.ink};}.sign-line{margin-top:6px;border-top:1px dashed ${m.line};padding-top:4px;font-size:7pt;color:${m.ink};text-align:right;}.seal{display:flex;align-items:flex-end;gap:4px;width:55%;}.seal-line{flex:1;min-width:0;height:1.3em;border-bottom:1px solid ${m.ink};}.agent{border:1.5px solid ${m.line};border-radius:10px;padding:8px 12px;background:${m.paper};margin-bottom:4px;}.agent-title{font-size:8pt;font-weight:600;color:${m.ink};margin-bottom:4px;}.agent-grid{display:grid;grid-template-columns:1fr 1fr;gap:2px 10px;}.kv{display:flex;gap:4px;font-size:7.5pt;}.kl{color:${m.ink};font-weight:600;width:40px;flex-shrink:0;}.date-center{text-align:center;font-size:8pt;color:${m.ink};padding:4px 0;}.two-section{display:grid;grid-template-columns:1fr 1fr;gap:6px;padding:0 4px;}.sub-title{background:${m.cell};border-bottom:1px solid ${m.line};color:${m.ink};font-size:8pt;font-weight:600;padding:4px 8px;margin:0;}.footer{text-align:center;font-size:7pt;color:${m.ink};border-top:1px solid ${m.line};padding:6px 0;margin-top:4px;}`;function Os(e){const{cfType:s,cfProperty:n,cfContent:o,cfClause:t,cfSpecialTerms:d,cfLessor:r,cfLessee:l,cfAgent:p,cfSignDate:v}=e,b=s==="월세",u=s==="매매",y=t.propertyUse==="주거용"?"2":"3";return ne({title:"계약서",css:ts,body:`<div class="page">
<div class="title-box"><h1>부동산 ${u?"매매":"임대차"} 계약서</h1><p>본 계약서는 법적 효력을 가지며, 당사자 간 합의에 의해 작성되었습니다.</p></div>
<div class="two-section">
<div class="section"><div class="sec-hd"><span class="sec-bar"></span><span class="sec-title">부동산의 표시</span></div><table class="tbl"><tr><th>소재지</th><td style="font-size:7.5pt;">${g(n.address)}</td></tr><tr><th>토지지목</th><td>${g(n.landCategory)}</td></tr><tr><th>토지면적</th><td>${g(n.landArea)} ㎡</td></tr><tr><th>건물면적</th><td>${g(n.buildingArea)} ㎡</td></tr><tr><th>건물구조</th><td>${g(n.buildingStructure)}</td></tr><tr><th>건물용도</th><td>${g(n.buildingUse)}</td></tr>${u?"":`<tr><th>임대할 부분</th><td>${g(n.rentPart)}</td></tr><tr><th>임대면적</th><td>${g(n.rentArea)} ㎡</td></tr>`}</table></div>
<div class="section"><div class="sec-hd"><span class="sec-bar"></span><span class="sec-title">계약 내용</span></div><div class="money-grid" style="grid-template-columns:${b?"repeat(4,1fr)":"repeat(3,1fr)"};"><div class="money-card"><div class="money-label">${u?"매매대금":"보증금"}</div><div class="money-val">${g(o.deposit)}원</div><div class="money-kr">${g(o.depositKr)}</div></div><div class="money-card"><div class="money-label">계약금</div><div class="money-val">${g(o.downPayment)}원</div><div class="money-kr">${g(o.downPaymentKr)}${o.depositDate?` (${P(o.depositDate)})`:""}</div></div><div class="money-card"><div class="money-label">잔금</div><div class="money-val">${g(o.balance)}원</div><div class="money-kr">${g(o.balanceKr)}${o.balanceDate?` (${P(o.balanceDate)})`:""}</div></div>${b?`<div class="money-card"><div class="money-label">월세</div><div class="money-val">${g(o.monthlyRent)}원</div><div class="money-kr">매월 ${g(o.monthlyRentDay)}일</div></div>`:""}</div><table class="tbl" style="margin-top:3px;"><tr><th>인도일</th><td>${g(t.deliveryDate)}</td></tr><tr><th>계약기간</th><td>${g(t.deliveryDate)} ~ ${g(t.endDate)} (${g(t.contractPeriod)}개월)</td></tr></table></div>
</div>
<div class="section"><div class="sec-hd"><span class="sec-bar"></span><span class="sec-title">계약 조항</span></div><div class="clause-grid"><div class="clause"><div class="clause-t">제1조 [목적]</div><div class="clause-b">위 부동산의 ${u?"매매":"임대차"}에 관하여 합의에 의하여 ${u?"매도인과 매수인":"임대인과 임차인"} 사이에 다음과 같이 계약을 체결한다.</div></div><div class="clause"><div class="clause-t">제2조 [존속기간]</div><div class="clause-b">${u?"매도인":"임대인"}은 위 부동산을 ${u?"매매":"임대차"} 목적대로 사용할 수 있는 상태로 인도일 <strong>${g(t.deliveryDate)}</strong>에 인도하며, ${u?"":`임대차 기간은 <strong>${g(t.endDate)}</strong> (${g(t.contractPeriod)}개월)까지로 한다.`}</div></div><div class="clause"><div class="clause-t">제3조 [용도 변경 및 전대]</div><div class="clause-b">${u?"매수인":"임차인"}은 ${u?"매도인":"임대인"}의 동의 없이 용도·구조를 변경하거나 전대·양도·담보제공을 하지 못하며 <strong>${g(t.propertyUse)}</strong> 이외 용도로 사용 불가.</div></div><div class="clause"><div class="clause-t">제4조 [계약의 해지]</div><div class="clause-b">${u?"매수인":"임차인"}의 차임 연체액이 <strong>${y}기</strong>의 차임액에 달하거나 제3조를 위반하였을 때 ${u?"매도인":"임대인"}은 즉시 본 계약을 해지할 수 있다.</div></div><div class="clause"><div class="clause-t">제5조 [계약의 종료]</div><div class="clause-b">${u?"매매":"임대차"}계약이 종료된 경우 ${u?"매수인":"임차인"}은 위 부동산을 원상 회복하여 ${u?"매도인":"임대인"}에게 반환한다. ${u?"매도인":"임대인"}은 보증금을 반환하고 연체료·손해배상이 있을 때는 제하고 잔액을 반환한다.</div></div><div class="clause"><div class="clause-t">제6조 [계약의 해제]</div><div class="clause-b">${u?"매수인이 매도인":"임차인이 임대인"}에게 중도금 지급 전까지 ${u?"매도인":"임대인"}은 계약금 배액 상환, ${u?"매수인":"임차인"}은 계약금 포기로 계약 해제 가능.</div></div><div class="clause"><div class="clause-t">제7조 [채무불이행과 손해배상]</div><div class="clause-b">당사자 일방이 채무를 불이행 시 서면 최고 후 계약 해제 가능. 손해배상 별도 약정 없는 한 계약금을 기준으로 한다.</div></div><div class="clause"><div class="clause-t">제8조 [중개보수]</div><div class="clause-b">개업공인중개사는 본 계약 불이행에 책임을 지지 않는다. 중개보수는 계약 당사자 쌍방이 각각 지급하며 무효·취소·해제되어도 지급한다.</div><div class="clause-highlight">중개보수: ${g(t.brokerageFee)}원 (부가가치세 별도) | 교부일자: ${g(t.brokerageFeeDate)}</div></div><div class="clause-full"><div class="clause-t">제9조 [중개대상물확인설명서 교부 등]</div><div class="clause-b">개업공인중개사는 중개대상물확인설명서를 작성하고 업무보증관계증서(공제증서 등) 사본을 첨부하여 거래당사자 쌍방에게 교부한다.</div></div></div></div>
<div class="section"><div class="sec-hd"><span class="sec-bar"></span><span class="sec-title">특약사항</span></div><div class="special"><div class="special-text">${d.filter(Boolean).map(x=>P(x)).join(`
`)||"-"}</div></div></div>
<div class="section sign-section">
<div class="sec-hd"><span class="sec-bar"></span><span class="sec-title">당사자 서명 및 개업공인중개사</span></div>
<div class="date-center">계약 체결일: ${g(v)}</div>
<div class="sign-grid" style="margin-bottom:4px;"><div class="sign-box"><div class="sign-title">${u?"매도인":"임대인"}</div><div class="sign-row"><span class="sign-lbl">성명</span><span class="sign-val">${g(r.name)}</span></div><div class="sign-row"><span class="sign-lbl">연락처</span><span class="sign-val">${g(r.phone)}</span></div><div class="sign-row"><span class="sign-lbl">주민번호 앞</span><span class="sign-val">${g(Q(r.ssn).front)}</span></div><div class="sign-row"><span class="sign-lbl">주민번호 뒤</span><span class="sign-val">${g(Q(r.ssn).back)}</span></div><div class="sign-row"><span class="sign-lbl">주소</span><span class="sign-val" style="font-size:7pt;">${g(r.address)}</span></div><div class="sign-line" style="display:flex;justify-content:space-between;align-items:center;"><span>성명: ${g(r.name)}</span><span class="seal">서명<span class="seal-line"></span>(인)</span></div></div><div class="sign-box"><div class="sign-title">${u?"매수인":"임차인"}</div><div class="sign-row"><span class="sign-lbl">성명</span><span class="sign-val">${g(l.name)}</span></div><div class="sign-row"><span class="sign-lbl">연락처</span><span class="sign-val">${g(l.phone)}</span></div><div class="sign-row"><span class="sign-lbl">주민번호 앞</span><span class="sign-val">${g(Q(l.ssn).front)}</span></div><div class="sign-row"><span class="sign-lbl">주민번호 뒤</span><span class="sign-val">${g(Q(l.ssn).back)}</span></div><div class="sign-row"><span class="sign-lbl">주소</span><span class="sign-val" style="font-size:7pt;">${g(l.address)}</span></div><div class="sign-line" style="display:flex;justify-content:space-between;align-items:center;"><span>성명: ${g(l.name)}</span><span class="seal">서명<span class="seal-line"></span>(인)</span></div></div></div>
<div style="border-top:1.5px solid ${m.line};margin:4px 0;"></div>
<div style="font-size:9pt;font-weight:600;margin-bottom:3px;">개업공인중개사</div>
<div class="agent" style="margin-bottom:3px;page-break-inside:avoid;break-inside:avoid;"><div class="agent-title">대표 중개사무소</div><div class="agent-grid"><div class="kv"><span class="kl">사무소명</span><span>${g(p.officeName)}</span></div><div class="kv"><span class="kl">등록번호</span><span>${g(p.regNo)}</span></div><div class="kv"><span class="kl">대표</span><span>${g(p.representative)}</span></div><div class="kv"><span class="kl">전화</span><span>${g(p.phone)}</span></div><div class="kv" style="grid-column:1/-1;"><span class="kl">소재지</span><span style="font-size:7pt;">${g(p.address)}</span></div></div><div style="margin-top:6px;border-top:1px dashed ${m.line};padding-top:3px;display:flex;justify-content:space-between;align-items:center;font-size:7.5pt;"><span>성명: ${g(p.representative)}</span><span class="seal">서명<span class="seal-line"></span>(인)</span></div></div>
</div>
</div>`})}const ns=6e4,X="__contractListSocketHandlers__";function as(){const e=new Date,s=e.getFullYear(),n=String(e.getMonth()+1).padStart(2,"0"),o=String(e.getDate()).padStart(2,"0");return`${s}-${n}-${o}`}const os=Ye()(Ge((e,s)=>({contracts:[],hydratedAt:null,isLoading:!1,error:null,hydrate:async n=>{const{hydratedAt:o,isLoading:t}=s();if(!t&&!(!(n!=null&&n.force)&&o&&Date.now()-o<ns)){e({isLoading:!0,error:null});try{const d=await He();e({contracts:d,hydratedAt:Date.now(),isLoading:!1,error:null}),s().runAutoStatusTransitions()}catch(d){e({isLoading:!1,error:d instanceof Error?d.message:"계약 목록을 불러오지 못했습니다."})}}},setStatus:async(n,o)=>{const t=s().contracts.find(d=>d.id===n);if(t){e(d=>({contracts:d.contracts.map(r=>r.id===n?{...r,status:o}:r)}));try{const d=await he(n,o);e(r=>({contracts:r.contracts.map(l=>l.id===n?d:l)}))}catch{throw e(d=>({contracts:d.contracts.map(r=>r.id===n?t:r)})),new Error("상태를 변경하지 못했어요. 잠시 후 다시 시도해 주세요.")}}},runAutoStatusTransitions:async()=>{const n=as(),o=[];for(const t of s().contracts)t.status==="completed"&&t.balanceDueDate&&t.balanceDueDate<n?o.push({id:t.id,status:"balanceDone"}):t.status==="scheduled"&&t.contractDate&&t.contractDate<n&&o.push({id:t.id,status:"completed"});o.length!==0&&(e(t=>({contracts:t.contracts.map(d=>{const r=o.find(l=>l.id===d.id);return r?{...d,status:r.status}:d})})),await Promise.allSettled(o.map(t=>he(t.id,t.status).catch(()=>{}))))},attachSocket:()=>{const n=Pe();if(!n)return;const o=n;if(o[X])return;const t=p=>{if(!p||typeof p!="object")return;const v=p;v.id&&s().upsertLocal(se(v))},d=p=>{if(!p||typeof p!="object")return;const v=p;v.id&&s().upsertLocal(se(v))},r=p=>{if(!p||typeof p!="object")return;const v=p.id;v&&s().removeLocal(v)},l=async p=>{if(!p||typeof p!="object")return;const v=p.contractId;if(v)try{const u=await(await Ve(()=>Promise.resolve().then(()=>Cs),void 0)).fetchContract(v);s().upsertLocal(se(u))}catch{}};n.on("contract:created",t),n.on("contract:updated",d),n.on("contract:deleted",r),n.on("confirmDoc:created",l),n.on("confirmDoc:updated",l),n.on("confirmDoc:deleted",l),o[X]={onCreated:t,onUpdated:d,onDeleted:r,onConfirmDocChanged:l}},detachSocket:()=>{const n=Pe();if(!n)return;const o=n,t=o[X];t&&(n.off("contract:created",t.onCreated),n.off("contract:updated",t.onUpdated),n.off("contract:deleted",t.onDeleted),n.off("confirmDoc:created",t.onConfirmDocChanged),n.off("confirmDoc:updated",t.onConfirmDocChanged),n.off("confirmDoc:deleted",t.onConfirmDocChanged),delete o[X])},upsertLocal:n=>e(o=>({contracts:o.contracts.some(t=>t.id===n.id)?o.contracts.map(t=>t.id===n.id?n:t):[n,...o.contracts]})),removeLocal:n=>e(o=>({contracts:o.contracts.filter(t=>t.id!==n)}))}),{name:"bubiseo-desktop-contract-list",storage:qe(()=>localStorage),partialize:e=>({contracts:e.contracts,hydratedAt:e.hydratedAt})})),ls=os;function ae(e,s,n,o){const t=(n||"").replace(/[^0-9]/g,""),d=t.length>=5?t:t.padStart(5,"0"),r=(o||"").replace(/[^0-9]/g,"");let l;if(r.length>=8)l=r.slice(0,8);else{const h=new Date,k=A=>String(A).padStart(2,"0");l=`${h.getFullYear()}${k(h.getMonth()+1)}${k(h.getDate())}`}const p=s==="commercial"?"B":"A",b=ls.getState().contracts.filter(h=>h.category===s).slice().sort((h,k)=>{const A=h.createdAt??"",N=k.createdAt??"";return A.localeCompare(N)}),u=b.findIndex(h=>h.id===e),y=u<0?b.length+1:u+1,x=String(y).padStart(4,"0");return`${d}-${l}-${p}${x}`}function Ms(e,s,n,o,t){const d=ae(e,s,o,t),r=d.match(/[AB](\d{4})$/),l=r?parseInt(r[1],10):1;return`${d}-${n==="commercial"?"S":"J"}${l}`}function _e(){const e=new Date,s=n=>String(n).padStart(2,"0");return`${e.getFullYear()}.${s(e.getMonth()+1)}.${s(e.getDate())} ${s(e.getHours())}:${s(e.getMinutes())}`}const i=P,f=e=>{const s=e==null?"":String(e).trim();return s&&s!=="내용없음"?i(s):"-"},is={서울:"서울특별시",부산:"부산광역시",대구:"대구광역시",인천:"인천광역시",광주:"광주광역시",대전:"대전광역시",울산:"울산광역시",세종:"세종특별자치시",경기:"경기도",강원:"강원특별자치도",충북:"충청북도",충남:"충청남도",전북:"전북특별자치도",전남:"전라남도",경북:"경상북도",경남:"경상남도",제주:"제주특별자치도"};function E(e){const s=e==null?"":String(e).trim();if(!s)return s;for(const[n,o]of Object.entries(is)){if(s.startsWith(o))return s;if(s===n)return o;if(s.startsWith(n+" "))return o+s.slice(n.length)}return s}function ze(e){const s=e==null?"":String(e).trim();return s?/^[\d.]+$/.test(s)?`${s}평`:s:""}const rs=`
.page{display:flex;flex-direction:column;gap:1mm;font-size:7pt;line-height:1.3;color:${a.ink};}
${Le(".page","5mm","7mm")}

.doc-header{background:transparent;border:none;padding:0;page-break-inside:avoid;margin-bottom:1.5mm;padding-bottom:3px;position:relative;}
.doc-header::after{content:'';display:block;height:2px;margin-top:2px;background:${a.accent};border-radius:1px;}
.doc-title{font-size:14pt;font-weight:600;text-align:center;letter-spacing:-0.4px;color:${a.ink};}
.doc-subtitle{text-align:center;font-size:7.5pt;font-weight:600;color:${a.ink};margin-top:2px;letter-spacing:0.3px;}

.doc-section{background:transparent;border:none;padding:0;margin-bottom:1mm;}
/* 2026-05-23 [사용자 명시] 부동산의 표시(왼쪽) + 계약 내용(오른쪽) 가로 2단 묶음. */
/* align-items:stretch (default) — 두 섹션 같은 높이. */
.top-grid{display:grid;grid-template-columns:1fr 1fr;gap:3mm;margin-bottom:1mm;}
.top-grid .doc-section{margin-bottom:0;display:flex;flex-direction:column;}
/* 2026-05-23 [사용자 명시] 좁은 폭 안에서 3 label-value pair (= 6 cells) 한 줄 배치. */
.top-grid .field-grid-3col{grid-template-columns:minmax(34px,1fr) minmax(0,1fr) minmax(34px,1fr) minmax(0,1fr) minmax(34px,1fr) minmax(0,1fr);}
/* full-width 셀 라벨 경계를 3-pair 행과 정렬 (1fr + 5fr ≈ 16.7%). */
.top-grid .field.field-full{grid-template-columns:minmax(34px,1fr) minmax(0,5fr);}
/* 2026-05-23 [사용자 명시] field-wide — 3-pair 행에서 2 pair 폭 차지. */
.field.field-wide{grid-column:span 4;display:grid;grid-template-columns:minmax(34px,1fr) minmax(0,3fr);}
.field.field-wide > .field-label{border-right:1px solid ${a.line};border-bottom:1px solid ${a.line};}
.field.field-wide > .field-value{border-right:1px solid ${a.line};border-bottom:1px solid ${a.line};}
/* 좌/우 section 행 수가 달라도 마지막 행이 늘어나 좌우 끝선 정렬. */
.top-grid .field-grid{flex:1;grid-auto-rows:minmax(0,1fr);}
.top-grid .field-grid > .field > .field-label,.top-grid .field-grid > .field > .field-value{align-items:center;}
/* 필수/자동 표시 점(dot) 전부 제거. */
.req-dot,.auto-dot{display:none;}
.section-head{display:flex;align-items:center;gap:5px;margin-bottom:2px;padding-bottom:2px;border-bottom:1px solid ${a.line};}
.section-bar{width:3px;height:9px;background:${a.accent};border-radius:2px;display:inline-block;flex-shrink:0;}
.section-no{font-size:6.5pt;font-weight:600;color:${a.ink};white-space:nowrap;}
.section-title{font-size:8.5pt;font-weight:600;color:${a.ink};letter-spacing:-0.3px;}

.field-grid{display:grid;gap:0;padding:0;border:1px solid ${a.line};border-radius:6px;overflow:hidden;border-collapse:separate;width:100%;background:${a.paper};}
/* 2026-05-23 [사용자 명시] 2col 라벨 폭 28% 고정 — auto sizing 시 full 셀과 경계 어긋남. */
.field-grid-2col{grid-template-columns:28% 72%;}
/* 2026-05-23 [사용자 명시] 3col 라벨 폭 확장 — 6~7자 라벨('토지거래허가/지구단위계획/계약갱신요구권/최우선변제금') 잘림 방지. */
.field-grid-3col{grid-template-columns:minmax(70px,1.3fr) minmax(0,2fr) minmax(70px,1.3fr) minmax(0,2fr) minmax(70px,1.3fr) minmax(0,2fr);}
.field{background:${a.paper};border:none;padding:0;min-height:0;display:contents;}
.field.field-full{grid-column:1/-1;display:grid;grid-template-columns:minmax(56px,1fr) minmax(0,6fr);}
/* 2026-05-23 [사용자 명시] 컨텍스트별 full 셀 라벨 경계 정렬 — 라벨 세로선이 일반 셀과 일치하도록. */
.field-grid-3col > .field.field-full{grid-template-columns:minmax(70px,1.3fr) minmax(0,8.6fr);}
.field-grid-2col > .field.field-full{grid-template-columns:28% 72%;}
/* 2026-05-23 [사용자 명시] top-grid 컨텍스트 우선 — 부동산표시/계약내용 좌·우 정렬용. */
.top-grid .field-grid-3col > .field.field-full{grid-template-columns:minmax(34px,1fr) minmax(0,5fr);}
/* 2026-05-23 [사용자 명시] 짧은 값(날짜·금액)용 컴팩트 2-pair 그리드.
   라벨은 75px 고정 (7자 한글 ≤ 75px) → 라벨 칸 짧고 값 칸 1fr 로 길게. */
.field-grid-compact{grid-template-columns:75px 1fr 75px 1fr;}
.field-grid-compact > .field.field-full{grid-template-columns:75px 1fr;}
/* 2026-05-23 [사용자 명시] 표 폰트 — 특약사항 박스(7pt) 와 동일 크기로 통일. */
.field-label{font-size:7pt;font-weight:600;color:${a.ink};background:${a.cell};padding:2.5px 5px;border-right:1px solid ${a.line};border-bottom:1px solid ${a.line};display:flex;align-items:center;gap:2px;word-break:keep-all;min-width:0;line-height:1.25;}
.field-value{font-size:7pt;font-weight:400;color:${a.ink};background:${a.paper};padding:2.5px 5px;border-right:1px solid ${a.line};border-bottom:1px solid ${a.line};display:flex;align-items:center;word-break:break-all;overflow-wrap:anywhere;min-width:0;line-height:1.25;}
.field-grid > .field:last-child .field-value{border-right:none;}
/* 2026-05-23 [사용자 명시] full-width 셀 하단 구분선 추가. */
.field.field-full > .field-label{border-right:1px solid ${a.line};border-bottom:1px solid ${a.line};}
.field.field-full > .field-value{border-right:none;border-bottom:1px solid ${a.line};}
.field-money{font-weight:600;color:${a.ink};white-space:nowrap;word-break:keep-all;overflow-wrap:normal;letter-spacing:-0.3px;}
/* 2026-05-23 [사용자 명시] 값 중앙정렬 — 작성일자(도장 위치). */
.field-value-centered{justify-content:center;text-align:center;}
/* 2026-05-23 [사용자 명시] 확인설명서 유의사항 박스 + 진술문 + 작성일자. */
.notice-box{border:1px solid ${a.line};border-radius:6px;overflow:hidden;background:${a.paper};margin-bottom:1.5mm;}
.notice-header{background:${a.cell};color:${a.ink};font-size:7.5pt;font-weight:600;padding:3px 8px;text-align:center;border-bottom:1px solid ${a.line};letter-spacing:-0.2px;}
.notice-row{display:grid;grid-template-columns:90px 1fr;border-bottom:1px solid ${a.line};}
.notice-row:last-child{border-bottom:none;}
.notice-label{background:${a.cell};color:${a.ink};font-size:7pt;font-weight:600;padding:5px 6px;display:flex;align-items:center;justify-content:center;text-align:center;border-right:1px solid ${a.line};line-height:1.3;}
.notice-text{font-size:6.5pt;color:${a.ink};padding:5px 8px;line-height:1.45;word-break:keep-all;}
.confirm-statement-section{margin-top:1.5mm;}
.confirm-statement{font-size:6.5pt;color:${a.ink};line-height:1.45;padding:6px 8px;background:${a.paper};border:1px solid ${a.line};border-radius:6px;word-break:keep-all;}
.confirm-sign-date{margin-top:2mm;text-align:center;font-size:8pt;font-weight:600;color:${a.ink};letter-spacing:-0.2px;}
/* 2026-05-23 [사용자 명시] 확인설명서 4번 임대차 확인사항 하단 서명행 + ※ 노트. */
.sec4-sign-row{margin-top:1mm;border:1px solid ${a.line};border-radius:6px;background:${a.paper};padding:5px 7px;}
.sec4-sign-prefix{font-size:6.5pt;color:${a.ink};font-weight:400;margin-bottom:4px;line-height:1.4;}
.sec4-sign-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:4px;}
.sec4-sign-cell{display:flex;justify-content:space-between;align-items:center;border:1px solid ${a.line};border-radius:4px;padding:3px 5px;background:${a.cell};}
.sec4-sign-role{font-size:6.5pt;font-weight:600;color:${a.ink};}
.sec4-sign-line{font-size:6pt;color:${a.ink};}
.sec4-notes{list-style:none;padding:0;margin:1.5mm 0 0;font-size:6pt;color:${a.ink};line-height:1.5;}
.sec4-notes li{position:relative;padding-left:8px;margin-bottom:2px;}
.sec4-notes li::before{content:'※';position:absolute;left:0;color:${a.ink};font-weight:600;}
/* 2026-05-23 [사용자 명시] 11/12번 라디오 칩 — 선택만 검정 채움, 선택 안 된 것은 흐린 회색. */
.r-opt{display:inline-flex;align-items:center;gap:3px;margin-right:8px;font-size:6.5pt;line-height:1.3;white-space:nowrap;}
.r-opt-on{color:${a.ink};font-weight:600;}
.r-opt-off{color:${a.inkOff};font-weight:400;}
.r-mark{display:inline-block;width:8px;height:8px;border-radius:50%;border:1px solid ${a.inkOff};flex-shrink:0;}
.r-mark-on{background:${a.ink};border-color:${a.ink};box-shadow:inset 0 0 0 1.5px ${a.paper};}
.r-detail{margin-left:3px;color:${a.ink};font-weight:600;}
/* 2026-05-23 [사용자 명시] 섹션별 안내 노트 — 소방·현장안내 등. */
.sec-notes{list-style:none;padding:0;margin:1mm 0 0;font-size:6pt;color:${a.ink};line-height:1.5;}
.sec-notes li{position:relative;padding-left:8px;margin-bottom:1px;}
.sec-notes li::before{content:'※';position:absolute;left:0;color:${a.ink};font-weight:600;}
/* 2026-05-23 [사용자 명시] 서명·날인 — 3카드 가로 → 세로 3행 (한 줄당 한 역할). */
.sign-grid-stack{display:flex;flex-direction:column;gap:4px;}
.sign-row-card{display:flex;align-items:center;gap:8px;border:1px solid ${a.line};border-radius:6px;background:${a.paper};padding:5px 8px;font-size:7pt;}
.sign-row-role{font-size:7.5pt;font-weight:600;color:${a.ink};flex-shrink:0;min-width:60px;padding-right:6px;border-right:1px solid ${a.line};}
.sign-row-cells{display:flex;align-items:center;gap:10px;flex:1;min-width:0;flex-wrap:wrap;}
.sign-row-kv{display:inline-flex;gap:3px;font-size:7pt;}
.sign-row-kl{color:${a.ink};font-weight:600;}
.sign-row-kv-val{color:${a.ink};font-weight:400;}
.sign-row-seal{font-size:6.5pt;color:${a.ink};flex-shrink:0;padding-left:6px;border-left:1px dashed ${a.line};}
.req-dot{width:4px;height:4px;background:#D02B3F;border-radius:999px;display:inline-block;flex-shrink:0;}
.auto-dot{width:4px;height:4px;background:#0A7D6E;border-radius:999px;display:inline-block;flex-shrink:0;}

.clause-text{font-size:7pt;color:${a.ink};line-height:1.4;padding:2px 0 2px 6px;text-align:justify;}
.clause-text strong{color:${a.ink};font-weight:600;}

.special-box{background:${a.paper};border:1px solid ${a.line};border-radius:6px;padding:4px 8px;font-size:7pt;line-height:1.4;white-space:pre-wrap;color:${a.ink};}

.sign-grid{display:grid;grid-template-columns:1fr 1fr;gap:4px;}
.sign-grid-3{grid-template-columns:1fr 1fr 1fr;}
.sign-card{background:${a.paper};border:1px solid ${a.line};border-radius:6px;padding:4px 6px;min-width:0;}

.sign-row-list{display:flex;flex-direction:column;gap:0;border:1px solid ${a.line};border-radius:6px;overflow:hidden;}
.sign-row-card{display:flex;align-items:center;gap:6px;padding:3px 8px;font-size:7.5pt;border-bottom:1px solid ${a.line};}
.sign-row-card:last-child{border-bottom:none;}
.sr-label{font-weight:600;color:${a.ink};min-width:72px;flex-shrink:0;font-size:7.5pt;letter-spacing:0.2px;}
.sr-name{flex:1;font-weight:600;color:${a.ink};font-size:7.5pt;word-break:keep-all;overflow-wrap:break-word;}
.sr-seal{color:${a.ink};font-size:7pt;white-space:nowrap;flex-shrink:0;}

.party-block{display:flex;flex-direction:column;border:1px solid ${a.line};border-radius:6px;overflow:hidden;background:${a.paper};}
.party-row{display:grid;border-bottom:1px solid ${a.line};}
.party-row:last-child{border-bottom:none;}
.party-row-3{grid-template-columns:1fr 1fr 1fr;}
.party-row-2{grid-template-columns:1fr 1fr;}
.party-row-addr{display:flex;align-items:stretch;}
/* 2026-05-23 [사용자 명시] 임대인/임차인/공인중개사 셀 텍스트 폰트 키움. */
.party-cell{display:flex;align-items:center;padding:3.5px 7px;gap:5px;border-right:1px solid ${a.line};min-height:0;font-size:8pt;min-width:0;line-height:1.35;background:${a.paper};}
.party-cell:last-child{border-right:none;}
.party-cell-flex{flex:1;min-width:0;border-right:1px solid ${a.line};}
.party-lbl{font-weight:600;color:${a.ink};font-size:7.5pt;flex-shrink:0;letter-spacing:0.1px;}
.party-val{color:${a.ink};font-weight:400;flex:1;min-width:0;word-break:break-all;overflow-wrap:anywhere;font-size:8pt;}
.party-seal{padding:3.5px 12px;font-size:7.5pt;color:${a.ink};white-space:nowrap;display:flex;align-items:flex-end;gap:4px;flex-shrink:0;width:33.3334%;box-sizing:border-box;background:${a.cell};}
.seal-line{flex:1;min-width:0;height:1.1em;border-bottom:1px solid ${a.ink};}
.sign-card-title{font-size:7.5pt;font-weight:600;color:${a.ink};margin-bottom:2px;padding-bottom:1px;border-bottom:1px solid ${a.line};text-align:center;}
.sign-kv{display:flex;gap:3px;font-size:7pt;padding:0;color:${a.ink};}
.sign-kl{color:${a.ink};font-weight:600;min-width:42px;flex-shrink:0;}
.sign-vl{color:${a.ink};flex:1;min-width:0;font-weight:400;}
.sign-line{margin-top:2px;border:none;border-top:1px dashed ${a.line};border-radius:0;padding:1.5px 0 0;display:flex;justify-content:space-between;align-items:center;gap:3px;font-size:7pt;background:transparent;}
.sign-line .name{font-weight:600;color:${a.ink};}
.sign-line .seal{color:${a.ink};}

.clauses-inline{border:1px solid ${a.line};border-radius:6px;padding:5px 8px;font-size:6.8pt;line-height:1.45;color:${a.ink};background:${a.paper};}
.clauses-inline p{font-size:6.8pt;line-height:1.45;padding:1.5px 0;text-align:justify;}
.clauses-inline p strong{font-weight:600;color:${a.ink};}

.doc-brand{display:none;}
.doc-footer{background:transparent;color:${a.ink};padding:2px 0;border-radius:0;display:flex;justify-content:space-between;align-items:center;gap:6px;font-size:6pt;font-weight:400;page-break-inside:avoid;margin-top:1.5mm;border-top:1px solid ${a.line};}
.footer-left{display:flex;flex-direction:row;gap:6px;min-width:0;flex-wrap:wrap;}
.footer-notice{font-size:6pt;font-weight:400;color:${a.ink};}
.footer-meta{margin-top:0;padding-top:0;border-top:none;color:${a.ink};font-weight:600;}
.footer-right{font-size:6pt;font-weight:600;white-space:nowrap;color:${a.ink};}
`;function c(e){const{label:s,value:n,kind:o="default",money:t=!1,full:d=!1,wide:r=!1,suffix:l="",centered:p=!1,html:v=!1}=e,b=o==="default"?"":` ${o}`,u=d?" field-full":"",y=r?" field-wide":"",x=p?" field-value-centered":"",h=t?`field-value field-money${x}`:`field-value${x}`,k=v?typeof n=="string"&&n.length>0?n:"-":f(n),A=l&&k&&k!=="-"&&!k.endsWith(l)?`${k}${l}`:k;return`<div class="field${b}${u}${y}"><div class="field-label">${i(s)}</div><div class="${h}">${A}</div></div>`}function $(e,s){return`<div class="section-head"><span class="section-bar"></span>${e?`<span class="section-no">${i(e)}</span>`:""}<span class="section-title">${i(s)}</span></div>`}const cs=`
@page std-lease{size:A4 portrait;margin:10mm 12mm;}
.std-sheet{page:std-lease;}
${Le(".std-sheet","10mm","12mm")}
.std-page{zoom:0.93;display:flex;flex-direction:column;gap:4mm;font-size:8.5pt;line-height:1.55;color:${a.ink};}
.std-note-top{font-size:7.5pt;color:${a.ink};text-align:left;}
.std-title{font-size:18pt;font-weight:600;text-align:center;letter-spacing:8px;margin:4mm 0 2mm;color:${a.ink};}
.std-meta{font-size:7.5pt;color:${a.ink};text-align:right;margin-bottom:2mm;}
.std-intro{font-size:8.5pt;color:${a.ink};line-height:1.55;margin-bottom:1mm;}
.std-intro-note{font-size:7.5pt;color:${a.ink};line-height:1.5;margin-bottom:3mm;padding-left:10px;}
.std-date-line{text-align:right;font-size:8.5pt;font-weight:600;margin-bottom:2mm;}
.std-section-title{font-size:10pt;font-weight:600;color:${a.ink};margin:3mm 0 1.5mm;}
.std-tbl{width:100%;border-collapse:collapse;border:1.5px solid ${a.ink};}
.std-tbl th, .std-tbl td{border:1px solid ${a.ink};padding:4px 6px;font-size:8pt;color:${a.ink};vertical-align:middle;}
.std-tbl th{background:${a.cell};font-weight:600;text-align:center;}
.std-tbl td.lbl{background:${a.cell};font-weight:600;text-align:center;width:90px;}
.std-tbl td.val{background:${a.paper};}
.std-tbl td.sub{background:${a.cell};font-weight:600;text-align:center;}
.std-tbl .seal{text-align:right;font-size:7.5pt;color:${a.ink};}
.std-tbl .lbl-narrow{width:64px;}
.std-clause{font-size:8.5pt;color:${a.ink};line-height:1.55;margin-bottom:1.5mm;text-indent:0;}
.std-clause-head{font-weight:600;color:${a.ink};}
.std-clause ol{padding-left:18px;margin-top:1px;}
.std-clause li{margin-bottom:0.5mm;}
.std-checkbox-row{display:flex;flex-wrap:wrap;gap:8px;font-size:8pt;}
.std-checkbox{display:inline-flex;align-items:center;gap:2px;}
.std-frame{border:1.5px solid ${a.ink};padding:4mm;font-size:8pt;line-height:1.55;}
.std-emph{font-weight:600;}
.std-footer{margin-top:3mm;font-size:7pt;color:${a.ink};text-align:right;border-top:1px solid ${a.ink};padding-top:2mm;}
/* 2026-05-24 [사용자 명시] 표준계약서 표 하단 ※ 안내 노트. */
.std-foot-notes{list-style:none;padding:0;margin:1.5mm 0 0;font-size:7pt;color:${a.ink};line-height:1.5;}
.std-foot-notes li{position:relative;padding-left:9px;margin-bottom:1px;}
.std-foot-notes li::before{content:'※';position:absolute;left:0;color:${a.ink};font-weight:600;}
`;function ds(e){const{title:s,bodyHtml:n,documentNumber:o}=e,t=_e();return ne({title:s,css:cs,body:`<div class="std-sheet"><div class="std-page">
${n}
<div class="std-footer">문서번호 ${i(o)} · 생성 ${i(t)}</div>
</div></div>`})}function Ee(e){const{title:s,subtitle:n,documentNumber:o,bodyHtml:t}=e,d=_e();return ne({title:s,css:rs,body:`<div class="page">
<header class="doc-header">
<h1 class="doc-title">${i(s)}</h1>
<p class="doc-subtitle">${i(n)}</p>
</header>
${t}
<footer class="doc-footer"><div class="footer-left"><div class="footer-notice">국토교통부 표준서식에 의해 제작되었음을 알립니다.</div><div class="footer-notice">[시행 2024. 7. 10.] [국토교통부령 제1349호, 2024. 7. 2., 일부개정]</div><div class="footer-meta">문서번호: ${i(o)}</div><div>생성일시: ${i(d)}</div></div><div class="footer-right">Page 1 / 1</div></footer>
</div>`})}const te=(e,s,n)=>{const o=typeof e=="string"?e:"",t=typeof s=="string"?s:"",d=typeof n=="string"?n:"",r=o.replace(/\D/g,"").slice(0,6),l=t.replace(/\D/g,"").slice(0,7);if(r||l)return`${r}${r&&l?"-":""}${l}`;const p=d.replace(/\D/g,"");return p?p.length<=6?p:`${p.slice(0,6)}-${p.slice(6,13)}`:""},Ne=e=>{if(!e)return{front:"",back:""};const s=e.trim();if(!s)return{front:"",back:""};if(s.includes("-")){const[o,t]=s.split("-");return{front:(o??"").trim(),back:(t??"").trim()}}const n=s.replace(/\D/g,"");return n.length>=13?{front:n.slice(0,6),back:n.slice(6,13)}:n.length>=6?{front:n.slice(0,6),back:""}:{front:s,back:""}},xe=e=>{const s=e.termStartDate||e.deliveryDate||e.balanceDate||"",n=parseInt(String(e.termYears??"2"),10)||2,o=String(e.termMonths??"").trim(),t=e.termEndDate||"";return{termStart:s,termEnd:(()=>{if(t)return t;if(!s)return"";const r=new Date(s);if(isNaN(r.getTime()))return"";r.setFullYear(r.getFullYear()+n);const l=p=>String(p).padStart(2,"0");return`${r.getFullYear()}-${l(r.getMonth()+1)}-${l(r.getDate())}`})(),termMonths:o||String(n*12)}},Ce=P;function ps(e){const s=w=>{if(Array.isArray(w)){const B=w.map(F=>typeof F=="string"?F.trim():"").filter(Boolean).join(`
`);return B?Ce(B):""}const S=typeof w=="string"?w.trim():"";return S?Ce(S):""},n=e.deposit&&String(e.deposit).trim()||e.mainAmount||"",o=e.contractId||"",t=e.signDate||"",d=ae(o,"standard",e.agentRegNo||"",t),r=w=>{const S=(w??"").replace(/[^0-9]/g,"");return S.length>=8?{y:S.slice(0,4),m:S.slice(4,6),dd:S.slice(6,8)}:{y:"",m:"",dd:""}},l=r(t),p=xe(e),v=r(p.termStart),b=r(p.termEnd),u=r(String(e.balanceDate??e.moveInDate??"")),y=r(String(e.middleDate??"")),x=r(String(e.balanceDate??"")),h=`
<div class="std-section-title">1. 계약 당사자</div>
<table class="std-tbl">
<tr><td class="lbl" rowspan="4">임대사업자</td><td class="lbl">성명(법인명)</td><td class="val" colspan="3">${s(e.lessorName)} <span class="seal">(서명 또는 인)</span></td></tr>
<tr><td class="lbl">주소<br/>(대표 사무소 소재지)</td><td class="val" colspan="3">${s(e.lessorAddress)}</td></tr>
<tr><td class="lbl">주민등록번호<br/>(사업자등록번호)</td><td class="val">${s(e.lessorSsn||(e.lessorSsn1&&e.lessorSsn2?`${e.lessorSsn1}-${e.lessorSsn2}`:""))}</td><td class="lbl lbl-narrow">전화번호</td><td class="val">${s(e.lessorPhone)}</td></tr>
<tr><td class="lbl">임대사업자<br/>등록번호</td><td class="val" colspan="3">${s(e.lessorBizRegNo)}</td></tr>
<tr><td class="lbl" rowspan="3">임차인</td><td class="lbl">성명(법인명)</td><td class="val" colspan="3">${s(e.lesseeName)} <span class="seal">(서명 또는 인)</span></td></tr>
<tr><td class="lbl">주소</td><td class="val" colspan="3">${s(e.lesseeAddress)}</td></tr>
<tr><td class="lbl">주민등록번호</td><td class="val">${s(e.lesseeSsn||(e.lesseeSsn1&&e.lesseeSsn2?`${e.lesseeSsn1}-${e.lesseeSsn2}`:""))}</td><td class="lbl lbl-narrow">전화번호</td><td class="val">${s(e.lesseePhone)}</td></tr>
</table>`,k=`
<div class="std-section-title">2. 공인중개사<span style="font-size:7.5pt;font-weight:400;"> (개업공인중개사가 계약서를 작성하는 경우 해당)</span></div>
<table class="std-tbl">
<tr><td class="lbl" rowspan="5">개업공인<br/>중개사</td><td class="lbl">사무소 명칭</td><td class="val" colspan="3">${s(e.agentOfficeName)}</td></tr>
<tr><td class="lbl">대표자 성명</td><td class="val" colspan="3">${s(e.agentRep)} <span class="seal">(서명 및 인)</span></td></tr>
<tr><td class="lbl">사무소 소재지</td><td class="val" colspan="3">${s(e.agentAddress)}</td></tr>
<tr><td class="lbl">등록번호</td><td class="val">${s(e.agentRegNo)}</td><td class="lbl lbl-narrow">전화번호</td><td class="val">${s(e.agentPhone)}</td></tr>
<tr><td class="lbl">소속공인중개사</td><td class="val" colspan="3">${s(e.staffName)} <span class="seal">(서명 및 인)</span></td></tr>
</table>`,A=`
<div class="std-frame" style="margin-top:3mm;">
<div style="font-weight:600;">◈ 해당 주택은 「민간임대주택에 관한 특별법」(이하 "법"이라 한다)에 따라 <span class="std-emph">임대사업자가 시장·군수·구청장에게 등록한 민간임대주택으로서 다음과 같은 사항이 적용</span>됩니다.</div>
<div style="margin-top:2mm;">○ <span class="std-emph">임대의무기간 중 민간임대주택 양도 제한</span>(법 제43조)</div>
<div style="padding-left:10px;">- 임대사업자는 「민간임대주택에 관한 특별법 시행령」 제34조제1항에 따른 시점부터 법 제2조제4호 또는 제5호에 따른 기간 동안 해당 민간임대주택을 계속 임대해야 하며, 그 기간 동안에는 양도가 제한됩니다.</div>
<div style="margin-top:1mm;">○ <span class="std-emph">임대료 증액 제한</span>(법 제44조)</div>
<div style="padding-left:10px;">- 임대사업자는 해당 민간임대주택에 대한 임대료의 증액을 청구하는 경우 <span class="std-emph">임대료의 5퍼센트의 범위에서</span> 주거비 물가지수, 인근 지역의 임대료 변동률, 임대주택 세대수 등을 고려하여 「민간임대주택에 관한 특별법 시행령」 제34조의2에 따른 증액비율을 초과하여 청구할 수 없습니다. 또한, 임대차계약 또는 임대료 증액이 있은 후 1년 이내에는 그 임대료를 증액할 수 없습니다.</div>
<div style="margin-top:1mm;">○ <span class="std-emph">임대차계약의 해제·해지 등 제한</span>(법 제45조)</div>
<div style="padding-left:10px;">- 임대사업자는 임차인이 의무를 위반하거나 임대차를 계속하기 어려운 경우 등의 사유가 발생한 때를 제외하고는 임대사업자로 등록되어 있는 기간 동안 임대차계약을 해제 또는 해지하거나 재계약을 거절할 수 없습니다.</div>
<div style="padding-left:10px;">- 임차인은 시장·군수·구청장이 임대주택에 거주하기 곤란한 정도의 중대한 하자가 있다고 인정하는 경우 등에 해당하면 <span class="std-emph">임대의무기간 동안에도 임대차계약을 해제·해지할 수 있습니다.</span></div>
</div>`,N=e.leaseDurationSubYears,R=w=>w==="공공지원"||w==="장기일반"?`(${N==="10년"?"☑":"□"}10년, ${N==="8년"?"☑":"□"}8년)`:w==="단기"?`(${N==="6년"?"☑":"□"}6년, ${N==="4년"?"☑":"□"}4년)`:"",_=e,z={zero:!!_.bondReasonZero,priority:!!_.bondReasonPriority,pub:!!_.bondReasonPublic,tenant:!!_.bondReasonTenantBond},K=`
<div class="std-section-title" style="margin-top:4mm;">3. 민간임대주택의 표시</div>
<table class="std-tbl">
<tr><td class="lbl">주택 소재지</td><td class="val" colspan="5">${s(e.address)}</td></tr>
<tr><td class="lbl">주택 유형</td><td class="val" colspan="5">아파트[${e.housingType==="아파트"?"✓":" "}] 연립주택[${e.housingType==="연립주택"?"✓":" "}] 다세대주택[${e.housingType==="다세대주택"?"✓":" "}] 다가구주택[${e.housingType==="다가구주택"?"✓":" "}] 그 밖의 주택[${e.housingType&&!["아파트","연립주택","다세대주택","다가구주택"].includes(String(e.housingType))?"✓":" "}]</td></tr>
<tr><td class="lbl" rowspan="2">민간임대주택<br/>면적(㎡)</td><td class="lbl">주거전용면적</td><td class="lbl" colspan="2">공용면적</td><td class="lbl">합계</td><td class="val"></td></tr>
<tr><td class="val">${s(e.exclusiveArea)}</td><td class="val sub">주거공용면적<br/>${s(e.commonArea)}</td><td class="val sub">그 밖의 공용면적(지하주차장 면적을 포함한다)<br/>${s(e.otherCommonArea)}</td><td class="val">${s(e.totalArea)}</td><td class="val"></td></tr>
<tr><td class="lbl">민간임대주택의<br/>종류</td><td class="val" colspan="5">공공지원[${e.leaseDurationCategory==="공공지원"?"✓":" "}] ${R("공공지원")} &nbsp; 장기일반[${e.leaseDurationCategory==="장기일반"?"✓":" "}] ${R("장기일반")} &nbsp; 단기[${e.leaseDurationCategory==="단기"?"✓":" "}] ${R("단기")} &nbsp; 그 밖의 유형[${e.leaseDurationCategory==="그 밖의 유형"?"✓":" "}] &nbsp;&nbsp; <span class="std-emph">건설[${e.buildOrPurchase==="건설"?"✓":" "}] 매입[${e.buildOrPurchase==="매입"?"✓":" "}]</span> &nbsp;&nbsp; 임대의무기간: ${s(e.leaseDurationYears)}년 &nbsp;&nbsp; 임대의무기간 개시일: ${s(e.obligationStartDate||p.termStart)}</td></tr>
<tr><td class="lbl">100세대 이상 민간<br/>임대주택단지 해당<br/>여부</td><td class="val" colspan="5">예[${e.is100Households?"✓":" "}] &nbsp; 아니오[${e.is100Households?" ":"✓"}] &nbsp;&nbsp; * 임대료 증액 시 「민간임대주택에 관한 특별법 시행령」 제34조의2제1호에 따른 기준 적용</td></tr>
<tr><td class="lbl">민간임대주택에<br/>딸린 부대시설·<br/>복리시설의 종류</td><td class="val" colspan="5">${s(e.attachedFacilities)}</td></tr>
<tr><td class="lbl">선순위 담보권 등<br/>권리관계 설정 여부</td><td class="val" colspan="5">없음[${e.hasPriorRights?" ":"✓"}] &nbsp; 있음[${e.hasPriorRights?"✓":" "}]${e.hasPriorRights?`<br/>&nbsp;&nbsp;- 선순위 담보권 등 권리관계의 종류: ${s(e.priorRightsType)}<br/>&nbsp;&nbsp;- 설정금액: ${s(e.priorRightsAmount)}<br/>&nbsp;&nbsp;- 설정일자: ${s(e.priorRightsDate)}`:""}</td></tr>
<tr><td class="lbl">국세·지방세<br/>체납사실</td><td class="val" colspan="5">없음[${e.hasTaxOverdue?" ":"✓"}] &nbsp; 있음[${e.hasTaxOverdue?"✓":" "}]</td></tr>
<tr><td class="lbl" rowspan="5">임대보증금<br/>보증 가입 여부</td><td class="lbl">보증가입 여부</td><td class="val" colspan="4">보증대상 금액 (또는 미가입 사유)</td></tr>
<tr><td class="val">가입 [${e.bondGuaranteeType==="full"?"✓":" "}]</td><td class="val" colspan="4">보증대상 금액: ${s(e.bondAmount)}</td></tr>
<tr><td class="val">일부가입 [${e.bondGuaranteeType==="partial"?"✓":" "}]</td><td class="val" colspan="4">보증대상 금액: ${s(e.bondPartialAmount)}</td></tr>
<tr><td class="val" rowspan="2">미가입 (법정사유) [${e.bondGuaranteeType==="none"?"✓":" "}]</td><td class="val" colspan="4">법에서 정한 미가입사유:<br/>&nbsp;&nbsp;${z.zero?"☑":"□"} 가입대상 금액이 0원 이하(법 제49조제3항)<br/>&nbsp;&nbsp;${z.priority?"☑":"□"} 임대보증금이 우선변제금 이하(법 제49조제7항제1호)<br/>&nbsp;&nbsp;${z.pub?"☑":"□"} 공공주택사업자와 임대차계약 체결(법 제49조제7항제2호)<br/>&nbsp;&nbsp;${z.tenant?"☑":"□"} 임차인이 전세보증금반환보증에 가입(법 제49조제7항제3호)</td></tr>
<tr><td class="val" colspan="4" style="font-size:7pt;">* 법에서 정한 미가입사유 외에 임대사업자가 임대보증금에 대한 보증에 가입하지 않은 경우 임차인은 계약을 해제 또는 해지할 수 있고 임차인은 그 해제 또는 해지로 인해 입은 손해의 배상을 청구할 수 있음${e.bondReason?`<br/>사유: ${s(e.bondReason)}`:""}</td></tr>
</table>
<ul class="std-foot-notes">
<li>주택 면적 산정방법은 「주택법 시행규칙」 제2조, 「주택공급에 관한 규칙」 제21조제5항에 따른다.</li>
<li>민간임대주택의 종류 중 그 밖의 유형에는 단기민간임대주택(3·4·5년), 준공공임대주택(8·10년), 기업형 임대주택 중 하나를 적는다.</li>
<li>선순위 담보권 등 권리관계는 제한물권, 압류·가압류·가처분 등에 관한 사항을 말한다.</li>
<li>임대보증금 보증가입대상 금액은 법 제49조에 따른다.</li>
<li>보증가입대상의 미가입 사유에는 선순위 담보권 설정금액과 임대보증금을 합한 금액이 주택가격의 100분의 60보다 적은 경우(법 제49조제3항), 가입 면제 대상(법 제49조제7항) 및 가입 거절 등의 사유를 적는다.</li>
</ul>`,H=`
<div class="std-section-title" style="margin-top:4mm;">4. 계약조건</div>
<div class="std-clause"><span class="std-clause-head">제1조(임대보증금, 월임대료 및 임대차 계약기간)</span> ① 임대사업자는 위 주택의 임대보증금, 월임대료(이하 "임대료"라 한다) 및 임대차 계약기간을 아래와 같이 정하여 임차인에게 임대한다.</div>
<table class="std-tbl">
<tr><th>구분</th><th>임대보증금</th><th>월임대료</th></tr>
<tr><td class="lbl">금액</td><td class="val">금 ${s(n)} 원정(₩ ${s(n)} )</td><td class="val">금 ${s(e.monthlyRent)} 원정(₩ ${s(e.monthlyRent)} )</td></tr>
<tr><td class="lbl">임대차<br/>계약기간</td><td class="val" colspan="2">${v.y||"____"}년 ${v.m||"__"}월 ${v.dd||"__"}일 ~ ${b.y||"____"}년 ${b.m||"__"}월 ${b.dd||"__"}일</td></tr>
</table>
<div class="std-clause" style="margin-top:1.5mm;">② 임차인은 제1항의 임대보증금에 대하여 아래와 같이 임대사업자에게 지급하기로 한다.</div>
<table class="std-tbl">
<tr><td class="lbl">계약금</td><td class="val">금 ${s(e.downPayment)} 원정(₩ ${s(e.downPayment)} )은 계약 시에 지급</td></tr>
<tr><td class="lbl">중도금</td><td class="val">금 ${s(e.middlePayment)} 원정(₩ ${s(e.middlePayment)} )은 ${y.y||"____"}년 ${y.m||"__"}월 ${y.dd||"__"}일에 지급</td></tr>
<tr><td class="lbl">잔금</td><td class="val">금 ${s(e.balance)} 원정(₩ ${s(e.balance)} )은 ${x.y||"____"}년 ${x.m||"__"}월 ${x.dd||"__"}일에 지급</td></tr>
<tr><td class="lbl">계좌번호</td><td class="val">은행 ${s(e.lessorBankName)} &nbsp;&nbsp; 계좌 ${s(e.lessorAccountNo)} &nbsp;&nbsp; 예금주 ${s(e.lessorAccountHolder||e.lessorName)}</td></tr>
</table>
<div class="std-clause" style="margin-top:2mm;">③ 임차인은 제1항과 제2항에 따른 임대보증금을 이자 없이 임대사업자에게 예치한다.</div>
<div class="std-clause">④ 임차인은 제2항의 지급기한까지 임대보증금을 내지 않는 경우에는 연체이율(연 ${s(e.lateInterestRate)} %)을 적용하여 계산한 연체료를 더하여 내야 한다. 이 경우 연체이율은 한국은행에서 발표하는 예금은행 주택담보대출의 가중평균 금리에 「은행법」에 따른 은행에서 가계자금 대출시장의 점유율이 최상위인 금융기관의 연체가산율을 합산한 이율을 고려하여 결정한다.</div>
<div class="std-clause">⑤ 임차인은 당월 분의 월임대료를 매달 말일까지 내야 하며, 이를 내지 않을 경우에는 연체된 금액에 제4항에 따른 연체이율을 적용하여 계산한 연체료를 더하여 내야 한다.</div>
<div class="std-clause"><span class="std-clause-head">제2조(민간임대주택의 입주일)</span> 위 주택의 입주일은 ${u.y||"____"}년 ${u.m||"__"}월 ${u.dd||"__"}일부터 ${b.y||"____"}년 ${b.m||"__"}월 ${b.dd||"__"}일까지로 한다.</div>
<div class="std-clause"><span class="std-clause-head">제3조(월임대료의 계산)</span> ① 임대기간이 월의 첫날부터 시작되지 않거나 월의 말일에 끝나지 않는 경우에는 그 임대기간이 시작되거나 끝나는 월의 임대료는 일할로 산정한다.</div>
<div class="std-clause">② 입주 월의 월임대료는 입주일(제3조에 따른 입주일을 정한 경우 입주일)부터 계산한다. 다만, 입주지정기간이 지나 입주하는 경우에는 입주지정기간이 끝난 날부터 계산한다.</div>
<div class="std-clause"><span class="std-clause-head">제4조(관리비와 사용료)</span> ① 임차인이 임대주택에 대한 관리비와 사용료를 임대사업자 또는 임대사업자가 지정한 관리주체에게 납부해야 하는 경우에는 특약으로 정하는 기한까지 내야 한다. 이때, 이를 내지 않을 경우에는 임대사업자는 임차인으로 하여금 연체된 금액에 대해 제1조제4항에 따른 연체이율을 적용하여 계산한 연체료를 더하여 내게 할 수 있다.</div>
<div class="std-clause">② 임대사업자는 관리비와 사용료를 부과·징수할 때에는 관리비와 사용료의 부과 명세서를 첨부하여 임차인에게 내게 할 것을 통지해야 한다. 이 경우 임대사업자는 관리비를 일반관리비, 청소비, 경비비, 소독비, 승강기 유지비, 난방비, 급탕비, 수선유지비, 지능형 홈네트워크 설비 유지비 외의 어떠한 명목으로도 관리비를 부과·징수할 수 없다.</div>
<div class="std-clause"><span class="std-clause-head">제5조(임대 조건 등의 변경)</span> 임대사업자와 임차인은 다음 각 호의 어느 하나에 해당할 경우에는 임대보증금, 임대료, 관리비, 사용료 등 모든 납부금액을 조정할 수 있다. 다만, <span class="std-emph">임대료의 조정은 법 및 「주택임대차보호법」을 위반해서는 안 되고, 법 제44조에 따라 임대료 증액청구는 임대료의 5퍼센트의 범위에서</span> 주거비 물가지수, 인근 지역의 임대료 변동률, 임대주택 세대수 등을 고려하여 「민간임대주택에 관한 특별법 시행령」 제34조의2에 따라 정하는 증액비율을 초과하여 청구할 수 없으며, <span class="std-emph">임대차계약 또는 임대료 증액이 있은 후 1년 이내에는 그 임대료를 증액하지 못한다.</span></div>
<div class="std-clause" style="padding-left:14px;">1. 물가, 그 밖의 경제적 여건의 변동이 있을 때<br/>2. 임대사업자가 임대하는 주택 상호간 또는 인근 유사지역의 민간임대주택 간에 임대조건의 균형상 조정할 필요가 있을 때<br/>3. 민간임대주택과 부대시설 및 부지의 가격에 현저한 변동이 있을 때</div>
<div class="std-clause" style="margin-top:2mm;"><span class="std-clause-head">제6조(임차인의 금지행위)</span> 임차인은 다음 각 호의 어느 하나에 해당하는 행위를 해서는 안 된다.</div>
<div class="std-clause" style="padding-left:14px;">1. 임대사업자의 동의 없이 <span class="std-emph">무단으로 임차권을 양도하거나 민간임대주택을 타인에게 전대하는 행위</span><br/>2. 민간임대주택 및 그 부대시설을 <span class="std-emph">개축·증축 또는 변경하거나 본래의 용도가 아닌 용도로 사용하는 행위</span><br/>3. 민간임대주택 및 그 부대시설을 <span class="std-emph">파손 또는 멸실하는 행위</span><br/>4. 민간임대주택 및 그 부대시설의 유지·관리를 위하여 <span class="std-emph">임대사업자와 임차인이 합의한 사항을 위반하는 행위</span></div>
<div class="std-clause"><span class="std-clause-head">제7조(임차인의 의무)</span> 임차인은 위 주택을 선량한 관리자로서 유지·관리해야 한다.</div>
<div class="std-clause"><span class="std-clause-head">제8조(민간임대주택 관리의 범위)</span> 위 주택의 <span class="std-emph">공용부분과 그 부대시설 및 복리시설은 임대사업자</span> 또는 임대사업자가 지정한 주택관리업자가 관리하고, 주택과 그 내부시설은 임차인이 관리한다.</div>
<div class="std-clause"><span class="std-clause-head">제9조(민간임대주택의 수선·유지 및 보수의 한계)</span> ① 위 주택의 보수와 수선은 임대사업자의 부담으로 하되, 위 주택의 전용부분과 그 내부시설물을 임차인이 파손하거나 멸실한 부분 또는 소모성 자재의 보수주기에서의 보수 또는 수선은 임차인의 부담으로 한다.</div>
<div class="std-clause"><span class="std-clause-head">제10조(임대차계약의 해제·해지 및 손해배상)</span> ① 임차인이 다음 각 호의 어느 하나에 해당하는 행위를 한 경우를 제외하고는 <span class="std-emph">임대사업자는 이 계약을 해제 또는 해지하거나 임대차계약의 갱신을 거절할 수 없다.</span></div>
<div class="std-clause" style="padding-left:14px;">1. 거짓이나 그 밖의 부정한 방법으로 민간임대주택을 임대받은 경우<br/>2. 월임대료를 3개월 이상 연속하여 연체한 경우<br/>3. 민간임대주택 및 그 부대시설을 임대사업자의 동의를 받지 않고 개축·증축 또는 변경한 경우<br/>4. 민간임대주택 및 그 부대시설을 고의로 파손 또는 멸실한 경우</div>
<div class="std-clause">② 임차인은 시장·군수·구청장이 민간임대주택에 거주하기 곤란할 정도의 중대한 하자가 있다고 인정하는 경우 등에 해당하면 이 계약을 해제 또는 해지할 수 있다.</div>
<div class="std-clause"><span class="std-clause-head">제11조(임대보증금의 반환)</span> 임차인이 임대사업자에게 예치한 <span class="std-emph">임대보증금은 이 계약이 끝나거나 해제 또는 해지되어 임차인이 임대사업자에게 주택을 명도(明渡)함과 동시에 반환한다.</span></div>
<div class="std-clause"><span class="std-clause-head">제12조(임대보증금 보증)</span> 임대사업자가 법 제49조에 따라 임대보증금 보증에 가입한 경우, <span class="std-emph">보증수수료의 75퍼센트는 임대사업자가 부담하고, 25퍼센트는 임차인이 부담한다.</span></div>
<div class="std-clause"><span class="std-clause-head">제13조(민간임대주택의 양도)</span> 임대사업자가 임대의무기간 경과 후 위 주택을 임차인에게 양도할 경우 위 주택의 양도 등에 관한 사항은 특약으로 정한 바에 따른다.</div>
<div class="std-clause"><span class="std-clause-head">제14조(임대사업자의 설명의무)</span> 임대사업자는 법 제48조에 따라 임대차계약을 체결하거나 월임대료를 임대보증금으로 전환하는 등 계약내용을 변경하는 경우에는 임대보증금 보증가입 사항, 권리관계, 임대의무기간 중 남아 있는 기간, 임대료 증액 제한, 해제·해지 사항 등을 임차인이 이해할 수 있도록 설명하고 설명의 근거자료를 제시해야 한다.</div>
<div class="std-frame" style="margin-top:2mm;display:flex;justify-content:space-between;align-items:center;">
<span>본인은 임대보증금 보증가입, 민간임대주택의 권리관계 등에 관한 주요 내용에 대한 설명을 듣고 이해했음.</span>
<span>임차인 성명: ${s(e.lesseeName)} <span class="seal" style="margin-left:8px;">(서명 또는 날인)</span></span>
</div>`,U=`
<div class="std-clause"><span class="std-clause-head">제15조(소송)</span> 이 계약에 관한 소송의 관할 법원은 임대사업자와 임차인이 합의하여 결정하는 관할 법원으로 하며, 임대사업자와 임차인 간에 합의가 이루어지지 않은 경우에는 위 주택 소재지를 관할하는 법원으로 한다.</div>
<div class="std-clause"><span class="std-clause-head">제16조(중개대상물의 확인·설명)</span> 개업공인중개사가 임대차계약서를 작성하는 경우에는 중개대상물 확인·설명서를 작성하고, 업무보증 관계증서(공제증서 등) 사본을 첨부하여 임대차계약을 체결할 때 임대사업자와 임차인에게 교부한다.</div>
<div class="std-clause"><span class="std-clause-head">제17조(특약)</span> 임대사업자와 임차인은 제1조부터 제15조까지에서 규정한 사항 외에 필요한 사항에 대해서는 따로 특약으로 정할 수 있다. 다만, 특약의 내용은 「약관의 규제에 관한 법률」을 위반해서는 안 된다.</div>
<div class="std-frame" style="margin-top:2mm;font-size:8pt;">
<div style="font-weight:600;">◈ 주택월세 소득공제 안내</div>
<div style="margin-top:1.5mm;">근로소득이 있는 거주자(일용근로자는 제외한다)는 「소득세법」 및 「조세특례제한법」에 따라 주택월세에 대한 소득공제를 받을 수 있으며, 자세한 사항은 국세청 콜센터(국번 없이 126)로 문의하시기 바랍니다.</div>
</div>`,Y=`
<div class="std-section-title" style="margin-top:4mm;">5. 개인정보의 제3자 제공 동의서</div>
<div class="std-clause">임대사업자는 「개인정보 보호법」 제17조에 따라 등록임대주택에 관한 정보제공에 필요한 개인정보를 아래와 같이 임차인의 동의를 받아 제공합니다. 이 경우 개인정보를 제공받은 자가 해당 개인정보를 이용하여 임차인에게 연락할 수 있음을 알려드립니다.</div>
<div class="std-clause" style="padding-left:8px;">
<div>■ 제공받는 자: 국토교통부장관, 시장·군수·구청장, 주택도시보증공사, 그 밖에 법 제49조에 따른 임대보증금에 대한 보증을 취급하는 보증회사</div>
<div>■ 제공 목적: <span class="std-emph">등록임대주택에 관한 정보(보증 정보 포함) 제공을 위한 우편물 발송, 문자 발송 등 지원 관련</span></div>
<div>■ 개인정보 항목: 성명, 주소, 전화번호</div>
<div>■ 보유 및 이용 기간: <span class="std-emph">임대차계약 종료일까지</span></div>
</div>
<div class="std-frame" style="margin-top:2mm;font-size:8.5pt;">
<div>본인의 개인정보의 제3자 제공에 동의합니다.</div>
<div style="margin-top:5mm;text-align:right;">임차인 성명: ${s(e.lesseeName)} <span class="seal" style="margin-left:8px;">(서명 또는 날인)</span></div>
<div style="margin-top:3mm;font-size:7.5pt;">※ 임차인은 개인정보 제공에 대한 동의를 거부할 수 있으며, 이 경우 임대사업자의 의무사항 준수 여부(임대보증금에 대한 보증가입 정보 포함), 임차인의 권리, 등록임대주택에 관한 정보 등의 제공이 제한되어 불이익을 받을 수 있습니다.</div>
</div>`,G=`
<div class="std-section-title" style="margin-top:4mm;">특약사항</div>
<div class="std-frame" style="min-height:24mm;font-size:8pt;white-space:pre-wrap;">${s(e.specialTerms)||""}</div>
<div class="std-date-line" style="margin-top:6mm;">계약일: ${l.y||"____"}년 ${l.m||"__"}월 ${l.dd||"__"}일</div>`,j=`
<div class="std-note-top">■ 민간임대주택에 관한 특별법 시행규칙 [별지 제24호서식] &lt;개정 2025. 10. 31.&gt;</div>
<div class="std-title">표 준 임 대 차 계 약 서</div>
<div class="std-intro">임대사업자와 임차인은 아래와 같이 임대차계약을 체결하고 이를 증명하기 위해 계약서 2통을 작성하여 임대사업자와 임차인이 각각 서명 또는 날인한 후 각각 1통씩 보관한다.</div>
<div class="std-intro-note">※ 개업공인중개사가 임대차계약서를 작성하는 경우에는 계약서 3통을 작성하여 임대사업자, 임차인, 개업공인중개사가 각각 서명 또는 날인한 후 각각 1통씩 보관한다.</div>
<div class="std-date-line">계약일: ${l.y||"____"}년 ${l.m||"__"}월 ${l.dd||"__"}일</div>
${h}
${k}
${A}
${K}
${H}
${U}
${Y}
${G}
`;return ds({title:"표준임대차계약서",bodyHtml:j,documentNumber:d})}function ms(e){var Z;const s=e.dealKind==="매매",n=e.dealKind==="월세",o=s?"매도인":"임대인",t=s?"매수인":"임차인",d=s?"매매대금":"보증금",r=s?"매매":"임대차",l=xe(e),p=l.termStart&&l.termEnd?`${l.termStart} ~ ${l.termEnd} (${l.termMonths}개월)`:l.termMonths?`${l.termMonths}개월`:"",v=e.brokeragePaymentDate||e.balanceDate||"",b=e.contractId||"",u=e.signDate||"",y=ae(b,"general",e.agentRegNo||"",u),x=s?"매매대금":n?"임차보증금 및 차임":"임차보증금",h=s?"소유권 양도":"임차권 양도",k=s?"대금":"차임",A=s?"매매대금":"보증금",N=s?"대금":"임대료",R=e.brokerageFeeDate||"",_=`<section class="doc-section property-section">
${$("","부동산의 표시")}
<div class="field-grid field-grid-3col">
${c({label:"소재지",value:E(e.address),kind:"req",full:!0})}
${c({label:"토지지목",value:e.landCategory,kind:"auto"})}
${c({label:"토지면적 (㎡)",value:e.landArea,kind:"auto"})}
${c({label:"건물면적 (㎡)",value:e.buildingArea,kind:"auto"})}
${c({label:"건물구조",value:e.buildingStructure,kind:"auto"})}
${c({label:"건물용도",value:e.buildingUse,kind:"auto"})}
${c({label:"해당 층 용도",value:e.floorUse})}
${c({label:"임대할 부분 평수",value:ze(e.targetArea)})}
${c({label:s?"매매 대상":"임대할 부분",value:e.saleTarget,wide:!0})}
</div>
</section>`,z=e.monthlyTiming,K=e.monthlyRentVat,H=`<section class="doc-section calc-section">
${$("","계약 내용")}
<div class="field-grid field-grid-3col">
${c({label:`${d} (원)`,value:e.mainAmount,kind:"req",money:!0,full:!0})}
${c({label:"계약금 (원)",value:e.downPayment,kind:"auto",money:!0})}
${c({label:"중도금 (원)",value:e.middlePayment,money:!0})}
${c({label:"잔금 (원)",value:e.balance,kind:"auto",money:!0})}
${c({label:"계약일",value:e.downDate,kind:"req"})}
${c({label:"중도금일",value:e.middleDate})}
${c({label:"잔금일",value:e.balanceDate,kind:"req"})}
${n?`${c({label:"월차임 (원)",value:e.monthlyRent,kind:"req",money:!0})}${c({label:"납부시기",value:z})}${c({label:"부가세",value:K})}`:""}
</div>
</section>`,U=`<section class="doc-section">
${$("제1조","[목적]")}
<p class="clause-text">위 부동산의 ${i(r)}에 한하여 ${i(o)}과 ${i(t)}은 합의에 의하여 ${i(x)}을 아래와 같이 지급하기로 한다.</p>
</section>`,Y=e.termCountMode,G=(Z=e.terms)==null?void 0:Z.termCountMode,j=Y??G??"",w=j==="include"?" [초일산입]":j==="exclude"?" [초일불산입]":"",S=l.termStart||"　　　　년　월　일",B=l.termEnd||"　　　　년　월　일",F=`<div class="field-grid field-grid-compact" style="margin-bottom:1mm;">
${c({label:"인도일 / 시작일",value:l.termStart,kind:"auto"})}
${c({label:"계약기간",value:p,kind:"auto"})}
</div>`,V=`<div class="field-grid field-grid-compact" style="margin-top:1mm;">
${c({label:"중개보수 (원)",value:e.brokerageFee,kind:"auto",money:!0})}
${c({label:"지급일",value:v,kind:"readonly"})}
</div>`,oe=`<section class="doc-section">
${$("","계약 조항")}
<div class="clauses-inline">
<p><strong>제2조 [존속기간]</strong> ${i(o)}은 위 부동산을 ${i(r)} 목적대로 사용할 수 있는 상태로 <strong>${i(S)}</strong> 까지 ${i(t)}에게 인도하며, ${i(r)} 기간은 인도일로부터 <strong>${i(B)}</strong> (${i(l.termMonths)}개월${i(w)}) 까지로 한다.</p>
${F}
<p><strong>제3조 [용도변경 및 전대 등]</strong> ${i(t)}은 ${i(o)}의 동의없이 위 부동산의 용도나 구조를 변경하거나 전대, ${i(h)} 또는 담보제공을 하지 못하며 ${i(r)} 목적 이외의 용도로 사용할 수 없다.</p>
<p><strong>제4조 [계약의 해지]</strong> ${i(t)}의 ${i(k)} 연체액이 <strong>2기</strong>의 ${i(k)}액에 달하거나, 제3조를 위반 하였을 때 ${i(o)}은 즉시 본 계약을 해지 할 수 있다.</p>
<p><strong>제5조 [계약의 종료]</strong> ${i(r)} 계약이 종료된 경우 ${i(t)}은 위 부동산을 원상으로 회복하여 ${i(o)}에게 반환한다. 이러한 경우 ${i(o)}은 ${i(A)}을 ${i(t)}에게 반환하고, 연체 ${i(N)} 또는 손해배상금이 있을 때는 이들을 제하고 그 잔액을 반환한다.</p>
<p><strong>제6조 [계약의 해제]</strong> ${i(t)}이 ${i(o)}에게 중도금(중도금이 없을때는 잔금)을 지급하기 전까지 ${i(o)}은 계약금의 배액을 상환 하고, ${i(t)}은 계약금을 포기하고 이 계약을 해제할 수 있다.</p>
<p><strong>제7조 [채무불이행과 손해배상의 예정]</strong> ${i(o)} 또는 ${i(t)}은 본 계약상의 내용에 대하여 불이행이 있을 경우 그 상대방은 불이행 한 자에 대하여 서면으로 최고하고 계약을 해제 할 수 있다. 이 경우 계약 당사자는 계약해제에 따른 손해배상을 각각 상대방에게 청구할 수 있으며, 손해배상에 대하여 별도의 약정이 없는 한 계약금을 손해배상의 기준으로 본다.</p>
<p><strong>제8조 [중개보수]</strong> 개업공인중개사는 ${i(o)} 또는 ${i(t)}의 본 계약 불이행에 대하여 책임을 지지 않는다. 중개보수는 본 계약 체결에 따라 계약 당사자 쌍방이 각각 지급하며, 개업공인중개사의 고의나 과실 없이 본 계약이 무효, 취소 또는 해제 되어도 중개보수는 지급한다. 공동중개인 경우에 ${i(o)}과 ${i(t)}은 자신이 중개 의뢰한 개업공인중개사에게 각각 중개보수를 지급한다.</p>
${V}
<p><strong>제9조 [중개대상물확인설명서교부 등]</strong> 개업공인중개사는 중개대상물확인설명서를 작성하고 업무보증관계증서 (공제증서 등) 사본을 첨부하여 거래당사자 쌍방에게 교부한다.${R?` (교부일자 : ${i(R)})`:""}</p>
</div>
</section>`,le=String(e.specialTerms??"").trim(),ie=`<section class="doc-section">
${$("","특약사항")}
<div class="special-box">${i(le)||"-"}</div>
</section>`,re=`<section class="doc-section">
${$("","교부일")}
<div class="field-grid field-grid-compact">
${c({label:"교부일",value:e.brokerageFeeDate,kind:"readonly"})}
</div>
</section>`,ce=`<section class="doc-section">
${$("",`${o} 정보`)}
<div class="party-block">
<div class="party-row party-row-3">
<div class="party-cell"><span class="party-lbl">성명</span><span class="party-val">${f(e.lessorName)}</span></div>
<div class="party-cell"><span class="party-lbl">주민등록번호</span><span class="party-val">${f(te(e.lessorSsn1,e.lessorSsn2))}</span></div>
<div class="party-cell"><span class="party-lbl">연락처</span><span class="party-val">${f(e.lessorPhone)}</span></div>
</div>
<div class="party-row party-row-addr">
<div class="party-cell party-cell-flex"><span class="party-lbl">주소</span><span class="party-val">${f(E(e.lessorAddress))}</span></div>
<div class="party-seal">서명<span class="seal-line"></span>(인)</div>
</div>
</div>
</section>`,de=`<section class="doc-section">
${$("",`${t} 정보`)}
<div class="party-block">
<div class="party-row party-row-3">
<div class="party-cell"><span class="party-lbl">성명</span><span class="party-val">${f(e.lesseeName)}</span></div>
<div class="party-cell"><span class="party-lbl">주민등록번호</span><span class="party-val">${f(te(e.lesseeSsn1,e.lesseeSsn2))}</span></div>
<div class="party-cell"><span class="party-lbl">연락처</span><span class="party-val">${f(e.lesseePhone)}</span></div>
</div>
<div class="party-row party-row-addr">
<div class="party-cell party-cell-flex"><span class="party-lbl">주소</span><span class="party-val">${f(E(e.lesseeAddress))}</span></div>
<div class="party-seal">서명<span class="seal-line"></span>(인)</div>
</div>
</div>
</section>`,pe=`<section class="doc-section">
${$("","개업공인중개사")}
<div class="party-block">
<div class="party-row party-row-2">
<div class="party-cell"><span class="party-lbl">사무소명</span><span class="party-val">${f(e.agentOfficeName)}</span></div>
<div class="party-cell"><span class="party-lbl">등록번호</span><span class="party-val">${f(e.agentRegNo)}</span></div>
</div>
<div class="party-row party-row-2">
<div class="party-cell"><span class="party-lbl">대표</span><span class="party-val">${f(e.agentRep)}</span></div>
<div class="party-cell"><span class="party-lbl">전화</span><span class="party-val">${f(e.agentPhone)}</span></div>
</div>
<div class="party-row party-row-addr">
<div class="party-cell party-cell-flex"><span class="party-lbl">소재지</span><span class="party-val">${f(E(e.agentAddress))}</span></div>
<div class="party-seal">서명<span class="seal-line"></span>(인)</div>
</div>
</div>
</section>`,me=e.staffOpen==="1"||!!(e.staffName||e.staffPhone)?`<section class="doc-section">
${$("","소속공인중개사")}
<div class="field-grid field-grid-2col">
${c({label:"이름",value:e.staffName})}
${c({label:"연락처",value:e.staffPhone})}
</div>
</section>`:"",De=e.coBrokerOpen==="1"||!!(e.coBrokerOfficeName||e.coBrokerRegNo||e.coBrokerAddress||e.coBrokerRep||e.coBrokerPhone)?`<section class="doc-section">
${$("","공동중개 부동산")}
<div class="field-grid field-grid-2col">
${c({label:"사무소명",value:e.coBrokerOfficeName})}
${c({label:"등록번호",value:e.coBrokerRegNo})}
${c({label:"대표",value:e.coBrokerRep})}
${c({label:"전화",value:e.coBrokerPhone})}
${c({label:"소재지",value:e.coBrokerAddress,full:!0})}
</div>
</section>`:"",W=e.hasCoLessor==="1"||!!(e.lessor2Name||e.lessor2Phone||e.lessor2Address),ge=e.hasCoLessee==="1"||!!(e.lessee2Name||e.lessee2Phone||e.lessee2Address),ue=W||ge?`<section class="doc-section">
${$("","공동명의")}
<div class="field-grid field-grid-2col">
${W?`${c({label:`공동 ${o} 성명`,value:e.lessor2Name,kind:"req"})}${c({label:"연락처",value:e.lessor2Phone,kind:"req"})}${c({label:"주민번호 앞자리",value:e.lessor2Ssn1})}${c({label:"주민번호 뒷자리",value:e.lessor2Ssn2||""})}${c({label:"주소",value:e.lessor2Address,kind:"req",full:!0})}`:""}
${ge?`${c({label:`공동 ${t} 성명`,value:e.lessee2Name,kind:"req"})}${c({label:"연락처",value:e.lessee2Phone,kind:"req"})}${c({label:"주민번호 앞자리",value:e.lessee2Ssn1})}${c({label:"주민번호 뒷자리",value:e.lessee2Ssn2||""})}${c({label:"주소",value:e.lessee2Address,kind:"req",full:!0})}`:""}
</div>
</section>`:"",J=`${`<div class="top-grid">${_}${H}</div>`}${U}${oe}${ie}${re}${ce}${de}${pe}${me}${De}${ue}`;return Ee({title:"부동산 계약서",subtitle:s?"매매계약서":n?"임대차계약서(월세)":"임대차계약서(전세)",documentNumber:y,bodyHtml:J})}function gs(e){var Ae;const s=e,n=L=>{const q=s[L];return typeof q=="string"&&q.length>0?q:void 0},o=(L,q)=>{const Se=n(L),ve=n(q);if(!(!Se&&!ve))return`${Se??""}${ve?"-"+ve:""}`},t={...e,sellerName:n("sellerName")??n("lessorName")??"",sellerPhone:n("sellerPhone")??n("lessorPhone")??"",sellerAddress:n("sellerAddress")??n("lessorAddress")??"",sellerSsn:n("sellerSsn")??o("lessorSsn1","lessorSsn2")??"",buyerName:n("buyerName")??n("lesseeName")??"",buyerPhone:n("buyerPhone")??n("lesseePhone")??"",buyerAddress:n("buyerAddress")??n("lesseeAddress")??"",buyerSsn:n("buyerSsn")??o("lesseeSsn1","lesseeSsn2")??""},d=t.dealKind==="매매",r=d?"매도인":"임대인",l=d?"매수인":"임차인",p=d?"매매대금":"보증금",v=d?"매매":"임대차",b=xe(t),u=b.termStart&&b.termEnd?`${b.termStart} ~ ${b.termEnd} (${b.termMonths}개월)`:b.termMonths?`${b.termMonths}개월`:"",y=t.brokeragePaymentDate||t.balanceDate||"",x=t.contractId||"",h=t.signDate||"",k=ae(x,"commercial",t.agentRegNo||"",h),A=d?"매매대금":"임차보증금 및 차임",N=d?"소유권 양도":"임차권 양도",R=d?"대금":"차임",_=d?"매매대금":"보증금",z=d?"대금":"임대료",K=t.brokerageFeeDate||"",H=`<section class="doc-section property-section">
${$("","부동산의 표시")}
<div class="field-grid field-grid-3col">
${c({label:"소재지",value:E(t.address),kind:"req",full:!0})}
${c({label:"토지지목",value:t.landCategory,kind:"auto"})}
${c({label:"토지면적 (㎡)",value:t.landArea,kind:"auto"})}
${c({label:"건물면적 (㎡)",value:t.buildingArea,kind:"auto"})}
${c({label:"건물구조",value:t.buildingStructure,kind:"auto"})}
${c({label:"건물용도",value:t.buildingUse,kind:"auto"})}
${c({label:"해당 층 용도",value:t.floorUse})}
${c({label:"임대할 부분 평수",value:ze(t.targetArea)})}
${c({label:d?"매매 대상":"임대할 부분",value:t.saleTarget,wide:!0})}
</div>
</section>`,U=t.monthlyTiming,Y=t.monthlyRentVat,G=`<section class="doc-section calc-section">
${$("","계약 내용")}
<div class="field-grid field-grid-3col">
${c({label:`${p} (원)`,value:t.mainAmount,kind:"req",money:!0,full:!0})}
${c({label:"계약금 (원)",value:t.downPayment,kind:"req",money:!0})}
${c({label:"중도금 (원)",value:t.middlePayment,money:!0})}
${c({label:"잔금 (원)",value:t.balance,kind:"auto",money:!0})}
${c({label:"계약일",value:t.downDate,kind:"req"})}
${c({label:"중도금일",value:t.middleDate})}
${c({label:"잔금일",value:t.balanceDate,kind:"req"})}
${d?"":`${c({label:"월차임 (원)",value:t.monthlyRent,money:!0})}${c({label:"납부시기",value:U})}${c({label:"부가세",value:Y})}`}
</div>
</section>`,j=`<section class="doc-section">
${$("제1조","[목적]")}
<p class="clause-text">위 부동산의 ${i(v)}에 한하여 ${i(r)}과 ${i(l)}은 합의에 의하여 ${i(A)}을 아래와 같이 지급하기로 한다.</p>
</section>`,w=b.termStart||"　　　　년　월　일",S=b.termEnd||"　　　　년　월　일",B=t.termCountMode,F=(Ae=t.terms)==null?void 0:Ae.termCountMode,V=B??F??"",oe=V==="include"?" [초일산입]":V==="exclude"?" [초일불산입]":"",le=`<div class="field-grid field-grid-compact" style="margin-bottom:1mm;">
${c({label:"인도일 / 시작일",value:b.termStart,kind:"auto"})}
${c({label:"계약기간",value:u,kind:"auto"})}
</div>`,ie=`<div class="field-grid field-grid-compact" style="margin-top:1mm;">
${c({label:"중개보수 (원)",value:t.brokerageFee,kind:"auto",money:!0})}
${c({label:"지급일",value:y,kind:"readonly"})}
</div>`,re=`<section class="doc-section">
${$("","계약 조항")}
<div class="clauses-inline">
<p><strong>제2조 [존속기간]</strong> ${i(r)}은 위 부동산을 ${i(v)} 목적대로 사용할 수 있는 상태로 <strong>${i(w)}</strong> 까지 ${i(l)}에게 인도하며, ${i(v)} 기간은 인도일로부터 <strong>${i(S)}</strong> (${i(b.termMonths)}개월${i(oe)}) 까지로 한다.</p>
${le}
<p><strong>제3조 [용도변경 및 전대 등]</strong> ${i(l)}은 ${i(r)}의 동의없이 위 부동산의 용도나 구조를 변경하거나 전대, ${i(N)} 또는 담보제공을 하지 못하며 ${i(v)} 목적 이외의 용도로 사용할 수 없다.</p>
<p><strong>제4조 [계약의 해지]</strong> ${i(l)}의 ${i(R)} 연체액이 <strong>3기</strong>의 ${i(R)}액에 달하거나, 제3조를 위반 하였을 때 ${i(r)}은 즉시 본 계약을 해지 할 수 있다.</p>
<p><strong>제5조 [계약의 종료]</strong> ${i(v)} 계약이 종료된 경우 ${i(l)}은 위 부동산을 원상으로 회복하여 ${i(r)}에게 반환한다. 이러한 경우 ${i(r)}은 ${i(_)}을 ${i(l)}에게 반환하고, 연체 ${i(z)} 또는 손해배상금이 있을 때는 이들을 제하고 그 잔액을 반환한다.</p>
<p><strong>제6조 [계약의 해제]</strong> ${i(l)}이 ${i(r)}에게 중도금(중도금이 없을때는 잔금)을 지급하기 전까지 ${i(r)}은 계약금의 배액을 상환 하고, ${i(l)}은 계약금을 포기하고 이 계약을 해제할 수 있다.</p>
<p><strong>제7조 [채무불이행과 손해배상의 예정]</strong> ${i(r)} 또는 ${i(l)}은 본 계약상의 내용에 대하여 불이행이 있을 경우 그 상대방은 불이행 한 자에 대하여 서면으로 최고하고 계약을 해제 할 수 있다. 이 경우 계약 당사자는 계약해제에 따른 손해배상을 각각 상대방에게 청구할 수 있으며, 손해배상에 대하여 별도의 약정이 없는 한 계약금을 손해배상의 기준으로 본다.</p>
<p><strong>제8조 [중개보수]</strong> 개업공인중개사는 ${i(r)} 또는 ${i(l)}의 본 계약 불이행에 대하여 책임을 지지 않는다. 중개보수는 본 계약 체결에 따라 계약 당사자 쌍방이 각각 지급하며, 개업공인중개사의 고의나 과실 없이 본 계약이 무효, 취소 또는 해제 되어도 중개보수는 지급한다. 공동중개인 경우에 ${i(r)}과 ${i(l)}은 자신이 중개 의뢰한 개업공인중개사에게 각각 중개보수를 지급한다.</p>
${ie}
<p><strong>제9조 [중개대상물확인설명서교부 등]</strong> 개업공인중개사는 중개대상물확인설명서를 작성하고 업무보증관계증서 (공제증서 등) 사본을 첨부하여 거래당사자 쌍방에게 교부한다.${K?` (교부일자 : ${i(K)})`:""}</p>
</div>
</section>`,ce=String(t.specialTerms??"").trim(),de=`<section class="doc-section">
${$("","특약사항")}
<div class="special-box">${i(ce)||"-"}</div>
</section>`,pe=`<section class="doc-section">
${$("","교부일")}
<div class="field-grid field-grid-2col">
${c({label:"교부일",value:t.brokerageFeeDate,kind:"readonly",full:!0})}
</div>
</section>`,ke=`<section class="doc-section">
${$("",`${r} 정보`)}
<div class="party-block">
<div class="party-row party-row-3">
<div class="party-cell"><span class="party-lbl">성명</span><span class="party-val">${f(t.sellerName)}</span></div>
<div class="party-cell"><span class="party-lbl">주민등록번호</span><span class="party-val">${f(te(void 0,void 0,typeof t.sellerSsn=="string"?t.sellerSsn:""))}</span></div>
<div class="party-cell"><span class="party-lbl">연락처</span><span class="party-val">${f(t.sellerPhone)}</span></div>
</div>
<div class="party-row party-row-addr">
<div class="party-cell party-cell-flex"><span class="party-lbl">주소</span><span class="party-val">${f(E(t.sellerAddress))}</span></div>
<div class="party-seal">서명<span class="seal-line"></span>(인)</div>
</div>
</div>
</section>`,me=`<section class="doc-section">
${$("",`${l} 정보`)}
<div class="party-block">
<div class="party-row party-row-3">
<div class="party-cell"><span class="party-lbl">성명</span><span class="party-val">${f(t.buyerName)}</span></div>
<div class="party-cell"><span class="party-lbl">주민등록번호</span><span class="party-val">${f(te(void 0,void 0,typeof t.buyerSsn=="string"?t.buyerSsn:""))}</span></div>
<div class="party-cell"><span class="party-lbl">연락처</span><span class="party-val">${f(t.buyerPhone)}</span></div>
</div>
<div class="party-row party-row-addr">
<div class="party-cell party-cell-flex"><span class="party-lbl">주소</span><span class="party-val">${f(E(t.buyerAddress))}</span></div>
<div class="party-seal">서명<span class="seal-line"></span>(인)</div>
</div>
</div>
</section>`,we=`<section class="doc-section">
${$("","개업공인중개사")}
<div class="party-block">
<div class="party-row party-row-2">
<div class="party-cell"><span class="party-lbl">사무소명</span><span class="party-val">${f(t.agentOfficeName)}</span></div>
<div class="party-cell"><span class="party-lbl">등록번호</span><span class="party-val">${f(t.agentRegNo)}</span></div>
</div>
<div class="party-row party-row-2">
<div class="party-cell"><span class="party-lbl">대표</span><span class="party-val">${f(t.agentRep)}</span></div>
<div class="party-cell"><span class="party-lbl">전화</span><span class="party-val">${f(t.agentPhone)}</span></div>
</div>
<div class="party-row party-row-addr">
<div class="party-cell party-cell-flex"><span class="party-lbl">소재지</span><span class="party-val">${f(E(t.agentAddress))}</span></div>
<div class="party-seal">서명<span class="seal-line"></span>(인)</div>
</div>
</div>
</section>`,W=t.staffOpen==="1"||!!(t.staffName||t.staffPhone)?`<section class="doc-section">
${$("","소속공인중개사")}
<div class="field-grid field-grid-2col">
${c({label:"이름",value:t.staffName})}
${c({label:"연락처",value:t.staffPhone})}
</div>
</section>`:"",ue=t.coBrokerOpen==="1"||!!(t.coBrokerOfficeName||t.coBrokerRegNo||t.coBrokerAddress||t.coBrokerRep||t.coBrokerPhone)?`<section class="doc-section">
${$("","공동중개 부동산")}
<div class="field-grid field-grid-2col">
${c({label:"사무소명",value:t.coBrokerOfficeName})}
${c({label:"대표",value:t.coBrokerRep})}
${c({label:"등록번호",value:t.coBrokerRegNo})}
${c({label:"연락처",value:t.coBrokerPhone})}
${c({label:"소재지",value:t.coBrokerAddress,full:!0})}
</div>
</section>`:"",be=t.hasCoLessor==="1"||!!(t.lessor2Name||t.lessor2Phone),J=t.hasCoLessee==="1"||!!(t.lessee2Name||t.lessee2Phone),Z=be||J?`<section class="doc-section">
${$("","공동명의")}
<div class="field-grid field-grid-2col">
${be?(()=>{const L=Ne(typeof t.lessor2Ssn=="string"?t.lessor2Ssn:"");return`${c({label:`공동 ${r} 성명`,value:t.lessor2Name})}${c({label:"연락처",value:t.lessor2Phone})}${c({label:"주민번호 앞자리",value:L.front})}${c({label:"주민번호 뒷자리",value:L.back})}${c({label:"주소",value:t.lessor2Address,full:!0})}`})():""}
${J?(()=>{const L=Ne(typeof t.lessee2Ssn=="string"?t.lessee2Ssn:"");return`${c({label:`공동 ${l} 성명`,value:t.lessee2Name})}${c({label:"연락처",value:t.lessee2Phone})}${c({label:"주민번호 앞자리",value:L.front})}${c({label:"주민번호 뒷자리",value:L.back})}${c({label:"주소",value:t.lessee2Address,full:!0})}`})():""}
</div>
</section>`:"",Ue=`${`<div class="top-grid">${H}${G}</div>`}${j}${re}${de}${pe}${ke}${me}${we}${W}${ue}${Z}`;return Ee({title:"부동산 계약서",subtitle:d?"매매계약서(상업용)":"임대차계약서(상업용 월세)",documentNumber:k,bodyHtml:Ue})}function Ks(e){return e==="commercial"?"commercial":"residential"}function js(e){if(!e||e<=0)return"계산 중";const s=Math.floor(e/1e4),n=e%1e4;return s>0&&n===0?`${s.toLocaleString("ko-KR")}억원`:s>0?`${s.toLocaleString("ko-KR")}억 ${n.toLocaleString("ko-KR")}만원`:`${n.toLocaleString("ko-KR")}만원`}function us(e){switch(e){case"sale":return"매매";case"jeonse":return"전세";case"monthly":case"short":return"월세";default:return null}}function bs(e){return e==="shop"||e==="office"?"commercial":"residential"}function ee(e){if(!e)return 0;const s=parseInt(e.replace(/[^0-9]/g,""),10);return Number.isFinite(s)&&s>0?s*1e4:0}function O(e){return!e||e<=0?"0":e.toLocaleString("ko-KR")}function T(e){if(!e)return"";const s=e.split("-");return s.length!==3?e:`${s[0]}. ${s[1]}. ${s[2]}.`}const vs={sale:"매매",jeonse:"전세",monthly:"월세",short:"월세"},fs={sale:"매매",jeonse:"전세",monthly:"월세",wholeLease:"통임대"};function Oe(e){return e==="shop"?"상업용":e==="office"?"업무용":"주거용"}function $s(e,s){if(!e||!s)return"";const n=new Date(e),o=new Date(s);if(Number.isNaN(n.getTime())||Number.isNaN(o.getTime()))return"";const t=(o.getFullYear()-n.getFullYear())*12+(o.getMonth()-n.getMonth());return String(t)}function $e(e){return!e||e<=0?"":Te(e*1e4)}function Me(e){const s=us(e.contractType);return s?{category:bs(e.propertyKind),dealKind:s,depositMan:parseInt(e.terms.deposit||"0",10)||0,monthlyMan:parseInt(e.terms.monthlyRent||"0",10)||0}:null}function Ke(e){const s=e.formData??{};return s.terms&&typeof s.terms=="object"&&s.property&&typeof s.property=="object"?s:null}function Bs(e){const s=Ke(e);return s?Me(s):null}function ys(e,s){const n=vs[e.contractType??"monthly"]??"월세",o=parseInt(e.terms.deposit||"0",10)||0,t=parseInt(e.terms.downPayment.amount||"0",10)||0,d=parseInt(e.terms.finalPayment.amount||"0",10)||0,r=parseInt(e.terms.monthlyRent||"0",10)||0,l=e.parties.landlords[0],p=e.parties.tenants[0],v=b=>b!=null&&b.ssn1||b!=null&&b.ssn2?`${b.ssn1||""}-${b.ssn2||""}`:"";return{cfType:n,cfProperty:{address:e.property.jibunAddress||e.property.roadAddress||"",landCategory:e.property.landCategory||"",landArea:e.property.landArea||"",buildingArea:e.property.buildingArea||"",buildingStructure:e.property.buildingStructure||"",buildingUse:e.property.buildingUse||"",rentPart:e.property.rentPart||"",rentArea:e.property.rentArea||""},cfContent:{deposit:O(ee(e.terms.deposit)),depositKr:$e(o),downPayment:O(ee(e.terms.downPayment.amount)),downPaymentKr:$e(t),balance:O(ee(e.terms.finalPayment.amount)),balanceKr:$e(d),depositDate:T(e.terms.downPayment.date),balanceDate:T(e.terms.finalPayment.date),monthlyRent:O(ee(e.terms.monthlyRent)),monthlyRentDay:e.terms.monthlyDay||r>0&&e.terms.downPayment.date&&e.terms.downPayment.date.split("-")[2]||""},cfClause:{deliveryDate:T(e.terms.finalPayment.date||e.terms.startDate),endDate:T(e.terms.endDate),contractPeriod:$s(e.terms.startDate,e.terms.endDate),propertyUse:Oe(e.propertyKind),brokerageFee:s>0?O(s*1e4):"",brokerageFeeDate:T(e.terms.finalPayment.date)},cfSpecialTerms:e.clauses||[],cfLessor:{name:(l==null?void 0:l.name)||"",address:(l==null?void 0:l.address)||"",ssn:v(l),phone:(l==null?void 0:l.phone)||""},cfLessee:{name:(p==null?void 0:p.name)||"",address:(p==null?void 0:p.address)||"",ssn:v(p),phone:(p==null?void 0:p.phone)||""},cfAgent:{officeName:e.agent.office||"",regNo:e.agent.licenseNo||"",representative:e.agent.name||"",phone:e.agent.phone||"",address:e.agent.address||""},cfSignDate:T(e.terms.finalPayment.date||e.terms.startDate||"")}}function Fs(e,s){const n=Ke(e);return n?ys(n,s):{cfType:fs[e.dealKind]??"월세",cfProperty:{address:e.jibunAddress||e.address||"",landCategory:"",landArea:"",buildingArea:"",buildingStructure:"",buildingUse:"",rentPart:"",rentArea:""},cfContent:{deposit:O(e.deposit),depositKr:Te(e.deposit),downPayment:"0",downPaymentKr:"",balance:"0",balanceKr:"",depositDate:"",balanceDate:T(e.balanceDueDate),monthlyRent:O(e.monthlyRent),monthlyRentDay:""},cfClause:{deliveryDate:T(e.balanceDueDate),endDate:"",contractPeriod:"",propertyUse:Oe(e.propertyKind),brokerageFee:"",brokerageFeeDate:""},cfSpecialTerms:[],cfLessor:{name:e.sellerName,address:"",ssn:"",phone:e.sellerPhone},cfLessee:{name:e.buyerName,address:"",ssn:"",phone:e.buyerPhone},cfAgent:{officeName:"",regNo:"",representative:e.managerName,phone:"",address:""},cfSignDate:T(e.contractDate)}}function Is(e){const s=e.formData??{},o={...{type:"general",dealKind:e.dealKind==="sale"?"매매":e.dealKind==="jeonse"?"전세":e.dealKind==="wholeLease"?"통임대":"월세",category:e.category,address:e.address,jibunAddress:e.jibunAddress,contractDate:e.contractDate,middleDate:e.midPaymentDate,balanceDate:e.balanceDueDate,lessorName:e.sellerName,lessorPhone:e.sellerPhone,lesseeName:e.buyerName,lesseePhone:e.buyerPhone,mainAmount:e.dealKind==="sale"?String(e.dealPrice||0):String(e.deposit||0),monthlyRent:e.monthlyRent>0?String(e.monthlyRent):"",manager:e.managerName,needsContract:e.needsContract,specialTerms:[]},...s,contractId:e.id,category:e.category},t=String(e.category??"").toLowerCase(),d=(()=>{const l=s==null?void 0:s.isStandardLease;return l===!0||l==="true"})();return t==="standard"||d?ps(o):t==="commercial"?gs(o):ms(o)}const hs={SALE:"sale",JEONSE:"jeonse",MONTHLY:"monthly",WHOLE_LEASE:"wholeLease"},xs={STANDARD:"standard",GENERAL:"general",COMMERCIAL:"commercial"},ks={SCHEDULED:"scheduled",COMPLETED:"completed",BALANCE_DONE:"balanceDone",CANCELLED:"cancelled"};function ye(e){return e?e.slice(0,10):""}function se(e){return I(e)}const ws=["apt","officetel","villa","shop","office"];function I(e){var d;const s=e.formData&&typeof e.formData=="object"?e.formData:void 0,n=s&&typeof s.jibunAddress=="string"?s.jibunAddress:void 0,o=typeof e.propertyKind=="string"&&e.propertyKind||(s&&typeof s.propertyKind=="string"?s.propertyKind:""),t=ws.includes(o)?o:null;return{id:e.id,dealKind:hs[e.dealKind]??"monthly",category:xs[e.category]??"general",propertyKind:t,needsContract:e.needsContract!==!1,formData:s??null,confirmDoc:e.confirmDoc&&typeof e.confirmDoc=="object"&&e.confirmDoc.id?{id:e.confirmDoc.id,type:e.confirmDoc.type||"",completedAt:e.confirmDoc.completedAt??null,deletedAt:e.confirmDoc.deletedAt??null}:null,confirmDocComplete:!!(e.confirmDoc&&e.confirmDoc.completedAt&&!e.confirmDoc.deletedAt),confirmDocAutofilled:!!(e.confirmDoc&&!e.confirmDoc.completedAt&&!e.confirmDoc.deletedAt),status:ks[e.status]??"scheduled",address:e.address??"",jibunAddress:n,managerName:((d=e.assignedTo)==null?void 0:d.name)??"",contractDate:ye(e.contractDate),midPaymentDate:ye(e.midPaymentDate),balanceDueDate:ye(e.balanceDueDate),sellerName:e.sellerName??"",sellerPhone:e.sellerPhone??"",buyerName:e.buyerName??"",buyerPhone:e.buyerPhone??"",deposit:e.deposit??0,monthlyRent:e.monthlyRent??0,dealPrice:e.dealPrice??0,createdAt:e.createdAt,updatedAt:e.updatedAt}}const je={apt:"GENERAL",officetel:"GENERAL",villa:"GENERAL",house:"GENERAL",shop:"COMMERCIAL",office:"COMMERCIAL"},Be={sale:"SALE",jeonse:"JEONSE",monthly:"MONTHLY",short:"MONTHLY"};function C(e){const s=parseInt(e||"0",10);return!Number.isFinite(s)||s<=0?null:s*1e4}function D(e){if(!e)return null;const s=e.replace(/[^0-9]/g,"");return s.length<8?null:new Date(`${s.slice(0,4)}-${s.slice(4,6)}-${s.slice(6,8)}T00:00:00.000+09:00`).toISOString()}function Fe(e,s){const n=e.parties.landlords[0],o=e.parties.tenants[0],t=e.propertyKind==="apt",d=r=>r?(parseInt(r,10)*1e4).toLocaleString("ko-KR"):"";return{propertyKind:e.propertyKind,contractType:e.contractType,entityType:e.entityType,isStandardLease:e.isStandardLease,jibunAddress:e.property.jibunAddress,property:e.property,parties:e.parties,agent:e.agent,clauses:e.clauses,selectedClauseChips:e.selectedClauseChips,terms:e.terms,dealKind:e.contractType==="sale"?"매매":e.contractType==="jeonse"?"전세":"월세",address:e.property.roadAddress||e.property.jibunAddress||"",mainAmount:d(e.terms.deposit),monthlyRent:d(e.terms.monthlyRent),monthlyDay:e.terms.monthlyDay||"",monthlyTiming:e.terms.monthlyTiming||"",monthlyRentVat:e.terms.monthlyRentVat||"",downPayment:d(e.terms.downPayment.amount),middlePayment:d(e.terms.midPayment.amount),balance:d(e.terms.finalPayment.amount),contractDate:e.terms.downPayment.date||e.terms.startDate||"",downDate:e.terms.downPayment.date||"",middleDate:e.terms.midPayment.date||"",balanceDate:e.terms.finalPayment.date||"",signDate:e.terms.downPayment.date||e.terms.startDate||"",saleTarget:t?[e.property.dong?`${e.property.dong}동`:"",e.property.ho?`${e.property.ho}호`:""].filter(Boolean).join(" "):e.property.rentPart||"",targetArea:e.property.rentAreaPyeong||"",landCategory:e.property.landCategory||"",landArea:e.property.landArea||"",buildingArea:e.property.buildingArea||"",buildingStructure:e.property.buildingStructure||"",buildingUse:e.property.buildingUse||"",floorUse:e.property.floorUse||"",lessorName:(n==null?void 0:n.name)||"",lessorPhone:(n==null?void 0:n.phone)||"",lessorSsn1:(n==null?void 0:n.ssn1)||"",lessorSsn2:(n==null?void 0:n.ssn2)||"",lessorAddress:(n==null?void 0:n.address)||"",lesseeName:(o==null?void 0:o.name)||"",lesseePhone:(o==null?void 0:o.phone)||"",lesseeSsn1:(o==null?void 0:o.ssn1)||"",lesseeSsn2:(o==null?void 0:o.ssn2)||"",lesseeAddress:(o==null?void 0:o.address)||"",agentOfficeName:e.agent.office||"",agentRegNo:e.agent.licenseNo||"",agentRep:e.agent.name||"",agentRepName:e.agent.name||"",agentName:e.agent.name||"",agentOffice:e.agent.office||"",agentPhone:e.agent.phone||"",agentAddress:e.agent.address||"",brokerageFee:s?s.feeWon.toLocaleString("ko-KR"):"",brokerageFeeDate:e.terms.downPayment.date||e.terms.startDate||"",specialTerms:e.clauses,standardLease:e.standardLease,lessorBizRegNo:(n==null?void 0:n.bizRegNo)??"",housingType:e.standardLease.housingType,exclusiveArea:e.standardLease.exclusiveAreaM2,commonArea:e.standardLease.commonAreaM2,otherCommonArea:e.standardLease.otherCommonAreaM2,totalArea:e.standardLease.totalAreaM2,leaseDurationCategory:e.standardLease.leaseDurationCategory,leaseDurationYears:e.standardLease.leaseDurationYears,buildOrPurchase:e.standardLease.buildOrPurchase,obligationStartDate:e.standardLease.obligationStartDate,is100Households:e.standardLease.is100Households,attachedFacilities:e.standardLease.attachedFacilities,hasPriorRights:e.standardLease.hasPriorRights,priorRightsType:e.standardLease.priorRightsType,priorRightsAmount:e.standardLease.priorRightsAmount,priorRightsDate:e.standardLease.priorRightsDate,hasTaxOverdue:e.standardLease.hasTaxOverdue,bondGuaranteeType:e.standardLease.bondGuaranteeType,bondAmount:e.standardLease.bondAmount,bondPartialAmount:e.standardLease.bondPartialAmount,bondReason:e.standardLease.bondReason,lessorAccountBank:e.standardLease.lessorAccountBank,lessorBankName:e.standardLease.lessorAccountBank,lessorAccountNo:e.standardLease.lessorAccountNo,lessorAccountHolder:e.standardLease.lessorAccountHolder||(n==null?void 0:n.name)||""}}async function Ie(e,s){const n=Me(e);if(!n)return null;try{return await We(n)}catch(o){if(s)return null;throw o}}async function Ds(e,s){const n=(s==null?void 0:s.asDraft)===!0,o=await Ie(e,n),t=e.isStandardLease?"STANDARD":e.propertyKind?je[e.propertyKind]??"GENERAL":"GENERAL",d=e.contractType?Be[e.contractType]??"MONTHLY":"MONTHLY",r=e.parties.landlords[0],l=e.parties.tenants[0],p={category:t,dealKind:d,propertyKind:e.propertyKind||void 0,address:e.property.roadAddress||e.property.jibunAddress||void 0,contractDate:D(e.terms.downPayment.date)||D(e.terms.startDate)||void 0,midPaymentDate:D(e.terms.midPayment.date)||void 0,balanceDueDate:D(e.terms.finalPayment.date)||void 0,termStartDate:D(e.terms.startDate)||void 0,termEndDate:D(e.terms.endDate)||void 0,sellerName:(r==null?void 0:r.name)||void 0,sellerPhone:(r==null?void 0:r.phone)||void 0,buyerName:(l==null?void 0:l.name)||void 0,buyerPhone:(l==null?void 0:l.phone)||void 0,deposit:C(e.terms.deposit)??void 0,monthlyRent:C(e.terms.monthlyRent)??void 0,downPayment:C(e.terms.downPayment.amount)??void 0,midPayment:C(e.terms.midPayment.amount)??void 0,balancePayment:C(e.terms.finalPayment.amount)??void 0,needsContract:!n,formData:Fe(e,o)},v=Object.fromEntries(Object.entries(p).filter(([,x])=>x!==void 0)),u=(await M.post("/contracts",v)).data,y=u&&typeof u=="object"&&"data"in u&&u.data?u.data:u;return I(y)}async function he(e,s){let n;if(s==="completed")n=`/contracts/${encodeURIComponent(e)}/complete`;else if(s==="balanceDone")n=`/contracts/${encodeURIComponent(e)}/balance-done`;else throw new Error(`지원하지 않는 상태 변경입니다: ${s}`);const t=(await M.post(n)).data,d=t&&typeof t=="object"&&"data"in t&&t.data?t.data:t;return I(d)}async function As(e,s,n){const o=(n==null?void 0:n.asDraft)===!0,t=await Ie(s,o),d=s.isStandardLease?"STANDARD":s.propertyKind?je[s.propertyKind]??"GENERAL":"GENERAL",r=s.contractType?Be[s.contractType]??"MONTHLY":"MONTHLY",l=s.parties.landlords[0],p=s.parties.tenants[0],v={category:d,dealKind:r,propertyKind:s.propertyKind||void 0,address:s.property.roadAddress||s.property.jibunAddress||void 0,contractDate:D(s.terms.downPayment.date)||D(s.terms.startDate)||void 0,midPaymentDate:D(s.terms.midPayment.date)||void 0,balanceDueDate:D(s.terms.finalPayment.date)||void 0,termStartDate:D(s.terms.startDate)||void 0,termEndDate:D(s.terms.endDate)||void 0,sellerName:(l==null?void 0:l.name)||void 0,sellerPhone:(l==null?void 0:l.phone)||void 0,buyerName:(p==null?void 0:p.name)||void 0,buyerPhone:(p==null?void 0:p.phone)||void 0,deposit:C(s.terms.deposit)??void 0,monthlyRent:C(s.terms.monthlyRent)??void 0,downPayment:C(s.terms.downPayment.amount)??void 0,midPayment:C(s.terms.midPayment.amount)??void 0,balancePayment:C(s.terms.finalPayment.amount)??void 0,needsContract:!o,formData:Fe(s,t)},b=Object.fromEntries(Object.entries(v).filter(([,h])=>h!==void 0)),y=(await M.patch(`/contracts/${encodeURIComponent(e)}`,b)).data,x=y&&typeof y=="object"&&"data"in y&&y.data?y.data:y;return I(x)}async function Ss(e,s){const n=s==null?void 0:s.trim(),o=n&&n.length>=2?{reason:n}:{};await M.delete(`/contracts/${encodeURIComponent(e)}`,{data:o})}async function Ps(e){return(await M.get(`/contracts/${encodeURIComponent(e)}`)).data}const He=async()=>{const s=(await M.get("/contracts",{params:{limit:100}})).data;return(Array.isArray(s)?s:"data"in s&&Array.isArray(s.data)?s.data:"results"in s&&Array.isArray(s.results)?s.results:[]).map(I)},Ns=async e=>{const n=(await M.get("/contracts/sync",{params:{since:e}})).data??{};return{items:Array.isArray(n.items)?n.items.map(I):[],deletedIds:Array.isArray(n.deletedIds)?n.deletedIds:[],serverTime:typeof n.serverTime=="string"?n.serverTime:e,hasMore:n.hasMore===!0}},Cs=Object.freeze(Object.defineProperty({__proto__:null,createContractFromDraft:Ds,deleteContractRemote:Ss,fetchContract:Ps,listContracts:He,mapServerContract:se,patchContractStatus:he,syncContracts:Ns,updateContractFromDraft:As},Symbol.toStringTag,{value:"Module"}));export{a as P,js as a,ne as b,Ms as c,Me as d,E as e,_e as f,As as g,Ds as h,ys as i,Os as j,Ss as k,Is as l,Fs as m,zs as n,Es as o,Le as p,Bs as q,Ns as s,Ks as t,os as u};
