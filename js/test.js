/**
 * Created by pokid_000 on 30.07.2016.
 */
var New = React.createClass({
    render: function() {
        return (
            <div className="main-wrapper">
                <div className="box">
                    <span className="head">ReView </span>
                    </div>
                    <div className="form">
                        <div className="fields">
                            <div className="full-width">
                            <label htmlFor="username">Логин</label>
                            </div>
                            <input type="text" id="username" />
                            <div className="clear">
                            </div>
                            <div className="full-width">
                                <label htmlFor="password">Пароль</label>
                            </div>
                            <input type="password" id="password" />
                        </div>
                        <div className="main-button">
                            <a href="/account.html" className="button-enter">Войти</a>
                        </div>
                </div>
            </div>
        );
    }
});
ReactDOM.render(
<New />,
    document.getElementById('main-container')
);