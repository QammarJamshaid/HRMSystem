import React, { useEffect, useState, useReducer } from "react";
import { useForm } from 'react-hook-form';
import {
    ActivityIndicator,
    Text,
    TouchableOpacity, View, ViewBase
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { useDispatch, useSelector } from 'react-redux';
import Delete from '../../Assets/Svgs/Delete.svg';
import EditIcon from '../../Assets/Svgs/EditIcon.svg';
import { changeAddEducationModal } from "./Store/MyProfileSlice";
import Ionicons from 'react-native-vector-icons/Ionicons';
import AddEducationModal from "./AddEducationModal";
import { ApiServices, useGlobalContext } from "../../Services2";
import { hp } from "../../Global";
import { ModalLoader } from "../../Components";
import _ from 'lodash'

function Education(props) {
    const [, forceUpdate] = useReducer((x) => x + 1, 0);
    const { user } = useGlobalContext()
    const [loader, setLoader] = useState(true)
    const [educationList, setEducationList] = useState([])
    const [showAddEduModal, setShowAddEduModal] = useState(false)

    const [modalLoader, setModalLoader] = useState({
        visible: false,
        message: ''
    })


    const defaultValues = {
        Quantity: "",
        MarketValue: "",
    }

    const dispatch = useDispatch()

    const { control, handleSubmit, reset, formState: { errors } } = useForm({
        mode: 'onChange',
        defaultValues: defaultValues,
    });
    const {
        mainColor,
        mainLighterColor,
        backgroundColor,
        textColor,
        textOffColor,
        textLightColor, buttoncolor,
        backgroundDarkerColor,
        greenColor,
        lightbluecolor,
        redcolor,
        borderColor,
        blackcolor
    } = useSelector(state => state.styles)
    const [enableNotificationIcon, setEnableNotificationIcon] = useState(false)
    const data = [
        {
            Name: 'Test for Altra ',
            address: "Mon, Wed, Fri",
            textcolor: mainColor,
            color: "#5FAF67",
            status: "Paid",
        },
        {
            Name: 'Test for Altra ',
            address: "Mon, Wed, Fri",
            textcolor: greenColor,
            state: "California",
            color: "#FD3E3E",
            status: "Unpaid",
        },
        {
            Name: 'Test for Altra ',
            address: "Mon, Wed, Fri",
            textcolor: greenColor,
            state: "California",
            color: "#5FAF67",
            status: "Paid",
        },
    ];

    const hideLoader = () => setLoader(false)


    const hideAddEduModal = () => setShowAddEduModal(false)
    const addEduModalVisible = () => setShowAddEduModal(true)

    const getAllEducation = () => {
        ApiServices.getAllEducation(user?.Uid).then((res) => {
            setEducationList(res)
            setLoader(false)
        })
            .catch(hideLoader)
    }

    const onAddEducationSuccess = () => {
        setLoader(true)
        setShowAddEduModal(false)
        getAllEducation()
    }


    const hideModalLoader = () => {
        setModalLoader({
            visible: false,
            message: ''
        })
    }

    const onDeleteEducationItem = (item) => {
        setModalLoader({
            visible: true,
            message: 'Deleting...'
        })
        ApiServices.deleteEducation(item?.EduID).then(() => {
            _.remove(educationList, element => _.isEqual(element?.EduID, item?.EduID));
            forceUpdate()
            hideModalLoader()
            setEducationList(educationList)
        })
            .catch(hideModalLoader)
    }


    useEffect(() => {
        getAllEducation()
    }, []

    )
    function AllAssets() {

        if(educationList?.length === 0) {
            return null
        }
        else {
            if(loader) {
                return <View style={{ marginTop: hp(20) }}>
                    <ActivityIndicator color={'#000'} />
                </View>
            }
            else {
                return educationList?.map((item, key) => {
                    return (
                        <>
                            <View style={{
                                backgroundColor: backgroundDarkerColor, shadowColor: "#000",
                                paddingHorizontal: 10, borderRadius: 10, shadowOffset: {
                                    width: 0,
                                    height: 2,
                                }, shadowOpacity: 0.25, shadowRadius: 3.84,
                                elevation: 5, width: "100%", flex: 1,
                                marginTop: 10
                            }}>
                                <View style={{
                                    marginTop: 20,
                                    marginBottom: 10,
                                    flexDirection: "row",
                                    paddingHorizontal: 10,
                                    justifyContent: "space-between"
                                }}>
                                    <Text style={{
                                        color: textLightColor,
                                        fontSize: 14,
                                        width: "40%",
                                        fontWeight: "500"
                                    }}>
                                        {"Board :"}
                                    </Text>
                                    <Text style={{
                                        color: borderColor,
                                        fontSize: 12,
                                        width: "40%",
                                        fontWeight: "500"
                                    }}>
                                        {item?.Board}
                                    </Text>
                                    <View style={{
                                        flexDirection: "row", width: "20%",
                                        justifyContent: "flex-end", marginTop: -10
                                    }}>
                                        <TouchableOpacity
                                            // onPress={() => props.navigation.navigate('EditProfile')}
                                            style={{
                                                height: 25, width: 25,
                                                borderRadius: 100, justifyContent: "center",
                                                alignItems: "center",
                                                backgroundColor: "lightgray", marginRight: 5
                                            }}>
                                            <EditIcon color={mainColor} height={12} width={12} style={{}} />
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                            onPress={onDeleteEducationItem.bind(null, item)}
                                            style={{
                                                height: 25, width: 25,
                                                borderRadius: 100, justifyContent: "center",
                                                alignItems: "center",
                                                backgroundColor: "lightgray"
                                            }}>
                                            <Delete color={"#FF3B3B"} height={14} width={14} style={{}} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View style={{
                                    // marginTop: 10,
                                    marginBottom: 10,
                                    flexDirection: "row",
                                    paddingHorizontal: 10,
                                }}>
                                    <Text style={{
                                        color: textLightColor,
                                        fontSize: 12,
                                        width: "40%",
                                        fontWeight: "500"
                                    }}>
                                        {"Degree"}
                                    </Text>
                                    <Text style={{
                                        color: borderColor,
                                        fontSize: 12,
                                        width: "60%",
                                        fontWeight: "500"
                                    }}>
                                        {item?.Degree}
                                    </Text>
                                </View>
                                <View style={{
                                    // marginTop: 10,
                                    marginBottom: 10,
                                    flexDirection: "row",
                                    paddingHorizontal: 10,
                                }}>
                                    <Text style={{
                                        color: textLightColor,
                                        fontSize: 12,
                                        width: "40%",
                                        fontWeight: "500"
                                    }}>
                                        {"StartDate"}
                                    </Text>
                                    <Text style={{
                                        color: borderColor,
                                        fontSize: 12,
                                        width: "60%",
                                        fontWeight: "500"
                                    }}>
                                        {item?.Startdate}
                                    </Text>
                                </View>
                                <View style={{
                                    // marginTop: 10,
                                    marginBottom: 10,
                                    flexDirection: "row",
                                    paddingHorizontal: 10,
                                }}>
                                    <Text style={{
                                        color: textLightColor,
                                        fontSize: 12,
                                        width: "40%",
                                        fontWeight: "500"
                                    }}>
                                        {"EndDate"}
                                    </Text>
                                    <Text style={{
                                        color: borderColor,
                                        fontSize: 12,
                                        width: "60%",
                                        fontWeight: "500"
                                    }}>
                                        {item?.Enddate}
                                    </Text>
                                </View>
                                <View style={{
                                    marginBottom: 10,
                                    flexDirection: "row",
                                    paddingHorizontal: 10,
                                }}>
                                    <Text style={{
                                        color: textLightColor,
                                        fontSize: 12,
                                        width: "40%",
                                        fontWeight: "500"
                                    }}>
                                        {"Institute"}
                                    </Text>
                                    <Text style={{
                                        color: borderColor,
                                        fontSize: 12,
                                        width: "60%",
                                        fontWeight: "500"
                                    }}>
                                        {item?.Institute}
                                    </Text>
                                </View>
                                <View style={{
                                    marginBottom: 20,
                                    flexDirection: "row",
                                    paddingHorizontal: 10,
                                }}>
                                    <Text style={{
                                        color: textLightColor,
                                        fontSize: 12,
                                        width: "40%",
                                        fontWeight: "500"
                                    }}>
                                        {"Major"}
                                    </Text>
                                    <Text style={{
                                        color: borderColor,
                                        fontSize: 12,
                                        width: "60%",
                                        fontWeight: "500"
                                    }}>
                                        {item?.major}
                                    </Text>
                                </View>
                            </View>

                        </>
                    )
                })
            }
        }
    }

    return (
        <>
            <View style={{ flex: 1, backgroundColor: backgroundColor }}>
                <ModalLoader
                    visible={modalLoader.visible}
                    message={modalLoader.message}
                    useModalLayout={true}
                />
                <ScrollView
                    contentContainerStyle={{
                        backgroundColor: backgroundColor,
                        paddingHorizontal: 10,
                        paddingBottom: 100
                    }}>

                    <View style={{
                        justifyContent: "space-between",
                        marginTop: 30, width: "95%", alignSelf: "center"
                    }}>
                        <View style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center"
                        }}>
                            <View>
                                <Text style={{
                                    color: borderColor,
                                    fontSize: 16,
                                    fontWeight: "bold"
                                }}>
                                    Education
                                </Text>
                            </View>
                            <TouchableOpacity
                                onPress={addEduModalVisible}
                                style={{
                                    backgroundColor: mainColor,
                                    height: 40,
                                    width: 150,
                                    justifyContent: "center",
                                    borderRadius: 8,

                                }}
                            >
                                <Text
                                    style={{
                                        fontSize: 14,
                                        color: "#fff",
                                        fontWeight: 'bold',
                                        alignSelf: "center",
                                    }}>
                                    Add Education
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{
                            backgroundColor: backgroundColor,
                            marginBottom: 10, marginTop: 10
                        }}>
                            {AllAssets(data)}
                        </View>
                    </View>
                </ScrollView>
                <View style={{ backgroundColor: backgroundColor, height: 15 }} />
            </View>
            <AddEducationModal
                visible={showAddEduModal}
                onClose={hideAddEduModal}
                onSuccess={onAddEducationSuccess}
            />
        </>
    );
};

export default Education;