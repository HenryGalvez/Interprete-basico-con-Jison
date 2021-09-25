import React, { Component } from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import ModalErrorsTable from './ModalErrorsTableComponent';
import ModalSymbolsTable from './ModalSymbolsTableComponent';

const parser = require('../interpreter/interpreter');


class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            output: '',
            symbolsTable: [],
            errorsTable: [],
        }
    }

    analyze(_e) {
        if (this.inputText.value !== "") {
            let count = parser.parse(this.inputText.value);
            this.setState({
                output: count.output,
                symbolsTable: count.Rsymbol,
                errorsTable: count.Rerror
            })
        }
    }

    render() {
        let rows = 20;
        //this.inputText.value = "integer a = 4;print(a);";
        return (
            <div className="container">
                <div className="rounded-pill fixed same">
                    <OverlayTrigger placement='left' overlay={<Tooltip id="tooltip-disabled">Execute</Tooltip>}>
                        <span className="d-inline-block">
                            <button
                                className="btn btn-outline-success btn-lg rounded-pill shadow"
                                onClick={(e) => this.analyze(e)}
                                data-container="div" data-toggle="popover" data-placement="left" data-content="Left popover"
                            >
                                <span className="fa fa-play"></span>
                            </button>
                        </span>
                    </OverlayTrigger>
                    <ModalSymbolsTable symbolsTable={this.state.symbolsTable} />
                    <ModalErrorsTable errorsTable={this.state.errorsTable} />
                </div>
                <div className="row">
                    <div className="col col-md-6">
                        <label htmlFor="inputText" className="form-label"><strong>Input Text</strong></label>
                        <textarea
                            className="form-control shadow"
                            name="inputText"
                            id="inputText"
                            rows={rows}
                            style={{ resize: 'none' }}
                            ref={(element) => this.inputText = element} >
                        integer a = 4;
                        </textarea>
                    </div>
                    <div className="col col-md-6">
                        <label htmlFor="outputText" className="form-label"><strong>Output Text</strong></label>
                        <textarea
                            className="form-control shadow"
                            name="outputText"
                            id="outputText"
                            rows={rows}
                            readOnly
                            style={{ resize: 'none' }}
                            value={this.state.output} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;