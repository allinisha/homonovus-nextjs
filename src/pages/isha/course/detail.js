import { useSearchParams } from "next/navigation";

const detail = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const allCourseDict = {
    "inner-engineering": {
      name: "内在工程",
      englishName: "Inner Engineering",
      introduce: `<p>萨古鲁设计的内在工程课程，是一种基于古代瑜伽科学的方法和工具，使一个人实现深刻而持久的转化。课程本身和它的氛围营造了一种可能性，去探索更高层次的生命维度；也提供了工具，使人们可以透过瑜伽这门内在科学去激发自身最大的潜能。使用这些工具，人们可以在健康、内在成长和成功等所有方面进行优化。对于那些想在事业上、个人生活上取得卓越成效的人，该课程提供了关键的要素去获得：令人满意的、有意义的工作关系、家庭关系和小区关系；更重要的是个人内在的关系。</p><p>参加者将通过课程接收到：转化生命的智慧、一套简单而强有力的瑜伽练习、以及古老的“Shambhavi Mahamudra”（香巴维大手印）的开启——一个强大的、21分钟的练习，旨在净化整个人体系统、巩固健康、提升效率、获得平衡与稳定内在福祉，Shambhavi Mahamudra可以转化你的生命。</p>`,
      benefits: [
        "全天保持精力充沛和警觉性",
        "提升沟通能力和优化你的人际关系",
        "提高头脑清醒情绪平衡和工作效率",
        "消除压力，恐惧和焦虑",
        `缓解慢性疾病如：过敏症，失眠，高血压肥胖，糖尿病，背痛等`,
        "实现内心的平静喜悦和满足",
      ],
    },
    "isha-kriya": {
      name: "苏利亚克里亚",
      englishName: "Isha Kriya",
      introduce:
        "<p>Isha Kriya 是一个简单而有效的过程，植根于瑜伽科学的永恒智慧。由萨古鲁提供，它有潜力改变任何愿意每天投资12分钟的人的生活。</p><p>Isha Kriya 的目的是帮助一个人接触到自己存在的源头，按照自己的愿望和愿景创造生活。每日练习 Isha Kriya 有助于带来健康、活力、平和与幸福。它是应对现代生活繁忙节奏的有力工具。</p><p>今天，对大多数人来说，“瑜伽”这个词通常会让人想到把身体扭成各种不可能的姿势的画面。瑜伽的身体层面只是这个多维科学的一个方面。瑜伽是一种技术，能让身体和头脑达到它们能力的顶峰，让人活出生命的极致。</p><p>为每个人提供“一滴灵性”是萨古鲁的愿景。通过 Isha Kriya 引导冥想，现在每个人都可以舒适地在自己家中获得灵性过程所带来的可能性。</p>",
      benefits: ["发展头脑清晰度与专注力", "培养头脑稳定性", "创造平和与幸福"],
    },
    "simha-kriya": {
      name: "健康呼吸瑜伽",
      englishName: "Simha Kriya",
      introduce:
        "<p>在这个全球流行病蔓延的极具挑战性的时期，拥有强健的免疫力和功能良好的呼吸系统就变得至关重要。</p><p>萨古鲁专门设计了这些练习，作为对我们健康的支持。</p>",
      benefits: [
        "提升肺活量",
        "增强免疫力",
        `提升 Samath Prana（太阳热能）这能为你自己建立一个盔甲或 Kavacham 去抵御负面影响这能为你自己建立一个盔甲或Kavacham去抵御负面影响`,
      ],
    },
    "yoga-namaskar": {
      id: "yoga-namaskar",
      name: "幸福瑜伽",
      englishName: "Yoga Namaskar",
      introduce:
        "<p>瑜伽合十礼本身就是一个十分简单且完整的过程，它可以滋养人的身体、心理和能量层面。将双手合十并拢的简单动作是为整个系统创造和谐的一种方式。瑜伽合十礼不涉及在你的生活中引入任何主要的训导，也不会有时间、饮食或生活方式方面的限制。这个简单练习不需要任何设备，几乎在任何地方都可以练习。</p>",
      benefits: [
        "为系统带来平衡与稳定",
        "激活脊柱的腰椎区域",
        "强健下背部肌肉",
        "避免年龄增长带来的脊柱塌陷为整个身体带来全方位的益处",
      ],
    },
    "5-minute-yoga-tools": {
      name: "五分钟瑜伽工具",
      englishName: "5 Minute Yoga Tools",
      introduce: "",
      benefits: [],
    },
    "upa-yoga": {
      name: "Upa瑜伽",
      englishName: "Upa-yoga",
      introduce:
        "<p>Upa 瑜伽是一套简单而有力的十项练习，可以激活关节，肌肉和能量系统，为整个系统带来轻松。 对于那些刚接触瑜伽的人来说，这是一个很好的起点，也可以作为其他瑜伽练习的准备。 它的设计是基于对身体力学的复杂理解。</p>",
      benefits: [
        "缓解身体压力和疲劳",
        "锻炼关节和肌肉",
        "在一段时间的不活动后恢复身体的活力",
        "消除时差和长途旅行的影响",
      ],
    },
    "surya-kriya": {
      name: "苏利亚克里亚",
      englishName: "Surya Kriya",
      introduce:
        "<p>苏利亚克里亚是一套非常古老且强大的瑜伽练习，是专为健康和内在幸福而设计的一个完整的练习。</p><p>​“Surya”意思是“太阳”，“ kriya”意思是“内在的能量过程”。苏利亚克里亚激活太阳神经丛，升起系统中的太阳能量。它还能平衡一个人的左右能量通道，带来身体的稳定和心灵的宁静。这个坚实的基础成为探索生命更高维度的基础。Surya Kriya 传统上只提供给经过挑选的瑜伽士，现在 Sadhguru 将其作为一种综合的修行方法提供给世人。这是当今世界繁忙节奏的理想之选。</p>",
      benefits: [
        "提升洞察力和专注度",
        "改善虚弱体质",
        "激活活力，焕发青春",
        "平稳身体荷尔蒙水平",
        "为进行深度冥想做好准备",
      ],
    },
    yogasanas: {
      name: "瑜伽体式",
      englishName: "Yogasanas",
      introduce:
        "<p>Asana 这个词字面上的意思是姿势。身体能够呈现无以计数的体式，其中有84个被确定为 Yogasanas（瑜伽体式）。</p><p>人们可以通过做这些 Yogasanas 来转化身体和头脑，使其成为达到终极幸福的可能性。Yogasanas 不是身体锻炼，它其实是一个操控你的能量，将其引向特定方向的一个非常精微的过程。</p><p>我们传授的 Yogasanas 是一套由 36 个强大体式组成的哈他瑜伽，旨在将系统维持在较高的能量层面。这门深邃的科学能够提升一个人的思考，感受，和体验生命的方式。Isha 课程不要求学员有特别的柔韧性或者之前学习瑜伽的经验。它不仅仅是身体锻炼，更能让一个人绽放，达到他的终极潜能，自然而然地获得健康，喜悦，和极乐。</p><p>一个人的身体如果没有经过训练，它就会表现出不同程度的强迫需求。通过有意识地维持某个特定的姿势，一个人可以创造有利于能量流动的通道，从而提升意识状态。Yogasanas 是一种校准内在系统、把它调整到与宇宙几何相一致的方法，身体因此能够跟存在同步，人们的内在化学将自然而然地达到一种健康，愉悦，幸福，以及更重要的——平衡的状态。</p>",
      benefits: [
        "减缓慢性身体疾病",
        "使身体和头脑朝着更高的可能性进化",
        "身体，头脑和能量系统的稳定",
        "减速身体老化过程",
      ],
    },
    angamardana: {
      name: "安伽玛达那",
      englishName: "Angamardana",
      introduce:
        "<p>安伽玛达那是一套根植于瑜伽健康体系的练习，旨在激发身体活力，达到身心健康的巅峰状态。​</p><p>安伽玛达那意思是获得对肢体、器官和其它身体部位的完全掌控。这套练习可以激活身体各个层面包括肌肉组织、循环系统、骨骼结构、神经系统和基础的能量系统。</p><p>萨古鲁精心设计的这套体式适用于每个人进行练习，安伽玛达那不需要借助任何器械设备，你的身体就是你所需要的一切，它可以在任何地方练习甚至在旅行中也可以练习。</p>",
      benefits: [
        "强健脊柱骨骼和肌肉系统",
        "增强体力提升健康和韧性",
        "使身体更年轻带来身体的轻盈自由感",
        "让身体做好练习哈他瑜伽的准备",
      ],
    },
    10: {
      name: "神圣行走",
      englishName: "",
      introduce: "",
      benefits: [],
    },
    "hatha-yoga": {
      name: "哈他瑜伽",
      englishName: "Hatha Yoga",
      introduce:
        "<h2><b>什么是哈他瑜伽？</b></h2><p>哈他瑜伽源于对身体力学的深刻理解，并使用瑜伽姿势或瑜伽体式，使系统能够维持更高维度的能量。通过实践这一深奥的科学，人们可以改变和增强他们思考、感受和体验生活的方式。</p><p>哈他瑜伽的目的是创造一个不会成为你生活障碍的身体。身体成为迈向最终可能性的垫脚石。</p><h2><b>什么是isha哈他瑜伽？</b></h2><p>Isha Hatha 瑜伽课程是学习古典哈他瑜伽的深度和活力的无与伦比的机会。这些课程由训练有素的教师主持，不仅仅是为了身体健康和力量。它们是一个自然地掌握身体和心灵的整体过程，从而达到健康、快乐和幸福的状态。这些课程是对哈他瑜伽的广泛探索，并复兴了当今世界基本上不存在的这一古老科学的各个方面。</p><p>isha哈他瑜伽包含五种古老而强大的练习，可以将身体和思想转化为巨大的可能性。</p><ul><li>乌帕瑜伽：一套 10 种强大的练习方法，可以激活关节、肌肉和能量系统，使整个系统恢复活力。</li><li>安伽玛达那：一系列 30 个过程，旨在使身体充满活力并达到最佳的身体健康和心理健康。</li><li>苏利亚克里亚：一种古老而有效的 21 步瑜伽练习，旨在作为健康、保健和全面福祉的整体过程。</li><li>瑜伽体式：一组强大的姿势，可以提升人的意识，稳定人的思想、情绪和能量系统，并延​​缓衰老过程。</li><li>五大元素净化：净化人体系统内五种元素以实现和谐与平衡的过程。</li></ul>",
      benefits: [],
    },
  };

  const renderBenefits = (benefits) => {
    return (
      <>
        <h2 className="text-[1.2rem] mb-[0.4rem] text-[#1c3cab]">课程益处</h2>
        <ul className="leading-9">
          {benefits.map((benefit) => (
            <li className="mb-[0.8rem] leading-6 text-[#333]">
              <p className="highlight">{benefit}</p>
            </li>
          ))}
        </ul>
      </>
    );
  };

  const renderDetail = () => {
    const detailData = allCourseDict[id];
    const { name, englishName, introduce, benefits = [] } = detailData;
    return (
      <div className="p-[1.4rem]">
        <div className="text-[1.8rem] text-[#1c3cab]">{name}</div>
        <div className="text-[1.4rem] text-[#fdad6a] mb-[1rem]">
          {englishName}
        </div>
        <h2 className="text-[1.2rem] text-[#1c3cab] mb-[0.4rem]">课程介绍</h2>
        <div
          className="whitespace-pre-wrap leading-7 mb-[2rem] text-[1rem] text-[#333]"
          dangerouslySetInnerHTML={{ __html: introduce }}
        ></div>
        {!!benefits.length && renderBenefits(benefits)}
      </div>
    );
  };

  return (
    <div className="container mx-auto p-2 min-h-[100vh] linear-bg-long">
      {!!id && renderDetail()}
    </div>
  );
};

export default detail;
