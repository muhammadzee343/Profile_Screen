import React, {PureComponent} from 'react';
import {
  Dimensions,
  Image,
  Picker,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import BackArrowIcon from '../../Assets/icons/BackArrow';
import Ripple from 'react-native-material-ripple';
import LinearGradient from 'react-native-linear-gradient';
import CustomRadioButton from '../../Components/CustomRadioButton';
import CircleIcon from '../../Assets/icons/CircleIcon';
import styles from './style';

class ProfileScreen extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selectedValue: null,
      orientation: null,
    };
  }

  getOrientation() {
    {
      if (Dimensions.get('window').width < Dimensions.get('window').height) {
        this.setState({orientation: 'portrait'});
      } else {
        this.setState({orientation: 'landscape'});
      }
    }
  }
  componentDidMount() {
    this.getOrientation();

    Dimensions.addEventListener('change', () => {
      this.getOrientation();
    });
  }

  render() {
    console.log('orientation', this.state.orientation);
    return (
      <SafeAreaView style={styles.container}>
        {/* <StatusBar hidden/> */}
        <View style={styles.innerContainer}>
          <View style={styles.companyHeaderContainer}>
            <BackArrowIcon iconColor="white" />

            <Text
              style={
                this.state.orientation === 'portrait'
                  ? styles.companyHeaderTextStyle_Portrait
                  : styles.companyHeaderTextStyle_Landscape
              }>
              Company name
            </Text>
          </View>

          <View
            style={
              this.state.orientation === 'portrait'
                ? styles.contantSectionBG_Portrait
                : styles.contantSectionBG_Landscape
            }>
            <View
              style={
                this.state.orientation === 'portrait'
                  ? styles.contantSectionInnerBG_Portrait
                  : styles.contantSectionInnerBG_Landscape
              }>
              <ScrollView
                style={
                  this.state.orientation === 'portrait'
                    ? styles.infoSectionContainer_Portrait
                    : styles.infoSectionContainer_Landscape
                }>
                <Text style={styles.textStyle}>Company Name</Text>
                <Text>Pakistan</Text>
                <Text style={styles.textStyle}>Company Registration No</Text>
                <Text>CUN 02378</Text>
                <Text style={styles.textStyle}>Company Address</Text>
                <Picker
                  dropdownIconColor="#275cc4"
                  mode="dropdown"
                  selectedValue={this.state.selectedValue}
                  style={styles.addressPickerStyle}
                  onValueChange={(itemValue, itemIndex) =>
                    this.setState({selectedValue: itemValue})
                  }>
                  <Picker.Item label="Faisalabad" value="java" />
                  <Picker.Item label="Lahore" value="js" />
                </Picker>
                <Text style={styles.textStyle}>Company Contact No</Text>
                <View style={styles.contactContainer}>
                  <Picker
                    mode="dropdown"
                    selectedValue={this.state.selectedValue}
                    style={styles.contactPickerStyle}
                    onValueChange={(itemValue, itemIndex) =>
                      this.setState({selectedValue: itemValue})
                    }>
                    <Picker.Item label="0303" value="jazz" />
                    <Picker.Item label="0310" value="zong" />
                  </Picker>
                  <Text style={{marginLeft: 20}}>7825930</Text>
                </View>

                <View style={styles.companyInfoContainer}>
                  <View style={{flexDirection: 'row'}}>
                    <CustomRadioButton />
                    <Text style={styles.textStyle}>
                      Does your company supplies machinaries
                    </Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <View style={styles.companyInfoInnerContainer} />
                    <View style={{marginTop: 15, marginLeft: 15}}>
                      <View style={{flexDirection: 'row', marginBottom: 10}}>
                        <CustomRadioButton />
                        <Text style={styles.textStyle}>
                          Same as above address
                        </Text>
                      </View>
                      <Text style={styles.textStyle}>
                        Company Billing Address
                      </Text>
                      <Text>UN 437889</Text>
                    </View>
                  </View>
                </View>
                <Text style={styles.textStyle}>Position</Text>
                <Text>supervisor</Text>
                <View
                  style={
                    this.state.orientation === 'portrait'
                      ? styles.btnContainer_Portrait
                      : styles.btnContainer_Landscape
                  }>
                  <Ripple
                    rippleColor="#ced4e0"
                    rippleOpacity={0.87}
                    rippleDuration={1200}
                    style={
                      this.state.orientation === 'portrait'
                        ? styles.exitBtnStyle_Portrait
                        : styles.exitBtnStyle_Landscape
                    }>
                    <Text>Exit</Text>
                  </Ripple>
                  <Ripple
                    rippleColor="#6e96f5"
                    rippleOpacity={0.87}
                    rippleDuration={1200}
                    style={
                      this.state.orientation === 'portrait'
                        ? styles.saveBtnStyle_Portrait
                        : styles.saveBtnStyle_Landscape
                    }>
                    <LinearGradient
                      colors={['#b0c4f5', '#799df2', '#192f6a']}
                      style={
                        this.state.orientation === 'portrait'
                          ? styles.saveBtnGradientStyle_Portrait
                          : styles.saveBtnGradientStyle_Landscape
                      }>
                      <Text style={styles.saveBtnTextStyle}>Save changes</Text>
                    </LinearGradient>
                  </Ripple>
                </View>
              </ScrollView>
            </View>
          </View>
          <View
            style={
              this.state.orientation === 'portrait'
                ? styles.displayImgContainerPortrait
                : styles.displayImgContaineLandscape
            }>
            <Image
              style={styles.displayImgStyle}
              source={require('../../Assets/images/kids.jpg')}
            />
            <View style={styles.circleOverDisplayImgStyle}>
              <CircleIcon iconColor="blue" />
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default ProfileScreen;
