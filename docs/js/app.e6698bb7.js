(function(t){function e(e){for(var i,o,n=e[0],c=e[1],l=e[2],d=0,p=[];d<n.length;d++)o=n[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&p.push(a[o][0]),a[o]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);u&&u(e);while(p.length)p.shift()();return s.push.apply(s,l||[]),r()}function r(){for(var t,e=0;e<s.length;e++){for(var r=s[e],i=!0,n=1;n<r.length;n++){var c=r[n];0!==a[c]&&(i=!1)}i&&(s.splice(e--,1),t=o(o.s=r[0]))}return t}var i={},a={app:0},s=[];function o(e){if(i[e])return i[e].exports;var r=i[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=i,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(r,i,function(e){return t[e]}.bind(null,i));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/teste-wealth99/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],c=n.push.bind(n);n.push=e,n=n.slice();for(var l=0;l<n.length;l++)e(n[l]);var u=c;s.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"56d7":function(t,e,r){"use strict";r.r(e);var i=r("2b0e"),a=r("7496"),s=function(){var t=this,e=t._self._c;return e(a["a"],[e("div",{staticClass:"bg-dacxi-white h-full"},[e("Content")],1)])},o=[],n=r("8336"),c=r("490a"),l=r("8e36"),u=r("b974"),d=r("8654"),p=function(){var t=this,e=t._self._c;return e("div",{staticClass:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4"},[t._m(0),e("div",{staticClass:"bg-white shadow-lg rounded-lg p-6 flex flex-col md:flex-row"},[e("div",{staticClass:"flex flex-col w-full md:w-1/2 lg:w-1/3 p-4"},[e("p",{staticClass:"text-center text-sm"},[t._v(" "+t._s(t.priceTitle)+" ")]),t.loading?e("div",{staticClass:"flex justify-center mb-7"},[e(c["a"],{attrs:{indeterminate:"",color:"blue","data-testid":"loading-spinner"}})],1):e("h1",{staticClass:"text-center mb-5 text-h4 fade-in fade-out font-weight-bold text-dacxi-error",attrs:{"data-test-id":"price"}},[t._v(" "+t._s(t.priceCurrency)+" ")]),t.progressView?e("div",{staticClass:"flex justify-center align-center mb-10 fade-in fade-out"},[e(l["a"],{attrs:{"data-testid":"progress-bar",value:t.progressValue}})],1):t._e(),e(u["a"],{attrs:{items:t.cripto.criptos,label:"Select your criptocurrency","prepend-icon":"mdi-hand-coin",outlined:"","data-testid":"cripto-select"},on:{change:t.setCriptoOrDateTime},model:{value:t.cripto.currentCripto,callback:function(e){t.$set(t.cripto,"currentCripto",e)},expression:"cripto.currentCripto"}}),e(u["a"],{attrs:{items:t.coin.coins,label:"Select your coin","prepend-icon":"mdi-currency-usd",outlined:"","data-testid":"coin-select"},on:{change:t.setCriptoOrDateTime},model:{value:t.coin.currentCoin,callback:function(e){t.$set(t.coin,"currentCoin",e)},expression:"coin.currentCoin"}}),e("h3",{staticClass:"mb-4"},[t._v("Filter price by specific date")]),e(d["a"],{attrs:{outlined:"",disabled:!t.progressView,label:"Insert a date",type:"date","data-testid":"date-input"},model:{value:t.currentTime.date,callback:function(e){t.$set(t.currentTime,"date",e)},expression:"currentTime.date"}}),e(d["a"],{attrs:{outlined:"",disabled:!t.progressView,label:"Insert an hour",type:"time","data-testid":"hour-input"},model:{value:t.currentTime.hour,callback:function(e){t.$set(t.currentTime,"hour",e)},expression:"currentTime.hour"}}),e(n["a"],{staticClass:"text-capitalize",attrs:{"data-testid":"submit-date-button"},on:{click:t.setDateTimeOrClearFilters}},[t._v(t._s(t.filterButton))])],1),e("div",{staticClass:"w-full md:w-1/2 lg:w-2/3 mt-10 md:mt-0 p-4 border-2 border-gray-300 rounded-lg"},[e("div",{staticClass:"flex justify-center mb-5 font-weight-bold fade-in fade-out"},[e("h3",{staticClass:"text-base"},[e("span",{staticClass:"text-capitalize",attrs:{"data-testid":"current-cripto-title"}},[t._v(t._s(t.cripto.currentCripto))]),t._v(" Graph History in "),e("span",{staticClass:"text-uppercase text-dacxi-success",attrs:{"data-testid":"current-coin-title"}},[t._v(t._s(t.coin.currentCoin))]),t.oldDateDisplay?e("span",{staticClass:"ml-1"},[t._v("at "+t._s(t.oldDateDisplay||""))]):t._e()])]),e("div",[e("apexchart",{staticClass:"fade-in fade-out",attrs:{width:"100%",type:"area",options:t.options,series:t.series,"data-testid":"dacxi-apex-chart"}})],1)])])])},h=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"bg-white shadow overflow-hidden sm:rounded-lg p-6 mb-6"},[e("h2",{staticClass:"text-lg leading-6 font-medium text-gray-900"},[t._v("Últimas Notícias")]),e("div",{staticClass:"mt-2 grid grid-cols-1 md:grid-cols-3 gap-4"},[e("div",{staticClass:"p-4 border border-gray-200 rounded-lg"},[e("h3",{staticClass:"font-semibold text-gray-800"},[t._v("DACXI e Bitcoin atingem novos recordes")]),e("p",{staticClass:"text-sm text-gray-600"},[t._v("Os preços da DACXI e Bitcoin continuam sua ascensão...")])]),e("div",{staticClass:"p-4 border border-gray-200 rounded-lg"},[e("h3",{staticClass:"font-semibold text-gray-800"},[t._v("Investidores de olho na DACXI")]),e("p",{staticClass:"text-sm text-gray-600"},[t._v("Novos investimentos estão sendo direcionados para DACXI...")])]),e("div",{staticClass:"p-4 border border-gray-200 rounded-lg"},[e("h3",{staticClass:"font-semibold text-gray-800"},[t._v("O futuro do Bitcoin")]),e("p",{staticClass:"text-sm text-gray-600"},[t._v("Especialistas preveem um futuro brilhante para o Bitcoin...")])])])])}],m=(r("13d5"),r("cee4"));const g=m["a"].create({baseURL:"https://api.coingecko.com/api/v3"});var f=g;const C=(t,e)=>{const r={usd:new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",maximumSignificantDigits:3}).format(t),eur:new Intl.NumberFormat("de-DE",{style:"currency",currency:"EUR",maximumSignificantDigits:3}).format(t),brl:new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL",maximumSignificantDigits:3}).format(t)};return r[e]},v=t=>t.getTime()/1e3,y=(t,e)=>{const r={bitcoin:1367323200,ethereum:1438947200,"terra-luna":1559217600,dacxi:1625140800,cosmos:1551441600},i={bitcoin:v(e)<r[t]?new Date(1e3*r[t]):e,ethereum:v(e)<r[t]?new Date(1e3*r[t]):e,"terra-luna":v(e)<r[t]?new Date(1e3*r[t]):e,dacxi:v(e)<r[t]?new Date(1e3*r[t]):e,cosmos:v(e)<r[t]?new Date(1e3*r[t]):e};return i[t]},b=t=>{const e=new Date;return t>e},x=(t,e)=>new Date(t+" "+e),w=(t,e)=>{const r={future:new Date(t.getTime()+9e7),past:new Date(t.getTime()-9e7)};return r[e]},D=async(t,e,r)=>{const i=v(r),a=v(new Date(r.setMonth(r.getMonth()-1)));try{const{data:r}=await f.get(`/coins/${t}/market_chart/range?`,{params:{vs_currency:e,from:a,to:i}}),s=r.prices,o=s.slice(s.length-30);return o}catch(s){console.log(s)}},_=async(t,e,r=30)=>{try{const{data:i}=await f.get(`/coins/${t}/market_chart?`,{params:{vs_currency:e,days:r,interval:"daily"}});return i}catch(i){console.log(i)}},T=async(t,e)=>{try{var r;const{data:i}=await f.get("/coins/"+t);return null===i||void 0===i||null===(r=i.market_data.current_price)||void 0===r?void 0:r[e]}catch(i){console.log(i)}},O=async(t,e,r)=>{const i={pastDate:w(r,"past"),futureDate:w(r,"future")},a={from:v(i.pastDate),to:v(i.futureDate),current:v(r)};try{const{data:r}=await f.get(`/coins/${t}/market_chart/range?`,{params:{vs_currency:e,from:a.from,to:a.to}}),i=r.prices.reduce((t,e)=>Math.abs(e[0]-a.current)<Math.abs(t[0]-a.current)?e:t);return i}catch(s){console.log(s)}},$=[{coins:[{text:"USD",value:"usd"},{text:"EUR",value:"eur"},{text:"BRL",value:"brl"}],currentCoin:"usd"},{criptos:[{text:"Ethereum",value:"ethereum"},{text:"Bitcoin",value:"bitcoin"},{text:"Luna",value:"terra-luna"},{text:"Dacxi",value:"dacxi"},{text:"ATOM",value:"cosmos"}],currentCripto:"bitcoin"},{options:{chart:{id:"dacxi-cripto-chart"},xaxis:{categories:[]},responsive:[{breakpoint:600,options:{chart:{width:350,height:400},legend:{position:"bottom"}}}]}}];var V={name:"Content",data:()=>({loading:!1,currentTime:{date:"",hour:""},oldDateDisplay:"",priceTitle:"Current price",filterButton:"Filter",price:"",oldPrice:"",dateTime:"",progressValue:0,progressView:!0,coin:$[0],cripto:$[1],options:$[2].options,series:$[2].series}),computed:{priceCurrency(){return this.progressView?this.formatCurrency(this.price,this.coin.currentCoin):this.formatCurrency(this.oldPrice,this.coin.currentCoin)},setCriptoOrDateTime(){return this.progressView?this.setCripto:this.setDateTime},setDateTimeOrClearFilters(){return this.progressView?this.setDateTime:this.clearFilters}},mounted(){this.setCripto(),this.timerUpdate(),this.updateChart()},watch:{price(){this.updateChart(),this.progressValue=0},progressValue(){100===this.progressValue&&(this.progressValue=0,this.setCripto())}},methods:{async updateChartBasedOnOldDate(){try{const t=x(this.currentTime.date,this.currentTime.hour),e=y(this.cripto.currentCripto,t),r=await D(this.cripto.currentCripto,this.coin.currentCoin,e),i=r.map(t=>t[1].toFixed(4)),a=r.map(t=>{const e=new Date(t[0]),r=e.getDate(),i=e.getMonth()+1;return`${r}/${i}`});this.series=[{data:i,name:this.cripto.currentCripto.toLocaleUpperCase()}],this.options={xaxis:{categories:a},yaxis:{labels:{formatter:t=>this.formatCurrency(t,this.coin.currentCoin)}}}}catch(t){console.log(t)}},async updateChart(){try{const{prices:t}=await _(this.cripto.currentCripto,this.coin.currentCoin),e=t.map(t=>t[1].toFixed(4)),r=t.map(t=>{const e=new Date(t[0]),r=e.getDate(),i=e.getMonth()+1;return`${r}/${i}`});this.series=[{data:e,name:this.cripto.currentCripto.toLocaleUpperCase()}],this.options={xaxis:{categories:r},yaxis:{labels:{formatter:t=>this.formatCurrency(t,this.coin.currentCoin)}}}}catch(t){this.$toast.error("Error getting data, possible API error. Visit https://www.coingecko.com/en/api for more info")}},async setCripto(){this.loading=!0;try{this.price=await T(this.cripto.currentCripto,this.coin.currentCoin)||0,this.loading=!1}catch(t){this.loading=!1,this.$toast.error("Error getting data, possible API error. Visit https://www.coingecko.com/en/api for more info")}},timerUpdate(){setInterval(()=>{this.progressView&&(this.progressValue+=1)},100)},formatCurrency(t,e){return C(t,e)},async setDateTime(){try{if(""===this.currentTime.date||""===this.currentTime.hour)return void this.$toast.warning("Please select a date and hour");const t=x(this.currentTime.date,this.currentTime.hour);if(b(t))return void this.$toast.warning("You can't select a future date");this.progressView=!1,this.loading=!0;const e=y(this.cripto.currentCripto,t);let r=e.getDate().toString(),i=e.getMonth()+1;i=i.toString(),1===i.length&&(i="0"+i),1===r.length&&(r="0"+r);const a=e.getFullYear(),s=`${a}-${i}-${r}`;s!==this.currentTime.date&&(this.$toast.warning(`Oldest date available for this crypto is ${r}/${i}/${a}`),this.currentTime.date=s);const o=await O(this.cripto.currentCripto,this.coin.currentCoin,e);this.updateChartBasedOnOldDate(),this.oldPrice=o[1],this.priceTitle="Closest available price",this.filterButton="Clear filters",this.oldDateDisplay=`${r}/${i}/${a}`,this.loading=!1}catch(t){this.loading=!1,this.$toast.error("Error getting data, possible API error. Visit https://www.coingecko.com/en/api for more info")}},clearFilters(){this.progressView=!0,this.priceTitle="Current price",this.filterButton="Filter",this.currentTime.date="",this.currentTime.hour="",this.oldDateDisplay="",this.setCripto(),this.updateChart()}}},k=V,B=r("2877"),P=Object(B["a"])(k,p,h,!1,null,null,null),S=P.exports,j={name:"App",components:{Content:S}},F=j,I=Object(B["a"])(F,s,o,!1,null,null,null),M=I.exports,U=r("f309");i["a"].use(U["a"]);var A=new U["a"]({}),E=(r("845f"),r("6c42")),L=(r("da96"),r("1321")),R=r.n(L);i["a"].use(R.a),i["a"].component("apexchart",R.a);const N={position:"top-center",timeout:5e3,closeOnClick:!0,pauseOnFocusLoss:!0,pauseOnHover:!0,draggable:!0,draggablePercent:.6,showCloseButtonOnHover:!1,hideProgressBar:!0,closeButton:"button",icon:!0,rtl:!1,transition:"Vue-Toastification__fade",maxToasts:20,newestOnTop:!0};i["a"].use(E["a"],N),i["a"].config.productionTip=!1,new i["a"]({vuetify:A,render:t=>t(M)}).$mount("#app")},"845f":function(t,e,r){}});
//# sourceMappingURL=app.e6698bb7.js.map