import{i as k,u as f,r as v,c as I,o as l,a as u,j as t,t as c,b as s,w as m,g as b,P as L,e as $,d as x,k as N,F as h,l as S,m as y,n as B,p as G,_ as T,f as A}from"./C1LtQpT0.js";import{_ as M}from"./Bvadhj0u.js";import{_ as P,a as R,b as V}from"./GgCirH8D.js";const j={setup(){const n=f(),a=v(!1),i=v("");function o(e){document.querySelector(e)&&(console.log("seciontId1",e),document.querySelector(e).scrollIntoView({behavior:"smooth",block:"center",inline:"center"}))}function r(e){i.value=e}return{dataStore:n,scrollTo:o,isModalOpen:a,currentLangName:I(()=>n.getCurrentLangName),onClickCard:r,selectRestaurant:i,captionText:"Desde Aruku Provença, 327",subCaptionText:"!Nuevo! mas restaurantes debajo"}}},z={class:"hero-section w-full",id:"hero-section"},D=t("video",{loop:"",muted:"",autoplay:"",playsinline:"",poster:"",class:"background-video"},[t("source",{src:P,type:"video/mp4"})],-1),q=t("div",{class:"overlay"},null,-1),F={class:"hero-section__text z-10"},O=t("img",{src:R,class:"hero-section__extra-image",alt:"aruku bcn sushi resturant gluten free logo"},null,-1),E={class:"text-3xl px-3 text-slate-200 mb-1 hero-section__text--caption font-extrabold font-1"},H={class:"px-3 color-1 hero-section__text--subcaption flex flex-col text-center font-1"},Y={class:"text-5xl"},K={class:"text-3xl font-1 blink-effect"},J=t("span",{class:"fas fa-shipping-fast mr-1"},null,-1),Q=t("span",{class:"fas fa-calendar mr-1"},null,-1),W={class:"px-2 md:px-4 py-6 flex flex-col gap-4"},X={class:"flex justify-between px-4"},Z={class:"text-black text-2xl font-bold"},tt={class:"w-full"},et=["src"];function ot(n,a,i,o,r,p){const d=$,e=M;return l(),u("figure",z,[D,q,t("div",F,[O,t("div",E,c(o.dataStore.getCurrentData.hero.caption),1),t("div",H,[t("span",Y,c(o.captionText),1),t("span",K,c(o.subCaptionText),1)]),s(d,{to:"/order",class:"order-button text-xl px-3 color-3 mt-4 hero-section__text--online-order",target:"_blank"},{default:m(()=>[J,b(" "+c(o.dataStore.getCurrentData.hero.onlineOrder),1)]),_:1}),s(d,{to:"/reserva",class:"order-button text-xl px-3 color-3 mt-4 hero-section__text--online-order",target:"_blank"},{default:m(()=>[Q,b(" "+c(o.dataStore.getCurrentData.hero.onlineBook),1)]),_:1}),s(e,{modelValue:o.isModalOpen,"onUpdate:modelValue":a[1]||(a[1]=_=>o.isModalOpen=_),"prevent-close":""},{default:m(()=>{var _;return[t("div",W,[t("div",X,[t("span",Z," Reservation "+c((_=(n._.provides[L]||n.$route).path)==null?void 0:_.slice(1)),1),s(d,{color:"gray",size:"xl",variant:"ghost",icon:"i-heroicons-x-mark-20-solid",class:"-my-1",onClick:a[0]||(a[0]=g=>o.isModalOpen=!1)})]),t("div",tt,[t("iframe",{id:"restaurante-arukubcn",title:"Reservas",frameborder:"0",src:`https://www.covermanager.com/reservation/module_restaurant/restaurante-arukubcn/${o.currentLangName}`,height:"580",width:"100%",class:"rounded-2xl"},null,8,et)])])]}),_:1},8,["modelValue"])])])}const nt=k(j,[["render",ot]]),st={class:"card border-2 rounded-md border-black md:w-[600px]"},at=["src"],rt={class:"mt-4 px-4 py-2"},ct={class:"mb-2 text-black w-1/2"},lt={class:"text-xl md:text-3xl font-bold"},it={class:"card__description"},dt=x({__name:"Card",props:{title:String,description:String,imageName:String},setup(n){const a=n;return(i,o)=>(l(),u("div",st,[t("img",{class:"max-h-64 w-full object-cover",src:`${a.imageName}`,alt:"restaurant images",loading:"lazy"},null,8,at),t("div",rt,[t("div",ct,[t("h2",lt,c(n.title),1),t("p",it,c(n.description),1)]),N(i.$slots,"default")])]))}}),_t={class:"my-16 px-8 md:px-8"},ut={class:"text-2xl md:text-4xl font-bold my-6 text-left md:text-center text-[#d82020]"},pt={class:"flex justify-evenly flex-col md:flex-row gap-16 md:gap-8"},mt={class:"flex gap-2 flex-col justify-start"},xt={class:"flex gap-2 flex-col items-start"},ft={class:"flex gap-2"},ht=x({__name:"RestaurantSection",props:{restaurantCardInfo:{},title:{}},setup(n){const a=n;return(i,o)=>{const r=G,p=$,d=dt;return l(),u("section",_t,[t("h2",ut,c(a.title),1),t("div",pt,[(l(!0),u(h,null,S(a.restaurantCardInfo,(e,_)=>(l(),u("div",{key:_},[s(d,{title:e.title,description:e.description,"image-name":e.image},{default:m(()=>[t("div",mt,[t("div",xt,[s(p,{class:"transition-all duration-300 ease-in-out p-0 hover:text-[#d82020] text-lg",size:"lg",color:"black",variant:"link",label:e.direction,to:e==null?void 0:e.location,target:"_blank"},{trailing:m(()=>[s(r,{name:"i-heroicons-map-pin-20-solid",class:"w-5 h-5"})]),_:2},1032,["label","to"]),t("div",ft,[s(p,{class:"transition-all duration-300 ease-in-out hover:px-3 hover:text-lg",size:"sm",variant:"outline",to:`tel:${e==null?void 0:e.phone}`},{trailing:m(()=>[s(r,{name:"i-heroicons-phone-20-solid",class:"w-5 h-5"})]),_:2},1032,["to"]),e!=null&&e.reservationUrl?(l(),y(p,{key:0,class:"font-bold rounded-md uppercase transition-all duration-300 ease-in-out hover:px-4 mr-auto",size:"sm",variant:"outline",label:"reserva",to:e==null?void 0:e.reservationUrl,target:"_blank"},{trailing:m(()=>[s(r,{name:"i-heroicons-arrow-right-20-solid",class:"w-5 h-5"})]),_:2},1032,["to"])):B("",!0)])])])]),_:2},1032,["title","description","image-name"])]))),128))])])}}}),gt={class:"my-8 px-8 md:px-8"},vt={class:"text-2xl md:text-4xl font-bold my-6 text-left md:text-center text-[#d82020]"},bt={class:"flex gap-8 flex-col md:flex-row rounded"},kt={class:"text-xl text-black font-bold mb-4"},$t=["src"],St=x({__name:"MapSection",props:{mapSectionInfo:[{}],title:String},setup(n){return(a,i)=>(l(),u("section",gt,[t("h2",vt,c(n.title),1),t("div",bt,[(l(!0),u(h,null,S(n.mapSectionInfo,(o,r)=>(l(),u("div",{key:r,class:"w-full"},[t("h3",kt,c(o.title),1),t("iframe",{src:o==null?void 0:o.mapUrl,width:"100%",height:"400",style:{"border-radius":"4px",border:"1px solid #bebebe"},loading:"lazy",referrerpolicy:"no-referrer-when-downgrade"},null,8,$t)]))),128))])]))}}),yt={class:"relative"},wt="Todos Nuestros Restaurantes en Barcelona",Ct={__name:"Landing",setup(n){f();const o=[{title:"Aruku Provencia",url:"/provencia",image:"/images/hero.jpg",reservationUrl:"/provencia",location:"https://maps.app.goo.gl/HGgVsEU36d9q14xM9",phone:"692043240",direction:"C/ de Provença, 327, L'Eixample, 08037 Barcelona"},{title:"Aruku Gracia",url:"/gracia",image:"/images/hero.jpg",reservationUrl:"/gracia",location:"https://maps.app.goo.gl/L5YEdLqov1FGYSMP7",phone:"615219121",direction:"Carrer de Bruniquer, 51, Gràcia, 08024 Barcelona"}],r={title:"Localiza Nuestros Restaurantes",mapList:[{mapUrl:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2992.828968160094!2d2.1626241926641305!3d41.399520521245464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a3f55ea373d7%3A0x9e71dfd6aaf80ddc!2sARUKU%20Sushi%20Gluten%20Free!5e0!3m2!1sen!2ses!4v1719947614552!5m2!1sen!2ses",title:"Aruku Provencia",key:"provencia"},{mapUrl:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2992.5475802796686!2d2.159161076902106!3d41.40563059486216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a3983d51b619%3A0x77aeefaae2dd71f3!2sAruku%20Sin%20Gluten%20Gracia!5e0!3m2!1sen!2ses!4v1719947635951!5m2!1sen!2ses",title:"Aruku Garcia",key:"gracia"}]};return(p,d)=>{const e=T,_=nt,g=ht,w=V,C=St,U=A;return l(),u(h,null,[s(e,{class:"absolute"}),t("main",yt,[s(_),s(g,{restaurantCardInfo:o,title:wt}),s(w,{class:"bg-black"}),s(C,{mapSectionInfo:r.mapList,title:r.title},null,8,["mapSectionInfo","title"])]),s(U)],64)}}},Ut=x({setup(){return{dataStore:f()}}});function It(n,a,i,o,r,p){const d=Ct;return l(),y(d)}const Gt=k(Ut,[["render",It]]);export{Gt as default};
