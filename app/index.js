import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import welcome1 from '@/assets/images/welcome1.png';
import { StatusBar } from 'expo-status-bar';
import { wp, hp } from '@/helpers/common';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { theme } from '@/constants/theme';

const WelcomePage = () => {
  return (
    <View style={styles.container}>
      <Image
        source={welcome1}
        style={styles.bacgroundImage}
        resizeMode='cover'
      />
      <Animated.View entering={FadeInDown.duration(600)} style={{ flex: 1 }}>
        <LinearGradient
          colors={[
            'rgba(255,255,255,0)',
            'rgba(255,255,255,0.5)',
            'white',
            'white',
          ]}
          style={styles.gradient}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 0.8 }}
        />
        <View style={styles.contentContainer}>
          <Text style={styles.title}>Pexels</Text>
          <Text style={styles.punchline}>Every Pixel Tells a Story</Text>
          <View>
            <Pressable style={styles.button}>
              <Text style={styles.startText}>Start Explore</Text>
            </Pressable>
          </View>
        </View>
      </Animated.View>

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
  gradient: {
    width: wp(100),
    height: hp(65),
    bottom: 0,
    position: 'absolute',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: 14,
  },
  title: {
    fontSize: hp(7),
    color: theme.colors.neutral(0.9),
    fontWeight: theme.fontWeights.bold,
  },
  punchline: {
    fontSize: hp(2),
    letterSpacing: 1,
    marginBottom: 10,
    fontWeight: theme.fontWeights.medium,
  },
  button: {
    marginBottom: 50,
    backgroundColor: theme.colors.black,
    padding: 15,
    paddingHorizontal: 90,
    borderRadius: theme.radius.xl,
    borderCurve: 'continuous',
  },
  startText: {
    color: theme.colors.white,
    fontSize: hp(3),
    fontWeight: theme.fontWeights.medium,
    letterSpacing: 1,
  },
});
