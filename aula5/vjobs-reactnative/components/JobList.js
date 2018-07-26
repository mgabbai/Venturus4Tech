import React from 'react';
import { StyleSheet, Text, SafeAreaView, FlatList, View , Image,
            TouchableHighlight } from 'react-native';
import {getJobs} from './../network/api';

const img = require('../assets/images/logo-h-vjobs.png');

export default class JobList extends React.Component {

  constructor(props){
    super(props);
    this.state = {jobs: []};
  }

  static navigationOptions = {
      title: 'VJobs'
  }
  componentDidMount(){
    getJobs().then(jobs => this.setState({jobs})).catch(erro => console.log(error));
  }

  renderList(){
    const vagas = [
      {nome: 'Vaga1', id: '1'},
      { nome: 'Vaga2', id: '2' },
      { nome: 'Vaga3', id: '3' },
      { nome: 'Vaga4', id: '4' },
      { nome: 'Vaga5', id: '5' },
      { nome: 'Vaga6', id: '6' },
      { nome: 'Vaga7', id: '7' },
      { nome: 'Vaga8', id: '8' },
      { nome: 'Vaga9', id: '9' },
      { nome: 'Vaga10', id: '10' },
      { nome: 'Vaga11', id: '11' }
    ]

    const separatorStyle = {
      flexGrow: 1, height: 5, backgroundColor: '#fff'
    }

    return (
      <FlatList data={this.state.jobs}
                style={{flex: 1, backgroundColor: 'white'}}
                ListHeaderComponent={() => this.renderHeader()}
                renderItem={({item}) => this.renderItem(item)}
                ItemSeparatorComponent= {() => <View style={separatorStyle}/>}
                keyExtractor={(item) => `${item.id}`}/>
    )

  }

  renderItem(vaga){
    return(
        <TouchableHighlight onPress={() => this.props.navigation.navigate('JobDetails', {job: vaga})}>
            <Text style={{paddingHorizontal: 16, paddingVertical: 8, minHeight: 48, fontWeight: 'bold',
                            borderWidth: 1, borderColor: '#000', backgroundColor:'#ccc'}} >{vaga.name}</Text>
        </TouchableHighlight>
    );
  }

  renderHeader(){
    return(
      <Image style={{margin: 16, alignSelf: 'center'}} source={img}/>
    );
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        {/*renderList*/}
        {this.renderList()}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 25,
    flex: 1,
    backgroundColor: '#fff'
  }
});