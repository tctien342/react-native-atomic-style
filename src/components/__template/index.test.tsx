import { render } from '@testing-library/react';
import React from 'react';

import { Template } from '.';

describe('Test Template', () => {
  test('Should render title', () => {
    const { queryByText } = render(<Template title="Thành công" />);
    const linkElement = queryByText(/Thành công/i);
    expect(linkElement).not.toBe(null);
  });
});
