import {server} from "./axios";
import {matDetails} from "@quasar/extras/material-icons";
import { AxiosRequestConfig } from "axios";


// 获取列表
// 列表接收参数：
// ac=list
// t=类别ID
// pg=页码
// wd=搜索关键字
// h=几小时内的数据
export function getList(param: AxiosRequestConfig<any> | undefined){
    return server.get(`inc/apijson.php?ac=list`,({params:param}))
}
// 参数 ids=数据ID，多个ID逗号分割。
// t=类型ID
// pg=页码
// h=几小时内的数据
export function getDetail(param: AxiosRequestConfig<any> | undefined) {
    return server.get(`inc/apijson.php?ac=detail`,({params:param}))
}