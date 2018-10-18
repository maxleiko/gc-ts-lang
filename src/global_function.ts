function say_hi({ input }: { input: string }) {
  print({ src: "say hi to ", dest: output }) //could be enhanced by template
  print({ src: input, dest: output })
}

var output = ""

{
  say_hi({ input: "greycat" })
}