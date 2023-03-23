const scrollTo = () => {
    const element = document.getElementById('scrollTo');
    console.log('1')
    if (element) element.scrollIntoView({ behavior: 'smooth' });
};

export const uiActions = {
    scrollTo
};