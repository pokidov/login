/**
 * Created by pokid_000 on 30.07.2016.
 */

var Header;
Header = React.createClass({
    render: function () {
        return (
            <div className="title">
                <div className="header"></div>
            </div>
        );
    }
    });
var Register;
Register = React.createClass({
    render: function () {
        return (
            <div classname="rbutton">
                <a href="/account.html" className="button-enter">Register</a>
            </div>
        )

    }
})
var Footer = React.createClass({
    render: function() {
        return (
            <div className="footer-box">
                <div className="footer-content">
                    <div className="social">
                    </div>
                </div>
            </div>
        );
    }
});
var New = React.createClass({
    render: function() {
        return (
            <div className="main">
                <Header/>
                <div className="box">
                    <span className="avatar"></span>
                    <img className="round" src="./css/img/skull.jpg"/>
                    </div>
                    <div className="form">
                        <div className="fields">
                            <div className="login">
                            <label htmlFor="username">login</label>
                            </div>
                            <input type="text" id="username" placeholder="Your Login" />
                            <div className="clear">
                            </div>
                            <div className="login">
                                <label htmlFor="password">password</label>
                            </div>
                            <input type="password" id="password" placeholder="Your Password" />
                        </div>
                        <div className="button">
                            <a href="/account.html" className="button-enter">Enter</a>
                        </div>
                </div>
                <Register/>
                <Footer />
            </div>
        );
    }
});
ReactDOM.render(
<New />,
    document.getElementById('main')
);