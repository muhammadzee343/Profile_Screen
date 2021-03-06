import React from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e9d8f2',
  },
  innerContainer: {
    width: '90%',
    flex: 1,
    backgroundColor: 'red',
    margin: 20,
    borderColor: 'red',
    borderWidth: 0.5,
    borderRadius: 10,
    // justifyContent: 'flex-end',
    alignItems: 'center',
    // alignSelf: 'flex-end',
    overflow: 'hidden',
  },
  companyHeaderContainer: {
    width: '100%',
    flex: 0.2,
    backgroundColor: 'transparent',
    alignSelf: 'flex-start',
    flexDirection: 'row',
    paddingLeft: 10,
    paddingTop: 10,
  },
  companyHeaderTextStyle_Portrait: {
    textAlign: 'center',
    marginLeft: 20,
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  companyHeaderTextStyle_Landscape: {
    textAlign: 'center',
    marginLeft: 20,
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
  contantSectionBG_Portrait: {
    width: '150%',
    backgroundColor: '#a9c9fc',
    flex: 0.8,
    borderColor: 'transparent',
    borderWidth: 1,
    borderTopLeftRadius: 260,
    borderTopRightRadius: 300,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    overflow: 'hidden',
    // position: 'relative',
  },
  contantSectionInnerBG_Portrait: {
    width: '150%',
    backgroundColor: 'white',
    height: '100%',
    borderColor: 'transparent',
    borderWidth: 1,
    borderTopLeftRadius: 300,
    borderTopRightRadius: 230,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    // position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    // overflow: 'hidden',
  },
  contantSectionBG_Landscape: {
    width: '110%',
    // height: '130%',
    backgroundColor: '#a9c9fc',
    flex: 0.8,
    borderColor: 'transparent',
    borderWidth: 1,
    borderTopLeftRadius: 330,
    borderTopRightRadius: 300,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    overflow: 'hidden',
    // position: 'relative',
  },
  contantSectionInnerBG_Landscape: {
    width: '110%',
    backgroundColor: 'white',
    height: '120%',
    borderColor: 'transparent',
    borderWidth: 1,
    borderTopLeftRadius: 350,
    borderTopRightRadius: 300,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    // position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    // overflow: 'hidden',
  },
  infoSectionContainer_Portrait: {
    marginLeft: '-30%',
    marginTop: '10%',
    marginBottom: 20,
  },
  infoSectionContainer_Landscape: {
    marginLeft: '-10%',
    marginTop: '10%',
    marginBottom: 50,
    width: '60%',
  },
  textStyle: {
    fontSize: 11,
    color: 'gray',
  },
  addressPickerStyle: {
    height: 35,
    width: 150,
  },
  contactContainer: {
    flexDirection: 'row',
    height: 40,
    alignItems: 'center',
  },
  contactPickerStyle: {
    height: 40,
    width: 100,
  },
  companyInfoContainer: {
    marginTop: 10,
    marginBottom: 10,
  },
  companyInfoInnerContainer: {
    height: 70,
    width: 3,
    backgroundColor: 'gray',
    marginTop: 15,
    marginLeft: 5,
    borderColor: 'gray',
    borderWidth: 0.1,
    borderRadius: 3,
  },
  btnContainer_Portrait: {
    marginTop: 30,
    flexDirection: 'row',
  },
  btnContainer_Landscape: {
    marginTop: 30,
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-around',
  },
  exitBtnStyle_Portrait: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 50,
    height: 50,
    width: 130,
    alignItems: 'center',
    justifyContent: 'center',
  },
  exitBtnStyle_Landscape: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 50,
    height: 50,
    width: '40%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  saveBtnStyle_Portrait: {
    borderColor: '#6e96f5',
    borderWidth: 0.5,
    borderRadius: 50,
    height: 50,
    width: 130,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 7,
    marginRight: 10,
  },
  saveBtnStyle_Landscape: {
    borderColor: '#6e96f5',
    borderWidth: 0.5,
    borderRadius: 50,
    height: 50,
    width: '40%',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 7,
    marginRight: 10,
  },
  saveBtnGradientStyle_Portrait: {
    borderColor: '#6e96f5',
    borderWidth: 1,
    borderRadius: 50,
    height: 50,
    width: 130,
  },
  saveBtnGradientStyle_Landscape: {
    borderColor: '#6e96f5',
    borderWidth: 1,
    borderRadius: 50,
    height: 50,
    width: '100%',
  },
  saveBtnTextStyle: {
    fontSize: 15,
    // fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
    justifyContent: 'center',
  },
  displayImgContainerPortrait: {
    height: 100,
    width: 100,
    borderRadius: 50,
    position: 'absolute',
    top: '13%',
    left: '38%',
    elevation: 10,
    // backgroundColor: 'yellow',
  },
  displayImgContaineLandscape: {
    height: 100,
    width: 100,
    borderRadius: 50,
    position: 'absolute',
    top: '8%',
    left: '38%',
    elevation: 10,
    // backgroundColor: 'yellow',
  },
  displayImgStyle: {
    height: 100,
    width: 100,
    borderColor: 'transparent',
    borderWidth: 1,
    borderRadius: 50,
  },
  circleOverDisplayImgStyle: {
    position: 'absolute',
    top: 10,
    right: 5,
  },
});

export default styles;
