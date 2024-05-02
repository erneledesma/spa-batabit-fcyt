
const API = 'https://api.coinlore.net/api/tickers/?start=100&limit=100'

const getData = async () => {
   try {
    const response = await fetch(API)
    const data = await response.json()
    return data
   } catch (error) {
     console.error('Fetch Error', error)
   }
}

export default getData
