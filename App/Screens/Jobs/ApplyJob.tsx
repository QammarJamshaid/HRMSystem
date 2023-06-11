import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Typography, hp, wp } from '../../Global'
import DocumentPicker from 'react-native-document-picker'
import { ModalLoader } from '../../Components'
import { ApiServices } from '../../Services2'

const AppleJob = (props: any) => {
  const [pdfData, setPdfData] = useState<any>(null)
  const [modelLoader, setModelLoader] = useState<any>({
    visible: false,
    message: ''
  })
  const onSelectCvPress = async () => {
    const res: any = await DocumentPicker.pick({
      type: [DocumentPicker.types.pdf],
    });
    setPdfData(res[0])
  }

  const hideLoader = () => {
    setModelLoader({
      visible: false,
      message: ''
    })
  }

  const onSubmitPress = () => {
    setModelLoader({
      visible: true,
      message: 'Applying...'
    })
    const data = props?.route?.params?.data
    const params = {
      Jid: data?.Jid,
      Uid: data?.Uid,
      name: data?.name,
      documentPath: pdfData?.uri
    }
    ApiServices.applyJob(params).finally(hideLoader)
  }

  return (
    <View style={Styles.container}>
      <ModalLoader
        visible={modelLoader.visible}
        message={modelLoader.message}
      />
      <TouchableOpacity style={Styles.selectCvBtn}
        onPress={onSelectCvPress}
      >
        <Text style={Styles.selectCvTxt}>
          Select your CV
        </Text>
      </TouchableOpacity>
      {
        pdfData && pdfData?.name &&
        <Text style={Styles.cvName}>
          {pdfData?.name}
        </Text>
      }
      {
        pdfData &&
        <TouchableOpacity style={Styles.submitBtn}
          onPress={onSubmitPress}
        >
          <Text style={{ ...Styles.selectCvTxt, color: '#fff' }}>
            Submit
          </Text>
        </TouchableOpacity>
      }
    </View>
  )
}

export default AppleJob

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  selectCvBtn: {
    width: wp(50),
    height: hp(6.5),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E4CD05',
    borderRadius: 8,
  },
  selectCvTxt: {
    color: '#000',
    fontSize: Typography.medium
  },
  cvName: {
    color: '#000',
    fontSize: Typography.medium,
    marginVertical: hp(6)
  },
  submitBtn: {
    backgroundColor: '#4CAF50',
    width: wp(50),
    height: hp(6.5),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  }
})