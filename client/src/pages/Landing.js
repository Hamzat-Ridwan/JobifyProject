import React from 'react';
import main from '../assets/images/main.svg'
import Wrapper from '../assets/wrappers/LandingPage';
import Logo from '../components/Logo';
import {Link} from 'react-router-dom'

const Landing = () => {
  return (
    <Wrapper>
        <nav>
            <Logo/>
        </nav>
        <div className='container page' >
            <div className='info'>
                <h1>job <span>tracking</span> App</h1>
                <p>
                I'm baby enamel pin schlitz migas butcher bitters etsy dreamcatcher salvia blog wayfarers williamsburg PBR&B man braid DIY leggings. La croix unicorn meggings whatever migas farm-to-table cliche neutra letterpress hell of 3 wolf moon. Tacos tote bag poke ramps small batch photo booth.
                </p>
                <Link to='/register'>
                    <button className="btn btn-hero">                                        
                        Login/Register
                    </button> 
                </Link>
                
            </div>
            <img src={main} alt="job hunt" className="img main-img"/>
        </div>
    </Wrapper>
  )
}


export default Landing