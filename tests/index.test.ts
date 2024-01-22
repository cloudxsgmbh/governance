/* © 2024 cloudxs GmbH. All rights reserved. / index.test.ts */

import { naming } from '../src/index';

describe('Naming', () => {
  it('should return a string', () => {
    const testName = naming.getName(naming.Abbreviations.AzureContainerRegistry, 'test');
    expect(testName).toMatch(/cr-test/);
  });
});
