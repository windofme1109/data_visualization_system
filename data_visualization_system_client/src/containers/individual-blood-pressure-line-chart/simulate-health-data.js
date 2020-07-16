// 下面的三个函数用于模拟数据的生成
function randomData_1() {
    var pm2_5Data = [] ;
    for (var i = 0; i < 100; i++) {
        var temp = Math.ceil(Math.random() * 200 +50) ;
        pm2_5Data.push(temp) ;
    }
    return pm2_5Data ;
}

var realBloodPressureDiastolicData = [
    94, 71, 86, 73, 79, 75, 79, 75, 74, 75, 77, 76,
    77, 81, 78, 84, 80, 81, 74, 87, 89, 75, 75, 73, 72, 74, 76, 75, 78, 78, 85, 83, 82, 88, 92, 79, 82, 82,
    75, 87, 89, 71, 92, 86,
    79, 85, 85, 86, 79, 81, 76, 78, 82, 83, 89, 80, 81, 74, 74, 75, 73, 72, 77, 76,
    75, 93, 81, 80, 82, 84, 77, 79, 79, 78, 74, 81, 81, 78, 78, 74, 73, 76, 72, 74, 84, 95, 83, 86, 77, 83, 76, 81, 85,
    74, 76, 87, 86, 84, 84, 79,
] ;

var realBloodPressureSystolicData = [
    150, 106, 127, 112, 120, 116, 120, 116, 115, 118, 123, 120, 122, 121,
    126, 123, 123, 123, 113, 125, 133, 116, 116, 112, 108, 113, 119, 118,
    125, 126, 124, 120, 124, 129, 139, 120, 125,
    125, 116, 125, 133, 105, 139, 127, 127, 124, 124, 126, 127, 123, 121, 125, 125, 121, 132, 121, 121, 114, 113, 118, 111, 110, 123, 120, 116, 148, 123, 123, 124, 122,
    122, 120, 119, 125, 115, 123, 123, 125, 126, 115, 111, 119,
    110, 114, 123, 155, 121, 125, 123, 120, 121,
    121, 122, 114, 120, 125, 125, 123, 123, 119,
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

    var weekday = weekdayDate_1();
    // var data = randomData_1();
    var data = realBloodPressureSystolicData ;

    // 收缩压
    var dataeSystolicSeries = data.map((item, index) => {
        return {
            "name": weekday[index],
            "value": item
        }


    });

    var data2 = realBloodPressureDiastolicData ;

    // 舒张压
    var dataeDiastolicSeries = data2.map((item, index) => {
    return {
        "name": weekday[index],
        "value": item
    }


});
export {dataeSystolicSeries, dataeDiastolicSeries, weekdayDate_1} ;