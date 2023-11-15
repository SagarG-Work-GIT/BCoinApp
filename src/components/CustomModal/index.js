import { View, Text, Animated, ScrollView, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { styles } from './style'
import { BlurView } from "@react-native-community/blur";
import Octicons from 'react-native-vector-icons/Octicons'
import { SCREEN_HEIGHT, normalize } from '../../utils/variables';
import { colors } from '../../utils/colors';
import { commonStyle } from '../../helper/commonStyle';
import WheelPicker from '../WheelPicker';
import CustomButton from '../CustomButton';
import Modal from "react-native-modal";



const CustomModal = ({ isVisible, onCloseModal , onSubmit}) => {

    console.log('child modal');

    const [isOpen, setIsOpen] = useState(isVisible)
    const [tickets, setTickets] = useState(Array.from({ length: 20 }, (_, i) => i + 1));
    const selectedIndex = 10



    return (
        <BlurView
            style={styles.container}
            blurType="dark"
            blurAmount={1}
            reducedTransparencyFallbackColor="white"
        >
            <Modal
                isVisible={isVisible}
                backdropOpacity={0.5}
                style={{ margin:0, justifyContent:'flex-end' }}
                propagateSwipe
                hasBackdrop
                onBackdropPress={onCloseModal}
            >

                <View style={[styles.modal]}>
                    <View style={[commonStyle.alignItemsCenter, commonStyle.padding_v_10]}>
                        <Octicons name="dash" size={normalize(30)} color={colors.tertiary} />
                    </View>

                    <Text style={[commonStyle.text16, commonStyle.textPrimary, commonStyle.fontBold]}>Your Prediction is Under</Text>

                    <View style={[commonStyle.marginTop_15]}>
                        <Text style={[commonStyle.text12, commonStyle.textSecondary, commonStyle.fontUppercase]}>Entry tickets</Text>

                        <WheelPicker
                            items={tickets}
                            selectedIndex={selectedIndex}
                            itemHeight={normalize(36)}
                        />

                        <Text style={[commonStyle.text13, commonStyle.textTertiary]}>You can win</Text>
                        <View style={[commonStyle.row, commonStyle.justifyContentBetween, commonStyle.marginTop_8]}>
                            <Text style={[commonStyle.text14, commonStyle.textLightRed, commonStyle.fontBold]}>$2000</Text>

                            <View style={[commonStyle.row, commonStyle.alignItemsCenter]}>
                                <Text style={[commonStyle.text12, commonStyle.textSecondary]}>Total   </Text>
                                <View style={[styles.circleYellow, commonStyle.marginLeft_5]} />
                                <Text style={[commonStyle.text14, commonStyle.textPrimary, commonStyle.fontBold]}>  5</Text>
                            </View>
                        </View>

                        <View style={[commonStyle.marginTop_25, { height: normalize(40) }]}>
                            <CustomButton
                                label="Submit my prediction"
                                labelColor={colors.white}
                                bgColor={colors.purple}
                                onPress={onSubmit}
                            />
                        </View>
                    </View>
                </View>

            </Modal>

        </BlurView>

    )
}

export default React.memo(CustomModal)

