import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";
import { normalize } from "../../utils/variables";

export const styles = StyleSheet.create({
  
    block:{
        backgroundColor: colors.white, 
        borderBottomEndRadius: normalize(7),
        borderBottomStartRadius: normalize(7),
        overflow:'hidden'
    },
    blockBody:{
        paddingVertical: normalize(15),
        borderColor: colors.magnolia,
        borderWidth: normalize(2)
    },
    blockFooter:{
        backgroundColor: colors.ghostWhite,            
    },
    bgimage:{
        width: '100%',
        height: normalize(90),
        paddingVertical: normalize(10),
    },
    circleYellow:{
        width: normalize(15),
        height: normalize(15),
        backgroundColor: colors.yellow,
        borderRadius: normalize(20)
    },
   
    
})