var barOption = {
    title: {
      show: true,
      text: '用户年龄分布',
      top: 10,
      left: '35%',
      textStyle: {
          color: '#fff',

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
        },
        {
            name: "女",
            type: "bar",
            barWidth: 15,
        },
    ]
}

module.exports.barOption = barOption ;