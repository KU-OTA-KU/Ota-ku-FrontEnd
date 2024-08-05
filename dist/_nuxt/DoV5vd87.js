import{_ as w}from"./DVHgWvUo.js";import{_}from"./vzQfPBXo.js";import{b,v as h}from"./BFtnGYCG.js";import{u as B,_ as v}from"./-W1aSz-M.js";import{d as E,G as x,C as n,H as u,I as l,B as i,J as g,L as d,M as m,N as p,O as c,P as F,Q as o,y as r}from"./BP9xYyLZ.js";const C=E({name:"signInComponent",setup(){const{$statusBar:t,$navigationBar:s}=B();x(async()=>{s.overlayShow(),t.overlayShow(),s.setColor("#18181B"),t.setColor("#18181B")})},data(){return{email:"",password:"",errors:{},isSubmitDisabled:!0}},methods:{validateForm(){const t={};b(this.email,t),h(this.password,t),this.errors=t,this.isSubmitDisabled=!!Object.keys(this.errors).length},submitForm(){console.log("Form submitted:",{emailLogin:this.email,password:this.password})}}}),y={class:"flex flex-col justify-center h-dvh px-6 py-12 lg:px-8"},D={class:"block lg:hidden pt-4 pr-5 pl-5 absolute top-0 left-0"},k=u("svg",{class:"w-10 h-10 p-2 bg-zinc-800 rounded-lg hover:bg-zinc-700",viewBox:"0 0 512 512",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"},[u("title",null,"cancel"),u("g",{id:"Page-1",stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},[u("g",{id:"work-case",class:"fill-white",transform:"translate(91.520000, 91.520000)"},[u("polygon",{id:"Close",points:"328.96 30.2933333 298.666667 1.42108547e-14 164.48 134.4 30.2933333 1.42108547e-14 1.42108547e-14 30.2933333 134.4 164.48 1.42108547e-14 298.666667 30.2933333 328.96 164.48 194.56 298.666667 328.96 328.96 298.666667 194.56 164.48"})])])],-1),S={class:"pointer-events-none select-none"},N=u("h2",{class:"mt-3 text-center text-lg font-semibold font-sans leading-5"},"Откройте для себя мир Отаку!",-1),$={class:"mt-7 sm:mx-auto sm:w-full sm:max-w-md flex flex-col"},A=u("label",{for:"email",class:"block text-sm font-medium leading-5 text-white"},"Эл. почта",-1),I={class:"mt-1"},V={key:0,class:"text-red-500 text-xs mt-1"},M={class:"flex items-center justify-between"},O=u("label",{for:"password",class:"block text-sm font-medium leading-5 text-white"},"Пароль",-1),j={class:"mt-1"},z={class:"mt-1"},L={key:0,class:"text-red-500 text-xs mt-1"},P=["disabled"],q={class:"mt-5 text-center"},T={class:"text-xs text-gray-400"},U=u("br",null,null,-1);function G(t,s,H,J,K,Q){const a=w,f=_;return r(),n("div",y,[u("div",D,[l(a,{to:"/welcome",class:"font-sans font-sm"},{default:i(()=>[k]),_:1})]),u("div",S,[l(f,{class:"mx-auto w-52 pointer-events-none select-none",preload:"",format:"webp",src:"/otaKu/logo.png",alt:"Ota-ku Смотреть аниме в нашем платформе"}),N]),u("div",$,[u("form",{class:"space-y-5",onSubmit:s[4]||(s[4]=g((...e)=>t.submitForm&&t.submitForm(...e),["prevent"]))},[u("div",null,[A,u("div",I,[d(u("input",{id:"email","onUpdate:modelValue":s[0]||(s[0]=e=>t.email=e),onInput:s[1]||(s[1]=(...e)=>t.validateForm&&t.validateForm(...e)),type:"text",autocomplete:"current-login",required:"",placeholder:"Введите эл. почту",class:"input input-primary"},null,544),[[m,t.email]]),t.errors.email?(r(),n("p",V,p(t.errors.email),1)):c("",!0)])]),u("div",null,[u("div",M,[O,u("div",j,[l(a,{class:"text-sm text-blue-400",to:"/auth/forgotpassword"},{default:i(()=>[o("Забыли Пароль?")]),_:1})])]),u("div",z,[d(u("input",{id:"password","onUpdate:modelValue":s[2]||(s[2]=e=>t.password=e),onInput:s[3]||(s[3]=(...e)=>t.validateForm&&t.validateForm(...e)),type:"password",autocomplete:"current-password",required:"",placeholder:"Введите пароль",class:"input input-primary"},null,544),[[m,t.password]]),t.errors.password?(r(),n("p",L,p(t.errors.password),1)):c("",!0)])]),u("div",null,[u("button",{disabled:t.isSubmitDisabled,type:"submit",class:F(["button button-primary",{"button-disabled":t.isSubmitDisabled}])},"Войти",10,P)])],32),u("div",q,[u("p",T,[o("Используя сайт / приложение, Вы соглашаетесь с условиями "),l(a,{to:"/doc/terms_ru",class:"underline text-blue-500"},{default:i(()=>[o("Пользовательсово соглашения.")]),_:1}),o(" и "),l(a,{to:"/doc/privacy_policy_ru",class:"underline text-blue-500"},{default:i(()=>[o("Политика конфиденциальности.")]),_:1}),o(" Если Вы не согласны с условиями данного соглашения, не используйте сайт / приложение Ota-ku!"),U,o(" а также подтверждаете, что вам больше 16 лет.")])])])])}const u4=v(C,[["render",G]]);export{u4 as default};
