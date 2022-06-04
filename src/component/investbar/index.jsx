import React, { useState, useEffect } from "react";
import { View } from "@tarojs/components";
import { EChart } from "echarts-taro3-react";



export default function InvestBar() {
    let [barChart, setBarChart] = useState()
    useEffect(() => {
        let arr1 = [6500, 26000, 8800]
        let arr2 = [5500, 6000, 3800]
        const option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            legend: {},
            grid: {
                left: '3%',
                right: '8%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'value',
                boundaryGap: [0, 0.001]
            },
            yAxis: {
                type: 'category',
                data: ['数货', '股票', '基金']
            },
            series: [
                {
                    name: '总投资额',
                    type: 'bar',
                    data: arr1,
                    color: 'royalblue'
                },
                {
                    name: '当前总价值',
                    type: 'bar',
                    data: arr2,
                    color: '#A9DF96'
                }
            ]
        };
        if (barChart) {
            // console.log(barChart)
            barChart.refresh(option);
        }
    }, [barChart])

    return (
        <View className="chart-container" style={{ width: '100vw', height: '300px' }}>
            <EChart
                ref={(node) => {
                    setBarChart(node)
                }}
                canvasId='bar-canvas'
            />
        </View>
    );
}