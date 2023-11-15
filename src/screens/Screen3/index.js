import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { styles } from './style'
import Header from '../../components/Header'
import { commonStyle } from '../../helper/commonStyle'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { icons, normalize } from '../../utils/variables'
import { colors } from '../../utils/colors'
import CustomButton from '../../components/CustomButton'
import ProfileView from '../../components/ProfileView'
import StatView from '../../components/StatView'
import FlatListContainer from '../../components/FlatListContainer'
import BadgeComponent from '../../components/BadgeComponent'
import FooterMenu from '../../components/FooterMenu'

const Screen3 = () => {

  const [isBadgeActive, setBadgeActive] = useState(true)
  const [badges, setBadges] = useState([{ id: 1 }, { id: 1 }, { id: 1 }, { id: 1 }])

  return (
    <View style={[styles.container]}>
      <Header
        title="Profile"
        showLogo
      />
      <ScrollView contentContainerStyle={styles.content}>

        <ProfileView />

        <View style={[styles.logoutButton]}>
          <CustomButton
            icon={<Image
              source={icons.logout}
              style={styles.logoutIcon}
              resizeMode='cover'
            />}
            label="Logout"
            labelColor={colors.secondary}
            labelStyle={{ fontWeight: 'normal', letterSpacing: 0.5 }}
            bgColor={colors.white}
          />
        </View>

        <StatView />

        <View style={[commonStyle.row, styles.borderTop, commonStyle.marginTop_25]}>
          <View style={[commonStyle.flex1, styles.tabBtn]}>
            <CustomButton
              label="Games played"
              labelColor={!isBadgeActive ? colors.purple : colors.secondary}
              labelStyle={{ fontWeight: !isBadgeActive ? "bold" : 'normal', letterSpacing: 0.5 }}
              bgColor={colors.white}
            />
            {
              !isBadgeActive &&
              <View style={styles.borderBottom} />
            }
          </View>

          <View style={[commonStyle.flex1, styles.tabBtn]}>
            <CustomButton
              label="Badges"
              labelColor={isBadgeActive ? colors.purple : colors.secondary}
              labelStyle={{ fontWeight: isBadgeActive ? "bold" : 'normal', letterSpacing: 0.5 }}
              bgColor={colors.white}
            />
            {
              isBadgeActive &&
              <View style={styles.borderBottom} />
            }
          </View>
        </View>

        <FlatListContainer
          keyVal="#"
          data={badges}
          renderItem={({ item, index }) => <BadgeComponent />}
          ItemSeparatorComponent={() => <View style={{ marginTop: normalize(15) }} />}
          contentContainerStyle={{
            backgroundColor: colors.sky2,
            paddingHorizontal: normalize(10),
            paddingTop: normalize(15)
          }}
        />
      </ScrollView>
      <FooterMenu screen="home" />
    </View>
  )
}

export default Screen3