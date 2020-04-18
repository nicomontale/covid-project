import React from 'react';

import { Cards, CountryPicker, Chart } from './components';
import { fetchData } from './api/';
import styles from './App.module.css';



class App extends React.Component {
  state = {
    data: {},
    country: ''
    


  }
  handleCountryChange = async (country)=> {
      //fetch dat
      //setSTate
      const fetchedData = await fetchData(country);
    
      this.setState({data : fetchedData, country: country})
  }

  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData });
  }

  

  render() {
    const { data, country} = this.state;
  
    return (
      <div className={styles.container}>
       
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange}/>
        <Chart data={data} country={country} /> 
      </div>
    );
  }
}

export default App;