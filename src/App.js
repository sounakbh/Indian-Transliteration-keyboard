import React from 'react';
import Translation from './components/translation';
import {TextField, FormControl, Select} from '@material-ui/core'
import {Helmet} from 'react-helmet';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      word: '',
      selectValue: 'hindi'
    }
  }

  handleChange = (event) => {
    this.setState({word: event.target.value});
    fetch(`http://146.148.85.67/processWordJSON?inString=${this.state.word}&lang=${this.state.selectValue}`)
      .then(res => res.json())
      .then(json => {
        this.setState({items: json['twords']['0']['options']});
        console.log(this.state.items)
      });
  } 

  handleValueChange = (e) => {
    this.setState({selectValue:e.target.value});
  }

  render() {
    return (
      <div className="App">
        <Helmet>
          <style>{'body { background-color: #2c3e50; }'}</style>
        </Helmet>
        <div className="header">
          <h1>Transliterator</h1>  
        </div> 
        <TextField  
          className="textfield"
          value={this.state.word} 
          onChange={this.handleChange} 
          type='text' 
          placeholder="Enter a word" 
          variant="outlined" />
        
        <FormControl variant="outlined"  className="textfield">
          <Select
            native
            value={this.state.selectValue}
            onChange={this.handleValueChange} 
          >
            <option value="" />
            <option value="hindi">Hindi</option>
            <option value="tamil">Tamil</option>
            <option value="bengali">Bengali</option>                    
            <option value="telugu">Telugu</option>
            <option value="gujarati">Gujarati</option>
            <option value="marathi">Marathi</option>
            <option value="kannada">Kannada</option>
            <option value="malayalam">Malayalam</option>
            <option value="punjabi">Punjabi</option>
            <option value="nepali">Nepali</option>
          </Select>
      </FormControl>
        <div className="spacing">
          <Translation wordList={this.state.items}/> 
        </div>
        <footer>
          <p>&#169; Sounak Bhattacharya</p>
        </footer> 
      </div>
    );  
  }
  
}

export default App;
