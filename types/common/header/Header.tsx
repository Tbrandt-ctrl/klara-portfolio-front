import { Dispatch, SetStateAction } from "react";

interface DisplayProps {
  displayMenu: boolean;
  setDisplayMenu: Dispatch<SetStateAction<boolean>>;
}

export type { DisplayProps };
