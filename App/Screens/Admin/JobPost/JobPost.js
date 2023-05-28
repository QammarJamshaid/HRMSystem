import React, { useEffect, useRef, useState } from "react";
import {
    View, Button, Text, StyleSheet,
    TouchableOpacity, TextInput, Image,
    FlatList, ScrollView, ActivityIndicator
} from "react-native";
import { useForm, Controller } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import AssessmentIcon2 from '../../../Assets/Svgs/AssessmentIcon2.svg';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Usercircle from '../../../Assets/Svgs/Usercircle.svg';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import AddJobModal from "./AddJobModal";
import { changeAddJobModal } from "./Store/JobPostSlice";
import { useGetJobPostedQuery } from "./Services/JobPostApi";

export default function JobPost(props) {

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
    const {
        data = [],
        isFetching,
    } = useGetJobPostedQuery();

    const [jobList, setJobList] = useState([])
    const [loader, setLoader] = useState(true)
    console.log("data::::::::::::::::", data)
    const jobsListItems = [
        {
            title: "React Native developer",
            location: "Rawalpindi",
            salary: "40K to 70K",
            experience: "1Year",
            color: "#5A93BA",
            vacancy: "(02)"
        },
        {
            title: "IOS Developer",
            location: "Rawalpindi",
            salary: "40K to 70K",
            experience: "1Year",
            color: "#62CBCF",
            vacancy: "(02)"
        },
        {
            title: "WEB Developer",
            location: "Rawalpindi",
            salary: "40K to 70K",
            experience: "1Year",
            color: "#FE931A",
            vacancy: "(02)"
        },
        {
            title: "Software engineer",
            location: "Rawalpindi",
            salary: "40K to 70K",
            experience: "1Year",
            color: "#46DB77",
            vacancy: "(02)"
        },
        {
            title: "MobileApp Developer",
            location: "Rawalpindi",
            salary: "40K to 70K",
            experience: "1Year",
            color: "#F25454",
            vacancy: "(02)"
        },
        {
            title: "PHP developer",
            location: "Rawalpindi",
            salary: "40K to 70K",
            experience: "1Year",
            color: "#1C212D",
            vacancy: "(02)"
        },
        {
            title: "Python Developer",
            location: "Rawalpindi",
            salary: "40K to 70K",
            experience: "1Year",
            color: "#5A93BA",
            vacancy: "(02)"
        },

    ]

    function JobsList({ item, index }) {

        return (
            <TouchableOpacity
                onPress={() => props.navigation.navigate("JobPostdetail")}
                style={{
                    flex: 1, width: "95%",
                    backgroundColor: backgroundDarkerColor,
                    alignSelf: "center", marginTop: 20,
                    shadowColor: "#000",
                    shadowOffset: { width: 2, height: 2 },
                    shadowOpacity: 0.3,
                    shadowRadius: 2,
                    elevation: 3, flexDirection: "row",
                    borderRadius: 8
                }}>
                <View style={{
                    width: "3%",
                    backgroundColor: item.color,
                    borderTopLeftRadius: 8, borderBottomLeftRadius: 8
                }}>

                </View>
                <View style={{
                    width: "15%",
                    backgroundColor: backgroundDarkerColor,
                    paddingHorizontal: 5
                }}>
                    <AssessmentIcon2 color={item.color} height={30} width={30}
                        style={{ marginTop: 20, marginLeft: 10 }} />
                </View>
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

            </TouchableOpacity>
        )

    }

    const getAllJobs = () => {
        if (data && data.length !== 0) {
           const colors = ["#5A93BA", "#62CBCF", "#FE931A", "#46DB77", "#F25454", "#1C212D", "#5A93BA"];
                    const coloredItems = data.map((item, index) => ({
                        ...item,
                        color: colors[index % colors.length],
                    }));
                    setJobList(coloredItems);
                    setLoader(false)
        }
        else{
            setLoader(false)
        }
    }


    useEffect(() => {
        getAllJobs()
    },[data])

    return (
        <>
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
                            alignItems: "center"
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
                            ALL  Jobs
                        </Text>
                        <View style={{
                            flexDirection: "row", justifyContent: "center",
                            alignItems: "center"
                        }}>
                            <Usercircle color={'#fff'} height={30} width={30} style={{}} />
                        </View>


                    </View>
                </View>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{
                        flex: 1,
                        width: "100%",
                        borderColor: 'red', borderWidth: 0,
                        paddingHorizontal: 10,
                    }
                    }
                >
                    <TouchableOpacity
                        onPress={() => {
                            console.log("sdfs")
                            dispatch(changeAddJobModal(true))
                        }}
                        style={{
                            backgroundColor: mainColor,
                            height: 40,
                            width: 120,
                            marginRight: 10,
                            justifyContent: "center",
                            borderRadius: 8,
                            marginTop: 20,
                            alignSelf: "flex-end"

                        }}
                    >
                        <Text
                            style={{
                                fontSize: 14,
                                color: "#fff",
                                fontWeight: 'bold',
                                alignSelf: "center",
                            }}>
                            Add Job
                        </Text>
                    </TouchableOpacity>
                    {
                        loader ?
                        <View style={{justifyContent:"center",alignItems:"center"}}>
                            <ActivityIndicator color={mainColor} size={40}/>
                        </View>
                    :
                    <FlatList
                        data={jobList}
                        ListFooterComponent={() => <View style={{ height: 20 }} />}
                        renderItem={JobsList}
                        keyExtractor={(item, index) => index}
                        showsVerticalScrollIndicator={false}
                    />
}
                </ScrollView>
                <View style={{ height: 10, width: "100%", backgroundColor: backgroundColor }}>

                </View>
            </View >
            <AddJobModal />
        </>
    );
}