import Freecurrencyapi from '@everapi/freecurrencyapi-js';
const freecurrencyapi = new Freecurrencyapi('fca_live_O0uIUm2iAKGNYSAYE3B4KYX3LYuWjaLrC7y3Tcs2');

// convertCurrency("INR","USD",3);

 export async function convertCurrency(fromCurrency,toCurrency,units){
     const res=await freecurrencyapi.latest({
        base_currency: fromCurrency,
        currencies: toCurrency
    });
    const multiplier=res.data[toCurrency];
    return multiplier*units;
}

