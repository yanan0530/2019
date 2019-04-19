import ajax from '@/api/ajax.js'

//获取role
export const roleList = () => ajax('/api/role')
export const seasonData = (data) => ajax('/api/season', data);
export const vegetablesData = () => ajax('/api/vegetables');
export const addVegetables = (datafrom) => ajax('/api/addvegetable', datafrom, 'POST')
export const delVegetable = (id) => ajax('/api/delvegetable', {
	id
}, 'POST');
export const incomeData = () => ajax('/api/income');
//登录事件 http://192.168.7.224:9090/findall.do
export const login = (user) => ajax('/eureka/findall.do', user, 'POST');

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

//收入管理

export const incomeList = () => ajax('/yn/income')

export const incomeSave = (data) => ajax('/yn/incomesave', data, "POST")

export const incomeDel = (id) => ajax('/yn/delincome', {
	id
})


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
export const thingDel=(id)=>ajax("/yn/thingdel",{id})
