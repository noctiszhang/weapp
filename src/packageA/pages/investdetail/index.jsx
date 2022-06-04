import React from "react";
import { View, Text } from "@tarojs/components";
import OTCFormList from "../../../component/otcformlist";
import InvestBar from "../../../component/investbar";
import SupplyPicker from "../../../component/supplypicker";
import FundFormList from "../../../component/fundformlist";
import TickFormList from "../../../component/tickformlist";

import "./style.css";



export default function InvestDetail() {

  const [type, setType] = React.useState('0')

  const changeType = (formtype) => {
    setType(formtype)
    console.log(formtype)
  }

  // const switchType = () => {
  //   if (type === 0) { return <OTCFormList /> }
  //   else if (type === 1) { return <FundFormList /> }
  //   else if (type === 2) { return <TickFormList /> }
  //   else { '稍等片刻，马上回来' }
  // }

  return (
    <View className="theme-body">
      <View className="basic-title-container">
        <Text className='basic-title'>投资概览</Text>
      </View>
      <InvestBar />
      <View className="basic-title-container">
        <Text className='basic-title'>投资明细</Text>
        <SupplyPicker changeType={changeType} />
      </View>

      {/* 
      formtype:
      数字货币:0
      美    股:1 
      A     股:2 */}
      {/* {switchType()} */}
      {/* <OTCFormList />
      <FundFormList/>
      <TickFormList /> */}
      {type === '0' && <OTCFormList />}
      {type === '1' && <FundFormList/>}
      {type === '2' && <TickFormList />}
      <View className='divider-style'>I am the Bottom</View>
    </View>

  );
}