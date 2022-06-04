import { Component } from "react";
import { Swiper, SwiperItem, Image } from '@tarojs/components'

import './style.css'

class SwiperCom extends Component {
    render() {
        return (
            <Swiper
                // className='test-h'
                indicatorColor='4c4c4c'
                indicatorActiveColor='2c2c2c'
                // vertical
                circular
                indicatorDots
                autoplay>
                <SwiperItem>
                    <Image src='https://pic2.zhimg.com/v2-012fc4b6528c5ba0a969b299bc7f1dac_1440w.jpg?source=172ae18b' className='swiper-img'/>
                </SwiperItem>
                <SwiperItem>
                    <Image src='https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201408%2F31%2F20140831025000_Fa3fs.png&refer=http%3A%2F%2Fimg3.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1651930251&t=c950f2b9564c01944de7fd20ec750557' className='swiper-img' />
                </SwiperItem>
                <SwiperItem>
                    <Image src='https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimgb.zol.com.cn%2Fsoft%2F6%2F955%2FceNGw7jGmrBI2.jpg&refer=http%3A%2F%2Fimgb.zol.com.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1651930303&t=05ec28c6965ad54028a2ea529fe45cff' className='swiper-img' />
                </SwiperItem>
            </Swiper>
        )
    }
}

export default SwiperCom