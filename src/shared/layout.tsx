import { IconButton } from "@radix-ui/themes";
import { AsideNav } from "../components/aside-nav/aside-nav";
import { useNavigationModal } from "../stores/useNavigationModal";
import styles from "./layout.module.css";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Toaster } from "sonner";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const setIsVisible = useNavigationModal((state) => state.setIsVisible);
  return (
    <>
      <Toaster position="top-center" />
      <AsideNav />
      <main className={styles.main}>
        <IconButton variant="ghost" mb="6" onClick={setIsVisible}>
          <HamburgerMenuIcon width={18} height={18} />
        </IconButton>
        {children}
      </main>
    </>
  );
}
