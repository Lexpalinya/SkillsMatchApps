import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import PostsCard from '../../../Recruiting/Post/components/PostsCard';

const PostTab = () => {
  return (
    <FlatList
      data={[1, 1, 1, 1, 1, 1, 11, 1]}
      renderItem={() => <PostsCard showButton={false} />}
    />
  );
};

export default PostTab;

const styles = StyleSheet.create({});
