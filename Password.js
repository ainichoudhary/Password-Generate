import React, {useState} from "react";
import {passwordService} from "./passwordService";

let Password = () => {

    let [state, setstate] = useState({
        generatePassword: "",
        passwordLength: 20,
        symbol: false,
        number: false,
        lower: false,
        upper: false,
    });

    let updateInput = (event) => {
        setstate({
            ...state,
            [event.target.name]: event.target.value
        })
    }
    let updateCheck = (event) => {
        setstate({
            ...state,
            [event.target.name]: event.target.checked
        })
    }

    let submit = (event) => {
        event.preventDefault()
        let passwordObj = passwordService.getPasswordObj(state)
        let thePassword = passwordService.generatePassword(passwordObj, state.passwordLength)
        console.log(thePassword)
        setstate({...state, generatePassword: thePassword})
    }
    return (
        <React.Fragment>
            {/*<pre>{JSON.stringify(state)}</pre>*/}
            <div className="container">
                <div className="row">
                    <div className="card">
                        <div className="card-header">
                            <h1>Password Generator</h1>
                        </div>
                        <div className="card-body">
                            <form onSubmit={submit}>
                                <div className="input-group">
                                    <span className="input-group-text">password</span>
                                    <input
                                        // required={true}
                                        value={state.generatePassword} onChange={updateInput}
                                        name="generatePassword"
                                        type="text" className="form-control" placeholder="Generate Password"/>
                                </div>
                                <div className="input-group">
                                    <input
                                        value={state.passwordLength} onChange={updateInput}
                                        name="passwordLength"
                                        type="number" className="form-control" placeholder="Password length"/>
                                    <span className="input-group-text">password length</span>
                                </div>
                                <div className="input-group">
                                      <span className="input-group-text">
                                          <input
                                              onChange={updateCheck}
                                              name="symbol"
                                              type="checkbox" className="form-check-input"/>
                                         <input type="text" className="form-control" disabled={true} placeholder="symbols"/>
                                      </span>
                                </div>

                                <div className="input-group">
                                     <span className="input-group-text">
                                         <input onChange={updateCheck} name="number" type="checkbox" className="form-check-input"/>
                                         <input type="text" className="form-control" disabled={true} placeholder="Numbers"/>
                                     </span>
                                </div>

                                <div className="input-group">
                                     <span className="input-group-text">
                                    <input onChange={updateCheck} name="lower" type="checkbox" className="form-check-input"/>
                                     <input type="text" className="form-control" disabled={true} placeholder="Lower case letters"/>
                                     </span>
                                </div>

                                <div className="input-group">
                                     <span className="input-group-text">
                                      <input onChange={updateCheck} name="upper" type="checkbox" className="form-check-input"/>
                                         <input type="text" className="form-control" disabled={true} placeholder="Uppercase letters"/>
                                      </span>
                                </div>
                                <div className="button">
                                    <input className="btn btn-outline" type="submit" value="Generate"/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Password;