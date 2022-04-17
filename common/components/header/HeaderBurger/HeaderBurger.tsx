import { DisplayProps } from "@/types/common/header/Header";

const HeaderBurger = ({ displayMenu, setDisplayMenu }: DisplayProps) => {
  return (
    <div className="block lg:hidden">
      <button
        className="flex items-center px-3 py-2"
        onClick={() => setDisplayMenu(!displayMenu)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="19"
          viewBox="0 0 22 19"
        >
          <g id="Burger" transform="translate(0 1.5)">
            <line
              id="Ligne_15"
              data-name="Ligne 15"
              x1="22"
              fill="none"
              stroke="#2a3649"
              stroke-width="3"
            />
            <line
              id="Line_16"
              data-name="Line 16"
              x1="22"
              transform="translate(0 8)"
              fill="none"
              stroke="#2a3649"
              stroke-width="3"
            />
            <line
              id="Line_17"
              data-name="Line 17"
              x1="22"
              transform="translate(0 16)"
              fill="none"
              stroke="#2a3649"
              stroke-width="3"
            />
          </g>
        </svg>
      </button>
    </div>
  );
};

export default HeaderBurger;
