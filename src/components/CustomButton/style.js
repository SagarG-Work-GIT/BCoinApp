import {StyleSheet} from 'react-native'
import { colors } from '../../utils/colors'
import { normalize } from '../../utils/variables'

export const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: colors.primaryColor,
        borderRadius: normalize(40)
    }
})