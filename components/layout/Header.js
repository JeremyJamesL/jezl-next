import Link from "next/link";
import Image from "next/image";
import Menu from "../UI/Menu";

function Header() {
    return (
        <header className="header">
            <div className="container header__inner">
                <div className="header__left">
                    <Image
                        src="https://darekkay.com/assets/images/avatar-2x.webp"
                        width={80}
                        height={80}
                        className="header__headshot"
                    />
                    <div>
                    <Link href="/">
                        <span className="header__name">Jeremy James</span>
                        <span className="header__tagline">Solutions Engineer & Web Dev</span>
                    </Link>
                    </div>
                </div>
                <div className="header__right">
                    <Menu />
                </div>
            </div>
        </header>
    )
}

export default Header;