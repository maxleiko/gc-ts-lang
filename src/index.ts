let output = '';
// create and configure a new index
{
  const sensors = new_global_index({ id: 'sensors' });
  sensors.configure({ prop: hash('serial_number') });

  const sensor_0 = new node();
  sensor_0.serial_number = '#1234';
  sensors.add({ value: sensor_0 });
  print({ src: sensors, dest: output });
}
// check if the master index is altered
{
  const master_index = load_master_index();

  print({ src: ',', dest: output });
  print({ src: master_index, dest: output });
}
// read an existing index
{
  print({ src: ',', dest: output });
  // @ts-ignore "sensors" not declared error is there on purpose to prove that it is unloaded
  print({ src: sensors, dest: output });

  const sensors = load_global_index({ id: 'sensors' });

  print({ src: ',', dest: output });
  print({ src: sensors, dest: output });

  const query_result = sensors.query({ value: '#1234' });

  print({ src: ',', dest: output });
  print({ src: query_result, dest: output });
}
// check access through master index
{
  const master_index = load_master_index();
  const sensors = master_index.query({ value: 'sensors' });

  print({ src: ',', dest: output });
  print({ src: sensors, dest: output });

  master_index.foreach({
    it: hash('i'),
    sub: (i) => {
      print({ src: i, dest: output });
    },
  });
}
