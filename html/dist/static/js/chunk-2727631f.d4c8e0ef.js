(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2727631f"],{"6a33":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"app-container"},[r("h4",{staticClass:"form-header h4"},[e._v("基本信息")]),r("el-form",{ref:"form",attrs:{model:e.form,"label-width":"80px"}},[r("el-row",[r("el-col",{attrs:{span:8,offset:2}},[r("el-form-item",{attrs:{label:"用户昵称",prop:"nickName"}},[r("el-input",{attrs:{disabled:""},model:{value:e.form.nickName,callback:function(t){e.$set(e.form,"nickName",t)},expression:"form.nickName"}})],1)],1),r("el-col",{attrs:{span:8,offset:2}},[r("el-form-item",{attrs:{label:"登录账号",prop:"userName"}},[r("el-input",{attrs:{disabled:""},model:{value:e.form.userName,callback:function(t){e.$set(e.form,"userName",t)},expression:"form.userName"}})],1)],1)],1)],1),r("h4",{staticClass:"form-header h4"},[e._v("角色信息")]),r("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"table",attrs:{"row-key":e.getRowKey,data:e.roles.slice((e.pageNum-1)*e.pageSize,e.pageNum*e.pageSize)},on:{"row-click":e.clickRow,"selection-change":e.handleSelectionChange}},[r("el-table-column",{attrs:{label:"序号",type:"index",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("span",[e._v(e._s((e.pageNum-1)*e.pageSize+t.$index+1))])]}}])}),r("el-table-column",{attrs:{type:"selection","reserve-selection":!0,width:"55"}}),r("el-table-column",{attrs:{label:"角色编号",align:"center",prop:"roleId"}}),r("el-table-column",{attrs:{label:"角色名称",align:"center",prop:"roleName"}}),r("el-table-column",{attrs:{label:"权限字符",align:"center",prop:"roleKey"}}),r("el-table-column",{attrs:{label:"创建时间",align:"center",prop:"createTime",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("span",[e._v(e._s(e.parseTime(t.row.createTime)))])]}}])})],1),r("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{total:e.total,page:e.pageNum,limit:e.pageSize},on:{"update:page":function(t){e.pageNum=t},"update:limit":function(t){e.pageSize=t}}}),r("el-form",{attrs:{"label-width":"100px"}},[r("el-form-item",{staticStyle:{"text-align":"center","margin-left":"-120px","margin-top":"30px"}},[r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm()}}},[e._v("提交")]),r("el-button",{on:{click:function(t){return e.close()}}},[e._v("返回")])],1)],1)],1)},a=[],o=(r("e4f0"),r("f6be"),r("19c4"),r("8c6a"),r("c0c7")),u={name:"AuthRole",data:function(){return{loading:!0,total:0,pageNum:1,pageSize:10,roleIds:[],roles:[],form:{}}},created:function(){var e=this,t=this.$route.params&&this.$route.params.userId;t&&(this.loading=!0,Object(o["e"])(t).then((function(t){e.form=t.user,e.roles=t.roles,e.total=e.roles.length,e.$nextTick((function(){e.roles.forEach((function(t){t.flag&&e.$refs.table.toggleRowSelection(t)}))})),e.loading=!1})))},methods:{clickRow:function(e){this.$refs.table.toggleRowSelection(e)},handleSelectionChange:function(e){this.roleIds=e.map((function(e){return e.roleId}))},getRowKey:function(e){return e.roleId},submitForm:function(){var e=this,t=this.form.userId,r=this.roleIds.join(",");Object(o["j"])({userId:t,roleIds:r}).then((function(t){e.$modal.msgSuccess("授权成功"),e.close()}))},close:function(){var e={path:"/system/user"};this.$tab.closeOpenPage(e)}}},s=u,l=r("1805"),i=Object(l["a"])(s,n,a,!1,null,null,null);t["default"]=i.exports},c0c7:function(e,t,r){"use strict";r.d(t,"h",(function(){return o})),r.d(t,"f",(function(){return u})),r.d(t,"a",(function(){return s})),r.d(t,"k",(function(){return l})),r.d(t,"c",(function(){return i})),r.d(t,"i",(function(){return c})),r.d(t,"b",(function(){return m})),r.d(t,"g",(function(){return d})),r.d(t,"l",(function(){return f})),r.d(t,"m",(function(){return p})),r.d(t,"n",(function(){return h})),r.d(t,"e",(function(){return b})),r.d(t,"j",(function(){return g})),r.d(t,"d",(function(){return w}));var n=r("b775"),a=r("c38a");function o(e){return Object(n["a"])({url:"/system/user/list",method:"get",params:e})}function u(e){return Object(n["a"])({url:"/system/user/"+Object(a["e"])(e),method:"get"})}function s(e){return Object(n["a"])({url:"/system/user",method:"post",data:e})}function l(e){return Object(n["a"])({url:"/system/user",method:"put",data:e})}function i(e){return Object(n["a"])({url:"/system/user/"+e,method:"delete"})}function c(e,t){var r={userId:e,password:t};return Object(n["a"])({url:"/system/user/resetPwd",method:"put",data:r})}function m(e,t){var r={userId:e,status:t};return Object(n["a"])({url:"/system/user/changeStatus",method:"put",data:r})}function d(){return Object(n["a"])({url:"/system/user/profile",method:"get"})}function f(e){return Object(n["a"])({url:"/system/user/profile",method:"put",data:e})}function p(e,t){var r={oldPassword:e,newPassword:t};return Object(n["a"])({url:"/system/user/profile/updatePwd",method:"put",params:r})}function h(e){return Object(n["a"])({url:"/system/user/profile/avatar",method:"post",headers:{"Content-Type":"application/x-www-form-urlencoded"},data:e})}function b(e){return Object(n["a"])({url:"/system/user/authRole/"+e,method:"get"})}function g(e){return Object(n["a"])({url:"/system/user/authRole",method:"put",params:e})}function w(){return Object(n["a"])({url:"/system/user/deptTree",method:"get"})}}}]);