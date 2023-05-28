import { Platform } from 'react-native'
import { showMessage } from "react-native-flash-message";


const FlashMessageFun = (props: any) => {
    // type => "success" (green), "warning" (orange), "danger" (red), "info" (blue) and "default" (gray).

    return (
        showMessage({
            message: "",
            type: "info",
            duration: 3000,
            style: { paddingTop: Platform.OS === 'ios' ? 0 : 10 },
            titleStyle: { fontSize: 16, color: '#000', fontWeight: 'bold' },
            hideStatusBar: false,
            ...props
        })
    )
}

export default FlashMessageFun