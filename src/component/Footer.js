import React, { Component } from 'react';

export default class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="col-md-12" style={{
                    position: "absolute",
                    padding: "15px",
                }}>
                    <hr />
                    <p>&copy; skr狠人 &middot;
                        <a href="#">Privacy</a> &middot;
                        <a href="#">Terms</a>                        
                        <a href="#" style={{"right": "15px"}}>回到顶部</a>
                    </p>
                </footer>
            </div >
        )
    }
}
