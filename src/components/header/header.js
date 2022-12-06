import './header.css';

const Header = () => {
    const date = new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"});
    return (
    <header>
    <h1>Weather</h1>
    <p>{date}</p>
    </header>
    );
}

export default Header;