/* =========================================================
   @myanimestore__  Games Store  -  Client Script
   ========================================================= */

// -------- GAME DATA --------
const GAMES = {
  action: {
    title: "Action Games",
    icon: "fa-bolt",
    color: "#dc2626",
   items: [
  "Android Game #1",
  "Android Game #2",
  "Android Game #3",
  "Android Game #4",
  "Android Game #5",
  "Android Game #6",
  "Android Game #7",
  "Android Game #8",
  "Android Game #9",
  "Android Game #10",
  "Android Game #11",
  "Android Game #12",
  "Android Game #13",
  "Android Game #14",
  "Android Game #15",
  "Android Game #16",
  "Android Game #17",
  "Android Game #18",
  "Android Game #19",
  "Android Game #20",
  "Android Game #21",
  "Android Game #22",
  "Android Game #23",
  "Android Game #24",
  "Android Game #25"
],
images: [
    "https://public-files.gumroad.com/g75cxfxagimeo1ovri7wt8mraqyc",
    "https://i.ytimg.com/vi/LOQOhHi_UZc/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCLCJAzCMEBegKjuf3-7Q_qVYHWrg",
    "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSqUsKXsAlXw2hg8SwtrfnPLT9VTEjXVXJKY9yWeUpq8vvzhMbK",
    "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSzS638_X4XNIsFimfd_esRLWhCnbXt2MizdFuOkA9kGpLDco5v",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf69mlVsfjEPhZvAuuZErunT4igCSTr6FdzA&s",
    "https://kotaku.com/igdb/image/upload/t_720p/sc980f.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyXDe3W63zBmsVKqx4tdQoDzLm0J4yygW7FQ&s",
    "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQWX5iwDSptR8szUYaeWDG2_BJACmT6J7m6enFQbpPwasbpKOc2",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0LTg9y7fZCoOLsOijjQXud4oTnXm3B2AT-A&s",
    "https://apktodo.io/uploads/2025/11/summer-life-after-work-with-miko-free.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPqWfh5-Ttw72gOu5aOtNVaSpiQzkWDgM-Ug&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtPAbODpf-To_peGEV5hpD_SCXE5ZBQ4jn1KX-8raeEVj_cqkA",
    "https://cdn.androidadult.com/wp-content/uploads/2024/09/Shades-of-the-Past-APK-Android-Adult-Porn-Game-Download-Featured.png",
    "https://lewdzone.com/wp-content/uploads/2020/04/Once-in-a-Lifetime-Adult-Game-Screenshots-2.jpg",
    "https://imgdownload.juxia.com/upload/202412/13/e9122q9HTxz0kYA.jpg",
    "https://image.tensorartassets.com/cdn-cgi/image/w=600/model_showcase/705365060316500971/160c538c-7a96-22e4-5ccf-0a8144036d03.png",
    "https://lewdzone.com/wp-content/uploads/2024/09/Welcome-to-Paradise-Island-Adult-Game-Screenshots-1.jpg",
    "https://cdn.androidadult.com/wp-content/uploads/2024/12/Polyturnon-APK-Android-Adult-Porn-Game-Latest-Version-Download-7.jpg",
    "https://pic.gameyj.com/gameyj/imgfile/20251211/11105612w1qu.jpg",
    "https://static.porngameshub.com/uploads/public/684/6d5/6f4/thumb_55607_500_375_0_0_crop.webp",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK1y2AhuI5VyVzq0NxNRSK-Dn9gHO8m9oRhg&s",
    "https://imgdownload.juxia.com/upload/202409/02/0214511424484zEH84eF5K9nsn1.jpg",
    "https://tribe-s3-production.imgix.net/4x89o8iHPY2a5GnJ4Q4rI?fit=max&w=1000&auto=compress,format",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1934xhm4tbx7FMriRyZ0V-xeferCZlzacwg&s",
    "https://repacklab.com/wp-content/uploads/2025/03/Deep-Vault-69-Video-Game-Free-Download-Repacklab-1-1-200x315.png.webp"

  ],
  prices: [
  30,30,30,30,30,30,25,30,25,10,10,10,25,25,30,10,15,20,10,10,20,15,20,20,25,
],


links: [
"https://t.me/c/3732184488/61",
"https://t.me/c/3732184488/68",
"https://t.me/c/3732184488/73",
"https://t.me/c/3732184488/78",
"https://t.me/c/3732184488/85",
"https://t.me/c/3732184488/92",
"https://t.me/c/3732184488/98",
"https://t.me/c/3732184488/101",
"https://t.me/c/3732184488/107",
"https://t.me/c/3732184488/113",
"https://t.me/c/3732184488/116",
"https://t.me/c/3732184488/120",
"https://t.me/c/3732184488/128",
"https://t.me/c/3732184488/138",
"https://t.me/c/3732184488/142",
"https://t.me/c/3732184488/148",
"https://t.me/c/3732184488/152",
"https://t.me/c/3732184488/158",
"https://t.me/c/3732184488/160",
"https://t.me/c/3732184488/165",
"https://t.me/c/3732184488/168",
"https://t.me/c/3732184488/178",
"https://t.me/c/3732184488/191",
"https://t.me/c/3732184488/203",
"https://t.me/c/3732184488/213"
]


  },
  adventure: {
    title: "Adventure Games",
    icon: "fa-compass",
    color: "#0891b2",
   items: [
  "Android Game #26",
  "Android Game #27",
  "Android Game #28",
  "Android Game #29",
  "Android Game #30",
  "Android Game #31",
  "Android Game #32",
  "Android Game #33",
  "Android Game #34",
  "Android Game #35",
  "Android Game #36",
  "Android Game #37",
  "Android Game #38",
  "Android Game #39",
  "Android Game #40",
  "Android Game #41",
  "Android Game #42",
  "Android Game #43",
  "Android Game #44",
  "Android Game #45",
  "Android Game #46",
  "Android Game #47",
  "Android Game #48",
  "Android Game #49",
  "Android Game #50"
],
images: [
    "https://modapkloo.com/wp-content/uploads/2026/05/Sister-in-lawMirai-chan-APK-Screenshot-5-1024x461.webp",
    "https://f95zone.to.it/wp-content/uploads/2024/11/4238699_screenshot1.webp",
    "https://img.itch.zone/aW1nLzIxMDYzMDQ0LnBuZw==/original/q3kNPe.png",
    "https://img.itch.zone/aW1nLzE0NDc3MzA0LnBuZw==/original/al0NDe.png",
    "https://cdn.androidadult.com/wp-content/uploads/2024/05/Bubbles-and-Sisters-Adult-Game-Android-APK-Download-3.jpg",
    "https://imgdownload.juxia.com/upload/202312/29/ca998jWacCM0oy6.png",
    "https://img.itch.zone/aW1hZ2UvMTQ5MzI1OS8xNTU4NTQ0Ny5naWY=/original/aPnQ1Q.gif",
    "https://image.acg.lol/file/2026/02/18/6b289060-bd47-48fd-82e6-c5360d2d68eb.png",
    "https://lewdflix.com/wp-content/uploads/2025/07/heart-problems-694e7d9cd39f3-1800x1013.webp",
    "https://c10.patreonusercontent.com/4/patreon-media/p/post/146773311/d1a1191fbcd942aab850294e03ab98f4/eyJ3IjoxMDgwfQ%3D%3D/1.png?token-hash=1dJghpXcFytxSwfvsKrBoOiTiLt2CwTgJQVv8P4i9tc%3D&token-time=1783814400",
    "https://gamefabrique.ru/bigimages/milfy-city-final-edition.jpg",
    "https://fap-nation.org/wp-content/uploads/2021/04/2-72-1024x576.jpg",
    "https://cdn.androidadult.com/wp-content/uploads/2022/03/Another-Chance-APK-Android-Adult-Game-Download-12.jpg",
    "https://img.itch.zone/aW1hZ2UvMzI4NjQ5My8xOTk2ODk2My5wbmc=/x200/toLW%2Bi.png",
    "https://tentaclesgames.com/wp-content/uploads/2024/08/tpr1.png",
    "https://i.redd.it/touch-it-rikka-apk-1-0-latest-version-v0-pv9j994bf67d1.jpg?width=180&format=pjpg&auto=webp&s=6780558437ca4f5879c0da20309fd6520af0611c",
    "https://i.ytimg.com/vi/eiL26lGAgwc/maxresdefault.jpg",
    "https://static.porngameshub.com/uploads/public/69d/6cb/ee4/thumb_63395_500_375_0_0_crop.webp",
    "https://cdn.androidadult.com/wp-content/uploads/2021/08/Worlds-Crossing-Academy-APK-Android-Download-8.jpg",
    "https://img69.imagetwist.com/th/62585/dex480urypq7.jpg",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEif72PRfa8B_SBDeXO-GqB2sDEnsdNZ8y0YfvOjsCjBLp-RBJx3kXcWBkPeD9ghd3Def5DaMC5HyJ0z1K4A6ERCHLKhZ60Iozx8ru-HWAlPG0oOiW1ZAXjT8G0ZeVL1GKdHteDNcbVaCDklbmg3N6NEw_K16MU1iAZVJgwTgatkBRtG-Q1t0VyJO4NWJzp1/s1920/Z9ES3v.jpg",
    "https://image.gamespot.com.cn/upload/202404/22/793ceAEJnpI7NGu.jpg",
    "https://owo.lewd.ninja/images/games/130776_3d43e8f828cef2a65f135be6a9834f13.png",
    "https://lewdzone.com/wp-content/uploads/2022/08/The-College-Life-of-Rika-Tanaka-Adult-Game-Screenshots-7.jpg",
    "https://cdn.androidadult.com/wp-content/uploads/2022/09/School-APK-Android-Adult-Game-Download-6.jpg"

  ],
  prices: [
  10,10,20,25,30,20,20,30,20,30,30,25,20,10,10,15,15,25,25,20,25,20,20,20,20,
],

links: [
  "https://t.me/c/3732184488/231",
  "https://t.me/c/3732184488/236",
  "https://t.me/c/3732184488/245",
  "https://t.me/c/3732184488/253",
  "https://t.me/c/3732184488/264",
  "https://t.me/c/3732184488/274",
  "https://t.me/c/3732184488/282",
  "https://t.me/c/3732184488/286",
  "https://t.me/c/3732184488/293",
  "https://t.me/c/3732184488/303",
  "https://t.me/c/3732184488/311",
  "https://t.me/c/3732184488/319",
  "https://t.me/c/3732184488/323",
  "https://t.me/c/3732184488/325",
  "https://t.me/c/3732184488/329",
  "https://t.me/c/3732184488/335",
  "https://t.me/c/3732184488/339", 
  "https://t.me/c/3732184488/344",
  "https://t.me/c/3732184488/354",
  "https://t.me/c/3732184488/358",
  "https://t.me/c/3732184488/367",
  "https://t.me/c/3732184488/373"
]


  },
  horror: {
    title: "Dating Games",
    icon: "fa-book-open",
    color: "#7c3aed",
    items: [
  "Android Game #51",
  "Android Game #52",
  "Android Game #53",
  "Android Game #54",
  "Android Game #55",
  "Android Game #56",
  "Android Game #57",
  "Android Game #58",
  "Android Game #59",
  "Android Game #60",
  "Android Game #61",
  "Android Game #62",
  "Android Game #63",
  "Android Game #64",
  "Android Game #65",
  "Android Game #66",
  "Android Game #67",
  "Android Game #68",
  "Android Game #69",
  "Android Game #70",
  "Android Game #71",
  "Android Game #72",
  "Android Game #73",
  "Android Game #74",
  "Android Game #75"
],
images: [
    "https://incgrepacks.com/api/media/file/melissa_phonetop1.webp",
    "https://cdn.androidadult.com/wp-content/uploads/2020/06/Araiya-Android-APK-Download.jpg",
    "https://dikgames.com/wp-content/uploads/2025/02/Banner-6-576x356.jpg.webp",
    "https://lostlife.vip/wp-content/uploads/2025/03/lost-life-screenshot-feature-1024x516.jpg",
    "https://owo.lewd.ninja/images/games/173017_a2cd6d4e88ff728359f53b3021a2cbe9.png",
    "https://lewdzone.com/wp-content/uploads/2025/11/Stop-Master-The-Time-Freeze-Visito-Adult-Game-Screenshots-5.webp",
    "https://img.itch.zone/aW1hZ2UvMjU0NTQ0OC8xOTczMTM4NS5wbmc=/original/2u8Jsg.png",
    "https://img.itch.zone/aW1hZ2UvMjU3ODk5OC8xNzYwMTAxNy5naWY=/original/hCV5Y0.gif",
    "https://i1.sndcdn.com/artworks-as7zkKbz4Qjwu3Av-jxfnoQ-t1080x1080.jpg",
    "https://rule34video.com/contents/videos_screenshots/3138000/3138802/336x189/1.jpg",
    "https://www.latestmodapks.com/wp-content/uploads/2023/12/Doraemon-X-1.jpeg",
    "https://imgcdn.latestmodapks.com/api/resize?url=https://www.latestmodapks.com/wp-content/uploads/2023/07/ben-10-a-day-with-gwen-app-3.jpeg",
    "https://imgdownload.juxia.com/upload/202508/13/1315213313eda92rCNJjq8Ue2dd.jpg",
    "https://img.itch.zone/aW1hZ2UvMTY4MDQyNC8xMjU0NTUwNy5wbmc=/original/PI5AT6.png",
    "https://i.ytimg.com/vi/GySiRyiMRAs/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCWGP6b-QyBxvIbw6mN_eddX9GJUg",
    "https://play-lh.googleusercontent.com/MBycak1gt5l2XpyImhSmyeo9HLE1v6ROBvkzgrEY80NjdROfKm6qeYkZ2uZIZU9f0Q",
    "https://img.itch.zone/aW1hZ2UvMjIyODQwMS8xMzM1Mzc4MS5wbmc=/original/lD9QeZ.png",
    "https://imgdownload.juxia.com/upload/202509/22/221540142f0dedW4GPsDO67efxc.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIcau-iA9bzRH3aSBDGzZCmNCajKJLIStx8GhIip0WAna0YY8x",
    "https://apktodo.io/uploads/2026/1/last-train-jk-2-thumbnail.jpg",
    "https://scontent.fdel18-1.fna.fbcdn.net/v/t39.30808-6/346813675_752370069676714_1610813809329535457_n.png?stp=dst-png&cstp=mx1500x1000&ctp=s960x960&_nc_cat=111&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=D9xFGs9uNbEQ7kNvwGVK2_h&_nc_oc=AdpRk20SqCBeIKN2VuNOdbM1EwOniFZuBGHqSq4HM6HaDXprZz8I4r-_uIn0oZO3rr4&_nc_zt=23&_nc_ht=scontent.fdel18-1.fna&_nc_gid=b4870orZSKi9ILcG2VWnUg&_nc_ss=7a289&oh=00_Af-JD6HCjgKo-TrYGCfJ8xl8ygPTc2qlPsjPrA5eRJZa6w&oe=6A469593",
    "https://image.winudf.com/v2/user/admin/YWRtaW5fU2NyZWVuc2hvdF8yMDI0MTEyN18xNzE3MThfS2lzYWtpIEJsdWUgQXJjaGl2ZS5qcGdfMTczMjY5OTEwMTY4Mg/screen-1.jpg?fakeurl=1&type=.jpg",
    "https://i.redd.it/vl5h6h8vbexf1.jpeg",
    "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTYf39wASHdeoXHoetIPEo15frGnq2O-qJ4MrEZODBGkmUSO4vA",
    "https://cdn.androidadult.com/wp-content/uploads/2026/02/Hermiones-Shop-8.jpg"

  ],
  prices: [
  20,25,25,30,10,10,10,10,20,15,20,20,20,20,10,15,15,20,25,10,10,10,15,15,15,
],

links: [
  "https://t.me/c/3732184488/381",
  "https://t.me/c/3732184488/388",
  "https://t.me/c/3732184488/392",
  "https://t.me/c/3732184488/399",
  "https://t.me/c/3732184488/403",
  "https://t.me/c/3732184488/410",
  "https://t.me/c/3732184488/415",
  "https://t.me/c/3732184488/420",
  "https://t.me/c/3732184488/423",
  "https://t.me/c/3732184488/429",
  "https://t.me/c/3732184488/439",
  "https://t.me/c/3732184488/444",
  "https://t.me/c/3732184488/447",
  "https://t.me/c/3732184488/450",
  "https://t.me/c/3732184488/458",
  "https://t.me/c/3732184488/465",
  "https://t.me/c/3732184488/470",
  "https://t.me/c/3732184488/475",
  "https://t.me/c/3732184488/481",
  "https://t.me/c/3732184488/487",
  "https://t.me/c/3732184488/496",
  "https://t.me/c/3732184488/500",
  "https://t.me/c/3732184488/506",
  "https://t.me/c/3732184488/512",
  "https://t.me/c/3732184488/515"
]

  },
  racing: {
    title: "Simulator Games",
    icon: "fa-flag-checkered",
    color: "#ea580c",
    items: [
  "Android Game #76",
  "Android Game #77",
  "Android Game #78",
  "Android Game #79",
  "Android Game #80",
  "Android Game #81",
  "Android Game #82",
  "Android Game #83",
  "Android Game #84",
  "Android Game #85",
  "Android Game #86",
  "Android Game #87",
  "Android Game #88",
  "Android Game #89",
  "Android Game #90",
  "Android Game #91",
  "Android Game #92",
  "Android Game #93",
  "Android Game #94",
  "Android Game #95",
  "Android Game #96",
  "Android Game #97",
  "Android Game #98",
  "Android Game #99",
  "Android Game #100"
],
images: [
    "https://lewdzone.com/wp-content/uploads/2019/01/Little-Man-Adult-Game-Cover.jpg",
    "https://img.itch.zone/aW1nLzI0NTE3NTY2LmpwZw==/original/uCA8SF.jpg",
    "https://c10.patreonusercontent.com/4/patreon-media/p/post/161071852/efa01f1c77df4431abb68b613fe8c39c/eyJ3IjoxMDgwfQ%3D%3D/1.png?token-hash=m_rtmIRd9A7aMOKiK-XqFQlfZiILGDaMsghXJXD0cjU%3D&token-time=1783900800",
    "https://image.gamespot.com.cn/upload/202507/10/10142328b388fsqd5JXm1oUab5r.png",
    "https://static.porngameshub.com/uploads/public/607/88f/7dc/thumb_8014_500_375_0_0_crop.webp",
    "https://lewdzone.com/wp-content/uploads/2021/01/The-BloodRiver-Saga-Retransmitter-Adult-Game-Cover.jpg",
    "https://c10.patreonusercontent.com/4/patreon-media/p/post/105956194/6746369edd2c496e95de04a5ebeaadd7/eyJ3IjoxMDgwfQ%3D%3D/1.png?token-hash=_YYdIeI0uxerTxkwjgwlzAShCJNDEoqLbqChRi9jVEc%3D&token-time=1783641600",
    "https://img.itch.zone/aW1nLzI1MDkyMzM1LnBuZw==/original/7R8WYq.png",
    "https://f95zone.to.it/wp-content/uploads/2024/09/2134755_20220629064947197.webp",
    "https://img.itch.zone/aW1nLzI4NTY3MDEucG5n/original/PFHaS3.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9lzophjCZxZCWsz3mPyM_csOvFG6GQd9TpXegc4BA09VXhZ8PFvMsDQY&s=10",
    "https://img.itch.zone/aW1nLzY0Mjc4NjMuanBn/original/081oK4.jpg",
    "https://www.visitmama.com/wp-content/uploads/2019/12/Academy34.jpg",
    "https://modapkloo.com/wp-content/uploads/2025/07/MurMur-Game-Apk-MOD.webp",
    "https://androidow.com/uploads/posts/2023-09/1694365891_3.webp",
    "https://static.porngameshub.com/uploads/public/65d/df6/f45/thumb_41731_270_203_0_0_crop.jpg",
    "https://img.itch.zone/aW1nLzI0MDgwMDk1LnBuZw==/original/aNxR68.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQryu34srO5JxPax83ROigCfSvuiDBic-g1ebM71RUL5cwUuNb2XlHSjABD&s=10",
    "https://image.51wma.com/upload/202603/06/cdec8MESfiPrFdK.png",
    "https://thumb-cdn77.xvideos-cdn.com/8d12c68f-af65-4982-abbb-21fe9f5adb20/0/xv_14_t.jpg",
    "https://porngameshub.net/uploads/posts/2024-04/4101_porngameshub_net.webp",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ13yxOGaI809k-GWl5-9iJ-TT1j3s3K43p7xx-q1pIFHQJknBzh8Fz7DJk&s=10",
    "https://lewdzone.com/wp-content/uploads/2024/06/Living-Together-Adult-Game-Screenshot-2.jpg",
    "https://img.itch.zone/aW1hZ2UvMjQ0MDg5NC8xNzY0ODEyMC5wbmc=/x200/sUfezy.png",
    "https://adultgamesworld.com/wp-content/uploads/2025/03/Capturehkgkghkghhdf-1.jpg"

  ],
  prices: [
  20,15,15,20,20,20,25,15,20,25,20,25,25,25,20,20,20,25,25,25,25,30,10,15,25,
],

links: [
  "https://t.me/c/3732184488/520",
  "https://t.me/c/3732184488/522",
  "https://t.me/c/3732184488/528",
  "https://t.me/c/3732184488/533",
  "https://t.me/c/3732184488/540",
  "https://t.me/c/3732184488/547",
  "https://t.me/c/3732184488/554",
  "https://t.me/c/3732184488/560",
  "https://t.me/c/3732184488/569",
  "https://t.me/c/3732184488/579",
  "https://t.me/c/3732184488/584",
  "https://t.me/c/3732184488/594",
  "https://t.me/c/3732184488/599",
  "https://t.me/c/3732184488/604",
  "https://t.me/c/3732184488/612",
  "https://t.me/c/3732184488/619",
  "https://t.me/c/3732184488/627",
  "https://t.me/c/3732184488/634",
  "https://t.me/c/3732184488/644",
  "https://t.me/c/3732184488/648",
  "https://t.me/c/3732184488/655",
  "https://t.me/c/3732184488/658",
  "https://t.me/c/3732184488/662",
  "https://t.me/c/3732184488/665",
  "https://t.me/c/3732184488/675"
]

  
  },
  puzzle: {
    title: "Visual Novel Games",
    icon: "fa-book-open",
    color: "#059669",
    items: [
  "Android Game #101",
  "Android Game #102",
  "Android Game #103",
  "Android Game #104",
  "Android Game #105",
  "Android Game #166",
  "Android Game #107",
  "Android Game #108",
  "Android Game #109",
  "Android Game #110",
  "Android Game #111",
  "Android Game #112",
  "Android Game #113",
  "Android Game #114",
  "Android Game #115",
  "Android Game #116",
  "Android Game #117",
  "Android Game #118",
  "Android Game #119",
  "Android Game #120",
  "Android Game #121",
  "Android Game #122",
  "Android Game #123",
  "Android Game #124",
  "Android Game #125"
],
images: [
    "https://cdn.androidadult.com/wp-content/uploads/2026/06/Kiss-of-Sin-Rewinding-Flame-11.webp",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNuGq-50yIxZCIotLoKvszNzgcq2fM_-tcQbUVm1yUpB9oVp-5NFoFyBc&s=10",
    "https://img.apktom.com/upload/202404/25/02be5VTLDYa75Co.jpg",
    "https://adultgameson.com/wp-content/uploads/2021/08/My-Cute-Roommate-2.jpg",
    "https://www.yunnx.com/upload/20240729/c0c900706e44d4.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV38g347fRAkKmBZkNLLgZnmYRQCQn6LLX4cXlHYv6fkUa5bwFLHMhUoM&s=10",
    "https://image.51wma.com/upload/202411/05/d5e66ka1qYzFbAn.jpg",
    "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/1148150/d7ae47bd99deaa68936adb4aa928a2dd122340bc.jpg",
    "https://c10.patreonusercontent.com/4/patreon-media/p/post/37607801/e63efbeffcc4424e96dfe3863ee72f32/eyJ3IjoxMDgwfQ%3D%3D/1.png?token-hash=qlkOqFgbeC_kPS7RpNMg_Oh40m3bQkGJQzKlZAKEcic%3D&token-time=1783814400",
    "https://www.ekocontent.pro/data/parse/5/files/9a4f76e576d0c039b373df6ff5ba8ea2/uberpie-taffytales-v052d-part-2_8_3.jpg",
    "https://erovns.com/wp-content/uploads/2023/12/1-173.webp",
    "https://i.ytimg.com/vi/g7bvc3ToyRQ/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCm-c_78BBEkHEn4YBGM2aXUMTA9g",
    "https://androidmo.im/uploads/posts/2019-05/1558970227_1550306580_t5ah1dxesds5zhow27lah8l8n.png",
    "https://lewdgames.to/wp-content/uploads/My-Summer-Job-Rose-Games1-1024x576.webp",
    "https://cdn.androidadult.com/wp-content/uploads/2020/10/Area69-APK-Android-Download-6.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7MLG7aoh3yjuRwQjjiU7xmZ360t7GgS0qAwslrYi8Bg&s=10",
    "https://gamefabrique.ru/bigimages/camp-with-mom-extend.jpg",
    "https://scontent.fdel18-1.fna.fbcdn.net/v/t39.99422-6/730153370_27280652108266583_6298459478898208868_n.png?stp=dst-jpg_tt6&cstp=mx1672x940&ctp=s960x960&_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=i9qox9wC58oQ7kNvwFRCEdf&_nc_oc=AdpKnj9Gced0Yh-E4lb86OE2FdR01k1CV2RFnLmytM-bvce2IU2KvddxBOONxvNya9Y&_nc_zt=14&_nc_ht=scontent.fdel18-1.fna&_nc_gid=FJlmZNi8GYSkrc7XH_YHDg&_nc_ss=7b289&oh=00_Af_P7YZ8MHs8bkqib9t9g52J1TBpYdm8FuahCLQE9iLLUA&oe=6A46ED56",
    "https://img.itch.zone/aW1hZ2UvODc0OTA5LzU3Nzc2MTAuanBn/original/6oSFK5.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnMBErtFaehI5ZnGt9yQytaY1rrGsjnaxzk3WwrVE6FmV1DbxDHXxUiYY&s=10",
    "https://neungames.com/wp-content/uploads/2025/12/crimson-high_gallery_15-1024x576.webp",
    "https://lewdflix.com/wp-content/uploads/2025/09/cosy-cafe-68cd71767ccf7-1800x1013.webp",
    "https://images.steamusercontent.com/ugc/1839179589232690874/EF0A6EEA8FE1FC7C5883F0384A818BFFBE7252BB/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true",
    "https://cdn.androidadult.com/wp-content/uploads/2022/10/Miris-Corruption-APK-Android-Adult-Game-Download-6.jpg",
    "https://adultgamesworld.com/wp-content/uploads/2020/09/Capturegdgsdsdd.png"

  ],
  prices: [
  20,25,10,20,20,20,20,20,20,20,20,20,20,20,25,25,20,25,25,25,20,25,30,25,25,
],

links: [
  "https://t.me/c/3732184488/684",
  "https://t.me/c/3732184488/697",
  "https://t.me/c/3732184488/700",
  "https://t.me/c/3732184488/707",
  "https://t.me/c/3732184488/713",
  "https://t.me/c/3732184488/717",
  "https://t.me/c/3732184488/725",
  "https://t.me/c/3732184488/729",
  "https://t.me/c/3732184488/737",
  "https://t.me/c/3732184488/747",
  "https://t.me/c/3732184488/750",
  "https://t.me/c/3732184488/753",
  "https://t.me/c/3732184488/760",
  "https://t.me/c/3732184488/766",
  "https://t.me/c/3732184488/776",
  "https://t.me/c/3732184488/781",
  "https://t.me/c/3732184488/790",
  "https://t.me/c/3732184488/796",
  "https://t.me/c/3732184488/805",
  "https://t.me/c/3732184488/813",
  "https://t.me/c/3732184488/819",
  "https://t.me/c/3732184488/829",
  "https://t.me/c/3732184488/833",
  "https://t.me/c/3732184488/841",
  "https://t.me/c/3732184488/850"
]



  }
};

