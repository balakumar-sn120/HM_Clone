import React from "react";
import Banner from "../atoms/Banner";
import BannerContent from "../atoms/BannerContent";
import BannerListLayout from "../../Layouts/BannerListLayout";

function HomeScreen() {
  const bannerObjArr = [
    {
      mainHeader: "The festive collection",
      buttonArr: ["Women", "Men", "Divided", "Kids", "Baby", "Home"],
      src: "https://image.hm.com/content/dam/global_campaigns/season_08/ladies/9727a/9727A-3x2-2.jpg?imwidth=1536",
      srcSet:
        "https://image.hm.com/content/dam/global_campaigns/season_08/ladies/9727a/9727A-3x2-2.jpg?imwidth=256 256w, https://image.hm.com/content/dam/global_campaigns/season_08/ladies/9727a/9727A-3x2-2.jpg?imwidth=264 264w, https://image.hm.com/content/dam/global_campaigns/season_08/ladies/9727a/9727A-3x2-2.jpg?imwidth=384 384w, https://image.hm.com/content/dam/global_campaigns/season_08/ladies/9727a/9727A-3x2-2.jpg?imwidth=396 396w, https://image.hm.com/content/dam/global_campaigns/season_08/ladies/9727a/9727A-3x2-2.jpg?imwidth=564 564w, https://image.hm.com/content/dam/global_campaigns/season_08/ladies/9727a/9727A-3x2-2.jpg?imwidth=657 657w, https://image.hm.com/content/dam/global_campaigns/season_08/ladies/9727a/9727A-3x2-2.jpg?imwidth=768 768w, https://image.hm.com/content/dam/global_campaigns/season_08/ladies/9727a/9727A-3x2-2.jpg?imwidth=820 820w, https://image.hm.com/content/dam/global_campaigns/season_08/ladies/9727a/9727A-3x2-2.jpg?imwidth=1260 1260w, https://image.hm.com/content/dam/global_campaigns/season_08/ladies/9727a/9727A-3x2-2.jpg?imwidth=1536 1536w",
    },
    {
      mainHeader: "The casual edit",
      description: `How to wear the heritage-inspired autumn trend? Here’s your answer.`,
      buttonArr: ["Shop now"],
      showGrayShade: true,
      src: "https://image.hm.com/content/dam/global_campaigns/season_08/men/3138b/3138B-3x2-1-casual-autumn-menswear.jpg?imwidth=1536",
      srcSet:
        "https://image.hm.com/content/dam/global_campaigns/season_08/men/3138b/3138B-3x2-1-casual-autumn-menswear.jpg?imwidth=256 256w, https://image.hm.com/content/dam/global_campaigns/season_08/men/3138b/3138B-3x2-1-casual-autumn-menswear.jpg?imwidth=264 264w, https://image.hm.com/content/dam/global_campaigns/season_08/men/3138b/3138B-3x2-1-casual-autumn-menswear.jpg?imwidth=384 384w, https://image.hm.com/content/dam/global_campaigns/season_08/men/3138b/3138B-3x2-1-casual-autumn-menswear.jpg?imwidth=396 396w, https://image.hm.com/content/dam/global_campaigns/season_08/men/3138b/3138B-3x2-1-casual-autumn-menswear.jpg?imwidth=564 564w, https://image.hm.com/content/dam/global_campaigns/season_08/men/3138b/3138B-3x2-1-casual-autumn-menswear.jpg?imwidth=657 657w, https://image.hm.com/content/dam/global_campaigns/season_08/men/3138b/3138B-3x2-1-casual-autumn-menswear.jpg?imwidth=768 768w, https://image.hm.com/content/dam/global_campaigns/season_08/men/3138b/3138B-3x2-1-casual-autumn-menswear.jpg?imwidth=820 820w, https://image.hm.com/content/dam/global_campaigns/season_08/men/3138b/3138B-3x2-1-casual-autumn-menswear.jpg?imwidth=1260 1260w, https://image.hm.com/content/dam/global_campaigns/season_08/men/3138b/3138B-3x2-1-casual-autumn-menswear.jpg?imwidth=1536 1536w",
    },
    {
      mainHeader: "Elevate your autumn wardrobe",
      buttonArr: ["Shop now"],
      description: `Exciting trousers updates.`,
      src: "https://image.hm.com/content/dam/global_campaigns/season_08/divided/5038b/5038B-3x2-1.jpg?imwidth=1536",
      srcSet:
        "https://image.hm.com/content/dam/global_campaigns/season_08/divided/5038b/5038B-3x2-1.jpg?imwidth=256 256w, https://image.hm.com/content/dam/global_campaigns/season_08/divided/5038b/5038B-3x2-1.jpg?imwidth=264 264w, https://image.hm.com/content/dam/global_campaigns/season_08/divided/5038b/5038B-3x2-1.jpg?imwidth=384 384w, https://image.hm.com/content/dam/global_campaigns/season_08/divided/5038b/5038B-3x2-1.jpg?imwidth=396 396w, https://image.hm.com/content/dam/global_campaigns/season_08/divided/5038b/5038B-3x2-1.jpg?imwidth=564 564w, https://image.hm.com/content/dam/global_campaigns/season_08/divided/5038b/5038B-3x2-1.jpg?imwidth=657 657w, https://image.hm.com/content/dam/global_campaigns/season_08/divided/5038b/5038B-3x2-1.jpg?imwidth=768 768w, https://image.hm.com/content/dam/global_campaigns/season_08/divided/5038b/5038B-3x2-1.jpg?imwidth=820 820w, https://image.hm.com/content/dam/global_campaigns/season_08/divided/5038b/5038B-3x2-1.jpg?imwidth=1260 1260w, https://image.hm.com/content/dam/global_campaigns/season_08/divided/5038b/5038B-3x2-1.jpg?imwidth=1536 1536w",
    },
    {
      mainHeader: "Radiant in red",
      buttonArr: ["Shop now"],
      description: "Celebratory kidswear for Disney100!",
      src: "https://image.hm.com/content/dam/global_campaigns/season_08/kids/4098j/4098J-3x2-1.jpg?imwidth=1536",
      showGrayShade: true,
      srcSet:
        "https://image.hm.com/content/dam/global_campaigns/season_08/kids/4098j/4098J-3x2-1.jpg?imwidth=256 256w, https://image.hm.com/content/dam/global_campaigns/season_08/kids/4098j/4098J-3x2-1.jpg?imwidth=264 264w, https://image.hm.com/content/dam/global_campaigns/season_08/kids/4098j/4098J-3x2-1.jpg?imwidth=384 384w, https://image.hm.com/content/dam/global_campaigns/season_08/kids/4098j/4098J-3x2-1.jpg?imwidth=396 396w, https://image.hm.com/content/dam/global_campaigns/season_08/kids/4098j/4098J-3x2-1.jpg?imwidth=564 564w, https://image.hm.com/content/dam/global_campaigns/season_08/kids/4098j/4098J-3x2-1.jpg?imwidth=657 657w, https://image.hm.com/content/dam/global_campaigns/season_08/kids/4098j/4098J-3x2-1.jpg?imwidth=768 768w, https://image.hm.com/content/dam/global_campaigns/season_08/kids/4098j/4098J-3x2-1.jpg?imwidth=820 820w, https://image.hm.com/content/dam/global_campaigns/season_08/kids/4098j/4098J-3x2-1.jpg?imwidth=1260 1260w, https://image.hm.com/content/dam/global_campaigns/season_08/kids/4098j/4098J-3x2-1.jpg?imwidth=1536 1536w",
    },
    {
      mainHeader: "Radiant in red",
      buttonArr: ["Shop now"],
      src: "https://image.hm.com/content/dam/global_campaigns/season_08/ladies/1058n/1058N-3x2-1.jpg?imwidth=1536",
      srcSet:
        "https://image.hm.com/content/dam/global_campaigns/season_08/ladies/1058n/1058N-3x2-1.jpg?imwidth=256 256w, https://image.hm.com/content/dam/global_campaigns/season_08/ladies/1058n/1058N-3x2-1.jpg?imwidth=264 264w, https://image.hm.com/content/dam/global_campaigns/season_08/ladies/1058n/1058N-3x2-1.jpg?imwidth=384 384w, https://image.hm.com/content/dam/global_campaigns/season_08/ladies/1058n/1058N-3x2-1.jpg?imwidth=396 396w, https://image.hm.com/content/dam/global_campaigns/season_08/ladies/1058n/1058N-3x2-1.jpg?imwidth=564 564w, https://image.hm.com/content/dam/global_campaigns/season_08/ladies/1058n/1058N-3x2-1.jpg?imwidth=657 657w, https://image.hm.com/content/dam/global_campaigns/season_08/ladies/1058n/1058N-3x2-1.jpg?imwidth=768 768w, https://image.hm.com/content/dam/global_campaigns/season_08/ladies/1058n/1058N-3x2-1.jpg?imwidth=820 820w, https://image.hm.com/content/dam/global_campaigns/season_08/ladies/1058n/1058N-3x2-1.jpg?imwidth=1260 1260w, https://image.hm.com/content/dam/global_campaigns/season_08/ladies/1058n/1058N-3x2-1.jpg?imwidth=1536 1536w",
    },
    {
      mainHeader: "Festive hosting",
      buttonArr: ["Shop now"],
      description: `From elegant gold rim glasses to stylish serving dishes!`,
      src: "https://image.hm.com/content/dam/global_campaigns/season_08/home/7038b/7038B-3x2-teaser.jpg?imwidth=1536",
      srcSet:
        "https://image.hm.com/content/dam/global_campaigns/season_08/home/7038b/7038B-3x2-teaser.jpg?imwidth=256 256w, https://image.hm.com/content/dam/global_campaigns/season_08/home/7038b/7038B-3x2-teaser.jpg?imwidth=264 264w, https://image.hm.com/content/dam/global_campaigns/season_08/home/7038b/7038B-3x2-teaser.jpg?imwidth=384 384w, https://image.hm.com/content/dam/global_campaigns/season_08/home/7038b/7038B-3x2-teaser.jpg?imwidth=396 396w, https://image.hm.com/content/dam/global_campaigns/season_08/home/7038b/7038B-3x2-teaser.jpg?imwidth=564 564w, https://image.hm.com/content/dam/global_campaigns/season_08/home/7038b/7038B-3x2-teaser.jpg?imwidth=657 657w, https://image.hm.com/content/dam/global_campaigns/season_08/home/7038b/7038B-3x2-teaser.jpg?imwidth=768 768w, https://image.hm.com/content/dam/global_campaigns/season_08/home/7038b/7038B-3x2-teaser.jpg?imwidth=820 820w, https://image.hm.com/content/dam/global_campaigns/season_08/home/7038b/7038B-3x2-teaser.jpg?imwidth=1260 1260w, https://image.hm.com/content/dam/global_campaigns/season_08/home/7038b/7038B-3x2-teaser.jpg?imwidth=1536 1536w",
    },
  ];
  return (
    <div>
      <BannerListLayout>
        <Banner {...bannerObjArr[0]}>
          <BannerContent {...bannerObjArr[0]} />
        </Banner>

        <Banner {...bannerObjArr[1]}>
          <BannerContent {...bannerObjArr[1]} />
        </Banner>

        <Banner {...bannerObjArr[2]}>
          <BannerContent {...bannerObjArr[2]} />
        </Banner>

        <Banner {...bannerObjArr[3]}>
          <BannerContent {...bannerObjArr[3]} />
        </Banner>

        <Banner {...bannerObjArr[4]}>
          <BannerContent {...bannerObjArr[4]} />
        </Banner>

        <Banner {...bannerObjArr[5]}>
          <BannerContent {...bannerObjArr[5]} />
        </Banner>
      </BannerListLayout>
    </div>
  );
}

export default HomeScreen;
