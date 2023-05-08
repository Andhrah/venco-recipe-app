import React from 'react';
import { StyleSheet, Text, View, StatusBar, SafeAreaView, Image, ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-remix-icon';

import { Button, Card, CategoryBtn } from '../shared';

const Home = (): JSX.Element => {
  const { container, profileStyle, generalTextStyle, homeCard, titleText, displayImg, watchBtn, watchText, scrollViewStyle, cardContainer, focusedBtn, avatarContainer, avatarText, viewContainer, mapContainer } = styles;
  return (
    <SafeAreaView style={container}>
      <StatusBar
        backgroundColor="#FB9400"
        hidden={false} translucent={false}
        barStyle="light-content"
      />

      <View style={viewContainer}>
        <View style={profileStyle}>
          <View style={avatarContainer}>
            <Text style={avatarText}>👩🏽‍🦱</Text>
          </View>

          <View style={mapContainer}>
            <Icon name="map-pin-2-fill" color="#373C5B" />
            <Text style={generalTextStyle}> 1b Birrel, yaba</Text>
          </View>

          <View style={avatarContainer}>
            <Icon name="notification-2-fill" color="#373C5B" />
          </View>
        </View>

        <View style={homeCard}>
          <View>
            <Text style={titleText}>
              Find your food {'\n'}recipe easily
            </Text>

            <Button style={watchBtn} btnTextStyle={watchText} color="#FB9400">
              watch
            </Button>
          </View>

          <Image
            source={require('../../../assets/images/salad.png')}
            style={displayImg}
          />
        </View>

        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={scrollViewStyle}
        >
          <CategoryBtn style={focusedBtn}>
            🍽 Popular
          </CategoryBtn>
          <CategoryBtn>
            🍜 Ramen
          </CategoryBtn>
          <CategoryBtn>
            🍦 Ice cream
          </CategoryBtn>
          <CategoryBtn>
            🥗 Soup
          </CategoryBtn>
        </ScrollView>

        <View>
          <Text style={generalTextStyle}>Based on the type of food you like</Text>

          <ScrollView showsHorizontalScrollIndicator={false}>
            <View style={cardContainer}>
              <Card />
              <Card />
              <Card />
              <Card />
            </View>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: hp('100%'),
    backgroundColor: '#F9F9FB',
  },
  viewContainer: {
    paddingHorizontal: 15,
    paddingTop: 20,
    paddingBottom: 100,
  },
  generalTextStyle: {
    color: '#373C5B',
    fontSize: 20,
  },
  profileStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  homeCard: {
    backgroundColor: '#FB9400',
    marginTop: 20,
    height: hp('22%'),
    width: wp('90%') ,
    alignSelf: 'center',
    borderRadius: 20,
    flexDirection: 'row',
    padding: 20,
    paddingRight: 0,
  },
  titleText: {
    color: '#FFFDE1',
    fontSize: hp('3.3%'),
    marginBottom: 30,
  },
  displayImg: {
    height: hp('20%'),
    width: wp('40%'),
  },
  watchBtn: {
    backgroundColor: '#FFFFFF',
  },
  watchText: {
    color: '#FDC069',
  },
  scrollViewStyle: {
    marginTop: 30,
    marginBottom: 20,
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginTop: 20,
  },
  focusedBtn: {
    backgroundColor: '#FB9400',
    color: '#FEF0DC',
  },
  avatarContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    backgroundColor: '#FFFFFF',
    height: hp('6%'),
    width: wp('12%'),
  },
  avatarText: {
    fontSize: hp(4.0),
  },
  mapContainer: {
    flexDirection: 'row',
  },
});

export default Home;
