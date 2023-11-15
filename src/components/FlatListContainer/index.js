import { FlatList, Text, View, RefreshControl } from 'react-native'
import React, { Component, PureComponent } from 'react'
import { styles } from './style'

const FlatListContainer = (props) => {    
    return (
        <FlatList
            ref={props.setRef}
            data={props.data}
            numColumns={props.numColumns}
            initialNumToRender={props.initialNumToRender}
            renderItem={props.renderItem}
            keyExtractor={(item, index) => props.keyVal + index}
            contentContainerStyle={[styles.contentContainerStyle, props.contentContainerStyle]}
            style={props.style}
            ItemSeparatorComponent={props.ItemSeparatorComponent ?? null}
            horizontal={props.horizontal}
            showsHorizontalScrollIndicator={props.showsHorizontalScrollIndicator}
            columnWrapperStyle={props.columnWrapperStyle}
            ListFooterComponent={props.ListFooterComponent}
            // ListEmptyComponent={() => <Text>No Data</Text>}
            onEndReachedThreshold={props.onEndReachedThreshold}
            onEndReached={props.onEndReached}
            refreshControl={
                props.pullToRefresh ?
                    <RefreshControl refreshing={props.refreshing} onRefresh={props.onRefresh} />
                    :
                    null
            }
        />
    )
}

export default FlatListContainer