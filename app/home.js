import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
  TextInput,
} from 'react-native';
import { Feather, FontAwesome6, Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { theme } from '../constants/theme';
import { hp, wp } from '../helpers/common';
import { useEffect, useRef, useState } from 'react';
import Categories from '../components/categories';
import { apiCall } from '../api';

const HomeScreen = () => {
  const { top } = useSafeAreaInsets();
  const paddingTop = top > 0 ? top + 10 : 30;
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState(null);
  const searchInputRef = useRef(null);

  useEffect(() => {
    fethImages();
  });

  const fethImages = async (params = { page: 1 }, append = true) => {
    const res = await apiCall(params);
    console.log('result', res.data);
  };

  const handleChangeCategory = (cat) => {
    setActiveCategory(cat);
  };
  return (
    <View style={[styles.container, { paddingTop }]}>
      <View style={styles.header}>
        <Pressable>
          <Text style={styles.title}>Pexels</Text>
        </Pressable>
        <Pressable>
          <FontAwesome6
            name='bars-staggered'
            size={22}
            color={theme.colors.black}
            style={{ opacity: 0.4 }}
          />
        </Pressable>
      </View>
      <ScrollView contentContainerStyle={{ gap: 15 }}>
        <View style={styles.searchBar}>
          <View style={styles.searchIcon}>
            <Feather
              style={{ opacity: 0.4 }}
              name='search'
              size={24}
              color='black'
            />
          </View>
          <TextInput
            value={search}
            onChangeText={(value) => setSearch(value)}
            ref={searchInputRef}
            placeholderTextColor={'grey'}
            placeholder='Search for photos...'
            style={styles.searchInput}
          />
          {search && (
            <Pressable style={styles.closeIcon}>
              <Ionicons
                name='close'
                size={24}
                color={theme.colors.black}
                style={{ opacity: 0.6 }}
              />
            </Pressable>
          )}
        </View>
        <View style={styles.categories}>
          <Categories
            activeCategory={activeCategory}
            handleChangeCategory={handleChangeCategory}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 15,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: wp(4),
  },
  title: {
    fontSize: hp(4),
    fontWeight: theme.fontWeights.semibold,
    color: theme.colors.black,
  },
  searchBar: {
    marginHorizontal: wp(4),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: theme.colors.grayBG,
    backgroundColor: theme.colors.white,
    padding: 6,
    paddingLeft: 10,
    borderRadius: theme.radius.lg,
  },
  searchIcon: {
    padding: 8,
  },
  searchInput: {
    flex: 1,
    borderRadius: theme.radius.sm,
    paddingVertical: 10,
    fontSize: hp(1.7),
  },
  closeIcon: {
    backgroundColor: theme.colors.grayBG,
    padding: 8,
    borderRadius: theme.radius.sm,
  },
  categories: {},
});
