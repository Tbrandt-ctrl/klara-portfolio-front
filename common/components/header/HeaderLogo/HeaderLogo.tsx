import Link from "next/link";

const HeaderLogo = () => {
  return (
    <div className="flex items-center flex-shrink-0 mr-6">
      <Link href="/">
        <a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="83"
            height="49"
            viewBox="0 0 83 49"
          >
            <text
              id="Klara_C_graphics"
              data-name="Klara C
graphics"
              transform="translate(0 23)"
              fill="#2a3649"
              fontSize="22"
              fontFamily="Poppins-Bold, Poppins"
              fontWeight="700"
            >
              <tspan x="0" y="0">
                Klara C
              </tspan>
              <tspan fontSize="11">
                <tspan x="0" y="22">
                  graphics
                </tspan>
              </tspan>
            </text>
          </svg>
        </a>
      </Link>
    </div>
  );
};

export default HeaderLogo;
