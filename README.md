# Pig Latin Activity

In this activity we're going to create a Pig Latin application.  We'll use a React application as a template to run the code that we are going to write for Pig Latin.


### Pig Latin Stories
* As a user, I can type in a sentence to the Pig Latin application.
* As a user, when I click Submit, I see a translation of the sentence I entered into Pig Latin.
* As a user, the page is styled, and pleasing to use.


# Pig Latin

We're going to use Mob Programming to practice our wireframing and programming skills while we build a Pig Latin translator application.  Not fluent in Pig Latin yet?  No problem, you'll pick it up in no time. [How to speak Pig Latin](http://www.wikihow.com/Speak-Pig-Latin)


## Wireframing

A *wireframe* of a web page or web site is simplification of the view to illustrate three things:

* What and where information is shown
* What UI elements or widgets will be used (for instance, buttons vs. links)
* How to navigate the page or the site

Some wireframes look like they were drawn with a crayon by a three year old on the back of a napkin; these are called low-fidelity wireframes.
The point is to only create a visual guide and not get into to many details. As long as the idea you are trying to get across is clear and understandable, its a successful wireframe.  You can use a whiteboard, paper, or whatever is convenient.

There are online tools to make wireframing as easy as possible, and shareable as well.

![pig-latin](https://s3.amazonaws.com/learn-site/curriculum/mob-programming/pig-latin.png)

Wireframes can be higher-fidelity and attempt to create a truthful experience of how an application will work "in the wild". An Example: <a href="https://www.youtube.com/watch?v=MxWTGBQE7zE" target="_blank">Balsamiq Mockups 3 Intro</a>

See also:

<a href="https://en.wikipedia.org/wiki/Website_wireframe" target="_blank">Wikipedia: Website Wireframe</a>

<a href="https://www.youtube.com/watch?v=PmmQjLqJQlY" target="_blank">How to wireframe a website | CharliMarieTV</a>

<a href="https://webdesign.tutsplus.com/articles/a-beginners-guide-to-wireframing--webdesign-7399" target="_blank">A Beginner’s Guide to Wireframing</a>v



## Rules of Pig Latin

* For words beginning with a vowel, add "way" to the end.
* For words beginning with one or more consonants, move all of the first consecutive consonants to the end, and add "ay".
* If the first consonants include "qu", move the "u" along with the "q". Don't forget about words like "squeal" where "qu" doesn't come first!
* For words beginning with "y", treat "y" as a consonant.

## Examples
There are many examples of Pig Latin translators out there on the Internet to give you inspiration. [Here's one](http://funtranslations.com/pig-latin)

## Challenge
1) Brainstorm with your group how you would like your application to function.
2) Use a whiteboard or paper to sketch out some ideas about how the application will work.
3) Spend some time talking about how the code will need to work to make your app a reality.
4) Get coding as a group on one part of the application, and build it out from there.
5) Be sure and pause occasionally to discuss strategy and plan next steps.

# Mob Programming

"All the brilliant minds working together on the same thing, at the same time, in the same space, and at the same computer" <a href="http://mobprogramming.org/" target="_blank">mobprogramming.org</a>

Mob programming is a scaled up version of pair programming. There is still a driver at the keyboard, however, there may be two, alternating in typing the group's input. Everybody in the group contributes to the implementation, and people can bring laptops, books and other materials to help find solutions to problems, research API calls and provide understanding.

**Some Best Practices**
* Change drivers every 30 minutes
* Make sure everyone understands what's going on at all times
* Take responsibility to stay engaged - ask questions, contribute ideas
* Take breaks together
* Help teammates stay engaged "Do you have any ideas.  Does that make sense to you?"

### Getting started

All the code you'll need to write for this app is going to be inside one function in the ```/src/App.js``` file.

After you accept the assignment (or clone this repo), you'll want to install all the npm packages using Yarn:

```bash
$ cd ./pig-latin-template
$ yarn install
```

If you get an error about Yarn not being found:
```bash
Command 'yarn' not found, but can be installed with:
sudo apt install cmdtest
```

You can install it with:

```bash
$ npm install -g yarn
```

Then you are ready to start a server to run the application:

```bash
$ yarn start
```

Now you're ready to code!

Here's what that file ```src/App.js``` looks like to start:

```javascript
import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      phrase: '',
      phraseTranslated: 'Put in special characters, if you dare'
    }
  }
  
  // The translate function is where you will put your logic to convert the sentence entered by the user to pig location.  What is currently in the function will only directly copy what the user has entered.

  translate = (e) => {
    e.preventDefault()
    let translated = this.state.phrase
    this.setState({phraseTranslated: translated})
  }

  handleChange = (e) => {
    this.setState({phrase: e.target.value})
  }

  render() {
    return (
      
      <div className="wrapper">
        <header className="box header">
          <div id="pigImage">
            <img src='https://lh3.googleusercontent.com/QvvsRY5ShwDNEouVMK8_z7QCwS3grkgd4mzZOlom23Hurralk54ObvsyEMM8ZSNR5pEFBeBMzltzEEcgi2llYJnhXTuXClN3njmMjtw3vgn8Go5jr40fHMNzfI64eYRrnHbZUutxCA=w2400' alt="pig with butcher cut names in pig latin" id="butcherPig"></img>
          </div>
        </header>
        <sidebar className="box sidebar">
          <div>
            <form className="info" onSubmit={this.translate}>
              <label htmlFor="input-phrase">Translate this: </label>
              <input name="input-phrase" onChange={this.handleChange}></input>
              <input className="button" type="submit" value="Submit" />
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
            <p>Coded by * * *</p>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
```

To get started, find the ```translate``` function, and write your code.  Everytime you save your updated file, the browser window displaying your app will reload.

### A note for Cloud 9 users
Once you run the ```yarn start``` command above,  You'll want to click the 'Preview' button to see your running application.