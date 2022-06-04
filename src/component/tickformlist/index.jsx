import { View } from '@tarojs/components'
import React from 'react'
import './style.css'


export default function TickFormList() {
    return (
        <View className='tickform-container'>
            <View className='tickform-title'>股票</View>
            <View className='tickform-subtitle'>
                <View className='tickform-content'>
                    投资净额
                </View>
                <View className='tickform-content'>
                    25000元
                </View>
            </View>
            <View className='tickform-subtitle'>
                <View className='tickform-content'>
                    票值总额
                </View>
                <View className='tickform-content'>
                    24128.21元
                </View>
            </View>
            <View className='tickform-subtitle'>
                <View className='tickform-content'>
                    盈亏比
                </View>
                <View className='tickform-content'>
                    -4.2%
                </View>
            </View>
            <View className='tickdetail-title'>持仓明细</View>
            <View className='tickdetail-subtitle'>
                <View className='tickdetail-unit'>证券/市值</View>
                <View className='tickdetail-unit'>持仓/可用</View>
                <View className='tickdetail-unit'>现金/成本</View>
                <View className='tickdetail-unit'>持仓盈亏</View>
            </View>
            <View className='tickdetail-content'>
                <View className='tickdetail-unit-double'>
                    <View>联络互动</View>
                    <View>14022</View>
                </View>
                <View className='tickdetail-unit-double'>
                    <View>4000</View>
                    <View>4000</View>
                </View>
                <View className='tickdetail-unit-double'>
                    <View>3.53</View>
                    <View>4.571</View>
                </View>
                <View className='tickdetail-unit-double'>
                    <View>-4165.00</View>
                    <View>-22.74%</View>
                </View>
            </View>
            <View className='tickdetail-content'>
                <View className='tickdetail-unit-double'>
                    <View>新希望</View>
                    <View>4560</View>
                </View>
                <View className='tickdetail-unit-double'>
                    <View>300</View>
                    <View>300</View>
                </View>
                <View className='tickdetail-unit-double'>
                    <View>15.2</View>
                    <View>17.1</View>
                </View>
                <View className='tickdetail-unit-double'>
                    <View>-572.00</View>
                    <View>-11.148%</View>
                </View>
            </View>
            <View className='tickdetail-title'>充提明细</View>
            <View className='tickdetail-subtitle'>
                <View className='tickdetail-unit'>充提金额</View>
                <View className='tickdetail-unit'>充提渠道</View>
                <View className='tickdetail-unit'>充提时间</View>
            </View>
            <View className='tickdetail-content'>
                <View className='tickdetail-unit'>+7000</View>
                <View className='tickdetail-unit'>东方财富</View>
                <View className='tickdetail-unit'>2022/01/22</View>
            </View>
            <View className='tickdetail-content'>
                <View className='tickdetail-unit'>-4000</View>
                <View className='tickdetail-unit'>东方财富</View>
                <View className='tickdetail-unit'>2022/02/23</View>
            </View>
        </View>
    )
}
