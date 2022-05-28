function add(x, y) {
  return x + y;
}
function sub(x, y) {
  return x - y;
}
function mul(x, y) {
  return x * y;
}
function div(x, y) {
  return x / y;
}

class CommandCreator {
  constructor(execute) {
    this.execute = execute;
  }
}

const Command = (operation) => {
  switch (operation) {
    case "*":
      return new CommandCreator(mul);
    case "/":
      return new CommandCreator(div);
    case "+":
      return new CommandCreator(add);
    case "-":
      return new CommandCreator(sub);
    default:
  }
};

class Calculator {
  constructor(numbers, operations) {
    this.numbers = numbers;
    this.operations = operations;
    this.commands = [];
  }

  execute(operation, id) {
    const command = new Command(operation);
    this.numbers[id] = command.execute(this.numbers[id], this.numbers[id + 1]);
    this.numbers.splice(id + 1, 1);
    this.operations.splice(id, 1);
    this.commands.push(command);
  }

  getResult() {
    return this.numbers[0].toString();
  }
}

export { Calculator, Command };
