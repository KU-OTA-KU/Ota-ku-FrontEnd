import{H as i,I as a,J as c}from"./-W1aSz-M.js";import{f as d,s as m}from"./aZjN14hP.js";import"./BP9xYyLZ.js";/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const f=()=>{const e=window;e.addEventListener("statusTap",()=>{i(()=>{const n=e.innerWidth,s=e.innerHeight,o=document.elementFromPoint(n/2,s/2);if(!o)return;const t=d(o);t&&new Promise(r=>a(t,r)).then(()=>{c(async()=>{t.style.setProperty("--overflow","hidden"),await m(t,300),t.style.removeProperty("--overflow")})})})})};export{f as startStatusTap};