// Platform tags pool
const PLATFORMS = ["PC","PS5","XBOX","Switch","Steam"];
const PRICES = [299, 499, 599, 799, 899, 999, 1299, 1499, 1799, 1999, 2499];

// Generate card data with reproducible values
function buildCards(genreKey) {
  const g = GAMES[genreKey];
  return g.items.map((name, idx) => {
    const seed = genreKey + "-" + idx;
    const rating = (7.5 + ((idx * 17) % 25) / 10).toFixed(1);
   const price = g.prices ? g.prices[idx] : 0;
    let oldPrice;

if (price === 10) {
    oldPrice = 99;
} else if (price === 15) {
    oldPrice = 149;
} else if (price === 20) {
    oldPrice = 199;    
} else if (price === 25) {
    oldPrice = 249;
} else if (price === 30) {
    oldPrice = 299;
} else {
    oldPrice = price;
}
    const platformA = PLATFORMS[idx % PLATFORMS.length];
    const platformB = PLATFORMS[(idx + 2) % PLATFORMS.length];
    const year = 2020 + ((idx * 3) % 6);
    const img = g.images ? g.images[idx] : "";
    const isNew = idx < 2;
    return {
  name,
  seed,
  rating,
  price,
  oldPrice,
  platformA,
  platformB,
  year,
  img,
  isNew,
  link: g.links ? g.links[idx] : "#"
};
  });
}

