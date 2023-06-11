import React, { useState } from "react";
import {
    Image,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    ScrollView,
    ActivityIndicator,
    StyleSheet
} from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import { Controller, useForm } from 'react-hook-form';
import EmailIcon from '../../Assets/Svgs/EmailIcon.svg';
import PersonIcon from '../../Assets/Svgs/PersonIcon.svg';
import BackIcon from '../../Assets/Svgs/BackIcon.svg';
import AddressIcon from '../../Assets/Svgs/AddressIcon.svg';
import PasswordIcon from '../../Assets/Svgs/PasswordIcon.svg';
import Eyeicon from '../../Assets/Svgs/Eyeicon.svg';
import Eyeofficon from '../../Assets/Svgs/EyeOfficon.svg';
import GoogleIcon from '../../Assets/Svgs/GoogleIcon.svg';
import { useAddNewUserMutation } from "./Services/authApi";
import Toast from 'react-native-toast-message';

function SignUp(props) {

    const dispatch = useDispatch()

    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            cnicNo: '',
            mobileNo: '',
            address: '',
            dob: '',
            role: '',
            gender: '',
        }
    });
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: "center"
        },
        horizontal: {
            flexDirection: "row",
            justifyContent: "space-around",
            padding: 10
        }
    });

    const {
        mainColor,
        mainLighterColor,
        backgroundColor,
        textColor,
        modalColor,
        textLighterColor, buttoncolor,
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
    const [addNewUser, { isLoading }] = useAddNewUserMutation()
    const handleSignUp = handleSubmit(async data => {

        console.log("data?.countryId===>", data?.countryId)

        let response = await addNewUser({
            ...data,
        })

        const { error, data: respData } = response || {}

        if(error)
            Toast.show({
                text1: 'Success Message',
                text2: error.data.message,
                position: 'top',
            })
        props.navigation.navigate("LogIn")
        if(respData)
            Toast.show({
                text1: 'Registeration failed!',
                text2: error.data.message,
                position: 'top'
            })
    })

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: backgroundColor,
                paddingHorizontal: 30,
                justifyContent: "space-between",
                marginBottom: 20,
                // marginTop:20

            }}>

            {/* <TouchableOpacity
                    onPress={() => props.navigation.goBack()}
                    style={{ marginTop: 50 }}
                >
                    <BackIcon color={{}} height={16} width={16} style={{}} />
                </TouchableOpacity> */}
            <View style={{ marginTop: 50, marginBottom: 20 }}>
                <Text style={{ color: textColor, fontSize: 20, fontWeight: "bold" }}>
                    {"Create Your Account"}
                </Text>
            </View>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingBottom: 50,
                    marginTop: 20,
                }}>
                <View>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
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
                                        borderWidth: 0.5,
                                        borderColor: "lightgray"
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
                                        borderWidth: 0.5,
                                        borderColor: "lightgray"
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
                                        borderWidth: 0.5,
                                        borderColor: "lightgray"
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
                        <EmailIcon color={{}} height={16} width={16} style={{}} />
                        <Text style={{
                            color: textDarkColor, fontSize: 16,
                            fontWeight: "bold", marginLeft: 10
                        }}>
                            {"Cnic No"}
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
                                    placeholder="cnic"
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
                                        borderWidth: 0.5,
                                        borderColor: "lightgray"
                                    }}
                                />
                            )}
                            name="cnicNo"
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
                            {"Mobile"}
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
                                        borderWidth: 0.5,
                                        borderColor: "lightgray"
                                    }}
                                />
                            )}
                            name="mobileNo"
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
                                        borderWidth: 0.5,
                                        borderColor: "lightgray"
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
                        <AddressIcon color={{}} height={16} width={16} style={{}} />
                        <Text style={{
                            color: textDarkColor, fontSize: 16,
                            fontWeight: "bold", marginLeft: 10
                        }}>
                            {"Date Of Birth"}
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
                                    placeholder="dob"
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
                                        borderWidth: 0.5,
                                        borderColor: "lightgray"
                                    }}
                                />
                            )}
                            name="dob"
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
                            {"Role"}
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
                                    placeholder="role"
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
                                        borderWidth: 0.5,
                                        borderColor: "lightgray"
                                    }}
                                />
                            )}
                            name="role"
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
                            {"Gender"}
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
                                    placeholder="gender"
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
                                        borderWidth: 0.5,
                                        borderColor: "lightgray"
                                    }}
                                />
                            )}
                            name="gender"
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
                                            borderWidth: 0.5,
                                            borderColor: "lightgray",
                                            borderTopRightRadius: 0,
                                            borderBottomRightRadius: 0,
                                            borderRightWidth: 0
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
                                borderTopLeftRadius: 0,
                                borderBottomLeftRadius: 0,
                                borderLeftWidth: 0,
                                justifyContent: "center",
                                borderWidth: 0.5,
                                borderColor: "lightgray",
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
                <View style={{ top: 20 }}>
                    <TouchableOpacity
                        onPress={() => handleSignUp()}
                        style={{
                            height: 40, width: "100%", marginTop: 20,
                            backgroundColor: "purple", borderRadius: 5,
                            justifyContent: 'center'
                        }}>
                        {isLoading ?
                            <View style={[styles.container, styles.horizontal]}>
                                <ActivityIndicator size="large" color={"red"} />
                            </View>
                            :
                            <Text style={{
                                fontSize: 16, color: backgroundColor,
                                alignSelf: "center", fontWeight: "bold"
                            }}>
                                {"SignUp"}
                            </Text>
                        }
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

        </View>
    );
};

export default SignUp;