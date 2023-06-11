import React, { useEffect, useState, useRef } from 'react';
import {
    Text, View, TouchableOpacity,
    FlatList, Image
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import {
    useForm,
    Controller
} from 'react-hook-form';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ms, mvs, s, vs } from 'react-native-size-matters';
import { ScrollView } from 'react-native-gesture-handler';
import { useGetAllMemberQuery } from '../../Admin/Committee/Services/CommitteeApi';
import { baseUrl } from '../../../Config/baseURL';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Usercircle from '../../../Assets/Svgs/Usercircle.svg';
import { SearchBar } from 'react-native-elements';

function EmployeesList(props) {
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
        textOffColor,
        backgroundColor,
        textColor,
        textLighterColor, buttoncolor,
        borderColor,
        greenColor,
    } = useSelector(state => state.styles)
    const [search, setSearch] = useState('')
    useEffect(() => {
    }, [])
    const {
        data = [],
        isFetching,
    } = useGetAllMemberQuery();
    console.log("AllMemberData::::::::::", data)
    console.log("AllMemberImage::::::::::", baseUrl + data?.[0]?.image)

    function AllHead({ item, index }) {
        return data.map((item, key) => {
            // const { name, website, image } = item
            return (
                <TouchableOpacity
                    onPress={() => props.navigation.navigate("CheckInAttendance", { item: item })}
                    style={{
                        height: s(90), width: s(145),
                        marginLeft: s(15),
                        alignSelf: "center",
                        backgroundColor: backgroundColor,
                        borderColor: 'red', borderWidth: 0,
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 2,
                        }, shadowOpacity: 0.25, shadowRadius: 3.84,
                        elevation: 5, borderRadius: 8, alignItems: "center",
                        justifyContent: "center", marginTop: 40
                    }}>
                    <View style={{
                        height: 65, width: 65, top: -30,
                        borderRadius: 100, backgroundColor: mainColor,
                        alignItems: "center", justifyContent: "center"
                    }}>
                        <Image
                            // resizeMode="contain"
                            source={{ uri: baseUrl + data.image }}
                            style={{
                                height: 65, width: 65,
                                alignSelf: "center", borderRadius: 100,
                            }}
                        />
                        {/* <EmergencyStockIcon color={{ mainColor }} height={22} width={22} style={{}} /> */}
                    </View>
                    <View style={{
                        alignItems: "center",
                        justifyContent: "center", top: -20
                    }}>
                        <Text style={{
                            fontWeight: "bold",
                            fontSize: 14, color: textOffColor
                        }}>
                            {item.Fname + item.Lname}
                        </Text>
                    </View>
                </TouchableOpacity>
            )
        })
    }
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
                            Employees
                        </Text>
                        <View style={{
                            flexDirection: "row", justifyContent: "center",
                            alignItems: "center"
                        }}>
                            <Usercircle color={'#fff'} height={24} width={24} style={{}} />
                        </View>


                    </View>
                </View>
                <View
                    style={{
                        borderWidth: 0.5,
                        height: 40,
                        width: "90%",
                        borderColor: "lightgray",
                        // marginLeft: 15,
                        shadowColor: "#000",
                        shadowOffset: { width: 1, height: 1 },
                        shadowOpacity: 0.1,
                        shadowRadius: 0.2,
                        elevation: 2, marginTop: 10,
                        backgroundColor: "#FFFFFF",
                        borderRadius: 8,
                        alignSelf: "center",
                    }}
                >
                    <SearchBar
                        placeholder="Search....."
                        containerStyle={{
                            backgroundColor: "transparent",
                            borderBottomColor: 'transparent',
                            borderTopColor: 'transparent',
                            paddingBottom: 10, paddingLeft: 10,
                            height: 0, width: 0, marginTop: 10,
                        }}
                        inputContainerStyle={{
                            backgroundColor: "transparent", right: 10,
                            height: 35, width: 320, bottom: 15,
                        }}
                        inputStyle={{
                            color: textColor,
                            fontSize: 15,
                        }}
                        round
                        searchIcon={{ size: 24 }}
                        onChangeText={(text) => setSearch(text)}
                        value={search}
                    />
                </View>
                <ScrollView
                    contentContainerStyle={{
                        paddingBottom: 50,
                        backgroundColor: backgroundColor,
                        borderColor: 'red',
                        borderWidth: 0,
                        alignItems: 'center',
                        marginLeft: 10,
                        borderRadius: 8,
                        marginTop: 20
                    }}>
                    <View style={{
                        flexDirection: "row",
                        width: "100%",
                        flexWrap: "wrap",
                        marginRight: s(20)
                    }}>
                        <AllHead />
                    </View>
                </ScrollView>
            </View>
        </>
    )
}

export default EmployeesList