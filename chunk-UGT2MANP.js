import{a as Fe,b as Oe}from"./chunk-WTBBCI2O.js";import{b as xe,d as be,e as ve,h as ye,i as Se,j as we,k as Ce,l as Me,m as ke,n as Ee,o as Ie,p as Ue,q as Te,r as je,s as De,t as Pe,u as _,v as Ae,x as Re,y as Ve,z as We}from"./chunk-QULOFPEE.js";import{d as ue,l as ge,q as fe,s as _e,t as he}from"./chunk-63KVYMGA.js";import{b as pe}from"./chunk-BKAN5XR2.js";import{$ as V,B as H,Bb as ae,Cb as T,Db as j,Eb as se,Fb as a,Gb as x,Hb as p,Ib as ce,J as Q,Ja as s,L as E,Nb as le,P as G,Pb as de,Q as q,Qb as M,S as K,Ta as I,U as d,Ua as X,Xa as ee,Z as v,Zb as D,_ as y,aa as Y,ba as W,bb as h,cb as S,d as O,da as F,db as w,e as B,eb as te,fb as re,g as z,gb as g,gc as me,hb as n,i as L,ib as i,jb as u,m as N,ma as Z,nb as U,ob as C,qa as J,qb as f,rb as m,vb as ne,wb as ie,x as $,xb as oe}from"./chunk-2H55ACTG.js";var Ze=["determinateSpinner"];function Je(t,c){if(t&1&&(V(),n(0,"svg",11),u(1,"circle",12),i()),t&2){let e=m();h("viewBox",e._viewBox()),s(),T("stroke-dasharray",e._strokeCircumference(),"px")("stroke-dashoffset",e._strokeCircumference()/2,"px")("stroke-width",e._circleStrokeWidth(),"%"),h("r",e._circleRadius())}}var Xe=new K("mat-progress-spinner-default-options",{providedIn:"root",factory:()=>({diameter:ze})}),ze=100,et=10,Le=(()=>{class t{_elementRef=d(J);_noopAnimations;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;_defaultColor="primary";_determinateCircle;constructor(){let e=d(Xe),r=ge(),o=this._elementRef.nativeElement;this._noopAnimations=r==="di-disabled"&&!!e&&!e._forceAnimations,this.mode=o.nodeName.toLowerCase()==="mat-spinner"?"indeterminate":"determinate",!this._noopAnimations&&r==="reduced-motion"&&o.classList.add("mat-progress-spinner-reduced-motion"),e&&(e.color&&(this.color=this._defaultColor=e.color),e.diameter&&(this.diameter=e.diameter),e.strokeWidth&&(this.strokeWidth=e.strokeWidth))}mode;get value(){return this.mode==="determinate"?this._value:0}set value(e){this._value=Math.max(0,Math.min(100,e||0))}_value=0;get diameter(){return this._diameter}set diameter(e){this._diameter=e||0}_diameter=ze;get strokeWidth(){return this._strokeWidth??this.diameter/10}set strokeWidth(e){this._strokeWidth=e||0}_strokeWidth;_circleRadius(){return(this.diameter-et)/2}_viewBox(){let e=this._circleRadius()*2+this.strokeWidth;return`0 0 ${e} ${e}`}_strokeCircumference(){return 2*Math.PI*this._circleRadius()}_strokeDashOffset(){return this.mode==="determinate"?this._strokeCircumference()*(100-this._value)/100:null}_circleStrokeWidth(){return this.strokeWidth/this.diameter*100}static \u0275fac=function(r){return new(r||t)};static \u0275cmp=I({type:t,selectors:[["mat-progress-spinner"],["mat-spinner"]],viewQuery:function(r,o){if(r&1&&ne(Ze,5),r&2){let l;ie(l=oe())&&(o._determinateCircle=l.first)}},hostAttrs:["role","progressbar","tabindex","-1",1,"mat-mdc-progress-spinner","mdc-circular-progress"],hostVars:18,hostBindings:function(r,o){r&2&&(h("aria-valuemin",0)("aria-valuemax",100)("aria-valuenow",o.mode==="determinate"?o.value:null)("mode",o.mode),se("mat-"+o.color),T("width",o.diameter,"px")("height",o.diameter,"px")("--mat-progress-spinner-size",o.diameter+"px")("--mat-progress-spinner-active-indicator-width",o.diameter+"px"),j("_mat-animation-noopable",o._noopAnimations)("mdc-circular-progress--indeterminate",o.mode==="indeterminate"))},inputs:{color:"color",mode:"mode",value:[2,"value","value",D],diameter:[2,"diameter","diameter",D],strokeWidth:[2,"strokeWidth","strokeWidth",D]},exportAs:["matProgressSpinner"],decls:14,vars:11,consts:[["circle",""],["determinateSpinner",""],["aria-hidden","true",1,"mdc-circular-progress__determinate-container"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__determinate-circle-graphic"],["cx","50%","cy","50%",1,"mdc-circular-progress__determinate-circle"],["aria-hidden","true",1,"mdc-circular-progress__indeterminate-container"],[1,"mdc-circular-progress__spinner-layer"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-left"],[3,"ngTemplateOutlet"],[1,"mdc-circular-progress__gap-patch"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-right"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__indeterminate-circle-graphic"],["cx","50%","cy","50%"]],template:function(r,o){if(r&1&&(ee(0,Je,2,8,"ng-template",null,0,le),n(2,"div",2,1),V(),n(4,"svg",3),u(5,"circle",4),i()(),Y(),n(6,"div",5)(7,"div",6)(8,"div",7),U(9,8),i(),n(10,"div",9),U(11,8),i(),n(12,"div",10),U(13,8),i()()()),r&2){let l=ae(1);s(4),h("viewBox",o._viewBox()),s(),T("stroke-dasharray",o._strokeCircumference(),"px")("stroke-dashoffset",o._strokeDashOffset(),"px")("stroke-width",o._circleStrokeWidth(),"%"),h("r",o._circleRadius()),s(4),g("ngTemplateOutlet",l),s(2),g("ngTemplateOutlet",l),s(2),g("ngTemplateOutlet",l)}},dependencies:[me],styles:[`.mat-mdc-progress-spinner {
  --mat-progress-spinner-animation-multiplier: 1;
  display: block;
  overflow: hidden;
  line-height: 0;
  position: relative;
  direction: ltr;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mat-mdc-progress-spinner circle {
  stroke-width: var(--mat-progress-spinner-active-indicator-width, 4px);
}
.mat-mdc-progress-spinner._mat-animation-noopable, .mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__determinate-circle {
  transition: none !important;
}
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-circle-graphic,
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__spinner-layer,
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container {
  animation: none !important;
}
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container circle {
  stroke-dasharray: 0 !important;
}
@media (forced-colors: active) {
  .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic,
  .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle {
    stroke: currentColor;
    stroke: CanvasText;
  }
}

.mat-progress-spinner-reduced-motion {
  --mat-progress-spinner-animation-multiplier: 1.25;
}

.mdc-circular-progress__determinate-container,
.mdc-circular-progress__indeterminate-circle-graphic,
.mdc-circular-progress__indeterminate-container,
.mdc-circular-progress__spinner-layer {
  position: absolute;
  width: 100%;
  height: 100%;
}

.mdc-circular-progress__determinate-container {
  transform: rotate(-90deg);
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__determinate-container {
  opacity: 0;
}

.mdc-circular-progress__indeterminate-container {
  font-size: 0;
  letter-spacing: 0;
  white-space: nowrap;
  opacity: 0;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container {
  opacity: 1;
  animation: mdc-circular-progress-container-rotate calc(1568.2352941176ms * var(--mat-progress-spinner-animation-multiplier)) linear infinite;
}

.mdc-circular-progress__determinate-circle-graphic,
.mdc-circular-progress__indeterminate-circle-graphic {
  fill: transparent;
}

.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,
.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic {
  stroke: var(--mat-progress-spinner-active-indicator-color, var(--mat-sys-primary));
}
@media (forced-colors: active) {
  .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,
  .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic {
    stroke: CanvasText;
  }
}

.mdc-circular-progress__determinate-circle {
  transition: stroke-dashoffset 500ms cubic-bezier(0, 0, 0.2, 1);
}

.mdc-circular-progress__gap-patch {
  position: absolute;
  top: 0;
  left: 47.5%;
  box-sizing: border-box;
  width: 5%;
  height: 100%;
  overflow: hidden;
}

.mdc-circular-progress__gap-patch .mdc-circular-progress__indeterminate-circle-graphic {
  left: -900%;
  width: 2000%;
  transform: rotate(180deg);
}
.mdc-circular-progress__circle-clipper .mdc-circular-progress__indeterminate-circle-graphic {
  width: 200%;
}
.mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic {
  left: -100%;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-left .mdc-circular-progress__indeterminate-circle-graphic {
  animation: mdc-circular-progress-left-spin calc(1333ms * var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic {
  animation: mdc-circular-progress-right-spin calc(1333ms * var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}

.mdc-circular-progress__circle-clipper {
  display: inline-flex;
  position: relative;
  width: 50%;
  height: 100%;
  overflow: hidden;
}

.mdc-circular-progress--indeterminate .mdc-circular-progress__spinner-layer {
  animation: mdc-circular-progress-spinner-layer-rotate calc(5332ms * var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}

@keyframes mdc-circular-progress-container-rotate {
  to {
    transform: rotate(360deg);
  }
}
@keyframes mdc-circular-progress-spinner-layer-rotate {
  12.5% {
    transform: rotate(135deg);
  }
  25% {
    transform: rotate(270deg);
  }
  37.5% {
    transform: rotate(405deg);
  }
  50% {
    transform: rotate(540deg);
  }
  62.5% {
    transform: rotate(675deg);
  }
  75% {
    transform: rotate(810deg);
  }
  87.5% {
    transform: rotate(945deg);
  }
  100% {
    transform: rotate(1080deg);
  }
}
@keyframes mdc-circular-progress-left-spin {
  from {
    transform: rotate(265deg);
  }
  50% {
    transform: rotate(130deg);
  }
  to {
    transform: rotate(265deg);
  }
}
@keyframes mdc-circular-progress-right-spin {
  from {
    transform: rotate(-265deg);
  }
  50% {
    transform: rotate(-130deg);
  }
  to {
    transform: rotate(-265deg);
  }
}
`],encapsulation:2,changeDetection:0})}return t})();var Ne=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275mod=X({type:t});static \u0275inj=q({imports:[ue]})}return t})();function $e(t,c){let e=c?.injector??d(W),r=new z,o=t(r).subscribe();e.get(F).onDestroy(()=>o.unsubscribe());let l=(b,qe)=>{if(rt(b))return r.next(b),{destroy:O};let Ke=nt(),A=qe?.injector??Ke??e;if(typeof b=="function"){let k=Z(()=>{let Ye=b();de(()=>r.next(Ye))},{injector:A});return o.add({unsubscribe:()=>k.destroy()}),k}let R=b.subscribe(k=>r.next(k));return o.add(R),A!==e&&A.get(F).onDestroy(()=>R.unsubscribe()),{destroy:()=>R.unsubscribe()}};return l.destroy=o.unsubscribe.bind(o),l}function rt(t){return typeof t!="function"&&!N(t)}function nt(){try{return d(W)}catch{return}}function He(t,c,e){let r=typeof t=="function"?{next:t,error:c,complete:e}:t;return o=>o.pipe(E({next:r.next,complete:r.complete}),$(l=>(r.error(l),L)),r.finalize?H(r.finalize):l=>l)}var P=class t{http=d(pe);apiUrl="https://jsonplaceholder.typicode.com/users";getUsers(){return this.http.get(this.apiUrl)}static \u0275fac=function(e){return new(e||t)};static \u0275prov=G({token:t,factory:t.\u0275fac,providedIn:"root"})};var it={users:[],selectedUserId:null,searchTerm:"",loading:!1,error:null},Qe=Ae({providedIn:"root"},We(it),Re(({users:t,selectedUserId:c,searchTerm:e})=>({filteredUsers:M(()=>{let r=e().toLowerCase().trim();return r?t().filter(o=>o.name.toLowerCase().includes(r)||o.username.toLowerCase().includes(r)||o.email.toLowerCase().includes(r)):t()}),selectedUser:M(()=>{let r=c();return r===null?null:t().find(o=>o.id===r)??null}),hasUsers:M(()=>t().length>0),resultCount:M(()=>t().length)})),Ve((t,c=d(P))=>({loadUsers:$e(B(E(()=>_(t,{loading:!0,error:null})),Q(()=>c.getUsers().pipe(He({next:e=>_(t,{users:e,loading:!1}),error:e=>_(t,{loading:!1,error:e.message})}))))),selectUser(e){_(t,{selectedUserId:e})},setSearchTerm(e){_(t,{searchTerm:e})},clearError(){_(t,{error:null})}})));var ot=(t,c)=>c.id;function at(t,c){if(t&1){let e=C();n(0,"button",24),f("click",function(){v(e);let o=m();return y(o.onSearchChange(""))}),n(1,"mat-icon"),a(2,"close"),i()()}}function st(t,c){t&1&&(n(0,"div",20),u(1,"mat-spinner",25),n(2,"div",26),a(3,"Loading users..."),i()())}function ct(t,c){if(t&1){let e=C();n(0,"div",21)(1,"mat-icon",27),a(2,"error_outline"),i(),n(3,"div",28),a(4,"Failed to load users"),i(),n(5,"div",29),a(6),i(),n(7,"button",30),f("click",function(){v(e);let o=m();return y(o.store.loadUsers())}),a(8,"Try again"),i()()}if(t&2){let e=m();s(6),x(e.store.error())}}function lt(t,c){t&1&&a(0," No users found. ")}function dt(t,c){if(t&1&&a(0),t&2){let e=m(2);p(' No users match "',e.store.searchTerm(),'". ')}}function mt(t,c){if(t&1&&(n(0,"div",22)(1,"div",31),S(2,lt,1,0)(3,dt,1,1),i()()),t&2){let e=m();s(2),w(e.store.hasUsers()?3:2)}}function pt(t,c){if(t&1){let e=C();n(0,"button",33),f("click",function(){let o=v(e).$implicit,l=m(2);return y(l.store.selectUser(o.id))}),n(1,"div",34)(2,"div",35),a(3),i(),n(4,"div",36)(5,"div",37),a(6),i(),n(7,"div",38),a(8),i(),n(9,"div",39),a(10),i()()()()}if(t&2){let e=c.$implicit,r=m(2);j("ring-2",r.store.selectedUserId()===e.id)("ring-blue-500",r.store.selectedUserId()===e.id),s(3),p(" ",e.name.charAt(0)," "),s(3),x(e.name),s(2),x(e.email),s(2),ce(" @",e.username," \xB7 ",e.company.name," ")}}function ut(t,c){if(t&1&&(n(0,"div",23),te(1,pt,11,9,"button",32,ot),i()),t&2){let e=m();s(),re(e.store.filteredUsers())}}function gt(t,c){if(t&1){let e=C();u(0,"div",9)(1,"div",40)(2,"div",9),n(3,"div",41)(4,"div",42)(5,"div",36)(6,"div",17),a(7,"Selected User"),i(),n(8,"div",43),a(9),i(),n(10,"div",44),a(11),i(),n(12,"div",45)(13,"div")(14,"span",46),a(15,"Email:"),i(),a(16),i(),n(17,"div")(18,"span",46),a(19,"Phone:"),i(),a(20),i(),n(21,"div")(22,"span",46),a(23,"Website:"),i(),a(24),i(),n(25,"div")(26,"span",46),a(27,"City:"),i(),a(28),i(),n(29,"div",47)(30,"span",46),a(31,"Company:"),i(),a(32),n(33,"span",48),a(34),i()()()(),n(35,"button",49),f("click",function(){v(e);let o=m();return y(o.store.selectUser(null))}),n(36,"mat-icon"),a(37,"close"),i()()()()}if(t&2){let e=c;s(9),x(e.name),s(2),p("@",e.username),s(5),p(" ",e.email),s(4),p(" ",e.phone),s(4),p(" ",e.website),s(4),p(" ",e.address.city),s(4),p(" ",e.company.name," "),s(2),p(' \u2014 "',e.company.catchPhrase,'" ')}}var Ge=class t{store=d(Qe);ngOnInit(){this.store.loadUsers()}onSearchChange(c){this.store.setSearchTerm(c)}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=I({type:t,selectors:[["app-users"]],decls:45,vars:7,consts:[[1,"flex","flex-col","items-center","justify-center","gap-6","p-6","flex-1"],[1,"w-full","max-w-3xl","overflow-hidden"],[1,"text-2xl"],[1,"flex","flex-wrap","gap-2","mt-2"],[1,"px-2","py-0.5","rounded-full","text-xs","font-medium","bg-blue-500/15","text-blue-400"],[1,"px-2","py-0.5","rounded-full","text-xs","font-medium","bg-purple-500/15","text-purple-400"],[1,"px-2","py-0.5","rounded-full","text-xs","font-medium","bg-emerald-500/15","text-emerald-400"],[1,"px-2","py-0.5","rounded-full","text-xs","font-medium","bg-amber-500/15","text-amber-400"],[1,"px-2","py-0.5","rounded-full","text-xs","font-medium","bg-pink-500/15","text-pink-400"],[1,"h-6"],[1,"flex","gap-2","items-start"],["appearance","outline",1,"flex-1"],["matInput","","type","text",3,"ngModelChange","ngModel"],["matSuffix","","mat-icon-button","","aria-label","Clear search"],["mat-stroked-button","",1,"h-14",3,"click","disabled"],[1,"grid","grid-cols-2","gap-3"],[1,"rounded-lg","py-3","px-4","bg-white/3","border","border-white/5"],[1,"text-xs","uppercase","tracking-wider","text-gray-500","mb-1"],[1,"text-lg","font-semibold","tabular-nums"],[1,"text-lg","font-semibold","tabular-nums","text-blue-400"],[1,"rounded-xl","py-16","px-6","flex","flex-col","items-center","justify-center","gap-4","bg-white/2","border","border-white/5"],[1,"rounded-xl","py-10","px-6","text-center","bg-red-500/5","border","border-red-500/20"],[1,"rounded-xl","py-10","px-6","text-center","bg-white/2","border","border-dashed","border-white/10"],[1,"grid","grid-cols-1","md:grid-cols-2","gap-3"],["matSuffix","","mat-icon-button","","aria-label","Clear search",3,"click"],["diameter","40"],[1,"text-sm","text-gray-500"],[1,"text-red-400","mb-2"],[1,"text-red-400","font-medium","mb-1"],[1,"text-sm","text-gray-500","mb-4"],["mat-raised-button","","color","primary",3,"click"],[1,"text-gray-500","text-sm"],["type","button",1,"text-left","p-4","rounded-lg","bg-white/3","border","border-white/5","transition-colors","hover:bg-white/6","cursor-pointer",3,"ring-2","ring-blue-500"],["type","button",1,"text-left","p-4","rounded-lg","bg-white/3","border","border-white/5","transition-colors","hover:bg-white/6","cursor-pointer",3,"click"],[1,"flex","items-start","gap-3"],[1,"flex","items-center","justify-center","w-10","h-10","rounded-full","bg-blue-500/15","text-blue-400","font-semibold","text-sm","shrink-0"],[1,"flex-1","min-w-0"],[1,"font-medium","truncate"],[1,"text-xs","text-gray-500","truncate"],[1,"text-xs","text-gray-600","mt-1","truncate"],[1,"border-t","border-white/5"],[1,"rounded-xl","py-6","px-6","bg-linear-to-br","from-blue-500/5","to-purple-500/5","border","border-white/5"],[1,"flex","items-start","justify-between","gap-4"],[1,"text-lg","font-semibold"],[1,"text-sm","text-gray-400","mb-3"],[1,"grid","grid-cols-1","sm:grid-cols-2","gap-2","text-sm"],[1,"text-gray-500"],[1,"sm:col-span-2"],[1,"text-gray-600","italic"],["mat-icon-button","","aria-label","Close details",3,"click"]],template:function(e,r){if(e&1&&(n(0,"div",0)(1,"mat-card",1)(2,"mat-card-header")(3,"mat-card-title",2),a(4,"Users"),i(),n(5,"mat-card-subtitle",3)(6,"span",4),a(7," withState "),i(),n(8,"span",5),a(9," withComputed "),i(),n(10,"span",6),a(11," withMethods "),i(),n(12,"span",7),a(13," rxMethod "),i(),n(14,"span",8),a(15," DI "),i()()(),n(16,"mat-card-content"),u(17,"div",9),n(18,"div",10)(19,"mat-form-field",11)(20,"mat-label"),a(21,"Search users by name, username, or email"),i(),n(22,"input",12),f("ngModelChange",function(l){return r.onSearchChange(l)}),i(),S(23,at,3,0,"button",13),i(),n(24,"button",14),f("click",function(){return r.store.loadUsers()}),n(25,"mat-icon"),a(26,"refresh"),i(),a(27," Refresh "),i()(),n(28,"div",15)(29,"div",16)(30,"div",17),a(31,"Total Users"),i(),n(32,"div",18),a(33),i()(),n(34,"div",16)(35,"div",17),a(36,"Showing"),i(),n(37,"div",19),a(38),i()()(),u(39,"div",9),S(40,st,4,0,"div",20)(41,ct,9,1,"div",21)(42,mt,4,1,"div",22)(43,ut,3,0,"div",23),S(44,gt,38,8),i()()()),e&2){let o;s(22),g("ngModel",r.store.searchTerm()),s(),w(r.store.searchTerm()?23:-1),s(),g("disabled",r.store.loading()),s(9),x(r.store.resultCount()),s(5),p(" ",r.store.filteredUsers().length," "),s(2),w(r.store.loading()?40:r.store.error()?41:r.store.filteredUsers().length===0?42:43),s(4),w((o=r.store.selectedUser())?44:-1,o)}},dependencies:[ye,xe,be,ve,he,_e,fe,Ee,Se,Ce,ke,Me,we,je,Te,Ie,Ue,Oe,Fe,Pe,De,Ne,Le],styles:["[_nghost-%COMP%]{display:flex;flex:1 1 0%;flex-direction:column}"],changeDetection:0})};export{Ge as Users};
