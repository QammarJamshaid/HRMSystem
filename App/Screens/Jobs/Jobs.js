import React, { useEffect, useRef, useState } from "react";
import {
    View, Button, Text, StyleSheet,
    TouchableOpacity, TextInput, Image,
    FlatList
} from "react-native";
import { useForm, Controller } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import AssessmentIcon2 from '../../Assets/Svgs/AssessmentIcon2.svg';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Usercircle from '../../Assets/Svgs/Usercircle.svg';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import Experience from "../Profile/Experience";
import { ApiServices } from "../../Services2";

export default function Jobs(props) {

    const [jobsListItems, setJobsListItems] = useState([])
    const [loader, setLoader] = useState(true)

    const defaultValues = {
        Quantity: "",
        MarketValue: "",
    }

    const dispatch = useDispatch()

    const {
        textColor,
        mainColor,
        borderColor,
        backgroundDarkerColor,
        textLightColor,
        backgroundColor, buttoncolor
    } = useSelector(state => state.styles)
    const { control, handleSubmit, reset, formState: { errors } } = useForm({
        mode: 'onChange',
        defaultValues: defaultValues,
    });

    const hideLoader = () => setLoader(false)

    const getAllJobs = () => {
        //@Saad do this later
        // ApiServices.getAllJobs().then((res) => {
        //     setJobsListItems(res)
        //     setLoader(false)
        // })
        //     .catch(hideLoader)
    }

    useEffect(() => {
        getAllJobs()
    }, [])

    function JobsList({ item, index }) {

        return (
            <TouchableOpacity
                onPress={() => props.navigation.navigate("JobDetails")}
                style={{
                    flex: 1, width: "95%", backgroundColor: backgroundDarkerColor,
                    alignSelf: "center", marginTop: 20,
                    shadowColor: "#000",
                    shadowOffset: { width: 2, height: 2 },
                    shadowOpacity: 0.3,
                    shadowRadius: 2,
                    elevation: 3, flexDirection: "row",
                    borderRadius: 8
                }}>
                {/* <View style={{
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
                            {item.title}
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
                            {item.location}
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
                            {item.salary}
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
                            {item.vacancy}
                        </Text>
                    </View>

                </View> */}

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
            <View
                style={{
                    flex: 1,
                    width: "100%",
                    borderColor: 'red', borderWidth: 0,
                    paddingHorizontal: 10, marginTop: 10
                }
                }
            >
                <FlatList
                    data={jobsListItems}
                    ListFooterComponent={() => <View style={{ height: 20 }} />}
                    renderItem={JobsList}
                    keyExtractor={(item, index) => index}
                    showsVerticalScrollIndicator={false}
                />
            </View>
            <View style={{ height: 10, width: "100%", backgroundColor: backgroundColor }}>

            </View>
        </View >

    );
}