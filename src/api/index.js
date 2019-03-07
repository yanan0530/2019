import ajax from '@/api/ajax.js'

//获取role
// export const roleList=()=>ajax('/api/role')

export const seasonData=()=>ajax('/api/season');
export const vegetablesData=()=>ajax('/api/vegetables');
export const addVegetables =(data)=>ajax('',data,"POST");


export const incomeData=()=>ajax('/api/income');
export const dj=()=>ajax('/dj/index');
