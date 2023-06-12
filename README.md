# FirstMate Create NFT Marketplace Challege

## Local Setup

Run the following commands to setup, given `node` and `npm` is available:

1. `git clone git@github.com:mbhimasani/firstmate-app.git`
2. `cd firstmate-app`
3. `npm install`
4. create `.env` file in `/`
5. set `RESERVOIR_API_KEY={{apiKey}}` in `.env` file
6. `npm run dev` to run the development server
7. Open [http://localhost:3000](http://localhost:3000) with your browser to view the web app.

This web app is also deployed on Vercel at https://firstmate-app-take-home.vercel.app/#

To deploy your own version of this app on Vercel, the easiest way is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme). Import your GitHub Repo, add your API key value pairs to the Vercel Environment Variables, and you're ready to deploy!

---

## Project Structure

| file                       | description                                                                                                                                                                                                            |
| -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `components/gridItem.tsx`  | Functional component rendering individual grid items.                                                                                                                                                                  |
| `components/header.tsx`    | Components rendering Head metadata and project headers.                                                                                                                                                                |
| `components/modal.tsx`     | Functional component rendering modal container to display selected token.                                                                                                                                              |
| `components/modalItem.tsx` | Functional component rendering modal body.                                                                                                                                                                             |
| `constants/index.ts`       | Constants pertinent to `pages/index.tsx` (keys, links, testing data)                                                                                                                                                   |
| `constants/routes.ts`      | API endpoints                                                                                                                                                                                                          |
| `pages/_app.tsx`           | App component to initialize pages.                                                                                                                                                                                     |
| `pages/_document.tsx`      | Custom document component to update the <html> and <body> tags used to render root Page.                                                                                                                               |
| `pages/api/tokens.ts`      | Tokens API endpoint - GET request to Reservoir API for token metadata with error handling is made here. OK Response is returned as Reservoir API Typing for `paths["/tokens/v6"]["get"]["responses"]["200"]["schema"]` |
| `pages/index.tsx`          | App index Page - GET request to `tokens` endpoint is made here.                                                                                                                                                        |
| `types/data.ts`            | Typings for response from the `tokens` endpoint.                                                                                                                                                                       |
| `utils/fetcher.ts`         | Fetcher function for useSWR.                                                                                                                                                                                           |

---

## Assignment Overview

The purpose of this assignment was to build a single page web app to view and browse this set of NFTs, and analyze the trade offs and architecture created given the following constraints:

- 3-5 hours
- Use of Reservoir API

## Libraries / Tools used

- Next.js v13.4.4
- React v18.2.0
- Reservoir NFT Data API v6
- styled components v6.0.0-rc.3
- Vercel for deployment

## Implentation decisions

- Given the time constraint and the use of an API I was unfamiliar with, I opted to focus on creating clean, readable and maintainable code for a simple MVP, and keeping the UI/UX bare-bones.
- Because I was unfamiliar with the Reservoir API, I started with the basic approach of creating a simple web app that renders data as plaintext from the Reservoir tokens endpoint, and then iterated on each piece bit by bit. The process I followed for my implementation is as follows:
  - Data fetched from Reservoir API on button click to get backend working.
  - Data fetched from Reservoir API on page load
  - Optimizing data passed to the backend.
  - Creating custom interface for response type.
  - Rendering Grid Items with fetched data with minimal styling.
  - Optimizing project structure, removing unnecessary typings from interface, renaming components, and overall making the code much more readable.
  - Rendering Modal with minimal styling to display additional token data upon user click.
  - Another iteration of optimization and clean up.
  - Remaining time spent on styling, animation, and screen responsiveness.
- To help speed up some of the process on the UI front, I used a few existing marketplaces as reference points: opensea.io, foundation.app, and 9dcc.market.
- I opted to send the entire raw data over to the backend to parse. I initially tried to send `contractid` and `tokenid` as seperate parameters but realized that 1 query parameter is much more scalable. I then tried sending over a single query string as `'?contractid=value&tokenid=value'` but this was still read as 2 parameters in the request body. Sending over the entire data as a JSON string resolved those issues and it is much more efficient/readable in this case since the data provided for the project is very clean (no spaces or special characters). I also preferred to create the query strings server-side.

## Trade offs

- Extensive animation work (animate state transition, loading, etc.) and polishing of individual UI elements were curbed due to time.
- Testing infrastructure and test coverage are not in place due to time constraints and prioritization on code functionality and design.
- Dev environment (Next app) is missing some handy features such as directly allowing user to input a list of contract ids and token ids via an input field. This would be useful when testing states, features, and API return data. Currently, I use a constants/index.ts file to pass a sample list of NFT tokens.
- Data passed to the `tokens` endpoint is a JSON string of the raw data from the Reservoir API GET request. For the purpose of this project, this was the cleanest way to send data to the backend, but for larger project where the scope is broader, making a POST request to the `tokens` endpoint may work better.
- Due to time constraints, I opted not to use ReservoirUIKit or the Reservoir SDK. I tried to implement them in this project, but felt that prioritizing developing a functional MVP was more important. I did try to use the Reservoir API Typescript Typing, as seen in the `tokens` endpoint, but ultimately for sake of clarity on types expected, I opted to create my own interface to use in the React components and leave the types in the backend as is. The limitation on this is that the local typing may become out of date if the Reservoir API updates their types.
