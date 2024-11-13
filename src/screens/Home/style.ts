import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  grid: {
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  containerImage: {
    width: '44%',
    marginBottom: 5,
    position: 'relative',
    margin: 10,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 0,
    marginTop: 0,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start', 
    marginTop: 0,
    paddingLeft: 5,
  },
  username: {
    marginLeft: 10, 
    fontSize: 12,
    fontWeight: 'bold',
    color: '#333',
  },
  points: {
    fontSize: 28,
    color: '##fff',
    marginLeft: 35,
    marginTop: 0,
    marginBottom: 30,
  },
  menu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
});
