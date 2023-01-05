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
    const id: any = req.query.id;
    const nodeFiltered: ResponseData[] = nodes.filter(node => node.id == id);
    res.status(200).json(nodeFiltered);
}
