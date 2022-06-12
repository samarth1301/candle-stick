import { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import './App.css';
import axios from "axios";

function App() {




  const candles = [
    ["2015-12-28T09:15:00+0530", 1386.4, 1388, 1381.05, 1385.1, 788],
    ["2015-12-28T09:16:00+0530", 1385.1, 1389.1, 1383.85, 1385.5, 609],
    ["2015-12-28T09:17:00+0530", 1385.5, 1387, 1385.5, 1385.7, 212],
    ["2015-12-28T09:18:00+0530", 1387, 1387.95, 1385.3, 1387.95, 1208],
    ["2015-12-28T09:19:00+0530", 1387, 1387.55, 1385.6, 1386.25, 716],
    ["2015-12-28T09:20:00+0530", 1386.95, 1389.95, 1386.95, 1389, 727],
    ["2015-12-28T09:21:00+0530", 1389, 1392.95, 1389, 1392.95, 291],
    ["2015-12-28T09:22:00+0530", 1392.95, 1393, 1392, 1392.95, 180],
    ["2016-01-01T13:22:00+0530", 1386.4, 1388, 1381.05, 1385.1, 788],
    ["2016-01-01T13:23:00+0530", 1385.1, 1389.1, 1383.85, 1385.5, 613],
    ["2016-01-01T13:24:00+0530", 1385.5, 1387, 1385.5, 1385.7, 212],
    ["2016-01-01T13:25:00+0530", 1387, 1387.95, 1385.3, 1387.95, 1208],
    ["2016-01-01T13:26:00+0530", 1387, 1387.55, 1385.6, 1386.25, 716],
    ["2016-01-01T13:27:00+0530", 1386.95, 1389.95, 1386.95, 1389, 727],
    ["2016-01-01T13:28:00+0530", 1389, 1392.95, 1389, 1392.95, 291],
    ["2016-01-01T13:29:00+0530", 1392.95, 1393, 1392, 1392.95, 180],
    ["2016-01-01T13:30:00+0530", 1392.95, 1393, 1392, 1392.15, 1869]
  ]

  var data = candles.map(e => {
    if (e) {
      return (
        {
          x: e[0],
          y: e.slice(1, 5)
        }
      )
    }

  })



  const [state, setstate] = useState({
    options: {
      candlestick: {
        colors: {
          upward: '#3C90EB',
          downward: '#DF7D46'
        }
      }
    },
    series: [
      {
        // data: data
        data: [{
          x: new Date(2016, 1, 1, 12, 58,),
          y: [51.98, 56.29, 51.59, 53.85]
        },
        {
          x: new Date(2016, 1, 1, 12, 59),
          y: [59.98, 66.29, 51.59, 53.85]
        },
        {
          x: new Date(2016, 2, 1),
          y: [53.66, 54.99, 51.35, 52.95]
        },
        {
          x: new Date(2021, 2, 1),
          y: [3.66, 4.99, 51.35, 52.95]
        },
        {
          x: new Date(2018, 2, 1),
          y: [52.66, 54.99, 51.35, 52.95]
        },
        {
          x: (new Date(2016, 8, 1)),
          y: [52.76, 57.35, 52.15, 57.03]
        }]
      }
    ]
  });
  useEffect(() => {




    setInterval(() => {
      //   setstate({
      //     options: {
      //       ...state.options
      //     },
      //   series:[{
      //     data: candles.map(e=>{
      //       if(e){
      //         return(
      //           {
      //             x: new Date(),
      //             // y:e.slice(1,5)
      //             y: e.map(z=>(
      //               Math.floor(Math.random() * 101)
      //             ))
      //           }
      //         )
      //       }
      //     }
      //     ),
      //   }]}
      // )

      //type object
      // const data = null;

      // const xhr = new XMLHttpRequest();
      // xhr.withCredentials = true;

      // xhr.addEventListener("readystatechange", function () {
      //   if (this.readyState === this.DONE) {
      //     var result=JSON.parse(this.response);
      //     result=result["Time Series (1min)"]
      //     setstate({
      //       options: {
      //         ...state.options
      //       },
      //     series:[{
      //       data: Object.keys(result).map(e=>{
      //         if(e){
      //           const arr=[];
      //           Object.keys(result[e]).map(z=>{
      //             arr.push(result[e][z])
      //           })
      //           return(
      //             {
      //               x:e,
      //               y: arr
      //             }
      //           )
      //         }
      //       }
      //       ),
      //     }]}
      //   )
      //   }
      // });

      // xhr.open("GET", "https://alpha-vantage.p.rapidapi.com/query?interval=2min&function=TIME_SERIES_INTRADAY&symbol=MSFT&datatype=json&output_size=compact");
      // xhr.setRequestHeader("x-rapidapi-host", "alpha-vantage.p.rapidapi.com");
      // xhr.setRequestHeader("x-rapidapi-key", "02fbfcbb53mshe164c7d46e999d6p142177jsn4ed1f614fe73");

      // xhr.send(data);

      // const data = null;

      // const xhr = new XMLHttpRequest();
      // xhr.withCredentials = true;

      // xhr.addEventListener("readystatechange", function () {
      //   if (this.readyState === this.DONE) {
      //     const result=(JSON.parse(this.response));
      //     setstate({
      //             options: {
      //               ...state.options
      //             },
      //           series:[{
      //             data: result.map(e=>{
      //               if(e){
      //                 const arr=[];
      //                   arr.push(result[e]["Open"])
      //                   arr.push(result[e]["High"])
      //                   arr.push(result[e]["Low"])
      //                   arr.push(result[e]["Close"])
                     
      //                 return(
      //                   {
      //                     x:e.Date,
      //                     y: arr
      //                   }
      //                 )
      //               }
      //             }
      //             ),
      //           }]}
      //         )
      //   }
      // });

      // xhr.open("GET", "https://api.kite.trade/quote/ohlc?i=NSE:INFY&i=BSE:SENSEX&i=NSE:NIFTY+50");
      // xhr.setRequestHeader("X-Kite-Version", "3");
      // xhr.setRequestHeader("Authorization", "token api_key:7cw02mig4q6s1oyz");
      // xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
      // xhr.setRequestHeader("Access-Control-Allow-Credentials", "true");
      // xhr.setRequestHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
      // xhr.setRequestHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");

      // xhr.send(data);
      
      axios.get("https://api.kite.trade/quote/ohlc?i=NSE:INFY&i=BSE:SENSEX&i=NSE:NIFTY+50",{
        headers:{
          "X-Kite-Version": 3,
          Authorization: "token api_key:7cw02mig4q6s1oyz"
        }
      }).then(res=>{
        console.log(res);
      })
      console.log(state.series);
    }, 5000);
  }, [])
  return (
    <div className="App">
      sam
      <Chart
        options={state.options}
        series={state.series}
        type="candlestick"
        width="1300"
        height="1300"
      />
    </div>
  );
}

export default App;
