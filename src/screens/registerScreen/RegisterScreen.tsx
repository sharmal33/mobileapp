import React, { useRef, useContext, useEffect, useState } from 'react';
  import { StyleSheet, SafeAreaView, Text, View, TouchableOpacity } from 'react-native';
  

  const RegisterScreen: React.FC<RegisterScreenProps> = ({ navigation, route }) => {
  

    return (
      <SafeAreaView style={styles.container}>
         <Text>RegisterScreen</Text>
      </SafeAreaView>
    );
  };

const styles = StyleSheet.create({
  "container": {
    "flex": 1
  }
});

export default RegisterScreen