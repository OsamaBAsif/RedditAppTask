import {StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {fetchSubReddits} from '../backend/subreddits';
import SubRedditsList from '../components/SubRedditsList';
import {colors} from '../util/colors';

const PostsScreen = ({navigation}) => {
  const [subReddits, setSubReddits] = useState([]);
  const fetchAllPosts = async () => {
    try {
      let fetchPosts = await fetchSubReddits();
      setSubReddits(fetchPosts?.data?.children);
    } catch (error) {
      console.log('Err: ', error);
    }
  };

  useEffect(() => {
    fetchAllPosts();
  }, []);
  return (
    <View style={styles.listContainer}>
      <SubRedditsList navigation={navigation} items={subReddits} />
    </View>
  );
};

export default PostsScreen;

const styles = StyleSheet.create({
  listContainer: {flex: 1, margin: 10},
  filtersContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
  },
  filterBtn: {
    backgroundColor: colors.grayColor,
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 7,
  },
  btnText: {
    color: colors.white,
  },
});
