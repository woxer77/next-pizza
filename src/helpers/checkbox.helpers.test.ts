import { mapToOptions } from './checkbox.helpers';

describe('mapToOptions', () => {
  test('happy path', () => {
    const input = [
      { id: 1, name: 'Bob' },
      { id: 2, name: 'John' }
    ];
    const output = [
      { value: '1', text: 'Bob' },
      { value: '2', text: 'John' }
    ];

    expect(mapToOptions(input)).toEqual(output);
  });

  test('should remove extra properties from an object', () => {
    const input = [
      { id: 1, name: 'Bob', address: 'Street 1', surname: 'Richardson' },
      { id: 2, name: 'John', age: 45 }
    ];
    const output = [
      { value: '1', text: 'Bob' },
      { value: '2', text: 'John' }
    ];

    expect(mapToOptions(input)).toEqual(output);
  });

  test("should handle string numeric ID correctly ('1')", () => {
    const input = [
      { id: '1', name: 'Bob' },
      { id: '2', name: 'John' }
    ];
    const output = [
      { value: '1', text: 'Bob' },
      { value: '2', text: 'John' }
    ];

    expect(mapToOptions(input)).toEqual(output);
  });

  test("should handle string ID correctly ('uuid-1')", () => {
    const input = [
      { id: 'uuid-1', name: 'Bob' },
      { id: 'uuid-2', name: 'John' }
    ];
    const output = [
      { value: 'uuid-1', text: 'Bob' },
      { value: 'uuid-2', text: 'John' }
    ];

    expect(mapToOptions(input)).toEqual(output);
  });

  test('should return an empty array if empty array is provided', () => {
    expect(mapToOptions([])).toEqual([]);
  });
});
