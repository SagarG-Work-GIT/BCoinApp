import { colors } from "../../utils/colors";
import { normalize } from "../../utils/variables";

const { StyleSheet } = require("react-native");

export const styles = StyleSheet.create({
    indicatorHolder: {
        position: 'absolute',
        width: '100%',
        alignSelf:'center',
        backgroundColor: "#f0ebf7",
        zIndex: -999,
    },

    indicator: {
        // width: '90%',
        // height: 1,
        // backgroundColor: 'red',
    },

});