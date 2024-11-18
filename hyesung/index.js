let imgs = document.querySelectorAll('img');

// 여러 이미지 URL 리스트
const imageLinks = [
    'https://www.jejunews.com/news/photo/201705/2012913_132351_5211.jpg', //문재인
    'https://img.seoul.co.kr/img/upload/2022/03/10/SSI_20220310102158_O2.jpg', //토리애비
    'https://cdn.mediatoday.co.kr/news/photo/201005/88391_96866_69.jpg', // 이명박노무현
    'https://flexible.img.hani.co.kr/flexible/normal/640/457/imgdb/resize/2018/0111/151556061834_20180111.JPG',
    'https://ojsfile.ohmynews.com/down/images/1/clubnip_100440_1[1].jpg',
    'https://sateconomy.co.kr/news/data/20151122/p179586723509101_217.jpg',
    'https://news.kbs.co.kr/data/news/2019/11/27/4332121_kp9.jpg',
    'https://www.chosun.com/resizer/v2/AG4KK3QVUFBELDPFVWQOODBPS4.jpg?auth=c8aeeaa9d3df6e79a361f34c01a770b1c5e7d190f3ee6da67fb861bff064d1b6&width=616',
    'https://cdn.bonmedia.kr/news/photo/202307/1095_1134_5332.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHRghtQFmQktmbriax4Yo-IGgSh48UbED0uA&s',
    'https://i.namu.wiki/i/3L5nsIAA8K-LVDN91dEnA9DEmGlZqkJZlh0VKSQr6VElv_tIJk-tKmH6cq8cVEBYNyayXsKiF1IKEpWgpM76DQ.webp',

    // 추가 이미지 링크
];

// 이미지를 랜덤하게 적용
imgs.forEach((img) => {
    const randomIndex = Math.floor(Math.random() * imageLinks.length);
    img.src = imageLinks[randomIndex];
})