import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './style'

export default function ProgressBar({percentage}) {
  return (
    <View style={styles.container}>
      <View style={[styles.progress, percentage && {width: percentage}]} />
    </View>
  )
}