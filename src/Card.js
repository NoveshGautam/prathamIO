import React from 'react';
import image from './images/novesh.jpg.png'
const card = () => {
  return (
    <div style={styles.outerContainer}>
      <div style={styles.innerContainer}>
      <img src={image} style={styles.image}/>
      <h1 style={styles.heading}>Integration and Development</h1>
      <p style={styles.para}>Software development, Quality assurance 
        and testing, Seamless deployment and integration 
        with existing systems, databases etc.</p>
        <div style={styles.footer}>
          Learn More
        </div>
      </div>
     
    </div>
  );
};

const styles = {
  outerContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'white',
    padding: '20px',
    height: '800px',
  },
  innerContainer: {
    width: '450px',
    height: '650px',
    background: 'white',
    borderRadius: '25px',
    boxShadow: '0 4px 15px rgba(10, 15, 15, 5.1)'
    
    
  },
  heading: {
    marginTop: '100px',
    fontSize: '36px', 
    marginLeft: '25px',
    fontWeight: '250', 
    whiteSpace: 'pre-line'
 
},
 para:{
  marginLeft: '25px',
  marginRight: '55px',
  fontSize: '22px',
  fontWeight: '250',
  marginTop: '50px'
},
footer: {
  textAlign: 'center',
  marginTop: '60px',
  border: '1px solid black', 
  borderRadius: '5px', 
  padding: '10px 20px',
  marginLeft: '30px',
  marginRight: '30px',
  fontSize: '22px',
  fontWeight: '250'
},


image: {
  width: '35%', 
  borderRadius: '10px',
  marginBottom: '20px',
  display: 'block',
  marginTop : '35px',
  marginLeft: "140px"
},

};
  

export default card;
