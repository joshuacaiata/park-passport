import classes from './Home.module.css';

function HomePage() {
    return (
    <div>
        <div className={classes.card}>
            <div className={classes.hero}>
                <img src="https://images.unsplash.com/photo-1484923720570-4bc210954735?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" alt="hello"/>
                <p>Hello Joshua, would you like to play a game?</p>
            </div>
        </div>
    </div>
    );
}

export default HomePage;