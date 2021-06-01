// const parse = require('csv-parse');
// const fs = require('fs');
// const csvData = [];

// fs.createReadStream(__dirname + '/useful.csv')
// .pipe(
//     parse({
//         delimiter:','
//     })
// )
// .on('data',function(dataRow){
//     csvData.push(dataRow);
// })
// .on('end',function(){
//     console.log(csvData);
// });


// window.onload = function() {
//     const xlabels = [];
//     const y = [];
//     const xlabels2 = [];
//     const y2 = [];
//     chartIt();
    
//     async function chartIt(){
//         await getData();
//         await getData2();
//         var ctx = document.getElementById('lineChart').getContext('2d');
//         var ctx2 = document.getElementById('lineChart2').getContext('2d');
//     var myChart = new Chart(ctx, {
//         type: 'line',
//         data: {
//             labels: xlabels,
//             datasets: [{
//                 label: '# sunburn',
//                 data: y,
//                 backgroundColor: [ 'rgba(255, 99, 132, 0.2)' ],
//                 borderColor: [ 'rgba(255, 99, 132, 1)'],
//                 borderWidth: 1
//             }]
//         },
    
//     });

//     var mychart2 = new Chart(ctx2,{
//     type: 'line',
//     data: {
//         labels: xlabels2,
//             datasets: [{
//                 label: '# of risk score',
//                 data: y2,
//                 backgroundColor: [ 'rgba(150, 250, 132, 0.2)' ],
//                 borderColor: [ 'rgba(255, 99, 132, 1)'],
//                 borderWidth: 1
//             }]

//     },

//     });
// }

// //suburn:5
// async function getData(){
// const resp = await fetch('useful.csv');
// const data = await resp.text();
// const table = data.split('\n').slice(1);
// table.forEach(row =>{
//     const columns = row.split(',');
//     const time = columns[1];
//     xlabels.push(time);
//     const temp = columns[2];
//     y.push(parseFloat(temp)+5);
//     console.log(time,temp);
// })

// }

// //factor:2 risk score:8.6
// async function getData2(){
// const resp2 = await fetch('useful.csv');
// const data2 = await resp2.text();
// const table2 = data2.split('\n').slice(1);
// table2.forEach(row =>{
//     const columns2 = row.split(',');
//     const time2 = columns2[0];
//     xlabels2.push(time2);
//     const temp2 = columns2[2];
//     y2.push(parseFloat(temp2)*2+8.6);
//     console.log(time2,temp2);


// })
// }
// }


// const jsonfilepath = "output.json"
// let xl = []
// let yl = []
// Plotly.d3.json(url, function(figure){
// let data = figure.data
// for (var i=0; i< data.length; i++){
// xl.push(data[i][0])
// yl.push(data[i][1]) }
// let trace = {
// x: xl,
// y: yl }
// Plotly.plot(document.getElementById('graph'), [trace]); })