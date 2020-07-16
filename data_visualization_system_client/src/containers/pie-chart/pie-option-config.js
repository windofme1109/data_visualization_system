
import {pieData} from './simulate-user-weight'

var pieChartOption = {
    title: [
        {
            // 将标题设置为垂直显示，使用换行符\n
            // 饼图的标题
            text: '体重分布',
            top: 2,
            left: "38%",
            textStyle: {
                color: '#fff',
                // fontSize: 18,
            }
        },

    ],

    // toolbox: {
    //     show: true,
    //     itemSize: 20,
    //     feature: {
    //         // 保存图片到本地
    //         saveImage: {
    //             // 图片格式
    //             type: 'png',
    //             // 保存图片的名称
    //             name: '用户地理位置分布',
    //             excludeComponents :['toolbox'],
    //             // 是否显示下载选项
    //             show: true,
    //             // 图片分辨率，默认根容器大小相同，如果需要分辨率更高，设置这个数值大于1，如2
    //             pixelRatio: 2
    //         }
    //     }
    // },
    toolbox: {
        showTitle: false,
        top: 1,
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
            name: "用户体重分布",
            type: "pie",
            data: pieData,
            // roseType: "area",
            // 设置饼图的中心位置
            center: ["48%", "53%"],
            radius: ['50%', '75%']
        }
    ]
} ;


export {pieChartOption} ;