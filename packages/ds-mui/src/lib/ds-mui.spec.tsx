import { render } from '@testing-library/react';

import SiulDsMui from './ds-mui';

describe('SiulDsMui', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SiulDsMui />);
    expect(baseElement).toBeTruthy();
  });
});
