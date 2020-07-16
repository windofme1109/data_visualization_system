// 下面的三个函数用于模拟数据的生成
function randomData_1() {
    var pm2_5Data = [] ;
    for (var i = 0; i < 100; i++) {
        var temp = Math.ceil(Math.random() * 200 +50) ;
        pm2_5Data.push(temp) ;
    }
    return pm2_5Data ;
}

var realHeartRateData = [
    113, 60, 88, 63, 66, 77, 67, 66, 66, 73,
    70, 70, 65, 75, 87, 82, 63, 101, 66, 66, 64, 62, 65, 70, 67, 74, 47,
    94, 88, 82, 93, 107, 83, 86, 84, 68, 101, 54, 109, 89, 90, 100, 86,
    92, 81, 85, 69, 77, 87, 55, 105, 80, 63, 64, 67, 68, 63, 65, 66, 106,
    81, 71, 86, 93, 72, 82, 81, 75, 66, 82, 68, 69, 64, 63, 67, 64, 62,
    95, 118, 93, 89, 78, 90, 70, 80, 94, 72, 73, 96, 91, 89, 70, 62, 70,
    61, 65, 68, 68, 92, 95
];

// console.log(realHeartRateData.length) ;

// 下面这个函数生成当前日期前七天的日期时间
function weekdayDate_1() {
    var weekdayList = [] ;
    var date = new Date(2019, 0, 15, 9, 0, 0) ;
    // console.log(date)
    // 对日期进行格式化
    console.log(date.toString()) ;
    var year = date.getFullYear() ;
    var month = date.getMonth() + 1 ;
    var weekday = date.getDate() ;
    var hours = date.getHours() ;
    var minutes = date.getMinutes() ;
    var formatDate = null ;
    for (var i = 0; i < 100; i++) {
        weekday = weekday + 1 ;
        if (month === 1 && weekday === 31) {
            month += 1 ;
            weekday = 1 ;
        } else if (month === 2 && weekday === 28) {
            month += 1 ;
            weekday = 1 ;
        } else if (month === 3 && weekday === 31) {
            month += 1 ;
            weekday = 1 ;
        }  else if (month === 4 && weekday === 30) {
            month += 1;
            weekday = 1;
        } else if (month === 5 && weekday === 31) {
            month += 1 ;
            weekday = 1 ;
        }
        formatDate = year + "-" + month + "-" + weekday + " " + "0" + hours + ":" + "0" + minutes ;
        weekdayList.push(formatDate) ;
    }
    return weekdayList
}
// 将日期时间同pm2.5数据组合为一个对象
function dataWithDatetime_1() {

    var weekday = weekdayDate_1();
    // var data = randomData_1();
    var data = realHeartRateData;


    var dataSeries = data.map((item, index) => {
        return {
            "name": weekday[index],
            "value": item
        }


    });

    return dataSeries;
}

export {dataWithDatetime_1, weekdayDate_1} ;