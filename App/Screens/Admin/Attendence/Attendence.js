import React, { useEffect, useState, useRef } from 'react';
import {
    Text, View, TouchableOpacity,
    FlatList, TextInput
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
// import { SearchBar } from 'react-native-elements';
import ThreeDotIcon from '../../../Assets/Svgs/ThreeDotIcon.svg'
import Usercircle from '../../../Assets/Svgs/Usercircle.svg'
import { getStatusBarHeight } from 'react-native-status-bar-height';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {
    useForm,
    Controller
} from 'react-hook-form';
import AttendenceStatusModal from './AttendenceStatusModal';
import { changeAttendenceStatusModal } from './Store/AttendenceSlice';
import { useGetAllMemberQuery } from '../Committee/Services/CommitteeApi';
function Attendence(props) {
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
    const {
        data = [],
        isFetching,
    } = useGetAllMemberQuery(65);
    console.log("All EMployees Data::::::::", data)
    function renderItems({ item, index }) {
        return (
            <TouchableOpacity
                onPress={() =>
                    props.navigation.navigate("AttendenceReport", {
                        Uid: item.Uid
                    })
                }
                style={{
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
                    marginBottom: 15, alignItems: "center", marginTop: 15
                }}>
                    <TouchableOpacity
                        style={{ width: "15%" }}
                        onPress={() => props.navigation.navigate("ProfileTopBar")}
                    >
                        <Usercircle color={{ mainColor }} height={50} width={50} style={{}} />
                    </TouchableOpacity>
                    <View style={{ width: "83%", marginTop: 5 }}>
                        <View style={{ flexDirection: "row", }}>
                            <Text style={{
                                color: textColor, fontSize: 14,
                                fontWeight: "700", width: "67%"
                            }}>
                                {item.Fname + item.Lname}
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
                                {item.email}
                            </Text>
                            <Text style={{
                                color: textLighterColor, fontSize: 12,
                                fontWeight: "500",
                            }}>
                                {item.role}
                            </Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
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
                            Attendence Report
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
                        data={data}
                        ListFooterComponent={() => <View style={{ height: 20 }} />}
                        renderItem={renderItems}
                        keyExtractor={(item, index) => index}
                        showsVerticalScrollIndicator={false}
                    />
                </View>
            </View>
            <AttendenceStatusModal />
        </>
    )
}

export default Attendence