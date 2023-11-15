import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { styles } from './style'
import { commonStyle } from '../../helper/commonStyle'
import GameBlock from '../../components/GameBlock'
import FlatListContainer from '../../components/FlatListContainer'
import { normalize } from '../../utils/variables'
import CustomModal from '../../components/CustomModal'

const Screen1 = ({navigation}) => {

    const [games, setGames] = useState([{ id: 1 }])
    const [openModal, setOpenModal] = useState(false)

    const onPressOver = () => {
        setOpenModal(true)
    }

    const onCloseModal = () => {
        setOpenModal(false)
    }

    return (
        <View style={styles.container}>
            <View style={[commonStyle.padding_v_20, commonStyle.padding_H_10]}>
                <Text style={[commonStyle.text16, commonStyle.textPrimary]}>Today’s Games</Text>
            </View>

            <View style={styles.content}>
                <FlatListContainer
                    keyVal="#"
                    data={games}
                    renderItem={({ item, index }) => <GameBlock onPressOver={onPressOver} />}
                    ItemSeparatorComponent={() => <View style={{ marginTop: normalize(10) }} />}
                    contentContainerStyle={{
                        paddingHorizontal: normalize(10),
                    }}
                />
            </View>
            {
                openModal &&
            <CustomModal 
            isVisible={openModal} 
            onCloseModal={onCloseModal} 
            onSubmit={()=> {
                onCloseModal()
                navigation.navigate("Screen3")
            }}
            />
            }
        </View>
    )
}

export default Screen1