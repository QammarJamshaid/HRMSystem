import React, { useState } from "react";
import {
    Image,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    ScrollView
} from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import { ChangeUser } from "./Store/authSlice";
import FaceBookIcon from '../../Assets/Svgs/FaceBookIcon.svg'
import { Controller, useForm } from 'react-hook-form';
import EmailIcon from '../../Assets/Svgs/EmailIcon.svg';
import PersonIcon from '../../Assets/Svgs/PersonIcon.svg';
import BackIcon from '../../Assets/Svgs/BackIcon.svg';
import AddressIcon from '../../Assets/Svgs/AddressIcon.svg';
import PasswordIcon from '../../Assets/Svgs/PasswordIcon.svg';
import Eyeicon from '../../Assets/Svgs/Eyeicon.svg';
import Eyeofficon from '../../Assets/Svgs/EyeOfficon.svg';
import GoogleIcon from '../../Assets/Svgs/GoogleIcon.svg';

function SignUp(props) {

    const dispatch = useDispatch()

    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            email: '',
            password: ''
        }
    });

    const {
        mainColor,
        mainLighterColor,
        backgroundColor,
        textColor,
        modalColor,
        textLightColor, buttoncolor,
        orangeColor,
        greenColor,
        lightbluecolor,
        redcolor,
        blackcolor,
        borderColor,
        textDecorationColor,
        textDarkColor
    } = useSelector(state => state.styles)
    const [secureTextEntry, ChangeSecureTextEntry] = useState(true);

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
                flex:1,
                backgroundColor: backgroundColor,
                paddingHorizontal: 30,
                justifyContent: "space-between",
                paddingBottom:50
            }}>
            <View style={{}}>
                <TouchableOpacity
                    onPress={() => props.navigation.goBack()}
                    style={{ marginTop: 50 }}
                >
                    <BackIcon color={{}} height={16} width={16} style={{}} />
                </TouchableOpacity>
                <View style={{ marginTop: 30 }}>
                    <Text style={{ color: textColor, fontSize: 20, fontWeight: "bold" }}>
                        {"Create Your Account"}
                    </Text>
                </View>
                <View>
                    <View style={{ flexDirection: "row", marginTop: 30, alignItems: "center" }}>
                        <PersonIcon color={{}} height={16} width={16} style={{}} />
                        <Text style={{
                            color: textDarkColor, fontSize: 16,
                            fontWeight: "bold", marginLeft: 10
                        }}>
                            {"First Name"}
                        </Text>
                    </View>
                    <View style={{ alignSelf: "center", width: "100%", marginTop: 10 }}>
                        <Controller
                            control={control}
                            rules={{
                                required: true,
                            }}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <TextInput
                                    onChangeText={onChange}
                                    onBlur={onBlur}
                                    value={value}
                                    // error={errors.fullName}
                                    placeholder="First Name"
                                    placeholderTextColor={"lightgray"}
                                    style={{
                                        backgroundColor: "#fff",
                                        zIndex: 10,
                                        height: 40,
                                        borderRadius: 20,
                                        paddingLeft: 13,
                                        color: textColor,
                                        fontSize: 13,
                                        width: "100%",
                                        // borderWidth: 0.5,
                                        // borderColor: "lightgray"
                                    }}
                                />
                            )}
                            name="firstName"
                            defaultValue=""
                        />
                    </View>
                </View>
                <View>
                    <View style={{ flexDirection: "row", marginTop: 20, alignItems: "center" }}>
                        <PersonIcon color={{}} height={16} width={16} style={{}} />
                        <Text style={{
                            color: textDarkColor, fontSize: 16,
                            fontWeight: "bold", marginLeft: 10
                        }}>
                            {"Last Name"}
                        </Text>
                    </View>
                    <View style={{ alignSelf: "center", width: "100%", marginTop: 10 }}>
                        <Controller
                            control={control}
                            rules={{
                                required: true,
                            }}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <TextInput
                                    onChangeText={onChange}
                                    onBlur={onBlur}
                                    value={value}
                                    // error={errors.fullName}
                                    placeholder="Last Name"
                                    placeholderTextColor={"lightgray"}
                                    style={{
                                        backgroundColor: "#fff",
                                        zIndex: 10,
                                        height: 40,
                                        borderRadius: 20,
                                        paddingLeft: 13,
                                        color: textColor,
                                        fontSize: 13,
                                        width: "100%",
                                        // borderWidth: 0.5,
                                        // borderColor: "lightgray"
                                    }}
                                />
                            )}
                            name="lastName"
                            defaultValue=""
                        />
                    </View>
                </View>
                <View>
                    <View style={{ flexDirection: "row", marginTop: 20, alignItems: "center" }}>
                        <EmailIcon color={{}} height={16} width={16} style={{}} />
                        <Text style={{
                            color: textDarkColor, fontSize: 16,
                            fontWeight: "bold", marginLeft: 10
                        }}>
                            {"Email"}
                        </Text>
                    </View>
                    <View style={{ alignSelf: "center", width: "100%", marginTop: 10 }}>
                        <Controller
                            control={control}
                            rules={{
                                required: true,
                            }}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <TextInput
                                    onChangeText={onChange}
                                    onBlur={onBlur}
                                    value={value}
                                    // error={errors.fullName}
                                    placeholder="Email"
                                    placeholderTextColor={"lightgray"}
                                    style={{
                                        backgroundColor: "#fff",
                                        zIndex: 10,
                                        height: 40,
                                        borderRadius: 20,
                                        paddingLeft: 13,
                                        color: textColor,
                                        fontSize: 13,
                                        width: "100%",
                                        // borderWidth: 0.5,
                                        // borderColor: "lightgray"
                                    }}
                                />
                            )}
                            name="email"
                            defaultValue=""
                        />
                    </View>
                </View>
                <View>
                    <View style={{ flexDirection: "row", marginTop: 20, alignItems: "center" }}>
                        <AddressIcon color={{}} height={16} width={16} style={{}} />
                        <Text style={{
                            color: textDarkColor, fontSize: 16,
                            fontWeight: "bold", marginLeft: 10
                        }}>
                            {"Address"}
                        </Text>
                    </View>
                    <View style={{ alignSelf: "center", width: "100%", marginTop: 10 }}>
                        <Controller
                            control={control}
                            rules={{
                                required: true,
                            }}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <TextInput
                                    onChangeText={onChange}
                                    onBlur={onBlur}
                                    value={value}
                                    // error={errors.fullName}
                                    placeholder="Address"
                                    placeholderTextColor={"lightgray"}
                                    style={{
                                        backgroundColor: "#fff",
                                        zIndex: 10,
                                        height: 40,
                                        borderRadius: 20,
                                        paddingLeft: 13,
                                        color: textColor,
                                        fontSize: 13,
                                        width: "100%",
                                        // borderWidth: 0.5,
                                        // borderColor: "lightgray"
                                    }}
                                />
                            )}
                            name="address"
                            defaultValue=""
                        />
                    </View>
                </View>
                <View>
                    <View style={{ flexDirection: "row", marginTop: 20, alignItems: "center" }}>
                        <PasswordIcon color={{}} height={16} width={16} style={{}} />
                        <Text style={{
                            color: textDarkColor, fontSize: 16,
                            fontWeight: "bold", marginLeft: 10
                        }}>
                            {"Password"}
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 20, alignSelf: "center", width: "100%", }}>
                        <View style={{ borderColor: 'red', borderWidth: 0, width: "75%", }}>
                            <Controller
                                control={control}
                                rules={{
                                    required: true,
                                }}
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <TextInput
                                        onChangeText={(text) => onChange(text)}
                                        value={value}
                                        onBlur={onBlur}
                                        error={errors.fullName}
                                        placeholder="Password"
                                        secureTextEntry={secureTextEntry}
                                        placeholderTextColor={"lightgray"}
                                        style={{
                                            backgroundColor: "#fff",
                                            zIndex: 10,
                                            height: 40,
                                            borderRadius: 20,
                                            paddingLeft: 13,
                                            color: textColor,
                                            fontSize: 13,
                                            width: "100%",
                                        }}
                                    />
                                )}
                                name="password"
                                defaultValue=""
                            />
                        </View>
                        <View
                            style={{
                                backgroundColor: "#fff",
                                zIndex: 10,
                                height: 40,
                                borderTopRightRadius: 20,
                                borderBottomRightRadius: 20,
                                fontSize: 18,
                                width: "28%",
                                alignItems: "flex-end",
                                right: 10,
                                borderLeftWidth: 0,
                                justifyContent: "center"
                            }}>
                            <TouchableOpacity
                                onPress={() => ChangeSecureTextEntry(!secureTextEntry)}
                            >
                                {secureTextEntry ? (
                                    // <Ionicons
                                    //     name="ios-eye-outline"
                                    //     size={25}
                                    //     color={"black"}
                                    // />
                                    <Eyeicon color={borderColor} height={20} width={20} style={{ marginRight: 10 }} />
                                ) : (
                                    <Eyeofficon color={borderColor} height={20} width={20} style={{ marginRight: 10 }} />
                                )}
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>

            <View style={{ top: 20 }}>
                <TouchableOpacity
                    onPress={
                        () => props.navigation.navigate('EnterPhoneNo')
                    }
                    style={{
                        height: 40, width: "100%", marginTop: 20,
                        backgroundColor: "purple", borderRadius: 5,
                        justifyContent: 'center'
                    }}>
                    <Text style={{
                        fontSize: 16, color: backgroundColor,
                        alignSelf: "center", fontWeight: "bold"
                    }}>
                        {"Get Started"}
                    </Text>

                </TouchableOpacity>
                <View style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    marginTop: 10,
                    alignItems: "center"
                }}>
                    <View style={{ justifyContent: "center" }}>
                        <Text
                            style={{
                                fontSize: 16,
                                color: textDarkColor,
                                fontWeight: '500',
                            }}
                        >
                            Already have an Account?{' '}
                        </Text>
                    </View>
                    <TouchableOpacity
                        style={{ justifyContent: "center" }}
                        onPress={
                            () => props.navigation.navigate('LogIn')
                        }
                    >
                        <Text
                            style={{
                                fontSize: 18,
                                color: mainColor,
                                fontWeight: 'normal',
                                textDecorationLine: 'underline',
                                fontWeight: 'bold'
                            }}>
                            LogIn
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
};

export default SignUp;