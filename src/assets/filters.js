let showAreaTitle = (value, arr)=> {
	return arr.filter(a => a.id == value)[0].areaname;
}
let showThingTitle = (value, arr) => {
	return arr.filter(thing => thing.id == value)[0].name
}
export {
	showAreaTitle,
	showThingTitle
}
