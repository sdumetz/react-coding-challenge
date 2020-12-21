import { Component } from 'react';
import './App.css';



class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }

  componentDidMount(){
    fetch('applications.json')
      .then((response) =>{
        return response.json()
      })
      .then(data => console.log(data))
      .then(data => this.setState({state: data}))
  };

  render() {
    
    return (
      
      <div className="App">
        <header className="App-header">
          <p>Ici le titre de mon appli trop cool qui va charger et visualiser un fichier json</p>
        </header>
        <main>
          <p>voici ma liste : </p> 
          
          <button onClick={() => console.log(`Bonjour !`)}>
            Trier
          </button>
        </main>
      </div>
    );
  }
}



export default App;

