import "./Header.scss";
export const Header = () => {
    return (
        <div className = 'header-all'> 
            <h1 className = 'title-name'>
                <p>Todo App</p>
            </h1>
            <ul className = "nav-list">
                <li className = "nav-list-item">
                    <a>Top</a></li>
                <li className = "nav-list-item">Works</li>
                <li className = "nav-list-item">About</li>
                <li className = "nav-list-item">Contact</li>
            </ul>
        </div>
    );
}
export default Header