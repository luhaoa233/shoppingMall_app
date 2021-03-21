import React, { Component } from 'react'
import { View, Text,  Swiper, SwiperItem } from '@tarojs/components'
import { AtButton, AtTabBar, AtIcon, AtNoticebar, AtSearchBar } from 'taro-ui'
import "taro-ui/dist/style/index.scss";
import './index.scss';
export default class Index extends Component {
  constructor () {
    super(...arguments)
    this.state = {
      current: 0,
      value:'',
    }
    this.homePic = [
      'https://img.alicdn.com/imgextra/i3/1038632134/O1CN01UVWQEl1RdPnzYh4xU_!!1038632134.jpg',
      'https://img.alicdn.com/imgextra/i1/1038632134/O1CN01bPWN7a1RdPjF6uqws_!!1038632134.jpg',
      'https://img.alicdn.com/imgextra/i1/1038632134/O1CN01iNvtmd1RdPoRDg6mA_!!1038632134.jpg'
    ]


  }
  //底部导航栏切换
  handleClick (value) {
    this.setState({
      current: value
    })
  }
  //搜索框改变
  onChange (value) {
    this.setState({
      value: value
    })
  }
  onActionClick () {
    console.log('开始搜索')
  }

  render () {
    const { value } = this.state;
    return (
      <View>
        <AtSearchBar
          showActionButton
          value={value}
          onChange={this.onChange.bind(this)}
          onActionClick={this.onActionClick.bind(this)}
        />
        <AtNoticebar icon='volume-plus' className='home_notice'>
          杭州烨磊机电设备有限公司欢迎您的光临
        </AtNoticebar>
        <Swiper
          className='test-h'
          indicatorColor='#999'
          indicatorActiveColor='#333'
          circular
          indicatorDots
          autoplay>
          {
            this.homePic.map(item =>{
              return(
                <SwiperItem>
                  <image className='home_pic' src={item} />
                </SwiperItem>
                )

              }
            )
          }
        </Swiper>
        <View className='item-promote-head'>
          <View className='total'>
            <image src=''></image>
            <View className='title'>电工胶带</View>
          </View>
          <View className='total'>
            <image src=''></image>
            <View className='title'>封箱胶带</View>
          </View>
          <View className='total'>
            <image src=''></image>
            <View className='title'>生料带</View>
          </View>
          <View className='total'>
            <image src=''></image>
            <View className='title'>全部分类</View>
          </View>
          <View className='total'>
            <image src=''></image>
            <View className='title'>联系我们</View>
          </View>
        </View>
        <AtTabBar
          fixed
          tabList={[
            { title: '首页', iconType: 'home', text: 'new' },
            { title: '分类', iconType: 'bullet-list' },
            { title: '我的', iconType: 'user', text: '100', max: 99 }
          ]}
          onClick={this.handleClick.bind(this)}
          current={this.state.current}
        />
      </View>

    )
  }
}