// -------- RENDER SECTIONS --------
const sectionsRoot = document.getElementById("sections-root");
const VISIBLE_STEP = 5;
const INITIAL_VISIBLE = 10;

function renderSection(genreKey) {
  const g = GAMES[genreKey];
  const all = buildCards(genreKey);

  const section = document.createElement("section");
  section.className = "genre-section";
  section.id = genreKey;
  section.dataset.testid = `section-${genreKey}`;

  section.innerHTML = `
    <div class="section-head">
      <h2>
        <span class="icon-wrap" style="background:${g.color}22;color:${g.color}">
          <i class="fa-solid ${g.icon}"></i>
        </span>
        ${g.title}
      </h2>
      <p class="muted">Top picks in ${g.title.toLowerCase()} — 2 rows of 5, click Load More for more.</p>
    </div>
    <div class="card-grid" data-testid="grid-${genreKey}"></div>
    <div class="load-more-wrap">
      <button class="load-more" data-genre="${genreKey}" data-testid="load-more-${genreKey}">
        <i class="fa-solid fa-circle-plus"></i> Load More
      </button>
    </div>
  `;

  sectionsRoot.appendChild(section);

  const grid = section.querySelector(".card-grid");
  // render initial 10
  appendCards(grid, all.slice(0, INITIAL_VISIBLE), 0);
  grid.dataset.visible = String(INITIAL_VISIBLE);
  grid.dataset.total = String(all.length);

  const btn = section.querySelector(".load-more");
  btn.addEventListener("click", () => {
    const visible = parseInt(grid.dataset.visible, 10);
    const total = parseInt(grid.dataset.total, 10);
    const next = Math.min(visible + VISIBLE_STEP, total);
    appendCards(grid, all.slice(visible, next), visible);
    grid.dataset.visible = String(next);
    if (next >= total) {
      btn.disabled = true;
      btn.innerHTML = `<i class="fa-solid fa-check"></i> All loaded`;
    }
  });
}

