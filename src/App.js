import React from 'react';
import './App.css';

class App extends React.Component { // inserting component here for react
  constructor(props){ // constructor holds all our data, setting up default values
    super(props)
    this.state = {
      phrase: '',
      phraseTranslated: 'This is where your translated sentence will appear.'
    }
  }
  
  // The translate function is where you will put your logic to convert the sentence entered by the user to pig location.  What is currently in the function will only directly copy what the user has entered.

  translate = (e) => { // translate & handleChange affecting the data user is inputting
  
    e.preventDefault() // prevents reloading of what you're looking at. for ex prevents page from reloading before evaluating input. seems pretty important for most react code.
    
    let translated = this.state.phrase // calling out above this.state
    
  
    let vowels = ["a", "e", "i", "o", "u"]
    let vowelsY = vowels.concat("y")
    let translatedArr = translated.toLowerCase().split(" ")
    let translatedBeforeJoin = []
    for (let i=0; i<translatedArr.length; i++) 
      if (vowels.includes(translatedArr[i][0])){
        // execute vowel condition
        translatedBeforeJoin.push(translatedArr[i] + "way")
        //console.log(translatedBeforeJoin)
      } else if (!vowels.includes(translatedArr[i][0])){
          if(translatedArr[i][0] === "q") {
            translatedBeforeJoin.push(translatedArr[i].slice(2) + "quay")
            //console.log(translatedBeforeJoin)
          }
          else {
            for(let j = 0; j < translatedArr[i].length; j++) {
              if (vowelsY.includes(translatedArr[i][j]) && translatedArr[i][j] === "u" && translatedArr[i][j-1] === "q") {
                translatedBeforeJoin.push(translatedArr[i].slice(j+1) + translatedArr[i].slice(0,j+1) +"ay")
                break
                //console.log(translatedBeforeJoin)
              } else if (vowelsY.includes(translatedArr[i][j])) {
                translatedBeforeJoin.push(translatedArr[i].slice(j) + translatedArr[i].slice(0,j) +"ay")
                break
              }
            }
          }
      }
      
      // console.log(vowels)
      // console.log(vowelsY)
    }
    
    // translatedBeforeJoin[0][0].topperCase() 
    const translatedNotCap = translatedBeforeJoin.join(" ")
    let firstLetter = translatedNotCap[0].toUpperCase()
    translated = firstLetter + translatedNotCap.slice(1)
    
    this.setState({phraseTranslated: translated}) // updates phraseTranslated to be the new translated phrase. this should be towards the end of the processing parts of the function
  }

  handleChange = (e) => {
    this.setState({phrase: e.target.value}) // this takes user input from line this.handleChange and sets it equal to phrase
  }

  render() {
    return (
      
      <div className="wrapper">
        <header className="box header">
          <div id="pigImage">
            <img src='https://www.publicdomainpictures.net/download-picture.php?id=215663&check=dd1fa98d103e3740df4d4a313a30cf14'
            alt="cute pigs gossipping in latin" id="butcherPig"></img>
          </div>
        </header>
        <sidebar className="box sidebar">
          <div>
            <form className="info" onSubmit={this.translate}>
              <label htmlFor="input-phrase">Translate this: </label>
              <input name="input-phrase" onChange={this.handleChange}></input>
              <input className="button" type="submit" value="Submit" 
              onClick={this.translate}/>
            </form>
          </div>
        </sidebar>
        <main>
          <div className="text-center box content">
            <p>{this.state.phraseTranslated}</p>
          </div>
        </main>
        <footer className="box footer">
          <div className="text-center">
            <p>Christi, Joe, and Joyce</p>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
