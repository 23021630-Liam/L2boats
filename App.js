import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import Boat from './components/boat';


const AllBoats =() => {
  return (
      <ScrollView>
        <View>
          <Text></Text>
            <Text></Text>

          <Boat name="Sea Ray 500 Sundancer"
                 description='Contoured lines and dramatic styling reveal a refined and powerful presence that will take your breath away.'
                 icon_name="sait-boat"
                 picture={require('./img/sea_ray.jpg')}/>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Boat name="Four Winns Horizon 180"
                  description='A sporty look and refined details truly set the Horizon 180 above all others.'
                  icon_name="sait-boat"
                  picture={require('./img/four_winns.jpg')}/>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Boat name="Flipper 640 ST"
                  description='A modern take on the classic, traditional hardtop and perfect for a family picnic.'
                  icon_name="sait-boat"
                  picture={require('./img/flipper.jpg')}/>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Boat name="Princess V48"
                  description='There is the option for an open design with a full-length cockpit and sunroof, or the enclosed deck saloon model, available with the option of a climate controlled interior.'
                  icon_name="sait-boat"
                  picture={require('./img/princess.jpg')}/>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Boat name="Bayliner 175 Bowrider"
                  description='Its outboard power gives you increased cockpit space and quiet, fuel-efficient performance.'
                  icon_name="sait-boat"
                  picture={require('./img/bayliner.jpg')}/>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Boat name="Fairline Targa 47"
                  description='Stretch out on the large sun bed aft while friends lounge in the generously appointed cockpit.'
                  icon_name="sait-boat"
                  picture={require('./img/fairline.jpg')}/>

        </View>
      </ScrollView>
  )
}

// const Styles = StyleSheet.create


export default AllBoats;
