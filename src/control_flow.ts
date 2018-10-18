{
  const output = '';
  const output2 = '';
  const output3 = '';
  {
    // simple if statement
    const value = 42;
    if (value === 42) {
      print({ src: 'if branch executed', dest: output });
    } else {
      print({ src: 'else branch executed', dest: output });
    }

    // create simple node
    const new_node = new node();
    new_node.value = 1.0;
    print({ src: new_node, dest: output2 });

    // usage of repeat
    repeat({
      nb: 3,
      sub: (i) => {
        const new_time = new_timepoint({ src: new_node, time: i });
        new_time.value = i;
        print({ src: ',', dest: output2 });
        print({ src: new_time, dest: output2 });
      },
    });

    // usage of foreach
    const values = [100, 200, 300, 400, 500];
    foreach({
      src: values,
      sub: (i) => {
        const new_time = new_timepoint({ src: new_node, time: i });
        if (i !== 100) {
          print({ src: ',', dest: output3 });
        }
        print({ src: new_time, dest: output3 });
      },
    });
  }
}
