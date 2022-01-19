import Image from "next/image";
import profilePic from "../../public/images/profile.jpg";

const Profile = () => {
  return (
    <section className="flex flex-col justify-center pb-10">
      <Image
        src={profilePic}
        alt="photo of Leandro Cheng"
        className="w-auto h-auto min-w-full min-h-full object-cover object-top"
      />
      <div className="bg-gray-50 text-gray-700 p-5 rounded-lg -mt-8 z-10 mx-4 drop-shadow-lg">
        <h2 className="font-bold text-base mb-5 text-center">
          Leandro Cheng，鄭乃豪。
        </h2>
        <p className="mb-2">
          1964年出生於一個攝影世家, 祖父/父親/叔叔及姑媽都是攝影愛好者,
          從小耳濡目染培養了攝影的興趣.
        </p>
        <p className="mb-2">
          1986年移民阿根廷, 多年來專注於阿根廷及鄰近國家的人文紀實,
          風景風光及生態攝影, 以自駕的方式幾乎跑遍整個阿根廷, 並多次自駕 /
          自助旅遊到智利 / 秘魯 / 玻利維亞 / 巴西 /
          烏拉圭及古巴這幾個中南美國家拍攝.
        </p>
        <p>
          2013年開始從事專業攝影嚮導的工作, 帶領客人在阿根廷 / 智利 / 玻利維亞 /
          巴西 / 烏拉圭 / 祕魯 / 哥倫比亞及古巴各地進行創作.
        </p>
      </div>
    </section>
  );
};

export default Profile;
