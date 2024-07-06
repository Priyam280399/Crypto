var btc = document.getElementById("bitcoin");
var eth = document.getElementById("ethereum");
var doge = document.getElementById("dogecoin");

async function getdata(){
    let data = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false")
    let response = await data.json()
      return response;
}

 async function renderui(){
    let data = await getdata()
    data.map((item)=>{
        if(item.id==='bitcoin'){
            btc.innerText=item.current_price
        }
        if(item.id==='ethereum'){
            eth.innerText=item.current_price
        }
        if(item.id==='dogecoin'){
            doge.innerText=item.current_price
        }
    })
 }
     renderui();
