import { ItemProps } from '@/layout/Header/Header.props';

export interface NavItemProps {
  list: ItemProps[];
  isOpen: boolean;
  setNavbarOpen?: (isNavbarOpen: boolean) => void;
}
