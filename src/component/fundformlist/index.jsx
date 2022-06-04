import { View } from '@tarojs/components'
import React from 'react'
import './style.css'


export default function FundFormList() {
    return (
        <View className='fundform-container'>
            <View className='fundform-title'>基金</View>
            <View className='fundform-subtitle'>
                <View className='fundform-content'>
                    总资产
                </View>
                <View className='fundform-content'>
                    11000元
                </View>
            </View>
            <View className='fundform-subtitle'>
                <View className='fundform-content'>
                    日收益(04-20)
                </View>
                <View className='fundform-content'>
                    2000元
                </View>
            </View>
            <View className='fundform-subtitle'>
                <View className='fundform-content'>
                    持有收益
                </View>
                <View className='fundform-content'>
                    -3281.12元
                </View>
            </View>
            <View className='fundform-subtitle'>
                <View className='fundform-content'>
                    累计收益
                </View>
                <View className='fundform-content'>
                    -3215.31元
                </View>
            </View>
            <View className='funddetail-title'>持仓明细</View>
            <View className='funddetail-subtitle'>
                <View className='funddetail-unit'>名称/总资产</View>
                <View className='funddetail-unit'>持有收益</View>
                <View className='funddetail-unit'>日收益</View>
            </View>
            <View className='funddetail-content'>
                <View className='funddetail-unit'>葛兰医疗</View>
                <View className='funddetail-unit'>2213.51</View>
                <View className='funddetail-unit'>+122</View>
            </View>
            <View className='funddetail-content'>
                <View className='funddetail-unit'>葛兰医疗B</View>
                <View className='funddetail-unit'>258</View>
                <View className='funddetail-unit'>+1290.54</View>
            </View>
            <View className='funddetail-content'>
                <View className='funddetail-unit'>中欧基金</View>
                <View className='funddetail-unit'>1234</View>
                <View className='funddetail-unit'>-5381.2</View>
            </View>
            <View className='funddetail-title'>充提明细</View>
            <View className='funddetail-subtitle'>
                <View className='funddetail-unit'>充提金额</View>
                <View className='funddetail-unit'>充提渠道</View>
                <View className='funddetail-unit'>充提时间</View>
            </View>
            <View className='funddetail-content'>
                <View className='funddetail-unit'>+7000</View>
                <View className='funddetail-unit'>蛋卷基金</View>
                <View className='funddetail-unit'>2022/01/22</View>
            </View>
            <View className='funddetail-content'>
                <View className='funddetail-unit'>-4000</View>
                <View className='funddetail-unit'>蛋卷基金</View>
                <View className='funddetail-unit'>2022/02/23</View>
            </View>
        </View>
    )
}
