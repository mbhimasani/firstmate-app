import type { NextApiRequest, NextApiResponse } from 'next'
import { RESERVOIR_API_KEY } from '../../constants';

const handleTokenList = async (
  req: NextApiRequest,
  res: NextApiResponse,
) => { 
  const { contractid, tokenid } = req.query;
  let collection: any[] = [];

  const headers = new Headers({
    'X-API-KEY': RESERVOIR_API_KEY ?? '',
  });

  const reservoirRes = await fetch(
    `https://api.reservoir.tools/tokens/v6` +
      `?tokens=${contractid}` + `%3A${tokenid}`,
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
      message: 'internal error fetching account assets',
    });
    return;
  };
  res.status(200).json({
    statusCode: 200,
    collection,
  });
}

export default handleTokenList;