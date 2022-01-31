import Image from "next/image";

import profilePic from "../../public/images/profile.jpg";

const Profile = () => {
  return (
    <section className="flex flex-col justify-center py-10 pb-10 md:flex-row md:w-10/12 md:mx-auto md:items-center">
      <div className="md:max-w-sm">
        <Image
          src={profilePic}
          alt="photo of Leandro Cheng"
          className="object-cover object-top w-auto h-auto min-w-full min-h-full "
        />
      </div>
      <div className="z-10 p-5 mx-4 -mt-8 prose text-gray-700 rounded-lg bg-gray-50 drop-shadow-lg md:p-10 md:mx-0 md:mt-0 md:max-w-2xl">
        <h2 className="mb-5 text-base font-bold text-center">
          Leandro Cheng，鄭乃豪。
        </h2>
        <p className="mb-5">
          1964年出生於一個攝影世家, 祖父/父親/叔叔及姑媽都是攝影愛好者,
          從小耳濡目染培養了攝影的興趣.
        </p>
        <p className="mb-5">
          1986年移民阿根廷, 多年來專注於阿根廷及鄰近國家的人文紀實,
          風景風光及生態攝影, 以自駕的方式幾乎跑遍整個阿根廷, 並多次自駕 /
          自助旅遊到智利 / 秘魯 / 玻利維亞 / 巴西 /
          烏拉圭及古巴這幾個中南美國家拍攝.
        </p>
        <p>
          2013年開始從事專業攝影嚮導的工作, 帶領客人在阿根廷 / 智利 / 玻利維亞 /
          巴西 / 烏拉圭 / 祕魯 / 哥倫比亞及古巴各地進行創作.
        </p>
        <section>
          <h3 className="mb-3 font-bold">聯絡方式</h3>
          <ul className="pl-0 text-sm list-none">
            <li>
              <i class="far fa-envelope"></i>{" "}
              <span className="font-bold">Email:</span> naihao@hotmail.com
            </li>
            <li>
              <i class="fab fa-line"></i>{" "}
              <span className="font-bold">Line:</span> +54 11 5995-0361 (ID:
              leandro_cheng)
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
        </section>
      </div>
    </section>
  );
};

export default Profile;
