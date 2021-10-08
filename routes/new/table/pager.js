module.exports = function (req, res) {
  let total = 100;
  
  if(req.body.pagerData){
	  let init = (req.body.pagerData.pageNo - 1) * req.body.pagerData.pageSize + 1
	  let fina = req.body.pagerData.pageNo  * req.body.pagerData.pageSize
	  let arr = []
	  for(let i = init;i<=fina;i++){
		  if(i <=total ){
			  arr.push(
				{
					Bank_of_deposit: "华商银行深圳分行",
					account: "5102100219000258489", 
					Total_amount: 1000000, 
					remark: "待总经理审批",
					status:1,
				}
			  )
		  }
	  }
	  console.log(arr)
	  res.send({
	    code: 200,
	    data: arr,
		total : 100
	  });
  }

}
