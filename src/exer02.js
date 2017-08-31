// @flow
/* Literal Types */
function getColor(name: 'success' | 'warning' | 'danger') {
  switch (name) {
    case 'success': return 'green';
    case 'warning': return 'orange';
    case 'danger': return 'red';
  }
}

getColor('success');
//getColor('yellow'); // Error!
