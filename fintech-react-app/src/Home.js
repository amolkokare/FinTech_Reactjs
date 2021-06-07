import React, { Component } from 'react';
import { Button, Table  } from 'react-bootstrap'


export  class Home extends Component {
    
    constructor(props) {
        super(props);
        this.state = { deps: []}
      }
      refreshList() {
        fetch(process.env.REACT_APP_API + 'fintech')
          .then(response => response.json())
          .then(data => {
            this.setState({ deps: data });
          
          });
        }
        componentDidMount(){
          this.refreshList();
        }
        componentDidUpdate(){
          this.refreshList();
        }
    
        render(){
            const { deps } = this.state;
          
    
          return (
            <>
           
    
            
            <div className='ab'>
                    <h1 >Corporate IT Training Courses</h1> 
                    </div>
                    <div className="serach-bar">
                    <input type ="text" placeholder='Search' onChange={e=>this.setState({setSearchTerm:e.target.value})}
                     
                     />
    
                    </div>  
                    
            <div align="center">
              <table   className='tb' border='1'>
                <thead>
                  <tr>
                    
                   
                    <th >SYMBOL</th>
                    <th>TIMESTAMP</th>
                    <th >HIGH</th>
                    <th  >LOW</th>
                    <th>Volume</th>
                    
                    <th>sma10</th>
                    
                    <th>sma20</th>
                    
                    <th>sma200</th>
                    <th>Percent_of_Price_Change5_days</th>
                    <th>Volume_changein_20Days</th>
                    <th>Relative_Volume</th>
                    <th>WeekLow52</th>
                    <th>Away_From_52WeekHigh</th>
                    <th>Away_From_52WeekLow</th>
    
    
                  </tr>
                </thead>
                <tbody>
                {deps.map(dep=>
                    <tr key={dep.SyllabusId}>
                      <td align='center'>{dep.SYMBOL}</td>
                      
                      <td align='center'>{dep.TIMESTAMP}</td>
                      <td align='center'>{dep.HIGH}</td>
                      <td align='center' >{dep.LOW}</td>
                      <td align='center'>{dep.Volume}</td>
                      {/* <td align='center'>{dep.sma05}</td> */}
                      <td align='center'>{dep.sma10}</td>
                      {/* <td align='center'>{dep.sma15}</td> */}
                      <td align='center'>{dep.sma20}</td>
                      {/* <td align='center'>{dep.sma50}</td> */}
                      <td align='center'>{dep.sma200}</td>
                      <td align='center'>{dep.Percent_of_Price_Change5_days}</td>
                      <td align='center'>{dep.Volume_changein_20Days}</td>
                      <td align='center'>{dep.Relative_Volume}</td>
                      <td align='center'>{dep.WeekLow52}</td>
                      <td align='center'>{dep.Away_From_52WeekHigh}</td>
                      <td align='center'>{dep.Away_From_52WeekLow}</td>
                      <td align='center'><Button   className='btn'  color='danger' >Buy</Button></td>
                      
    
                    </tr>)}
                </tbody>
              </table>
    
            </div>
            </>
          )
        }
      }
