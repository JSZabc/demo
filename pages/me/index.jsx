import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import Taro from '@tarojs/taro'
import './index.less'

export default class Index extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount () { }

  componentDidMount () {
    console.info('memememem')
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }


  checkNavigateTo () {
    Taro.navigateTo({
      url: 'pages/index/index'
    })
  }

  getLength () {
    console.info('长度:' + Taro.getLength())
  }

  getState () {
    console.info('当前state:' + JSON.stringify(Taro.getState()))
  }

  navigateBack () {
    Taro.navigateBack({
      delta: 1
    })
  }

  reLaunch () {
    Taro.reLaunch({
      url: 'pages/cart/index'
    })
  }

  switchTo () {
    Taro.switchTab({
      url: 'pages/cart/index'
    })
  }

  render () {
    return (
      <View className='index'>
        <View>
          <Text>测试demo</Text>
        </View>
        <View className='red'>
          <Text onClick={this.checkNavigateTo} >测试NavigateTo33</Text>
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
          <Text onClick={this.reLaunch}>reLaunch</Text>
        </View>
        <View>
          <Text onClick={this.switchTo}>测试 switchTab 去到 cart 页</Text>
        </View>
      </View>
    )
  }
}
