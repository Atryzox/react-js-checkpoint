// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import reactLogo from '../src/assets/menu/espresso.png'
import reactLogo2 from '../src/assets/menu/home-3-icon-image-6.png'
import reactLogo3 from '../src/assets/menu/home-3-icon-img-1.png'
import reactLogo5 from '../src/assets/menu/home-3-icon-img-protein.png'
import reactLogo4 from '../src/assets/menu/home-3-icon-img-5.png'
import reactLogo6 from '../src/assets/menu/latte2.png'
import reactLogo7 from '../src/assets/menu/traditional-drip.png'
import reactLogo8 from '../src/assets/menu/home-3-icon-img-smoothie.png'


import { MDBInput, MDBCheckbox, MDBBtn } from 'mdb-react-ui-kit';



function App() {
  return (
    <div className="App">
      {/* <!-- start header --> */}
      <main>
        <div class="title">
          <h1>EV COFFEE</h1>
          <div class="navbar">
            <div><a href="#">Home</a></div>
            <div><a href="#">About</a></div>
            <div><a href="#">Service</a></div>
            <div><a href="#contact">Contact</a></div>
          </div>
        </div>
      </main>
      {/* <!-- end header --> */}
      <section>
        <div class="s1">
          <div class="one">
            <h1>Rest, Relax, Revive!</h1>
            <p><em>Your Way To Leave Stress</em></p>
            <button><a href="#menu">See our menu</a></button>
          </div>
        </div>
      </section>
      <section>
        <div class="s2">
          <h4><em>we have different flavors to chose from</em></h4>
          <h1>Chose your style / Chose your flavor</h1>
          <div class="flavors">
            <div>
              <figure>
                <img src={reactLogo} alt="" />
                <figcaption><em>ESPRESSO</em></figcaption>
              </figure>
            </div>
            <div>
              <figure>
                <img src={reactLogo2} alt="" />
                <figcaption>TRADITIONAL DRIP</figcaption>
              </figure>
            </div>
            <div>
              <figure>
                <img src={reactLogo3} alt="" />
                <figcaption>CAPPUCCINO</figcaption>
              </figure>
            </div>
            <div>
              <figure>
                <img src={reactLogo4} alt="" />
                <figcaption>LATTE</figcaption>
              </figure>
            </div>
            <div>
              <figure>
                <img src={reactLogo5} alt="" />
                <figcaption>FRAPPE</figcaption>
              </figure>
            </div>
            <div>
              <figure>
                <img src={reactLogo6} alt="" />
                <figcaption>MOCHA</figcaption>
              </figure>
            </div>
            <div>
              <figure>
                <img src={reactLogo7} alt="" />
                <figcaption>PROTEIN SHAKES</figcaption>
              </figure>
            </div>
            <div>
              <figure>
                <img src={reactLogo8} alt="som" />
                <figcaption>SMOOTHIES</figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="s3">
          <div class="op">
            <h1>OPENING HOURS</h1>
            <div class="op">
              <div class="days">
                <h3>MONDAY</h3>
                <h3>TUESDAY</h3>
                <h3>WEDNESDAY</h3>
                <h3>FRIDAY</h3>
                <h3>SATURDAY</h3>
                <h3>SUNDAY</h3>
              </div>
              <div class="times">
                <h2>7am-5pm</h2>
                <h2>7am-5pm</h2>
                <h2>7am-5pm</h2>
                <h2>7am-5pm</h2>
                <h2>CLOSED</h2>
                <h2>7am-5pm</h2>
                <h2>7am-5pm</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="s4">
          <div class="menu" id="menu">
            <table border="1" style={{ width: '100%' }}>
              {/* <table border="1" style="width: 100%"> */}
              <tr>
                <th colspan="1">MENU</th>
                <th>PRICE</th>
              </tr>
              <tr>
                <td>ESPRESSO</td>
                <td>4 DT</td>
              </tr>
              <tr>
                <td>TRADITIONAL DRIP</td>
                <td>4 DT</td>
              </tr>
              <tr>
                <td>CAPPUCCINO</td>
                <td>4 DT</td>
              </tr>
              <tr>
                <td>LATTE</td>
                <td>4 DT</td>
              </tr>
              <tr>
                <td>FRAPPE</td>
                <td>4 DT</td>
              </tr>
              <tr>
                <td>MOCHA</td>
                <td>4 DT</td>
              </tr>
              <tr>
                <td>PROTEIN SHAKES</td>
                <td>4 DT</td>
              </tr>
              <tr>
                <td>SMOOTHIES</td>
                <td>4 DT</td>
              </tr>
            </table>
          </div>
        </div>
      </section>

      <div className='container p-1'>
      {/* <a href="#contact">contact</a> */}
        <h3 style={{color:"beige"}} id='contact'>Contact</h3>
        <form style={{color:"beige"}}> 
          <MDBInput id='form4Example1' wrapperClass='mb-4' label='Name' />
          <MDBInput type='email' id='form4Example2' wrapperClass='mb-4' label='Email address' />
          <MDBInput wrapperClass='mb-4' textarea id='form4Example3' rows={4} label='Message' />

          <MDBCheckbox
            wrapperClass='d-flex justify-content-center mb-4'
            id='form4Example4'
            label='Send me a copy of this message'
            defaultChecked
          />

          <MDBBtn type='submit' className='mb-4' block style={{color:"beige"}}>   
            Send Message
          </MDBBtn>
        </form>
      </div >

      <br className='br' />
      <br className='br' />
      <br className='br'/>
      <hr className='br'/>
      <div style={{color:"beige"}}>copyright!!</div>
      <br />
    </div>
  );
}

export default App;
