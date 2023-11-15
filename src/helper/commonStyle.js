import { StyleSheet } from "react-native";
import { normalize } from "../utils/variables";
import { colors } from "../utils/colors";

export const commonStyle = StyleSheet.create({
    flex1:{
        flex:1
    },
    row:{
        flexDirection:'row'
    },
    alignItemsCenter:{
        alignItems:'center'
    },
    justifyContentCenter:{
        justifyContent:'center'
    },
    justifyContentEnd:{
        justifyContent:'flex-end'
    },
    justifyContentAround:{
        justifyContent:'space-around'
    },
    justifyContentBetween:{
        justifyContent:'space-between'
    },

    textAlignCenter:{
        textAlign:'center'
    },
    textAlignRight:{
        textAlign:'right'
    },

    text12:{
        fontSize: normalize(12)
    },
    text13:{
        fontSize: normalize(13)
    },
    text14:{
        fontSize: normalize(14)
    },
    text16:{
        fontSize: normalize(16)
    },
    text24:{
        fontSize: normalize(24)
    },

    textPrimary:{
        color: colors.primaryColor
    },
    textSecondary:{
        color: colors.secondary
    },
    textGrey:{
        color: colors.grey
    },
    textSky:{
        color: colors.sky
    },
    textGoldYellow:{
        color: colors.goldYellow
    },
    textPurple:{
        color: colors.coldPurple
    },
    textWhite:{
        color: colors.white
    },
    textTertiary:{
        color: colors.tertiary
    },
    textLightRed:{
        color: colors.lightRed
    },

    fontBold:{
        fontWeight: 'bold'
    },

    fontUppercase:{
        textTransform:'uppercase'
    },

    padding_v_5:{
        paddingVertical: normalize(5),        
    },
    padding_v_10:{
        paddingVertical: normalize(10),        
    },
    padding_v_20:{
        paddingVertical: normalize(20),
    },
    padding_H_10:{
        paddingHorizontal: normalize(10)
    },
    paddingTop_25:{
        paddingTop: normalize(25)
    },

    marginLeft_5:{
        marginLeft: normalize(5)
    },
    marginLeft_10:{
        marginLeft: normalize(10)
    },
    marginTop_8:{
        marginTop: normalize(8)
    },
    marginTop_15:{
        marginTop: normalize(15)
    },
    marginTop_25:{
        marginTop: normalize(25)
    },
    margin_H_10:{
        paddingHorizontal: normalize(10),        
    },

    shadow: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.8,
        shadowRadius: 1,  
        elevation: 5
    },
})