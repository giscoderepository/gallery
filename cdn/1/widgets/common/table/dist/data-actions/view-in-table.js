System.register(["jimu-core"],(function(t){var e;return{setters:[function(t){e=t}],execute:function(){t(function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=389)}({0:function(t,n){t.exports=e},389:function(t,e,n){"use strict";n.r(e);var r,o=n(0),a=n(41),i=(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),u=function(t,e,n,r){return new(n||(n=Promise))((function(o,a){function i(t){try{c(r.next(t))}catch(t){a(t)}}function u(t){try{c(r.throw(t))}catch(t){a(t)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(i,u)}c((r=r.apply(t,e||[])).next())}))},c=function(t,e){var n,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function u(a){return function(u){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=i.trys,(o=o.length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=e.call(t,i)}catch(t){a=[6,t],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,u])}}},l=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.getDataActionRuntimeUuid=function(t){return o.utils.getLocalStorageAppKey()+"-"+t+"-DaTableArray"},e.deepClone=function(t){var n=Array.isArray(t)?[]:{};for(var r in t){var o=("object"==typeof t[r]||"function"==typeof t[r])&&null!==t[r];n[r]=o?e.deepClone(t[r]):t[r]}return n},e}return i(e,t),e.prototype.isSupported=function(t,e){return u(this,void 0,Promise,(function(){return c(this,(function(t){return[2,e.length>0]}))}))},e.prototype.onExecute=function(t,e,n,r){var i,l,f;return u(this,void 0,Promise,(function(){var r,u,s,d,p,b,y;return c(this,(function(c){return r=t&&t.getSchema(),u=["CreationDate","Creator","EditDate","Editor","GlobalID"],s=Object.values(r.fields),d=s.filter((function(t){return!u.includes(t.jimuName)})),p="DaTable-"+o.utils.getUUID(),b={id:p,name:n||t.getLabel(),useDataSource:{dataSourceId:t.id,mainDataSourceId:null===(i=t.getMainDataSource())||void 0===i?void 0:i.id,dataViewId:t.dataViewId,rootDataSourceId:null===(l=t.getRootDataSource())||void 0===l?void 0:l.id},allFields:s,tableFields:d,enableAttachements:!1,enableEdit:!1,allowCsv:!1,enableSearch:!1,searchFields:"",enableRefresh:!1,enableSelect:!1,selectMode:a.a.Single,dataActionObject:{dataActionRecordIds:e.map((function(t){return null==t?void 0:t.getId()}))}},(y=(null===(f=o.MutableStoreManager.getInstance().getStateValue([this.widgetId]))||void 0===f?void 0:f.viewInTableObj)||{})[p]=b,o.MutableStoreManager.getInstance().updateStateValue(this.widgetId,"viewInTableObj",y),Object(o.getAppStore)().dispatch(o.appActions.widgetStatePropChange(this.widgetId,"dataActionActiveObj",{activeTabId:p,dataActionTable:!0})),[2,!0]}))}))},e}(o.AbstractDataAction);e.default=l},41:function(t,e,n){"use strict";var r,o;n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return o})),function(t){t.Dropdown="DROPDOWN",t.Tabs="TABS"}(r||(r={})),function(t){t.Single="SINGLE",t.Multiple="MULTIPLE"}(o||(o={}))}}))}}}));