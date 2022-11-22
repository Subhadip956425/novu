import { useMantineTheme } from '@mantine/core';
import { colors } from '../../../../design-system';

export const DateArrow = () => {
  const theme = useMantineTheme();

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="7" height="12" viewBox="0 0 7 12" fill="none">
      <path
        d="M6.21875 5.36719L2.09375 1.05469C1.74219 0.679688 1.15625 0.65625 0.78125 1.03125C0.40625 1.38281 0.382812 1.96875 0.757812 2.34375L4.25 6L0.757812 9.67969C0.382812 10.0547 0.40625 10.6406 0.78125 10.9922C0.96875 11.1797 1.20312 11.25 1.41406 11.25C1.67188 11.25 1.92969 11.1562 2.09375 10.9688L6.21875 6.65625C6.57031 6.30469 6.57031 5.71875 6.21875 5.36719Z"
        fill={colors.B60}
      />
    </svg>
  );
};
