import React from "react"
import { View, Picker } from "@tarojs/components"

export default function SupplyPicker({changeType}) {

    const selector = ['数字货币', '美股', 'A股']
    const [selectorChecked, setSelectorChecked] = React.useState(selector[0])

    const handleChanged = (e) => {
        setSelectorChecked(selector[e.detail.value])
        changeType(e.detail.value)
    }


    return (
        <View>
            <Picker mode='selector' range={selector} onChange={handleChanged}>
                <View className="picker-choose">{selectorChecked}</View>
            </Picker>
        </View>
    )
}