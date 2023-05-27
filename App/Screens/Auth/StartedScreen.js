import React, { useState } from "react";
import {
    Image,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import { ChangeUser } from "./Store/authSlice";
// import AppLogo from '../../Assets/Svgs/AppLogo.svg'
import { Controller, useForm } from 'react-hook-form';
import Eyeicon from '../../Assets/Svgs/Eyeicon.svg';
import Eyeofficon from '../../Assets/Svgs/EyeOfficon.svg';

function Login(props) {

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
        textDecorationColor
    } = useSelector(state => state.styles)
    const [secureTextEntry, ChangeSecureTextEntry] = useState(true);

    return (
        <View style={{
            flex: 1, backgroundColor: backgroundColor,
            paddingHorizontal: 30, alignItems: "center", justifyContent: "center"
        }}>

            <View
                style={{
                    height: 200,
                    width: 200,
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 10,
                    marginBottom: 20,
                    alignSelf: "center", justifyContent: "center"
                }}
            >
                <Image
                    // resizeMode="contain"
                    source={require('../../Assets/Images/HRMLogoImg.png')}
                    style={{ width: 170, height: 170, borderRadius: 100 }}
                />
                {/* <AppLogo color={'#fff'} height={85} width={85} style={{ marginTop: 5 }} /> */}
                <View style={{ position: "absolute", }}>
                    <Text style={{
                        color: "purple",
                        fontSize: 18,
                        fontWeight: "bold",
                        marginTop: 120,
                        fontStyle: "italic"
                        // marginLeft: -10
                    }}>
                        HRM System
                    </Text>
                </View>
            </View>
            <TouchableOpacity
                onPress={() => props.navigation.navigate("LogIn")}
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
        </View>
    );
};

export default Login;