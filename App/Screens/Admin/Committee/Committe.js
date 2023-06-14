import React from "react";
import { useForm } from 'react-hook-form';
import {
    Text,
    TouchableOpacity, View
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { useDispatch, useSelector } from 'react-redux';
import Usercircle from '../../../Assets/Svgs/Usercircle.svg';
import { useGlobalContext } from '../../../Services2';
import {
    useDeleteCommitteMutation,
    useGetCommittesQuery
} from "./Services/CommitteeApi";


function Committe(props) {

    const defaultValues = {
        Quantity: "",
        MarketValue: "",
    }

    const dispatch = useDispatch()
    const { user, updateUser } = useGlobalContext()
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
        buttoncolor,
        backgroundDarkerColor,
        greenColor,
        lightbluecolor,
        redcolor,
        borderColor,
        blackcolor
    } = useSelector(state => state.styles)

    const {
        data = [],
        isFetching,
    } = useGetCommittesQuery();
    const jobDetailsItem = [
        {
            Title: "Job Title :",
            value: "React Native Developer",
        },


    ]

    console.log("useDeleteCommitteMutation===>", useDeleteCommitteMutation)

    const [
        deleteCommitte,
        { isLoading }
    ] = useDeleteCommitteMutation()

    function AllAssets() {
        // return data
        // .filter(obj => obj.jobName == isJobPickerOpen)
        // .map((item, key) => {

        return data.map((item, key) => {

            return (
                <>
                    <TouchableOpacity
                        onPress={() => props.navigation.navigate("CommitteDetail", { item })}
                        key={key}
                        style={{
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
                                color: textColor,
                                fontSize: 16,
                                width: "50%",
                                fontWeight: "bold"
                            }}>
                                {"Committee Title:"}
                            </Text>
                            <Text style={{
                                color: "red",
                                fontSize: 14,
                                width: "50%",
                                fontWeight: "500"
                            }}>
                                {item.CommitteeTitle}
                            </Text>
                        </View>
                        <TouchableOpacity
                            // onPress={() =>
                            //     deleteCommitte(item.CommitteeId)
                            // }
                            onPress={() => props.navigation.navigate("CommitteDetail", { item })}
                            style={{
                                backgroundColor: mainColor,
                                height: 30,
                                width: 90,
                                // marginRight: 10,
                                justifyContent: "center",
                                borderRadius: 8,
                                marginBottom: 10,
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
                                    {/* Delete */}
                               View
                            </Text>
                        </TouchableOpacity>
                    </TouchableOpacity>

                </>
            )
        })
    }

    return (
        <>
            <View style={{ flex: 1, backgroundColor: backgroundColor }}>

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
                            Committee
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
                    contentContainerStyle={{
                        backgroundColor: backgroundColor,
                        paddingHorizontal: 10,
                        paddingBottom: 100
                    }}>
                    <View style={{
                        justifyContent: "space-between",
                        marginTop: 20, width: "95%", alignSelf: "center"
                    }}>
                        {/* <TouchableOpacity
                            onPress={() => props.navigation.navigate("CommitteHead")}
                            style={{
                                backgroundColor: mainColor,
                                height: 35,
                                width: 120,
                                // marginRight: 10,
                                justifyContent: "center",
                                borderRadius: 8,
                                // marginTop: 20,
                                alignSelf: "flex-end"

                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 12,
                                    color: "#fff",
                                    fontWeight: 'bold',
                                    alignSelf: "center",
                                }}>
                                Add Committee
                            </Text>
                        </TouchableOpacity> */}

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

export default Committe;