import React, { useEffect, useRef, useState } from "react";
import {
    View, Button, Text, StyleSheet,
    TouchableOpacity, TextInput, Image,
    FlatList,
    ActivityIndicator
} from "react-native";
import { useForm, Controller } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import AssessmentIcon2 from '../../Assets/Svgs/AssessmentIcon2.svg';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Usercircle from '../../Assets/Svgs/Usercircle.svg';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import Experience from "../Profile/Experience";
import { ApiServices } from "../../Services2";
import { hp } from "../../Global";
import { SearchBar } from 'react-native-elements';
import DropDownPicker from 'react-native-dropdown-picker';
import { useGlobalContext } from "../../Services2";

export default function Jobs(props) {


    const defaultValues = {
        Quantity: "",
        MarketValue: "",
    }

    const dispatch = useDispatch()
    const { user } = useGlobalContext()
    const [jobsListItems, setJobsListItems] = useState([])
    const [loader, setLoader] = useState(true)
    const [search, setSearch] = useState('')
    const {
        textColor,
        mainColor,
        borderColor,
        backgroundDarkerColor,
        textLightColor,
        backgroundColor, buttoncolor,
        textOffColor
    } = useSelector(state => state.styles)
    const { control, handleSubmit, reset, formState: { errors } } = useForm({
        mode: 'onChange',
        defaultValues: defaultValues,
    });

    const hideLoader = () => setLoader(false)
    const payStatus = [
        { value: "0", label: "AllJobs" },
        { value: "1", label: "BestMatch" },
    ]
    const [isJobPickerOpen, setIsJobPickerOpen] = useState(false)
    const getAllJobs = () => {
        const colors = ["#5A93BA", "#62CBCF", "#FE931A", "#46DB77", "#F25454", "#1C212D", "#5A93BA"];
        ApiServices.getAllJobs()
            .then((res) => {
                const coloredItems = res.map((item, index) => ({
                    ...item,
                    color: colors[index % colors.length],
                }));
                setJobsListItems(coloredItems);
                setLoader(false);
            })
            .catch(hideLoader);

    }
    const bestmatch = () => {
        const colors = ["#5A93BA", "#62CBCF", "#FE931A", "#46DB77", "#F25454", "#1C212D", "#5A93BA"];
        ApiServices.getBestMatch(user?.Uid)
            .then((res) => {
                const coloredItems = res.map((item, index) => ({
                    ...item,
                    color: colors[index % colors.length],
                }));
                setJobsListItems(coloredItems);
                setLoader(false);
            })
            .catch(hideLoader);

    }



    useEffect(() => {
        getAllJobs()
    }, [])

    function JobsList({ item, index }) {
        return (
            <TouchableOpacity
                onPress={() => props.navigation.navigate("JobDetails", { jobId: item?.Jid })}
                style={{
                    flex: 1, width: "95%", backgroundColor: backgroundDarkerColor,
                    alignSelf: "center", marginTop: 10,
                    shadowColor: "#000",
                    shadowOffset: { width: 2, height: 2 },
                    shadowOpacity: 0.3,
                    shadowRadius: 2,
                    elevation: 3, flexDirection: "row",
                    borderRadius: 8
                }}>
                <View style={{
                    height: 170, width: "3%",
                    backgroundColor: item.color,
                    borderTopLeftRadius: 8, borderBottomLeftRadius: 8
                }}>

                </View>
                <View style={{
                    height: 170, width: "15%",
                    backgroundColor: backgroundDarkerColor, paddingHorizontal: 5
                }}>
                    <AssessmentIcon2 color={item.color} height={30} width={30}
                        style={{ marginTop: 20, marginLeft: 10 }} />
                </View>
                <View style={{
                    height: 170, width: "82%",
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
                            {item?.Title}
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
                            {item?.Location}
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
                        }}>
                            {item?.experience}
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
                            {item?.Salary}
                        </Text>
                    </View>
                    <View style={{
                        flexDirection: "row", marginTop: 10,
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
                            {item?.noofvacancie}
                        </Text>
                    </View>

                </View>

            </TouchableOpacity>
        )

    }

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: backgroundColor
            }}
        >
            <View style={{
                height: getStatusBarHeight() + 50,
                backgroundColor: backgroundColor,
                justifyContent: 'flex-end',
            }}>
                <View
                    style={{
                        marginBottom: 10,
                        flexDirection: "row",
                        justifyContent: "space-between",
                        paddingHorizontal: 20,
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
                        Jobs
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
                zIndex: 100,
                // alignSelf: "flex-end",
                paddingHorizontal: 20, marginTop: 10
            }}>
                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, value } }) => (
                        <DropDownPicker
                            items={payStatus}
                            open={isJobPickerOpen}
                            placeholder="Jobs"
                            containerStyle={{
                            }}
                            style={{
                                backgroundColor: mainColor,
                                color: "#fff",
                                // paddingLeft: 10,
                                borderRadius: 10,
                                minHeight: 40,
                                borderColor: textOffColor,
                                borderWidth: 1,
                                width: 130,
                                padding: 0
                            }}
                            textStyle={{ color: textColor }}
                            labelProps={{
                                style: { color: "#fff", fontWeight: "bold" }
                            }}
                            dropDownContainerStyle={{
                                backgroundColor: "#FFFFFF",
                                borderColor: textOffColor,
                                borderWidth: 1,
                                flex: 1,
                                width: 130,
                            }}
                            theme="DARK"
                            dropDownStyle={{ backgroundColor: mainColor }}
                            setOpen={(open) => {
                                setIsJobPickerOpen(open)
                            }}
                            value={value}
                            setValue={(value) => {
                                if(value(payStatus) == 1) {
                                    bestmatch()
                                } else {
                                    getAllJobs()
                                }
                                onChange(value(payStatus))
                            }}
                            zIndex={30}
                        />
                    )}
                    name="attendence"
                />
                {errors.attendence && <Text style={{ color: "red" }}>Select a attendence Status</Text>
                }
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

            <View
                style={{
                    flex: 1,
                    width: "100%",
                    borderColor: 'red', borderWidth: 0,
                    paddingHorizontal: 10, marginTop: 10
                }
                }
            >
                {
                    loader ?
                        <View style={{ marginTop: hp(30) }}>
                            <ActivityIndicator color={'#000'} />
                        </View>
                        :
                        <FlatList
                            data={jobsListItems.filter(obj => (obj?.Title?.toLowerCase().includes(search.toLowerCase())))}
                            ListFooterComponent={() => <View style={{ height: 20 }} />}
                            renderItem={JobsList}
                            keyExtractor={(item, index) => index}
                            showsVerticalScrollIndicator={false}
                        />
                }
            </View>
            <View style={{ height: 10, width: "100%", backgroundColor: backgroundColor }}>

            </View>
        </View >

    );
}