import Script from "next/script";

const Footer = () => {
  return (
    <footer className="sticky pt-3 bg-gray-900 top-full">
      <Script
        src="https://kit.fontawesome.com/3552e4e004.js"
        crossorigin="anonymous"
      ></Script>

      <div className="z-10 p-3 m-4 mx-4 prose bg-gray-100 prose-h3:text-lg rounded-xl drop-shadow-2xl md:p-8 md:mx-auto">
        <h3 className="mb-3 font-bold">聯絡方式</h3>
        <ul className="pl-0 text-sm list-none">
          <li>
            <i class="far fa-envelope"></i>{" "}
            <span className="font-bold">Email:</span> naihao@hotmail.com
          </li>
          <li>
            <i class="fab fa-line"></i> <span className="font-bold">Line:</span>{" "}
            +54 11 5995-0361 (ID: leandro_cheng)
          </li>
          <li>
            <i class="fab fa-whatsapp-square"></i> ​
            <span className="font-bold">WhatsApp:</span> +54 9 11 5995-0361
          </li>
          <li>
            <i class="fab fa-weixin"></i>{" "}
            <span className="font-bold">​WeChat:</span> +5491159950361 (ID:
            Leandro-Cheng)
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.facebook.com/LeandroCheng"
              className="no-underline hover:text-gray-500"
            >
              <i class="fab fa-facebook-square"></i> Facebook Messenger
            </a>
          </li>
        </ul>
      </div>

      <div className="px-4 py-4 text-xs text-gray-200 bg-gray-900 md:text-sm">
        <p className="text-center">
          © 2012–2022 Leandro Cheng Blog. All rights reserved.
        </p>
        <p className="text-center">
          Made with ❤ by{" "}
          <a
            href="https://github.com/Moonriz-ar"
            target="_blank"
            className="font-extrabold no-underline hover:text-gray-50"
          >
            Andrea Lin
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
