import { StyleSheet } from "react-native";
import { normalize } from "../../utils/variables";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: colors.white
        // paddingHorizontal: normalize(16)
    },
    content:{
        flexGrow: 1,
        // paddingHorizontal: normalize(15)
    },
    
    logoutButton:{        
        height: normalize(60),
        backgroundColor: colors.white,
    },
    logoutIcon:{
        width: normalize(20),
        height: normalize(20)
    },
    tabBtn:{
        height: normalize(50)
    },

    borderTop:{
        borderTopColor: colors.sky2,
        borderTopWidth: normalize(5)
    },
    borderBottom:{
        borderColor: colors.purple,
        borderWidth: normalize(2)
    }
})