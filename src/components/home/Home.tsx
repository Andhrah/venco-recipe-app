import React from 'react';
import { StyleSheet, Text, View, StatusBar, SafeAreaView, Image, ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Button, Card, CategoryBtn } from '../shared';


const Home = (): JSX.Element => {
  const { container, profileStyle, generalTextStyle, homeCard, titleText, displayImg, watchBtn, watchText, scrollViewStyle, cardContainer } = styles;
  return (
    <View style={container}>
      <StatusBar
        backgroundColor="#FB9400"
        hidden={false} translucent={false}
        barStyle="light-content"
      />
      <SafeAreaView>
        <View style={profileStyle}>
          <View/>
          <Text style={generalTextStyle}>1b Birrel, yaba</Text>
          <View/>
        </View>

        <View style={homeCard}>
          <View>
            <Text style={titleText}>
              Find your food {'\n'}recipe easily
            </Text>

            <Button style={watchBtn}>
              <Text style={watchText}>watch</Text>
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
          style={scrollViewStyle}>
            <CategoryBtn>
              Popular
            </CategoryBtn>
            <CategoryBtn>
              Ramen
            </CategoryBtn>
            <CategoryBtn>
              Ice cream
            </CategoryBtn>
            <CategoryBtn>
              Soup
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
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    backgroundColor: '#F9F9FB',
    paddingHorizontal: 25,
    paddingTop: 20,
  },
  generalTextStyle: {
    color: '#373C5B',
    fontSize: 20,
  },
  profileStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    marginBottom: 20,
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
});

export default Home;
