import { Component } from "react";
import { Container, Row } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";


class Countries extends Component{

    state= {
        Countries : [],
        config : {
            headers: { authorization: `Bearer ${localStorage.getItem('token')}` }
        }
    }
    
   

    componentDidMount(){
        axios.get("http://localhost:90/countries/showall")
        .then(response =>{
            console.log(response)
            this.setState({
                Countries : response.data.data
            })
        })
        .catch((err) =>{
            console.log(err.response)
        })
    }

    // displayCountries = (country) =>{
    //     axios.post('http://localhost:90/countries/showall', country, this.state.config)
    //     .then((response) =>{
    //         console.log(response)
    //     })
    //     .catch((err) =>{
    //         console.log(err.response)
    //     })
        
    // }
    render(){
        return(
            // <Container>
                <Row>
                <div className='countries-section'>
                    <div className ='countries'>{this.state.Countries.map((countries) => {
                        return(
                            <div className="country" key={countries._id}>
                                <Link to={`/countries/showall/${countries._id}`}>
                                    <img src ={`http://localhost:90/${countries.countryImage}`}  className ='countries-img'/>
                                </Link>
                                <div>
                                    {countries.countryName}
                                </div>
                                <button className='Book-btn'>
                                            <Link to={"/countriessssss/" + countries._id } className="Book-btn1">
                                                View
                                        </Link>
                                </button>
                            </div>
                         
                        ) 
                    })}</div>
                </div>
                </Row>
            // </Container>
            
        )
    }
} 


export default Countries