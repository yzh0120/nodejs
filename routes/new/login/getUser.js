module.exports = function (req, res) {
	let arr = ['system','test']
	for(let item of arr){
		if(item == req.body.token){
			res.send({
				code: 200,
				data:{
					username: item,
					roleArr: [item]
				}
			})
		}
	}
}