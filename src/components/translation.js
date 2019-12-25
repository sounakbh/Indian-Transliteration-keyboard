import React from 'react';
import {Paper, Typography, Grid} from '@material-ui/core'

class Translation extends React.Component {
  render() {
    const styles = {
      paper: {
        margin: "3%",
        backgroundColor: "#3498db"
      }
    }
    const {itrans, wordList} = this.props;
    // pushing into wordlist array if itrans is not present
    if(wordList.indexOf(itrans) === -1) {
      wordList.push(itrans)
    }
    return (
      <div className="App">
        <Grid container spacing={3}>
          <Grid item xs={4}>
          </Grid>
          <Grid item xs={4}>
            {/* returning every element in the wordlist */}
            {wordList.map((item) => {
              return(
                <Paper key={item.key} style={styles.paper}>
                  <Typography variant="h6" component="h4">
                    {item}
                  </Typography>
                </Paper>
              )
            })} 
          </Grid>
          <Grid item xs={4}>
          </Grid>
        </Grid>      
      </div>
    );  
  }
  
}

export default Translation;
