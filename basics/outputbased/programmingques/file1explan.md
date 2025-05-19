
problem1:
  dry run:

    1.Initial Call:

        1.findMatchingObjectProperty(obj, ['z', 'z1'])
        2.obj is the whole object.
        3.First Level of the Object:

    2.Properties: a, b.
        1.Check Property a:

          a: 1
          a is not the target key z, so move to the next property.
        2.Check Property b:

          1.b: { c: [...], m: 'm2' }
            b is not the target key z.
            b is an object, so recursively call findMatchingObjectProperty with b. 
        3.Second Level of the Object (b):

            Properties: c, m.
            Check Property c:

            c: [ { d: 'd1' }, { z: 'z1' } ]
            c is not the target key z.
            c is an array, so recursively call findMatchingObjectProperty for each element in the array.
        4.Array Iteration (c):

            1.First Element:

              { d: 'd1' }

              Properties: d.

            2.Check Property d:

              d: 'd1'
              d is not the target key z, so this element does not match.
              No nested objects or arrays to check further in this element.
              Return false for this element.
            3.Second Element:

              { z: 'z1' }

              Properties: z.

            4.Check Property z:

              z: 'z1'
              z matches the target key z, and the value z1 matches the target value z1.
              Return true for this element.
        5.Result for Array c:

           Since one of the elements in the array c returned true, the recursive call for c returns true.
        6.Back to Property b:

          Since the recursive call for c returned true, the recursive call for b returns true.
        7.Back to Root Object:

          Since the recursive call for b returned true, the initial call for the root object returns true.
