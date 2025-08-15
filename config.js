// Configuration for different environments
const config = {
    development: {
        backendUrl: 'http://localhost:3000',
        apiEndpoint: '/api/reservations'
    },
    production: {
        backendUrl: 'https://niemammoto-backend.herokuapp.com', // Update this with your actual backend URL
        apiEndpoint: '/api/reservations'
    }
};

// For browser environment, always use development config
const currentConfig = config.development;

// Function to get full API URL
function getApiUrl() {
    return currentConfig.backendUrl + currentConfig.apiEndpoint;
}

// Make config available globally for browser
window.appConfig = {
    config: config,
    currentConfig: currentConfig,
    getApiUrl: getApiUrl
};

