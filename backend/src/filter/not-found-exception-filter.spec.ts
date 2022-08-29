import { NotFoundExceptionFilter } from './not-found-exception-filter';

describe('HttExceptionFilter', () => {
  it('should be defined', () => {
    expect(new NotFoundExceptionFilter()).toBeDefined();
  });
});
