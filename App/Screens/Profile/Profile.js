import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { ScrollView } from "react-native-gesture-handler";
import CamerIcon from '../../Assets/Svgs/CamerIcon.svg';
import EditIcon from '../../Assets/Svgs/EditIcon.svg';
import { ApiServices, StorageManager, flashSuccessMessage, useGlobalContext } from '../../Services2'
import { wp } from "../../Global";
import { launchImageLibrary } from 'react-native-image-picker';
import AntDesign from 'react-native-vector-icons/AntDesign'
import { ModalLoader } from "../../Components";


export default function Profile(props) {
    const { user, updateUser } = useGlobalContext()
    const { setData, storageKeys } = StorageManager
    const [saveChangeLoader, setSaveChangeLoader] = useState({
        visible: false,
        message: ''
    })

    const defaultValues = {
        Quantity: "",
        MarketValue: "",
    }


    const dispatch = useDispatch()

    const {
        textColor,
        mainColor,
        backgroundDarkerColor,
        backgroundColor,
        textLightColor, greenColor,
        textBluecolor, buttoncolor
    } = useSelector(state => state.styles)
    const { control, handleSubmit, reset, formState: { errors } } = useForm({
        mode: 'onChange',
        defaultValues: defaultValues,
    });

    const hideSaveChangeLoader = () => {
        setSaveChangeLoader({
            visible: false,
            message: ''
        })
    }

    const onImageEditPress = () => {
        const options = {
            mediaType: 'photo'
        }
        launchImageLibrary(options, (res) => {
            if(!res.didCancel) {
                setSaveChangeLoader({
                    visible: true,
                    message: 'Updating Image...'
                })

                const uri = res?.assets[0]?.uri
                user.image = uri

                var formdata = new FormData();
                if(user?.firstName) {
                    formdata.append("Fname", user?.Fname);
                }
                if(user?.Lname) {
                    formdata.append("Lname", user?.Lname);
                }
                if(user?.cnic) {
                    formdata.append("cnic", user?.cnic);
                }
                if(user?.mobile) {
                    formdata.append("mobile", user?.mobile);
                }
                if(user?.address) {
                    formdata.append("address", user?.address);
                }
                if(user?.Uid) {
                    formdata.append("Uid", user?.Uid);
                }
                if(user?.email) {
                    formdata.append("email", user?.email);
                }
                if(user?.dob) {
                    formdata.append("dob", user?.dob);
                }
                if(user?.role) {
                    formdata.append("role", user?.role);
                }
                if(user?.password) {
                    formdata.append("password", user?.password)
                }
                if(uri) {
                    formdata.append("image", uri);
                }
                formdata.append("gender", 'gender');

                ApiServices.updateUser(formdata).then(async () => {
                    user.Fname = firstName,
                        user.Lname = lastName,
                        user.cnic = cnic,
                        user.mobile = phoneNumber,
                        user.dob = dob,
                        user.address = address,
                        user.image = JSON.stringify(uri)
                    updateUser(user)
                    await setData(storageKeys.USER, user)
                    hideSaveChangeLoader()
                })
                    .catch(hideSaveChangeLoader)
            }
        })
    }


    return (
        <View
            style={{
                flex: 1,
                backgroundColor: backgroundColor
            }}
        >
            <ModalLoader
                visible={saveChangeLoader.visible}
                message={saveChangeLoader.message}
            />
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ width: "100%", paddingBottom: 50 }}>
                <View style={{
                    height: 140, width: "100%",
                    backgroundColor: backgroundColor,
                    justifyContent: "center", alignItems: "center"
                }}>
                    <TouchableOpacity style={{
                        height: 100, width: 100,
                        borderRadius: 100, backgroundColor: "gray",
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                        onPress={onImageEditPress}
                    >
                        {
                            user?.image ?
                                <Image
                                    source={{ uri: user?.image }}
                                    style={{
                                        width: 100, height: 100,
                                        alignSelf: "center", borderRadius: 100,
                                    }}
                                />
                                :
                                <AntDesign
                                    name="user"
                                    color="#fff" size={wp(15)}
                                />
                        }
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={onImageEditPress}
                        style={{
                            height: 35, width: 35, borderRadius: 100,
                            justifyContent: "center", alignItems: "center",
                            position: "absolute", top: 90,
                            left: 200, backgroundColor: mainColor
                        }}>
                        <CamerIcon color={mainColor} height={25} width={25} style={{}} />
                    </TouchableOpacity>
                </View>

                <View style={{ paddingHorizontal: 20, backgroundColor: backgroundColor, }}>
                    <TouchableOpacity
                        // onPress={() => props.navigation.navigate('EditProfile')}
                        style={{
                            flex: 1,
                            backgroundColor: "#fff", borderColor: 'red', borderWidth: 0,
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 2,
                            }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5,
                            marginTop: 10, justifyContent: "center", borderRadius: 10

                        }}>
                        <View style={{ paddingHorizontal: 20, marginBottom: 20, justifyContent: "center", marginTop: 10 }}>
                            <View style={{
                                flexDirection: "row", marginTop: 10, zIndex: 30,
                                alignItems: "center", justifyContent: "space-between"
                            }}>
                                <Text style={{ fontSize: 16, fontWeight: 'bold', color: textColor, }}>
                                    {"MANAGE PROFILE"}
                                </Text>
                                <TouchableOpacity
                                    onPress={() => props.navigation.navigate('EditProfile')}
                                    style={{
                                        height: 35, width: 35, borderRadius: 100, justifyContent: "center",
                                        alignItems: "center", backgroundColor: "lightgray"
                                    }}>
                                    <EditIcon color={mainColor} height={18} width={18} style={{}} />
                                </TouchableOpacity>
                            </View>
                            <View style={{ flexDirection: "row", marginTop: 20, }}>
                                <Text style={{ fontSize: 14, fontWeight: '500', color: textColor, opacity: 0.4, width: 120 }}>
                                    First Name:
                                </Text>
                                <View style={{ justifyContent: "center", }}>
                                    <Text style={{ fontSize: 14, fontWeight: '500', color: textColor, opacity: 0.6, width: 50 }}>
                                        {":"}
                                    </Text>
                                </View>
                                <View style={{ justifyContent: "center", }}>
                                    <Text style={{ fontSize: 14, fontWeight: '500', color: textColor, }}>
                                        {user?.Fname}
                                    </Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: "row", marginTop: 20, }}>
                                <Text style={{ fontSize: 14, fontWeight: '500', color: textColor, opacity: 0.4, width: 120 }}>
                                    Last Name:
                                </Text>
                                <View style={{ justifyContent: "center", }}>
                                    <Text style={{ fontSize: 14, fontWeight: '500', color: textColor, opacity: 0.6, width: 50 }}>
                                        {":"}
                                    </Text>
                                </View>
                                <View style={{ justifyContent: "center", }}>
                                    <Text style={{ fontSize: 14, fontWeight: '500', color: textColor, }}>
                                        {user?.Lname}
                                    </Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: "row", marginTop: 20, }}>
                                <Text style={{ fontSize: 14, fontWeight: '500', color: textColor, opacity: 0.4, width: 120 }}>
                                    Email:
                                </Text>
                                <View style={{ justifyContent: "center" }}>
                                    <Text style={{ fontSize: 14, fontWeight: '500', color: textColor, opacity: 0.6, width: 50 }}>
                                        {":"}
                                    </Text>
                                </View>
                                <View style={{ justifyContent: "center", }}>
                                    <Text style={{ fontSize: 14, fontWeight: '500', color: textColor, }}>
                                        {user?.email}
                                    </Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: "row", marginTop: 20, }}>
                                <Text style={{ fontSize: 14, fontWeight: '500', color: textColor, opacity: 0.4, width: 120 }}>
                                    Phone :
                                </Text>
                                <View style={{ justifyContent: "center" }}>
                                    <Text style={{ fontSize: 14, fontWeight: '500', color: textColor, opacity: 0.6, width: 50 }}>
                                        {":"}
                                    </Text>
                                </View>
                                <View style={{ justifyContent: "center", }}>
                                    <Text style={{ fontSize: 14, fontWeight: '500', color: textColor, }}>
                                        {user?.mobile}
                                    </Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: "row", marginTop: 20, }}>
                                <Text style={{ fontSize: 14, fontWeight: '500', color: textColor, opacity: 0.4, width: 120 }}>
                                    Address:
                                </Text>
                                <View style={{ justifyContent: "center" }}>
                                    <Text style={{ fontSize: 14, fontWeight: '500', color: textColor, opacity: 0.6, width: 50 }}>
                                        {":"}
                                    </Text>
                                </View>
                                <View style={{ justifyContent: "center", }}>
                                    <Text style={{ fontSize: 14, fontWeight: '500', color: textColor, width: wp(45) }} numberOfLines={3}>
                                        {user?.address}
                                    </Text>
                                </View>
                            </View>
                        </View>


                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View >

    );
}