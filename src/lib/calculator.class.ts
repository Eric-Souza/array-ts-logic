export class Calculator {
  private static instance: Calculator;
  private values: number[];

  private constructor () {
  	this.values = [0]
  }

  private sumReduceOperation (previousValue: number, currentValue: number) {
  	return previousValue + currentValue
  }

  public static init () {
  	if (this.instance) {
  		return this.instance
  	}

  	this.instance = new Calculator()
  	return this.instance
  }

  public add (numbers: number | number[] | any) {
  	if (typeof numbers === 'number') {
  		this.values = [...this.values, numbers]
  		return this
  	}

  	this.values.push(...numbers)
  	return this
  }

  public sum (positions?: number[]) {
  	if (!positions) {
  		return this.values.reduce(this.sumReduceOperation)
  	}

  	let sum = 0

  	for (const i in positions) {
  		sum += positions[i]
  	}

  	return sum
  }

  public remove (positions: number | number[] | any): Calculator['values'] {
  	// TODO: Você deve implementar uma função que remova um elemento na posição especificada.
  	for (let i = positions.length - 1; i >= 0; i--) {
  		this.values.splice(positions[i], 1)
  	}

  	return this.values
  }

  public list (limit?: number) {
  	if (limit) {
  		return this.values?.slice(0, limit)
  	}

  	return this.values
  }
}
