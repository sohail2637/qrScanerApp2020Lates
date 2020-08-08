import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TouchableOpacity,
    Linking
} from 'react-native';

import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';




const ScaningScreen = () => {
    const onSuccess = (e) => {
        // console.log(`this is qr code ${e}`);
        alert('succann success');
        Linking.openURL(e.data).catch(err =>
            console.error('An error occured', err)
        );
    }

    return (
        <>
            <Text>muj</Text>
            <QRCodeScanner
                onRead={onSuccess}
                flashMode={RNCamera.Constants.FlashMode.torch}
                topContent={
                    <Text style={styles.centerText}>
                        Go to{' '}
                        <Text style={styles.textBold}>wikipedia.org/wiki/QR_code </Text>
             on your computer and scan the QR code.
          </Text>
                }
                bottomContent={
                    <TouchableOpacity style={styles.buttonTouchable}>
                        <Text style={styles.buttonText}>OK. Got it!</Text>
                    </TouchableOpacity>
                }
            />
        </>
    );
}
const styles = StyleSheet.create({
});

export default ScaningScreen;