// 下面的三个函数用于模拟数据的生成
function randomData_1() {
    var pm2_5Data = [] ;
    for (var i = 0; i < 100; i++) {
        var temp = Math.ceil(Math.random() * 200 +50) ;
        pm2_5Data.push(temp) ;
    }
    return pm2_5Data ;
}

var realHeartOxygenData = [
    99, 88, 98, 94, 91, 98, 94, 97, 94, 98,
    94, 95, 98, 98, 98, 99, 88, 98, 95, 96,
    95, 94, 97, 94, 95, 99, 88, 99, 98, 99, 97,
    99, 99, 98, 99, 94, 97, 93, 99, 98, 99, 97, 99,
    98, 97, 99, 99, 97, 97, 89, 99, 99, 95, 94,
    97, 96, 95, 96,97, 99, 99, 98, 97, 98, 98, 97, 97, 97, 96,
    97, 97, 97, 95, 94, 97, 96, 95, 97, 99, 97, 97,
    99, 98, 98, 97, 97, 95, 99, 97, 99, 97,
    99, 95, 94, 97, 96, 95, 94, 99, 99,
] ;

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
    var data = realHeartOxygenData ;


    var dataSeries = data.map((item, index) => {
        return {
            "name": weekday[index],
            "value": item
        }


    });

    return dataSeries;
}

export {dataWithDatetime_1, weekdayDate_1} ;