function appendCards(grid, items, offset) {
  items.forEach((it, i) => {
    const card = document.createElement("article");
    card.className = "game-card";
    card.style.animationDelay = `${(i % 5) * 0.05}s`;
    card.dataset.testid = `card-${it.seed}`;
    card.innerHTML = `
      <div class="card-img">
        <img src="${it.img}" alt="${it.name}" loading="lazy"/>
        ${it.isNew ? `<span class="card-badge">NEW</span>` : ``}
        <span class="card-rating"><i class="fa-solid fa-star"></i> ${it.rating}</span>
      </div>
      <div class="card-body">
        <h3 class="card-title">${it.name}</h3>
        <div class="card-meta">
          <span>${it.year}</span>
          <span class="tag">${it.platformA}</span>
          <span class="tag">${it.platformB}</span>
        </div>
        <div class="card-price">₹${it.price}<span class="old">₹${it.oldPrice}</span></div>
        <div class="card-actions">
          <button class="btn btn-buy" data-price="${it.price}" data-name="${it.name}" data-testid="buy-${it.seed}">
            <i class="fa-solid fa-cart-shopping"></i> Submit Request
          </button>
          <button
  class="btn btn-view"
  data-name="${it.name}"
  data-link="${it.link}"
  data-testid="view-${it.seed}">
  <i class="fa-solid fa-eye"></i> View
</button>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

// Render all genre sections
["action","adventure","horror","racing","puzzle"].forEach(renderSection);

// -------- BROWSE BY GENRE TILES --------
const genreGrid = document.getElementById("genreGrid");
const tileData = [
  { key: "action", label: "Action", icon: "fa-bolt", cls: "tile-action" },
  { key: "adventure", label: "Adventure", icon: "fa-compass", cls: "tile-adventure" },
  { key: "horror", label: "Dating", icon: "fa-ghost", cls: "tile-horror" },
  { key: "racing", label: "Simulator", icon: "fa-flag-checkered", cls: "tile-racing" },
  { key: "puzzle", label: "Visual Novel", icon: "fa-book-open", cls: "tile-puzzle" },
  { key: "action", label: "Strategy", icon: "fa-chess-knight", cls: "tile-strategy" }
];
tileData.forEach(t => {
  const tile = document.createElement("a");
  tile.href = `#${t.key}`;
  tile.className = `genre-tile ${t.cls}`;
  tile.dataset.testid = `tile-${t.label.toLowerCase()}`;
  tile.innerHTML = `
    <div>
      <div class="g-icon"><i class="fa-solid ${t.icon}"></i></div>
      <h3>${t.label}</h3>
    </div>
    <span class="explore">Explore <i class="fa-solid fa-arrow-right"></i></span>
  `;
  genreGrid.appendChild(tile);
});

// -------- NAV ACTIVE STATE --------
const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
  });
});

