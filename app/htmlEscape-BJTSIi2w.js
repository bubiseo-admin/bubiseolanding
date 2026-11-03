const r={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"};function e(t){return t==null?"":String(t).replace(/[&<>"']/g,n=>r[n])}export{e};
