import React from 'react'
import { View, Text, Button } from '@tarojs/components'
import { AtList, AtListItem, AtCountdown } from "taro-ui"
import Taro from '@tarojs/taro'
import './style.css'

//弹性样式
import "taro-ui/dist/style/components/flex.scss"

//计数器样式
import "taro-ui/dist/style/components/countdown.scss"
import InvestBar from '../../component/investbar'

const price = () => {
    return 123
}

const goDetail = () => {
    Taro.navigateTo({
        url: '../../packageA/pages/investdetail/index'
    })
}

export default function Me() {
    return (
        <View className='theme-body'>
            <View className='basic-container'>
                <View>
                    <Text className='basic-title'>我的可用资产</Text>
                    <View >
                        <AtList className='list-head'>
                            <AtList className='list-content'>
                                <AtListItem title='投资类型' extraText='总价值(RMB)' />
                            </AtList>
                            <AtListItem title='数字货币' extraText={price()} />
                            <AtListItem title='股票' extraText='123' />
                            <AtListItem title='基金' extraText='金额' />
                            <AtListItem title='我的零花钱' extraText='金额' />
                        </AtList>
                    </View>
                </View>
            </View>
            <View className='timecount-container'>
                <Text>距离下次发零花钱还有：</Text>
                <AtCountdown
                    isCard
                    isShowDay
                    day={30}
                    hours={0}
                    minutes={0}
                    seconds={0}
                />
            </View>
            <View className='charts-container'>
                <Button onClick={goDetail}>点我查看详情</Button>
            </View>
        </View>
    )
}