// -------- HERO CHIP TOGGLE --------
document.querySelectorAll(".hero-filters .chip").forEach(chip => {
  chip.addEventListener("click", () => {
    document.querySelectorAll(".hero-filters .chip").forEach(c => c.classList.remove("active"));
    chip.classList.add("active");
  });
});

// -------- UPI QR DROPDOWN --------
// Two modes:
//   mode-buy    : amount FIXED (game price) — input hidden, fixed row shown
//   mode-donate : amount DYNAMIC (user types) — input shown, user can change
const qrBox = document.getElementById("qrBox");
const amount = document.getElementById("amount");
const qr = document.getElementById("qr");
const payLink = document.getElementById("payLink");
const qrTitle = document.getElementById("qrTitle");
const fixedAmount = document.getElementById("fixedAmount");
const donateBtn = document.getElementById("donateBtn");

const upiID = "9818284193-2@ybl";
const payeeName = "LOKESH";

function buildUpiLink(val) {
  return `upi://pay?pa=${upiID}&pn=${encodeURIComponent(payeeName)}&am=${val || 0}&cu=INR`;
}
function updateQR(val) {
  const upiLink = buildUpiLink(val);
  qr.src = "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=" + encodeURIComponent(upiLink);
  payLink.href = upiLink;
}

const BUY_REDIRECT_URL =
"https://docs.google.com/forms/d/e/1FAIpQLScU0btf5gI0opH6r1VucoiVk65r99SVkFRvXdLj8rmMH5DwbQ/viewform?usp=dialog";

