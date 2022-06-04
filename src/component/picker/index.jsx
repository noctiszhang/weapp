import Taro, { Component } from '@tarojs/taro'
import { View, Text, Picker } from '@tarojs/components'
import { AtList, AtListItem } from 'taro-ui'

export default class PagePicker extends Component {
    state = {
        selector: ['美国', '中国', '巴西', '日本'],
        selectorChecked: '美国',
    }
    render() {
        return (
            <View className='container'>
                <Text>地区选择器</Text>
                    <Picker mode='selector' range={this.state.selector} >
                        <AtList>
                            <AtListItem
                                title='国家地区'
                                extraText={this.state.selectorChecked}
                            />
                        </AtList>
                    </Picker>
            </View>
        )
    }
}