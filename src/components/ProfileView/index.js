import { View, Text, Image, TouchableOpacity} from 'react-native'
import FontAwesome5 from  'react-native-vector-icons/FontAwesome5'
import React from 'react'
import { commonStyle } from '../../helper/commonStyle'
import { normalize } from '../../utils/variables'
import { colors } from '../../utils/colors'
import { styles } from './style'

const ProfileView = () => {
    return (
        <View style={[commonStyle.alignItemsCenter, commonStyle.margin_H_10, commonStyle.paddingTop_25]}>
            <View style={styles.profileImageContainer}>
                <Image
                    source={{ uri: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" }}
                    style={styles.profileImage}
                    resizeMode='cover'
                />
                <TouchableOpacity style={styles.editIcon}>
                    <FontAwesome5 name="edit" size={normalize(12)} color={colors.secondary} />
                </TouchableOpacity>
            </View>

            <Text style={[commonStyle.marginTop_15, commonStyle.text16, commonStyle.textPrimary]}>Jina Simons</Text>

            <Text style={[commonStyle.marginTop_8, commonStyle.text14, commonStyle.textSecondary]}>6000 Pts</Text>

            <Text style={[commonStyle.marginTop_8, commonStyle.text14, commonStyle.textSecondary, styles.profileDetails]}>I’m a software developer that has been in the crypto space since 2012. And I’ve seen it grow and falter over a period of time. Really happy to be here!</Text>
        </View>
    )
}

export default ProfileView