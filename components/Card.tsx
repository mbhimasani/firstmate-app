import { useState } from 'react';
import useSWR from 'swr';
import { fetcher } from '.././utils/fetcher'

export const Card = () => {
    const [text, setText] = useState(''); // for debugging

    const contractid = '0x1f81520596ba9ae2b0e93fa0d63742781820b7a2';
    const tokenid = '2'
    // any api calls are done here
    const { data } = useSWR(`/api/tokens?contractid=${contractid}&tokenid=${tokenid}`, fetcher)
    
    const displayToken = () => {
        return (
            <div style={{"width": "200px", "height": "200px", "border": "2px solid black"}}>
                {data?.collection?.[0].token?.name}
            </div>
        )
    }

    return (
        <div>
            <button onClick={()=>{
                setText(JSON.stringify(data));
                console.log(data)
            }}></button> 
            <div>{text}</div>
            {displayToken()}
        </div>
    )
}
