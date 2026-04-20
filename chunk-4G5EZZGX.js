import{a as _,b as T,c as D}from"./chunk-BPTX2QYF.js";import{a as E,d as R,s as L,t as A}from"./chunk-63KVYMGA.js";import"./chunk-BKAN5XR2.js";import{Db as C,Eb as k,Fb as m,Q as u,Ta as i,U as s,Ua as h,Va as x,ca as p,hb as a,ib as r,jb as l,qa as g,sb as v,tb as f,ub as y,wb as M,xb as w}from"./chunk-2H55ACTG.js";var z=["*",[["mat-toolbar-row"]]],B=["*","mat-toolbar-row"],F=(()=>{class t{static \u0275fac=function(o){return new(o||t)};static \u0275dir=x({type:t,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]})}return t})(),S=(()=>{class t{_elementRef=s(g);_platform=s(E);_document=s(p);color;_toolbarRows;constructor(){}ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static \u0275fac=function(o){return new(o||t)};static \u0275cmp=i({type:t,selectors:[["mat-toolbar"]],contentQueries:function(o,n,j){if(o&1&&y(j,F,5),o&2){let b;M(b=w())&&(n._toolbarRows=b)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(o,n){o&2&&(k(n.color?"mat-"+n.color:""),C("mat-toolbar-multiple-rows",n._toolbarRows.length>0)("mat-toolbar-single-row",n._toolbarRows.length===0))},inputs:{color:"color"},exportAs:["matToolbar"],ngContentSelectors:B,decls:2,vars:0,template:function(o,n){o&1&&(v(z),f(0),f(1,1))},styles:[`.mat-toolbar {
  background: var(--mat-toolbar-container-background-color, var(--mat-sys-surface));
  color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
}
.mat-toolbar, .mat-toolbar h1, .mat-toolbar h2, .mat-toolbar h3, .mat-toolbar h4, .mat-toolbar h5, .mat-toolbar h6 {
  font-family: var(--mat-toolbar-title-text-font, var(--mat-sys-title-large-font));
  font-size: var(--mat-toolbar-title-text-size, var(--mat-sys-title-large-size));
  line-height: var(--mat-toolbar-title-text-line-height, var(--mat-sys-title-large-line-height));
  font-weight: var(--mat-toolbar-title-text-weight, var(--mat-sys-title-large-weight));
  letter-spacing: var(--mat-toolbar-title-text-tracking, var(--mat-sys-title-large-tracking));
  margin: 0;
}
@media (forced-colors: active) {
  .mat-toolbar {
    outline: solid 1px;
  }
}
.mat-toolbar .mat-form-field-underline,
.mat-toolbar .mat-form-field-ripple,
.mat-toolbar .mat-focused .mat-form-field-ripple {
  background-color: currentColor;
}
.mat-toolbar .mat-form-field-label,
.mat-toolbar .mat-focused .mat-form-field-label,
.mat-toolbar .mat-select-value,
.mat-toolbar .mat-select-arrow,
.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow {
  color: inherit;
}
.mat-toolbar .mat-input-element {
  caret-color: currentColor;
}
.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed {
  --mat-button-text-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
  --mat-button-outlined-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
}

.mat-toolbar-row, .mat-toolbar-single-row {
  display: flex;
  box-sizing: border-box;
  padding: 0 16px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  white-space: nowrap;
  height: var(--mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-row, .mat-toolbar-single-row {
    height: var(--mat-toolbar-mobile-height, 56px);
  }
}

.mat-toolbar-multiple-rows {
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  width: 100%;
  min-height: var(--mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-multiple-rows {
    min-height: var(--mat-toolbar-mobile-height, 56px);
  }
}
`],encapsulation:2,changeDetection:0})}return t})();var O=(()=>{class t{static \u0275fac=function(o){return new(o||t)};static \u0275mod=h({type:t});static \u0275inj=u({imports:[R]})}return t})();var c=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=i({type:t,selectors:[["app-header"]],decls:10,vars:0,consts:[["color","primary"],["routerLink","/",1,"logo-text","me-2"],[1,"spacer"],["mat-button","","routerLink","/counter","routerLinkActive","active-link"],["mat-button","","routerLink","/todos","routerLinkActive","active-link"],["mat-button","","routerLink","/users","routerLinkActive","active-link"]],template:function(e,o){e&1&&(a(0,"mat-toolbar",0)(1,"a",1),m(2,"Signal Store Tutorial"),r(),l(3,"span",2),a(4,"a",3),m(5,"Counter"),r(),a(6,"a",4),m(7,"Todos"),r(),a(8,"a",5),m(9,"Users"),r()())},dependencies:[O,S,A,L,T,D],styles:["mat-toolbar[_ngcontent-%COMP%]{position:sticky;top:0;left:0;right:0;z-index:1000}.mat-toolbar-row[_ngcontent-%COMP%], .mat-toolbar-single-row[_ngcontent-%COMP%]{padding:0 8px}.logo-text[_ngcontent-%COMP%]{background:linear-gradient(168deg,#f033d6,#8b33ff 96%);background-clip:text;-webkit-background-clip:text;color:transparent;cursor:pointer}"]})};var P=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=i({type:t,selectors:[["app-main-layout"]],decls:4,vars:0,consts:[[1,"flex","flex-col","flex-1"],[1,"flex-1","flex","flex-col"]],template:function(e,o){e&1&&(a(0,"div",0),l(1,"app-header"),a(2,"main",1),l(3,"router-outlet"),r()())},dependencies:[c,_],styles:["[_nghost-%COMP%]{display:flex;flex:1 1 0%;flex-direction:column}"]})};export{P as MainLayout};
