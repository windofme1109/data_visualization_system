
var weightDistribution = ["50kg以下", "50-60kg", "60-65kg", "65-70kg", "70kg以上"] ;
var amountOfWeight = weightDistribution.map(() => {
    return Math.ceil(Math.random() * 200 +50) ;
}) ;

var partialColor = ['#00edfc', '#009bfe', '#0e6eff', '#4f3dfb', '#6e2ef7'] ;

var pieData = weightDistribution.map((item, index) => {
    return {name: item, value: amountOfWeight[index], itemStyle: {color: partialColor[index], opacity: 0.8}}
}) ;

// console.log(pieData)

export {pieData} ;