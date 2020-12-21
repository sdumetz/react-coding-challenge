import { Component } from 'react';
import './App.css';



class App extends Component {

  state = {
      data: []
    }

  componentDidMount(){
    fetch('applications.json')
      .then((response) =>{
        return response.json()
      })
      .then((json) => {
        console.log(json)
      })
      .then((result) =>{
        this.setState([result])
      })
    }
  render() {
    
    return (
      
      <div className="App">
        <header className="App-header">
          <p>Ici le titre de mon appli trop cool qui va charger et visualiser un fichier json</p>
        </header>
        <main>
          <p>voici ma liste : </p> 
          <ul>{this.state.data.map}</ul>
          <button onClick={() => console.log(`Bonjour !`)}>
            Trier
          </button>
        </main>
      </div>
    );
  }
}



export default App;

