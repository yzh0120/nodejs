(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["VChartsBase"],{4273:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("page",[a("el-divider",{attrs:{"content-position":"left"}},[t._v("基础的折线图")]),a("ve-line",{attrs:{data:t.chartData}}),a("el-divider",{attrs:{"content-position":"left"}},[t._v("设置显示的指标维度")]),a("ve-line",{attrs:{data:t.chartData,settings:t.chartSettings}}),a("el-divider",{attrs:{"content-position":"left"}},[t._v("设置双y轴")]),a("ve-line",{attrs:{data:t.chartData,settings:t.chartSettings_yy}}),a("el-divider",{attrs:{"content-position":"left"}},[t._v("横坐标的刻度的倾斜")]),a("ve-line",{attrs:{data:t.chartData,extend:t.extend}}),a("el-divider",{attrs:{"content-position":"left"}},[t._v("堆叠面积图")]),a("ve-line",{attrs:{data:t.chartData,settings:t.chartSettings_stack}}),a("el-divider",{attrs:{"content-position":"left"}},[t._v("设置别名")]),a("ve-line",{attrs:{data:t.chartData_alias,settings:t.chartSettings_alias}}),a("el-divider",{attrs:{"content-position":"left"}},[t._v("显示指标数值")]),a("ve-line",{attrs:{data:t.chartData,extend:t.extend_showData}}),a("el-divider",{attrs:{"content-position":"left"}},[t._v("设置横轴为连续的时间轴")]),a("ve-line",{attrs:{data:t.chartData,settings:t.chartSettings_xAxisType}}),a("el-divider",{attrs:{"content-position":"left"}},[t._v("钩子函数")]),a("ve-line",{attrs:{data:t.chartData,"before-config":t.beforeConfig,"after-config":t.afterConfig,"after-set-option":t.afterSetOption}})],1)},i=[],n={data:function(){return this.chartSettings={metrics:["访问用户","下单用户"],dimension:["日期"]},this.chartSettings_yy={axisSite:{right:["下单率"]},yAxisType:["KMB","normal"],yAxisName:["数值","比率"]},this.extend={"xAxis.0.axisLabel.rotate":45},this.chartSettings_stack={stack:{"用户":["访问用户","下单用户"]},area:!0},this.chartSettings_alias={labelMap:{PV:"访问用户1",Order:"下单用户"},legendName:{"访问用户1":"访问用户 total: 100001"}},this.extend_showData={series:{label:{normal:{show:!0}}}},this.chartSettings_xAxisType={xAxisType:"time"},{chartData:{columns:["日期","访问用户","下单用户","下单率"],rows:[{"日期":"2018-01-01","访问用户":1393,"下单用户":1093,"下单率":.32},{"日期":"2018-01-02","访问用户":3530,"下单用户":3230,"下单率":.26},{"日期":"2018-01-03","访问用户":2923,"下单用户":2623,"下单率":.76},{"日期":"2018-01-05","访问用户":1723,"下单用户":1423,"下单率":.49},{"日期":"2018-01-10","访问用户":3792,"下单用户":3492,"下单率":.323},{"日期":"2018-01-20","访问用户":4593,"下单用户":4293,"下单率":.78}]},chartData_alias:{columns:["date","PV","Order","OrderRate"],rows:[{date:"1/1",PV:1393,Order:1093,OrderRate:.32},{date:"1/2",PV:3530,Order:3230,OrderRate:.26},{date:"1/3",PV:2923,Order:2623,OrderRate:.76},{date:"1/4",PV:1723,Order:1423,OrderRate:.49},{date:"1/5",PV:3792,Order:3492,OrderRate:.323},{date:"1/6",PV:4593,Order:4293,OrderRate:.78}]}}},methods:{beforeConfig:function(t){return console.log("beforeConfig",t),t},afterConfig:function(t){return console.log("afterConfig",t),t.xAxis[0].axisLabel={interval:0,rotate:45},t},afterSetOption:function(t){console.log("afterSetOption",t)}}},s=n,o=a("2877"),d=Object(o["a"])(s,r,i,!1,null,"530e7360",null);e["default"]=d.exports}}]);