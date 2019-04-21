export const removeArr = arr => [...new Set(arr)];
export const datedifference = (sDate1, sDate2) => {
	var dateSpan, tempDate, iDays;
	sDate1 = Date.parse(sDate1);
	sDate2 = Date.parse(sDate2);
	dateSpan = sDate2 - sDate1;
	dateSpan = Math.abs(dateSpan);
	iDays = Math.floor(dateSpan / (24 * 3600 * 1000));
	return iDays
}
