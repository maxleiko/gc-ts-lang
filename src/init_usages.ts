class Person {
  name: string;
}
function sum(param: { a: Int, b: Int }) {}
function mul(param: { first: Double, second: Double }) {}

var output = '';
{
  var a = null;
  var b = 42;
  b = null;

  var b = 'foo';
  var c = new Person();
  print({ src: c, dest: output });

  var d = {};
  var e = { firstname: 'John', lastname: 'Doe' };
  var isReal = false;
  //var bad_mapping = unknown_var
  var empty;
  var theAnswer = 42;
  var path = c.name; //this is null

  var five = sum({ a: 2, b: 3 });
  var fifty = mul({ first: 100.0, second: 0.5 });
  var f = () => {};
  var g = (one: string, two: number) => {};

  print({ src: '${g} ${five}', dest: output });
}
