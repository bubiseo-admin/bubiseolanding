import{a as r,U as s,ag as t,ah as c}from"./index-CKEXWzIa.js";async function l(){const a=await r.get("/users/me/special-terms");return{residential:a.data.residential??"",commercial:a.data.commercial??""}}async function i(a){const e=await r.put("/users/me/special-terms",a);return{residential:e.data.residential??"",commercial:e.data.commercial??""}}const m=`1. 본 주택의 임대차에 관한 중개대상물확인·설명서 및 계약서상의 시설물 상태는 임대인이 고지한 사항과 임차인 및 공인중개사의 현장 확인 사항을 기초로 한 것이다.
2. 임대할 부분의 면적은 (공부상 전용면적 또는 연면적, 실측 면적)이다.
3. 본 주택을 인도받은 임차인은      년    월    일까지 전입신고와 임대차계약서에 확정일자를 받아야 하며, 임대인은 위 약정 일자의 다음 날까지 임차 주택에 저당권 등 담보권 설정을 할 수 없다.
4. 임대인은 본 계약체결 당시 국세·지방세 체납, 근저당권 이자체납 사실이 없음을 고지한다.
5. 거래당사자는 본 계약과 관련하여 분쟁이 있는 경우 법원에 소를 제기하기 전에 먼저 주택임대차분쟁조정위원회에 조정을 신청할 수 있다.
※ 주택임대차분쟁조정위원회 조정을 통할 경우 60일(최대 90일) 이내 신속하게 조정 결과를 받아볼 수 있습니다.
6. 전세금반환보증 가입을 위해 임대인이 취해야 할 조치가 있는 경우 임대인은 성실히 협력하여야 하며, 임대인의 미협조 또는 책임있는 사유로 임차인의 보증보험 가입이 불가능한 경우 임차인은 본 계약을 해제할 수 있다. 단, 이 경우 본 계약의 해제에 따른 위약금 또는 별도의 손해배상책임을 묻지 아니하며, 수수된 금원은 원금으로 상환하여야 한다.
7. 주택임대차계약 신고는 계약체결일로부터 30일 이내 관할 주민센터를 방문 또는 부동산거래관리시스템 (https://rtms.molit.go.kr)을 통해 임대인과 임차인이 신고서에 공동으로 서명·날인하여 신고하거나, 임차인 또는 임대인이 계약서를 첨부하여 단독으로 신고도 가능합니다.
8. 본 계약에 명시되지 않은 사항은 주택임대차보호법 및 민법과 주택임대차계약의 일반관례에 따른다.
9. 첨부서류 : 중개대상물확인·설명서, 공제증서 사본 각 1부.`,n=s()(t(a=>({residential:"",commercial:"",base:m,hydratedAt:0,setResidential:e=>{a({residential:e}),i({residential:e}).catch(()=>{})},setCommercial:e=>{a({commercial:e}),i({commercial:e}).catch(()=>{})},setBase:e=>{a({base:e})},hydrateFromServer:e=>a({residential:e.residential??"",commercial:e.commercial??"",hydratedAt:Date.now()})}),{name:"bubiseo-desktop-my-special-terms",storage:c(()=>localStorage)}));export{l as g,n as u};
