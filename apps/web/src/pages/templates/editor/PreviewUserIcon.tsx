import { useMantineTheme } from '@mantine/core';
import { colors } from '../../../design-system';

export const PreviewUserIcon = () => {
  const theme = useMantineTheme();

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
      <rect width="40" height="40" rx="20" fill={theme.colorScheme === 'dark' ? colors.B20 : colors.B85} />
      <path
        d="M27 29C27 29.5523 27.4477 30 28 30C28.5523 30 29 29.5523 29 29H27ZM24 23V22V23ZM16 23V22V23ZM12 27H11H12ZM11 29C11 29.5523 11.4477 30 12 30C12.5523 30 13 29.5523 13 29H11ZM29 29V27H27V29H29ZM29 27C29 25.6739 28.4732 24.4021 27.5355 23.4645L26.1213 24.8787C26.6839 25.4413 27 26.2044 27 27H29ZM27.5355 23.4645C26.5979 22.5268 25.3261 22 24 22V24C24.7956 24 25.5587 24.3161 26.1213 24.8787L27.5355 23.4645ZM24 22H16V24H24V22ZM16 22C14.6739 22 13.4021 22.5268 12.4645 23.4645L13.8787 24.8787C14.4413 24.3161 15.2044 24 16 24V22ZM12.4645 23.4645C11.5268 24.4021 11 25.6739 11 27H13C13 26.2044 13.3161 25.4413 13.8787 24.8787L12.4645 23.4645ZM11 27V29H13V27H11ZM23 15C23 16.6569 21.6569 18 20 18V20C22.7614 20 25 17.7614 25 15H23ZM20 18C18.3431 18 17 16.6569 17 15H15C15 17.7614 17.2386 20 20 20V18ZM17 15C17 13.3431 18.3431 12 20 12V10C17.2386 10 15 12.2386 15 15H17ZM20 12C21.6569 12 23 13.3431 23 15H25C25 12.2386 22.7614 10 20 10V12Z"
        fill={theme.colorScheme === 'dark' ? colors.B60 : colors.B98}
      />
    </svg>
  );
};
