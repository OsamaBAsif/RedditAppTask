import {StyleSheet, View, FlatList} from 'react-native';
import React, {useCallback} from 'react';
import SubRedditsItem from './SubRedditsItem';
import {routes} from '../util/routes';
const SubRedditsList = ({items, navigation}) => {
  const renderMealItem = useCallback(
    ({item}) => {
      return (
        <SubRedditsItem
          item={item.data}
          onPress={() =>
            navigation.navigate(routes.detailsScreen.routeName, item.data)
          }
        />
      );
    },
    [navigation],
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        renderItem={renderMealItem}
        keyExtractor={item => item.data.id}
      />
    </View>
  );
};

export default SubRedditsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  webView: {flex: 1, height: 400},
});
