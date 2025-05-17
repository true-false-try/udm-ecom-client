const Home = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Welcome to Home Page!</h1>
            <p style={styles.description}>
                This is your starting point. Explore features, login, or sign up to get started.
            </p>
            <button style={styles.button} onClick={() => alert('Button clicked!')}>
                Get Started
            </button>
        </div>
    );
};

const styles = {
    container: {
        maxWidth: '600px',
        margin: '40px auto',
        padding: '20px',
        textAlign: 'center',
        fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
        backgroundColor: '#f9f9f9',
        borderRadius: '10px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    },
    title: {
        color: '#2c3e50',
        marginBottom: '15px',
    },
    description: {
        fontSize: '18px',
        color: '#555',
        marginBottom: '25px',
    },
    button: {
        backgroundColor: '#3498db',
        border: 'none',
        color: 'white',
        padding: '12px 28px',
        fontSize: '16px',
        borderRadius: '6px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
    },
};

export default Home;