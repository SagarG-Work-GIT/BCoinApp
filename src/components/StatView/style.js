import { StyleSheet } from 'react-native'
import { colors } from '../../utils/colors'
import { normalize } from '../../utils/variables'

export const styles = StyleSheet.create({
    statView:{
        borderColor: colors.magnolia,
        borderWidth: normalize(3),
        borderRadius: normalize(10),
        paddingVertical: normalize(20),
        backgroundColor: colors.white,        
        marginHorizontal: normalize(10)
    },
    starIcon:{        
        width: normalize(25),
        height: normalize(25),
        position: 'absolute',
        left: '50%',
        top: -15
    },
    arrowContainer:{
        padding: normalize(10),
        borderRadius: normalize(50),
        overflow:'hidden'
    }
})