import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './style'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { normalize } from '../../utils/variables'
import { colors } from '../../utils/colors'
import { commonStyle } from '../../helper/commonStyle'

const FooterMenu = ({screen}) => {




  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.menuIcon}> 
            <FontAwesome name="home" size={normalize(20)} color={ screen==="home" ? colors.purple : colors.tertiary} />
            <Text style={[commonStyle.text12,  commonStyle.fontBold,  (screen==="home") ? commonStyle.textPurple : commonStyle.textSecondary, {letterSpacing: 0.2}]}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuIcon}> 
            <FontAwesome name="trophy" size={normalize(20)} color={colors.tertiary} />
            <Text style={[commonStyle.text12, commonStyle.textSecondary, {letterSpacing: 0.2}]}>Leagues</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuIcon}> 
            <Feather name="search" size={normalize(20)} color={colors.tertiary} />
            <Text style={[commonStyle.text12, commonStyle.textSecondary, {letterSpacing: 0.2}]}>Research</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuIcon}> 
            <MaterialIcons name="leaderboard" size={normalize(20)} color={colors.tertiary} />
            <Text style={[commonStyle.text12, commonStyle.textSecondary, {letterSpacing: 0.2}]}>Leaderboard</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuIcon}> 
            <FontAwesome5 name="user-alt" size={normalize(20)} color={colors.tertiary} />
            <Text style={[commonStyle.text12, commonStyle.textSecondary, {letterSpacing: 0.2}]}>Profile</Text>
      </TouchableOpacity>
    </View>
  )
}

export default FooterMenu