import {useEffect, useState} from 'react';
import {data} from 'browserslist';

type RecordItem = {
  tagIds:number[]
  note:string
  category:'-' | '+'
  amount:number
  createdAt:string //ISO 8601
}
type newRecordItem = Omit<RecordItem, 'createdAt'>
const useRecords = () => {
  const [records,setRecords] = useState<RecordItem[]>([])
  useEffect(() => {
    setRecords(JSON.parse(window.localStorage.getItem("records") || "[]"))
  },[])
  useEffect(() => {
    window.localStorage.setItem('record',JSON.stringify(records))
  },[records])
  const addRecord = (newRecord:newRecordItem) => {
    if(newRecord.amount<=0){
      alert('请输入金额')
      return false
    }
    if (newRecord.tagIds.length === 0){
      alert('请选择标签')
      return false
    }
    const record = {...newRecord,createdAt:(new Date()).toString()}
    setRecords([...records,record])
    return true
  }
  return {records,addRecord}

}
export {useRecords}