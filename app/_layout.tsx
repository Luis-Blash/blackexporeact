import { useEffect } from "react";
import "./global.css"
import {Slot, SplashScreen} from "expo-router";

// esperar el splash
SplashScreen.preventAutoHideAsync()

const RootLayout = () => {

    useEffect(() => {
        // splash listo
        SplashScreen.hideAsync()
    }, [])
    

    return  <Slot />
}

export default RootLayout