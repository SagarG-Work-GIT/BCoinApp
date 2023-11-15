import { View, Image, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './style'
import { icons, normalize } from '../../utils/variables'
import { commonStyle } from '../../helper/commonStyle'
import Entypo from 'react-native-vector-icons/Entypo'
import { colors } from '../../utils/colors'

const Header = ({ showLogo, title }) => {
    return (
        <View style={styles.container}>
            <View style={styles.leftMenu}>

                {
                    showLogo &&
                    <View style={styles.logoContainer}>
                        <Image
                            source={icons.icon}
                            style={styles.logo}
                            resizeMode="contain"
                        />
                    </View>
                }

            </View>
            <View style={styles.middleMenu}>
                {
                    title &&
                    <Text style={[commonStyle.text16, commonStyle.textSecondary, commonStyle.textAlignCenter]}>{title}</Text>
                }
            </View>
            <View style={styles.rightMenu}>
                <TouchableOpacity style={styles.icon}>
                    <Entypo
                        name="message"
                        size={normalize(25)}
                        color={colors.secondary}
                        style={{ transform: [
                            { scaleX: -1 }
                          ] }}
                    />
                    <View style={styles.labelView}>
                        <Text style={[commonStyle.text12, commonStyle.textWhite, commonStyle.textAlignCenter]}>1</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Header