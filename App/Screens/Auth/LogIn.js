import React, { useState } from "react";
import {
    Image,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import { Controller, useForm } from 'react-hook-form';
import EmailIcon from '../../Assets/Svgs/EmailIcon.svg';
import BackIcon from '../../Assets/Svgs/BackIcon.svg';
import PasswordIcon from '../../Assets/Svgs/PasswordIcon.svg';
import Eyeicon from '../../Assets/Svgs/Eyeicon.svg';
import Eyeofficon from '../../Assets/Svgs/EyeOfficon.svg';
import { ModalLoader } from "../../Components";
import { ApiServices, flashSuccessMessage } from "../../Services2";
import { StorageManager, useGlobalContext } from '../../Services2'

function LogIn(props) {
    const { updateUser } = useGlobalContext()
    const { setData, storageKeys } = StorageManager
    const [loginLoader, setLoginLoader] = useState(false)
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

    const hideLoginLoader = () => setLoginLoader(false)

    const handleSignIn = handleSubmit(async data => {
        setLoginLoader(true)
        const { email, password } = data
        ApiServices.login(email, password).then(async (res) => {
            flashSuccessMessage('Logged in')
            await setData(storageKeys.USER, res)
            updateUser(res)
            setLoginLoader(false)
        })
            .catch(hideLoginLoader)
    })


    return (
        <View style={{
            flex: 1, backgroundColor: backgroundColor,
            paddingHorizontal: 30, justifyContent: "space-between"
        }}>
            <ModalLoader
                visible={loginLoader}
            />
            <View>
                <TouchableOpacity
                    onPress={() => props.navigation.goBack()}
                    style={{
                        borderRadius: 40,
                        flexDirection: "row", marginTop: 50
                    }}
                >
                    <BackIcon color={{}} height={16} width={16} style={{}} />
                </TouchableOpacity>
                <View style={{ marginTop: 70 }}>
                    <Text style={{ color: textColor, fontSize: 20, fontWeight: "bold" }}>
                        {"LogIn to Your Account"}
                    </Text>
                </View>
                <View style={{ marginTop: 20 }}>
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
                                        backgroundColor: "#FFFFFF",
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

            </View>
            <View style={{ top: -40 }}>
                <TouchableOpacity
                    onPress={handleSignIn}
                    style={{
                        height: 40, width: "100%", marginTop: 20,
                        backgroundColor: "purple", borderRadius: 5,
                        justifyContent: 'center'
                    }}>
                    <Text style={{
                        fontSize: 16, color: backgroundColor,
                        alignSelf: "center", fontWeight: "bold"
                    }}>
                        {"Log In"}
                    </Text>

                </TouchableOpacity>
                <View style={{
                    flexDirection: "row", justifyContent: "center",
                    alignItems: "center", marginTop: 10
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
                            () => props.navigation.navigate('SignUp')
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
                            SignUp
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default LogIn;