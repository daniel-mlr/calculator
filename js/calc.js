var signToOperator = {
    '+': 'plus',
    '-': 'minus',
    '*': 'times',
    '/': 'divBy',
    '%': 'pct'
};
var cal = {
	'num': '',
	'trace': [0],
	'acc': 0,
	'decimal': 0,
	'nextOp': '',
	'nbDigits': 12,
	'addDigit': function(dig) {
		if (this.decimal) {
			//this.num += dig / Math.pow(10, this.decimal);
            this.num += dig;
			this.decimal++;
			return this.num;
		} else {
            console.log('avant addDigit', this.num, typeof this.num);
			//this.num = this.num * 10 + dig;
			this.num = this.num + dig;
            console.log('addDigit', this.num, typeof this.num);
			return this.num;
		}
	},
	'delDigit': function() {
		this.num = Math.floor(this.num / 10);
		return this.num;
	},
	'dot': function() {
		if (!this.decimal) {
			this.decimal += 1;
		}
        this.num += '.';
		return this.num;
	},
    'operation': function(operator) {
        if (operator === '+') {
            this.acc = this.doCalc(this.nextOp, this.num);
            this.nextOp = 'add';
            this.decimal = 0;
            this.num = '';
            return this.acc;
        } else if (operator === '-'){
            this.acc = this.doCalc(this.nextOp, this.num);
            this.nextOp = 'substract';
            this.decimal = 0;
            this.num = '';
            return this.acc;
        } else if (operator === '*'){
            this.acc = this.doCalc(this.nextOp, this.num);
            this.nextOp = 'multiply';
            this.decimal = 0;
            this.num = '';
            return this.acc;
        } else if (operator === '/'){
            this.acc = this.doCalc(this.nextOp, this.num);
            this.nextOp = 'divide';
            this.decimal = 0;
            this.num = '';
            return this.acc;
        } else if (operator === '='){
            this.acc = this.doCalc(this.nextOp, this.num);
            this.nextOp = 'divide';
            this.decimal = 0;
            this.num = '';
            return this.acc;
        } else {
        }
    },



	'plus': function() {
		this.acc = this.doCalc(this.nextOp);
		this.nextOp = 'add';
		this.decimal = 0;
		this.num = 0;
		return this.acc;
	},
	'minus': function() {
		this.acc = this.doCalc(this.nextOp);
		this.nextOp = 'substract';
		this.decimal = 0;
		this.num = 0;
		return this.acc;
	},
	'times': function() {
		this.acc = this.doCalc(this.nextOp);
		this.nextOp = 'multiply';
		this.decimal = 0;
		this.num = 0;
		return this.acc;
	},
	'divBy': function() {
		this.acc = this.doCalc(this.nextOp);
		this.nextOp = 'divide';
		this.decimal = 0;
		this.num = 0;
		return this.acc;
	},
	'equal': function() {
		this.acc = this.doCalc(this.nextOp);
		this.nextOp = '';
		this.decimal = 0;
		this.num = 0;
		return this.acc;
	},
	'ce': function() {
		this.decimal = 0;
		this.num = 0;
		return 0;
	},
	'ac': function() {
		this.nextOp = '';
		this.acc = 0;
		this.decimal = 0;
		this.num = 0;
		return 0;
	},
	'doCalc': function(operation, x) {
		if (operation === 'add') {
			return this.chopE(this.acc + x);
		} else if (operation === 'substract') {
			return this.chopE(this.acc - x);	
		} else if (operation === 'multiply') {
			return this.chopE(this.acc * x);
		} else if (operation === 'divide') {
			return this.chopE(this.acc / x);
		} else {
			return this.num;
		}
	},
	'register': function() {
		arr.push(this.num);
	},
	'add': function() {
		return this.num += 1;
	},
	'chopE': function(x) {
		return Math.round(
                x * Math.pow(10, this.nbDigits)) / Math.pow(10, this.nbDigits);
	}
};
// jQuery
$(function() {
    $('.digit').click(function() {
       $('#affichage').html(cal.addDigit($(this).html()));
       console.log($(this).html());
    });
    $('.dot').click(function() {
        $('#affichage').html(cal.dot());
    });
    $('.op').click(function() {
        var sign = $(this).html();
        console.log(sign);
        $('#affichage').html(cal.operation($(this).html()));
    });
});
