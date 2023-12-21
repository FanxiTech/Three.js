import { APIURL } from '@/constants'
import { StorageComponentsType } from '@/type/DesignMain'
import axios from 'axios'
import { useState, useEffect } from 'react'

export default function useGetMainPage(wallet: string) {
    const [data, setData] = useState<StorageComponentsType[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")


    useEffect(() => {
        async function fetchData() {
            setLoading(true)
            try {
                const { data } = await axios.post(`${APIURL}/getMainPage`, { walletAddress: wallet })
                // setData(data)
                const result = data?.map((i: string) => {
                    return JSON.parse(i)
                })
                console.log(result)
                setData(result)
                setLoading(false)
            } catch (err) {
                console.log(err)
                setLoading(false)
                setError(String(err))
            }

        }
        fetchData()
    }, [])

    return { data, loading, error }
}
