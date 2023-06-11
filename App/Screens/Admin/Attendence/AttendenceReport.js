import React, { useEffect, useState } from 'react';
import {
    Text, View, TextInput,
    TouchableOpacity, FlatList
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import BackIcon from '../../../Assets/Svgs/BackIcon.svg';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { ScrollView } from 'react-native-gesture-handler';
import Calender from '../../../Assets/Svgs/Calender.svg'
import DateTimePicker from '@react-native-community/datetimepicker'
import Entypo from 'react-native-vector-icons/Entypo';
import moment from "moment";
import { useGetAttendanceQuery } from './Services/AttendenceApi';
import { useGlobalContext } from '../../../Services2';

function AttendenceReport(props) {

    const defaultValues = {
        Quantity: "",
        MarketValue: "",
    }
    const dispatch = useDispatch()
    const {
        textColor,
        mainColor,
        textOffColor,
        backgroundLighterColor,
        backgroundColor, buttoncolor,
        backgroundDarkerColor, borderColor,
        textLighterColor
    } = useSelector(state => state.styles)
    const [secureTextEntry, ChangeSecureTextEntry] = useState(true);
    const { control, handleSubmit, reset, formState: { errors } } = useForm({
        mode: 'onChange',
        defaultValues: defaultValues,
    });
    const [loader, setLoader] = useState(false)
    const [showItems, setShowItems] = useState(false)
    const {
        viewAttendenceModal
    } = useSelector(state => state.attendence) || {}

    const { user } = useGlobalContext()
    console.log("viewAttendenceModal===>", viewAttendenceModal)
    const showDatepicker = () => {
        showMode('date');
    };
    const [attend, setattend] = useState([])

    const callapiattendance = async () => {
    }
    const {
        data = [],
        isFetching,
    } = useGetAttendanceQuery(user?.Uid);
    console.log("All attendancce Data::::::::", data)

    //  setattend(data)
    callapiattendance()
    const [showDate, setshowDate] = useState(false)
    const [date, setdate] = useState(new Date("2022-03-25"))
    const [showDatefrom, setshowDatefrom] = useState(false)
    const [datefrom, setdatefrom] = useState(new Date("2022-03-25"))
    function JobdetailFunc() {
        return [data].map((item, key) => {
            // const { name, website, image } = item
            return (
                <>
                    <View
                        key={key}
                        style={{
                            backgroundColor: backgroundDarkerColor, shadowColor: "#000",
                            paddingHorizontal: 10, borderRadius: 10, shadowOffset: {
                                width: 0,
                                height: 2,
                            }, shadowOpacity: 0.25, shadowRadius: 3.84,
                            elevation: 5, width: "90%", flex: 1,
                            marginTop: 10, alignSelf: "center",
                            height: 200
                        }}>
                        <View style={{
                            width: "82%",
                            backgroundColor: backgroundDarkerColor, paddingHorizontal: 10,
                            borderTopRightRadius: 5, borderBottomRightRadius: 8
                        }}>
                            <View style={{
                                flexDirection: "row", marginTop: 20,
                            }}>
                                <Text style={{
                                    color: borderColor, fontSize: 14,
                                    width: 90,
                                }}>
                                    {"Job Title"}
                                </Text>
                                <Text style={{
                                    color: textColor, fontSize: 14,
                                    fontWeight: "bold"
                                }}>
                                    {item.Title}
                                </Text>
                            </View>
                            <View style={{
                                flexDirection: "row", marginTop: 10,
                            }}>
                                <Text style={{
                                    color: borderColor, fontSize: 14,
                                    width: 90
                                }}>
                                    {"Location"}
                                </Text>
                                <Text style={{
                                    color: textColor, fontSize: 14,

                                }}>
                                    {item.Location}
                                </Text>
                            </View>
                            <View
                                style={{
                                    flexDirection: "row", marginTop: 10,
                                }}>
                                <Text style={{
                                    color: borderColor, fontSize: 14,
                                    width: 90
                                }}>
                                    {"Experience"}
                                </Text>
                                <Text style={{
                                    color: textColor, fontSize: 14,
                                    // fontWeight: "bold",
                                    //  textDecorationLine: "underline",
                                    // textDecorationColor: "#1C41F9"
                                }}>
                                    {item.experience}
                                </Text>
                            </View>
                            <View style={{
                                flexDirection: "row", marginTop: 10,
                            }}>
                                <Text style={{
                                    color: borderColor, fontSize: 14,
                                    width: 90
                                }}>
                                    {"Salary"}
                                </Text>
                                <Text style={{
                                    color: textColor, fontSize: 14,

                                }}>
                                    {item.Salary}
                                </Text>
                            </View>
                            <View style={{
                                flexDirection: "row", marginTop: 10,
                            }}>
                                <Text style={{
                                    color: borderColor, fontSize: 14,
                                    width: 90
                                }}>
                                    {"Qualification"}
                                </Text>
                                <Text style={{
                                    color: textColor, fontSize: 14,

                                }}>
                                    {item.qualification}
                                </Text>
                            </View>
                            <View style={{
                                flexDirection: "row", marginTop: 10,
                                marginBottom: 20
                            }}>
                                <Text style={{
                                    color: borderColor, fontSize: 14,
                                    width: 90
                                }}>
                                    {"Vacancy"}
                                </Text>
                                <Text style={{
                                    color: textColor, fontSize: 14,

                                }}>
                                    {item.noofvacancie}
                                </Text>
                            </View>

                        </View>
                    </View>

                </>
            )
        })
    }

    // const getJobDetail = () => {
    //     if (data) {
    //         setJobDetail([data])
    //         setLoader(false)
    //     }
    //     else{
    //         setLoader(false)
    //     }
    // }

    // useEffect(() => {
    //     getJobDetail()
    // }, [])

    return (
        <View style={{ flex: 1, backgroundColor: backgroundColor }}>
            <View style={{
                height: getStatusBarHeight() + 50,
                backgroundColor: backgroundColor,
                justifyContent: 'flex-end'
            }}>
                <View
                    style={{
                        // marginTop: 50,
                        flexDirection: "row",
                        justifyContent: "space-between",
                        paddingHorizontal: 20,
                        borderColor: 'red', borderWidth: 0,
                        marginBottom: 10
                    }}
                >
                    <View style={{
                        flexDirection: "row", justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <TouchableOpacity
                            onPress={() => props.navigation.goBack()}
                        >
                            <BackIcon name='burst-sale' height={14} width={14} color={textOffColor} />
                        </TouchableOpacity>
                    </View>
                    <Text
                        style={{
                            fontSize: 16,
                            fontWeight: "bold",
                            color: textColor,
                            marginRight: 15
                        }}
                    >
                        {"Attendence Status"}
                    </Text>
                    <View style={{
                        flexDirection: "row", justifyContent: "center",
                        alignItems: "center"
                    }}>

                    </View>
                </View>
            </View>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingBottom: 30,
                    backgroundColor: backgroundLighterColor,
                }}>

                <View style={{
                    width: "100%", alignSelf: "center",
                    marginTop: 20
                }}>
                    <View style={{ marginTop: 30, paddingHorizontal: 20 }}>
                        <Text style={{
                            fontWeight: "bold",
                            color: textColor, fontSize: 18
                        }}>
                            {"From:"}
                        </Text>
                    </View>
                    <View style={{
                        alignSelf: "center",
                        width: "90%",
                        marginTop: 10
                    }}>
                        <Controller
                            control={control}
                            rules={{
                                required: true,
                            }}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <TouchableOpacity
                                    onPress={showDatepicker}
                                    style={{
                                        width: '100%', height: 35, justifyContent: "space-between",
                                        alignSelf: "center", flexDirection: "row",
                                        paddingHorizontal: 0, borderWidth: 0.5,
                                        borderRadius: 5, borderColor: borderColor,
                                        alignItems: "center"
                                    }}>

                                    {(showDate || Platform.OS == "ios") && (
                                        <DateTimePicker
                                            // minimumDate={new Date()}
                                            value={date}
                                            mode={'date'}
                                            is24Hour={true}
                                            // style={{ backgroundColor: "transparent" }}
                                            onChange={(event, selectedDate) => setdate(selectedDate)}
                                            accentColor={textLighterColor}
                                            textColor={textLighterColor}
                                        />
                                    )}
                                    <View style={{
                                        width: '10%', height: 37, alignSelf: "center",
                                        justifyContent: "center", alignItems: "center"
                                    }}>
                                        <Calender color={mainColor} height={18} width={18} style={{ right: 10 }} />
                                    </View>
                                </TouchableOpacity>
                            )}
                            name="purchaseDate"
                        />
                        {errors.purchaseDate && <Text style={{ color: 'red', marginLeft: 10, marginBottom: 8 }}>Purchase Date is required</Text>}

                    </View>
                    <View style={{ marginTop: 10, paddingHorizontal: 20 }}>
                        <Text style={{
                            fontWeight: "bold",
                            color: textColor, fontSize: 18
                        }}>
                            {"To:"}
                        </Text>
                    </View>
                    <View style={{
                        alignSelf: "center",
                        width: "90%",
                        marginTop: 10
                    }}>
                        <Controller
                            control={control}
                            rules={{
                                required: true,
                            }}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <TouchableOpacity
                                    onPress={showDatepicker}
                                    style={{
                                        width: '100%', height: 35, justifyContent: "space-between",
                                        alignSelf: "center", flexDirection: "row",
                                        paddingHorizontal: 0, borderWidth: 0.5,
                                        borderRadius: 5, borderColor: borderColor,
                                        alignItems: "center"
                                    }}>
                                    {(showDatefrom || Platform.OS == "ios") && (
                                        <DateTimePicker
                                            // minimumDate={new Date()}
                                            value={datefrom}
                                            mode={'date'}
                                            is24Hour={true}
                                            // style={{ backgroundColor: "transparent" }}
                                            onChange={(event, selectedDate) => setdatefrom(selectedDate)}
                                            accentColor={textLighterColor}
                                            textColor={textLighterColor}
                                        />
                                    )}
                                    <View style={{
                                        width: '10%', height: 37, alignSelf: "center",
                                        justifyContent: "center", alignItems: "center"
                                    }}>
                                        <Calender color={mainColor} height={18} width={18} style={{ right: 10 }} />
                                    </View>
                                </TouchableOpacity>
                            )}
                            name="purchaseDateTo"
                        />
                        {errors.purchaseDateTo && <Text style={{ color: 'red', marginLeft: 10, marginBottom: 8 }}>Purchase Date is required</Text>}

                    </View>

                    <View style={{
                        paddingHorizontal: 10,
                        marginBottom: 20,
                        marginTop: 20
                    }}>
                        <TouchableOpacity
                            onPress={() => setShowItems(!showItems)}
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
                            <Text
                                style={{
                                    fontSize: 14,
                                    color: "#fff",
                                    fontWeight: 'bold',
                                    alignSelf: "center",
                                }}>
                                Attendance
                            </Text>
                        </TouchableOpacity>
                    </View>
                    {showItems &&
                        <>
                            <View
                                // key={key}
                                style={{
                                    backgroundColor: backgroundDarkerColor, shadowColor: "#000",
                                    paddingHorizontal: 10, borderRadius: 10, shadowOffset: {
                                        width: 0,
                                        height: 2,
                                    }, shadowOpacity: 0.25, shadowRadius: 3.84,
                                    elevation: 5, width: "90%", flex: 1,
                                    marginTop: 10, alignSelf: "center",
                                }}>
                                <View style={{
                                    width: "100%",
                                    backgroundColor: backgroundDarkerColor,
                                    paddingHorizontal: 10,
                                    borderTopRightRadius: 5,
                                    borderBottomRightRadius: 8,
                                    marginBottom: 20,
                                    marginTop: 20,
                                }}>
                                    <View style={{
                                        flexDirection: "row",
                                    }}>
                                        <Text style={{
                                            color: textColor, fontSize: 14,
                                            width: 90, fontWeight: "bold"
                                        }}>
                                            {"Date:"}
                                        </Text>
                                        <Text style={{
                                            color: borderColor, fontSize: 14,
                                            fontWeight: "bold"
                                        }}>
                                            {"2022-03-12 00:00:00"}
                                        </Text>
                                    </View>
                                    <View style={{
                                        flexDirection: "row", marginTop: 10,
                                    }}>
                                        <Text style={{
                                            color: textColor, fontSize: 14,
                                            width: 90, fontWeight: "bold"
                                        }}>
                                            {"Status:"}
                                        </Text>
                                        <Text style={{
                                            color: mainColor, fontSize: 14,
                                            fontWeight: "bold"
                                        }}>
                                            {"Present"}
                                        </Text>
                                    </View>

                                </View>
                            </View>
                            <View
                                // key={key}
                                style={{
                                    backgroundColor: backgroundDarkerColor, shadowColor: "#000",
                                    paddingHorizontal: 10, borderRadius: 10, shadowOffset: {
                                        width: 0,
                                        height: 2,
                                    }, shadowOpacity: 0.25, shadowRadius: 3.84,
                                    elevation: 5, width: "90%", flex: 1,
                                    marginTop: 10, alignSelf: "center",
                                }}>
                                <View style={{
                                    width: "100%",
                                    backgroundColor: backgroundDarkerColor,
                                    paddingHorizontal: 10,
                                    borderTopRightRadius: 5,
                                    borderBottomRightRadius: 8,
                                    marginBottom: 20,
                                    marginTop: 20,
                                }}>
                                    <View style={{
                                        flexDirection: "row",
                                    }}>
                                        <Text style={{
                                            color: textColor, fontSize: 14,
                                            width: 90, fontWeight: "bold"
                                        }}>
                                            {"Date:"}
                                        </Text>
                                        <Text style={{
                                            color: borderColor, fontSize: 14,
                                            fontWeight: "bold"
                                        }}>
                                            {"2022-03-25 00:00:00"}
                                        </Text>
                                    </View>
                                    <View style={{
                                        flexDirection: "row", marginTop: 10,
                                    }}>
                                        <Text style={{
                                            color: textColor, fontSize: 14,
                                            width: 90, fontWeight: "bold"
                                        }}>
                                            {"Status:"}
                                        </Text>
                                        <Text style={{
                                            color: mainColor, fontSize: 14,
                                            fontWeight: "bold"
                                        }}>
                                            {"Present"}
                                        </Text>
                                    </View>

                                </View>
                            </View>
                        </>
                    }
                </View>
            </ScrollView>
            <View style={{
                height: 10,
                width: "100%",
                backgroundColor: backgroundLighterColor
            }}>

            </View>
        </View>
    )
}

export default AttendenceReport