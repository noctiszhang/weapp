import { View } from '@tarojs/components'
import React from 'react'
import './style.css'


export default function OTCFormList() {
    return (
        <View className='form-container'>
            <View className='form-title'>数字货币</View>
            <View className='form-subtitle'>
                <View className='form-content'>
                    C2C净额
                </View>
                <View className='form-content'>
                    6500元
                </View>
            </View>
            <View className='form-subtitle'>
                <View className='form-content'>
                    币值总额
                </View>
                <View className='form-content'>
                    5500元
                </View>
            </View>
            <View className='form-subtitle'>
                <View className='form-content'>
                    盈亏比
                </View>
                <View className='form-content'>
                    -10%
                </View>
            </View>
            <View className='detail-title'>买卖明细</View>
            <View className='detail-subtitle'>
                <View className='detail-unit'>买卖币种</View>
                <View className='detail-unit'>买卖价</View>
                <View className='detail-unit'>买卖数量</View>
                <View className='detail-unit'>买卖总价</View>
            </View>
            <View className='detail-content'>
                <View className='detail-unit'>Bitcoin</View>
                <View className='detail-unit'>$42213.51</View>
                <View className='detail-unit'>+0.0002</View>
                <View className='detail-unit'>$844.2</View>
            </View>
            <View className='detail-content'>
                <View className='detail-unit'>Doge</View>
                <View className='detail-unit'>$0.2351</View>
                <View className='detail-unit'>+1263890</View>
                <View className='detail-unit'>$234123.2</View>
            </View>
            <View className='detail-content'>
                <View className='detail-unit'>Sol</View>
                <View className='detail-unit'>$172.51</View>
                <View className='detail-unit'>+12</View>
                <View className='detail-unit'>$2101.8</View>
            </View>
            <View className='detail-title'>C2C明细</View>
            <View className='detail-subtitle'>
                <View className='detail-unit'>买卖金额</View>
                <View className='detail-unit'>汇率</View>
                <View className='detail-unit'>买卖渠道</View>
                <View className='detail-unit'>买卖时间</View>
            </View>
            <View className='detail-content'>
                <View className='detail-unit'>2000</View>
                <View className='detail-unit'>6.32</View>
                <View className='detail-unit'>bianace</View>
                <View className='detail-unit'>2022/02/21</View>
            </View>
            <View className='detail-content'>
                <View className='detail-unit'>4000</View>
                <View className='detail-unit'>6.34</View>
                <View className='detail-unit'>MEXC</View>
                <View className='detail-unit'>2021/07/11</View>
            </View>
            <View className='detail-content'>
                <View className='detail-unit'>100</View>
                <View className='detail-unit'>6.42</View>
                <View className='detail-unit'>Bianace</View>
                <View className='detail-unit'>2021/05/19</View>
            </View>
        </View>
    )
}
