import {getNowFormatDate} from '@/assets/common.js'
let showAreaTitle = (value, arr)=> {
	return arr.filter(a => a.id == value)[0].areaname;
}
let showThingTitle = (value, arr) => {
	return arr.filter(thing => thing.id == value)[0].name
}
let showDate=(value, projectDate)=>{
	
	if(value==null){
		value=getNowFormatDate()
	}
	var dateSpan, iDays;
	let sDate1 = Date.parse(value);
	let sDate2 = Date.parse(projectDate);
	dateSpan = sDate2 - sDate1;
	dateSpan = Math.abs(dateSpan);
	iDays = Math.floor(dateSpan / (24 * 3600 * 1000));
	return iDays
}
let dailyIncome=(value,sum)=>{
	//value 总天数， sum 总收入
	return (sum/value).toFixed(2)
}
export {
	showAreaTitle,
	showThingTitle,
	showDate,
	dailyIncome
}


