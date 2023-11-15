import {StyleSheet} from 'react-native'
import { colors } from '../../utils/colors'
import { SCREEN_HEIGHT, normalize } from '../../utils/variables'

export const styles = StyleSheet.create({
    container:{
        position: 'absolute',
        top:0,
        left:0,
        zIndex: 999,    
        width: '100%',
        height: '100%',
    },
    modal:{
        // flex:1,
        // height: (SCREEN_HEIGHT/1.5),
        backgroundColor: colors.white,
        paddingBottom: normalize(40),
        paddingHorizontal: normalize(15),
        borderTopStartRadius: normalize(20),
        borderTopEndRadius: normalize(20),
    },
    circleYellow:{
        width: normalize(15),
        height: normalize(15),
        backgroundColor: colors.yellow,
        borderRadius: normalize(20)
    },
})