import React, { Component } from 'react';
import { Button, Table  } from 'react-bootstrap'

export  class Home extends Component {

    constructor(props) {
        super(props);
        this.state = { deps: [] , searchTerm :''};


        this.showDetails = this.showDetails.bind(this);
    this.searchTerm = this.search.bind(this);
      }
      
      refreshList() {
        fetch(process.env.REACT_APP_API + 'fintech')
          .then(response => response.json())
          .then(data => {
            this.setState({ deps: data });

          })
          
      }
          search(e) {
            console.log(e.target.value)
            this.setState({searchTerm: e.target.value})
        }  
        
          showDetails(x) {
          x.show = !x.show;
            this.setState({...x});
            console.log(this.state)
          
          
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
              
              <div class="container">
                
              <header>
                <h1> React Filter Search Demo</h1>
                
              </header>
              
              <input class="search-box" onKeyUp={(e) => this.searchTerm(e)}   type="text"></input>
                <ul class="">
                  
                {this.state.deps.filter(x => {
                  return x.SYMBOL.toLowerCase().indexOf(this.state.searchTerm) > -1;
                }).map((x) => {
                  return (<li onClick={() => this.showDetails(x)}>
                    <table>
                    <thead>
                    <tr>
                    <th align='center'>{x.SYMBOL}</th>
                    <th align='center'>{x.HIGH}</th>
                  
                    <th align='center'>{x.LOW}</th>
                    <th align='center'>{x.Volume}</th>
                    <th align='center'>{x.sma05}</th>
                    <th align='center'>{x.sma10}</th>
                    <th align='center'>{x.sma15}</th>
                    <th align='center'>{x.sma20}</th>
                    <th dalign='center'>{x.sma50}</th>
                    <th align='center'>{x.sma200}</th>
                    <th align='center'>{x.Percent_of_Price_Change5_days}</th>
                    <th align='center'>{x.Volume_changein_20Days}</th>
                    <th align='center'>{x.Relative_Volume}</th>
                    <th align='center'>{x.WeekLow52}</th>
                    <th align='center'>{x.Away_From_52WeekHigh}</th>
                    <th align='center'>{x.Away_From_52WeekLow}</th>
                    



                    
                      </tr>
                
                      </thead>
                      </table>
                
                
                  {  x.show ? <div>
                  <td>{x.SYMBOL}</td>
                  <td>{x.TIMESTAMP}</td>
                  <td>{x.HIGH}</td>
                  <td>{x.LOW}</td>
                  <td>{x.Volume}</td>
                  <td>{x.sma05}</td>
                  <td>{x.sma10}</td>
                  <td>{x.sma15}</td>
                  <td>{x.sma20}</td>
                  <td>{x.sma50}</td>
                  <td>{x.sma200}</td>
                  <td>{x.Percent_of_Price_Change5_days}</td>
                  <td>{x.Volume_changein_20Days}</td>
                  <td>{x.Relative_Volume}</td>
                  <td>{x.WeekLow52}</td>
                  <td>{x.Away_From_52WeekHigh}</td>
                  <td>{x.Away_From_52WeekLow}</td>
                  
                  </div> : null }
                  </li>
                  );
                })}
              
                </ul>
              
              </div>
            );
          }
        }
