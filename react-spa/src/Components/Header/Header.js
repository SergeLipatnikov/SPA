import React from "react";

import '../Header/header.sass';

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <a>
                    Липатников Сергей
                </a>
            <div className="breadcrumb">
                <a>Главная</a>
                <div className="breadcrumb__separator">/</div>
                <a>О себе</a>
                <div className="breadcrumb__separator">/</div>
                <a>Проекты</a>
                <div className="breadcrumb__separator">/</div>
                <a>Контакты</a>
            </div>
            </div>
        )
    }
}

export default Header;