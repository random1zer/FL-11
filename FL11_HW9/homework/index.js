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



function executeforEach(array, functionE) {
    for (let x = 0; x < array.length; x++) {
        functionE(array[x])
    }
}

function mapArray(array, functionM) {
    let arg = []
    executeforEach(array, function (el) {
        arg.push(functionM(el))
    })
    return arg
}



function filterArray(arr, func) {
	let filt = [];
	executeforEach(arr, function(el) {
		if (func(el)) {
			filt.push(el);
		}
	});

	return filt;
}


function showFormattedDate(received_date) {
    const mon = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let mon_ind = received_date.getMonth();
    let result = 'Date: ' + mon[mon_ind] + ' ' + received_date.getDate() + ' ' + received_date.getFullYear();
    return result;
}


function canConvertToDate(data){
    return !!Date.parse(data);
}



function daysBetween(x,y){
    const dayinMs = 86400000
    let date1 = new Date(x);
    let date2 = new Date(y);
    let dDays = Math.round((date2 - date1) / dayinMs); 
   return dDays
}

function getAmountOfAdultPeople(data){
    const age = 18;
    const ear = 365;
    let now = new Date();

    return filterArray(data, function (x) {
        let birthDate = new Date(x.birthday);
        return Math.round(daysBetween(birthDate, now) / ear) > age
    }).length;
}


function keys() {
    let keyArr = []
    for (let i = 0; i < arguments.length; i++) {
        let keyEl = arguments[i]
        for (let [key] of Object.entries(keyEl)) {
            keyArr.push(key)
        }
    }
    return keyArr
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
