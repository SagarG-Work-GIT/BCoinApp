import {StyleSheet} from 'react-native'
import { colors } from '../../utils/colors'
import { normalize } from '../../utils/variables'

export const styles = StyleSheet.create({
    container:{
        height: normalize(55),
        flexDirection: 'row'
    },
    menuIcon:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})