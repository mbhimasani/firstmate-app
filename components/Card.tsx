import { useState } from 'react';
import useSWR from 'swr';
import { fetcher } from '.././utils/fetcher'

export const Card = () => {
    const [token, setToken] = useState('0x1f81520596ba9ae2b0e93fa0d63742781820b7a2%3A2');
    const contractid = '0x1f81520596ba9ae2b0e93fa0d63742781820b7a2';
    const tokenid = '2'
    const [res, setRes] = useState('');

    // any api calls are done here
    const { data } = useSWR(token ? `/api/tokens?contractid=${contractid}&tokenid=${tokenid}` : '', fetcher)


    return (
        <div>
            <button
            onClick={()=> setRes(JSON.stringify(data))}></button>
            <div>{token}</div>
            <div>{res}</div>
        </div>
    )
}
