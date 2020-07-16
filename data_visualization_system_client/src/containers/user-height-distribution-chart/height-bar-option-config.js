var heightBarOption = {
    title: {
      show: true,
      text: '身高分布',
      top: 10,
      left: '35%',
      textStyle: {
          color: '#fff',

      }
    },
    toolbox: {
        showTitle: false,
        feature: {
            dataZoom: {
                yAxisIndex: 'none'
            },
            restore: {},
            saveAsImage: {}
        }
    },
    grid: {
        top: 40,
        left: '15%',
    },
    legend: {
        data: ["男", "女"],
        // orient: "vertical",
        top: "85%",
        // right: 25,
    },
    // 因为要显示柱状图，所以要配置x轴和y轴的信息
    xAxis: {
        type: "category",
        // boundaryGap: false,
        data: ["1.55米以下", "1.55-1.65米", "1.65-1.75米", "1.75-1.85米", "1.85米以上"]
    },
    yAxis: {
        type: "value",
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
    series: [
        {
            name: "男",
            type: "bar",
            barWidth: 15,
            itemStyle: {
                color: '#00ccea',
                // opacity: 0.5
            },
            data: [
                {name: "1.55米以下", value: 1438},
                {name: "1.55-1.65米", value: 1685},
                {name: "1.65-1.75米", value: 2010},
                {name: "1.75-1.85米", value: 1874},
                {name: "1.85米以上", value: 347},
            ]
        },
        {
            name: "女",
            type: "bar",
            barWidth: 15,
            itemStyle: {
                color: '#1875f0',
                // opacity: 0.5
            },
            data: [
                {name: "1.55米以下", value: 1838},
                {name: "1.55-1.65米", value: 2458},
                {name: "1.65-1.75米", value: 1842},
                {name: "1.75-1.85米", value: 1004},
                {name: "1.85米以上", value: 105},
            ]
        },
    ]
}

module.exports.heightBarOption = heightBarOption ;