var lineStyle = {
    normal: {
        width: 1,
        opacity: 0.5
    }
} ;


var graphic = [
    {
        type: 'group',
        id: 'textGroup-1',
        left: 10,
        top: '30%',
        positigraphicon: [10, 0],
        children: [
            {
                type: 'text',
                z: 100,
                top: 'middle',
                left: 100,
                style: {
                    // formatter: "{a} <br/>{b}: {c} ({d}%)",
                    text: ['BMI: 25', '心率: 90', '血氧: 98', '血压-高压: 120', '血压-低压: 75', '身高: 175', '体重: 50', '年龄: 25'].join('\n'),
                    font: '16px "Microsoft YaHei"',
                    textVerticalAlign :'middle',
                    fill:'#fff',
                }
            }
        ]
    }


] ;

var radarOption = {
    title: {
        show: true,
        text: '健康指标',
        top: '35%',
        left: 6,
        subtext: '注：心率、血压和血氧数据\n均为最近十日数据的均值\n所有数据均经过归一化处理',
        textStyle: {
            color: '#fff',
        }

    },
    toolbox: {
        showTitle: false,
        // orient: 'vertical',
        // top: 25,
        feature: {
            dataZoom: {
                yAxisIndex: 'none'
            },
            restore: {},
            saveAsImage: {}
        }
    },
    // 原生图形元素组件
    // graphic:graphic,
    radar: {
        // 雷达图形状，可以是多边形：polygon，或者是圆形：circle
        shape: 'polygon',
        // shape: 'circle',
        // 雷达图每个指示器名称的配置项
        name: {
            textStyle: {
                // color: '#fff',
                color: 'rgb(238, 197, 102)',
                // 文字块背景色
                // backgroundColor: '#999',
                // 文字块的圆角
                borderRadius: 3,
                // 文字块的内边距
                padding: [3, 5]
            }
        },
        splitLine: {
            lineStyle: {
                color: [
                    'rgba(238, 197, 102, 0.1)', 'rgba(238, 197, 102, 0.2)',
                    'rgba(238, 197, 102, 0.4)', 'rgba(238, 197, 102, 0.6)',
                    'rgba(238, 197, 102, 0.8)', 'rgba(238, 197, 102, 1)'
                ].reverse()
            }
        },
        splitArea: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(238, 197, 102, 0.5)'
            }
        },

        center: ['68%', '50%'],
        // silent: true,
        // 雷达图的指示器，用来指定雷达图中的多个变量
        // 为了雷达图变得好看，将所有数据归一化处理
        indicator: [
            {name: 'BMI', max: 50},
            {name: '心率', max: 150},
            {name: '血氧', max: 99},
            {name: '血压-高压', max: 200},
            {name: '血压-低压', max: 100},
            {name: '身高', max: 195},
            {name: '体重', max: 100},
            {name: '年龄', max: 70},

        ],

    },
    splitNumber: 5,
    tooltip: {},
    series: [
        {
            name: '健康指标',
            type: 'radar',
            symbol: 'none',
            lineStyle: lineStyle,
            itemStyle: {
                color: '#f9713c'
            },
            areaStyle: {
                opacity: 0.4,
            },
            data: [
                {
                    // value: [0.5, 0.6, 0.99, 0.6, 0.8, 0.87, 0.55, 0.36]
                    value: [25, 90, 98, 150, 60, 175, 50, 25]
                }
            ]
        }
    ]

} ;


module.exports.radarOption = radarOption ;