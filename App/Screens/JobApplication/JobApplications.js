import React, { useState } from "react";
import { useForm } from 'react-hook-form';
import {
    Text,
    TouchableOpacity, View
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { useDispatch, useSelector } from 'react-redux';
import Delete from '../../Assets/Svgs/Delete.svg';
import EditIcon from '../../Assets/Svgs/EditIcon.svg';
import Usercircle from '../../Assets/Svgs/Usercircle.svg';

function JobApplications(props) {

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
            jobName: 'React native developer',
            address: "Mon, Wed, Fri",
            textcolor: mainColor,
            color: "#5FAF67",
            status: "Pending",
        },
        {
            jobName: 'Ios Developer',
            address: "Mon, Wed, Fri",
            textcolor: greenColor,
            state: "California",
            color: "#5FAF67",
            status: "Approved",
        },
        {
            jobName: 'Web Developer',
            address: "Mon, Wed, Fri",
            textcolor: greenColor,
            state: "California",
            color: "#FD3E3E",
            status: "Rejected",
        },


    ];
    function AllAssets() {

        return data.map((item, key) => {

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
                        }}>
                            <Text style={{
                                color: textLightColor,
                                fontSize: 12,
                                width: "40%",
                                fontWeight: "500"
                            }}>
                                {"Job Name"}
                            </Text>
                            <Text style={{
                                color: borderColor,
                                fontSize: 12,
                                width: "60%",
                                fontWeight: "500"
                            }}>
                                {item.jobName}
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
                                {"Status"}
                            </Text>
                            <Text style={{
                                color: item.color,
                                fontSize: 12,
                                width: "60%",
                                fontWeight: "500"
                            }}>
                                {item.status}
                            </Text>
                        </View>
                    </View>

                </>
            )
        })
    }

    return (
        <>
            <View style={{ flex: 1, backgroundColor: backgroundColor }}>
                <ScrollView
                    contentContainerStyle={{
                        backgroundColor: backgroundColor,
                        paddingHorizontal: 10,
                        paddingBottom: 100
                    }}>
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
                               Jobs Applications
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
                        justifyContent: "space-between",
                        marginTop: 30, width: "95%", alignSelf: "center"
                    }}>
                
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
        </>
    );
};

export default JobApplications;