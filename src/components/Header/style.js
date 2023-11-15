
import { StyleSheet } from 'react-native'
import { colors } from '../../utils/colors'
import { normalize } from '../../utils/variables'

export const styles = StyleSheet.create({
    container: {
        height: normalize(50),
        flexDirection: 'row',   
        backgroundColor: colors.white     
    },
    leftMenu: {
        flex: 0.2,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'center',
    },
    middleMenu:{
        flex: 0.6,
        justifyContent:'center'
    },
    rightMenu: {
        flex: 0.2,
        flexDirection: 'row',      
        // backgroundColor:'red',
        justifyContent:'center'
    },
    logoContainer: {
        width: normalize(40),
        height: normalize(40),
    },
    logo: {
        height: '100%',
        width: '100%',
    },
    icon:{
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
    },
    labelView:{
        position: 'absolute',
        top: 9,
        right: -12,
        width: normalize(19),
        height: normalize(19),
        borderRadius: normalize(20),        
        justifyContent:'center',
        backgroundColor: colors.purple
    },
    label:{
        color: colors.white,
    }
})