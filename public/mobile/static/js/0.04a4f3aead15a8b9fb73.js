webpackJsonp([0],{"8I4t":function(s,t){},oslt:function(s,t,e){"use strict";var i={name:"",data:function(){return{userId:void 0}},props:{msgg:{type:Object,default:{}},toUserInfo:{type:Boolean,default:!1}},methods:{toOtherUser:function(s){console.log(this.toUserInfo,"this.toUserInfo"),s=s||window.event,this.toUserInfo&&(s.stopPropagation?s.stopPropagation():s.cancelBubble=!0,this.$router.push({path:"/otherUser",query:{userId:this.msgg.user_id}}))}},computed:{},components:{},mounted:function(){},watch:{},filters:{}},n={render:function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"UserTag"},[e("div",{staticClass:"middleTop"},[e("img",{staticClass:"img",attrs:{src:s.msgg.user_img,alt:""},on:{click:function(t){return s.toOtherUser(t)}}}),s._v(" "),e("div",{staticClass:"tag"},[e("div",{staticClass:"name"},[s._v(s._s(s.msgg.user_name))]),s._v(" "),e("div",{staticClass:"goldDiv"},[e("i",{staticClass:"iconfont gold"},[s._v("")]),e("span",[s._v(s._s(s.msgg.user_gold))])]),s._v(" "),e("div",{staticClass:"lvDiv iconfontDiv"},[s._v("LV "+s._s(s._f("fLvComputed")(s.msgg.user_lv)))]),s._v(" "),1==s.msgg.user_super_admin?e("div",{staticClass:"user_super_admin iconfontDiv"},[s._v("超级管理员")]):s._e(),s._v(" "),1==s.msgg.user_authen?e("div",{staticClass:"authenDiv iconfontDiv"},[s._v("认证")]):s._e(),s._v(" "),2==s.msgg.user_authen?e("div",{staticClass:"superAuthenDiv iconfontDiv"},[s._v("超级认证")]):s._e(),s._v(" "),1==s.msgg.user_beauty?e("div",{staticClass:"user_beauty iconfontDiv"},[s._v("美少女")]):s._e()])])])},staticRenderFns:[]};var a=e("VU/8")(i,n,!1,function(s){e("8I4t")},"data-v-5e64bfec",null);t.a=a.exports}});
//# sourceMappingURL=0.04a4f3aead15a8b9fb73.js.map