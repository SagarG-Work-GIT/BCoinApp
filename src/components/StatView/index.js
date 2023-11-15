import { View, Text, Image } from 'react-native'
import React from 'react'
import { commonStyle } from '../../helper/commonStyle'
import { icons, normalize } from '../../utils/variables'
import { styles } from './style'
import { colors } from '../../utils/colors'
import AntDesign from 'react-native-vector-icons/AntDesign'

const StatView = () => {
  return (
    <View style={[styles.statView, commonStyle.row, commonStyle.marginTop_15]}>
          <Image
            source={icons.star}
            style={styles.starIcon}
            resizeMode='cover'
          />
          <View style={[commonStyle.flex1, commonStyle.padding_H_10]}>

            <Text style={[ commonStyle.text16, commonStyle.textSecondary, commonStyle.fontBold]}>Under or Over</Text>

            <View style={[commonStyle.row, commonStyle.alignItemsCenter, commonStyle.marginTop_8]}>
              <View style={[styles.arrowContainer, { backgroundColor: colors.lightYellow }]}>
                <AntDesign name="arrowup" size={normalize(20)} color={colors.deepYellow} />
              </View>
              <Text style={[commonStyle.marginTop_8, commonStyle.text16, commonStyle.textGrey, commonStyle.fontBold,commonStyle.marginLeft_10]}>81%</Text>
            </View>

          </View>
          <View style={[commonStyle.flex1]}>
            <Text style={[commonStyle.text16, commonStyle.textSecondary, commonStyle.fontBold]}>Top 5</Text>

            <View style={[commonStyle.row, commonStyle.alignItemsCenter,commonStyle.marginTop_8]}>
              <View style={[styles.arrowContainer, { backgroundColor: colors.lightRedOrange }]}>
                <AntDesign name="arrowdown" size={normalize(20)} color={colors.redOrange} />
              </View>
              <Text style={[commonStyle.marginTop_8, commonStyle.text16, commonStyle.textGrey, commonStyle.fontBold, commonStyle.marginLeft_10]}>-51%</Text>
            </View>

          </View>
        </View>
  )
}

export default StatView