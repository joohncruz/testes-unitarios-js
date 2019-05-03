describe('outer', () => {
  console.log('DESCRIBE -> outer-a');

  describe('DESCRIBE -> inner 1', () => {
    console.log('DESCRIBE -> inner 1');

    test('test 1', () => {
      console.log('test for describe inner 1');
      expect(true).toEqual(true);
    });
  });

  console.log('DESCRIBE -> outer-b');

  test('test 1', () => {
    console.log('test for describe outer');

    expect(true).toEqual(true);
  });

  describe('DESCRIBE -> inner 2', () => {
    console.log('DESCRIBE -> inner 2');

    test('test for describe inner 2', () => {
      console.log('test for describe inner 2');
      
      expect(false).toEqual(false);
    });
  });

  console.log('DESCRIBE -> outer-c');
});