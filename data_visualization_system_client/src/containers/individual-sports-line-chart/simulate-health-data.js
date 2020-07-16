// 下面的三个函数用于模拟数据的生成
function randomData_1() {
    var pm2_5Data = [] ;
    for (var i = 0; i < 100; i++) {
        var temp = Math.ceil(Math.random() * 200 +50) ;
        pm2_5Data.push(temp) ;
    }
    return pm2_5Data ;
}

var realSportsData = [
    2031, 2594, 3167, 3167, 3167, 3167, 685, 1522, 1522, 1522, 1522, 1522, 691, 1048, 1048, 1048, 1048, 1134, 1292, 1356, 1456, 1509,
    2276, 2286, 2286, 2286, 2286,
    2286, 1068, 1332, 1374,
    1374, 1704, 1704, 1823, 1823, 1823, 1865, 1865,
    2989, 3007, 3034, 3106, 3106,
    671, 825, 825, 922, 959,
    959, 1068, 1121, 1121, 1137, 1137, 2187,
    2187, 2187, 2187, 2187, 1259,
    1434, 1539, 1552, 1810, 1810, 1854, 1854, 1946, 2097, 2203, 2912, 2912, 2912, 2912, 2912, 1087, 1099, 1099, 1099,
    1281, 957, 1126, 1126, 1198, 1367, 1380, 1470, 1571, 1571, 2020, 3479, 3479, 3479, 3479, 3479, 1047, 1278, 1278, 2511,
] ;

// console.log(realSportsData.length) ;

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
    // var data = randomData_1() ;
    var data = realSportsData ;


    var dataSeries = data.map((item, index) => {
        return {
            "name": weekday[index],
            "value": item
        }


    });

    return dataSeries;
}

export {dataWithDatetime_1, weekdayDate_1} ;