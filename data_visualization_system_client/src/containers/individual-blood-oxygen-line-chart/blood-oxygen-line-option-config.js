import {dataWithDatetime_1, weekdayDate_1} from './simulate-health-data'

var lineChartOption = {
    title: {
        text: "最近90天血氧变化",
        left: 'center',
        top: 'bottom',
        textStyle: {
            color: "#fff",
        }
    },
    tooltip: {
        trigger: "axis",

    },
    xAxis: {
        type: "category",
        gridIndex: 0,
        axisLabel: {
            // rotate: 45,
            color: '#666'
        },
        data: weekdayDate_1()
    },
    yAxis: {
        // name: "心率",
        type: "value",
        min: 'dataMin',
        gridIndex: 0,
        axisLabel: {
            // rotate: 45,
            color: '#666'
        },
        splitLine: {
            show: false,
        },
        axisLine: {
            show: true,
        },
        axisTick: {
            show: true,
        }
    },
    // 区域缩放，从而能自由关注细节的数据信息，或者概览数据整体，或者去除离群点的影响
    dataZoom: {
        // 对图形的每一个坐标轴都设置区域缩放，这样实现对于每一个坐标轴的单独控制
        // 有几种缩放类型
        // inside表示内置于坐标系，使用户可以在坐标系上通过鼠标拖拽、鼠标滚轮、手指滑动（触屏上）来缩放或漫游坐标系
        // slider表示有单独的滑动条，用户在滑动条上进行缩放或漫游
        type: 'inside',
        // show: true,
        // 表示控制哪根x轴（x轴如果设置了gridIndex）
        // 如果x轴没有指定gridIndex，则默认是第一个x轴
        xAxisIndex: [0],
        // start表示数据窗口范围的起始百分比，范围是：0 ~ 100。表示 0% ~ 100%
        start: 1,
        // start表示数据窗口范围的结束百分比，范围是：0 ~ 100。表示 0% ~ 100%
        end: 100
    },
    series: {
        name: "血氧",
        type: "line",
        xAxisIndex: 0,
        yAxisIndex: 0,
        itemStyle: {
          color: '#00edfc'
        },
        lineStyle: {
            normal: {
                color: '#00edfc'
            }
        },
        data: dataWithDatetime_1()
    },
} ;


export {lineChartOption} ;