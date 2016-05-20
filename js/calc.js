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
		return 0;
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
            console.log('x', x);
			return this.acc;
		} else {
            console.log('x', x);
            this.acc = x;
            return this.acc;
        }
	},
	'chopE': function(x) {
        // remove js float error
		return Math.round(
                x * Math.pow(10, this.nbDigits)) / Math.pow(10, this.nbDigits);
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
console.log('digits:', digits);

var nbDigits = digits.length;

var display = function(strNumber) {
    console.log('strNumber:', strNumber);
    var dotPosition = strNumber.indexOf('.');

    //setDot(dotPosition);

    strNumber = strNumber.replace('.', '');
    var len = strNumber.length;
    var digitNo = nbDigits;
    while(digitNo--) {
        setDigit(digits[digitNo], strNumber[len - (nbDigits - digitNo)]);
    }
    /*
    for (i=0; i<nbDigits; i++) {
        setDigit(digits[i], strNumber[i]);
    }
    */
};

var setDigit = function(digit, number, on) {
    var segments = digit.querySelectorAll('.segment');
    var current = parseInt(digit.getAttribute('data-value'));
    if (number === undefined) {
        number = 10;
    }
    
    // only switch if number has changed or wasn't set
    if (!isNaN(current) && current != number) {
        // unset previous number
        console.log(
                'digitSegments[' + current + ']:, ', digitSegments[current], 
                'number: ', number );
        digitSegments[current].forEach(function(digitSegment, index) {
            /*
            setTimeout(function() {
                console.log('digitSegment:', digitSegment);
                segments[digitSegment-1].classList.remove('on');
            }, index*25);
            */
            console.log('digitSegment:', digitSegment);
            segments[digitSegment-1].classList.remove('on');
        });
    }

    if (isNaN(current) || current != number || current === 10 ) {
        // set new number after
        console.log(
                'digitSegments[' + current + ']:, ', digitSegments[current], 
                'number: ', number );
        /*
        setTimeout(function() {
            digitSegments[number].forEach(function(digitSegment, index) {
                setTimeout(function() {
                    console.log('digitSegment:', digitSegment);
                    segments[digitSegment-1].classList.add('on');
                }, index*25);
            });
        }, 50);
        */
        digitSegments[number].forEach(function(digitSegment, index) {
            console.log('digitSegment:', digitSegment);
            segments[digitSegment-1].classList.add('on');
        });
        digit.setAttribute('data-value', number);
    }
};

// jQuery
$(function() {
    $('.dig-button').click(function() {
        //$('#affichage').html(cal.addDigit($(this).html()));
        console.log('click', $(this).html());
        display(cal.addDigit($(this).html()));
    });
    $('.dot').click(function() {
        //$('#affichage').html(cal.dot());
        display(cal.dot());
    });
    $('.ce').click(function() {
        //$('#affichage').html(cal.ce());
        display(cal.ce());
    });
    $('.ac').click(function() {
        $('#affichage').html(cal.ac());
    });
    $('.op').click(function() {
        var sign = $(this).html();
        console.log('op click recu');
        $('#affichage').html(cal.operation($(this).html()));
    });
});
