import Head from "next/head";
import { useRouter } from "next/router";

const course = () => {
  const router = useRouter();

  const allCourse = [
    {
      id: "inner-engineering",
      name: "内在工程",
      englishName: "Inner Engineering",
      tags: ["线下收费课程"],
    },
    {
      id: "isha-kriya",
      name: "Isha Kriya冥想",
      englishName: "Isha Kriya",
      tags: ["线上课程", "可自学"],
    },
    {
      id: "simha-kriya",
      name: "健康呼吸瑜伽",
      englishName: "Simha Kriya",
      tags: ["线上课程", "可自学"],
    },
    {
      id: "yoga-namaskar",
      name: "瑜伽合十礼",
      englishName: "Yoga Namaskar",
      tags: ["线上课程", "可自学"],
    },
    {
      id: "upa-yoga",
      name: "乌帕瑜伽",
      englishName: "Upa-yoga",
      tags: ["线下免费课程"],
    },
    {
      id: "surya-kriya",
      name: "苏利亚克里亚",
      englishName: "Surya Kriya",
      tags: ["线下收费课程", "哈他瑜伽"],
    },
    {
      id: "yogasanas",
      name: "瑜伽体式",
      englishName: "Yogasanas",
      tags: ["线下收费课程", "哈他瑜伽"],
    },
    {
      id: "angamardana",
      name: "安伽玛达那",
      englishName: "Angamardana",
      tags: ["线下收费课程", "哈他瑜伽"],
    },
    // {
    //   id: "5-minutes-for-health",
    //   name: "五分钟健康瑜伽",
    //   englishName: "5 minutes for Health",
    //   tags: ["线下课程"],
    // },
    // {
    //   id: "5-minutes-for-peace",
    //   name: "五分钟平和瑜伽",
    //   englishName: "5 minutes for Peace",
    //   tags: ["线下课程"],
    // },
    // {
    //   id: "5-minutes-for-love",
    //   name: "五分钟爱之瑜伽",
    //   englishName: "5 Minutes for Love",
    //   tags: ["线下课程"],
    // },
    // {
    //   id: "5-minutes-for-success",
    //   name: "五分钟成功瑜伽",
    //   englishName: "5 Minutes for Success",
    //   tags: ["线下课程"],
    // },
    // {
    //   id: "5-minutes-for-joy",
    //   name: "五分钟喜悦瑜伽",
    //   englishName: "5 Minutes for Joy",
    //   tags: ["线下课程"],
    // },
    // {
    //   id: "5-minutes-for-inner-exploration",
    //   name: "五分钟内在探索瑜伽",
    //   englishName: "5 Minutes For Inner Exploration",
    //   tags: ["线下课程"],
    // },
    // {
    //   id: 10,
    //   name: "神圣行走",
    // },
  ];

  const handleTagClick = (e, tag) => {
    e.stopPropagation();
    if (tagDict[tag].hadIntro) {
      router.push(`/isha/course/detail?id=${tag}`);
    }
  };

  const renderCourseItem = (item, index) => {
    const { name, englishName, tags = [] } = item;
    return (
      <div
        className="flex flex-col min-h-[7rem] p-[1rem] rounded-[1.4rem] linear-bg mb-[-0.4rem]"
        key={index}
        onClick={() => router.push(`/isha/course/detail?id=${item.id}`)}
      >
        <span className="text-[#1c3cab] text-[1rem] font-medium">{name}</span>
        <span className="text-[#fdad6a] text-[1rem]">{englishName}</span>
        <div className="flex mt-[1rem] flex-wrap ml-[-0.4rem]">
          {tags.map((tag) => (
            <span className="text-[0.75rem] px-[4px] py-[2px] bg-[#bababa24] text-[#bababa] rounded-md mt-2 ml-[0.4rem]">
              {tag}
            </span>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="container mx-auto p-[1rem] min-h-[100vh] bg-[#fcfcff]">
      <Head>
        <title>isha课程/"新人类"</title>
      </Head>
      <h1 className="text-center text-[1.4rem] mb-[1.6rem] text-[#000f64]">
        Isha课程
      </h1>
      <div className="grid grid-cols-2 gap-4">
        {allCourse.map((item, index) => {
          return renderCourseItem(item, index);
        })}
      </div>
    </div>
  );
};

export default course;
