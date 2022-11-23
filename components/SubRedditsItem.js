import {StyleSheet, Text, View, Pressable, Image} from 'react-native';
import React from 'react';
import {commentsTime} from '../util/relativeFormattedDate';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {colors} from '../util/colors';

const SubRedditsItem = ({item, onPress}) => {
  return (
    <View style={styles.mealItem}>
      <Pressable
        onPress={onPress}
        android_ripple={{color: colors.white}}
        style={({pressed}) => (pressed ? styles.buttonPressed : null)}>
        <View>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{item.author_fullname}</Text>
            <Text style={styles.createdDate}>
              {commentsTime(new Date(item.created))}
            </Text>
          </View>
          <Text style={styles.description}>{item.title}</Text>
        </View>
        <View style={styles.innerContainer}>
          <View>
            {item?.thumbnail && (
              <Image
                style={styles.image}
                source={{
                  uri: item?.thumbnail,
                  cache: 'force-cache',
                }}
              />
            )}
            <View style={styles.iconsRootContainer}>
              <View style={styles.iconsContainer}>
                <AntDesign name="like1" style={styles.likeIcon} />
                <Text style={styles.likesText}>{item.ups}</Text>
              </View>
              <View style={styles.iconsContainer}>
                <FontAwesome name="comment" style={styles.likeIcon} />
                <Text style={styles.likesText}>{item.num_comments}</Text>
              </View>
            </View>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default SubRedditsItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOpacity: 0.35,
    shadowOffset: {
      height: 2,
      width: 0,
    },
    shadowRadius: 8,
  },
  titleContainer: {flexDirection: 'row', justifyContent: 'space-between'},
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,

    marginHorizontal: 7,
    marginVertical: 3,
  },
  description: {
    fontSize: 18,
    marginHorizontal: 7,
    marginVertical: 3,
  },
  likesText: {
    fontSize: 16,
    marginVertical: 3,
    color: colors.grayColor,
    fontWeight: 'bold',
  },
  likeIcon: {
    fontSize: 18,
    marginHorizontal: 7,
    marginVertical: 3,
    color: colors.grayColor,
  },
  createdDate: {
    fontSize: 16,
    marginHorizontal: 7,
    marginVertical: 3,
  },
  detail: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    justifyContent: 'center',
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
  innerContainer: {
    borderRadius: 8,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  iconsRootContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
});
