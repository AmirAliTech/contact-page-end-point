
import './App.css';

function App() {
  return (
    <div className="App">
      <form action='http://localhost:8000/contact' method='post'>
        <input type='text' name='name' placeholder='enter your name'/>
        <input type='email' name='email' placeholder='enter your email'/>
        <input type='number'name='phone' placeholder='enter your phone'/>
        <input type='text' name='address' placeholder='enter your adress'/>
        <textarea cols='30' rows='10'name='message' placeholder='enter your message ...'/>
        <input type='submit' value='send' className='btn'/>
        
      </form>
    </div>
  );
}

export default App;
