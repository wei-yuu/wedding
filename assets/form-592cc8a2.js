import{r as x,q as D,b as V,y as M,d as p,o as d,c as _,a as o,u as C,t as g,n as U,x as f,h as j,z as h,j as b,w as m,F as k,g as T,k as v,A as q,B,f as S,v as A,T as N,C as w,_ as O,D as E,E as F,e as H,G as I}from"./index-f665d77b.js";import{i as Q,u as R}from"./use-api-call-5342b199.js";const J=a=>{const e=new FormData;return Object.entries(a).forEach(([s,t])=>{e.append(s,t)}),Q.post("/forms/d/e/1FAIpQLSdzkZ4TYA0-K5KlI5LTuNNkWi-CS3OZLKMuJr8-fJ0fzQxRAg/formResponse",e)};var $=(a=>(a.friendship="entry.1989128734",a.name="entry.83188872",a.phone="entry.685352363",a.relationship="entry.12693519",a.attend="entry.239572116",a.attendance="entry.479308312",a.childSeat="entry.1066109351",a.childSeatNumber="entry.1243535652",a.eatingHabits="entry.1074705634",a.invitationType="entry.1925531322",a.address="entry.707750234",a.email="entry.1970927110",a.message="entry.1597428855",a))($||{});const W=()=>R(async a=>{const e=x({});return Object.entries(a).forEach(([s,t])=>{switch(s){case"childSeat":e.value[$.childSeat]=t.value,e.value[$.childSeatNumber]=t.childSeatNumber;return;case"invitationType":e.value[$.invitationType]=t.value,e.value[$.address]=t.address,e.value[$.email]=t.email;return;default:e.value[$[s]]=t;return}}),await J(e.value)}),z=D("form",()=>{const a=W(),e=x({name:"",phone:"",friendship:"",relationship:"",attend:"",attendance:"",childSeat:{value:""},eatingHabits:"",invitationType:{value:"",address:"",email:""},message:"",thx:""}),s=x("next"),t=x(0),r=x(Object.keys(e.value).length-2),l=V(()=>x(Object.keys(e.value)).value[t.value]),n=()=>{s.value="previous",l.value==="invitationType"&&(e.value.attend==="禮到人不到"||e.value.attend==="否")?t.value-=4:t.value-=1},u=()=>{s.value="next",l.value==="attend"&&(e.value.attend==="禮到人不到"||e.value.attend==="否")?t.value+=4:t.value+=1},i=async()=>{await a.fetch(e.value).finally(()=>{t.value+=1})};return{form:e,action:M(s),current:M(l),tail:M(r),step:M(t),previous:n,next:u,submit:i}}),Y={class:"relative flex h-[calc(100vh-117px)] w-full md:w-[80vw] flex-col items-center justify-center"},Z={class:"w-full text-center"},G={class:"font-cursive text-4xl"},P={class:"flex gap-2 max-h-[90%] w-full items-center justify-evenly py-8"},X={class:"w-full px-6 flex justify-center gap-4"},K={class:"w-full text-center"},ee=["disabled"],y=p({__name:"field",props:{data:{},question:{},disableButton:{type:Boolean},showChevrons:{type:Boolean,default:!0}},setup(a){const{previous:e,next:s,submit:t,step:r,tail:l}=z(),n=()=>{r===l?t():s()};return(u,i)=>(d(),_("div",Y,[o("span",Z,[C(u.$slots,"question",{},()=>[o("span",G,g(u.question),1)])]),o("div",P,[u.showChevrons?(d(),_("button",{key:0,class:U(["z-10 font-icon text-5xl hidden md:block",{invisible:f(r)===0}]),onClick:i[0]||(i[0]=(...c)=>f(e)&&f(e)(...c))}," chevron_left ",2)):j("",!0),o("div",X,[C(u.$slots,"default",{},()=>[C(u.$slots,"content",{data:u.data})])]),u.showChevrons?(d(),_("button",{key:1,class:U(["z-10 font-icon text-5xl hidden md:block",{"pointer-events-none text-gray-300":u.disableButton,invisible:f(r)===f(l)}]),onClick:i[1]||(i[1]=(...c)=>f(s)&&f(s)(...c))}," chevron_right ",2)):j("",!0)]),o("span",K,[C(u.$slots,"button",{},()=>[u.showChevrons?(d(),_("button",{key:0,class:U(["w-32 border-2 py-1 border-black rounded text-xl disabled:text-gray-300 disabled:border-gray-300",{"hover:bg-black hover:text-white":!u.disableButton}]),disabled:u.disableButton,onClick:i[2]||(i[2]=c=>n())},g(f(r)===f(l)?"寫完嚕！":"下一題"),11,ee)):j("",!0)])])]))}}),te={class:"font-cursive grid gap-4 text-4xl"},le=["id","value"],ae=["for"],se=p({__name:"attend",props:{modelValue:{required:!0,default:""},modelModifiers:{}},emits:["update:modelValue"],setup(a){const e=h(a,"modelValue"),s=[{id:"attend",value:"是",label:"肯定要的！我一定會出現！！🥳"},{id:"gift",value:"禮到人不到",label:"Sorry～禮到人不到，祝福你們🎁"},{id:"regret",value:"否",label:"抱歉，那天無法出席，恭喜你們🎉"}];return(t,r)=>{const l=y;return d(),b(l,{question:"是否會出席？","disable-button":!e.value},{default:m(()=>[o("ul",te,[(d(),_(k,null,T(s,(n,u)=>o("li",{key:u},[v(o("input",{class:"mr-2 h-5 w-5",type:"radio",name:"attend",id:n.id,value:n.value,"onUpdate:modelValue":r[0]||(r[0]=i=>e.value=i)},null,8,le),[[q,e.value]]),o("label",{for:n.id},g(n.label),9,ae)])),64))])]),_:1},8,["disable-button"])}}}),oe={class:"absolute mt-14 grid max-h-40 md:max-h-60 w-full p-2 gap-2 overflow-auto rounded bg-white/30"},ne=["onClick"],L=p({__name:"index",props:B({options:{}},{modelValue:{type:Boolean,default:!1},modelModifiers:{}}),emits:B(["click"],["update:modelValue"]),setup(a){const e=h(a,"modelValue");return(s,t)=>(d(),_(k,null,[C(s.$slots,"default"),S(N,{enterActiveClass:"transition-opacity ease duration-500",leaveActiveClass:"transition-opacity ease duration-500",enterFromClass:"opacity-0",enterToClass:"opacity-100",leaveFromClass:"opacity-100",leaveToClass:"opacity-0"},{default:m(()=>[v(o("div",oe,[C(s.$slots,"dropdown",{},()=>[(d(!0),_(k,null,T(s.options,(r,l)=>(d(),_("span",{class:"w-full justify-self-center cursor-pointer rounded-lg border-2 bg-gray-200 p-2",key:l,onClick:n=>s.$emit("click",r)},g(r),9,ne))),128))])],512),[[A,e.value]])]),_:3})],64))}}),ue={class:"relative flex w-full justify-center"},re=p({__name:"attendance",props:{modelValue:{required:!0,default:""},modelModifiers:{}},emits:["update:modelValue"],setup(a){const e=h(a,"modelValue"),s=x(!1),t=V({get:()=>parseInt(e.value??"")||"",set:r=>{e.value=r.toString()}});return(r,l)=>{const n=L,u=y;return d(),b(u,{question:"當日出席的人數？","disable-button":!e.value},{default:m(()=>[o("div",ue,[S(n,{modelValue:s.value,"onUpdate:modelValue":l[3]||(l[3]=i=>s.value=i),options:[1,2,3,4,5],onClick:l[4]||(l[4]=i=>t.value=i)},{default:m(()=>[v(o("input",{type:"number",min:"1",class:"w-full",placeholder:"請自行輸入數字，也可從下方選擇！","onUpdate:modelValue":l[0]||(l[0]=i=>t.value=i),onFocus:l[1]||(l[1]=i=>s.value=!0),onBlur:l[2]||(l[2]=i=>s.value=!1)},null,544),[[w,t.value,void 0,{number:!0}]])]),_:1},8,["modelValue"])])]),_:1},8,["disable-button"])}}}),ie={class:"font-cursive grid gap-4 text-4xl"},de={class:"cursor-pointer",for:"yes"},ce=o("span",null,"需要！請幫我準備",-1),me=["disabled"],ve=o("span",null,"張",-1),pe=o("label",{class:"cursor-pointer",for:"no"},"不用麻煩～趕🦀️！",-1),fe=p({__name:"child-seat",props:{modelValue:{required:!0,default:{value:"",childSeatNumber:void 0}},modelModifiers:{}},emits:["update:modelValue"],setup(a){const e=h(a,"modelValue");return(s,t)=>{const r=y;return d(),b(r,{question:"是否需要幫您準備兒童座椅？","disable-button":!e.value.value},{default:m(()=>[o("ul",ie,[o("li",null,[v(o("input",{class:"mr-2 h-5 w-5",type:"radio",name:"child-seat",id:"yes",value:"是","onUpdate:modelValue":t[0]||(t[0]=l=>e.value.value=l)},null,512),[[q,e.value.value]]),o("label",de,[ce,v(o("input",{type:"number",min:"1",class:"w-16 text-center disabled:border-b-gray-400 disabled:text-gray-400",disabled:e.value.value!=="是","onUpdate:modelValue":t[1]||(t[1]=l=>e.value.childSeatNumber=l)},null,8,me),[[w,e.value.childSeatNumber]]),ve])]),o("li",null,[v(o("input",{class:"mr-2 h-5 w-5",type:"radio",name:"child-seat",id:"no",value:"否","onUpdate:modelValue":t[2]||(t[2]=l=>e.value.value=l)},null,512),[[q,e.value.value]]),pe])])]),_:1},8,["disable-button"])}}}),_e={class:"font-cursive grid gap-4 text-4xl"},be=["id","value"],he=["for"],ye=p({__name:"eating-habits",props:{modelValue:{required:!0,default:""},modelModifiers:{}},emits:["update:modelValue"],setup(a){const e=h(a,"modelValue"),s=[{id:"carnivore",value:"葷",label:"無肉不歡，我需要大口吃肉🍖(葷食)"},{id:"herbivore",value:"素",label:"養身健康，請多給我蔬菜🥬(素食)"}];return(t,r)=>{const l=y;return d(),b(l,{question:"請問您的飲食習慣？","disable-button":!e.value},{default:m(()=>[o("ul",_e,[(d(),_(k,null,T(s,(n,u)=>o("li",{key:u},[v(o("input",{class:"mr-2 h-5 w-5",type:"radio",name:"eating",id:n.id,value:n.value,"onUpdate:modelValue":r[0]||(r[0]=i=>e.value=i)},null,8,be),[[q,e.value]]),o("label",{class:"cursor-pointer",for:n.id},g(n.label),9,he)])),64))])]),_:1},8,["disable-button"])}}}),xe=["id","value"],Ve=["for"],ge=["src","alt"],$e=p({__name:"friendship",props:{modelValue:{required:!0,default:""},modelModifiers:{}},emits:["update:modelValue"],setup(a){const e=h(a,"modelValue"),s=[{id:"bride",value:"新娘",image:"./bride.jpg",caption:"美麗的 Yura～"},{id:"groom",value:"新郎",image:"./groom.jpg",caption:"帥氣的 Wilson！"}];return(t,r)=>{const l=y;return d(),b(l,{question:"請問您是新郎 or 新娘的朋友呢？","disable-button":!e.value},{content:m(()=>[(d(),_(k,null,T(s,(n,u)=>o("span",{key:u},[v(o("input",{hidden:"",type:"radio",name:"friendship",id:n.id,value:n.value,"onUpdate:modelValue":r[0]||(r[0]=i=>e.value=i)},null,8,xe),[[q,e.value]]),o("label",{class:"grid cursor-pointer gap-4",for:n.id},[o("img",{class:"w-72 rounded-3xl hover:shadow-xl",src:n.image,alt:n.id},null,8,ge),o("p",{class:U(["relative font-cursive text-center text-2xl rounded p-4",{"active-line-groom":e.value===n.value&&n.value==="新郎","active-line-bride":e.value===n.value&&n.value==="新娘"}])},g(n.caption),3)],8,Ve)])),64))]),_:1},8,["disable-button"])}}});const we=O($e,[["__scopeId","data-v-880535dc"]]),Ce={class:"font-cursive grid gap-4 text-4xl"},ke=["id","value"],qe=["for"],Se={class:"mt-3"},Te=["for"],Me=["id","onUpdate:modelValue"],Ue=p({__name:"invitation-type",props:{modelValue:{required:!0,default:{value:"",address:"",email:""}},modelModifiers:{}},emits:["update:modelValue"],setup(a){const e=h(a,"modelValue"),s=[{id:"paper",value:"紙本",label:"我喜歡紙糊的，請寄給我～📮",infoLabel:"地址：",infoKey:"address"},{id:"email",value:"電子",label:"我是環保小尖兵，請 mail 給我～📧",infoLabel:"E-Mail：",infoKey:"email"}],t=V(()=>{const r=e.value;return r.value&&(r.address||r.email)});return(r,l)=>{const n=y;return d(),b(n,{question:"送給你的紅色💣","disable-button":!t.value},{default:m(()=>[o("ul",Ce,[(d(),_(k,null,T(s,(u,i)=>o("li",{key:i},[v(o("input",{class:"mr-2 h-5 w-5",type:"radio",name:"invitation",id:u.id,value:u.value,"onUpdate:modelValue":l[0]||(l[0]=c=>e.value.value=c)},null,8,ke),[[q,e.value.value]]),o("label",{class:"cursor-pointer",for:u.id},g(u.label),9,qe),S(N,{enterActiveClass:"transition-opacity ease duration-500",leaveActiveClass:"transition-opacity ease duration-500",enterFromClass:"opacity-0",enterToClass:"opacity-100",leaveFromClass:"opacity-100",leaveToClass:"opacity-0"},{default:m(()=>[v(o("div",Se,[o("label",{class:"cursor-pointer",for:u.infoLabel},g(u.infoLabel),9,Te),v(o("input",{id:u.infoLabel,type:"text",class:"w-full","onUpdate:modelValue":c=>e.value[u.infoKey]=c},null,8,Me),[[w,e.value[u.infoKey]]])],512),[[A,e.value.value===u.value]])]),_:2},1024)])),64))])]),_:1},8,["disable-button"])}}}),je=p({__name:"message",props:{modelValue:{required:!0,default:""},modelModifiers:{}},emits:["update:modelValue"],setup(a){const e=h(a,"modelValue"),s=x(),t=x("44px");return E(()=>e.value,()=>{s.value&&(s.value.style.height="44px",t.value=`${s.value.scrollHeight}px`)}),(r,l)=>{const n=y;return d(),b(n,{question:"最後想告訴我們？","disable-button":!e.value},{default:m(()=>[v(o("textarea",{ref_key:"message",ref:s,class:"w-full resize-none overflow-hidden whitespace-pre-wrap border-x-transparent border-t-transparent shadow-none",placeholder:"開放大肆祝福唷～沒有就寫無🥹",style:F({height:t.value}),"onUpdate:modelValue":l[0]||(l[0]=u=>e.value=u)},`
    `,4),[[w,e.value]])]),_:1},8,["disable-button"])}}}),Be=p({__name:"name",props:{modelValue:{required:!0,default:""},modelModifiers:{}},emits:["update:modelValue"],setup(a){const e=h(a,"modelValue");return(s,t)=>{const r=y;return d(),b(r,{question:"你是誰！？","disable-button":!e.value},{default:m(()=>[v(o("input",{"onUpdate:modelValue":t[0]||(t[0]=l=>e.value=l),class:"w-full",type:"text",placeholder:"請留下您美麗的姓名～"},null,512),[[w,e.value]])]),_:1},8,["disable-button"])}}}),Ne=p({__name:"phone",props:{modelValue:{required:!0,default:""},modelModifiers:{}},emits:["update:modelValue"],setup(a){const e=h(a,"modelValue");return(s,t)=>{const r=y;return d(),b(r,{question:"你的電話？","disable-button":!e.value},{default:m(()=>[v(o("input",{"onUpdate:modelValue":t[0]||(t[0]=l=>e.value=l),class:"w-full",type:"text",placeholder:"請留下您的電話～"},null,512),[[w,e.value]])]),_:1},8,["disable-button"])}}}),Ae={class:"relative flex w-full justify-center"},Oe=p({__name:"relationship",props:B({form:{}},{modelValue:{required:!0,default:""},modelModifiers:{}}),emits:["update:modelValue"],setup(a){const e=h(a,"modelValue"),s=["親戚/家人","國小同學","國中同學","高中同窗","大學同窗","同事","超越以上關係的至親好友"],t=x(!1),r=V(()=>e.value?s.filter(l=>l.includes(e.value??"")):s);return(l,n)=>{const u=L,i=y;return d(),b(i,{question:`您與${l.form.friendship}的關係？`,"disable-button":!e.value},{default:m(()=>[o("div",Ae,[S(u,{modelValue:t.value,"onUpdate:modelValue":n[3]||(n[3]=c=>t.value=c),options:r.value,onClick:n[4]||(n[4]=c=>e.value=c)},{default:m(()=>[v(o("input",{type:"text",class:"w-full",placeholder:"有些關係不可以說得太明白🤫","onUpdate:modelValue":n[0]||(n[0]=c=>e.value=c),onFocus:n[1]||(n[1]=c=>t.value=!0),onBlur:n[2]||(n[2]=c=>t.value=!1)},null,544),[[w,e.value]])]),_:1},8,["modelValue","options"])])]),_:1},8,["question","disable-button"])}}}),ze={},Le=o("button",{class:"custom-btn btn-7"},[o("span",{class:"text-2xl p-1"},"點我看資訊")],-1);function De(a,e){const s=H("router-link"),t=y;return d(),b(t,{"show-chevrons":!1,question:"非常感謝您的填寫！"},{default:m(()=>[S(s,{to:"/event-detail"},{default:m(()=>[Le]),_:1})]),_:1})}const Ee=O(ze,[["render",De]]),Fe=Object.freeze(Object.defineProperty({__proto__:null,attend:se,attendance:re,childSeat:fe,eatingHabits:ye,friendship:we,invitationType:Ue,message:je,name:Be,phone:Ne,relationship:Oe,thx:Ee},Symbol.toStringTag,{value:"Module"})),He={class:"flex items-center justify-evenly"},Re=p({__name:"form",setup(a){const e=z(),s=V(()=>Fe[e.current]),t=V(()=>e.form),r=V(()=>{switch(e.action){case"previous":return"translate-x-[-100%]";case"next":default:return"translate-x-full"}}),l=V(()=>{switch(e.action){case"previous":return"translate-x-full";case"next":default:return"translate-x-[-100%]"}});return(n,u)=>(d(),_("div",He,[S(N,{mode:"out-in",enterActiveClass:"transition-all ease duration-500",leaveActiveClass:"transition-all ease duration-700",enterFromClass:`opacity-0 ${r.value}`,leaveToClass:`opacity-0 ${l.value}`},{default:m(()=>[(d(),b(I(s.value),{modelValue:t.value[f(e).current],"onUpdate:modelValue":u[0]||(u[0]=i=>t.value[f(e).current]=i),form:f(e).form},null,8,["modelValue","form"]))]),_:1},8,["enterFromClass","leaveToClass"])]))}});export{Re as default};
