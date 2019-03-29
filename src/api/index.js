import ajax from '@/api/ajax.js'

//获取role
export const roleList=()=>ajax('/api/role')
export const seasonData=(data)=>ajax('/api/season',data);
export const vegetablesData=()=>ajax('/api/vegetables');
export const addVegetables=(datafrom)=>ajax('/api/addvegetable',datafrom,'POST')
export const delVegetable=(id)=>ajax('/api/delvegetable',{id},'POST');
export const incomeData=()=>ajax('/api/income');
//登录事件 http://192.168.7.224:9090/findall.do
export const login=(user)=>ajax('/eureka/findall.do',user,'POST');


