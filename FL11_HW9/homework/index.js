




// t_0
function getNumbers(str) {
  let ar = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i].match(/\d/)) {
      let number = parseFloat(str[i])
      ar.push(number);
    }
  }
  return ar;


console.log(getNumbers(‘string’)); 
console.log(getNumbers(‘n1um3ber95’)); 


// t_1

function findTypes(...arg) {
    const type = [];

    arg.forEach(e => {
        const type = typeof e;

        if (type[type]) {
            type[type]++;
        } else {
            type[type] = 1;
        }
    });
    return type;
}

// t_2

function executeforEach(array, functionE) {
    for (let x = 0; x < array.length; x++) {
        functionE(array[x])
    }
}

// t_3

function mapArray(array, functionM) {
    let arg = []
    executeforEach(array, function (el) {
        arg.push(functionM(el))
    })
    return arg
}

//t_4

function filterArray(arr, func) {
	let filt = [];
	executeforEach(arr, function(el) {
		if (func(el)) {
			filt.push(el);
		}
	});

	return filt;
}

//t_5

function showFormattedDate(received_date) {
    const mon = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let mon_ind = received_date.getMonth();
    let result = 'Date: ' + mon[mon_ind] + ' ' + received_date.getDate() + ' ' + received_date.getFullYear();
    return result;
}

//task6
function canConvertToDate(data){
    return !!Date.parse(data);
}



const data = [
    {
      '_id': '5b5e3168c6bf40f2c1235cd6',
      'index': 0,
      'birthday': '2016-03-18T00:00:00',
      'eyeColor': 'green',
      'name': 'Stein',
      'favoriteFruit': 'apple'
    },
    {
      '_id': '5b5e3168e328c0d72e4f27d8',
      'index': 1,
      'birthday': '1991-02-11T00:00:00',
      'eyeColor': 'blue',
      'name': 'Cortez',
      'favoriteFruit': 'strawberry'
    },
    {
      '_id': '5b5e3168cc79132b631c666a',
      'index': 2,
      'birthday': '1984-04-17T00:00:00',
      'eyeColor': 'blue',
      'name': 'Suzette',
      'favoriteFruit': 'apple'
    },
    {
      '_id': '5b5e31682093adcc6cd0dde5',
      'index': 3,
      'birthday': '1994-04-17T00:00:00',
      'eyeColor': 'green',
      'name': 'George',
      'favoriteFruit': 'banana'
    }
]
