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
    "5-minutes-for-health": {
      name: "五分钟健康瑜伽",
      englishName: "5 minutes for Health",
      introduce: `<p>在这个充斥着快节奏生活方式，案头工作和环境污染的世界中，健康似乎遥不可及。在这个视频中，萨古鲁将从瑜伽的独特视角来看待健康。只需留意一些简单的基本要素，你便能保证自己的健康。</p><div class="flex justify-center mt-[1rem]"><iframe src="//player.bilibili.com/player.html?aid=248414511&bvid=BV16v411V7Jw&cid=348173088&p=1"  width="400" height=200 allowfullscreen="true"></iframe></div>`,
      courseVideo: `<iframe src="//player.bilibili.com/player.html?aid=760879782&bvid=BV1664y1k7HT&cid=348226730&p=1"  width="400" height=200 allowfullscreen="true" allowfullscreen="true"> </iframe>`,
    },
    "5-minutes-for-peace": {
      name: "五分钟平和瑜伽",
      englishName: "5 Minutes For Peace",
      introduce: `<p>你在寻求平静么？是时候停止追寻，开始掌控了！这里有个能在你之内创造平静的化学物质的方法。从每天花上几分钟开始，逐渐摆脱你的束缚，你会看到，平静，就在此时，此地。</p><div class="flex justify-center mt-[1rem]"><iframe src="//player.bilibili.com/player.html?aid=375894308&bvid=BV1Eo4y1278V&cid=349739156&p=1"  width="400" height=200 allowfullscreen="true"></iframe></div>`,
      courseVideo: `<iframe src="//player.bilibili.com/player.html?aid=503496584&bvid=BV14g411G7qA&cid=349742495&p=1"  width="400" height=200 allowfullscreen="true" allowfullscreen="true"></iframe>`,
    },
    "5-minutes-for-love": {
      name: "五分钟爱之瑜伽",
      englishName: "5 Minutes for Love",
      introduce: `<p>在每一段关系中，你都体验过片刻的真爱，但那些时刻是否来了又走？如果你能够永远保持爱的品质，那又将会怎样？萨古鲁解读了爱的本质，并揭示如何能通过每天仅五分钟的练习，让爱成为你生命的常态。</p><div class="flex justify-center mt-[1rem]"><iframe src="//player.bilibili.com/player.html?aid=756280713&bvid=BV17r4y1M7Gp&cid=285221473&p=1" width="400" height=200 allowfullscreen="true"></iframe></div>`,
      courseVideo: `<iframe src="//player.bilibili.com/player.html?aid=971322066&bvid=BV1yp4y1W7oU&cid=285224634&p=1"  width="400" height=200 allowfullscreen="true" allowfullscreen="true"></iframe>`,
    },

    "5-minutes-for-joy": {
      name: "五分钟喜悦瑜伽",
      englishName: "5 Minutes for Joy",
      introduce: `<p>你能说你时时刻刻都充满着喜悦么？你或许觉得那些说可以的人，不是怪胎就是在骗人，对么？不是的。有种方法能让喜悦时刻伴随你。有时候你所需要做的只是退后一步，换个视角。详情请看视频！</p><div class="flex justify-center mt-[1rem]"><iframe src="//player.bilibili.com/player.html?aid=846231816&bvid=BV1K54y1H7YX&cid=355519891&p=1"  width="400" height=200 allowfullscreen="true"></iframe></div>`,
      courseVideo: `<iframe src="//player.bilibili.com/player.html?aid=204054806&bvid=BV18h411C7WJ&cid=292742493&p=1"  width="400" height=200 allowfullscreen="true" allowfullscreen="true"></iframe>`,
    },
    "5-minutes-for-success": {
      name: "五分钟成功瑜伽",
      englishName: "5 Minutes for Success",
      introduce: `<p>你在生活中有多成功最终取决于你能多有效地使用你的头脑和身体。萨古鲁在这里指出了一些你应该在身心层面培养的基本品质。他提供了一项五分钟的每日练习，可使头脑日益清晰。试试看吧！</p><div class="flex justify-center mt-[1rem]"><iframe src="//player.bilibili.com/player.html?aid=546141687&bvid=BV1Kq4y1L7q9&cid=354575003&p=1"  width="400" height=200 allowfullscreen="true"></iframe></div>`,
      courseVideo: `<iframe src="//player.bilibili.com/player.html?aid=546186343&bvid=BV18q4y1L7C1&cid=354608161&p=1"  width="400" height=200 allowfullscreen="true" allowfullscreen="true"></iframe>`,
    },
    "5-minutes-for-inner-exploration": {
      name: "五分钟内在探索瑜伽",
      englishName: "5 Minutes For Inner Exploration",
      introduce: `<p>你是否曾疑惑过生命中有没有超越身体和头脑的维度？为了触及这些维度，我们需要净化造就我们的五大元素——土，水，火，风和空。瑜伽即是达成这个目标的技术。</p><div class="flex justify-center mt-[1rem]"><iframe src="//player.bilibili.com/player.html?aid=546318543&bvid=BV1Vq4y1s79s&cid=358379896&p=1"  width="400" height=200 allowfullscreen="true"></iframe></div>`,
      courseVideo: `<iframe src="//player.bilibili.com/player.html?aid=631367763&bvid=BV1vb4y1C71s&cid=358386951&p=1"  width="400" height=200 allowfullscreen="true" allowfullscreen="true"> </iframe>`,
    },
    "isha-kriya": {
      name: "Isha Kriya冥想",
      englishName: "Isha Kriya",
      introduce:
        "<p>Isha Kriya 是一个简单而有效的过程，植根于瑜伽科学的永恒智慧。由萨古鲁提供，它有潜力改变任何愿意每天投资12分钟的人的生活。</p><p>Isha Kriya 的目的是帮助一个人接触到自己存在的源头，按照自己的愿望和愿景创造生活。每日练习 Isha Kriya 有助于带来健康、活力、平和与幸福。它是应对现代生活繁忙节奏的有力工具。</p><p>今天，对大多数人来说，“瑜伽”这个词通常会让人想到把身体扭成各种不可能的姿势的画面。瑜伽的身体层面只是这个多维科学的一个方面。瑜伽是一种技术，能让身体和头脑达到它们能力的顶峰，让人活出生命的极致。</p><p>为每个人提供“一滴灵性”是萨古鲁的愿景。通过 Isha Kriya 引导冥想，现在每个人都可以舒适地在自己家中获得灵性过程所带来的可能性。</p>",
      benefits: ["发展头脑清晰度与专注力", "培养头脑稳定性", "创造平和与幸福"],
      practiceGuide: `<h2>准备</h2><ul><li>面向东方，双腿交叉而坐，脊柱舒适直立。</li><li>双手放在大腿上，掌心朝上。</li><li>脸微微上仰，闭上眼睛，注意力轻柔地停留在双眉之间。</li></ul><h2>冥想</h2><h3>阶段一</h3><ul><li>轻柔而缓慢地吸气和呼气。</li><li>每次吸气时，心里默念 ：“ 我不是身体（I am not the body）” 。吸气的时长应该和这个念头持续的时长相等。</li><li>每次呼气时，心里默念：“ 我也不是头脑（I am not even the mind）” 。呼气的时长应该和这个念头持 续的时长相等。</li><li>如此重复7至11分钟。</li></ul><img src="/assets/images/isha-kriya-1.png"><h3>阶段二</h3><ul><li>发长音“啊”7次，每次发音都要完全地呼气。</li><li>这个声音应该发自肚脐往下一点的 位置。</li><li>发音无需很响，但要响到足以感觉到声音的振动。</li></ul><h3>阶段三</h3><ul><li>脸微微上仰，注意力轻柔地停留在双眉之间，这样坐5至 6分钟。</li><li>这个练习的总时长在12至18分钟之间。如果愿意，你可以坐久一些。</li></ul><h2>请注意</h2><p>当你坐下来练习Isha Kriya时，不要去注意头脑或身体的活动。无论在你的身体或头脑中发生了什么，就只是忽略它，单纯地坐在那里。</p><p>中途不要停顿，因为这会扰乱练习过程中发生的能量重组。</p><ul><li>如果你每次至少做12分钟，这个kriya 将产生最大的效益。</li><li>前48天每天做两次（这被认为是一个完整的mandala或周期），之后每天至少做一次。</li></ul><p>你可以在一天中的任何时间提醒自己“ 我不是身体，我也不是头脑（I am not the body. I am not even the mind）”。</p><p>中途不要停顿，因为这会扰乱练习过程中发生的能量重组。</p>`,
      courseVideo: `<iframe src="//player.bilibili.com/player.html?aid=931487561&bvid=BV1fM4y1T7LS&cid=570321740&p=1" width="400" height=200 allowFullScreen="true"></iframe>`,
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
      courseVideo: `<iframe src='//player.bilibili.com/player.html?bvid=BV1Xr4y1c7vD&cid=247866627&p=1&share_source=copy_web' width="400" height=200 allowFullScreen="true"></iframe>`,
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

  const renderTitle = (title) => (
    <h2 className="text-[1.2rem] mb-[0.4rem] text-[#1c3cab]">{title}</h2>
  );

  const renderBenefits = (benefits) => {
    return (
      <div className="mb-[2rem]">
        {renderTitle("课程益处")}
        <ul className="leading-9">
          {benefits.map((benefit) => (
            <li className="mb-[0.8rem] leading-6 text-[#333]">
              <p className="highlight">{benefit}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  const renderIntroduce = (introduce) => {
    return (
      <div className="mb-[2rem]">
        {renderTitle("课程介绍")}
        <div
          className="whitespace-pre-wrap leading-7 text-[1rem] text-[#333]"
          dangerouslySetInnerHTML={{ __html: introduce }}
        ></div>
      </div>
    );
  };

  const renderCourseVideo = (courseVideo) => {
    return (
      <div className="mb-[2rem]">
        {renderTitle("课程视频")}
        <div
          className="flex justify-center mt-[1rem]"
          dangerouslySetInnerHTML={{ __html: courseVideo }}
        ></div>
      </div>
    );
  };

  const renderPracticeGuide = (practiceGuide) => {
    return (
      <div className="mb-[2rem]">
        {renderTitle("练习指引")}
        <div
          className="whitespace-pre-wrap leading-7 mb-[2rem] text-[1rem] text-[#333] common-html-wrap"
          dangerouslySetInnerHTML={{ __html: practiceGuide }}
        ></div>
      </div>
    );
  };

  const renderDetail = () => {
    const detailData = allCourseDict[id];
    const {
      name,
      englishName,
      introduce,
      benefits = [],
      practiceGuide,
      courseVideo,
    } = detailData;
    return (
      <div className="p-[1.4rem]">
        <div className="text-[1.8rem] text-[#1c3cab]">{name}</div>
        <div className="text-[1.4rem] text-[#fdad6a] mb-[1rem]">
          {englishName}
        </div>
        {!!introduce && renderIntroduce(introduce)}
        {!!benefits.length && renderBenefits(benefits)}
        {!!practiceGuide && renderPracticeGuide(practiceGuide)}
        {!!courseVideo && renderCourseVideo(courseVideo)}
        <></>
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
