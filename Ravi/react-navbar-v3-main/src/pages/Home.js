import React, { Component,onSort } from 'react';
import { Button, Table } from 'react-bootstrap'
import Box from '@material-ui/core/Box';
import 'bootstrap/dist/css/bootstrap.css';


const mystyle = {
  color: "white",
  backgroundColor: "#E5E7E9",
  padding: "10px",
  fontFamily: "Arial",
  textAlign: "center",
  alignItems: "center",
  display: "flex",
 justifyContent: "center",
 alignItems: "center",
};


class  Per extends Component {
  constructor(props) {
    super(props);
    
  
    this.state = { deps: [],searchTerm :'',sortType:'asc'}
    this.searchTerm = this.search.bind(this);
  
  }
  

componentDidMount() {
  this.receivedData()
}
  refreshList() {
    fetch(process.env.REACT_APP_API + 'fintech')
      .then(response => response.json())
      .then(data => {
        this.setState({ deps: data });
        this.setState({ WeekHigh: data });

      });
    }
    search(e) {
      console.log(e.target.value)
      this.setState({searchTerm: e.target.value})
    }
    componentDidMount(){
      this.refreshList();
    }
    componentDidUpdate(){
      this.refreshList();
    }
    onSort = sortType =>{
      this.setState({ sortType  });
   
     }
     
    render(){

      const { deps,sortType } = this.state;
      const sorted = deps.sort((a,b)=>{
        const isReversed = (sortType === 'asc')? 1 : -1;
      
        return isReversed * (a.Avg_Price_5days-b.Relative_Volume)

      });

      
       return (
        <>
        <div style={mystyle}>
     
<div 
       style={{ marginRight: '32.5%', marginTop: '60px', width: '40%'
          }}> 
    <Box color="white" bgcolor="#AEB6BF" p={1} >
   <h3 style={{ color:'black' }} >Top&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     
<Button variant="link" onClick={()=>this.onSort("desc")}>
           Gainer
            </Button>
               <Button variant="link" onClick={()=>this.onSort("asc")}>
          Losers
            </Button>
            </h3>
            </Box>
    <table className="per">
            <thead>
              <tr>
                <th scope="col">SYMBOL</th>
                <th scope="col">CLOSE1</th>
               <th scope="col">%chg_5days</th>
              </tr>
            </thead>
            <tbody>

            {this.state.deps.filter(dep =>{
                return Math.max(10)

              }).map(dep=>
                <tr key={dep.ID}>
                  <td align='left'style={{ color:'#6495ED' }}>{dep.SYMBOL}</td>
                  
                  <td align='left'>{dep.CLOSE1}</td>

                 <td align='left'>{dep.Avg_Price_5days}</td>

                </tr>)}
            </tbody>
          </table>
          
          </div>
          <div>
        </div>
</div>

        </>
      )
    }
  }
  export default Per;
  

