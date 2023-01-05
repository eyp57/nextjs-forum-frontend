import type { NextApiRequest, NextApiResponse } from 'next'
import {nodes} from './nodeList.json'
interface Category {
    title: string,
    description: string,
    id: number
}
interface ResponseData {
    title: string,
    description: string,
    id: number,
    categories: Category[]
}


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData[]>
) {
    const nodeList: ResponseData[] = nodes;
    
    res.status(200).json(nodeList)
}