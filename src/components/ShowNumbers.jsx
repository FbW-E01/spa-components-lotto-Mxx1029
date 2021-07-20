import React from 'react';
import './ShowNumbers.css';

class ShowNumbers extends React.Component {
    constructor() {
        super();
        this.state = {
            sixNumbers: [],
            luckyNum: null
        }
    }

    getNumbers = () => {
        // Milads version:
        // to get an array with 6 empty nested arrays
        // const emptyArrays = Array(6);
        // fill the array with 6 random generated numbers
        // const randomNumbers = emptyArrays.fill().map(() => Math.floor((Math.random() * 49) + 1));

        // my version that checks if numbers are unique
        const numbers = [];
        
        // with a while loop
        // while (numbers.length < 6) {
        //     const randomNum = Math.floor((Math.random() * 49) + 1);
        //     if (!numbers.includes(randomNum)) {
        //         numbers.push(randomNum)
        //     };
        // }

        // with a for loop
        for (let i = 0; i < 6; ) {
            const randomNum = Math.floor((Math.random() * 49) + 1);
            if (!numbers.includes(randomNum)) {
                numbers.push(randomNum);
                i++;
            };
        }

        const lastNum = Math.floor((Math.random() * 10) + 1 );
        this.setState({sixNumbers: numbers, luckyNum: lastNum});
    }

    reset = () => {
        this.setState({sixNumbers: [], luckyNum: null})
    }

    render() {
        return (
            <React.Fragment> 
                <div className="numbers-wrapper">
                    {this.state.sixNumbers.map(number => {
                        return (
                            <span className="number">
                                {number}
                            </span>
                        )
                    })}
                    {this.state.luckyNum ? 
                        <span className="number7">
                            {this.state.luckyNum}
                        </span> 
                    : null}
                </div>
                <div className="buttons-wrapper">
                    <button 
                        className="reset" 
                        onClick={this.reset}
                    >Reset
                    </button>
                    <button 
                        className="show"
                        onClick={this.getNumbers}
                    >Show me lucky numbers
                    </button>
                </div>
            </React.Fragment>
        )
    }
}

export default ShowNumbers;