import React from 'react'
import { AtGrid } from "taro-ui"

import "taro-ui/dist/style/components/grid.scss";

export default function Mygrid({getCurrentInvestType}) {

    const [index, setIndex] = React.useState('0')

    const handleClick = (e) => {
        setIndex(e.index)
        getCurrentInvestType(e.index)
    }

    return (
        <AtGrid onClick={handleClick} mode='rect' data={
            [
                {
                    image: 'https://s1.chu0.com/src/img/png/06/065c00e0b4404ba285ba34d5515859c2.png?imageMogr2/auto-orient/thumbnail/!234x234r/gravity/Center/crop/234x234/quality/85/&e=1735488000&token=1srnZGLKZ0Aqlz6dk7yF4SkiYf4eP-YrEOdM1sob:Jzue4F0SJh85zBcHdpx1xm8azfw=',
                    value: 'A股',
                    index: '0'
                },
                {
                    image: 'https://s1.chu0.com/src/img/png/44/44188d1a52da40379666a2bf0cb9613d.png?imageMogr2/auto-orient/thumbnail/!234x234r/gravity/Center/crop/234x234/quality/85/&e=1735488000&token=1srnZGLKZ0Aqlz6dk7yF4SkiYf4eP-YrEOdM1sob:mrPLtUpZv0U7yjOkQI37wz_JjWE=',
                    value: '基金',
                    index: '1',
                },
                {
                    image: 'https://s1.chu0.com/src/img/png/e6/e60539ff89a647388ae5c5738016beb5.png?imageMogr2/auto-orient/thumbnail/!234x234r/gravity/Center/crop/234x234/quality/85/&e=1735488000&token=1srnZGLKZ0Aqlz6dk7yF4SkiYf4eP-YrEOdM1sob:0ZMWD4K5iobiVi-Xy0Mh5D2tsyU=',
                    value: '数字货币',
                    index: '2'
                },
                {
                    image: 'https://s1.chu0.com/src/img/png/74/743db996f3f64dd0b0a2fadfc2bc9bf1.png?imageMogr2/auto-orient/thumbnail/!234x234r/gravity/Center/crop/234x234/quality/85/&e=1735488000&token=1srnZGLKZ0Aqlz6dk7yF4SkiYf4eP-YrEOdM1sob:rZh-62RtNZ5ebBFp2SbZzjLeHMI=',
                    value: '期货',
                    index: '3'
                },
                {
                    image: 'https://s1.chu0.com/src/img/png/76/7620ae9b5e4f4c9095a36b698750085b.png?imageMogr2/auto-orient/thumbnail/!234x234r/gravity/Center/crop/234x234/quality/85/&e=1735488000&token=1srnZGLKZ0Aqlz6dk7yF4SkiYf4eP-YrEOdM1sob:E5sHFp75kJPzOjxm1EuiLwV7fmQ=',
                    value: '美股',
                    index: '4'
                },
                {
                    image: 'https://s1.chu0.com/src/img/png/6e/6e83a251a8bd4932bd9cb2d789325ae5.png?imageMogr2/auto-orient/thumbnail/!234x234r/gravity/Center/crop/234x234/quality/85/&e=1735488000&token=1srnZGLKZ0Aqlz6dk7yF4SkiYf4eP-YrEOdM1sob:fgTYL-qcCV7NW-ltpEkcQ8lIIhE=',
                    value: '港股',
                    index: '5'
                }
            ]
        } />
    )
}
