var gaugeOption = {
    // 仪表盘的标题
    title: {
        show: true,
        text: '用户数量',
        top: 2,
        left: '35%',
        textStyle: {
            // fontWeight: "bolder",
            // fontSize: 20,
            // fontStyle: "italic",
            color: "#fff",
            // shadowColor: "#fff",
            // shadowBlur: 10
        }
    },
    tooltip: {
        show: true,
        formatter: function(params) {
            console.log(JSON.stringify(params))
            var item = params.seriesName
            var amount = params.data.value * 1000
            return `<div>${item}:</div>
                        <div style="text-align: center;">${amount}</div>
                        `
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
    series: [
        {
            name: "平台用户数量",
            type: "gauge",
            // 最小刻度值
            min: 0,
            // 最大刻度值
            max: 100,
            // 仪表盘刻度的分割段数
            splitNumber: 10,
            // 仪表板半径
            radius: "85%",
            // 仪表盘中心位置
            center: ["50%", "60%"],
            // 坐标轴线
            axisLine: {
                // 属性lineStyle控制轴线的样式
                lineStyle: {
                    // 仪表盘的轴线可以被分成不同颜色的多段。每段的结束位置和颜色可以通过一个数组来表示
                    // 分段的范围是0-1
                    color: [[0.09, "lime"], [0.82, "#1e90ff"], [1, "#ff4500"]],
                    // 仪表盘轴线的宽度
                    width: 3,
                    //轴线阴影的颜色 默认透明
                    shadowColor: "#fff",
                    // 轴线阴影的模糊大小
                    shadowBlur: 10
                }
            },
            // 刻度标签
            axisLabel: {
                // 刻度标签的文本样式
                textStyle: {
                    // 字体加粗
                    fontWeight: "bolder",
                    // 字体颜色
                    color: "#fff",
                    //
                    // 阴影颜色，默认透明
                    shadowColor: "#fff",
                    // 阴影模糊大小
                    shadowBlur: 10
                }
            },
            // 刻度样式
            axisTick: {
                // 刻度线长
                length: 15,
                // 刻度线样式
                lineStyle: {
                    // 刻度线颜色
                    color: "auto",
                    // 刻度线阴影颜色
                    shadowColor: "#fff",
                    // 刻度线阴影模糊大小
                    shadowBlur: 10
                }
            },
            // 分隔线样式
            // 这个分隔线指的是0，10，20等大的刻度对应的分隔线
            splitLine: {
                // 线长
                length: 25,
                // 线的样式
                lineStyle: {
                    // 线宽
                    width: 3,
                    // 颜色
                    color: "auto",
                    // 阴影颜色
                    shadowColor: "#fff",
                    // 阴影模糊大小
                    shadowBlur: 10
                }
            },
            // 指针
            pointer: {
                shadowColor: "#fff",
                shadowBlur: 5
            },

            // 仪表盘详情，用于显示数据
            detail: {
                show:false,
                // 文字块的背景颜色
                backgroundColor: "rgba(30,144,255,0.8)",
                // 文字块边框宽度
                borderWidth: 1,
                // 文字块边框颜色
                borderColor: "#fff",
                shadowColor: "#fff",
                shadowBlur: 5,
                // 相对于仪表盘中心的偏移位置，数组第一项是水平方向的偏移，第二项是垂直方向的偏移
                offsetCenter: [0, "50%"],
                textStyle: {
                    fontWeight: "bolder",
                    color: "#fff"
                }
            },
            // data中的value用于指定当前的指针位置
            // name可以作为仪表中心位置的说明文字
            // name可以是单位，比例等
            data: [
                {name: "x1000", value: 16}
            ]
        },
    ]
} ;


module.exports.gaugeOption = gaugeOption ;