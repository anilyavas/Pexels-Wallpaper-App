import { View, Text, StyleSheet, Image } from 'react-native';
import welcome1 from '@/assets/images/welcome1.png';
import { StatusBar } from 'expo-status-bar';
import { wp, hp } from '@/helpers/common';

const WelcomePage = () => {
  return (
    <View style={styles.container}>
      <Image source={welcome1} style={styles.bacgroundImage} />
      <StatusBar style='light' />
    </View>
  );
};

export default WelcomePage;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bacgroundImage: {
    width: wp(100),
    height: hp(100),
    position: 'absolute',
  },
});
