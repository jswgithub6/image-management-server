"use strict";(self["webpackChunkimage_management"]=self["webpackChunkimage_management"]||[]).push([[236],{880:function(t,e,s){s.d(e,{Z:function(){return c}});var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"loading"},[t._m(0),e("span",{staticClass:"loading__text"},[t._t("default")],2)])},n=[function(){var t=this,e=t._self._c;return e("span",{staticClass:"loading__spinner"},[e("i",{staticClass:"loading__icon icon-spinner2"})])}],a={name:"Loading"},o=a,r=s(1001),l=(0,r.Z)(o,i,n,!1,null,"11ff6822",null),c=l.exports},3658:function(t,e,s){s.r(e),s.d(e,{default:function(){return N}});var i=function(){var t=this,e=t._self._c;return e("div",[e("page-header"),e("main",[e("div",{staticClass:"main-content"},[e("PullToRefresh",{attrs:{onRefresh:t.refresh}},[e("InfiniteScroll",{attrs:{onLoadMore:t.loadMoreData,hasMore:t.hasMore}},[t._l(t.imageList,(function(s){return e("image-card",{key:s.id,attrs:{"img-src":s.url,"thumbnail-src":s.thumbnailUrl,"image-detail":s},on:{click:t.handleClick}})})),t.showEmpty?e("el-empty",{attrs:{description:"这里空空如也 /(ㄒoㄒ)/~~"}}):t._e()],2)],1)],1),e("image-modal",{attrs:{showModal:t.showModal,images:t.imageList,currentIndex:t.currentIndex},on:{"update:showModal":function(e){t.showModal=e},"update:show-modal":function(e){t.showModal=e},"update:currentIndex":function(e){t.currentIndex=e},"update:current-index":function(e){t.currentIndex=e}}})],1)],1)},n=[],a=(s(7658),function(){var t=this,e=t._self._c;return e("header",{staticClass:"header-container"},[t._m(0),t._m(1),e("div",{staticClass:"header-container__menu"},[e("div",{staticClass:"header-container__menu-button upload-button"},[e("router-link",{attrs:{to:"/image-upload"}},[e("button",[e("i",{staticClass:"upload-button__icon icon-upload3"}),e("span",{staticClass:"upload-button__text"},[t._v("上传图片")])])])],1),e("div",{staticClass:"header-container__menu-button nav-button"},[e("router-link",{attrs:{to:"/admin"}},[e("button",[t._v("后台管理")])])],1)])])}),o=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"header-container__logo"},[e("img",{attrs:{src:s(2781),alt:"logo"}})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"header-container__title"},[e("span",[t._v("图片展示")])])}],r={name:"PageHeader"},l=r,c=s(1001),h=(0,c.Z)(l,a,o,!1,null,"145d8cce",null),u=h.exports,d=function(){var t=this,e=t._self._c;return e("div",{staticClass:"image-card"},[e("div",{staticClass:"image-card__img",style:t.imgStyle,on:{click:t.handleClick}})])},m=[],f={name:"ImageCard",props:["img-src","thumbnail-src","image-detail"],computed:{imgStyle(){return{background:`url(${this.thumbnailSrc}) no-repeat center/cover`}}},methods:{handleClick(){this.$emit("click",this.imageDetail)}}},g=f,p=(0,c.Z)(g,d,m,!1,null,"3d693a88",null),_=p.exports,v=function(){var t=this,e=t._self._c;return e("div",{staticClass:"pull-to-refresh",style:{transform:t.distance?`translateY(${t.distance}px)`:"",webkitTransform:t.distance?`translateY(${t.distance}px)`:"",transitionDuration:`${t.duration}ms`},on:{touchstart:t.onTouchStart,touchmove:t.onTouchMove,touchend:t.onTouchEnd}},[e("div",{staticClass:"pull-to-refresh__head"},["refresh"===t.status?e("div",[e("Loading",[t._v(t._s(t.currentStatus))])],1):e("div",[t._v(t._s(t.currentStatus))])]),t._t("default")],2)},b=[],C=s(880),S={name:"PullToRefresh",components:{Loading:C.Z},props:{onRefresh:{type:Function,required:!0},pullingText:{type:String,default:"下拉刷新"},loosingText:{type:String,default:"释放刷新"},refreshText:{type:String,default:"正在刷新"},successText:{type:String,default:"刷新完成"},threshold:{type:Number,default:50},animationDuration:{type:Number,default:200}},data(){return{status:"normal",duration:0,startY:0,deltaY:0,distance:0,isCeiling:!0}},computed:{touchable(){return"refresh"!==this.status&&"success"!==this.status},currentStatus(){const{status:t}=this,e=this[`${t}Text`];return e}},methods:{onTouchStart(t){this.touchable&&this.checkPullStart(t)},onTouchMove(t){this.touchable&&(this.isCeiling||this.checkPullStart(t),this.touchMove(t),this.isCeiling&&this.deltaY>=0&&(t.cancelable&&t.preventDefault(),this.status=this.deltaY<this.threshold?"pulling":"loosing",this.distance=this.simulateRubberBandEffect(this.deltaY)))},onTouchEnd(){this.deltaY&&this.touchable&&(this.duration=this.animationDuration,"loosing"===this.status?(this.status="refresh",this.distance=this.threshold,this.$nextTick((()=>{this.onRefresh(this.refreshDone)}))):this.resetStatus())},checkPullStart(t){const e=Math.max(document.documentElement.scrollTop,0);this.isCeiling=0===e,this.isCeiling&&(this.touchStart(t),this.duration=0)},touchStart(t){this.startY=t.touches[0].clientY,this.deltaY=0},touchMove(t){const e=t.touches[0].clientY;this.deltaY=e-this.startY},simulateRubberBandEffect(t){const e=50,s=.2;if(t<=e)return t;{const i=t-e,n=e+i*s;return n}},refreshDone(){setTimeout((()=>{this.showSuccessTip()}),500)},showSuccessTip(){this.status="success",setTimeout((()=>{this.resetStatus()}),500)},resetStatus(){this.status="normal",this.distance=0}}},x=S,M=(0,c.Z)(x,v,b,!1,null,"5ff4c501",null),T=M.exports,y=function(){var t=this,e=t._self._c;return e("div",{staticClass:"infinite-scroll"},[e("div",{ref:"content",staticClass:"infinite-scroll__content"},[t._t("default")],2),e("div",{ref:"placeholder",staticClass:"infinite-scroll__placeholder"},[t.loading&&t.hasMore?e("div",{staticClass:"infinite-scroll__loading"},[e("Loading",[t._v(t._s(t.loadingText))])],1):t._e(),t.hasMore?t._e():e("div",{staticClass:"infinite-scroll__finished"},[t._v(" "+t._s(t.finishedText)+" ")])])])},w=[],k=s(2611),I={name:"InfiniteScroll",props:{immediate:{type:Boolean,default:!0},onLoadMore:{type:Function,required:!0},threshold:{type:Number,default:50},hasMore:{type:Boolean,required:!0},loadingText:{type:String,required:!1,default:"正在加载"},finishedText:{type:String,required:!1,default:"没有更多了"}},components:{Loading:C.Z},data(){return{loading:!1,onScroll:null,observer:null}},mounted(){const t=(0,k.throttle)(this.handleScroll,200);if(window.addEventListener("scroll",t),this.onScroll=t,this.immediate){const e=new MutationObserver(t);e.observe(this.$refs.content,{childList:!0,subtree:!0}),t(),this.observer=e}},beforeDestroy(){window.removeEventListener("scroll",this.onScroll),this.observer&&this.observer.disconnect(),this.observer=null},methods:{handleScroll(){this.$nextTick((()=>{if(this.loading||!this.hasMore)return;const t=window.innerHeight,e=this.$refs.placeholder;if(!t||!e)return!1;const s=e.getBoundingClientRect().bottom,i=Math.abs(s-t)<=this.threshold||s<=t;i?(this.loading=!0,setTimeout((()=>{this.onLoadMore((()=>{this.loading=!1}))}),500)):this.observer&&(this.observer.disconnect(),this.observer=null)}))}}},L=I,Y=(0,c.Z)(L,y,w,!1,null,null,null),D=Y.exports,Z=s(4561),$=s(6644),E={name:"Home",components:{PageHeader:u,ImageCard:_,ImageModal:Z.Z,PullToRefresh:T,InfiniteScroll:D},computed:{showEmpty(){return this.pageInfo.pageNumber>0&&0===this.total}},data(){return{imageList:[],currentIndex:0,showModal:!1,total:0,pageInfo:{pageNumber:0,pageSize:5},hasMore:!0}},methods:{getData(){return new Promise(((t,e)=>{(0,$.pd)(this.pageInfo).then((({data:e})=>{t(e)})).catch(e)}))},async refresh(t){try{this.pageInfo.pageNumber=1;const{files:e,count:s}=await this.getData();this.total=s,this.imageList=e,this.hasMore=this.imageList.length<this.total,t()}catch(e){console.log(e)}},async loadMoreData(t){if(this.hasMore)try{this.pageInfo.pageNumber++;const{files:e,count:s}=await this.getData();this.total=s,this.imageList.push(...e),this.hasMore=this.imageList.length<this.total,t()}catch(e){this.pageInfo.pageNumber--,console.log(e)}},handleClick(t){this.showModal=!0;const e=(0,k.findIndex)(this.imageList,t);this.currentIndex=e}}},P=E,R=(0,c.Z)(P,i,n,!1,null,"56425391",null),N=R.exports}}]);