import { StyleSheet } from 'react-native'
import { colors } from '../../utils/colors'
import { normalize } from '../../utils/variables'

export const styles = StyleSheet.create({
    profileImageContainer:{
        width: normalize(80),
        height: normalize(80),
    },
    profileImage:{
        width:'100%',
        height: '100%',
        borderRadius: normalize(80),        
    },
    editIcon:{
        backgroundColor: colors.white,
        position: 'absolute',
        zIndex: 999,
        right: -10,
        bottom: -1,
        padding: normalize(9),
        borderRadius: normalize(20),
        justifyContent:'center',
        alignItems:'center',
        borderColor: colors.magnolia,
        borderWidth: normalize(2)
    },
    profileDetails:{
        lineHeight: normalize(18), 
        letterSpacing: 0.8
    },
})