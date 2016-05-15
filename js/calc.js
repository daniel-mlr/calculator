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
        console.log('nextOp', this.nextOp);
        console.log('num', this.num);
        console.log('acc', this.acc);
        console.log('sign', sign);
        this.num = '';
        return this.acc;
    },


	'ce': function() {
		this.num = '';
		return 0;
	},
	'ac': function() {
		this.nextOp = '';
		this.acc = 0;
		this.num = '';
		return 0;
	},
	'doCalc': function(operation, x) {
        if (!x) {x = 0;}
        console.log('oper=', operation, 'this.acc=', this.acc,  typeof this.acc);
        console.log('oper=', operation, x, typeof x);
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
    });
    $('.dot').click(function() {
        $('#affichage').html(cal.dot());
    });
    $('.ce').click(function() {
        $('#affichage').html(cal.delDigit());
    });
    $('.op').click(function() {
        var sign = $(this).html();
        $('#affichage').html(cal.operation($(this).html()));
    });
});

// effacer
        /*
        if (operator === '+') {
            this.nextOp = 'add';
            this.decimal = 0;
            this.num = '';
            return this.acc;
        } else if (operator === '-'){
            this.nextOp = 'substract';
            this.decimal = 0;
            this.num = '';
            return this.acc;
        } else if (operator === '*'){
            this.nextOp = 'multiply';
            this.decimal = 0;
            this.num = '';
            return this.acc;
        } else if (operator === '/'){
            this.nextOp = 'divide';
            this.decimal = 0;
            this.num = '';
            return this.acc;
        } else if (operator === '='){
            this.nextOp = '';
            this.decimal = 0;
            this.num = '';
            return this.acc;
        } else {
            //
        }
        */
