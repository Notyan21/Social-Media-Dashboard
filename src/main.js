const toggleContainer = document.querySelector('#toggle-container');
const toggleButton = document.querySelector('#toggle-button');

const setLightTheme = () => {
    document.documentElement.classList.remove('dark');
    toggleContainer.classList.add('bg-toggle-light', 'justify-end');
    toggleContainer.classList.remove('bg-gradient-to-r', 'from-twitter', 'to-lime-green');
    toggleButton.classList.add('bg-white');
    toggleButton.classList.remove('bg-dt-dsb-card-bg');
    localStorage.setItem('theme', 'light'); 
};

const setDarkTheme = () => {
    document.documentElement.classList.add('dark');
    toggleContainer.classList.remove('bg-toggle-light', 'justify-end');
    toggleContainer.classList.add('bg-gradient-to-r', 'from-twitter', 'to-lime-green');
    toggleButton.classList.remove('bg-white');
    toggleButton.classList.add('bg-dt-dsb-card-bg');
    localStorage.setItem('theme', 'dark'); 
};

const applyInitialTheme = () => {
    if (localStorage.getItem('theme') === 'dark') {
        setDarkTheme();
    } else {
        setLightTheme();
    }
};

const toggleTheme = () => {
    if (localStorage.getItem('theme') === 'dark') {
        setLightTheme(); 
    } else {
        setDarkTheme(); 
    }
};


applyInitialTheme();


toggleContainer.addEventListener('click',() =>{
    toggleContainer.classList.add('transition-all', 'duration-300', 'ease-in-out');
    toggleTheme()
});
