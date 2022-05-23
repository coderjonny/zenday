import React from 'react';
import {Button, Screen, showErrorMessage, Text, View} from 'ui';
import {API_URL} from '@env';
import {translate} from 'core';
import {ScrollView} from 'react-native';

export const Meditate = () => {
  const onPressStart = () => {
    console.log('hello');
  };

  return (
    <Screen>
      <ScrollView>
        <View flex={1} justifyContent="center">
          <Text variant="header" textAlign="center">
            {translate('name')}
          </Text>
          <Text variant="body" textAlign="center">
            This is An ENV Var : {API_URL}
          </Text>

          <Button label="Start" onPress={onPressStart} />
          <Button
            variant="secondary"
            label="Show message"
            onPress={() => showErrorMessage()}
          />
        </View>
      </ScrollView>
    </Screen>
  );
};
