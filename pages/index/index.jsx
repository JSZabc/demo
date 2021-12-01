import { Component } from 'react'
import { View, Text, Canvas, Button } from '@tarojs/components'
import Taro, {Current} from '@tarojs/taro'
import './index.less'

export default class Index extends Component {
  constructor(props) {
    super(props)
    this.checkNavigateTo = this.checkNavigateTo.bind(this)
  }

  componentWillMount () { }

  componentDidMount () {

  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  checkNavigateTo () {
    console.info('222')
    Taro.navigateTo({
      url: 'pages/cart/index?aa=2'
    })
  }

  getLength () {
    console.info('长度:' + Taro.getLength())
  }

  getState () {
    console.info('当前state:' + JSON.stringify(Taro.getState()))
  }

  navigateBack () {
    Taro.navigateBack()
  }

  switchTo () {
    Taro.switchTab({
      url: 'pages/me/index'
    })
  }

  render () {
    return (
      <View className='index'>
        <View>
          <Text>测试demo</Text>
        </View>
        <View className='red'>
          <Text onClick={this.checkNavigateTo} >测试NavigateTo11</Text>
        </View>
        <View>
          <Canvas></Canvas>
        </View>
        <View>
          <Text onClick={this.getState}>获得当前state</Text>
        </View>
        <View>
          <Text onClick={this.getLength}>获得当前length</Text>
        </View>
        <View>
          <Text onClick={this.navigateBack}>返回</Text>
        </View>
        <View>
          <Text onClick={this.switchTo}>测试 switchTab 去到 me 页</Text>
        </View>
        <View>
          <Button>我是按钮</Button>
        </View>
      </View>
    )
  }
}
