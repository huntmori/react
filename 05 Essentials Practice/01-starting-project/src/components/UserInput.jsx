import { useState } from "react";

export default function UserInput({ userInput, onChange }){

    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>Initial Investment</label>
                    <input
                        type="number"
                        required
                        value={userInput.initialInvestment}
                        onChange={
                            function(event) {
                                return onChange('initialInvestment', event.target.value)
                            }
                        }
                    />
                </p>
                <p>
                    <label>Annual Investment</label>
                    <input
                        type="number"
                        required
                        value={userInput.annualInvestment}
                        onChange={
                            function(event) {
                                return onChange('annualInvestment', event.target.value)
                            }
                        }
                    />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>Expected Investment</label>
                    <input
                        type="number"
                        required
                        value={userInput.expectedReturn}
                        onChange={
                            function(event) {
                                return onChange('expectedReturn', event.target.value)
                            }
                        }
                    />
                </p>
                <p>
                    <label>Duration</label>
                    <input
                        type="number"
                        required
                        value={userInput.duration}
                        onChange={
                            function(event) {
                                return onChangesssssssssssssssssss('duration', event.target.value)
                            }
                        }
                    />
                </p>
            </div>
        </section>
    );
}