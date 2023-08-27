import cn from 'classnames';
import { forwardRef } from 'react';

import { SectionProps } from './Section.props';

const Section = forwardRef<HTMLElement, SectionProps>(function Search(
  { children, className, variant = 'primary', ...props },
  ref
) {
  return (
    <section
      ref={ref}
      className={cn('', className, {
        ['py-[60px] xl:py-[80px] text-dark']: variant == 'primary',
        ['py-8 text-dark bg-gray_light']: variant == 'colored',
        ['py-0 text-white']: variant == 'hero',
      })}
      {...props}
    >
      {children}
    </section>
  );
});

export default Section;
