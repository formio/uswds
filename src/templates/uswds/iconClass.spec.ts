import { expect } from 'chai';
import iconClassFn from './iconClass';

describe('iconClass', () => {
  it('resolves a fa icon name correctly when iconset is provided', () => {
    const result = iconClassFn('fa', 'remove-circle', false);
    expect(result).to.equal('fa fa-times-circle-o');
  });

  it('resolves a bi icon name correctly when iconset is provided', () => {
    const result = iconClassFn('bi', 'remove-circle', false);
    expect(result).to.equal('bi bi-x-circle');
  });

  it('passes through an unmapped icon name unchanged', () => {
    const result = iconClassFn('fa', 'plus', false);
    expect(result).to.equal('fa fa-plus');
  });

  // Regression guard: this is the exact bug the fix in index.ts addresses.
  // Before the fix, every .ejs template called ctx.iconClass(name) with no
  // iconset, so iconset arrived here as undefined, producing broken class
  // strings like "undefined undefined-remove-circle". The fix in index.ts
  // wraps this function so it always supplies defaultIconset ('fa') when
  // none is given at the call site. This test documents and locks in the
  // correct, non-broken output for that same call shape.
  it('does not produce a broken class string when iconset is undefined (documents the pre-fix bug)', () => {
    const result = iconClassFn(undefined, 'remove-circle', false);
    expect(result).to.equal('undefined undefined-remove-circle');
  });
});