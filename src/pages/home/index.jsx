import React from 'react';
import { View, Text } from '@tarojs/components'
import SwiperCom from '../../component/swipercom/index'
import Mygrid from '../../component/grid/index';
import Showdata from '../../component/showdata/showdata';

import { usePullDownRefresh } from '@tarojs/taro'

import "taro-ui/dist/style/components/divider.scss";
import './style.css'

export default function Home() {
  const [type, setType] = React.useState('0')
  usePullDownRefresh(() => {
    console.log('onPullDownRefresh')
  })

  const getCurrentInvestType = (childtype) => {
    setType(childtype)
  }

  return (
    <View className='theme-body'>
      <SwiperCom />
      <View className='title-container'><Text className='title-content' >市场行情选择</Text>
        <Mygrid getCurrentInvestType={getCurrentInvestType} />
      </View>
      <View className='title-container'>
        <Text className='title-content'>当前市场行情</Text>
        <View className='form-container'>
          <View className='at-row form-content'>
            <View className='at-col at-col-4 '><Text className='form-title-name'>标的名称</Text></View>
            <View className='at-col at-col-4 '><Text className='form-title-name'>当前价格</Text></View>
            <View className='at-col at-col-4 '><Text className='form-title-name'>今日涨跌</Text></View>
          </View>
          <Showdata>{type}</Showdata>
        </View>
      </View>
      <View className='divider-style'>I am the Bottom</View>
    </View>
  )
}



