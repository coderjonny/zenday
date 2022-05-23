import React, {useState} from 'react';
import {
  Button,
  Screen,
  showSuccessMessage,
  showErrorMessage,
  Text,
  View,
} from 'ui';
import {translate} from 'core';
import {ScrollView} from 'react-native';
import {CountdownCircleTimer} from 'react-native-countdown-circle-timer';

export const Meditate = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const onPressStart = () => {
    showSuccessMessage('Meditation start 🙏🏼');
    setIsPlaying(true);
  };

  const timerOnComplete = () => {
    console.log('complete');
    showSuccessMessage('Meditation complete. 🙏🏼');
  };

  const onPressStop = () => {
    setIsPlaying(false);
    showErrorMessage();
  };

  return (
    <Screen>
      <ScrollView>
        <View flex={1} justifyContent="center">
          <Text variant="header" textAlign="center" marginTop={'s'}>
            {translate('meditation_counter')}
          </Text>
          <View alignItems="center">
            <CountdownCircleTimer
              isPlaying={isPlaying}
              duration={3}
              colors={['#004777', '#F7B801', '#A30000', '#A30000']}
              onComplete={timerOnComplete}
              colorsTime={[7, 5, 2, 0]}>
              {({remainingTime}) => <Text>{remainingTime}</Text>}
            </CountdownCircleTimer>
          </View>
          <Button label="Start" onPress={onPressStart} />
          <Button variant="secondary" label="Stop" onPress={onPressStop} />
        </View>
      </ScrollView>
    </Screen>
  );
};
