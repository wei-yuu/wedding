import{d as g,y as C,k as d,o as v,p as B,w as b,e as c,z as $,D as S,n as A,a as m,s as w,b as _,g as E,u as y,O as k,i as U,P as D,m as W,t as G,c as H,E as M,l as x,G as J,T,B as O,F as z,q,L as P,C as Q,j as X,v as V}from"./index-d95baf4a.js";import{u as Z}from"./use-create-message-3bef65ca.js";import{g as K}from"./get-file-list.api-19a8cba2.js";import{u as F}from"./use-api-call-0ba21f05.js";import{g as R}from"./get.api-1af867dd.js";const Y={class:"w-96 grid gap-8"},ee={class:"grid gap-2 text-2xl"},te=c("span",null,"如何稱呼：",-1),se={key:0,class:"text-red-500"},ae={class:"grid gap-2 text-2xl"},le=c("span",null,"想對我們說：",-1),ne={key:0,class:"text-red-500"},oe=g({__name:"wishes",props:{visible:{default:!1},visibleModifiers:{}},emits:["update:visible"],setup(u){const{fetch:t}=Z(),e=C(u,"visible"),s=d(""),n=d(""),r=d(!1),l=d(!1),i=async()=>{if(r.value=!1,l.value=!1,!s.value){r.value=!0;return}if(!n.value){l.value=!0;return}y.start("正在紀錄你的祝福～～～","edit"),e.value=!1,await t({name:s.value,message:n.value}).then(()=>{k.confirm({title:`感謝 ${s.value} 的留言`,message:"再留一則或繼續看大家的祝福～",options:{cancelButton:{text:"還有話想說～",color:"pink",callback:()=>{n.value="",e.value=!0}},confirmButton:{text:"看祝福！",color:"blue",callback:()=>{s.value="",n.value=""}}}})}).catch(()=>{k.alert({title:"噢...抱歉！出了點問題🥹",message:"請您再重新發送一次🙏",options:{button:{color:"gray",callback:()=>{e.value=!0}}}})}).finally(()=>y.stop())};return(o,a)=>{const f=U,h=D;return v(),B(h,{visible:e.value,"onUpdate:visible":a[2]||(a[2]=p=>e.value=p),"header-classes":"justify-center","footer-classes":"flex justify-center gap-2",title:"留言給我們 (σ′▽‵)′▽‵)σ","show-close":""},{default:b(()=>[c("div",Y,[c("div",ee,[te,$(c("input",{class:A(["w-full",{"!border-b-red-500":r.value}]),type:"text","onUpdate:modelValue":a[0]||(a[0]=p=>s.value=p)},null,2),[[S,s.value]]),r.value?(v(),m("p",se," 請不要害羞，讓我們知道怎麼稱呼你🥺 ")):w("",!0)]),c("div",ae,[le,$(c("input",{class:A(["w-full",{"!border-b-red-500":l.value}]),type:"text","onUpdate:modelValue":a[1]||(a[1]=p=>n.value=p)},null,2),[[S,n.value]]),l.value?(v(),m("p",ne," 等等！你沒有話要跟我們說嗎？😮 ")):w("",!0)])])]),footer:b(()=>[_(f,{color:"blue",onClick:i},{default:b(()=>[E("(๑•̀ω•́)ノ [發送 !!]")]),_:1})]),_:1},8,["visible"])}}}),re=c("div",{class:"row-span-3 w-32 h-24 bg-yellow-200"},null,-1),ie=c("div",{class:"z-20 row-start-4 w-8 h-8 border-t-[32px] border-t-yellow-200 border-l-[32px] border-l-transparent [box-shadow:_3px_-3px_rgba(0,0,0,0.3)] rounded"},null,-1),ue=c("div",{class:"row-start-4 w-24 h-8 bg-yellow-200"},null,-1),ce={class:"absolute justify-self-center self-center col-span-4 text-3xl"},de=g({__name:"sticky",props:{text:{}},emits:["click"],setup(u){return(t,e)=>(v(),m("div",{class:"relative w-32 h-32 grid grid-cols-4 grid-rows-4 drop-shadow-lg cursor-pointer",onClick:e[0]||(e[0]=s=>t.$emit("click"))},[re,ie,ue,c("p",ce,[W(t.$slots,"default",{},()=>[E(G(t.text),1)])])]))}}),ve={class:"overflow-hidden"},me={key:0,class:"font-yozai text-white text-4xl text-nowrap [text-shadow:_1px_1px_5px_black] inline-block"},fe=g({__name:"index",props:{bullet:{}},emits:["hide"],setup(u){const t=u,e=d(!1),s=H(()=>e.value?t.bullet.message.length>60?45e3:t.bullet.message.length>40?Math.floor(Math.random()*5+30)*1e3:t.bullet.message.length>20?Math.floor(Math.random()*10+15)*1e3:Math.floor(Math.random()*5+10)*1e3:0);return M(()=>t.bullet,()=>e.value=!0),x(()=>{e.value=!0}),(n,r)=>(v(),m("div",ve,[_(T,{enterActiveClass:"transition-all ease-linear",enterFromClass:"translate-x-[75vw]",enterToClass:"translate-x-[-100%]",onAfterEnter:r[0]||(r[0]=l=>e.value=!1),onBeforeLeave:r[1]||(r[1]=l=>n.$emit("hide")),style:J({"transition-duration":`${s.value}ms`})},{default:b(()=>[e.value?(v(),m("p",me,G(n.bullet.message),1)):w("",!0)]),_:1},8,["style"])]))}}),pe={class:"grid gap-4 h-full items-center"},_e=g({__name:"screen",props:O({quantity:{}},{magazine:{default:[]},magazineModifiers:{}}),emits:["update:magazine"],setup(u){const t=C(u,"magazine"),e=u,s=d([]),n=r=>{const l=t.value.shift();l&&s.value.splice(r,1,l)};return x(()=>{s.value=t.value.splice(0,e.quantity)}),(r,l)=>{const i=fe;return v(),m("div",pe,[(v(!0),m(z,null,q(s.value,(o,a)=>(v(),B(i,{key:a,bullet:o,onHide:f=>n(a)},null,8,["bullet","onHide"]))),128))])}}}),ge={class:"h-full w-full p-10 flex justify-center items-center"},he={class:"relative w-full h-full flex justify-center items-center"},be=["src","alt"],we=g({__name:"background",props:{modelValue:{},modelModifiers:{}},emits:["update:modelValue"],setup(u){const t=C(u,"modelValue"),e=d(),s=d(),n=d(),r=l=>{var o,a;const i=(o=t.value)==null?void 0:o.shift();i&&((a=n.value)==null||a.splice(l,1,i))};return x(async()=>{var l;n.value=(l=t.value)==null?void 0:l.splice(0,2),s.value=setInterval(async()=>{e.value?e.value=0:e.value=1},3e4),e.value=1}),P(()=>{clearInterval(s.value)}),(l,i)=>(v(),m("div",ge,[c("div",he,[(v(!0),m(z,null,q(n.value,(o,a)=>(v(),B(T,{key:a,mode:"out-in",enterActiveClass:"transition-opacity ease duration-2000",leaveActiveClass:"transition-opacity ease duration-2000",enterFromClass:"opacity-0",leaveToClass:"opacity-0",onAfterLeave:f=>r(a)},{default:b(()=>[$(c("img",{class:"absolute max-h-full max-w-full rounded-md shadow-lg",src:`https://drive.google.com/thumbnail?id=${o==null?void 0:o.id}&sz=w1366`,alt:o==null?void 0:o.name},null,8,be),[[Q,e.value===a]])]),_:2},1032,["onAfterLeave"]))),128))])]))}}),ye=()=>F(async()=>await K("1O20EMGMomt5mokbWGJbxQy6LnViXWxcs")),xe=()=>F(async()=>await R({sheetId:"1J4nMChqEgfE6XgD4C-AgTsyBGGFGkrTSrrZp0q7Ppbw",range:"Messages!A2:B"})),j=u=>{const t=[...u];for(let e=t.length-1;e>0;e--){const s=Math.floor(Math.random()*(e+1));[t[e],t[s]]=[t[s],t[e]]}return t},$e=X("message",()=>{const u=xe(),t=ye(),e=d([]),s=d([]),n=async()=>{const i=await u.fetch();i.value&&j(i.value).forEach(a=>{const[f,h]=a;e.value.push({name:f,message:h})})},r=async()=>{const i=await t.fetch();if(i.value){const o=j(i.value);s.value.push(...o.map(a=>({id:a.id,name:a.name})))}};return{messages:e,backgrounds:s,init:async()=>{y.start("正在尋找祝福~");try{await n(),await r()}catch(o){throw new Error(String(o))}finally{y.stop()}return await k.alert({title:"祝福已就定位！",options:{button:{text:"讓我們開始吧～ε٩(๑> ₃ <)۶з"}}})},getShuffleMessage:n,getShuffleBackground:r}}),ke={class:"relative h-screen w-screen flex justify-center items-center"},Me={class:"relative w-[75vw] h-[90vh] bg-gray-300/30 rounded-xl [border-image:url('/board-border.png')_300_/_9%_7%_space] border-[20px]"},Ce={class:"absolute top-0 h-full w-full"},Be={class:"absolute right-6 bottom-16"},je=g({__name:"index",setup(u){const{backgrounds:t,messages:e,getShuffleMessage:s,getShuffleBackground:n,init:r}=$e(),l=d(!1),i=d(!1),o=d(7);return M(()=>e,async()=>{e.length<o.value+1&&await s()},{deep:!0}),M(()=>t,async()=>{t.length||await n()},{deep:!0}),x(async()=>{i.value=await r()}),(a,f)=>{const h=we,p=_e,I=de,N=oe;return v(),m("div",ke,[c("div",Me,[i.value?(v(),m(z,{key:0},[_(h,{"model-value":V(t)},null,8,["model-value"]),c("div",Ce,[_(p,{quantity:o.value,magazine:V(e)},null,8,["quantity","magazine"])])],64)):w("",!0)]),c("div",Be,[_(I,{text:"我要留言！",onClick:f[0]||(f[0]=L=>l.value=!0)})]),_(N,{visible:l.value,"onUpdate:visible":f[1]||(f[1]=L=>l.value=L)},null,8,["visible"])])}}});export{je as default};
