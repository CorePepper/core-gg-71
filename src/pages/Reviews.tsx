import { ArrowLeft } from "lucide-react";
import Navigation from "@/components/Navigation";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { ReviewList } from "@/components/review/ReviewList";
import { ReviewItem } from "@/components/review/ReviewItem";
import { useIsMobile } from "@/hooks/use-mobile";

interface Review {
  name: string;
  rating: number;
  text: string;
  secondImage?: string;
}

const reviews: Review[] = [
  {
    name: "わずぼーん",
    rating: 5,
    text: "タッチ感度が上がって正確なプレイができる。耐久性も凄くて気に入ってる！",
    secondImage: "/core-gg-71/lovable-uploads/34f745ce-d519-4a16-a1ca-e788b0dec542.png"
  },
  {
    name: "【αD Aves べてぃ】",
    rating: 5,
    text: "毛玉が出ないのと、長持ちするためコスパが良い！",
    secondImage: "/core-gg-71/lovable-uploads/538cc242-f436-4151-bd4a-892b1dae7174.png"
  },
  {
    name: "【αD Aves らいむ】",
    rating: 5,
    text: "破れないし色々な面からみても長持ちします、ちょうどいい感じで滑って最高です。",
    secondImage: "/core-gg-71/lovable-uploads/bce2de37-351b-407e-9bc9-393652a56ab3.png"
  },
  {
    name: "【αD Aves】 ひよ",
    rating: 5,
    text: "Coreサックは破れづらく耐久性もあり、滑りが程よく締め付け感もいいです。色んな指サックを転々と使ってきましたが、一番安定して実力が出せる指サックだと思います。",
    secondImage: "/core-gg-71/lovable-uploads/228d777f-aea3-40e6-94e8-c132d49e5dd9.png"
  },
  {
    name: "【αD Aves】 たけし",
    rating: 5,
    text: "操作性が抜群で反応も素晴らしいです。普段使いにも最適で、プロのプレイヤーにもおすすめできます！",
    secondImage: "/core-gg-71/lovable-uploads/pro_player_new_icon.png"
  },
  {
    name: "プロゲーマーF",
    rating: 5,
    text: "素材の品質が素晴らしく、プレイ中のストレスが大幅に軽減されました。まさにプロ仕様の逸品です。",
    secondImage: "/core-gg-71/lovable-uploads/34f745ce-d519-4a16-a1ca-e788b0dec542.png"
  },
  {
    name: "プロゲーマーG",
    rating: 5,
    text: "長時間のプレイでも快適な使用感が続き、パフォーマンスの向上を実感できます。",
    secondImage: "/core-gg-71/lovable-uploads/34f745ce-d519-4a16-a1ca-e788b0dec542.png"
  },
  {
    name: "プロゲーマーH",
    rating: 5,
    text: "他の製品と比較しても耐久性が段違いです。コスパも考えると間違いなく最高の選択です。",
    secondImage: "/core-gg-71/lovable-uploads/34f745ce-d519-4a16-a1ca-e788b0dec542.png"
  },
  {
    name: "プロゲーマーI",
    rating: 5,
    text: "細部まで考え抜かれた設計で、プレイヤーの要望に完璧に応えてくれる製品です。",
    secondImage: "/core-gg-71/lovable-uploads/34f745ce-d519-4a16-a1ca-e788b0dec542.png"
  }
];

const Reviews = () => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const emperorReview = {
    name: "SG/αD 皇帝",
    rating: 5,
    text: "風呂上りや手汗で滑りにくい時があったけどCoreサックを使うと滑りが良いし解決。Coreサック最高！",
    secondImage: "/core-gg-71/lovable-uploads/e8c03b06-e531-4dda-83fb-fee52cf33eb9.png"
  };

  // Filter and reorder reviews for mobile
  const getOrderedReviews = () => {
    let filteredReviews = [...reviews];
    
    if (isMobile) {
      // For mobile: Add emperor at the start, keep わずぼーん second
      const wazIndex = filteredReviews.findIndex(r => r.name === "わずぼーん");
      const wazItem = filteredReviews.splice(wazIndex, 1)[0];
      return [emperorReview, wazItem, ...filteredReviews];
    }
    
    return filteredReviews;
  };

  return (
    <div className="min-h-screen bg-navy">
      <Navigation />
      <div className="container mx-auto px-4 py-20">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center px-6 py-3 bg-navy-light/80 backdrop-blur-sm text-gold hover:text-gold-light hover:bg-navy-light transition-all duration-300 rounded-lg shadow-lg mb-8 group"
        >
          <ArrowLeft className="mr-2 h-5 w-5 group-hover:-translate-x-1 transition-transform" />
          戻る
        </button>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">プロ選手の声</h1>
          <p className="text-xl text-gold">プロのプレイヤーから寄せられた感想</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto mb-16">
          <ReviewList reviews={getOrderedReviews()} />
          
          <div className="lg:w-1/3 flex flex-col items-stretch gap-8">
            <img
              src="/core-gg-71/lovable-uploads/92f6c11c-45d0-451a-b318-857720b23e06.png"
              alt="Delta Gaming Premium"
              className="w-full h-auto rounded-lg shadow-xl"
            />
            <div className="flex flex-col gap-4 w-full">
              <a
                href="https://amzn.asia/d/ghIgPyc"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 bg-gold text-navy font-semibold rounded-full hover:bg-gold-light transition-colors group"
              >
                Amazonで購入する
                <ArrowLeft className="ml-2 rotate-180 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="https://twitter.com/hashtag/Core_指サック"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 bg-twitter text-white font-semibold rounded-full hover:bg-twitter-dark transition-colors group"
              >
                購入者の声 を検索
                <ArrowLeft className="ml-2 rotate-180 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
            {!isMobile && <ReviewItem review={emperorReview} />}
          </div>
        </div>

        <div className="mt-12 text-center space-y-4">
          <div className="inline-flex items-center justify-center space-x-8">
            <div className="text-white">
              <span className="text-gold text-4xl font-bold block">30万個</span>
              <span className="text-sm">累計販売数突破</span>
            </div>
            <div className="text-white">
              <span className="text-gold text-4xl font-bold block">1位</span>
              <span className="text-sm">Amazonベストセラー</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
