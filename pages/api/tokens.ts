import type { NextApiRequest, NextApiResponse } from 'next'
import { RESERVOIR_API_KEY } from '../../constants';

const handleTokenList = async (
  req: NextApiRequest,
  res: NextApiResponse,
) => { 
  const { nfts } = req.query;

  let collection: any[] = [];
  if (typeof nfts !== 'string') {
    res
      .status(422)
      .json({ statusCode: 422, message: 'query is not a valid value' });
    return;
  }

  // most obvious way for me to create url. but may be better to use reservoir SDK getTokensV6 api route
  try { 
    const nftArray = JSON.parse(nfts);
    const tokenStrings = nftArray.map((nft: any) => {
      return `tokens=${nft.contractID}%3A${nft.tokenID}`
    });

    const headers = new Headers({
      'X-API-KEY': RESERVOIR_API_KEY ?? '',
    });
    const reservoirRes = await fetch(
      `https://api.reservoir.tools/tokens/v6` +
        `?${tokenStrings.join('&')}`,
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