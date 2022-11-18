import { createContext, useState } from "react";

type ContextType = {
  visible: boolean;
  hidden: () => void;
  show: () => void;
};
export const MenuContext = createContext({} as ContextType);
type Props = {
  children?: React.ReactNode;
};
function MenuProvider({ children }: Props) {
  const [visible, setVisible] = useState<boolean>(false);
  const hidden = () => {
    setVisible(false);
  };
  //hàm show nên là setVisible(true)
  //tuy nhiên do hàm hidden đang lỗi, chưa kịp tìm ra nguyên nhân
  const show = () => {
    setVisible(!visible);
  };
  return (
    <MenuContext.Provider value={{ visible, hidden, show }}>
      {children}
    </MenuContext.Provider>
  );
}
export default MenuProvider;
