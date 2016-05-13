var cal = {
	'num': 0,
	'trace': [0],
	'acc': 0,
	'decimal': 0,
	'nextOp': '',
	'nbDigits': 12,
	'addDigit': function(dig) {
		if (this.decimal) {
			this.num += dig / Math.pow(10, this.decimal);
			this.num.toFixed(this.decimal);
			this.decimal++;
			return this.num;
		} else {
			this.num = this.num * 10 + dig;
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
		return this.num;
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
	'doCalc': function(operation) {
		if (operation === 'add') {
			return this.chopDigit(this.acc + this.num);
		} else if (operation === 'substract') {
			return this.chopDigit(this.acc - this.num);	
		} else if (operation === 'multiply') {
			return this.acc * this.num;
		} else if (operation === 'divide') {
			return this.chopDigit(this.acc / this.num);
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
	'chopDigit': function(x) {
		return Math.round(x * Math.pow(10, this.nbDigits)) / Math.pow(10, this.nbDigits);
	}
	
};
