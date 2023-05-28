import { View, StyleSheet, Image, Modal, Platform, TouchableOpacity, Text } from 'react-native'
import React, { useState } from 'react'
import { hp, Typography, wp } from '../Global'
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment'


const DateTimePickerFun = (props: any) => {
    const [date, setDate] = useState(props.date);
    const {
        mode = 'date',
        visible = false,
        onClose = () => null
    } = props

    const onChangeAndroidDate = (data: any) => {
        const { type, nativeEvent } = data
        const { timestamp } = nativeEvent
        if(type === 'dismissed') {
            onClose()
        }
        else if(type === 'set') {
            setDate(new Date(timestamp))
            props?.selectedDate && props?.selectedDate(new Date(timestamp))
            onClose()
        }
    }

    const onChangeIosDate = (data: any) => {
        const { nativeEvent } = data
        const { timestamp } = nativeEvent
        setDate(new Date(timestamp))
    }

    const onConfirmIos = () => {
        setDate(date)
        props?.selectedDate && props?.selectedDate(date)
        onClose()
    }


    return (
        <View style={Styles.container}>
            <Modal
                visible={visible && Platform.OS === 'ios'}
                transparent={true}
                onRequestClose={onClose}
            >
                <TouchableOpacity style={Styles.pickerContainer}
                    activeOpacity={1}
                    onPress={onClose}
                >
                    <TouchableOpacity activeOpacity={1}>
                        <View
                            style={Styles.pickerInnerCon}
                        >

                            <DateTimePicker
                                testID="dateTimePicker"
                                value={new Date()}
                                mode={mode}
                                is24Hour={true}
                                onChange={onChangeIosDate}
                                maximumDate={new Date()}
                                display={'spinner'}
                            />
                            {
                                Platform.OS === 'ios' &&
                                <TouchableOpacity style={Styles.dateConfirmBtn}
                                    onPress={onConfirmIos}
                                >
                                    <Text style={Styles.confirmTxt}>Confirm</Text>
                                </TouchableOpacity>
                            }
                        </View>
                    </TouchableOpacity>
                </TouchableOpacity>
            </Modal>

            {
                Platform.OS === 'android' && visible &&
                <DateTimePicker
                    testID="dateTimePicker"
                    value={new Date()}
                    mode={mode}
                    is24Hour={true}
                    onChange={onChangeAndroidDate}
                    display={'default'}
                    maximumDate={new Date()}
                />
            }

        </View>
    )
}

export default DateTimePickerFun
const Styles = StyleSheet.create({
    container: {},
    inputLabel: {
        fontSize: Typography.medium,
        color: '#000'
    },
    btnIcon: {
        width: wp(4),
        height: hp(3),
        fontSize: Typography.small1,
    },
    btn: {
        height: hp(6.3),
        paddingHorizontal: wp(3),
        justifyContent: 'center',
        width: wp(85)
    },
    pickerContainer: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    pickerInnerCon: {
        backgroundColor: '#000',
        borderRadius: 10
    },
    dateConfirmBtn: {
        alignSelf: 'center',
        marginVertical: hp(2),
        backgroundColor: '#702963',
        paddingHorizontal: wp(5),
        paddingVertical: hp(1),
        borderRadius: 8
    },
    confirmTxt: {
        color: '#fff',
        fontSize: Typography.medium
    },
    btnTxt: {
        fontSize: Typography.small3,
        color: '#000'
    }
})