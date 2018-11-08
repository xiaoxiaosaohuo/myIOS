import React, { PureComponent } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import Avatar from './Avatar';
import Row from '../Row';
import assets from '../../assets';

class Header extends PureComponent {
  render() {
    const { name, isReceived } = this.props;

    let icon = null;
    return (
      <Row style={styles.container}>
        <Avatar text={name.substring(0, 1)} src={assets[name]} />
        <View style={styles.nameContainer}>
          <Text>{name}</Text>
        </View>
        <View style={styles.rightContainer}>{icon}</View>
      </Row>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 56,
    alignItems: 'center',
  },
  nameContainer: {
    flex: 1,
    marginLeft: 16,
  },
  rightContainer: {
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Header;
