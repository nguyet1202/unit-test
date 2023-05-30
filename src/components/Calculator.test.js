import { render, fireEvent } from '@testing-library/react';
import Calculator from './Calculator';

describe('Calculator Component', () => {
  it('should add two numbers correctly', () => {
    const { getByTestId, getByText } = render(<Calculator />);

    const input1 = getByTestId('number-input-1');
    const input2 = getByTestId('number-input-2');
    const addButton = getByText('Add');
    const result = getByTestId('result');

    fireEvent.change(input1, { target: { value: 2 } });
    fireEvent.change(input2, { target: { value: 3 } });
    fireEvent.click(addButton);

    expect(result.textContent).toBe("5");
  });

  it('should subtract two numbers correctly', () => {
    const { getByTestId, getByText } = render(<Calculator />);

    const input1 = getByTestId('number-input-1');
    const input2 = getByTestId('number-input-2');
    const subtractButton = getByText('Subtract');
    const result = getByTestId('result');

    fireEvent.change(input1, { target: { value: 5 } });
    fireEvent.change(input2, { target: { value:2 } });
    fireEvent.click(subtractButton);

    expect(result.textContent).toBe("3");
  });

  it('should multiply two numbers correctly', () => {
    const { getByTestId, getByText } = render(<Calculator />);

    const input1 = getByTestId('number-input-1');
    const input2 = getByTestId('number-input-2');
    const multiplyButton = getByText('Multiply');
    const result = getByTestId('result');

    fireEvent.change(input1, { target: { value: 4 } });
    fireEvent.change(input2, { target: { value: 3 } });
    fireEvent.click(multiplyButton);

    expect(result.textContent).toBe("12");
  });
});
