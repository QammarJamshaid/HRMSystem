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
import { changeAddExperienceModal } from "./Store/MyProfileSlice";
import Entypo from 'react-native-vector-icons/Entypo';
import CheckBoxIcon from '../../Assets/Svgs/CheckBoxIcon.svg';
import { DateTimePicker } from "../../Components";
import moment from "moment";
import { ApiServices, useGlobalContext } from "../../Services2";

export default function AddExperienceModal(props) {
    const { user } = useGlobalContext()
    const [addLoader, setAddLoader] = useState(false)
    const {
        visible = false,
        onClose = () => null,
    } = props


    const defaultValues = {
        jobTitle: '',
        company: ''
    }
    const dispatch = useDispatch()
    const [startDate, setStartDate] = useState(null)
    const [jobTitle, setJobTitle] = useState('')
    const [company, setCompany] = useState('')
    const [endDate, setEndDate] = useState(null)
    const [showDateTimePicker, setShowDateTimePicker] = useState({
        from: '',
        visible: false
    })


    const onChangeCompany = (text) => setCompany(text)
    const onChangeJobTitle = (text) => setJobTitle(text)

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
        addExperienceModal
    } = useSelector(state => state.myProfile) || {}


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
        if(showDateTimePicker.from === 'startDate') {
            setStartDate(moment(date).format('YYYY-MM-DD'))
            hideDateTimePicker()
        }
        else {
            setEndDate(moment(date).format('YYYY-MM-DD'))
            hideDateTimePicker()
        }
    }


    const onAddPress = () => {
        setAddLoader(true)
        const data = {
            Title: jobTitle,
            Company: company,
            Startdate: startDate,
            Enddate: endDate,
            Uid: user?.Uid
        }
        setStartDate(null)
        setEndDate(null)
        ApiServices.addExperience(data).then(() => {
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
                            Add Experience
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
                            onChangeText={onChangeJobTitle}
                            value={jobTitle}
                            placeholder="Job Title"
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
                            onChangeText={onChangeCompany}
                            value={company}
                            placeholder="Company"
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
                    {/* <View style={{ flexDirection: "row", paddingHorizontal: 20, marginTop: 20 }}>
                        <CheckBoxIcon color={textOffColor} height={18} width={18} style={{}} />
                        <Text style={{
                            color: textLighterColor,
                            fontSize: 14,
                            marginLeft: 10,
                            fontWeight: "500"
                        }}>
                            Working Now
                        </Text>
                    </View> */}
                    <View style={{
                        paddingHorizontal: 10,
                        marginBottom: 20,
                        marginTop: 20
                    }}>
                        <TouchableOpacity
                            onPress={onAddPress}
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