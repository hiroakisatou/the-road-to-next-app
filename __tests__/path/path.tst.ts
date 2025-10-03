import { ticketPath } from "@/path";

// path.test.ts
describe('ticketPath', () => {
  it('should generate correct path', () => {
    expect(ticketPath('123')).toBe('/tickets/123');
  });
  
});