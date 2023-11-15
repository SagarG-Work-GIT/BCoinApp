import { View, Text, Image } from 'react-native'
import React from 'react'
import { styles } from './style'
import { images } from '../../utils/variables'
import { commonStyle } from '../../helper/commonStyle'

const BadgeComponent = () => {
    return (
        <View style={styles.container}>
            <Image
                source={images.coin}
                style={styles.coinImg}
                resizeMode='cover'
            />
            <View style={[commonStyle.flex1, commonStyle.marginLeft_10, commonStyle.justifyContentCenter]}>
                <Text style={[commonStyle.text14, commonStyle.fontBold, commonStyle.textPrimary, commonStyle.marginLeft_5]}>First Stripe Earned  <Text style={[commonStyle.textGoldYellow]}>x 3</Text> </Text>
                <Text style={[commonStyle.text14, commonStyle.textSecondary, commonStyle.marginLeft_5]}>
                    Top 10% of highest spending players in a month
                </Text>
            </View>
        </View>
    )
}

export default BadgeComponent