"use strict";(self["webpackChunkimage_management"]=self["webpackChunkimage_management"]||[]).push([[797],{880:function(t,s,a){a.d(s,{Z:function(){return u}});var e=function(){var t=this,s=t._self._c;return s("div",{staticClass:"loading"},[t._m(0),s("span",{staticClass:"loading__text"},[t._t("default")],2)])},i=[function(){var t=this,s=t._self._c;return s("span",{staticClass:"loading__spinner"},[s("i",{staticClass:"loading__icon icon-spinner2"})])}],l={name:"Loading"},n=l,c=a(1001),o=(0,c.Z)(n,e,i,!1,null,"11ff6822",null),u=o.exports},9797:function(t,s,a){a.r(s),a.d(s,{default:function(){return v}});var e=function(){var t=this,s=t._self._c;return s("div",{staticClass:"upload-page"},[s("div",{staticClass:"upload-page__container"},[s("div",{staticClass:"image-upload"},[s("div",{staticClass:"image-upload__header"},[s("h1",[t._v("发布图片")]),s("router-link",{attrs:{to:"/"}},[s("span",[t._v("返回首页")])])],1),s("div",{staticClass:"image-upload__content"},[s("div",{staticClass:"image-upload__label"},[t._v("上传图片:")]),s("upload",{ref:"upload"})],1),s("div",{staticClass:"image-upload__footer"},[s("div",{staticClass:"image-upload__submit",on:{click:t.handleSave}},[s("button",[t._v("保 存")])])])])])])},i=[],l=function(){var t=this,s=t._self._c;return s("div",{staticClass:"upload"},[s("ul",{staticClass:"upload-list"},t._l(t.filesList,(function(a){return s("li",{key:a.uid,staticClass:"upload-list__item"},[s("div",{staticClass:"upload-list__item-thumbnail",style:{background:`url(${a.url}) no-repeat center/cover`}}),"uploading"===a.status?s("Loading",{staticClass:"upload-list__loading"},[s("span",{staticClass:"loading__tip"},[t._v("上传中")])]):t._e(),s("div",{staticClass:"upload-list__item-actions"},[s("i",{staticClass:"delete-icon icon-bin",on:{click:function(s){return t.handleDelete(a)}}})])],1)})),0),s("div",{staticClass:"upload-card",on:{click:t.handleClick}},[s("div",{staticClass:"upload-card__content"},[s("i",{staticClass:"add-icon icon-plus"}),s("span",[t._v("点击添加图片")]),s("span",{staticClass:"upload-card__tip"},[t._v("支持格式jpg、png、jpeg、gif")]),s("input",{ref:"input",attrs:{type:"file",accept:"image/png, image/jpeg, image/jpg, image/gif",multiple:"multiple"},on:{change:t.handleChange}})])])])},n=[];a(7658);const c=function(){let t=0;return()=>t++}();var o=a(6644),u=a(880),d={name:"Upload",components:{Loading:u.Z},data(){return{filesList:[],uploadFiles:[]}},methods:{async handleDelete(t){const s=this.getFile(t),a=this.uploadFiles;a.splice(a.indexOf(s),1);const e=t.response&&t.response.file;if(e){const{id:t}=e;try{await(0,o.TL)(t)}catch(i){console.log(i)}}},handleClick(){this.$refs.input.click()},handleChange(t){const s=t.target.files;if(!s||!s.length)return;const a=[].slice.call(s);a.forEach((t=>{t.uid=c();const s={status:"ready",name:t.name,size:t.size,percentage:0,uid:t.uid,raw:t,url:URL.createObjectURL(t)};this.uploadFiles.push(s),this.upload(t)})),this.filesList=this.uploadFiles},async upload(t){this.$refs.input.value=null;const s=new FormData;s.append("file",t,t.name);const a=s=>{const a=this.getFile(t);a.status="uploading",a.percentage=s.percent||0};try{const e=await(0,o.cT)(s,a);this.handleSuccess(e,t)}catch(e){this.handleError(e,t),console.log(e)}},handleSuccess(t,s){const a=this.getFile(s);a&&(a.status="success",a.response=t)},handleError(t,s){const a=this.getFile(s),e=this.uploadFiles;a.status="fail",e.splice(e.indexOf(a),1)},getFile(t){const s=this.uploadFiles;return s.find((s=>s.uid===t.uid))},reset(){this.filesList=[],this.uploadFiles=[]}}},r=d,p=a(1001),_=(0,p.Z)(r,l,n,!1,null,"4b706324",null),g=_.exports,h={components:{Upload:g},methods:{handleSave(){this.$msg({message:"图片保存成功，是否继续上传？",confirmButtonText:"继续上传",cancelButtonText:"返回列表页",callback:t=>{t?this.$refs.upload.reset():this.$router.replace("/")}})}}},f=h,m=(0,p.Z)(f,e,i,!1,null,"40f71c3a",null),v=m.exports}}]);