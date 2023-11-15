import {StyleSheet} from 'react-native'
import { colors } from '../../utils/colors'
import { SCREEN_HEIGHT, normalize } from '../../utils/variables'

export const styles = StyleSheet.create({
    container:{
        paddingVertical: normalize(15),
        backgroundColor: colors.white,
        paddingHorizontal: normalize(15),
        borderRadius: normalize(10),
        flexDirection:'row',
        alignItems:'center'
    },
    coinImg:{
        width: normalize(60),
        height: normalize(60)
    }
})