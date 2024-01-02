import './App.css'
import money from './img/money.png'
import axios from 'axios';



function App() {

    const currency_one = document.getElementById('currency-one');
    const currency_two = document.getElementById('currency-two');

    // const amount_one = document.getElementById('amount-one');
    // const amount_two = document.getElementById('amount-two');

    const rateText = document.getElementById('rate'); // rateที่แสดงค่าเป็นตัวอักษร
    const swap = document.getElementById('btn');
    

    //currency_one.addEventListener('change',calculateMoney);
    //currency_two.addEventListener('change',calculateMoney);

    
    async function calculateMoneyUpper(upper) {
        // console.log(upper);
        // console.log(upper.target.value);
        const inputUpper = upper.target.value;

        console.log("สกุลเงินต้นทาง = " ,inputUpper);
        let url= `http://api.exchangeratesapi.io/v1/latest?access_key=30c007634568e5f6e93a00a597fd556a&symbols=${inputUpper}`;
        console.log(url);
        const response = await axios.get(url)
        const responseRate = response.rates.inputUpper;
        console.log(responseRate);
     }

     async function calculateMoneyLower(lower) {
        console.log(lower.target.value);
        
        const inputLower = lower.target.value;

        console.log("สกุลเงินปลายทาง = ",inputLower);
        let url= `http://api.exchangeratesapi.io/v1/latest?access_key=30c007634568e5f6e93a00a597fd556a&symbols=${inputLower}`;
        const response = await axios.get(url)
        console.log(response);
     }
    

  return (
    <>
    <img src={money} className="money-img"></img>
    <h1>Exchange Rate Program</h1>
    <div className="container">
        <div className="currency">
            <select onChange={(upper)=>{calculateMoneyUpper(upper)}} name="" id="currency-one">
                <option value="AED">AED</option>
                <option value="ARS">ARS</option>
                <option value="AUD">AUD</option>
                <option value="BGN">BGN</option>
                <option value="BRL">BRL</option>
                <option value="BSD">BSD</option>
                <option value="CAD">CAD</option>
                <option value="CHF">CHF</option>
                <option value="CLP">CLP</option>
                <option value="CNY">CNY</option>
                <option value="COP">COP</option>
                <option value="CZK">CZK</option>
                <option value="DKK">DKK</option>
                <option value="DOP">DOP</option>
                <option value="EGP">EGP</option>
                <option value="EUR">EUR</option>
                <option value="FJD">FJD</option>
                <option value="GBP">GBP</option>
                <option value="GTQ">GTQ</option>
                <option value="HKD">HKD</option>
                <option value="HRK">HRK</option>
                <option value="HUF">HUF</option>
                <option value="IDR">IDR</option>
                <option value="ILS">ILS</option>
                <option value="INR">INR</option>
                <option value="ISK">ISK</option>
                <option value="JPY">JPY</option>
                <option value="KRW">KRW</option>
                <option value="KZT">KZT</option>
                <option value="MXN">MXN</option>
                <option value="MYR">MYR</option>
                <option value="NOK">NOK</option>
                <option value="NZD">NZD</option>
                <option value="PAB">PAB</option>
                <option value="PEN">PEN</option>
                <option value="PHP">PHP</option>
                <option value="PKR">PKR</option>
                <option value="PLN">PLN</option>
                <option value="PYG">PYG</option>
                <option value="RON">RON</option>
                <option value="RUB">RUB</option>
                <option value="SAR">SAR</option>
                <option value="SEK">SEK</option>
                <option value="SGD">SGD</option>
                <option value="THB" selected>THB</option>
                <option value="TRY">TRY</option>
                <option value="TWD">TWD</option>
                <option value="UAH">UAH</option>
                <option value="USD">USD</option>
                <option value="UYU">UYU</option>
                <option value="VND">VND</option>
                <option value="ZAR">ZAR</option>
            </select>
            <input type ="number"name="" id="amount-one" value="1"></input>

        </div>

        <div className="swap-container">
            <button className="btn">SWAP</button>
            <div className="rate" id="rate">rate exchange...</div>
        </div>
        <div className="currency">
            <select onChange={(lower)=>{calculateMoneyLower(lower)}} name="" id="currency-two">
                <option value="AED">AED</option>
                <option value="ARS">ARS</option>
                <option value="AUD">AUD</option>
                <option value="BGN">BGN</option>
                <option value="BRL">BRL</option>
                <option value="BSD">BSD</option>
                <option value="CAD">CAD</option>
                <option value="CHF">CHF</option>
                <option value="CLP">CLP</option>
                <option value="CNY">CNY</option>
                <option value="COP">COP</option>
                <option value="CZK">CZK</option>
                <option value="DKK">DKK</option>
                <option value="DOP">DOP</option>
                <option value="EGP">EGP</option>
                <option value="EUR">EUR</option>
                <option value="FJD">FJD</option>
                <option value="GBP">GBP</option>
                <option value="GTQ">GTQ</option>
                <option value="HKD">HKD</option>
                <option value="HRK">HRK</option>
                <option value="HUF">HUF</option>
                <option value="IDR">IDR</option>
                <option value="ILS">ILS</option>
                <option value="INR">INR</option>
                <option value="ISK">ISK</option>
                <option value="JPY">JPY</option>
                <option value="KRW">KRW</option>
                <option value="KZT">KZT</option>
                <option value="MXN">MXN</option>
                <option value="MYR">MYR</option>
                <option value="NOK">NOK</option>
                <option value="NZD">NZD</option>
                <option value="PAB">PAB</option>
                <option value="PEN">PEN</option>
                <option value="PHP">PHP</option>
                <option value="PKR">PKR</option>
                <option value="PLN">PLN</option>
                <option value="PYG">PYG</option>
                <option value="RON">RON</option>
                <option value="RUB">RUB</option>
                <option value="SAR">SAR</option>
                <option value="SEK">SEK</option>
                <option value="SGD">SGD</option>
                <option value="THB">THB</option>
                <option value="TRY">TRY</option>
                <option value="TWD">TWD</option>
                <option value="UAH">UAH</option>
                <option value="USD" selected>USD</option>
                <option value="UYU">UYU</option>
                <option value="VND">VND</option>
                <option value="ZAR">ZAR</option>
            </select>
            <input type ="number"name="" id="amount-two" value="1"></input>
        </div>
    </div>
    </>
  )
}

export default App
