import logo from './logo.svg';
import './App.css';
import Content from './components/content';
import Header from './components/header';
import Footer from './components/footer';
import Button from './components/button';
import Counter from './components/counter';
import ContactForm from './components/form';

function App() {
  const handleClick=()=>{
    alert('Button Clicked');
  }
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
  return(
    <div>
      <Header title="welcome to the example of components and props"/>
      <Content name="Dakshi" age={30} location = "delhi"/>
      <Content name="Dakshi Arora" age={20} location = "rohtak"/>
      <h1>Button components</h1>
      <Button label="small button" color="green" size="small" onClick={handleClick} />
      <Button label="medium button" onClick={handleClick} />
      <Button label="large button" color="pink" size="larged" onClick={handleClick} />
      <Counter />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
