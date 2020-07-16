var ageBarOption = {
    title: {
      show: true,
      text: '年龄分布',
      top: 10,
      left: '35%',
      textStyle: {
          color: '#fff',
          fontFamily: 'Microsoft YaHei'

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
        data: ["40岁以下", "40-45岁", "45-50岁", "50-55岁", "55岁以上"]
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
                {name: "40岁以下", value: 1682},
                {name: "40-45岁", value: 1774},
                {name: "45-50岁", value: 2410},
                {name: "50-55岁", value: 2513},
                {name: "55岁以上", value: 1004},
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
                {name: "40岁以下", value: 1582},
                {name: "40-45岁", value: 1874},
                {name: "45-50岁", value: 2510},
                {name: "50-55岁", value: 2013},
                {name: "55岁以上", value: 1104},
            ]

        },
    ]
}

module.exports.ageBarOption = ageBarOption ;