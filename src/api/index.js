import ajax from '@/api/ajax.js'
export const reqGetUser = () => ajax('/shankeword/user/login.do')
export const reqGetUser2 = () => ajax('/api/users')


//获取role
export const roleList=()=>ajax('/data/role.json')