/**
 * 浅拷贝
 * 
 */

// 1.浅拷贝 对基础类型进行clone
let tempArr = [
	{
		"areaUserId":"",
		"areaUserName":"",
		"bargainTotalAmount":10994.36,
		"billMethod":"ton_price",
		"businessTenderTimeFrom":"2021-03-01 00:00:00",
		"businessTenderTimeTo":"2021-03-31 23:59:59",
		"canLose":"0",
		"cargoBigType":"",
		"carrierNumber":"",
		"createTime":"2021-03-02 09:30:50",
		"determineBid":1,
		"determineBidCarrier":"营口永丰实业有限公司",
		"id":"680",
		"invitedBid":1,
		"invitedBidCarrier":"营口永丰实业有限公司",
		"lineCount":4,
		"quoteTotalAmount":18703.79,
		"shipUserId":"",
		"shipUserName":"",
		"startTenderTime":"2021-03-03 00:00:00",
		"status":"110",
		"stopTenderTime":"",
		"tenderAreaName":"天津工厂",
		"tenderCompanyName":"嘉里粮油(天津)有限公司,丰益油脂科技(天津)有限公司,益海嘉里食品工业(天津)有限公司,益海嘉里(昆山)食品工业有限公司",
		"tenderName":"zy-0302-临时-可关联",
		"tenderNo":"LS202103020001",
		"totalTraffic":634.000,
		"userName":"",
		"vehicleType":"",
		"winTotalAmount":10994.36
	},
	{
		"areaUserId":"",
		"areaUserName":"",
		"bargainTotalAmount":0.00,
		"billMethod":"ton_price",
		"businessTenderTimeFrom":"2021-03-01 00:00:00",
		"businessTenderTimeTo":"2021-04-15 23:59:59",
		"canLose":"0",
		"cargoBigType":"",
		"carrierNumber":"",
		"createTime":"2021-03-01 15:27:23",
		"determineBid":1,
		"determineBidCarrier":"营口永丰实业有限公司",
		"id":"677",
		"invitedBid":1,
		"invitedBidCarrier":"营口永丰实业有限公司",
		"lineCount":1,
		"quoteTotalAmount":431370896.00,
		"shipUserId":"",
		"shipUserName":"",
		"startTenderTime":"2021-03-02 00:00:00",
		"status":"110",
		"stopTenderTime":"",
		"tenderAreaName":"天津工厂",
		"tenderCompanyName":"丰益油脂科技(天津)有限公司",
		"tenderName":"zy-0301-临时-部分启用",
		"tenderNo":"LS202103010003",
		"totalTraffic":2423432.000,
		"userName":"",
		"vehicleType":"",
		"winTotalAmount":431370896.00
	},
]

// 一秒钟执行一次
function bundle() {
	let times = 0

	clearTimeout(times)

	times = setTimeout(() => {
		btnStatus()
	}, 1000);
}
/**
 * 控制按钮的显隐
 * @param [string] status 状态  取所选数组的交集之后数据
 * @param [string] invitedBid  取所选数组的交集之后数据
 */

function btnStatus(status,invitedBid) {

}

new Set([{"invitedBid":1,"status":"110"}, {"invitedBid":1,"status":"110"}])

function Fn(name) {
	this.name = name
	// return {
	// 	demo:name
	// }
	return {}
}

new Fn('tony')