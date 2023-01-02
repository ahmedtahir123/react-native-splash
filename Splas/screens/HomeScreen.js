import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const HomeScreen = ({navigation}) => {
  // const [posts, setPosts] = useState(null);
  // const [loading, setLoading] = useState(true);
  const [deleted, setDeleted] = useState(false);

  // const fetchPosts = async () => {
  //   try {
  //     const list = [];

  //     await firestore()
  //       .collection('posts')
  //       .orderBy('postTime', 'desc')
  //       .get()
  //       .then(querySnapshot => {
  //         // console.log('Total Posts: ', querySnapshot.size);

  //         querySnapshot.forEach(doc => {
  //           const {userId, post, postImg, postTime, likes, comments} =
  //             doc.data();
  //           list.push({
  //             id: doc.id,
  //             userId,
  //             userName: 'Test Name',
  //             userImg:
  //               'https://lh5.googleusercontent.com/-b0PKyNuQv5s/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclxAM4M1SCBGAO7Rp-QP6zgBEUkOQ/s96-c/photo.jpg',
  //             postTime: postTime,
  //             post,
  //             postImg,
  //             liked: false,
  //             likes,
  //             comments,
  //           });
  //         });
  //       });

  //     setPosts(list);

  //     if (loading) {
  //       setLoading(false);
  //     }

  //     console.log('Posts: ', posts);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  useEffect(() => {
    // fetchPosts();
  }, []);

  useEffect(() => {
    // fetchPosts();
    setDeleted(false);
  }, [deleted]);

  return (
    <SafeAreaView style={{flex: 1}}>
      {true ? (
        <ScrollView
          style={{flex: 1}}
          contentContainerStyle={{alignItems: 'center'}}>
          <SkeletonPlaceholder>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={{width: 60, height: 60, borderRadius: 50}} />
              <View style={{marginLeft: 20}}>
                <View style={{width: 120, height: 20, borderRadius: 4}} />
                <View
                  style={{marginTop: 6, width: 80, height: 20, borderRadius: 4}}
                />
              </View>
            </View>
          </SkeletonPlaceholder>
        </ScrollView>
      ) : null}
    </SafeAreaView>
  );
};

export default HomeScreen;
