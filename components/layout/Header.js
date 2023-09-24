import Image from "next/image";

function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="header__left">
                    <Image
                        src="https://darekkay.com/assets/images/avatar-2x.webp"
                        width={80}
                        height={80}
                        className="header__headshot"
                    />
                    <div>
                        <span className="header__name">Jeremy James</span>
                        <span>Solutions Engineer & Web Dev</span>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;