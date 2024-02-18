const parent = React.createElement(
    'div',
     {id:'Parent'},
    React.createElement(
   'div',
   {id: 'child'}
    ),
    React.createElement(
        'h1',
        {},
        'Hi this my trail Work'
    )

);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);