payLink.addEventListener("click", (e) => {
  if (qrBox.classList.contains("mode-buy")) {
    e.preventDefault();
    window.open(BUY_REDIRECT_URL, "_blank");
  }
});


function positionQrBox(anchor) {
  const rect = anchor.getBoundingClientRect();
  const boxW = 240 + 36;
  const boxH = 360;
  let top = rect.bottom + 10;
  let left = rect.left + rect.width / 2 - boxW / 2;
  left = Math.max(12, Math.min(left, window.innerWidth - boxW - 12));
  if (top + boxH > window.innerHeight) top = Math.max(12, rect.top - boxH - 10);
  qrBox.style.top = top + "px";
  qrBox.style.left = left + "px";
}

function setMode(mode) {
  qrBox.classList.remove("mode-buy", "mode-donate");
  qrBox.classList.add(mode);
}

let currentAnchor = null;

document.addEventListener("click", (e) => {
  // ----- BUY (fixed amount) -----
  const buy = e.target.closest(".btn-buy");
  if (buy) {
    e.stopPropagation();
    const price = buy.getAttribute("data-price") || "0";
    const name = buy.getAttribute("data-name") || "Game";
    qrTitle.textContent = `Buy "${name}"`;
    fixedAmount.textContent = `₹${price}`;
    setMode("mode-buy");
    updateQR(price);

    if (currentAnchor === buy && qrBox.classList.contains("show")) {
      qrBox.classList.remove("show"); currentAnchor = null; return;
    }
    currentAnchor = buy;
    positionQrBox(buy);
    qrBox.classList.add("show");
    return;
  }

  // ----- DONATE (dynamic amount) -----
  const donate = e.target.closest("#donateBtn");
  if (donate) {
    e.stopPropagation();
    qrTitle.textContent = "Scan & Donate 💙";
    amount.value = "";
    setMode("mode-donate");
    updateQR(0);
    amount.focus({ preventScroll: true });

    if (currentAnchor === donate && qrBox.classList.contains("show")) {
      qrBox.classList.remove("show"); currentAnchor = null; return;
    }
    currentAnchor = donate;
    positionQrBox(donate);
    qrBox.classList.add("show");
    return;
  }

  // ----- VIEW -----
 const view = e.target.closest(".btn-view");

if (view) {
    const link = view.dataset.link;

    if (link) {
        window.open(link, "_blank");
    }

    return;
}

  // ----- Click outside closes -----
  if (!e.target.closest("#qrBox")) {
    qrBox.classList.remove("show");
    currentAnchor = null;
  }
});

// Donate mode: user input updates QR live
amount.addEventListener("input", () => {
  if (qrBox.classList.contains("mode-donate")) updateQR(amount.value);
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") { qrBox.classList.remove("show"); currentAnchor = null; }
});

window.addEventListener("scroll", () => {
  if (qrBox.classList.contains("show") && currentAnchor) positionQrBox(currentAnchor);
}, { passive: true });
window.addEventListener("resize", () => {
  if (qrBox.classList.contains("show") && currentAnchor) positionQrBox(currentAnchor);
});
