import React from 'react'
import { View, Text } from '@tarojs/components'

import './style.css'
import Alert from '../alert'


const bitdata = [
    { id: 1, tickname: 'bitcoin', current: '58111.92', rate: '+10.26%' },
    { id: 2, tickname: 'eth', current: '4111.92', rate: '+10.26%' },
    { id: 3, tickname: 'xrp', current: '37.12', rate: '-4.26%' }
]

const stockdata = [
    { id: 1, stockname: '联络互动', current: '4.6', rate: '-1.2%' },
    { id: 2, stockname: '新希望', current: '18.2', rate: '+7.2%' },
    { id: 3, stockname: '贵州茅台', current: '1421.24', rate: '-5.6%' }
]

const bitdataArr = bitdata.map((item) => (
    <View className='at-row form-content'>
        <View className='at-col at-col-4 '><Text className='form-name'>{item.tickname}</Text></View>
        <View className='at-col at-col-4 '><Text className='form-name'>{item.current}</Text></View>
        <View className='at-col at-col-4 '><Text className='form-name'>{item.rate}</Text></View>
    </View>
))

const stockdataArr = stockdata.map((item) => (
    <View className='at-row form-content'>
        <View className='at-col at-col-4 '><Text className='form-name'>{item.stockname}</Text></View>
        <View className='at-col at-col-4 '><Text className='form-name'>{item.current}</Text></View>
        <View className='at-col at-col-4 '><Text className='form-name'>{item.rate}</Text></View>
    </View>
))



export default function Showdata(props) {
    
    const [data,setData] = React.useState(bitdata)
    
    return (
    <View >
        {props.children == '2' && bitdataArr }
        {props.children == '0' && stockdataArr }
        {props.children != ('0' & '2') && <Alert/>}
    </View>
    )
}
