import React, { PureComponent } from 'react';
import {
  Animated,
  Text,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';

import { Row } from '../../components';
import { getPlatformElevation } from '../../utils';

class BottomBar extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      translateY: new Animated.Value(0),
    };
  }
  componentWillReceiveProps(nextProps) {
    if (!this.props.isHidden && nextProps.isHidden) {
      this.hideAnimation();
    }
    if (this.props.isHidden && !nextProps.isHidden) {
      this.showAnimation();
    }
  }
  hideAnimation() {
    Animated.timing(this.state.translateY, {
      toValue: 56,
      useNativeDriver: true,
    }).start();
  }
  showAnimation() {
    Animated.timing(this.state.translateY, {
      toValue: 0,
      useNativeDriver: true,
    }).start();
  }
  render() {
    return (
      <Animated.View
        style={[
          styles.container,
          {
            transform: [
              {
                translateY: this.state.translateY,
              },
            ],
          },
        ]}
      >
        <Row style={styles.barContainer}>
          <View style={styles.iconContainer}>
          <Text>scaner</Text>
          </View>
          <View style={styles.iconContainer}>
          <Text>scaner</Text>
          </View>
          <View style={styles.iconContainer}>
          <Text>scaner</Text>
          </View>
          <View style={styles.iconContainer}>
            <Text>message</Text>
          </View>
          <View style={styles.iconContainer}>
            <Text>person</Text>
          </View>
        </Row>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    ...getPlatformElevation(4),
    height: 56,
    paddingHorizontal: 16,
    justifyContent: 'center',
  },
  barContainer: {},
  iconContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  toolbarBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 150,
    backgroundColor: '#008dff',
  },
  statusBar: {
    height: 24,
    backgroundColor: 'white',
  },
  titleBackText: {
    color: 'white',
    marginLeft: 8,
  },
  titleText: {
    fontSize: 24,
    fontWeight: '900',
  },
  menuIconContainer: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default BottomBar;
