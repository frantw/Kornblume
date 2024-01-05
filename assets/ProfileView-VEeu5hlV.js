import{u as p}from"./pullsRecordStore-VUAiAVO3.js";import{f as b,g as m,c as h,a as t,t as n,o as g}from"./index-AjOfLo36.js";const u=["plannerSettings","planner","wilderness","warehouse","pulls"];function f(){const s=new Date,o=s.getDate().toString().padStart(2,"0"),l=(s.getMonth()+1).toString().padStart(2,"0"),c=s.getFullYear(),a=`${o}${l}${c}`,r=s.getHours().toString().padStart(2,"0"),i=s.getMinutes().toString().padStart(2,"0"),e=`${r}${i}`;return{date:a,time:e}}function _(s){const o=new Blob([s],{type:"application/json"}),{date:l,time:c}=f(),a=`kornblume_data_${l}_${c}.json`,r=document.createElement("a");r.download=a,r.href=URL.createObjectURL(o),document.body.appendChild(r),r.click(),setTimeout(()=>document.body.removeChild(r))}function x(){const s={};u.forEach(o=>{s[o]=localStorage.getItem(o)});try{const o=JSON.stringify(s,null,2);_(o)}catch(o){console.error("Error exporting data:",o)}}function y(s){const o=new FileReader;o.onload=async l=>{var c;try{const a=JSON.parse((c=l.target)==null?void 0:c.result);u.forEach(r=>{localStorage.setItem(r,a==null?void 0:a[r])}),console.log("Import successful!"),setTimeout(()=>window.location.reload())}catch(a){console.error("Error importing data:",a)}},o.readAsText(s)}function w(){u.forEach(s=>localStorage.removeItem(s)),setTimeout(()=>window.location.reload())}const k={class:"responsive-spacer"},S={class:"pb-6"},$={class:"text-2xl text-white font-bold mb-2 lg:mb-4"},v={class:"text-white"},j={class:"flex justify-center items-center p-2 space-x-5"},D={class:"pb-6"},C={class:"text-2xl text-white font-bold mb-2 lg:mb-4"},T={class:"text-white"},E={class:"flex flex-wrap justify-center items-center p-2 space-x-5 gap-y-5"},I={onclick:"resetTracker.showModal()",class:"btn btn-error text-black font-bold py-2 px-4 rounded ml-2"},B={onclick:"resetAll.showModal()",class:"btn btn-error text-black font-bold py-2 px-4 rounded ml-2"},F={id:"resetTracker",class:"modal"},M={class:"modal-box custom-gradient-gray-blue flex flex-col justify-center items-center"},N=t("form",{method:"dialog"},[t("button",{class:"btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-white"},"✕")],-1),R={class:"pb-4 text-white text-center"},A={class:"pb-4 text-white text-center"},J=t("form",{method:"dialog",class:"modal-backdrop"},[t("button",null,"close")],-1),O={id:"resetAll",class:"modal"},K={class:"modal-box custom-gradient-gray-blue flex flex-col justify-center items-center"},L=t("form",{method:"dialog"},[t("button",{class:"btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-white"},"✕")],-1),P={class:"pb-4 text-white text-center"},U={class:"pb-4 text-white text-center"},V=t("form",{method:"dialog",class:"modal-backdrop"},[t("button",null," close ")],-1),Y=b({__name:"ProfileView",setup(s){const o=m(null),l=()=>{x()},c=()=>{var e;(e=o.value)==null||e.click()},a=e=>{const d=e.target.files[0];d&&y(d)},r=()=>{w()},i=()=>{p().reset(),window.location.reload()};return(e,d)=>(g(),h("div",k,[t("div",S,[t("h2",$,n(e.$t("profile")),1),t("p",v,n(e.$t("you-can-export-or-import-your-data-here")),1),t("div",j,[t("button",{onClick:l,class:"btn btn-info text-black font-bold py-2 px-4 rounded"},n(e.$t("export-data")),1),t("input",{type:"file",ref_key:"fileInput",ref:o,onChange:a,accept:".json",class:"ml-4",style:{display:"none"}},null,544),t("button",{onClick:c,class:"btn btn-success text-black font-bold py-2 px-4 rounded ml-2"},n(e.$t("import-data")),1)])]),t("div",D,[t("h2",C,n(e.$t("danger-zone")),1),t("p",T,n(e.$t("if-you-encounter-any-unexpected-issues-with-the-site-you-can-reset-your-data-sorry-for-the-inconvenience")),1),t("div",E,[t("button",I,n(e.$t("reset-tracker")),1),t("button",B,n(e.$t("reset-data")),1)]),t("dialog",F,[t("div",M,[N,t("p",R,n(e.$t("once-you-delete-your-summon-tracker-data-there-is-no-going-back")),1),t("p",A,n(e.$t("please-be-certain")),1),t("button",{onClick:i,class:"btn btn-error text-black font-bold py-2 px-4 rounded ml-2"},n(e.$t("reset-tracker")),1)]),J]),t("dialog",O,[t("div",K,[L,t("p",P,n(e.$t("once-you-delete-your-data-there-is-no-going-back")),1),t("p",U,n(e.$t("please-be-certain")),1),t("button",{onClick:r,class:"btn btn-error text-black font-bold py-2 px-4 rounded ml-2"},n(e.$t("reset-all")),1)]),V])])]))}});export{Y as default};
