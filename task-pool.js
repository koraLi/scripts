// 年     月    日     时    分   秒     毫秒
// 2020, 0-11, 1-31, 0-24, 0-60  0-60  0-1000
// 例如 2020-3-4 10:00:00.400
// (2020, 2, 4, 10, 0, 0, 400)

// 修改使用的时间
// 2020/3/3 10:00:00.400
var dayOffset = 0;
var temp = new Date(new Date().getTime() + dayOffset * 1000*60*60*24);
var year = temp.getFullYear();
var month = temp.getMonth();
var date = temp.getDate();
const t0 = new Date(year,month,date, 0, 00, 00, 000);

const t6 = new Date(year,month,date, 6, 00, 00, 000);
const t7 = new Date(year,month,date, 7, 00, 00, 000);
const t8 = new Date(year,month,date, 8, 00, 00, 000);
const t9 = new Date(year,month,date, 9, 00, 00, 000);
const t10 = new Date(year,month,date, 10, 00, 00, 000);
const t1008 = new Date(year,month,date, 10, 08, 00, 000);

const t11 = new Date(year,month,date, 11, 00, 00, 000);

const t12 = new Date(year,month,date, 12, 00, 00, 000);
const t14 = new Date(year,month,date, 14, 00, 00, 000);
const t16 = new Date(year,month,date, 16, 00, 00, 000);
const t15 = new Date(year,month,date, 15, 00, 00, 000);
const t1630 = new Date(year,month,date, 16, 30, 00, 000);
const t1701 = new Date(year,month,date, 17, 1, 00, 000);
const t18 = new Date(year,month,date, 18, 00, 00, 000);
const t20 = new Date(year,month,date, 20, 00, 00, 000);
const t22 = new Date(year,month,date, 22, 00, 00, 000);
const t23 = new Date(year, month, date, 23, 00, 00, 000);
const t24 = new Date(year,month,date, 23, 59, 59, 999);

// sku和时间的数组，第一项是skuId,第二项是时间
var skuAndTimeArray = [
	//['100019106982', t6, 0],
	//['100007673315', t7, 0],
	//['10037745317769', t8,  0],
	////['10031488871639', t9, 0],
	//['100013452916', t10, 0],
	//['100021411796', t11, 0],
	['100028574818', t12, 0],
	//['100017687386', t14, 0],
	//['100009023939', t15, 0],
	//['100009496381', t16, 0],
	//['100018726440', t18, 0],
	//['100028609262', t20, 0],
	//['58070027191', t22, 0],
	//['100000022770',t24, 0],
	//['100007817008',t0, 0],
	
]

var offset = -185;
var yuyue_offset = -200;

// 修改这里, 添加skuId, 和抢购时间 date, 需要更改 月/日 时:分:秒:毫秒
// skuId 获取方法， 打开任意一个商品详情页如 `https://item.jd.com/100011521400.html`, 则 `100011521400` 就是其skuId
// https://item.jd.com/100015062660.html#crumb-wrap
// 
// skuAndTime[1].getTime() - 30 这里的30是提前的毫秒数,可以自行修改,或者请教群里抢购大佬最佳的提前时间
exports.pool = skuAndTimeArray.map(skuAndTime=>{ return {skuId: skuAndTime[0], date: skuAndTime[1].getTime() - 105 + offset + skuAndTime[2] , areaId: '1_2806_2831'} });

exports.forceLogin = false;
