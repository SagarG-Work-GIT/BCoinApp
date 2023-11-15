import {StyleSheet} from 'react-native'
import { colors } from '../../utils/colors'
import { normalize } from '../../utils/variables'

export const styles = StyleSheet.create({
    container:{
        height: normalize(13),
        backgroundColor: colors.pelorous,
        marginVertical: normalize(15),
        borderRadius: normalize(40),
        overflow:'hidden'
    },
    progress:{
        flex:1,
        backgroundColor: colors.strawberry,
    }
})