(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["baseTableBase"],{"3e0e":function(a,t,e){"use strict";e.r(t);var n=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("page",[e("base-table",{attrs:{data:a.table}})],1)},o=[],l={data:function(){var a=this;return{table:{head:[{field:"Bank_of_deposit",label:"开户行"},{field:"account",label:"账号",format:function(t){return a.$fn.accSpace(t.account)}},{field:"Total_amount",label:"总金额",format:function(t){return a.$fn.thousand(t.Total_amount)}},{field:"remark",label:"备注"}],data:[],align:"center"}}},mounted:function(){for(var a=0;a<100;a++)this.table.data.push({Bank_of_deposit:"华商银行深圳分行",account:"5102100219000258489",Total_amount:1e6,remark:"待总经理审批"})}},r=l,u=e("2877"),c=Object(u["a"])(r,n,o,!1,null,"124198a3",null);t["default"]=c.exports}}]);