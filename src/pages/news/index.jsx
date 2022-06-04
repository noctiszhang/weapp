import React from 'react'
import { View, Picker } from '@tarojs/components'
import { AtCard, AtList, AtListItem } from "taro-ui"

import "taro-ui/dist/style/components/card.scss";
import './style.css'
import "taro-ui/dist/style/components/list.scss"
export default function News() {
  const newsrange = ['全部资讯', 'A股', '数字货币', '美股']
  const [news, setNews] = React.useState(newsrange[0])
  

  const handleChange = (e) => {
    setNews(newsrange[e.detail.value])
  }

  return (
    <View>
      <Picker mode='selector' range={newsrange} onChange={handleChange}>
        <View className='picker'>
          <AtList>
            <AtListItem
              title='选择资讯类型'
              extraText={news}
            />
          </AtList>
        </View>
      </Picker>
      <View className='news-container'>
        <AtCard
          extra='2022-04-11 12:11:12'
          title='这是个标题'>
          内容区,内容文本获取内容区,内容文本获取
          内容区,内容文本获取内容区,内容文本获取内容区,内容文本获取
          内容区,内容文本获取内容区,内容文本获取内容区,内容文本获取
          内容区,内容文本获取内容区,内容文本获取
          内容区,内容文本获取
          内容区,内容文本获取
        </AtCard>
      </View>
      <View className='news-container'>
        <AtCard
          extra='2022-04-11 12:11:12'
          title='这是个标题'>
          内容区,内容文本获取内容区,内容文本获取
          内容区,内容文本获取内容区,内容文本获取内容区,内容文本获取
          内容区,内容文本获取内容区,内容文本获取内容区,内容文本获取
          内容区,内容文本获取内容区,内容文本获取
          内容区,内容文本获取
          内容区,内容文本获取
        </AtCard>
      </View>
      <View className='news-container'>
        <AtCard
          extra='2022-04-11 12:11:12'
          title='这是个标题'>
          内容区,内容文本获取内容区,内容文本获取
          内容区,内容文本获取内容区,内容文本获取内容区,内容文本获取
          内容区,内容文本获取内容区,内容文本获取内容区,内容文本获取
          内容区,内容文本获取内容区,内容文本获取
          内容区,内容文本获取
          内容区,内容文本获取
        </AtCard>
      </View>
      <View className='news-container'>
        <AtCard
          extra='2022-04-11 12:11:12'
          title='这是个标题'>
          内容区,内容文本获取内容区,内容文本获取
          内容区,内容文本获取内容区,内容文本获取内容区,内容文本获取
          内容区,内容文本获取内容区,内容文本获取内容区,内容文本获取
          内容区,内容文本获取内容区,内容文本获取
          内容区,内容文本获取
          内容区,内容文本获取
        </AtCard>
      </View>
      <View className='divider-style'>I am the Bottom</View>
    </View>
  )
}
