import { View, Text, ImageBackground } from 'react-native'
import React from 'react'

import Feather from 'react-native-vector-icons/Feather'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Entypo from 'react-native-vector-icons/Entypo'
import { commonStyle } from '../../helper/commonStyle'
import { images, normalize } from '../../utils/variables'
import { colors } from '../../utils/colors'
import { styles } from './style'
import CustomButton from '../CustomButton'
import ProgressBar from '../ProgressBar'

export default function GameBlock({onPressOver}) {
    return (
        <View style={[styles.block, commonStyle.shadow]}>
            <ImageBackground style={styles.bgimage} source={images.bitcoin_bg} resizeMode='cover'>
                <View style={[{ flex: 1 }, commonStyle.padding_H_10, commonStyle.padding_v_5, commonStyle.justifyContentBetween]}>
                    <View style={[commonStyle.row, commonStyle.justifyContentBetween]}>
                        <View style={[commonStyle.row, commonStyle.alignItemsCenter]}>
                            <Text style={[commonStyle.fontUppercase, commonStyle.textSky, commonStyle.text12]}>under or over</Text>
                            <Feather name="info" size={normalize(15)} color={colors.sky} style={commonStyle.marginLeft_5} />
                        </View>
                        <View style={[commonStyle.row, commonStyle.alignItemsCenter]}>
                            <Text style={[commonStyle.textPurple, commonStyle.text12]}>Starting in</Text>
                            <MaterialIcons name="watch-later" size={normalize(15)} color={colors.sky} style={commonStyle.marginLeft_5} />
                            <Text style={[commonStyle.textSky, commonStyle.text12, commonStyle.marginLeft_5]}>03:23:12</Text>
                        </View>
                    </View>
                    <View>
                        <Text style={[commonStyle.textSky, commonStyle.text14]}>Bitcoin price will be under</Text>
                        <Text style={[commonStyle.textWhite, commonStyle.text14]}>
                            <Text style={[commonStyle.textWhite, commonStyle.fontBold]}>$24,524</Text> at 7 a ET on 22nd Jan’21</Text>
                    </View>
                </View>
            </ImageBackground>
            <View style={[styles.blockBody, commonStyle.padding_H_10]} >
                <View style={[commonStyle.row, commonStyle.justifyContentBetween]}>
                    <View style={{}}>
                        <Text style={[commonStyle.textTertiary, commonStyle.text13, commonStyle.fontUppercase]}>Prize Pool</Text>
                        <Text style={[commonStyle.text14, commonStyle.textPrimary, commonStyle.fontBold, commonStyle.marginTop_8]}>$12,000</Text>
                    </View>
                    <View>
                        <Text style={[commonStyle.textTertiary, commonStyle.text13, commonStyle.fontUppercase]}>Under</Text>
                        <Text style={[commonStyle.text14, commonStyle.textPrimary, commonStyle.fontBold, commonStyle.marginTop_8, commonStyle.textAlignRight]}>3.25x</Text>
                    </View>
                    <View>
                        <Text style={[commonStyle.textTertiary, commonStyle.text13, commonStyle.fontUppercase]}>Over</Text>
                        <Text style={[commonStyle.text14, commonStyle.textPrimary, commonStyle.fontBold, commonStyle.marginTop_8, commonStyle.textAlignRight]}>1.25x</Text>
                    </View>
                    <View>
                        <Text style={[commonStyle.textTertiary, commonStyle.text13, commonStyle.fontUppercase]}>Entry Fees</Text>
                        <View style={[commonStyle.marginTop_8, commonStyle.row, commonStyle.justifyContentEnd, commonStyle.alignItemsCenter]}>
                            <Text style={[commonStyle.text14, commonStyle.textPrimary, commonStyle.fontBold,]}>5</Text>
                            <View style={[styles.circleYellow, commonStyle.marginLeft_5]} />
                        </View>
                    </View>
                </View>

                <View style={[commonStyle.marginTop_15]}>
                    <Text style={[commonStyle.text14, commonStyle.textSecondary]}>What’s your prediction?</Text>
                    <View style={[commonStyle.row, commonStyle.marginTop_8, {
                        height: normalize(40)
                    }]}>
                        <CustomButton
                            icon={<Entypo name="arrow-down" size={normalize(15)} color={colors.white} />}
                            label="Under"
                            labelColor={colors.white}
                            bgColor={colors.scarletGum}
                        />
                        <CustomButton
                            icon={<Entypo name="arrow-up" size={normalize(15)} color={colors.white} />}
                            label="Over"
                            labelColor={colors.white}
                            bgColor={colors.purple}
                            style={commonStyle.marginLeft_10}
                            onPress={onPressOver}
                        />
                    </View>
                </View>
            </View>
            <View style={[styles.blockFooter, commonStyle.padding_v_10, commonStyle.padding_H_10]}>
                <View style={[commonStyle.row, commonStyle.justifyContentBetween]}>
                    <View style={[commonStyle.row, commonStyle.alignItemsCenter]}>
                        <FontAwesome5 name="user-alt" size={normalize(15)} color={colors.secondary} />
                        <Text style={[commonStyle.textSecondary, commonStyle.text14, commonStyle.fontBold, commonStyle.marginLeft_5]}>355 Players</Text>
                    </View>
                    <View style={[commonStyle.row, commonStyle.alignItemsCenter]}>
                        <FontAwesome name="area-chart" size={normalize(15)} color={colors.secondary} />
                        <Text style={[commonStyle.textSecondary, commonStyle.text14, commonStyle.fontBold, commonStyle.marginLeft_5]}>View chart</Text>
                    </View>
                </View>
                <ProgressBar percentage="50%" />
                <View style={[commonStyle.row, commonStyle.justifyContentBetween]}>
                    <Text style={[commonStyle.textTertiary, commonStyle.text14, commonStyle.fontBold, commonStyle.marginLeft_5]}>232 predicted under</Text>
                    <Text style={[commonStyle.textTertiary, commonStyle.text14, commonStyle.fontBold, commonStyle.marginLeft_5]}>123 predicted over</Text>
                </View>
            </View>
        </View>
    )
}