import React, { useEffect, useState, useRef } from 'react';
import {
    Text, View, TouchableOpacity,
    FlatList, TextInput
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
// import { SearchBar } from 'react-native-elements';
import PlusCircle from '../../../Assets/Svgs/PlusCircle.svg'
import Usercircle from '../../../Assets/Svgs/Usercircle.svg'
import { getStatusBarHeight } from 'react-native-status-bar-height';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {
    useForm,
    Controller
} from 'react-hook-form';
import {
    Menu,
    MenuProvider,
    MenuOptions,
    MenuOption,
    MenuTrigger,
} from "react-native-popup-menu";

// import AttendenceStatusModal from './AttendenceStatusModal';
function CommitteeMembers(props) {
    const defaultValues = {
        locationIds: [],
        conditionIds: [],
    }
    const {
        control,
        handleSubmit,
        reset,
        formState: { errors },
        watch
    } = useForm({
        mode: 'onChange',
        defaultValues,
    });

    const dispatch = useDispatch()
    const {
        mainColor,
        mainLighterColor,
        backgroundColor,
        textColor,
        modalColor,
        textLighterColor, buttoncolor,
        borderColor,
        greenColor,
        lightbluecolor,
        redcolor,
        textOffColor
    } = useSelector(state => state.styles)

    const [search, setSearch] = useState('')
    const [state, setState] = useState(null)
    const [MoveTorepeat, setmoveTorepeat] = useState(false);
    const cityList = [
        { label: 'Technician ', value: '0' },
        { label: 'ACCEPTED', value: '1' },
    ]
    const itemData = [
        {
            technician: 'Plumbing Technician :',
            name: "Johan Doe",
            type: "Student"
        },
        {
            technician: 'Customer Name :',
            name: "Alex Brooklyn",
            type: "Guard"
        },
        {
            technician: 'Date :',
            name: "Alex henry",
            type: "Professor"
        },
        {
            technician: 'Type Of Form :',
            name: "Mark jay",
            type: "Librarian"
        },


    ];
    function renderItems({ item, index }) {
        return (
            <View style={{
                flex: 1, width: "90%", alignSelf: "center",
                backgroundColor: backgroundColor,
                borderColor: 'red', borderWidth: 0,
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 2,
                }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5,
                marginTop: 10, borderRadius: 8,
                paddingHorizontal: 10
                // padding: 15
            }}>

                <View style={{
                    flexDirection: "row", justifyContent: "space-between",
                    alignItems: "center", marginTop: 10
                }}>
                    <TouchableOpacity
                        style={{ width: "15%" }}
                        onPress={() => props.navigation.navigate("ProfileTopBar")}
                    >
                        <Usercircle color={{ mainColor }} height={50} width={50} style={{}} />
                    </TouchableOpacity>
                    <View style={{ width: "83%", marginTop: 5, left: 5 }}>
                        <View style={{ flexDirection: "row", }}>
                            <Text style={{
                                color: textColor, fontSize: 14,
                                fontWeight: "700", width: "67%"
                            }}>
                                {item.name}
                            </Text>
                        </View>
                        <View style={{
                            flexDirection: "row",
                            marginTop: 5,
                            justifyContent: "space-between"
                        }}>
                            <Text style={{
                                color: borderColor, fontSize: 12,
                                fontWeight: "500", width: "67%"
                            }}>
                                {item.type}
                            </Text>
                            {/* <Text style={{
                                color: textLighterColor, fontSize: 12,
                                fontWeight: "500",
                            }}>
                                {"01/23/2023"}
                            </Text> */}
                        </View>
                    </View>

                </View>
                <TouchableOpacity
                    // onPress={() => dispatch(changeAddApprovedModal(true))}
                    style={{
                        backgroundColor: mainColor,
                        height: 35,
                        width: 125,
                        alignSelf: "flex-end",
                        borderRadius: 8,
                        justifyContent: "center",
                        marginRight: 5,
                        marginBottom: 10
                    }}
                >
                    <Text
                        style={{
                            fontSize: 12,
                            color: "#fff",
                            fontWeight: 'bold',
                            alignSelf: "center",
                        }}>
                        Remove Member
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
    useEffect(() => {
    }, [])

    return (
        <>
            <View style={{ flex: 1, backgroundColor: backgroundColor, }}>
                <View style={{
                    height: getStatusBarHeight() + 50,
                    backgroundColor: backgroundColor,
                    justifyContent: 'flex-end',
                    paddingHorizontal: 10,
                }}>

                    <View
                        style={{
                            marginBottom: 10,
                            flexDirection: "row",
                            justifyContent: "space-between",
                            paddingHorizontal: 10,
                            borderColor: 'red', borderWidth: 0,
                        }}
                    >
                        <View style={{
                            flexDirection: "row", justifyContent: "center",
                            alignItems: "center"
                        }}>
                            <TouchableOpacity
                                onPress={() => props.navigation.openDrawer()}
                            >
                                <EvilIcons
                                    name="navicon"
                                    size={26}
                                    color={"purple"}
                                // style={{marginLeft:10}}
                                />
                            </TouchableOpacity>
                        </View>
                        <Text
                            style={{
                                fontSize: 20,
                                fontWeight: "700",
                                color: textColor
                            }}
                        >
                            Committee Members
                        </Text>
                        <View style={{
                            flexDirection: "row", justifyContent: "center",
                            alignItems: "center"
                        }}>
                            <Usercircle color={'#fff'} height={30} width={30} style={{}} />
                        </View>


                    </View>
                </View>

                <View style={{
                    width: "100%", paddingBottom: 100,
                    marginTop: 20
                }}>
                    <FlatList
                        data={itemData}
                        ListFooterComponent={() => <View style={{ height: 20 }} />}
                        renderItem={renderItems}
                        keyExtractor={(item, index) => index}
                        showsVerticalScrollIndicator={false}
                    />
                </View>
            </View>
            {/* <AttendenceStatusModal /> */}
        </>
    )
}

export default CommitteeMembers