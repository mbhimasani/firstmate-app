import type { NextApiRequest, NextApiResponse } from 'next'
import { RESERVOIR_API_KEY, RESERVOIR_TOKENS_BASE_URL } from '../../constants';

const handleTokenList = async (
  req: NextApiRequest,
  res: NextApiResponse,
) => { 
  // query parameter here is a JSON string containing array of {contractid: string, tokenid: string} objects
  // I opted to send the entire raw data over to the api route to parse. I initially tried to send contractid and tokenid as seperate parameters but realized that 1 query parameter is much more scalable. I then tried sending over a single query string as '?contractid=value&tokenid=value' but this was still read as 2 parameters in the request body. Sending over the entire data as a JSON string resolved those issues. I also preferred to create the query strings server-side.  
  const { nfts } = req.query;

  let collection: any[] = [];
  if (typeof nfts !== 'string') {
    res
      .status(400)
      .json({ statusCode: 400, message: 'Bad Request' });
    return;
  }

  try { 
    const nftArray = JSON.parse(nfts);
    const tokenStrings = nftArray.map((nft: any) => {
      return `tokens=${nft.contractID}%3A${nft.tokenID}`
    });

    const headers = new Headers({
      'X-API-KEY': RESERVOIR_API_KEY ?? '',
    });
    const reservoirRes = await fetch(
      `${RESERVOIR_TOKENS_BASE_URL}/v6` + `?${tokenStrings.join('&')}`,
      {
        headers,
      },
    );

    if (reservoirRes.ok) {
      const { tokens } = await reservoirRes.json();
      collection = [...collection, ...tokens];
    } else {
      res.status(500).json({
        statusCode: 500,
        message: 'internal error fetching reservoir tokens',
      });
      return;
    };
    res.status(200).json({
      statusCode: 200,
      collection,
    });

  } catch (err) {
    res.status(500).json({
      statusCode: 500,
      message: 'internal error fetching reservoir tokens',
    });
  }
}

export default handleTokenList;