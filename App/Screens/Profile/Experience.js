import React, { useState, useEffect, useReducer } from "react";
import { useForm } from 'react-hook-form';
import {
    ActivityIndicator,
    Text,
    TouchableOpacity, View
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { useDispatch, useSelector } from 'react-redux';
import Delete from '../../Assets/Svgs/Delete.svg';
import EditIcon from '../../Assets/Svgs/EditIcon.svg';
import { changeAddExperienceModal } from "./Store/MyProfileSlice";
import AddExperienceModal from "./AddExperienceModal";
import { ApiServices, useGlobalContext } from "../../Services2";
import { hp } from "../../Global";
import _ from 'lodash'
import { ModalLoader } from "../../Components";

function Experience(props) {
    const [, forceUpdate] = useReducer((x) => x + 1, 0);
    const { user } = useGlobalContext()
    const [loader, setLoader] = useState(true)
    const [modalLoader, setModalLoader] = useState({
        visible: false,
        message: ''
    })
    const [allExperiencesList, setAllExperiencesList] = useState([])
    const [showAddExpModal, setShowAddExpModal] = useState(false)

    const hideModalLoader = () => {
        setModalLoader({
            visible: false,
            message: ''
        })
    }
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

    const hideAddExpModal = () => setShowAddExpModal(false)
    const addExpModalVisible = () => setShowAddExpModal(true)


    const hideLoader = () => setLoader(false)

    const getAllExperiences = () => {
        ApiServices.getAllExperiences(user?.Uid).then((res) => {
            setAllExperiencesList(res)
            setLoader(false)
        })
            .catch(hideLoader)
    }


    useEffect(() => {
        getAllExperiences()
    }, [])


    const onAddExperienceSuccess = () => {
        setLoader(true)
        setShowAddExpModal(false)
        getAllExperiences()
    }

    const onDeleteItem = (item) => {
        setModalLoader({
            visible: true,
            message: 'Deleting...'
        })
        ApiServices.deleteExperience(item?.ExpID).then(() => {
            _.remove(allExperiencesList, element => _.isEqual(element?.ExpID, item?.ExpID));
            forceUpdate()
            hideModalLoader()
            setAllExperiencesList(allExperiencesList)
        })
            .catch(hideModalLoader)
    }

    function AllAssets() {

        if(allExperiencesList?.length === 0) {
            return null
        }
        else {
            if(loader) {
                return (<View style={{ marginTop: hp(20) }}>
                    <ActivityIndicator color={'#000'} />
                </View>
                )
            }
            else {
                return allExperiencesList.map((item, key) => {
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
                                        // backgroundColor:"red",
                                        fontSize: 14,
                                        width: "40%",
                                        fontWeight: "500"
                                    }}>
                                        {"Title :"}
                                    </Text>
                                    <Text style={{
                                        color: borderColor,
                                        fontSize: 12,
                                        width: "40%",
                                        fontWeight: "500"
                                    }}>
                                        {item?.Title}
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
                                            onPress={onDeleteItem.bind(null, item)}
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
                                        {"Comapny"}
                                    </Text>
                                    <Text style={{
                                        color: borderColor,
                                        fontSize: 12,
                                        width: "60%",
                                        fontWeight: "500"
                                    }}>
                                        {item?.Company}
                                    </Text>
                                </View>
                                {
                                    item?.currentwork && item?.currentwork?.length !== 0 ?
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
                                                {"Current Work"}
                                            </Text>
                                            <Text style={{
                                                color: borderColor,
                                                fontSize: 12,
                                                width: "60%",
                                                fontWeight: "500"
                                            }}>
                                                {item?.currentwork}
                                            </Text>
                                        </View> : null

                                }
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
                                    Experience
                                </Text>
                            </View>
                            <TouchableOpacity
                                onPress={addExpModalVisible}
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
                                    Add Experience
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
            <AddExperienceModal
                visible={showAddExpModal}
                onClose={hideAddExpModal}
                onSuccess={onAddExperienceSuccess}
            />
        </>
    );
};

export default Experience;