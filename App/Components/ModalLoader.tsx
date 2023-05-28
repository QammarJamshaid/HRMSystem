import { View, StyleSheet, Modal, ActivityIndicator } from 'react-native'
import React from 'react'
import { hp, Typography, wp } from '../Global'
import { Text } from 'react-native'


const ModalLoader = (props: any) => {
    const {
        visible = false,
        message = 'Loading...',
        useModalLayout = false
    } = props
    return (
        (visible && !useModalLayout) ?
            <View style={Styles.container}>
                <View style={Styles.innerContainer}>
                    <ActivityIndicator color={'green'} size={wp(5)} />
                    <Text style={Styles.textStyle}>
                        {message}
                    </Text>
                </View>
            </View>
            :
            (visible && useModalLayout) ?
                <Modal
                    visible={true}
                    transparent={true}
                >
                    <View style={{ ...Styles.container, position: 'relative' }}>
                        <View style={Styles.innerContainer}>
                            <ActivityIndicator color={'green'} size={wp(5)} />
                            <Text style={Styles.textStyle}>
                                {message}
                            </Text>
                        </View>
                    </View>
                </Modal>
                : null
    )
}

export default ModalLoader

const Styles = StyleSheet.create({
    container: {
        position: 'absolute',
        height: hp(100),
        width: wp(100),
        zIndex: 1,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    innerContainer: {
        backgroundColor: '#fff',
        width: wp(70),
        minHeight: hp(16),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8
    },
    textStyle: {
        fontSize: Typography.medium,
        color: '#000',
        includeFontPadding: false,
        alignSelf: 'center',
        marginVertical: hp(2)
    }
})