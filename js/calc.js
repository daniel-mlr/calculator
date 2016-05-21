// ============== calculator =============
var signToOperator = {
    '+': 'add',
    '-': 'substract',
    '*': 'multiply',
    '/': 'divide',
    '=': 'equal',
    '%': 'pct'
};
var cal = {
	'num': '',
	'trace': [0],
	'acc': 0,
	'nextOp': '',
	'nbDigits': 12,
	
    'addDigit': function(dig) {
        this.num += dig;
        return this.num;
	},
	'delDigit': function() {
		this.num = this.num.slice(0, -1);
		return this.num;
	},
	'dot': function() {
        this.num += '.';
		return this.num;
	},
    'operation': function(sign) {
        this.acc = this.doCalc(this.nextOp, this.num);
        //console.log(typeof this.acc, this.acc);
        this.nextOp = signToOperator[sign];
        this.num = '';
        return this.acc;
    },

	'ce': function() {
        /*
		this.num = '';
		return 0;
        */
        return this.delDigit();
	},
	'ac': function() {
		this.nextOp = '';
		this.acc = 0;
		this.num = '';
		return '0';
	},
	'doCalc': function(operation, x) {
        if (!x) {x = 0;}
		if (operation === 'add') {
            this.acc = parseFloat(this.acc) + parseFloat(x);
            return this.chopE(this.acc);
        } else if (operation === 'substract') {
			return this.chopE(this.acc - x);	
		} else if (operation === 'multiply') {
			return this.chopE(this.acc * x);
		} else if (operation === 'divide') {
			return this.chopE(this.acc / x);
		} else if (operation === 'equal') {
            //console.log('x', x);
			return this.acc.toString();
		} else {
            //console.log('x', x);
            this.acc = x.toString();
            return this.acc;
        }
	},
	'chopE': function(x) {
        // remove js float error
		return (Math.round(
                x * Math.pow(10, this.nbDigits)) / Math.pow(10, this.nbDigits)
                ).toString();
	}
};

//  ==========  LED display ===============
var digitSegments = [
    [1,2,3,4,5,6],
    [2,3],
    [1,2,7,5,4],
    [1,2,7,3,4],
    [6,7,2,3],
    [1,6,7,3,4],
    [1,6,5,4,3,7],
    [1,2,3], 
    [1,2,3,4,5,6,7],
    [1,2,7,3,6],
    []
];

var digits = document.querySelector('.clock').querySelectorAll('.digit');
var separators = document.querySelector('.clock').querySelectorAll('.separator'); 

var nbDigits = digits.length;

var display = function(strNumber) {
    dotPosition = strNumber.indexOf('.');

    strNumber = strNumber.replace('.', '');
    var len = strNumber.length;
    
    setDot(len, dotPosition);
 
    var digitNo = nbDigits;
    while(digitNo--) {
        setDigit(digits[digitNo], strNumber[len - (nbDigits - digitNo)]);
    }
};

var setDot = function(nbrLength, dotIndex) {
    //if (dotIndex >= 0) {
        var sepPosition = nbDigits - 1 - (nbrLength - dotIndex);
        for (i=0, l = separators.length; i<l; i++) {
            if (i === sepPosition && dotIndex >= 0) {
                separators[i].classList.add("on");
            } else {
                separators[i].classList.remove("on");
            }
        }
    /*
    } else {
        for (i=0, l = separators.length; i<l; i++) {
            separators[i].classList.remove("on");
        }
    }
    */
};

var setDigit = function(digit, number) {
    var segments = digit.querySelectorAll('.segment');
    var current = parseInt(digit.getAttribute('data-value'));
    if (number === undefined) {
        number = 10;
    }
    
    // only switch if number has changed or wasn't set
    if (!isNaN(current) && current != number) {
        // unset previous number
        digitSegments[current].forEach(function(digitSegment, index) {
            segments[digitSegment-1].classList.remove('on');
        });
    }

    if (isNaN(current) || current != number || current === 10 ) {
        // set new number after
        digitSegments[number].forEach(function(digitSegment, index) {
            segments[digitSegment-1].classList.add('on');
        });
        digit.setAttribute('data-value', number);
    }
};

// jQuery
$(function() {
    $('.dig-button').click(function() {
        display(cal.addDigit($(this).html()));
    });
    $('.dot').click(function() {
        display(cal.dot());
    });
    $('.ce').click(function() {
        display(cal.ce());
    });
    $('.ac').click(function() {
        $('#affichage').html(cal.ac());
        display(cal.ac());
    });
    $('.op').click(function() {
        display(cal.operation($(this).html()));
    });
});
