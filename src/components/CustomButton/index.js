import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './style'
import { colors } from '../../utils/colors'
import { commonStyle } from '../../helper/commonStyle'

const CustomButton = ({label, bgColor, labelColor, labelStyle, icon, style, onPress}) => {
  return (
    <TouchableOpacity style={[ commonStyle.row, commonStyle.alignItemsCenter, commonStyle.justifyContentCenter, styles.container, bgColor && {backgroundColor: bgColor}, style]} onPress={onPress}>
      {
        icon &&
        icon
      }
      <Text style={[commonStyle.text14, commonStyle.fontBold, commonStyle.textAlignCenter, labelColor && {color: labelColor}, commonStyle.marginLeft_5, labelStyle]}>{label}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton