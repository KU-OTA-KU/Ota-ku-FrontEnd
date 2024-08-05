import{_ as m}from"./DVHgWvUo.js";import{_ as c}from"./vzQfPBXo.js";import{b as p}from"./BFtnGYCG.js";import{u as _,_ as f}from"./-W1aSz-M.js";import{d as h,G as B,C as l,H as t,I as n,B as a,J as b,L as E,M as v,N as x,O as F,P as g,Q as s,y as r}from"./BP9xYyLZ.js";const C=h({name:"forgotPasswordComponent",setup(){const{$statusBar:u,$navigationBar:e}=_();B(async()=>{e.overlayShow(),u.overlayShow(),e.setColor("#18181B"),u.setColor("#18181B")})},data(){return{email:"",errors:{},isSubmitDisabled:!0}},methods:{validateForm(){const u={};p(this.email,u),this.errors=u,this.isSubmitDisabled=!!Object.keys(this.errors).length},submitForm(){console.log("Form submitted:",{emailLogin:this.email}),this.$router.push("/auth/otp")}}}),D={class:"flex flex-col justify-center h-dvh px-6 py-12 lg:px-8"},w={class:"block lg:hidden pt-4 pr-5 pl-5 absolute top-0 left-0"},y=t("svg",{class:"w-10 h-10 p-2 bg-zinc-800 rounded-lg hover:bg-zinc-700",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M5 12H19M5 12L11 6M5 12L11 18",stroke:"#ffffff","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1),k={class:"pointer-events-none select-none"},N=t("h2",{class:"mt-3 text-center text-lg font-semibold font-sans leading-5"},"Разве настоящие отаку забывают пароли?! ",-1),S={class:"mt-7 sm:mx-auto sm:w-full sm:max-w-md flex flex-col"},$=t("label",{for:"email",class:"block text-sm font-medium leading-5 text-white"},"Эл. почта",-1),M={class:"mt-1"},A={key:0,class:"text-red-500 text-xs mt-1"},L=["disabled"],V={class:"mt-5 text-center"},O={class:"text-xs text-gray-400"},j=t("br",null,null,-1);function z(u,e,I,P,H,T){const i=m,d=c;return r(),l("div",D,[t("div",w,[n(i,{to:"/auth/signin",class:"font-sans font-sm"},{default:a(()=>[y]),_:1})]),t("div",k,[n(d,{class:"mx-auto w-52 pointer-events-none select-none",preload:"",format:"webp",src:"/otaKu/logo.png",alt:"Ota-ku Смотреть аниме в нашем платформе"}),N]),t("div",S,[t("form",{class:"space-y-5",onSubmit:e[2]||(e[2]=b((...o)=>u.submitForm&&u.submitForm(...o),["prevent"]))},[t("div",null,[$,t("div",M,[E(t("input",{id:"email","onUpdate:modelValue":e[0]||(e[0]=o=>u.email=o),onInput:e[1]||(e[1]=(...o)=>u.validateForm&&u.validateForm(...o)),type:"text",autocomplete:"current-login",required:"",placeholder:"Введите эл. почту",class:"input input-primary"},null,544),[[v,u.email]]),u.errors.email?(r(),l("p",A,x(u.errors.email),1)):F("",!0)])]),t("div",null,[t("button",{disabled:u.isSubmitDisabled,type:"submit",class:g(["button button-primary",{"button-disabled":u.isSubmitDisabled}])},"Продолжать",10,L)])],32),t("div",V,[t("p",O,[s("Используя сайт / приложение, Вы соглашаетесь с условиями "),n(i,{to:"/doc/terms_ru",class:"underline text-blue-500"},{default:a(()=>[s("Пользовательсово соглашения.")]),_:1}),s(" и "),n(i,{to:"/doc/privacy_policy_ru",class:"underline text-blue-500"},{default:a(()=>[s("Политика конфиденциальности.")]),_:1}),s(" Если Вы не согласны с условиями данного соглашения, не используйте сайт / приложение Ota-ku!"),j,s(" а также подтверждаете, что вам больше 16 лет.")])])])])}const U=f(C,[["render",z]]);export{U as default};
