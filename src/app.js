import { Component } from 'react'
import './app.css'
import 'taro-ui/dist/style/index.scss'

import "taro-ui/dist/style/components/flex.scss";

class App extends Component {

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // this.props.children 是将要会渲染的页面
  render () {
    return this.props.children
  }
}

export default App
