import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import Taro, { Current } from '@tarojs/taro'
import './index.less'

export default class Index extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    console.info('购物车' + JSON.stringify(Current.router?.params))
  }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  checkNavigateTo () {
    console.info('你走了嘛')
    Taro.navigateTo({
      url: 'pages/me/index'
    })
  }

  checkRedirectTo () {
    Taro.redirectTo({
      url: 'pages/me/index'
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
      url: 'pages/index/index'
    })
  }

  render() {
    return (
      <View className='index'>
        <View >
          <Text>购物车</Text>
        </View>
        <View className='red'>
          <Text onClick={this.checkNavigateTo} >测试NavigateTo22</Text>
        </View>
        <View className='blue'>
          <Text onClick={this.checkRedirectTo} >测试checkRedirectTo22</Text>
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
          <Text>你咋没有呢</Text>
          {/* <Button>大按钮</Button> */}
          {/* <Image
          onload={this.onload}
          src="https://img11.360buyimg.com/imagetools/jfs/t1/207234/35/4004/67873/615e9fd4E7bf0d7fc/6510e3405b94869a.jpg">
          </Image> */}
        </View>
        <View>
          <Text onClick={this.switchTo}>测试 switchTab 去到 首 页</Text>
        </View>
      </View>
    )
  }
}
