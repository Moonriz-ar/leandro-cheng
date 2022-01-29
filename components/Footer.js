import Link from "next/link";
import Script from "next/script";

const Footer = () => {
  return (
    <footer className="sticky pt-3 bg-gray-100 top-full">
      <Script
        src="https://kit.fontawesome.com/3552e4e004.js"
        crossorigin="anonymous"
      ></Script>

      <div className="z-10 p-3 m-4 prose prose-h3:text-lg rounded-xl bg-gray-50 drop-shadow-2xl">
        <h3 className="mb-3 font-bold">聯絡方式</h3>
        <ul className="pl-0 text-sm list-none">
          <li>
            <i class="far fa-envelope"></i> Email: naihao@hotmail.com
          </li>
          <li>
            <i class="fab fa-line"></i> Line: +54 11 5995-0361 (ID:
            leandro_cheng)
          </li>
          <li>
            <i class="fab fa-whatsapp-square"></i> ​WhatsApp: +54 9 11 5995-0361
          </li>
          <li>
            <i class="fab fa-weixin"></i> ​WeChat: +5491159950361 (ID:
            Leandro-Cheng)
          </li>
          <li>
            <Link href="https://www.facebook.com/LeandroCheng">
              <a className="no-underline">
                <i class="fab fa-facebook-square"></i> Facebook Messenger
              </a>
            </Link>
          </li>
        </ul>
      </div>

      <div className="px-4 py-4 text-xs text-gray-200 bg-gray-900">
        <p className="text-center">
          © 2012–2022 Leandro Cheng Blog. All rights reserved.
        </p>
        <p className="text-center">
          Made with ❤ by{" "}
          <Link href="https://github.com/Moonriz-ar">
            <a className="font-extrabold no-underline">Andrea Lin</a>
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
