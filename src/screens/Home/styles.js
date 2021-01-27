import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 500,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  title: {
    fontSize: 80,
    fontWeight: 'bold',
    color: 'white',
    width: '70%',
    marginLeft: 25,
    lineHeight: 80,
  },
  button: {
    backgroundColor: 'white',
    width: 200,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 25,
    marginLeft: 25,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  searchButton: {
    flexDirection: 'row',
    backgroundColor: 'white',
    height: 50,
    width: Dimensions.get('screen').width - 40,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    position: 'absolute',
    top: 50,
    zIndex: 100,
  },
  searchButtonText: {
    fontWeight: '500',
    fontSize: 16,
    marginLeft: 10,
  },
});

export default styles;
