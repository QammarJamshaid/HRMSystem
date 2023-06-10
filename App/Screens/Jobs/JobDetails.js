import React, { useEffect, useState } from 'react';
import {
    Text, View,
    TouchableOpacity, FlatList
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import BackIcon from '../../Assets/Svgs/BackIcon.svg';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { ScrollView } from 'react-native-gesture-handler';
import { ModalLoader } from '../../Components';
import { ApiServices, useGlobalContext } from '../../Services2';

function JobDetails(props) {
    const { user } = useGlobalContext()
    const [loader, setLoader] = useState({
        visible: true,
        message: 'Loading...'
    })

    const [jobDetail, setJobDetail] = useState(null)
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
        textLightColor,
        backgroundColor, buttoncolor,
        backgroundDarkerColor, borderColor
    } = useSelector(state => state.styles)

    const { control, handleSubmit, reset, formState: { errors } } = useForm({
        mode: 'onChange',
        defaultValues: defaultValues,
    });


    function JobdetailFunc({ item, index }) {
        return (
            item?.field !== 'Jid' ?
                <View style={{
                    // width:"100%",
                    alignSelf: "center",
                    backgroundColor: backgroundDarkerColor,
                    marginTop: 20,
                    // marginBottom: 10,
                    flexDirection: "row",
                    paddingHorizontal: 20,
                }}>
                    <Text style={{
                        color: textColor,
                        fontSize: 12,
                        width: "40%",
                        fontWeight: "bold"
                    }}>
                        {item?.field}
                    </Text>
                    <Text style={{
                        color: borderColor,
                        fontSize: 12,
                        width: "60%",
                        fontWeight: "500"
                    }}>
                        {item?.value}
                    </Text>
                </View>
                : null
        )

    }

    const hideLoader = () => setLoader({
        visible: false,
        message: 'Loading...'
    })

    const getJobDetail = () => {
        const jobId = props?.route?.params?.jobId
        ApiServices.getJobDetail(jobId).then((res) => {
            setJobDetail(res)
            hideLoader()
        })
            .catch(hideLoader)
    }

    const onApplyPress = () => {
        const data = {
            Uid: user?.Uid,
            Jid: props?.route?.params?.jobId,
            name: jobDetail?.Title,
            shortlist: ''
        }
        props.navigation.navigate('ApplyJob', { data })
    }

    useEffect(() => {
        getJobDetail()
    }, [])

    return (
        <View style={{ flex: 1, backgroundColor: backgroundColor }}>
            <ModalLoader
                visible={loader?.visible}
                message={loader?.message}
                useModalLayout={true}
            />
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
                        {"Job Details"}
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
                    <View
                        style={{
                            width: "90%", backgroundColor: "#fff",
                            alignSelf: "center", marginTop: 15,
                            shadowColor: "#000",
                            shadowOffset: { width: 2, height: 2 },
                            shadowOpacity: 0.3,
                            shadowRadius: 2,
                            elevation: 3,
                            borderRadius: 8, paddingBottom: 10,
                            paddingTop: 10
                        }}>
                        {
                            !loader.visible && jobDetail ?
                                <FlatList
                                    data={Object.entries(jobDetail).map(([key, value]) => ({ field: key, value }))}
                                    ListFooterComponent={() => <View style={{ height: 20 }} />}
                                    renderItem={JobdetailFunc}
                                    keyExtractor={(item, index) => index}
                                    showsVerticalScrollIndicator={false}
                                />
                                : null
                        }
                    </View>
                </View>
                <View style={{
                    marginTop: 40,
                    paddingHorizontal: 20,
                }}>
                    <TouchableOpacity
                        onPress={onApplyPress}
                        style={{
                            backgroundColor: mainColor,
                            height: 40,
                            width: "27%",
                            alignSelf: "flex-end",
                            borderRadius: 8,
                            justifyContent: "center"

                        }}
                    >
                        <Text
                            style={{
                                fontSize: 14,
                                color: "#fff",
                                fontWeight: 'bold',
                                alignSelf: "center",
                            }}>
                            Apply
                        </Text>
                    </TouchableOpacity>
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

export default JobDetails