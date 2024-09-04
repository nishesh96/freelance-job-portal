"use strict";(self.webpackChunkfreelance_job_portal=self.webpackChunkfreelance_job_portal||[]).push([[351],{8426:(e,l,r)=>{r.d(l,{A:()=>M});var t=r(5043),o=r(5967),n=r(2019),s=r(3778),i=r(1686),a=r(8139),c=r.n(a),d=r(8574),u=r(1128),p=r(5391),m=r(2701),g=r(2366),h=r(5296),y=r(3944),v=r(97),b=r(4414),f=r(8446),x=r(8855);const j=e=>{const{lineWidth:l,fontSizeIcon:r,calc:t}=e,o=e.fontSizeSM;return(0,f.oX)(e,{tagFontSize:o,tagLineHeight:(0,y.zA)(t(e.lineHeightSM).mul(o).equal()),tagIconSize:t(r).sub(t(l).mul(2)).equal(),tagPaddingHorizontal:8,tagBorderlessBg:e.defaultBg})},C=e=>({defaultBg:new v.q(e.colorFillQuaternary).onBackground(e.colorBgContainer).toHexString(),defaultColor:e.colorText}),A=(0,x.OF)("Tag",(e=>(e=>{const{paddingXXS:l,lineWidth:r,tagPaddingHorizontal:t,componentCls:o,calc:n}=e,s=n(t).sub(r).equal(),i=n(l).sub(r).equal();return{[o]:Object.assign(Object.assign({},(0,b.dF)(e)),{display:"inline-block",height:"auto",marginInlineEnd:e.marginXS,paddingInline:s,fontSize:e.tagFontSize,lineHeight:e.tagLineHeight,whiteSpace:"nowrap",background:e.defaultBg,border:`${(0,y.zA)(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,borderRadius:e.borderRadiusSM,opacity:1,transition:`all ${e.motionDurationMid}`,textAlign:"start",position:"relative",[`&${o}-rtl`]:{direction:"rtl"},"&, a, a:hover":{color:e.defaultColor},[`${o}-close-icon`]:{marginInlineStart:i,fontSize:e.tagIconSize,color:e.colorTextDescription,cursor:"pointer",transition:`all ${e.motionDurationMid}`,"&:hover":{color:e.colorTextHeading}},[`&${o}-has-color`]:{borderColor:"transparent",[`&, a, a:hover, ${e.iconCls}-close, ${e.iconCls}-close:hover`]:{color:e.colorTextLightSolid}},"&-checkable":{backgroundColor:"transparent",borderColor:"transparent",cursor:"pointer",[`&:not(${o}-checkable-checked):hover`]:{color:e.colorPrimary,backgroundColor:e.colorFillSecondary},"&:active, &-checked":{color:e.colorTextLightSolid},"&-checked":{backgroundColor:e.colorPrimary,"&:hover":{backgroundColor:e.colorPrimaryHover}},"&:active":{backgroundColor:e.colorPrimaryActive}},"&-hidden":{display:"none"},[`> ${e.iconCls} + span, > span + ${e.iconCls}`]:{marginInlineStart:s}}),[`${o}-borderless`]:{borderColor:"transparent",background:e.tagBorderlessBg}}})(j(e))),C);var k=function(e,l){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&l.indexOf(t)<0&&(r[t]=e[t]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(t=Object.getOwnPropertySymbols(e);o<t.length;o++)l.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(r[t[o]]=e[t[o]])}return r};const S=t.forwardRef(((e,l)=>{const{prefixCls:r,style:o,className:n,checked:s,onChange:i,onClick:a}=e,d=k(e,["prefixCls","style","className","checked","onChange","onClick"]),{getPrefixCls:u,tag:p}=t.useContext(h.QO),m=u("tag",r),[g,y,v]=A(m),b=c()(m,`${m}-checkable`,{[`${m}-checkable-checked`]:s},null===p||void 0===p?void 0:p.className,n,y,v);return g(t.createElement("span",Object.assign({},d,{ref:l,style:Object.assign(Object.assign({},o),null===p||void 0===p?void 0:p.style),className:b,onClick:e=>{null===i||void 0===i||i(!s),null===a||void 0===a||a(e)}})))})),$=S;var w=r(8835);const O=(0,x.bf)(["Tag","preset"],(e=>(e=>(0,w.A)(e,((l,r)=>{let{textColor:t,lightBorderColor:o,lightColor:n,darkColor:s}=r;return{[`${e.componentCls}${e.componentCls}-${l}`]:{color:t,background:n,borderColor:o,"&-inverse":{color:e.colorTextLightSolid,background:s,borderColor:s},[`&${e.componentCls}-borderless`]:{borderColor:"transparent"}}}})))(j(e))),C);const P=(e,l,r)=>{const t="string"!==typeof(o=r)?o:o.charAt(0).toUpperCase()+o.slice(1);var o;return{[`${e.componentCls}${e.componentCls}-${l}`]:{color:e[`color${r}`],background:e[`color${t}Bg`],borderColor:e[`color${t}Border`],[`&${e.componentCls}-borderless`]:{borderColor:"transparent"}}}},N=(0,x.bf)(["Tag","status"],(e=>{const l=j(e);return[P(l,"success","Success"),P(l,"processing","Info"),P(l,"error","Error"),P(l,"warning","Warning")]}),C);var I=function(e,l){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&l.indexOf(t)<0&&(r[t]=e[t]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(t=Object.getOwnPropertySymbols(e);o<t.length;o++)l.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(r[t[o]]=e[t[o]])}return r};const E=t.forwardRef(((e,l)=>{const{prefixCls:r,className:o,rootClassName:n,style:s,children:i,icon:a,color:y,onClose:v,bordered:b=!0,visible:f}=e,x=I(e,["prefixCls","className","rootClassName","style","children","icon","color","onClose","bordered","visible"]),{getPrefixCls:j,direction:C,tag:k}=t.useContext(h.QO),[S,$]=t.useState(!0),w=(0,d.A)(x,["closeIcon","closable"]);t.useEffect((()=>{void 0!==f&&$(f)}),[f]);const P=(0,u.nP)(y),E=(0,u.ZZ)(y),T=P||E,z=Object.assign(Object.assign({backgroundColor:y&&!T?y:void 0},null===k||void 0===k?void 0:k.style),s),F=j("tag",r),[B,H,L]=A(F),q=c()(F,null===k||void 0===k?void 0:k.className,{[`${F}-${y}`]:T,[`${F}-has-color`]:y&&!T,[`${F}-hidden`]:!S,[`${F}-rtl`]:"rtl"===C,[`${F}-borderless`]:!b},o,n,H,L),M=e=>{e.stopPropagation(),null===v||void 0===v||v(e),e.defaultPrevented||$(!1)},[,J]=(0,p.A)((0,p.d)(e),(0,p.d)(k),{closable:!1,closeIconRender:e=>{const l=t.createElement("span",{className:`${F}-close-icon`,onClick:M},e);return(0,m.fx)(e,l,(e=>({onClick:l=>{var r;null===(r=null===e||void 0===e?void 0:e.onClick)||void 0===r||r.call(e,l),M(l)},className:c()(null===e||void 0===e?void 0:e.className,`${F}-close-icon`)})))}}),U="function"===typeof x.onClick||i&&"a"===i.type,W=a||null,G=W?t.createElement(t.Fragment,null,W,i&&t.createElement("span",null,i)):i,R=t.createElement("span",Object.assign({},w,{ref:l,className:q,style:z}),G,J,P&&t.createElement(O,{key:"preset",prefixCls:F}),E&&t.createElement(N,{key:"status",prefixCls:F}));return B(U?t.createElement(g.A,{component:"Tag"},R):R)})),T=E;T.CheckableTag=$;const z=T;var F=r(5900);const B=e=>{const[l,r]=(0,t.useState)([]),[o,n]=(0,t.useState)(!0),[s,i]=(0,t.useState)(null);return(0,t.useEffect)((()=>{if(!e)return;(async()=>{n(!0),i(null);try{const l=await fetch(`https://api.github.com/users/${e}/repos`);if(!l.ok>0)throw new Error("Failed to fetch GitHub projects");const t=await l.json();if(!t.length)throw new Error("No Projects found on GitHub. Kindly add projects or check username");r(t)}catch(l){i(l.message)}finally{n(!1)}})()}),[e]),{projects:l,loading:o,error:s}};var H=r(579);const{Title:L,Text:q}=o.A,M=e=>{var l;let{newUser:r,user:o}=e;const{projects:a,loading:c,error:d}=B(o.githubUserName),[u,p]=n.Ay.useMessage();return(0,t.useEffect)((()=>{d&&u.error(d)}),[d,u]),r?(0,H.jsx)(s.A,{style:{width:500},children:(0,H.jsx)(q,{type:"danger",children:"Kindly fill your details from Profile Settings."})}):(0,H.jsxs)(i.A,{spinning:c,children:[p,(0,H.jsxs)(s.A,{title:(0,H.jsx)(L,{level:3,children:`${o.firstName} ${o.lastName}`}),style:{width:500},children:[(0,H.jsx)(L,{level:5,style:{marginTop:0},children:"Skills"}),null===o||void 0===o||null===(l=o.skillset)||void 0===l?void 0:l.map((e=>(0,H.jsx)(z,{color:"blue",children:e},e))),(0,H.jsx)(L,{level:5,style:{marginTop:"16px"},children:"GitHub Projects"}),(0,H.jsx)(F.A,{size:"small",dataSource:null!==a&&void 0!==a?a:[],pagination:{size:"small",position:"bottom",align:"center",pageSize:5},renderItem:e=>{return(0,H.jsx)(F.A.Item,{children:(0,H.jsx)("a",{href:(l=e.name,`https://github.com/nishesh96/${l}`),target:"_blank",rel:"noopener noreferrer",children:e.name})});var l}})]})]})}},8330:(e,l,r)=>{r.d(l,{A:()=>p});var t=r(5546),o=r(5967),n=r(7170),s=r(7419),i=r(1645),a=r(7021),c=r(579);const{Header:d}=t.A,{Text:u}=o.A,p=e=>{let{title:l,onButtonClick:r}=e;const{token:{colorBgContainer:t}}=n.A.useToken();return(0,c.jsx)(d,{style:{padding:0,background:t},children:(0,c.jsxs)(s.A,{align:"center",children:[(0,c.jsx)(i.A,{span:10,children:(0,c.jsx)(u,{strong:!0,style:{fontSize:"20px",marginLeft:"20px"},children:l})}),(0,c.jsx)(i.A,{offset:10,span:4,children:(0,c.jsx)(a.Ay,{type:"primary",onClick:r,children:"Log Out"})})]})})}},8756:(e,l,r)=>{r.d(l,{A:()=>c});var t=r(3778),o=r(5900),n=r(7021),s=r(9217),i=r(579);const a=e=>{let{item:l}=e;const{companyName:r,skillset:t,minSalaryPerHour:o}=l;return(0,i.jsxs)("p",{children:[r," | Skills: ",`${t}`," | Salary Per Hour: $",o," "]})},c=e=>{let{data:l,userType:r,onButtonClick:c}=e;return(0,i.jsxs)(t.A,{title:"Jobs List",children:[" ",(0,i.jsx)(o.A,{pagination:{position:"bottom",align:"center",pageSize:5},dataSource:l,rowKey:e=>e.id,renderItem:e=>(0,i.jsx)(o.A.Item,{actions:s.Cy.freelancer===r?[(0,i.jsx)(n.Ay,{type:"primary",onClick:()=>c(e.id),children:"Easy Apply"})]:[(0,i.jsxs)(n.Ay,{type:"default",onClick:()=>c(e.id),children:["View Applicants (",e.id,")"]})],children:(0,i.jsx)(o.A.Item.Meta,{title:e.role,description:(0,i.jsx)(a,{item:e})})})})]})}},229:(e,l,r)=>{r.d(l,{A:()=>g});var t=r(5967),o=r(6597),n=r(4740),s=r(3722),i=r(1199),a=r(9217),c=r(579);const{Text:d}=t.A,u=[{key:"view-profile",icon:(0,c.jsx)(s.A,{}),label:"View Profile"},{key:"view-jobs",icon:(0,c.jsx)(i.A,{}),label:"Jobs"},{key:"profile-settings",icon:(0,c.jsx)(s.A,{}),label:"Profile Settings"}],p=[{key:"jobs",icon:(0,c.jsx)(i.A,{}),label:"Jobs"},{key:"post-job",icon:(0,c.jsx)(s.A,{}),label:"Post a Job"}],m={[a.Cy.freelancer]:u,[a.Cy.employer]:p},g=e=>{let{onClick:l,currentNavKey:r,userType:t}=e;return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(o.A,{align:"center",justify:"flex-start",children:(0,c.jsxs)(d,{level:4,style:{color:"white",margin:"15px 25px",fontSize:"25px",fontWeight:700},children:["Job Portal"," "]})}),(0,c.jsx)(n.A,{theme:"dark",mode:"inline",defaultSelectedKeys:[r],items:m[t],onClick:l,style:{marginTop:"30px"}})]})}},9217:(e,l,r)=>{r.d(l,{Cy:()=>t,MU:()=>o});const t={freelancer:"Freelancer",employer:"Employer"},o=[{value:"ai",label:"AI"},{value:"react",label:"ReactJs"},{value:"java",label:"Java"},{value:"node",label:"NodeJs"},{value:"aws",label:"AWS"},{value:"sql",label:"SQL"},{value:"python",label:"Python"}]},8351:(e,l,r)=>{r.r(l),r.d(l,{default:()=>D});var t=r(5043),o=r(5546),n=r(9748),s=r(2019),i=r(1686),a=r(6597),c=r(229),d=r(8426),u=r(3778),p=r(5444),m=r(1853),g=r(7021),h=r(579);const y=e=>{let{form:l,onFinish:r,skillsetOptions:t}=e;return(0,h.jsx)(u.A,{title:"Profile Settings",style:{width:500},children:(0,h.jsxs)(n.A,{layout:"vertical",form:l,onFinish:r,children:[(0,h.jsx)(n.A.Item,{label:"First Name",name:"firstName",rules:[{required:!0,message:"Please input value"}],children:(0,h.jsx)(p.A,{placeholder:"John"})}),(0,h.jsx)(n.A.Item,{label:"Last Name",name:"lastName",rules:[{required:!0,message:"Please input value"}],children:(0,h.jsx)(p.A,{placeholder:"Doe"})}),(0,h.jsx)(n.A.Item,{label:"Skills",name:"skillset",rules:[{required:!0,message:"Please input value"}],children:(0,h.jsx)(m.A,{mode:"tags",style:{width:"100%"},placeholder:"Select or Add a skill",options:t})}),(0,h.jsx)(n.A.Item,{label:"GitHub User Name",name:"githubUserName",rules:[{required:!0,message:"Please input value"}],children:(0,h.jsx)(p.A,{placeholder:"user123"})}),(0,h.jsx)(n.A.Item,{wrapperCol:{offset:8,span:16},children:(0,h.jsx)(g.Ay,{type:"primary",htmlType:"submit",children:"Submit"})})]})})};var v=r(3003),b=r(9217),f=r(9869),x=r(8330),j=r(2464),C=r(3216),A=r(7419),k=r(1645),S=r(5967),$=r(8167),w=r(8139),O=r.n(w),P=r(2149),N=r(5315),I=r(5296),E=r(5132);const T=t.createContext({latestIndex:0}),z=T.Provider,F=e=>{let{className:l,index:r,children:o,split:n,style:s}=e;const{latestIndex:i}=t.useContext(T);return null===o||void 0===o?null:t.createElement(t.Fragment,null,t.createElement("div",{className:l,style:s},o),r<i&&n&&t.createElement("span",{className:`${l}-split`},n))};var B=r(8309),H=function(e,l){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&l.indexOf(t)<0&&(r[t]=e[t]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(t=Object.getOwnPropertySymbols(e);o<t.length;o++)l.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(r[t[o]]=e[t[o]])}return r};const L=t.forwardRef(((e,l)=>{var r,o,n;const{getPrefixCls:s,space:i,direction:a}=t.useContext(I.QO),{size:c=(null!==(r=null===i||void 0===i?void 0:i.size)&&void 0!==r?r:"small"),align:d,className:u,rootClassName:p,children:m,direction:g="horizontal",prefixCls:h,split:y,style:v,wrap:b=!1,classNames:f,styles:x}=e,j=H(e,["size","align","className","rootClassName","children","direction","prefixCls","split","style","wrap","classNames","styles"]),[C,A]=Array.isArray(c)?c:[c,c],k=(0,N.X)(A),S=(0,N.X)(C),$=(0,N.m)(A),w=(0,N.m)(C),E=(0,P.A)(m,{keepEmpty:!0}),T=void 0===d&&"horizontal"===g?"center":d,L=s("space",h),[q,M,J]=(0,B.A)(L),U=O()(L,null===i||void 0===i?void 0:i.className,M,`${L}-${g}`,{[`${L}-rtl`]:"rtl"===a,[`${L}-align-${T}`]:T,[`${L}-gap-row-${A}`]:k,[`${L}-gap-col-${C}`]:S},u,p,J),W=O()(`${L}-item`,null!==(o=null===f||void 0===f?void 0:f.item)&&void 0!==o?o:null===(n=null===i||void 0===i?void 0:i.classNames)||void 0===n?void 0:n.item);let G=0;const R=E.map(((e,l)=>{var r,o;null!==e&&void 0!==e&&(G=l);const n=(null===e||void 0===e?void 0:e.key)||`${W}-${l}`;return t.createElement(F,{className:W,key:n,index:l,split:y,style:null!==(r=null===x||void 0===x?void 0:x.item)&&void 0!==r?r:null===(o=null===i||void 0===i?void 0:i.styles)||void 0===o?void 0:o.item},e)})),K=t.useMemo((()=>({latestIndex:G})),[G]);if(0===E.length)return null;const X={};return b&&(X.flexWrap="wrap"),!S&&w&&(X.columnGap=C),!k&&$&&(X.rowGap=A),q(t.createElement("div",Object.assign({ref:l,className:U,style:Object.assign(Object.assign(Object.assign({},X),null===i||void 0===i?void 0:i.style),v)},j),t.createElement(z,{value:K},R)))})),q=L;q.Compact=E.Ay;const M=q,{Title:J}=S.A,U=[{label:"Any",value:""},{label:"< $10",value:"10"},{label:"< $30",value:"30"},{label:"< $50",value:"50"}],W=e=>{let{handleFilterChange:l}=e;return(0,h.jsx)(u.A,{title:"Filter",children:(0,h.jsxs)(a.A,{vertical:!0,children:[(0,h.jsx)(J,{level:5,children:"Salary Per Hour"}),(0,h.jsx)($.Ay.Group,{name:"minSalary",onChange:e=>l(e.target.name,e.target.value),defaultValue:U[0].value,children:(0,h.jsx)(M,{direction:"vertical",children:U.map((e=>(0,h.jsx)($.Ay,{value:e.value,children:e.label},e.value)))})}),(0,h.jsx)(J,{level:5,children:"Skills"}),(0,h.jsx)(m.A,{mode:"tags",placeholder:"Skills",onChange:e=>l("requiredSkills",e),options:b.MU})]})})};var G=r(8756);const R=()=>{const e=(0,v.wA)(),[l,r]=s.Ay.useMessage(),[o,n]=(0,t.useState)(!1),{jobsList:a,appliedJobIds:c}=(0,v.d4)((e=>({jobsList:e.freelancer.jobsList,isLoading:e.freelancer.isLoading,appliedJobIds:e.freelancer.appliedJobIds}))),[d,u]=(0,t.useState)({minSalary:"",requiredSkills:[],location:[]});(0,t.useEffect)((()=>{e((0,f.vA)())}),[e]);const p=(0,t.useMemo)((()=>((e,l,r)=>e.filter((e=>{const t=""===l.minSalary||e.minSalaryPerHour>=l.minSalary,o=0===l.requiredSkills.length||l.requiredSkills.every((l=>e.skillset.includes(l))),n=0===r.length||r.every((l=>e.id!==l));return t&&o&&n})))(a,d,c)),[a,d,c]);return(0,h.jsx)(i.A,{spinning:o,children:(0,h.jsxs)(A.A,{children:[(0,h.jsx)(k.A,{span:4,children:(0,h.jsx)(W,{handleFilterChange:(e,l)=>{u((r=>({...r,[e]:l})))}})}),(0,h.jsxs)(k.A,{span:12,children:[r,(0,h.jsx)(G.A,{data:p,userType:b.Cy.freelancer,onButtonClick:r=>{n(!0),setTimeout((()=>{e((0,f.mO)(r)),n(!1),l.success({type:"success",content:"Applied"})}),300)}})]})]})})},{Content:K,Footer:X,Sider:Q}=o.A,_={overflow:"auto",height:"100vh",position:"fixed",insetInlineStart:0,top:0,bottom:0,scrollbarWidth:"thin",scrollbarColor:"unset"},D=()=>{const[e]=n.A.useForm(),l=(0,v.wA)(),[r,u]=s.Ay.useMessage(),p=(0,C.Zp)(),[m,g]=(0,t.useState)(!1),[A,k]=(0,t.useState)("profile-settings"),{userProfile:S,newUser:$}=(0,v.d4)((e=>({newUser:e.freelancer.newUser,userProfile:e.freelancer.userProfile})));return(0,h.jsx)(i.A,{spinning:m,children:(0,h.jsxs)(o.A,{hasSider:!0,children:[(0,h.jsx)(Q,{style:_,children:(0,h.jsx)(c.A,{onClick:e=>{k(e.key)},currentNavKey:A,userType:b.Cy.freelancer})}),(0,h.jsxs)(o.A,{style:{marginInlineStart:200},children:[(0,h.jsx)(x.A,{title:b.Cy.freelancer,onButtonClick:()=>{l((0,j.y4)()),p("/")}}),(0,h.jsxs)(K,{style:{margin:"20px 16px 0",overflow:"initial",height:"83vh"},children:["profile-settings"===A&&(0,h.jsxs)(a.A,{gap:"middle",align:"center",vertical:!0,children:[u,(0,h.jsx)(y,{form:e,onFinish:e=>{g(!0),setTimeout((()=>{l((0,f.gL)(e)),g(!1),r.success("Profile Submitted")}),300)},skillsetOptions:b.MU})]}),"view-profile"===A&&(0,h.jsx)(a.A,{gap:"middle",align:"center",vertical:!0,children:(0,h.jsx)(d.A,{newUser:$,user:S})}),"view-jobs"===A&&(0,h.jsx)(R,{})]}),(0,h.jsx)(X,{style:{textAlign:"center"}})]})]})})}}}]);
//# sourceMappingURL=351.c74c060b.chunk.js.map