/**
 * 删除confirm
 * id 删除的id 
 * fun 点击确定执行方法
 */
import { MessageBox } from 'element-ui';
const delConfirm = (id, fun) => {
	MessageBox.confirm("此操作将永久删除，是否继续？", "提示", {
		confirmButtonText: '确定',
		cancelButtonText: '取消',
		type: 'warning'
	}).then(() => {
		fun(id)
	})
}
//获取当前时间
const getNowFormatDate = () => {
	var date = new Date();
	var seperator1 = "-";
	var year = date.getFullYear();
	var month = date.getMonth() + 1;
	var strDate = date.getDate();
	if (month >= 1 && month <= 9) {
		month = "0" + month;
	}
	if (strDate >= 0 && strDate <= 9) {
		strDate = "0" + strDate;
	}
	var currentdate = year + seperator1 + month + seperator1 + strDate;
	return currentdate;
}
//去重
const removeArr = arr => [...new Set(arr)];
//算2个时间差
const datedifference = (sDate1, sDate2) => {
	var dateSpan, tempDate, iDays;
	sDate1 = Date.parse(sDate1);
	sDate2 = Date.parse(sDate2);
	dateSpan = sDate2 - sDate1;
	dateSpan = Math.abs(dateSpan);
	iDays = Math.floor(dateSpan / (24 * 3600 * 1000));
	return iDays
}
export default{
	delConfirm,getNowFormatDate,removeArr
}