import ajax from '@/api/ajax.js'
export const userList = () => ajax('/yn/userlist')
export const addUser = (data) => ajax('/yn/adduser', data, "POST")
export const delUser = (id) => ajax('/yn/delUser', id)

//蔬菜管理
//列表
export const vegeList = () => ajax('/yn/vegelist')
export const vegeSave = (data) => ajax('/yn/vege', data, "POST")
export const vegeDel = (id) => ajax('/yn/vegedel', {
	id
})
export const vegeInit = () => ajax('/yn/vegeinit')
//蔬菜均价管理
export const vpList=()=>ajax('/yn/vp/list')
export const vpSave=(data)=>ajax('/yn/vp/save',data,"POST")
export const vpDel=(id)=>ajax('/yn/vp/del',{id})

//收入管理
export const incomeList = () => ajax('/yn/income')
export const incomeSave = (data) => ajax('/yn/incomesave', data, "POST")
export const incomeDel = (id) => ajax('/yn/delincome', {
	id
})
//年
export const incomeYearsArray=(id)=>ajax('/yn/income/years',{id})
//获取日期 月-日
export const incomeMountDayArray=(id)=>ajax('/yn/income/mouthday',{id})
//获取 所有数据 
export const incomeDataMountDayData=(id)=>ajax('/yn/income/datamountday',{id})

//报表 获取所有总数据
export const incomeAll = () => ajax('/yn/incomeall')
export const incomeYear = (year) => ajax('/yn/incomeyear', {
	year
})
export const incomeDateAll = (type, date) => ajax('/yn/incomes', {
	type,
	date
});

//事情
export const thingAll = () => ajax('/yn/thing')
export const thingSave = (data) => ajax('/yn/thing', data, "POST")
export const thingDel = (id) => ajax("/yn/thingdel", {
	id
})

//种植项目
export const projectSave = (data) => ajax("/yn/project", data, "POST")
export const projectAll = () => ajax("/yn/project")
export const projectDel = (id) => ajax("/yn/projectdel", {
	id
})
export const projectUpdate=(data)=>ajax("/yn/projectsupdate",data,"POST")
export const projectByState=()=>ajax("/yn/projects/state")

//区域
export const areaAll=()=>ajax("/yn/area")
export const areaSave=(data)=>ajax("/yn/area/save",data,"Post")
export const areaDel=(id)=>ajax("/yn/area/del",{id})

//日常操作
export const recordsAll=()=>ajax("/yn/records/list")
export const recordsSave=(data)=>ajax("/yn/records/save",data,"POST")
export const recordsDel=(id)=>ajax("/yn/records/del",{id})
export const recordsByProjectId=(id)=>ajax("/yn/records/projectid",{id})//根据项目ID 获取日常操作记录