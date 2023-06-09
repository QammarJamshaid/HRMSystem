import React, { useState } from "react";
import { Controller, useForm } from 'react-hook-form';
import {
    Image,
    Modal,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    TextInput,
    ActivityIndicator
} from "react-native";
import { Divider } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import { changeAddEducationModal } from "./Store/MyProfileSlice";
import Entypo from 'react-native-vector-icons/Entypo';
import { DateTimePicker } from "../../Components";
import moment from "moment";
import { ApiServices, useGlobalContext } from '../../Services2'

export default function AddEducationModal(props) {
    const { user } = useGlobalContext()
    const [board, setBoard] = useState('')
    const [degree, setDegree] = useState('')
    const [institute, setInstitute] = useState('')
    const [major, setMajor] = useState('')

    const [startDate, setStartDate] = useState(null)
    const [endDate, setEndDate] = useState(null)
    const [addLoader, setAddLoader] = useState(false)
    const [showDateTimePicker, setShowDateTimePicker] = useState({
        from: '',
        visible: false
    })


    const {
        visible = false,
        onClose = () => null,
    } = props

    const defaultValues = {
        propertyId: null,
    }
    const dispatch = useDispatch()

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: "#fff"
        },
        card: {
            flex: 1,
            backgroundColor: mainLighterColor,
            borderRadius: 10,
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 10,
            marginTop: 20, alignSelf: "center"
        },
        contentContainer: {
            flexDirection: 'column',
            justifyContent: 'center',
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.5)',
            borderRadius: 10

        },
        content: {
            alignSelf: "center",
            width: "90%",
            backgroundColor: "#fff",
            marginHorizontal: 20,
            marginVertical: 70,
            borderRadius: 10
        },
        space: {
            marginTop: 12,
        },
    })
    const {
        textColor,
        mainColor,
        textOffColor,
        mainLighterColor,
        textLighterColor,
        backgroundColor, buttoncolor,
        borderColor
    } = useSelector(state => state.styles)

    const { control, handleSubmit, reset, formState: { errors }, watch } = useForm({
        mode: 'onChange',
        defaultValues: defaultValues,
    });
    const {
        addEducationModal
    } = useSelector(state => state.myProfile) || {}


    const onChangeInstitude = (text) => setInstitute(text)
    const onChangeBoard = (text) => setBoard(text)
    const onChangeDegree = (text) => setDegree(text)
    const onChangeMajor = (text) => setMajor(text)


    const showDatepicker = () => {
        showMode('date');
    };


    const onDatePress = (from) => {
        setShowDateTimePicker({
            visible: true,
            from: from
        })
    }

    const hideDateTimePicker = () => {
        setShowDateTimePicker({
            visible: false,
            from: ''
        })
    }

    const onDateSelection = (date) => {
        hideDateTimePicker()
        if(showDateTimePicker.from === 'startDate') {
            setStartDate(moment(date).format('YYYY-MM-DD'))
        }
        else {
            setEndDate(moment(date).format('YYYY-MM-DD'))
        }
    }

    const onAddEducationPress = () => {
        setAddLoader(true)
        const data = {
            Board: board,
            Degree: degree,
            Institute: institute,
            major: major,
            Startdate: startDate,
            Enddate: endDate,
            Uid: user?.Uid
        }
        setStartDate(null)
        setEndDate(null)
        ApiServices.addEducation(data).then(() => {
            setAddLoader(false)
            props?.onSuccess && props.onSuccess()
        })
            .catch(() => setAddLoader(false))
    }


    return (
        <Modal
            transparent
            animationType="fade"
            visible={visible}
            onRequestClose={onClose}>

            <View style={styles.contentContainer}>
                <View style={styles.content}>
                    <View style={{
                        width: '90%',
                        backgroundColor: "#fff",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginTop: 20,
                        alignSelf: "center",
                        flexDirection: "row",
                    }}>
                        <Text style={{
                            color: textColor,
                            fontSize: 18,
                            fontWeight: "bold"
                        }}>
                            Add Education
                        </Text>
                        <TouchableOpacity
                            onPress={onClose}
                            style={{}}
                        >
                            <Entypo
                                name="cross"
                                size={25}
                                color={textOffColor}
                            />
                        </TouchableOpacity>

                    </View>
                    <View style={{
                        alignSelf: "center",
                        width: "90%",
                        marginTop: 20
                    }}>
                        <TextInput
                            onChangeText={onChangeBoard}
                            value={board}
                            placeholder="Board"
                            placeholderTextColor={textLighterColor}
                            style={{
                                backgroundColor: mainLighterColor,
                                padding: 0,
                                zIndex: 10,
                                height: 35,
                                borderRadius: 5,
                                paddingLeft: 13,
                                color: textLighterColor,
                                fontSize: 14,
                                width: "100%",
                                borderWidth: 0.5,
                                borderColor: textLighterColor
                            }}
                        />


                    </View>
                    <View style={{
                        alignSelf: "center",
                        width: "90%",
                        marginTop: 20
                    }}>
                        <TextInput
                            onChangeText={onChangeDegree}
                            value={degree}
                            placeholder="Degree"
                            placeholderTextColor={textLighterColor}
                            style={{
                                backgroundColor: mainLighterColor,
                                padding: 0,
                                zIndex: 10,
                                height: 35,
                                borderRadius: 5,
                                paddingLeft: 13,
                                color: textLighterColor,
                                fontSize: 14,
                                width: "100%",
                                borderWidth: 0.5,
                                borderColor: textLighterColor
                            }}
                        />
                    </View>

                    <View style={{
                        alignSelf: "center",
                        width: "90%",
                        marginTop: 20
                    }}>
                        <TextInput
                            onChangeText={onChangeInstitude}
                            value={institute}
                            placeholder="Institute"
                            placeholderTextColor={textLighterColor}
                            style={{
                                backgroundColor: mainLighterColor,
                                padding: 0,
                                zIndex: 10,
                                height: 35,
                                borderRadius: 5,
                                paddingLeft: 13,
                                color: textLighterColor,
                                fontSize: 14,
                                width: "100%",
                                borderWidth: 0.5,
                                borderColor: textLighterColor
                            }}
                        />
                    </View>

                    <View style={{
                        alignSelf: "center",
                        width: "90%",
                        marginTop: 20
                    }}>
                        <TextInput
                            onChangeText={onChangeMajor}
                            value={major}
                            placeholder="major"
                            placeholderTextColor={textLighterColor}
                            style={{
                                backgroundColor: mainLighterColor,
                                padding: 0,
                                zIndex: 10,
                                height: 35,
                                borderRadius: 5,
                                paddingLeft: 13,
                                color: textLighterColor,
                                fontSize: 14,
                                width: "100%",
                                borderWidth: 0.5,
                                borderColor: textLighterColor
                            }}
                        />
                    </View>


                    <View style={{
                        alignSelf: "center",
                        width: "90%",
                        marginTop: 20
                    }}>

                        <TouchableOpacity style={{
                            backgroundColor: mainLighterColor,
                            padding: 0,
                            zIndex: 10,
                            height: 35,
                            borderRadius: 5,
                            paddingLeft: 13,
                            color: textLighterColor,
                            fontSize: 14,
                            width: "100%",
                            borderWidth: 0.5,
                            borderColor: textLighterColor,
                            justifyContent: 'center'
                        }}
                            onPress={onDatePress.bind(null, 'startDate')}
                        >

                            <Text style={{ color: textLighterColor, fontSize: 14, }}>
                                {!startDate ? 'Start Date' : startDate}
                            </Text>
                        </TouchableOpacity>
                    </View>


                    <View style={{
                        alignSelf: "center",
                        width: "90%",
                        marginTop: 20
                    }}>

                        <TouchableOpacity style={{
                            backgroundColor: mainLighterColor,
                            padding: 0,
                            zIndex: 10,
                            height: 35,
                            borderRadius: 5,
                            paddingLeft: 13,
                            color: textLighterColor,
                            fontSize: 14,
                            width: "100%",
                            borderWidth: 0.5,
                            borderColor: textLighterColor,
                            justifyContent: 'center'
                        }}
                            onPress={onDatePress.bind(null, 'endDate')}
                        >

                            <Text style={{ color: textLighterColor, fontSize: 14, }}>
                                {!endDate ? 'End Date' : endDate}
                            </Text>
                        </TouchableOpacity>
                    </View>


                    <View style={{ marginTop: 20, paddingHorizontal: 20 }}>
                        <Text style={{
                            color: textLighterColor,
                            fontSize: 14,
                            fontWeight: "500"
                        }}>
                            Attachments
                        </Text>
                    </View>
                    <View style={{
                        marginTop: 20, paddingHorizontal: 20, width: "90%",
                        alignSelf: "center", borderWidth: 1, borderColor: "#79A6DB",
                        borderStyle: "dashed", height: 80, backgroundColor: "#F1F7FE",
                        borderRadius: 10, alignItems: "center",
                        justifyContent: "center"

                    }}>
                        {/* <FileuploadIcon color={textOffColor} height={20} width={20} style={{}} /> */}
                        <View style={{ flexDirection: "row" }}>
                            <Text style={{
                                color: textLighterColor,
                                fontSize: 12,
                                marginTop: 5,
                                fontWeight: "500"
                            }}>
                                Drag and drop your files here or
                            </Text>
                            <Text style={{
                                color: mainColor,
                                fontSize: 12,
                                marginTop: 5,
                                fontWeight: "500"
                            }}>
                                choose file
                            </Text>
                        </View>
                    </View>
                    <View style={{
                        paddingHorizontal: 10,
                        marginBottom: 20,
                        marginTop: 20
                    }}>
                        <TouchableOpacity
                            onPress={onAddEducationPress}
                            style={{
                                backgroundColor: mainColor,
                                height: 35,
                                width: 100,
                                justifyContent: "center",
                                borderRadius: 5,
                                alignSelf: "flex-end",
                                marginBottom: 20,
                                marginRight: 5
                            }}
                        >
                            {
                                addLoader ?
                                    <ActivityIndicator color={'#fff'} />
                                    :
                                    <Text
                                        style={{
                                            fontSize: 14,
                                            color: "#fff",
                                            fontWeight: 'bold',
                                            alignSelf: "center",
                                        }}>
                                        Add
                                    </Text>
                            }
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            {
                showDateTimePicker?.visible &&
                <DateTimePicker
                    mode='date'
                    visible={true}
                    onClose={hideDateTimePicker}
                    selectedDate={onDateSelection}
                />
            }
        </Modal>
    );
}