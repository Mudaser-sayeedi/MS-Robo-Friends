import './Navigation.css';

const Navigation = ({search}) => {
    return (
        <div className="navigation-container">
            <h1 title='App Name'>Robo Friends</h1>
            <input type="text" placeholder='Search Robots' autoFocus onChange={search} />
        </div>
    );
}


export default Navigation;